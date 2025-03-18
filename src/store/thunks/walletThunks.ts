import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAddressDetail } from "@/utils/api/addresses";
import {
  getWalletInfo,
  getTransactionCount,
  getRecentTransactions,
  getWalletAssets,
} from "@/utils/api/accounts";
import { getAssetMetadata } from "@/utils/api/assets";

import { AppDispatch, RootState } from "../store";
import {
  setLoading,
  setError,
  setWalletAddress,
  setAccountInfo,
  setAccountTotal,
  setTransactions,
  setAssets,
} from "../slices/walletSlice";

import { AccountInfo, AccountTotal, AccountHistoryEntry } from "@/types/accounts";
import { AssetBalance, AssetMetadata } from "@/types/assets";

export const fetchWalletData = createAsyncThunk<
  void,
  string,
  { dispatch: AppDispatch; state: RootState }
>(
  "wallet/fetchWalletData",
  async (inputAddress, { dispatch }) => {
    dispatch(setLoading(true));
    dispatch(setError(null));

    try {
      // 1) Convert payment address to stake address if needed
      const addressDetail = await getAddressDetail(inputAddress);
      const stakeAddress = addressDetail.stake_address || inputAddress;

      // 2) Fetch main account data
      const [accountInfo, accountTotal, transactions, assetBalances] = await Promise.all([
        getWalletInfo(stakeAddress),
        getTransactionCount(stakeAddress),
        getRecentTransactions(stakeAddress, 5),
        getWalletAssets(stakeAddress),
      ]);

      // 3) Filter out ADA (lovelace) and fetch metadata for NFTs
      const nftBalances = assetBalances.filter((ab) => ab.unit !== "lovelace");

      const metadataPromises = nftBalances.map(async (ab) => {
        try {
          const meta = await getAssetMetadata(ab.unit);
          return { ...meta, quantity: ab.quantity };
        } catch {
          console.warn(`Failed to fetch metadata for asset: ${ab.unit}`);
          return null;
        }
      });

      const assetMetadataList = await Promise.all(metadataPromises);
      const validAssets: AssetMetadata[] = assetMetadataList.filter(
        (item): item is AssetMetadata => item !== null
      );

      // 4) Store everything in Redux
      dispatch(setWalletAddress(stakeAddress));
      dispatch(setAccountInfo(accountInfo));
      dispatch(setAccountTotal(accountTotal));
      dispatch(setTransactions(transactions));
      dispatch(setAssets(validAssets));
    } catch (error: unknown) {
      dispatch(setError(error instanceof Error ? error.message : "Failed to fetch wallet data"));
    } finally {
      dispatch(setLoading(false));
    }
  }
);
