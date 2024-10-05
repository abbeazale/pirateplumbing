import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { useState } from "react";

interface Email {
  images?: File | null | string;
  name: string
  email: string
  issue: string
  location: Location
}

const locations = ["Vancouver", "Richmond", "Surrey", "Coquitlam", "Burnaby", "North Vancouver", "West Vancouver", "White Rock"]

export default function Home() {

  const [name, setName] = useState("");
  const [location, setLocaton] = useState("")
  const [phoneNumber, setPhoneNumber] = useState(0)
  const [email, setEmail] = useState("")
  const [issue, setIssue] = useState("")

  return (
    <div className="flex flex-col min-h-screen">
      <header className=" px-28 gap-9 py-2 font-mono justify-between lg: flex bg-white items-center">
        <Link className="flex items-center justify-center " href="#">
          <Image src="pirate.svg" alt="logo" width={120} height={120} />
        </Link>
        <Link className="text-2xl text-black font-bold hover:underline underline-offset-4" href="#">
          Services
        </Link>
        <Link className="text-2xl font-bold text-black hover:underline underline-offset-4" href="#">
          About
        </Link>
        <Link className="text-2xl font-bold hover:underline text-black underline-offset-4" href="#">
          Contact
        </Link>
        <Button className="bg-gradient-to-r from-orange-400 to-orange-600">Get a Quote</Button>
      </header>
      <main className="flex-row">
        <section className="w-full bg-cover h-min py-8 px-20 bg-[url('/broom.svg')]">
          <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
            <div className="flex flex-col space-y-4 text-center md:text-left md:w-1/2">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Your go-to Plumbing Company for your home
                </h1>
                <p className="max-w-[700px] md:text-xl">
                  Pirate Plumbing is here to solve all of your water and drainage needs.
                  Whether you need a simple repair or a complex install, we're here for you!
                </p>
                <p>
                  Pirate Plumbing sails to the rescue for all your plumbing emergencies in Vancouver.
                  From leaky pipes to full bathroom overhauls, our crew of expert plumbers is ready to
                  swashbuckle any job, big or small. We treasure prompt, professional service and quality
                  workmanship that'll make your plumbing shine like buried gold.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-gradient-to-r from-orange-400 to-orange-600">Get a Quote</Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <Image src="/plans.svg" alt="plumber" width={350} height={350} />
            </div>
          </div>
        </section>
        <section className="w-full py-10 md:py-24 lg:py-32 text-gray-900 bg-white">
          <div className=" px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Request a Service
            </h2>
            <form className="max-w-2xl mx-auto space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Name" required />
                </div>
                <div className="space-y-2 w-full">
                  <Label htmlFor="location">Location (City)</Label>
                  <div className="space-y-2">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a location" />
                      </SelectTrigger>
                      <SelectContent>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="issue">Issue/Problem</Label>
                <Textarea className="resize-none" id="issue" placeholder="Describe your plumbing issue..." required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="photos">Upload Photos (up to 5)</Label>
                <Input id="photos" type="file" multiple accept="image/*" max="5" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(123) 456-7890" required />
                </div>
              </div>
              <Button type="submit" className="w-full">Submit Request</Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 Pirate Plumbing. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
