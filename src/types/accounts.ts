import { AssetBalance } from "./assets";

// Represents general wallet account information
export interface AccountInfo {
    stake_address: string;
    active: boolean;
    active_epoch: number;
    controlled_amount: string;
    rewards_sum: string;
    withdrawals_sum: string;
    reserves_sum: string;
    treasury_sum: string;
    withdrawable_amount: string;
    pool_id?: string;
    drep_id?: string;
  }
  
  // Represents the total balance and transaction count of a wallet
  export interface AccountTotal {
    stake_address: string;
    received_sum: AssetBalance[];
    sent_sum: AssetBalance[];
    tx_count: number;
  }
  
  // Represents a single transaction history entry
  export interface AccountHistoryEntry {
    active_epoch: number;
    amount: string;
    pool_id: string;
  }
  