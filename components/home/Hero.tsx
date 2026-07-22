import Link from "next/link";
import Container from "@/components/ui/Container";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <Container className="relative z-10 flex min-h-screen flex-col justify-center py-24">

        <div className="max-w-5xl">

          {/* Heading */}
          <h1
            className={`${bebas.className} uppercase leading-[0.9] tracking-[2px]`}
          >
            <span className="block text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              YOUR PARTNER IN{" "}
              <span className="text-[#003D78]">PROGRESS</span>
            </span>

            <span className="mt-2 block text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              YOUR BLUEPRINT IN{" "}
              <span className="text-[#F4C430]">SUCCESS</span>
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg">
            Building quality spaces with precision, innovation, and
            craftsmanship. We turn ideas into structures that stand the test of
            time.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">

            <Link
              href="/contact"
              className={`${bebas.className} w-full rounded-md bg-[#F4C430] px-8 py-4 text-center text-xl tracking-wide text-black transition duration-300 hover:scale-105 hover:bg-[#e7b71d] sm:w-auto`}
            >
              CONSULT
            </Link>

            <Link
              href="/projects"
              className={`${bebas.className} w-full rounded-md border border-white px-8 py-4 text-center text-xl tracking-wide text-white transition duration-300 hover:bg-white hover:text-black sm:w-auto`}
            >
              VIEW OUR PROJECTS
            </Link>

          </div>

        </div>

      </Container>
    </section>
  );
}