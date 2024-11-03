import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <meta property="og:image" content="/pirate.svg" />
        <meta name="keywords" content="vancouver plumbing, emergency plumbing, plumbing repair, residential plumbing, commercial plumbing, 24/7 plumbing, same day plumbing, weekend plumber, drain repair, pipe repair, leak detection, water heater installation, water heater repair, sewer line repair, sewer repair, clogged drain, blocked toilet, leaking pipe, running toilet, low water pressure, water leak, burst pipe, sewer backup, hot water problem, bathroom plumbing, kitchen plumbing, noisy pipes, plumber near me, local plumber, best plumber vancouver" />
        <link rel="icon" href="https://pirateplumbing.ca/pirate.svg" />
        <meta property="og:title" content="Pirate Plumbing" />
        <meta property="og:description" content="We offer 24-hour, seven days a week plumbing services for the Greater Vancouver Area that is affordable and professional. Contact us today to experience the difference." />
        <meta property="og:image" content="/pirate.svg" />
        <meta property="og:url" content="https://pirateplumbing.ca" />

      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
