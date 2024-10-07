import { render } from '@react-email/components';
import nodemailer from 'nodemailer';
import React from 'react';
import { uploadPic } from '@/backend/actions';
import Email from '@/components/email';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const transporter = nodemailer.createTransport({
        port: 587,
        host: 'smtp.gmail.com',
        service:'smtp.gmail.com',
        secure: false,
        auth: {
            user: process.env.GMAIL,
            pass: process.env.APP_PASS,
        },
        tls: {
            rejectUnauthorized: false,
            ciphers:'SSLv3'
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

    const attachments = req.body.images.map((image: Image) => async () =>{
        const uploadResult = await uploadPic(req.body.images);
        return { filename: uploadResult.name, href: uploadResult.url };;
    });

    const options = {
        from: 'devkettleteam@gmail.com ',
        to: 'devkettleteam@gmail.com',
        subject: 'New Customer Form Submission',
        html: emailHtml,
        attachments: attachments
    };

    await transporter.sendMail(options);

    res.status(200).json({ message: 'Email sent successfully' });
}

