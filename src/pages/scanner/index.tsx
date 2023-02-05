import WalletTable from "@/components/Table";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";

let Web3 = require("web3");

export const web3 = new Web3("https://bsc-dataseed1.binance.org/");

export interface IHash {
  [_id: string]: number;
}

export default function Home() {
  useEffect(() => {}, []);

  const [walletAddress, setWalletAddress] = useState(
    "0xab3c368a1C3655F782513fe73f08E37349B8F9eE"
  );
  const [walletBalance, setWalletBalance] = useState(0);
  const [walletTxs, setWalletTxs] = useState<any[]>([]);
  const [resultsLoaded, setResultsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function lookupWallet(address: string) {
    try {
      setIsLoading(true);

      fetch(
        `https://api.bscscan.com/api?module=account&action=balance&address=${walletAddress}&apikey=${process.env.NEXT_PUBLIC_BSCSCAN}`
      )
        .then((res) => res.json())
        .then((data) => {
          setWalletBalance(data.result);
        });

      fetch(
        `https://api.bscscan.com/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&page=1&offset=10000&sort=asc&apikey=${process.env.NEXT_PUBLIC_BSCSCAN}`
      )
        .then((res) => res.json())
        .then((data) => {
          data = data.result;
          setWalletTxs(data);
          setResultsLoaded(true);
          setIsLoading(false);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Head>
        <title>Watchdog3 | Scanner</title>
      </Head>
      <main className="flex flex-col mt-10">
        <div className="flex flex-col items-center">
          {resultsLoaded ? (
            <div className="bg-[#191970]/60 rounded-xl w-full px-20 py-10">
              <div className="text-3xl font-bold my-4">Wallet Report</div>
              <div className="">
                <span className="font-bold">Address: </span>
                {walletAddress}
              </div>
              <div className="">
                <span className="font-bold">Balance: </span>
                {(walletBalance / 10 ** 18).toFixed(4)} BNB
              </div>
              <div className="">
                <span className="font-bold">Total Transactions: </span>
                {walletTxs?.length.toLocaleString()}
              </div>
              <div className="w-fit mt-6">
                <div className="text-lg font-bold">Wallet Network</div>
                <WalletTable
                  walletTxs={walletTxs}
                  walletAddress={walletAddress}
                />
              </div>
            </div>
          ) : isLoading ? (
            <div className="flex flex-col items-center justify-center h-[500px]">
              <Triangle
                height="80"
                width="80"
                color="#fff"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                visible={true}
              />
              <div className="mt-4 text-lg font-semibold">
                Fetching on-chain data...
              </div>
            </div>
          ) : (
            <div className="w-1/2 mt-40">
              <div className="text-xl font-semibold">Wallet Scanner</div>
              <div className="w-full flex flex-row">
                <input
                  className="text-white bg-transparent border-b focus:outline-none w-full"
                  type="text"
                  placeholder="Enter an address..."
                  onChange={(event) => setWalletAddress(event.target.value)}
                  value={walletAddress}
                />
                <div
                  onClick={() => {
                    lookupWallet(walletAddress);
                  }}
                  className="w-60 text-center font-semibold mx-6 bg-white hover:bg-white/90 hover:cursor-pointer text-[#191970] px-5 py-2 rounded-xl"
                >
                  Generate Report
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
