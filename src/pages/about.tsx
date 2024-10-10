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
        <div className="grid grid-cols-4 px-12 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Compass className="mr-2 h-6 w-6" />
                Expert Navigation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>We navigate the treacherous waters of plumbing with unmatched expertise.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-6 w-6" />
                Treasure Protection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>We guard your home's plumbing treasures with our lives (and top-notch services).</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Map className="mr-2 h-6 w-6" />
                Uncharted Solutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>No plumbing problem is too mysterious for our crew to solve.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Anchor className="mr-2 h-6 w-6" />
                Anchored Reliability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>We're always here when you need us, as steady as an anchor in a storm.</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
