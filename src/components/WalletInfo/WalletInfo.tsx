import React from "react";
import { AccountInfo, AccountTotal } from "@/types/accounts";
import styles from "./WalletInfo.module.scss";

interface WalletInfoProps {
  accountInfo: AccountInfo | null;
  accountTotal: AccountTotal | null;
}

const formatAda = (lovelace: string | null | undefined) => {
  if (!lovelace) return "0.00";
  return (parseFloat(lovelace) / 1_000_000).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,
  });
};

const WalletInfo: React.FC<WalletInfoProps> = ({ accountInfo, accountTotal }) => {
  if (!accountInfo) {
    return <p className={styles.errorMessage}>No wallet data. Please search a wallet address.</p>;
  }

  return (
    <div className={styles.walletInfo}>
      <h2>Wallet Info</h2>

      <div className={styles.infoContainer}>
        <div className={styles.infoRow}>
          <span className={styles.label}>Stake Address:</span>
          <span className={styles.value}>{accountInfo.stake_address}</span>
        </div>

        <div className={styles.infoRow}>
          <span className={styles.label}>Active:</span>
          <span className={styles.value}>{accountInfo.active ? "✅ Yes" : "❌ No"}</span>
        </div>

        <div className={styles.infoRow}>
          <span className={styles.label}>Controlled ADA:</span>
          <span className={styles.value}>{formatAda(accountInfo.controlled_amount)} ADA</span>
        </div>

        <div className={styles.infoRow}>
          <span className={styles.label}>Withdrawable Amount:</span>
          <span className={styles.value}>{formatAda(accountInfo.withdrawable_amount)} ADA</span>
        </div>

        {accountTotal && (
          <div className={styles.infoRow}>
            <span className={styles.label}>Transaction Count:</span>
            <span className={styles.value}>{accountTotal.tx_count.toLocaleString()}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletInfo;
