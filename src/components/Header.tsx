import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-6 md:px-10 lg:px-28 gap-4 md:gap-9 py-2 font-mono bg-white flex flex-col md:flex-row items-center">
      <Link className="flex items-center justify-center mb-4 md:mb-0" href="/">
        <Image src="pirate.svg" alt="logo" width={120} height={120} />
      </Link>
      <nav className="flex-1 flex flex-col md:flex-row justify-center md:justify-end items-center space-y-2 md:space-y-0 md:space-x-8">
        <Link className="text-lg md:text-2xl font-bold text-black hover:underline underline-offset-4" href="/services">
          Services
        </Link>
        <Link className="text-lg md:text-2xl font-bold text-black hover:underline underline-offset-4" href="/about">
          About
        </Link>
        <Link className="text-lg md:text-2xl font-bold text-black hover:underline underline-offset-4" href="/contact">
          Contact
        </Link>
        <Button className="bg-gradient-to-r from-orange-400 to-orange-600">
          <Link href="/contact">Get a Quote</Link>
        </Button>
      </nav>
    </header>
  );
}
