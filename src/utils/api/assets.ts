import apiClient from "../apiClient";
import { AssetMetadata, AssetHistoryEntry, AssetAddress } from "@/types/assets";
import { ApiError } from "@/types/api";

export const getAssetMetadata = async (asset: string): Promise<AssetMetadata> => {
  try {
    const response = await apiClient.get(`/assets/${asset}`);
    return response.data as AssetMetadata;
  } catch (error: unknown) {
    const apiError = error as ApiError;
    throw new Error(apiError.response?.data?.message || apiError.message);
  }
};

export const getAssetHistory = async (assetId: string, count = 5): Promise<AssetHistoryEntry[]> => {
  try {
    const response = await apiClient.get(`/assets/${assetId}/history`, {
      params: { count },
    });
    return response.data as AssetHistoryEntry[]; 
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const getAssetTransactions = async (asset: string): Promise<AssetMetadata[]> => {
  try {
    const response = await apiClient.get(`/assets/${asset}/transactions`);
    return response.data as AssetMetadata[];
  } catch (error: unknown) {
    const apiError = error as ApiError;
    throw new Error(apiError.response?.data?.message || apiError.message);
  }
};

export const getAssetAddresses = async (asset: string): Promise<AssetAddress[]> => {
  try {
    const response = await apiClient.get(`/assets/${asset}/addresses`);
    return response.data as AssetAddress[]; 
  } catch (error: unknown) {
    const apiError = error as ApiError;
    throw new Error(apiError.response?.data?.message || apiError.message);
  }
};
