import { render } from '@react-email/components';
import nodemailer from 'nodemailer';
import React from 'react';
import { uploadPic } from '@/backend/actions';
import Email from '@/components/email';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', 
    },
  },
};


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Request body:', req.body)
  const transporter = nodemailer.createTransport({
    port: 587,
    host: 'smtp.gmail.com',
    service: 'smtp.gmail.com',
    secure: false,
    auth: {
      user: process.env.GMAIL,
      pass: process.env.APP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
      ciphers: 'SSLv3'
    }
  });

  // Provide the necessary props for the Email component
  const emailProps = {
    email: req.body.email,
    name: req.body.name,
    issue: req.body.issue,
    location: req.body.location,
    phoneNumber: req.body.phoneNumber,
    images: req.body.images || null, // assuming images can be an array or null
  };

  const emailElement = React.createElement(Email, emailProps);
  // Render the Email component to HTML
  const emailHtml = await render(emailElement);

  /*const attachments = await Promise.all(
      req.body.images.map(async (image: Image) => {
          console.log('Image:', image)
          console.log('Attempting to upload image to Cloudinary...');
          const uploadResult = await uploadPic(image.url); // Pass the individual image
          return { filename: uploadResult.name, path: uploadResult.url, encoding: "base64" };
      })
  ); */

  

  var cloudinaryImageUri: string[] = [];
  //upload images from base64 to cloudinary
  if (req.body.images.length > 0) {
    cloudinaryImageUri = await Promise.all(
      req.body.images.map(async (image: string) => {
        const result = await uploadPic(image);
        return result.url;
      })
    );
  }

  const attachments = cloudinaryImageUri.map((uri, index) => ({
    filename: `image${index + 1}.png`,
    path: uri,
  }));


  var options = {
    from: 'devkettleteam@gmail.com ',
    to: 'devkettleteam@gmail.com',
    subject: 'New Customer Form Submission',
    html: emailHtml,
    attachments: attachments /*[
      {
        filename: 'image1.png',
        path: `${cloudinaryImageUri[0]}`,

      },
      {
        filename: 'image2.png',
        path: `${cloudinaryImageUri[1]}`,

      },
      {
        filename: 'image3.png',
        path: `${cloudinaryImageUri[2]}`,

      },
      {
        filename: 'image4.png',
        path: `${cloudinaryImageUri[3]}`,

      },
      {
        filename: 'image5.png',
        path: `${cloudinaryImageUri[4]}`,

      }

    ] */
  };

  await transporter.sendMail(options);

  res.status(200).json({ message: 'Email sent successfully' });
}

