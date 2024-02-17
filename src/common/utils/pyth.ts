import {
  PythHttpClient,
  getPythClusterApiUrl,
  getPythProgramKeyForCluster,
} from '@pythnetwork/client';
import { Connection, PublicKey } from '@solana/web3.js';

const PYTHNET_CLUSTER_NAME = 'pythnet';
const connection = new Connection(getPythClusterApiUrl(PYTHNET_CLUSTER_NAME));
const pythPublicKey = getPythProgramKeyForCluster(PYTHNET_CLUSTER_NAME);
const pythClient = new PythHttpClient(connection, pythPublicKey);

export async function getCoinPrice(pythKey: string) {
  const key = new PublicKey(pythKey);
  const assetPrices = [];
  const data = await pythClient.getAssetPricesFromAccounts([key]);
  for (const symbol of data) {
    assetPrices.push(symbol.price);
  }

  return assetPrices;
}
