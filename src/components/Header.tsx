import React, { useEffect } from "react";
import baptswap_banner from "../../public/baptswap_banner.svg";

import Image from "next/image";
import Link from "next/link";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";

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
    <div className="fixed top-0 w-full h-20 border-b border-b-[#162235] bg-[#0e111d] flex flex-row justify-between items-center px-2">
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
      <div className="h-fit">
        <WalletSelector />
      </div>
    </div>
  );
};

export default Header;
