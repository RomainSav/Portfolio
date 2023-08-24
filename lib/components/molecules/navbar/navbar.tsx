import type { ReactElement } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { LuKeyboard } from "react-icons/lu";
import Link from "next/link";

export const Navbar = (): ReactElement => {
  return (
    <nav className="fixed z-10 px-4 top-4 max-w-xl w-full left-1/2 -translate-x-1/2">
      <div className="flex gap-4 px-4 py-2 bg-gray-200 rounded-lg border border-gray-300 shadow-xl">
        <Link href="/" className="hover:bg-gray-400 p-2 rounded-full transition-colors">
          <AiOutlineHome className="text-white w-6 h-6" />
        </Link>
        <Link href="/" className="hover:bg-gray-400 p-2 rounded-full transition-colors">
          <CgProfile className="text-white w-6 h-6" />
        </Link>
        <Link href="/projects" className="hover:bg-gray-400 p-2 rounded-full transition-colors">
          <LuKeyboard className="text-white w-6 h-6" />
        </Link>
      </div>
    </nav>
  );
};