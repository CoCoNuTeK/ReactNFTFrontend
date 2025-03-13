import React from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import SearchBar from "@/components/SearchBar/SearchBar";
import WalletInfo from "@/components/WalletInfo/WalletInfo";
import NftGallery from "@/components/NftGallery/NftGallery";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import ErrorAlert from "@/components/ErrorAlert/ErrorAlert";

export default function Home() {
  const { loading, error, assets, accountInfo, accountTotal } = useSelector(
    (state: RootState) => state.wallet
  );

  return (
    <>
      <Head>
        <title>Cardano Wallet Explorer</title>
        <meta name="description" content="Cardano wallet explorer" />
      </Head>
      <main className="container">
        <h1 className="title">Cardano Wallet Explorer</h1>

        {/* 1) Search Bar */}
        <SearchBar />

        {/* 2) Show Loading or Error Messages */}
        {loading && <LoadingSpinner isLoading={loading} />}
        {error && <ErrorAlert message={error} />}

        {/* 3) Show Wallet Info & NFT Gallery ONLY if no loading/error */}
        {!loading && !error && (
          <>
            <WalletInfo accountInfo={accountInfo} accountTotal={accountTotal} />
            <NftGallery assets={assets} />
          </>
        )}
      </main>
    </>
  );
}
