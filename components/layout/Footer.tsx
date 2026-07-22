"use client";

import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import {
  MapPin,
  Phone,
  Smartphone,
  Mail,
  ChevronUp,
  Building2,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Projects", href: "/projects" },
  { name: "Clients", href: "/clients" },
];

const services = [
  "Architectural Design",
  "Residential Building",
  "Industrial Building",
  "Commercial Building",
  "Land Development",
  "Material Supply",
  "Solar Panels",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#0A1F44] text-white">
      {/* Yellow Accent */}
      <div className="h-2 bg-[#F4C430]" />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="grid gap-14 lg:grid-cols-12">

          {/* ================= COMPANY ================= */}

          <div className="lg:col-span-4">

            <div className="flex items-start gap-5">

              {/* Placeholder Logo */}

              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-[#003D78] shadow-lg">

                <Building2
                  size={42}
                  className="text-[#F4C430]"
                />

              </div>

              <div>

                <h2
                  className={`${bebas.className} text-5xl leading-none`}
                >
                  JCN
                </h2>

                <h3
                  className={`${bebas.className} text-3xl leading-none`}
                >
                  CONSTRUCTION CO.
                </h3>

              </div>

            </div>

            <p className="mt-8 max-w-sm leading-8 text-gray-300">
              Building quality residential, commercial, and industrial
              projects with integrity, innovation, and craftsmanship.
              Creating structures that stand the test of time.
            </p>

            {/* Socials */}

                <div className="mt-8 flex gap-4">
                {[
                    {
                    icon: FaFacebookF,
                    href: "#",
                    },
                    {
                    icon: FaInstagram,
                    href: "#",
                    },
                    {
                    icon: FaLinkedinIn,
                    href: "#",
                    },
                ].map(({ icon: Icon, href }, index) => (
                    <a
                    key={index}
                    href={href}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:scale-110 hover:border-[#F4C430] hover:bg-[#F4C430] hover:text-[#0A1F44]"
                    >
                    <Icon size={18} />
                    </a>
                ))}
                </div>

          </div>

          {/* ================= QUICK LINKS ================= */}

          <div className="lg:col-span-2">

            <h3
              className={`${bebas.className} text-3xl text-[#F4C430]`}
            >
              QUICK LINKS
            </h3>

            <ul className="mt-8 space-y-5">

              {quickLinks.map((link) => (

                <li key={link.name}>

                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 transition hover:text-[#F4C430]"
                  >
                    <span>{link.name}</span>

                    <span className="opacity-0 transition group-hover:opacity-100">
                      →
                    </span>

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* ================= SERVICES ================= */}

          <div className="lg:col-span-3">

            <h3
              className={`${bebas.className} text-3xl text-[#F4C430]`}
            >
              SERVICES
            </h3>

            <ul className="mt-8 space-y-5">

              {services.map((service) => (

                <li key={service}>

                  <Link
                    href="/services"
                    className="transition hover:text-[#F4C430]"
                  >
                    {service}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* ================= CONTACT ================= */}

          <div className="lg:col-span-3">

            <h3
              className={`${bebas.className} text-3xl text-[#F4C430]`}
            >
              CONTACT US
            </h3>

            <div className="mt-8 space-y-6">

              <div className="flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#003D78]">

                  <MapPin className="text-[#F4C430]" size={22} />

                </div>

                <div>

                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Address
                  </p>

                  <p className="leading-7 text-gray-200">
                    Ylac Ave., Brgy. Villamonte
                    <br />
                    Bacolod City
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#003D78]">

                  <Phone className="text-[#F4C430]" size={22} />

                </div>

                <div>

                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Telephone
                  </p>

                  <a
                    href="tel:0347009271"
                    className="text-gray-200 hover:text-[#F4C430]"
                  >
                    (034) 700 9271
                  </a>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#003D78]">

                  <Smartphone className="text-[#F4C430]" size={22} />

                </div>

                <div>

                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Mobile
                  </p>

                  <a
                    href="tel:09177009271"
                    className="text-gray-200 hover:text-[#F4C430]"
                  >
                    0917 700 9271
                  </a>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#003D78]">

                  <Mail className="text-[#F4C430]" size={22} />

                </div>

                <div>

                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Email
                  </p>

                  <a
                    href="mailto:jcnconstruction.admn@gmail.com"
                    className="break-all text-gray-200 hover:text-[#F4C430]"
                  >
                    jcnconstruction.admn@gmail.com
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} JCN Construction Co.
            All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 transition-all duration-300 hover:border-[#F4C430] hover:bg-[#F4C430] hover:text-[#0A1F44]"
          >
            <ChevronUp size={18} />
            Back to Top
          </button>

        </div>

      </div>
    </footer>
  );
}