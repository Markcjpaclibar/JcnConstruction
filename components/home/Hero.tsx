"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import HeroSlideshow from "@/components/home/HeroSlideshow";
import { Bebas_Neue } from "next/font/google";
import { motion } from "motion/react";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
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
        <motion.div
          className="max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Heading */}
          <motion.h1
            className={`${bebas.className} uppercase leading-[0.9] tracking-[2px]`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="block text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              YOUR PARTNER IN{" "}
              <span className="text-[#003D78]">PROGRESS</span>
            </span>

            <span className="mt-2 block text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              YOUR BLUEPRINT IN{" "}
              <span className="text-[#F4C430]">SUCCESS</span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-8 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Building quality spaces with precision, innovation, and
            craftsmanship. We turn ideas into structures that stand the test of
            time.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              href="https://web.facebook.com/messages/e2ee/t/7769962243037250"
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
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}