import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.skylightlaboratories.com"),

  title: {
    default: "Skylight Laboratories | Best Laboratory Services in Abuja",
    template: "%s | Skylight Laboratories",
  },

  description:
    "Skylight Laboratories provides accurate, reliable, and trusted medical laboratory services including blood tests, urine analysis, malaria testing, typhoid screening, and routine health checkups in Abuja, Nigeria.",

  keywords: [
    "Skylight Laboratories",
    "Medical Laboratory Abuja",
    "Blood Test Abuja",
    "Urine Test Abuja",
    "Malaria Test",
    "Typhoid Test",
    "Laboratory Services Nigeria",
    "Health Screening",
    "Diagnostic Center Abuja",
    "Medical Diagnostics",
  ],

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/images/skylight-logo.png",
    shortcut: "/images/skylight-logo.png",
    apple: "/images/skylight-logo.png",
  },

  openGraph: {
    title: "Skylight Laboratories | Best Laboratory Services in Abuja",
    description:
      "Trusted medical laboratory providing blood tests, urine analysis, malaria testing, typhoid screening, and routine health checkups in Abuja.",
    url: "https://www.skylightlaboratories.com",
    siteName: "Skylight Laboratories",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/lab-hero.png",
        width: 1200,
        height: 630,
        alt: "Skylight Laboratories",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Skylight Laboratories",
    description:
      "Accurate. Reliable. Trusted. Professional laboratory services in Abuja.",
    images: ["/images/lab-hero.png"],
  },

  category: "Healthcare",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Skylight Laboratories",
  url: "https://www.skylightlaboratories.com",
  logo: "https://www.skylightlaboratories.com/images/skylight-logo.png",
  image: "https://www.skylightlaboratories.com/images/lab-hero.png",
  description:
    "Skylight Laboratories is a trusted medical diagnostic laboratory providing accurate laboratory testing and health screening services in Abuja, Nigeria.",
  email: "Skylightlaboratories@gmail.com",
  telephone: "+2348038147443",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Aa22, Warehouse Line, Bricks Market",
    addressLocality: "Dutse",
    addressRegion: "Abuja",
    addressCountry: "NG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    telephone: "+2348038147443",
    email: "Skylightlaboratories@gmail.com",
    availableLanguage: ["English"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {children}
      </body>
    </html>
  );
}