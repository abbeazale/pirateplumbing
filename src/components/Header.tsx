import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";




export default function Header() {
    return(
        <header className=" px-28 gap-9 py-2 font-mono justify-between lg: flex bg-white items-center">
        <Link className="flex items-center justify-center " href="/">
          <Image src="pirate.svg" alt="logo" width={120} height={120} />
        </Link>
        <Link className="text-2xl text-black font-bold hover:underline underline-offset-4" href="/services">
          Services
        </Link>
        <Link className="text-2xl font-bold text-black hover:underline underline-offset-4" href="/about">
          About
        </Link>
        <Link className="text-2xl font-bold hover:underline text-black underline-offset-4" href="/contact">
          Contact
        </Link>
        <Button ref="/contact"  className="bg-gradient-to-r from-orange-400 to-orange-600">Get a Quote</Button>
      </header>
    )
}