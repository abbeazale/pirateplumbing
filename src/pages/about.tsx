import Header from "@/components/Header";
import Image from "next/image";
import { Button } from "@react-email/components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Anchor, Compass, Map, Shield } from 'lucide-react'

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-mono">
      <Header />
      <main className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center pt-24 text-center">
          <h1 className="font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl/none"> About Pirate Plumbing</h1>
          <p className="max-w-[700px] py-8 md:text-xl text-gray-700">
          Welcome to Pirate Plumbing, where our commitment to exceptional service and nautical charm come together! 
          Based in Vancouver, BC, we pride ourselves on providing top-notch plumbing solutions with a unique, pirate-inspired twist.
          </p>
        </div>
      </main>
    </div>
  )
}
