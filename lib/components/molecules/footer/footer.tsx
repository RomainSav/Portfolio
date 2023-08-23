import Link from "next/link";
import type { ReactElement } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export const Footer = (): ReactElement => {
  return (
    <footer className="bg-gray-300 m-2 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-gray-400 rounded-full" />
          <h2 className="text-lg text-white-100 font-medium">Follow me</h2>
        </div>
        <div className="flex items-center gap-1">
          <Link href="/" className="p-2 bg-gray-400 rounded-full">
            <FaLinkedinIn className="text-white h-4 w-4" />
          </Link>
          <Link href="/" className="p-2 bg-gray-400 rounded-full">
            <FaGithub className="text-white h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
};