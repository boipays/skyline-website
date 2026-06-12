import Image from "next/image";
import { ArrowRight, Clock, Microscope, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-5xl font-black leading-tight text-slate-950 md:text-6xl">
            Reliable Results. <br />
            <span className="text-red-500">Better Health.</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Skylight Laboratories provides accurate, timely and trusted
            laboratory services for individuals, families and healthcare
            providers.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white hover:bg-blue-800"
            >
              Our Services <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-700 px-6 py-3 font-bold text-blue-700 hover:bg-blue-50"
            >
              Contact Us <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <HeroFeature icon={Microscope} title="Accurate Testing" />
            <HeroFeature icon={Clock} title="Fast Turnaround" />
            <HeroFeature icon={ShieldCheck} title="Trusted Service" />
          </div>
        </div>

        <Image
          src="/images/lab-hero.png"
          alt="Laboratory scientist using microscope"
          width={720}
          height={560}
          className="rounded-[2rem] object-cover shadow-2xl"
          priority
        />
      </div>
    </section>
  );
}

function HeroFeature({ icon: Icon, title }: any) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
        <Icon size={24} />
      </div>
      <p className="text-sm font-bold">{title}</p>
    </div>
  );
}