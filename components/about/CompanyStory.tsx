import Link from "next/link";
import Image from "next/image";

import { Bebas_Neue, Poppins } from "next/font/google";

import {
  ArrowRight,
  Award,
  Home,
  Building2,
  Factory,
  Landmark,
  Route,
} from "lucide-react";

import Container from "@/components/ui/Container";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const highlights = [
  {
    icon: Award,
    title: "Established in 2007",
  },
  {
    icon: Home,
    title: "Residential Projects",
  },
  {
    icon: Building2,
    title: "Commercial & Corporate",
  },
  {
    icon: Factory,
    title: "Industrial & Institutional",
  },
  {
    icon: Landmark,
    title: "Religious Structures",
  },
  {
    icon: Route,
    title: "Infrastructure Development",
  },
];

export default function CompanyStory() {
  return (
    <section className="bg-white py-24">
      <Container>
        {/* Section Heading */}

        <div className="mb-16 text-center">

          <p
            className={`${bebas.className} text-xl tracking-[4px] text-[#003D78]`}
          >
            OUR STORY
          </p>

          <h2
            className={`${bebas.className} mt-2 text-5xl leading-none text-[#0A1F44] md:text-7xl`}
          >
            BUILDING TRUST
            <br />
            SINCE 2007
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#F4C430]" />

        </div>

        {/* Content */}

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Image */}

          <div className="relative">

            <div className="overflow-hidden rounded-3xl shadow-2xl">

              <Image
                src="/images/projects/project1/1.jpg"
                alt="JCN Construction"
                width={700}
                height={600}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

            {/* Floating Badge */}

            <div className="absolute -bottom-8 left-8 rounded-2xl bg-[#003D78] px-8 py-5 shadow-2xl">

              <p
                className={`${bebas.className} text-4xl text-[#F4C430]`}
              >
                EST.
              </p>

              <p
                className={`${bebas.className} text-5xl text-white`}
              >
                2007
              </p>

            </div>

          </div>

          {/* Text */}

          <div>

            <div
              className={`${poppins.className} space-y-6 text-lg leading-8 text-gray-600`}
            >

              <p>
                <strong>
                  JCN Construction Supplies & Engineering Services
                  (JCNSES)
                </strong>{" "}
                was established in <strong>2007</strong>,
                providing engineering supplies and
                construction services with a commitment to
                quality, reliability, and customer satisfaction.
              </p>

              <p>
                Over the years, our company has grown into a
                trusted construction partner, delivering
                projects across residential, commercial,
                industrial, institutional, corporate,
                religious, land development, and
                infrastructure sectors.
              </p>

              <p>
                We take pride in our unwavering commitment to
                quality, safety, and sustainability,
                ensuring every project is completed to the
                highest standards while meeting the unique
                needs of every client.
              </p>

              <p>
                From concept and planning to final turnover,
                our experienced team is dedicated to turning
                every vision into a lasting structure built
                with excellence.
              </p>

            </div>

            {/* Highlights */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#003D78]">

                      <Icon
                        size={22}
                        className="text-[#F4C430]"
                      />

                    </div>

                    <span className="font-semibold text-[#0A1F44]">
                      {item.title}
                    </span>

                  </div>
                );
              })}

            </div>

            {/* CTA */}

            <Link
              href="/projects"
              className={`${bebas.className} group mt-12 inline-flex items-center gap-3 rounded-2xl bg-[#003D78] px-8 py-4 text-2xl tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#002B57]`}
            >
              VIEW OUR PROJECTS

              <ArrowRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />

            </Link>

          </div>

        </div>
      </Container>
    </section>
  );
}