import Image from "next/image";

import {
  FaFacebookF,
  FaHeadphones,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaMap,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
  "Home",
  "About Us",
  "Services",
  "Mission",
  "Vision",
  "Contact Us",
];

const services = [
  "Medical Laboratory Tests",
  "Blood Sample Analysis",
  "Urine Test",
  "Malaria Test",
  "Typhoid Test",
  "Routine Health Screening",
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/skylight-logo.png"
              alt="Skylight Laboratories"
              width={60}
              height={60}
              className="rounded-full"
            />

            <div>
              <h4 className="font-black">SKYLIGHT LABORATORIES</h4>
              <p className="text-sm text-slate-300">
                Best laboratory services
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-6 text-slate-300">
            Accurate. Reliable. Trusted. Your health, our priority.
          </p>

          <div className="mt-6 flex gap-3">
            <Social icon={FaFacebookF} />
            <Social icon={FaInstagram} />
            <Social icon={FaLinkedinIn} />
             <Social icon={FaYoutube} />
          </div>
        </div>

        <FooterLinks title="Quick Links" links={quickLinks} />

        <FooterLinks title="Our Services" links={services} />

        <div>
          <h4 className="font-black">Contact Info</h4>

          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <p className="flex gap-3">
              <FaMap size={18} />
              Aa22, Warehouse Line, Bricks Market, Dutse-Abuja
            </p>

            <p className="flex gap-3">
              <FaHeadphones size={18} />
              +234 803 814 7443
            </p>

            <p className="flex gap-3">
              <FaMailBulk size={18} />
              Skylightlaboratories@gmail.com
            </p>

            <p>Mon - Sat: 7:00 AM - 6:00 PM</p>
            <p>Sunday: Closed</p>

            <a
              href="https://skylightlaboratories.com"
              target="_blank"
              className="inline-block font-bold text-blue-300"
            >
              www.skylightlaboratories.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-slate-400">
        © 2026 Skylight Laboratories. All rights reserved.
      </div>
    </footer>
  );
}

function Social({ icon: Icon }: any) {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-700 text-white">
      <Icon size={18} />
    </span>
  );
}

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h4 className="font-black">{title}</h4>

      <ul className="mt-5 space-y-3 text-sm text-slate-300">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="hover:text-white">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}