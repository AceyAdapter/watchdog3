import React, { useEffect } from "react";
import baptswap_banner from "../../public/baptswap_banner.svg";

import Image from "next/image";

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
      <Image src={baptswap_banner} alt="BaptSwap Logo" className="w-40" />
      <div className="bg-[#2dd8a7] h-fit hover:text-white">
        <WalletSelector />
      </div>
    </div>
  );
};

export default Header;
