export interface AssetMetadata {
  asset: string;
  policy_id: string;
  asset_name: string;
  fingerprint: string;
  quantity: string;
  initial_mint_tx_hash: string;
  mint_or_burn_count: number;
  onchain_metadata?: {
    name?: string;
    description?: string;
    image?: string; 
    mediaType?: string; 
    backgrounds?: string; 
    basic?: string;
    extra?: string;
  };
  onchain_metadata_standard?: string;
  onchain_metadata_extra?: string;
}


export interface AssetBalance {
  unit: string;
  quantity: string;
}


export interface AssetHistoryEntry {
  tx_hash: string;
  amount: string;
  action: "minted" | "burned";
}


export interface AssetAddress {
  address: string;
  quantity: string;
}
  