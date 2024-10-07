import React from 'react';
import Image from 'next/image';

interface ServiceRequestProps {
  email: string;
  name: string;
  issue: string;
  location: string;
  phoneNumber: string;
  images?: File[] | null | string[];
}

const Email: React.FC<ServiceRequestProps> = ({
  email,
  name,
  issue,
  location,
  phoneNumber,
  images
}) => {
  return (
    <div className="bg-white font-sans p-6 max-w-2xl mx-auto">
      <div className="container mx-auto">
        <div className="flex justify-center mb-6">
          <Image src="pirate.svg" alt="logo" width={120} height={120} />
        </div>
        
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">New Service Request</h1>
        </div>
        
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Customer Information:</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Phone: {phoneNumber}</p>
          <p>Location: {location}</p>
        </div>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h2 className="text-lg font-bold mb-2">Issue Description:</h2>
          <p>{issue}</p>
        </div>
        
        {images && images.length > 0 && (
          <div>
            <h2 className="text-lg font-bold mb-2">Attachments:</h2>
            <p>{images.length} image(s) attached</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Email;