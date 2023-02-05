import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";

import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import Header from "@/components/Header";

import localFont from "@next/font/local";

export const poppins = localFont({
  src: [
    {
      path: "../../public/font/PPNeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/PPNeueMontreal-Book.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/PPNeueMontreal-Medium.otf",
      weight: "600",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  const wallets = [new PetraWallet()];

  return (
    <div className={poppins.className}>
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
