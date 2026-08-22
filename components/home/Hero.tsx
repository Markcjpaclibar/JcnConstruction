import Link from "next/link";
import Container from "@/components/ui/Container";
import HeroSlideshow from "@/components/home/HeroSlideshow";
import { Space_Grotesk, Manrope } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image Slideshow */}
      <HeroSlideshow />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <Container className="relative z-10 flex min-h-screen flex-col justify-center py-24">
        <div className="max-w-5xl">

          {/* Heading */}
          <h1
            className={`${spaceGrotesk.className} uppercase leading-[0.95] tracking-[-0.03em]`}
          >
            <span className="block text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              YOUR PARTNER IN{" "}
              <span className="text-[#003D78]">PROGRESS</span>
            </span>

            <span className="mt-3 block text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              YOUR BLUEPRINT IN{" "}
              <span className="text-[#F4C430]">SUCCESS</span>
            </span>
          </h1>

          {/* Description */}
          <p
            className={`${manrope.className} mt-8 max-w-2xl text-base font-normal leading-7 text-gray-200 sm:text-lg`}
          >
            Building quality spaces with precision, innovation, and
            craftsmanship. We turn ideas into structures that stand the test of
            time.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">

            <Link
              href="https://web.facebook.com/messages/e2ee/t/7769962243037250"
              className={`${manrope.className} w-full rounded-md bg-[#F4C430] px-8 py-4 text-center text-[15px] font-semibold tracking-[0.05em] text-black transition duration-300 hover:scale-105 hover:bg-[#e7b71d] sm:w-auto`}
            >
              CONSULT
            </Link>

            <Link
              href="/projects"
              className={`${manrope.className} w-full rounded-md border border-white px-8 py-4 text-center text-[15px] font-semibold tracking-[0.05em] text-white transition duration-300 hover:bg-white hover:text-black sm:w-auto`}
            >
              VIEW OUR PROJECTS
            </Link>

          </div>
        </div>
      </Container>
    </section>
  );
}