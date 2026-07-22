"use client";

import Image from "next/image";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import { ArrowRight } from "lucide-react";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/cta.jpg"
          alt="Construction Team"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-8">
        {/* Small Heading */}
        <p
          className={`${bebas.className} text-lg tracking-[4px] text-[#F4C430]`}
        >
          LET'S BUILD TOGETHER
        </p>

        {/* Main Heading */}
        <h2
          className={`${bebas.className} mt-4 max-w-5xl text-5xl uppercase leading-none text-white md:text-6xl lg:text-7xl`}
        >
          READY TO BUILD
          <br />
          YOUR NEXT PROJECT?
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-200">
          Whether you're planning a residential home, commercial
          establishment, renovation, or large-scale development, our
          experienced team is ready to bring your vision to life with
          quality craftsmanship, precision, and dependable service.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col gap-5 sm:flex-row">
          <Link
            href="/contact"
            className={`${bebas.className} inline-flex items-center justify-center rounded-lg bg-[#F4C430] px-10 py-4 text-2xl tracking-wide text-black transition-all duration-300 hover:scale-105 hover:bg-[#e2b422]`}
          >
            GET A FREE CONSULTATION
          </Link>

          <Link
            href="/projects"
            className={`${bebas.className} inline-flex items-center justify-center gap-3 rounded-lg border border-white px-10 py-4 text-2xl tracking-wide text-white transition-all duration-300 hover:bg-white hover:text-black`}
          >
            VIEW OUR PROJECTS
            <ArrowRight size={22} />
          </Link>
        </div>
      </div>
    </section>
  );
}