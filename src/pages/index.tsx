import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>BaptSwap | Home</title>
      </Head>
      <main>
        <a href="swap" className="text-blue-500 text-2xl font-bold underline">
          Hello
        </a>
      </main>
    </>
  );
}
