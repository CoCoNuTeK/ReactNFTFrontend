import React from "react";
import { AccountHistoryEntry } from "@/types/accounts";
import styles from "./TransactionsList.module.scss";

interface TransactionsListProps {
  transactions: AccountHistoryEntry[];
}
const TransactionsList: React.FC<TransactionsListProps> = ({ transactions }) => {
  if (!transactions.length) {
    return <p>No recent transactions found.</p>;
  }

  return (
    <div className={styles.transactionsContainer}>
      <h2>Recent Transactions</h2>
      <table className={styles.transactionsTable}>
        <thead>
          <tr>
            <th>Epoch</th>
            <th>Amount</th>
            <th>Pool ID</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index}>
              <td>{tx.active_epoch}</td>
              <td>{tx.amount}</td>
              <td>{tx.pool_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsList;
