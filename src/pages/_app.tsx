import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";

import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import Header from "@/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  const wallets = [new PetraWallet()];

  return (
    <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
      <Head>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/baptswap_icon_positive.svg" />
      </Head>
      <div className="relative top-20">
        <Header />
        <Component {...pageProps} />
      </div>
    </AptosWalletAdapterProvider>
  );
}
