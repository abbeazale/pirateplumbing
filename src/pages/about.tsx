import Header from "@/components/Header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
                Our Story
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Founded on the principles of integrity, reliability, and a touch of adventure, Pirate
                Plumbing was established to meet the diverse needs of Vancouver’s plumbing requirements.
                Our crew is passionate about delivering high-quality service while adding a bit of swashbuckling
                flair to your experience.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-6 w-6" />
                Our Crew
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">At Pirate Plumbing, we are proud to employ a skilled and dedicated team
                of licensed plumbers who bring years of experience to every job. Each member of our crew
                is not only adept at handling complex plumbing issues but also committed to upholding our
                high standards of customer satisfaction. We believe in treating every job—no matter how big
                or small—with the utmost professionalism and attention to detail.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Map className="mr-2 h-6 w-6" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Our mission is simple: to provide Vancouver with reliable, efficient, and friendly plumbing services,
                all while embracing a unique and memorable pirate theme. We strive to exceed our customers' expectations
                with every service call, ensuring your home or business remains in excellent working order.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Anchor className="mr-2 h-6 w-6" />
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Ready to set sail on a worry-free plumbing journey? Contact us today for a free quote or to schedule an appointment. Our friendly crew is here to assist you with all your plumbing needs and ensure your experience is smooth and enjoyable.
                Thank you for considering Pirate Plumbing—where every service is a treasure! </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-x-4 p-12">
          <Button className="bg-gradient-to-r from-orange-400 to-orange-600">
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
