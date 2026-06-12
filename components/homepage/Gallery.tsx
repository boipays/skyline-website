import Image from "next/image";

const gallery = [
  "/images/lab-1.png",
  "/images/lab-2.png",
  "/images/lab-3.png",
  "/images/lab-4.png",
];

export default function Gallery() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-red-500">
            Our Laboratory
          </p>
          <h3 className="mt-2 text-4xl font-black">Inside Our Laboratory</h3>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {gallery.map((image, index) => (
            <Image
              key={image}
              src={image}
              alt={`Laboratory picture ${index + 1}`}
              width={400}
              height={300}
              className="h-60 rounded-2xl object-cover shadow"
            />
          ))}
        </div>
      </div>
    </section>
  );
}