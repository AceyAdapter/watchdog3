import SimpleCard from "../../components/cards/SimpleCard";
import Head from "next/head";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { AptosClient, Types } from "aptos";

export const DEVNET_NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";

export default function Swap() {
  const aptosClient = new AptosClient(DEVNET_NODE_URL, {
    WITH_CREDENTIALS: false,
  });

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

  const onSignAndSubmitTransaction = async () => {
    const payload: Types.TransactionPayload = {
      type: "entry_function_payload",
      function: "0x1::coin::transfer",
      type_arguments: ["0x1::aptos_coin::AptosCoin"],
      arguments: [account?.address, 1], // 1 is in Octas
    };
    try {
      const response = await signAndSubmitTransaction(payload);
      // if you want to wait for transaction
      await aptosClient.waitForTransaction(response?.hash || "");
      console.log(response?.hash);
    } catch (error: any) {
      console.log("error", error);
    }
  };

  return (
    <>
      <Head>
        <title>BaptSwap | Swap</title>
      </Head>
      <main className="">
        <div className="flex flex-col justify-center items-center">
          <SimpleCard
            title="Swap"
            content={
              <div className="flex flex-col space-y-3">
                <input
                  type="text"
                  placeholder="0.0"
                  className="bg-off_gray transition ease-in-out w-full rounded-xl h-auto p-5"
                />
                <input
                  type="text"
                  placeholder="0.0"
                  className="bg-off_gray transition ease-in-out w-full rounded-xl h-auto p-5"
                />
                <button className="font-bold btn bg-bapt_green rounded-xl h-auto p-3 text-black">
                  Connect Wallet
                </button>
              </div>
            }
          />
        </div>
      </main>
    </>
  );
}
