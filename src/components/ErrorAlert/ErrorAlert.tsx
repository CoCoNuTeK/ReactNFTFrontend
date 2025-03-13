import React from "react";
import styles from "./ErrorAlert.module.scss";

interface ErrorAlertProps {
  message: string;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ message }) => {
  if (!message) return null;
  return (
    <div className={styles.errorAlert}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorAlert;
