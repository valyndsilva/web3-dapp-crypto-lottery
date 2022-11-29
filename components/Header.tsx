import Image from "next/image";
import React from "react";
import NavButton from "./NavButton";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { useAddress, useDisconnect } from "@thirdweb-dev/react";

function Header() {
  const address = useAddress();
  // console.log(address);
  const disconnect = useDisconnect();
  return (
    <header className="grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5">
      <div className="flex items-center space-x-2">
        <Image
          src="/profile.png"
          alt="Profile Picture"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div>
          <h1 className="text-lg text-white fontbold">Valyn D&apos;Silva</h1>
          <p className="text-xs text-emerald-500 truncate">
            User:{address?.substring(0, 5)}...
            {address?.substring(address.length, address.length - 5)}
          </p>
        </div>
      </div>
      <div className="hidden md:col-span-3 md:flex items-center justify-center rounded-md">
        <div className="bg-[#0A1F1C] p-4 space-x-2">
          <NavButton title="Buy Tickets" isActive />
          <NavButton title="Logout" onClick={disconnect} />
        </div>
      </div>

      <div className="flex flex-col ml-auto text-right">
        <Bars3BottomRightIcon className="h-8 w-8 mx-auto text-white cursor-pointer" />
        <span className="md:hidden">
          <NavButton title="Logout" onClick={disconnect} />
        </span>
      </div>
    </header>
  );
}

export default Header;
