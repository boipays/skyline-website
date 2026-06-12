import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-blue-50 py-10">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-4">
        <div>
          <h3 className="text-2xl font-black text-blue-700">Get In Touch</h3>
          <p className="mt-2 text-sm text-slate-600">
            Reach out to us for trusted laboratory services.
          </p>
        </div>

        <ContactItem
          icon={MapPin}
          text="Aa22, Warehouse Line, Bricks Market, Dutse-Abuja"
        />

        <ContactItem icon={Phone} text="+234 803 814 7443" />

        <ContactItem icon={Mail} text="Skylightlaboratories@gmail.com" />
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, text }: any) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 text-white">
        <Icon size={22} />
      </div>
      <p className="text-sm font-semibold text-slate-700">{text}</p>
    </div>
  );
}