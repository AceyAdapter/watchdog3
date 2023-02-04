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
    <div>
      <Head>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/watchdog_icon.svg" />
      </Head>
      <div className="min-h-screen">
        <Header />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
