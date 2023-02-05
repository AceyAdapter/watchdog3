import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Watchdog3 | Report</title>
      </Head>
      <main className="flex flex-col items-center">
        {isOpen ? (
          <div className="flex flex-col bg-[#191970]/60 rounded-xl w-full px-20 py-12">
            <div className="text-3xl font-bold mb-2">Report Scam</div>
            <label className="font-semibold">Wallet Address</label>
            <input
              className="p-2 rounded-lg text-black mb-5"
              type="text"
              placeholder="Enter a valid wallet address"
            />
            <label className="font-semibold">Scam Type</label>
            <div>
              <input className="mx-2" type="radio" name="type" id="phishing" />
              <label>Phishing</label>
            </div>
            <div>
              <input className="mx-2" type="radio" name="type" id="" />
              <label>Scam Contract (honeypot, rug pull, etc.)</label>
            </div>
            <div>
              <input className="mx-2" type="radio" name="type" id="" />
              <label>Other</label>
            </div>
            <label className="font-semibold mt-5">Description</label>
            <input
              className="p-2 rounded-lg text-black mb-5"
              type="text"
              placeholder="Please enter a detailed description of the scam"
            />
            <label className="font-semibold">Twitter Username</label>
            <input
              className="p-2 rounded-lg text-black mb-5"
              type="text"
              placeholder="@example"
            />
            <label className="font-semibold">Telegram Username</label>
            <input
              className="p-2 rounded-lg text-black mb-5"
              type="text"
              placeholder="@example"
            />
            <label className="font-semibold">Discord Username</label>
            <input
              className="p-2 rounded-lg text-black mb-5"
              type="text"
              placeholder="@example"
            />
            <div className="w-full flex flex-row justify-center">
              <div className="mt-5 w-42 font-semibold mx-6 bg-white hover:bg-white/90 hover:cursor-pointer text-[#191970] text-lg px-5 py-2 rounded-xl">
                Submit Report
              </div>
            </div>
          </div>
        ) : (
          <div className="w-1/2 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-center mt-20">
              Have you witnessed a on-chain scam?
            </h1>
            <p className="text-xl mt-5 text-center">
              Contribute to our crowd-sourced directory to expose known scammers
              and keep everyone safe.
            </p>
            <div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="mt-10 w-32 font-semibold mx-6 bg-white hover:bg-white/90 hover:cursor-pointer text-[#191970] text-lg px-5 py-2 rounded-xl"
            >
              File Report
            </div>
          </div>
        )}
      </main>
    </>
  );
}
