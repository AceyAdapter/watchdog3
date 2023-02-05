import WalletTable from "@/components/Table";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import Image from "next/image";
import shield_icon from "../../../public/user-shield-solid.svg";

let Web3 = require("web3");

export const web3 = new Web3("https://bsc-dataseed1.binance.org/");

export interface IHash {
  [_id: string]: number;
}

export default function Home() {
  useEffect(() => {}, []);

  const [walletAddress, setWalletAddress] = useState(
    "0x180a8aa33dd8d78bfa5b53dd45ca81efe0b6084e"
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
      <main className="flex flex-col items-center mx-20 mt-0">
        {resultsLoaded ? (
          <div className="flex flex-row bg-[#191970]/60 rounded-xl w-full px-20 py-12">
            <div className="flex flex-col w-2/3">
              <div className="text-3xl font-bold mb-2">Wallet Report</div>
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
                <div className="text-lg font-bold">Transactions</div>
                <WalletTable
                  walletTxs={walletTxs}
                  walletAddress={walletAddress}
                />
              </div>
            </div>
            <div className="flex flex-col w-1/3 items-end">
              <div className="text-xl font-bold">Credibility Score</div>
              <div className="flex flex-row mt-2">
                <div className="p-1 px-2 bg-green-800 rounded-xl mx-2 flex-row flex">
                  <Image
                    className="mr-1 w-5"
                    src={shield_icon}
                    alt="shield icon"
                  />
                  Watchdog ID Verified
                </div>
                <div className="text-xl font-semibold">94/100</div>
              </div>
              <div className="text-lg font-semibold mt-10">Score Breakdown</div>
              <div className="mt-2">
                Watchdog ID Verified{" "}
                <span className="font-bold text-green-500">+++</span>
              </div>
              <div className="mt-2">
                No Scam Reports{" "}
                <span className="font-bold text-green-500">++</span>
              </div>
              <div className="mt-2">
                Wallet Age <span className="font-bold text-green-500">+</span>
              </div>
              <div className="mt-2">
                Interacted With Known Scam Address{" "}
                <span className="font-bold text-red-500">--</span>
              </div>
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
          <div className="w-1/2 flex flex-col items-center mt-20">
            <h1 className="text-4xl font-bold w-full text-center mt-20">
              Wallet Scanner
            </h1>
            <p className="text-xl mt-4 w-full text-center">
              Lookup an address to gain insights on it's trustworthiness based
              on on-chain data and our crowd-sourced database of known scammers.
            </p>
            <div className="w-full flex flex-row mt-5">
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
                className="w-60 text-center font-semibold text-lg mx-6 bg-white hover:bg-white/90 hover:cursor-pointer text-[#191970] px-5 py-2 rounded-xl"
              >
                Scan
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
