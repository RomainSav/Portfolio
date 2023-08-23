import type { Metadata } from "next";

const data = {
  title: "Romain San Vicente - Frontend Developer",
  description: "Frontend Developer since 2020, I work with the framework NextJS."
};

export const metadata: Metadata = {
  icons: "/favicon.ico",

  title: data.title,
  description: data.description,

  openGraph: {
    title: data.title,
    description: data.description,
    siteName: "Romain San Vicente - Portfolio",
    url: "https://romainsav.ch",
    type: "website",
    images: ["/memoji.png"]
  },

  twitter: {
    title: data.title,
    description: data.description
  }
};