import apiClient from "../apiClient";
import { AddressDetail } from "@/types/addresses";


export const getAddressDetail = async (address: string): Promise<AddressDetail> => {
  try {
    const response = await apiClient.get(`/addresses/${address}`);
    return response.data as AddressDetail;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};
