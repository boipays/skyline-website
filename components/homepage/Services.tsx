import {
  FlaskConical,
  HeartPulse,
  Microscope,
  ShieldCheck,
  TestTube2,
} from "lucide-react";

const services = [
  {
    title: "Medical Laboratory Tests",
    text: "Wide range of diagnostic tests for various medical conditions.",
    icon: TestTube2,
  },
  {
    title: "Blood Sample Analysis",
    text: "Complete blood count and other hematology tests.",
    icon: HeartPulse,
  },
  {
    title: "Urine Test",
    text: "Urinalysis for detecting infections and other conditions.",
    icon: FlaskConical,
  },
  {
    title: "Malaria Test",
    text: "Rapid and accurate malaria testing services.",
    icon: Microscope,
  },
  {
    title: "Typhoid Test",
    text: "Widal and other typhoid fever diagnostic tests.",
    icon: ShieldCheck,
  },
  {
    title: "Routine Health Screening",
    text: "General health check-ups and preventive testing.",
    icon: HeartPulse,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-red-500">
            Our Services
          </p>
          <h3 className="mt-2 text-4xl font-black">
            Comprehensive Laboratory Services
          </h3>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <service.icon size={32} />
              </div>

              <h4 className="mt-6 text-lg font-black">{service.title}</h4>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}