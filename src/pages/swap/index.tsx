import SimpleCard from "../../components/cards/SimpleCard";
import Head from "next/head";

export default function Swap() {
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
          {/* <div className="text-blue-500 text-2xl font-bold underline">Swap</div> */}
        </div>
      </main>
    </>
  );
}
