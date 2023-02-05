import Head from "next/head";
import { Poppins } from "@next/font/google";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Watchdog3 | Home</title>
      </Head>
      <main className="flex flex-col items-center">
        <h1 className="text-7xl font-bold w-1/2text-center mt-20">
          The web3 directory
        </h1>
        <p className="text-xl mt-5 w-1/2 text-center">
          An oracle of truth helping you stay safe on the decentralized web.
        </p>
        <div className="mt-20 flex flex-row justify-center">
          <div className="font-semibold mx-6 bg-white hover:bg-white/90 hover:cursor-pointer text-[#191970] text-lg px-5 py-2 rounded-xl">
            Scan a wallet
          </div>
          <div className="font-semibold mx-6 bg-[#191970] hover:bg-[#191970]/80 hover:cursor-pointer text-white text-lg px-5 py-2 rounded-xl">
            Report a scam
          </div>
        </div>
      </main>
    </div>
  );
}
