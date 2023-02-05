import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Watchdog3 | Verify</title>
      </Head>
      <main className="flex flex-col items-center">
        <h1 className="text-4xl font-bold w-1/2 text-center mt-20">
          Get Your Watchdog ID
        </h1>
        <p className="text-xl mt-5 w-1/2 text-center">
          Verify your information with us and earn a Watchdog ID that instills
          trust without compromising your on-chain identity.
        </p>
        <div className="mt-10 font-semibold mx-6 bg-white hover:bg-white/90 hover:cursor-pointer text-[#191970] text-lg px-5 py-2 rounded-xl">
          Apply Now
        </div>
      </main>
    </>
  );
}
