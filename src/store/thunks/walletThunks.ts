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
      // 1) Convert payment -> stake address if needed
      const addressDetail = await getAddressDetail(inputAddress);
      const stakeAddress = addressDetail.stake_address || inputAddress;

      // 2) Fetch main account data
      const accountInfo: AccountInfo = await getWalletInfo(stakeAddress);
      const accountTotal: AccountTotal = await getTransactionCount(stakeAddress);
      const transactions: AccountHistoryEntry[] = await getRecentTransactions(stakeAddress, 5);

      // 3) Get raw asset balances
      const assetBalances: AssetBalance[] = await getWalletAssets(stakeAddress);

      // 4) Convert each raw asset into a full metadata object
      //    Filter out lovelace to skip ADA
      const nftBalances = assetBalances.filter((ab) => ab.unit !== "lovelace");

      const metadataPromises = nftBalances.map(async (ab) => {
        try {
          
          const meta = await getAssetMetadata(ab.unit);
          
          meta.quantity = ab.quantity;
          return meta;
        } catch (err) {
          console.warn(`Failed to fetch metadata for asset: ${ab.unit}`);
          return null;
        }
      });

      const assetMetadataList = await Promise.all(metadataPromises);
      const validAssets: AssetMetadata[] = assetMetadataList.filter((item): item is AssetMetadata => item !== null);
      
      // 5) Store everything in Redux
      dispatch(setWalletAddress(stakeAddress));
      dispatch(setAccountInfo(accountInfo));
      dispatch(setAccountTotal(accountTotal));
      dispatch(setTransactions(transactions));
      dispatch(setAssets(validAssets));

    } catch (error: any) {
      dispatch(setError(error.message || "Failed to fetch wallet data"));
    } finally {
      dispatch(setLoading(false));
    }
  }
);
