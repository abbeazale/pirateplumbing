import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Anchor, Droplet, Wrench, Waves, Thermometer, Hammer, AlertTriangle, WrenchIcon, } from 'lucide-react'
import Header from '@/components/Header'
export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-black tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Plumbing Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: AlertTriangle, title: "Emergency Repairs", description: "When plumbing disasters strike, our crew will swoop in faster than you can hoist the Jolly Roger!" },
                { icon: Droplet, title: "Leak Detection & Repair", description: "We'll find and fix those sneaky leaks faster than you can say 'Davy Jones' locker!'" },
                { icon: WrenchIcon, title: "Pipe Installation & Replacement", description: "From copper to PEX, we'll lay your pipes with the precision of a master cartographer." },
                { icon: Waves, title: "Drain Cleaning & Maintenance", description: "We'll make your drains flow as smoothly as a pirate ship on calm seas." },
                { icon: Thermometer, title: "Water Heater Services", description: "Keep your showers as hot as the Caribbean sun with our water heater expertise." },
                { icon: Waves, title: "Fixture Installation", description: "We'll outfit your home with fixtures as sturdy as a pirate's peg leg!" },
                { icon: Wrench, title: "General Plumbing Repairs", description: "No job too big or small for our crew of skilled plumbing buccaneers." },
                { icon: Hammer, title: "Complete Plumbing Overhauls", description: "Ready to give your plumbing system a complete makeover? We'll transform it like buried treasure!" },
                { icon: Anchor, title: "Preventative Maintenance", description: "Keep your plumbing shipshape with our regular maintenance services." },
              ].map((service, index) => (
                <Card key={index} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <service.icon className="mr-2 h-6 w-6 text-orange-600" />
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-black tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Why Choose Pirate Plumbing?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "24/7 Emergency Service", description: "We're always on deck, ready to sail to your rescue." },
                { title: "Licensed & Insured Crew", description: "Our plumbers are as certified as they come, savvy?" },
                { title: "Fair & Transparent Pricing", description: "No hidden costs - we're as honest as a pirate's parrot." },
                { title: "Satisfaction Guaranteed", description: "We'll make it right, or walk the plank!" },
              ].map((feature, index) => (
                <Card key={index} className="bg-white">
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('/ocean-waves.svg')] bg-cover text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Ready to Set Sail on Your Next Plumbing Adventure?
            </h2>
            <p className="max-w-[700px] mx-auto mb-8">
              Whether you're facing a leaky faucet or need a complete plumbing overhaul, our team is equipped to handle it with the precision of a seasoned navigator and the care of a trusted first mate.
            </p>
            <Button className="bg-white text-orange-600 hover:bg-orange-100">Contact Our Crew</Button>
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
