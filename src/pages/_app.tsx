import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";

export default function App({ Component, pageProps }: AppProps) {
  const wallets = [new PetraWallet()];

  return (
    <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
      <Component {...pageProps} />
    </AptosWalletAdapterProvider>
  );
}
