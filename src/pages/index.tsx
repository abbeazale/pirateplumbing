import Head from "next/head";
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
import Header from "@/components/Header";

interface Message {
  images?: File[] | null | string[];
  name: string
  email: string
  issue: string
  location: string;
  phoneNumber: string;
};


function toBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}


export default function Home() {

  const [message, setMessage] = useState<Message>({
    images: null,
    name: "",
    email: "",
    issue: "",
    location: "",
    phoneNumber: ""
  });
  const [isSuccess, setIsSuccess] = useState(false)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files).slice(0, 5); // Limit to 5 images
      setMessage(prevMessage => ({ ...prevMessage, images: fileArray }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let imagesBase64: string[] = [];

    // Convert images to base64 strings
    if (message.images && message.images.length > 0) {
      imagesBase64 = await Promise.all(
        message.images.map(async (image) => {
          if (image instanceof File) {
            return await toBase64(image);
          }
          return image; // If it's already a base64 string, return as is
        })
      );
    }



    const response = await fetch('/api/reactEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...message,
        images: imagesBase64, // Include the base64 images in the request body
      }),
    });

    if (response.ok) {
      console.log('Email sent successfully');
      setIsSuccess(true)
    } else {
      console.error('Failed to send email');
      setIsSuccess(false)
    }
    console.log("message sent: ", message.email, message.name, message.issue, message.location, message.phoneNumber, imagesBase64);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Pirate Plumbing</title>
        <meta name="keywords" content="vancouver plumbing, emergency plumbing, plumbing repair, residential plumbing, commercial plumbing, 24/7 plumbing, same day plumbing, weekend plumber, drain repair, pipe repair, leak detection, water heater installation, water heater repair, sewer line repair, sewer repair, clogged drain, blocked toilet, leaking pipe, running toilet, low water pressure, water leak, burst pipe, sewer backup, hot water problem, bathroom plumbing, kitchen plumbing, noisy pipes, plumber near me, local plumber, best plumber vancouver" />
        <link rel="icon" href="https://www.pirateplumbing.ca/gicon.ico" />
        <meta property="og:title" content="Pirate Plumbing" />
        <meta property="og:description" content="We offer 24-hour, seven days a week plumbing services for the Greater Vancouver Area that is affordable and professional. Contact us today to experience the difference." />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Pirate Plumbing" />
        <meta property="twitter:description" content="We offer 24-hour, seven days a week plumbing services for the Greater Vancouver Area that is affordable and professional. Contact us today to experience the difference." />
        <meta property="og:image" content="https://www.pirateplumbing.ca/pirate.svg" />
        <meta property="description" content="We offer 24-hour, seven days a week plumbing services for the Greater Vancouver Area that is affordable and professional. Contact us today to experience the difference." />
        <meta property="twitter:image" content="https://www.pirateplumbing.ca/pirate.svg" />
        <meta property="og:url" content="https://pirateplumbing.ca" />
        <meta name="google-site-verification" content="J0L-DHJdzVbRcfqyQL3t5k7lIHJdCc8DIxcll8eswws" />
        <meta property="og:site_name" content="Pirate Plumbing" />
      </Head>
      <Header />
      <main className="flex-row">
        <section className="w-full bg-cover min-h py-8 px-20 bg-[url('/broom.svg')]">
          <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
            <div className="flex flex-col space-y-4 text-center md:text-left md:w-1/2">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Your go-to Plumbing Company for your home
                </h1>
                <p className="max-w-[700px] md:text-xl">
                  Pirate Plumbing is here to solve all of your water and drainage needs.
                  Whether you need a simple repair or a complex install, we&apos;re here for you!
                </p>
                <p>
                  Pirate Plumbing sails to the rescue for all your plumbing emergencies in Vancouver.
                  From leaky pipes to full bathroom overhauls, our crew of expert plumbers is ready to
                  swashbuckle any job, big or small. We treasure prompt, professional service and quality
                  workmanship that&apos;ll make your plumbing shine like buried gold.
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
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={message.name}
                    onChange={(e) => setMessage(prevMessage => ({ ...prevMessage, name: e.target.value }))}
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label htmlFor="location">Location (City)</Label>
                  <div className="space-y-2">
                    <Select onValueChange={(value) => setMessage({ ...message, location: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>
                            Cities
                          </SelectLabel>
                          <SelectItem value="Vancouver">Vancouver</SelectItem>
                          <SelectItem value="Burnaby">Burnaby</SelectItem>
                          <SelectItem value="North Vancouver">North Vancouver</SelectItem>
                          <SelectItem value="West Vancouver">West Vancouver</SelectItem>
                          <SelectItem value="Richmond">Richmond</SelectItem>
                          <SelectItem value="Coquitlam">Coquitlam</SelectItem>
                          <SelectItem value="Surrey">Surrey</SelectItem>
                          <SelectItem value="Delta">Delta</SelectItem>
                          <SelectItem value="Port Coquitlam">Port Coquitlam</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="issue">Issue/Problem</Label>
                <Textarea
                  className="resize-none"
                  id="issue"
                  onChange={(event) => setMessage({ ...message, issue: event.target.value })}
                  placeholder="Describe your plumbing issue..."
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="photos">Upload Photos (up to 5)</Label>
                <Input id="photos" onChange={handleImageChange} type="file" multiple accept="image/*" max="5" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={message.email}
                    onChange={(e) => setMessage(prevMessage => ({ ...prevMessage, email: e.target.value }))}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={message.phoneNumber}
                    onChange={(e) => setMessage(prevMessage => ({ ...prevMessage, phoneNumber: e.target.value }))}
                    placeholder="(123) 456-7890"
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">Submit Request</Button>
            </form>
            {isSuccess && (
              <p className="mt-4 text-green-600 text-center">
                Your message was sent! We will get back to you soon.
              </p>
            )}

          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
        <p className="text-xs text-gray-500">© 2024 Pirate Plumbing. All rights reserved.</p>
        {/*<nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>*/}
      </footer>
    </div>
  )
}
