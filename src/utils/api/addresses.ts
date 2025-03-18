import apiClient from "../apiClient";
import { AddressDetail } from "@/types/addresses";
import { ApiError } from "@/types/api";


export const getAddressDetail = async (address: string): Promise<AddressDetail> => {
  try {
    const response = await apiClient.get(`/addresses/${address}`);
    return response.data as AddressDetail;
  } catch (error: unknown) {
    const apiError = error as ApiError;
    throw new Error(apiError.response?.data?.message || apiError.message);
  }
};
