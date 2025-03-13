import apiClient from "../apiClient";
import { AssetMetadata, AssetHistoryEntry, AssetAddress } from "@/types/assets";

export const getAssetMetadata = async (assetId: string): Promise<AssetMetadata> => {
  try {
    const response = await apiClient.get(`/assets/${assetId}`);
    return response.data as AssetMetadata;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
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

export const getAssetAddresses = async (assetId: string): Promise<AssetAddress[]> => {
  try {
    const response = await apiClient.get(`/assets/${assetId}/addresses`);
    return response.data as AssetAddress[]; 
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};
