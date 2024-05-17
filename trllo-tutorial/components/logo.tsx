import Link from "next/link";
import React from "react";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src="/trello-tile.svg" alt="Logo" height={30} width={30} />
        <p className="text-lg text-neutral-700 pb-1">Trello</p>
      </div>
    </Link>
  );
};
