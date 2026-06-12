import { Eye, Target } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid overflow-hidden rounded-3xl md:grid-cols-2">
        <div id="mission" className="bg-blue-700 p-10 text-white">
          <Target size={55} />

          <h3 className="mt-6 text-2xl font-black">Our Mission</h3>

          <p className="mt-4 leading-8">
            To provide reliable, affordable and timely laboratory services that
            support better healthcare decisions.
          </p>
        </div>

        <div id="vision" className="bg-red-500 p-10 text-white">
          <Eye size={55} />

          <h3 className="mt-6 text-2xl font-black">Our Vision</h3>

          <p className="mt-4 leading-8">
            To become one of Abuja’s most trusted laboratories, known for
            accuracy, professionalism and excellent patient care.
          </p>
        </div>
      </div>
    </section>
  );
}