import React, { useEffect, useState } from "react";
import watchdog_banner from "../../public/watchdog_logo.svg";

import Image from "next/image";
import Link from "next/link";

import ThemeButton from "./buttons/ThemeButton";
import OtherMenuButton from "./buttons/OtherMenuButton";

const Header = () => {
  return (
    <div className="w-full h-25 border-b border-b-transparent flex flex-row justify-between items-center p-5 px-6">
      <div className="flex flex-row items-center p-4">
        <Link href="/">
          <Image src={watchdog_banner} alt="Watchdog Logo" className="w-48" />
        </Link>
      </div>
      <div className="h-fit flex flex-row justify-between w-auto space-x-4 h-full">
        <div className="flex flex-row items-center">
          <Link href="/verify">
            <div className="mx-4 hover:bg-[#191970]/30 p-2 hover:rounded-2xl hover:cursor-pointer">
              Watchdog ID
            </div>
          </Link>
          <Link href="/report">
            <div className="mx-4 hover:bg-[#191970]/30 p-2 hover:rounded-2xl hover:cursor-pointer">
              Report Scam
            </div>
          </Link>
          <Link href="/scanner">
            <div className="mx-4 hover:bg-[#191970]/30 p-2 hover:rounded-2xl hover:cursor-pointer">
              Wallet Scanner
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
