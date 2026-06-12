import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Mission", href: "#mission" },
  { name: "Vision", href: "#vision" },
  { name: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/skylight-logo.png"
            alt="Skylight Laboratories Logo"
            width={70}
            height={70}
            className="rounded-full"
            priority
          />

          <div>
            <h1 className="text-lg font-black tracking-wide text-slate-900 md:text-xl">
              SKYLIGHT LABORATORIES
            </h1>
            <p className="text-sm text-slate-500">Best laboratory services</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-blue-700">
              {link.name}
            </a>
          ))}
        </nav>

       <a
  href={`mailto:Skylightlaboratories@gmail.com?subject=Laboratory Test Booking&body=Hello Skylight Laboratories,%0D%0A%0D%0AI would like to book a laboratory test.%0D%0A%0D%0AName:%0D%0APhone Number:%0D%0ATest Required:%0D%0APreferred Date:%0D%0A`}
  className="hidden rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800 md:inline-flex"
>
  Book a Test
</a>
      </div>
    </header>
  );
}