import apiClient from "../apiClient";
import { AccountInfo, AccountTotal, AccountHistoryEntry } from "@/types/accounts";
import { AssetBalance } from "@/types/assets";
import { ApiError } from "@/types/api";

export const getWalletInfo = async (stakeAddress: string): Promise<AccountInfo> => {
  try {
    const response = await apiClient.get(`/accounts/${stakeAddress}`);
    return response.data as AccountInfo;
  } catch (error: unknown) {
    const apiError = error as ApiError;
    throw new Error(apiError.response?.data?.message || apiError.message);
  }
};

export const getTransactionCount = async (stakeAddress: string): Promise<AccountTotal> => {
  try {
    const response = await apiClient.get(`/accounts/${stakeAddress}/addresses/total`);
    return response.data as AccountTotal;
  } catch (error: unknown) {
    const apiError = error as ApiError;
    throw new Error(apiError.response?.data?.message || apiError.message);
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
  } catch (error: unknown) {
    const apiError = error as ApiError;
    throw new Error(apiError.response?.data?.message || apiError.message);
  }
};

export const getWalletAssets = async (stakeAddress: string): Promise<AssetBalance[]> => {
  try {
    const response = await apiClient.get(`/accounts/${stakeAddress}/addresses/assets`);
    return response.data as AssetBalance[];
  } catch (error: unknown) {
    const apiError = error as ApiError;
    throw new Error(apiError.response?.data?.message || apiError.message);
  }
};
