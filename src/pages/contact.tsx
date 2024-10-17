import React from "react"
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



export default function Contact() {
  const [message, setMessage] = useState<Message>({
    images: null,
    name: "",
    email: "",
    issue: "",
    location: "",
    phoneNumber: ""
  });

  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files).slice(0, 5); // Limit to 5 images
      setMessage(prevMessage => ({ ...prevMessage, images: fileArray }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let imagesCloudinaryUri: string[] = [];
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
    } else {
      console.error('Failed to send email');
    }
    console.log("message sent: ", message.email, message.name, message.issue, message.location, message.phoneNumber, imagesBase64);
    router.reload();
  };


  return (
    <div className="bg-white">
      <Header />
      <section className="w-full  min-h-screen py-12 md:py-24 lg:py-32 text-gray-900 bg-white ">
        <div className=" px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Contact Us
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
        </div>
      </section>
    </div>
  )
}
