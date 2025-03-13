import apiClient from "../apiClient";
import { AccountInfo, AccountTotal, AccountHistoryEntry } from "@/types/accounts";
import { AssetBalance } from "@/types/assets";

export const getWalletInfo = async (stakeAddress: string): Promise<AccountInfo> => {
  try {
    const response = await apiClient.get(`/accounts/${stakeAddress}`);
    return response.data as AccountInfo;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const getTransactionCount = async (stakeAddress: string): Promise<AccountTotal> => {
  try {
    const response = await apiClient.get(`/accounts/${stakeAddress}/addresses/total`);
    return response.data as AccountTotal;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const getRecentTransactions = async (
  stakeAddress: string,
  count = 5
): Promise<AccountHistoryEntry[]> => {
  try {
    const response = await apiClient.get(`/accounts/${stakeAddress}/history`, {
      params: { count },
    });
    return response.data as AccountHistoryEntry[];
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const getWalletAssets = async (stakeAddress: string): Promise<AssetBalance[]> => {
  try {
    const response = await apiClient.get(`/accounts/${stakeAddress}/addresses/assets`);
    return response.data as AssetBalance[];
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};
