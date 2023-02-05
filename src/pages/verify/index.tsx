import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Watchdog3 | Verify</title>
      </Head>
      <main>
        <a href="swap" className="text-blue-500 text-2xl font-bold underline">
          Verify
        </a>
      </main>
    </>
  );
}