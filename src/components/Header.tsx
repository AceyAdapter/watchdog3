import React, { useEffect, useState } from "react";
import baptswap_banner from "../../public/baptswap_banner.svg";

import Image from "next/image";
import Link from "next/link";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import ThemeButton from "./buttons/ThemeButton";
import OtherMenuButton from "./buttons/OtherMenuButton";

const Header = () => {
  const {
    connect,
    account,
    network,
    connected,
    disconnect,
    wallet,
    wallets,
    signAndSubmitTransaction,
    signTransaction,
    signMessage,
    signMessageAndVerify,
  } = useWallet();

  // Check if wallet is connected. If so, connect.
  useEffect(() => {}, []);

  return (
    <div className="fixed top-0 w-full h-25 border-b border-b-transparent flex flex-row justify-between items-center p-5 px-6">
      <div className="flex flex-row items-center">
        <Link href="/">
          <Image src={baptswap_banner} alt="BaptSwap Logo" className="w-40" />
        </Link>
        <div className="flex flex-row items-center mx-5">
          <Link href="/swap">
            <div className="mx-4 font-semibold hover:text-[#2dd8a7] hover:cursor-pointer">
              Swap
            </div>
          </Link>
          <Link href="/pools">
            <div className="mx-4 font-semibold hover:text-[#2dd8a7] hover:cursor-pointer">
              Pools
            </div>
          </Link>
          <Link href="/bridge">
            <div className="mx-4 font-semibold hover:text-[#2dd8a7] hover:cursor-pointer">
              Bridge
            </div>
          </Link>
        </div>
      </div>
      <div className="h-fit flex flex-row justify-between w-auto space-x-4 h-full">
        <ThemeButton />
        <WalletSelector />
        <OtherMenuButton />
      </div>
    </div>
  );
};

export default Header;
