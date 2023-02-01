import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";

import baptswap_banner from "../../public/baptswap_banner.svg";
import baptswap_icon from "../../public/baptswap_icon.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>BaptSwap</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/baptswap_icon.svg" />
      </Head>
      <main className="relative top-20">
        <Header />
        <div className="text-blue-500 text-2xl font-bold underline">Hello</div>
      </main>
    </>
  );
}
