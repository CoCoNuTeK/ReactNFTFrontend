import React from "react";
import Image from "next/image";
import { AssetMetadata } from "@/types/assets";
import styles from "./NftGallery.module.scss";

const getImageUrl = (image?: string | undefined): string => {
  if (!image || typeof image !== "string") return "/placeholder.png";
  return image.startsWith("ipfs://")
    ? `https://ipfs.io/ipfs/${image.replace("ipfs://", "")}`
    : image;
};

// Define Props Type
interface NftGalleryProps {
  assets: AssetMetadata[];
}

const NftGallery: React.FC<NftGalleryProps> = ({ assets }) => {
  if (!assets || assets.length === 0) {
    return <p className={styles.noNftsMessage}>No NFTs found in this wallet.</p>;
  }

  return (
    <div className={styles.nftGallery}>
      <h2 className={styles.galleryTitle}>NFT Gallery</h2>
      <div className={styles.nftList}>
        {assets.map((asset) => (
          <div key={asset.asset} className={styles.nftCard}>
            <Image
              src={getImageUrl(asset.onchain_metadata?.image)}
              alt={asset.onchain_metadata?.name || "NFT Image"}
              className={styles.nftImage}
              width={300}
              height={300}
              style={{ objectFit: 'cover' }}
            />
            <h3 className={styles.nftName}>{asset.onchain_metadata?.name ?? "Unnamed NFT"}</h3>
            <p className={styles.nftQuantity}>Quantity: {asset.quantity}</p>
            <p className={styles.nftDescription}>
              {asset.onchain_metadata?.description || "No description available."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NftGallery;
