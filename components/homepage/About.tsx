import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Image
          src="/images/lab-about.png"
          alt="Modern laboratory interior"
          width={650}
          height={450}
          className="rounded-3xl object-cover shadow-lg"
        />

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-red-500">
            About Us
          </p>

          <h3 className="mt-3 text-4xl font-black">
            Quality Laboratory Services You Can Trust
          </h3>

          <div className="mt-4 h-1 w-20 rounded-full bg-blue-700" />

          <p className="mt-6 leading-8 text-slate-600">
            Skylight Laboratories is a trusted laboratory service provider
            located at Aa22, Warehouse Line, Bricks Market, Dutse-Abuja. We are
            committed to delivering accurate test results, professional care and
            excellent customer service.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <Stat value="500+" label="Happy Clients" />
            <Stat value="1000+" label="Tests Conducted" />
            <Stat value="99%" label="Accuracy Rate" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <h4 className="text-3xl font-black text-blue-700">{value}</h4>
      <p className="text-sm text-slate-500">{label}</p>
    </div>
  );
}