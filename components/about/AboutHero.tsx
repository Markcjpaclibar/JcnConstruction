import Image from "next/image";
import { Bebas_Neue, Poppins } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function AboutHero() {
  return (
    <section className="relative flex h-[60vh] min-h-[500px] items-center justify-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/about/hero.jpg"
        alt="About JCN Construction"
        fill
        priority
        className="object-cover"
      />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#003D78]/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <h1
          className={`${bebas.className} text-5xl leading-none text-white sm:text-6xl lg:text-8xl`}
        >
          ABOUT JCN CONSTRUCTION CO.
        </h1>

        <p
          className={`${poppins.className} mx-auto mt-6 max-w-3xl text-base font-medium leading-7 text-white/90 sm:text-lg lg:text-xl`}
        >
          Built on trust, driven by excellence, your partner in building
          lasting structures across Bacolod and beyond.
        </p>

      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white" />

    </section>
  );
}