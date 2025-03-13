import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchWalletData } from "@/store/thunks/walletThunks";
import { AppDispatch  } from "@/store/store";
import styles from "./SearchBar.module.scss";

const DEFAULT_WALLET = process.env.NEXT_PUBLIC_DEFAULT_WALLET_ADDRESS || "";

const SearchBar: React.FC = () => {
const dispatch = useDispatch<AppDispatch>();
  const [addressInput, setAddressInput] = useState(DEFAULT_WALLET);


  useEffect(() => {
    if (DEFAULT_WALLET) {
      dispatch(fetchWalletData(DEFAULT_WALLET));
    }
  }, [dispatch]);
  
  const handleSearch = () => {
    // Dispatch the thunk to fetch wallet data
    dispatch(fetchWalletData(addressInput));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddressInput(e.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Enter Cardano wallet address"
        value={addressInput}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
