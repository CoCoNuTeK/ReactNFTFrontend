import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_BLOCKFROST_API_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_BLOCKFROST_API_KEY;

if (!API_BASE_URL || !API_KEY) {
  console.error("❌ Missing Blockfrost API credentials in .env.local");
}

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    project_id: API_KEY,
  },
});

export default apiClient;
