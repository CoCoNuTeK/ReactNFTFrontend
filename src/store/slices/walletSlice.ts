import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AccountInfo,
  AccountTotal,
  AccountHistoryEntry
} from "@/types/accounts";
import { AssetMetadata } from "@/types/assets";

interface WalletState {
  loading: boolean;
  error: string | null;
  walletAddress: string;
  accountInfo: AccountInfo | null;
  accountTotal: AccountTotal | null;
  transactions: AccountHistoryEntry[]; 
  assets: AssetMetadata[];              
}

// 🚀 Initial State
const initialState: WalletState = {
  loading: false,
  error: null,
  walletAddress: "",
  accountInfo: null,
  accountTotal: null,
  transactions: [],
  assets: [],
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    
    setWalletAddress(state, action: PayloadAction<string>) {
      state.walletAddress = action.payload;
    },

    
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },

    
    setAccountInfo(state, action: PayloadAction<AccountInfo>) {
      state.accountInfo = action.payload;
    },
    setAccountTotal(state, action: PayloadAction<AccountTotal>) {
      state.accountTotal = action.payload;
    },
    setTransactions(state, action: PayloadAction<AccountHistoryEntry[]>) {
      state.transactions = action.payload;
    },
    setAssets(state, action: PayloadAction<AssetMetadata[]>) {
      state.assets = action.payload;
    },
  },
});

export const {
  setWalletAddress,
  setLoading,
  setError,
  setAccountInfo,
  setAccountTotal,
  setTransactions,
  setAssets,
} = walletSlice.actions;

export default walletSlice.reducer;
