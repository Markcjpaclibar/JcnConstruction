import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

import Container from "@/components/ui/Container";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function MissionVision() {
  return (
    <section className="bg-[#F8FAFC] py-20 md:py-28">
      <Container>

        {/* ================= MISSION ================= */}

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Image */}

          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/about/mission.jpg"
              alt="JCN Construction Mission"
              width={700}
              height={500}
              className="h-[260px] w-full object-cover transition duration-500 hover:scale-105 md:h-[380px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/40 via-transparent to-transparent" />
          </div>

          {/* Content */}

          <div>

            <p
              className={`${bebas.className} tracking-[5px] text-[#F4C430]`}
            >
              OUR PURPOSE
            </p>

            <h2
              className={`${bebas.className} mt-2 text-5xl text-[#0A1F44] md:text-6xl`}
            >
              OUR MISSION
            </h2>

            <div className="mt-5 h-1 w-20 rounded-full bg-[#F4C430]" />

            <p className="mt-8 text-lg leading-9 text-gray-600">
              At JCNSES, our mission is to be a leading company in Design,
              Construction and Site Development Works, renowned for our
              commitment to innovation, quality, and sustainability.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              We strive to create lasting relationships with our clients by
              delivering exceptional projects that enhance communities and
              improve lives.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              Our goal is to redefine the construction experience through
              transparency, collaboration, and a relentless pursuit of
              excellence, ensuring every structure we build stands as a
              testament to our integrity and craftsmanship.
            </p>

          </div>
        </div>

        {/* Divider */}

        <div className="my-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        {/* ================= VISION ================= */}

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Content */}

          <div className="order-2 lg:order-1">

            <p
              className={`${bebas.className} tracking-[5px] text-[#F4C430]`}
            >
              OUR FUTURE
            </p>

            <h2
              className={`${bebas.className} mt-2 text-5xl text-[#0A1F44] md:text-6xl`}
            >
              OUR VISION
            </h2>

            <div className="mt-5 h-1 w-20 rounded-full bg-[#F4C430]" />

            <p className="mt-8 text-lg leading-9 text-gray-600">
              To become one of the Philippines' most trusted and respected
              construction companies, recognized for delivering innovative,
              sustainable, and high-quality engineering solutions.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              We envision creating structures that positively impact
              communities while setting new standards of excellence in
              construction, safety, and customer satisfaction.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              Through continuous innovation and dedication to our clients,
              JCN Construction aims to build lasting partnerships and shape a
              stronger future for generations to come.
            </p>

          </div>

          {/* Image */}

          <div className="order-1 lg:order-2 relative overflow-hidden rounded-3xl shadow-2xl">

            <Image
              src="/images/about/vision.jpg"
              alt="JCN Construction Vision"
              width={700}
              height={500}
              className="h-[260px] w-full object-cover transition duration-500 hover:scale-105 md:h-[380px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/40 via-transparent to-transparent" />

          </div>

        </div>

      </Container>
    </section>
  );
}