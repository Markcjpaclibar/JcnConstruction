"use client";

import { useState } from "react";
import { Bebas_Neue } from "next/font/google";

import Container from "@/components/ui/Container";

import { licenses } from "@/data/Licenses";
import { License } from "@/types/license";

import LicenseRow from "./LicenseRow";
import LicenseModal from "./LicenseModal";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function Licenses() {
  const [selectedLicense, setSelectedLicense] = useState<License | null>(null);

  return (
    <>
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <Container>

          {/* Section Heading */}

          <div className="mb-12 text-center">

            <p
              className={`${bebas.className} tracking-[5px] text-[#F4C430]`}
            >
              COMPLIANCE
            </p>

            <h2
              className={`${bebas.className} mt-2 text-4xl text-[#0A1F44] sm:text-5xl lg:text-6xl`}
            >
              OUR LICENSES & PERMITS
            </h2>

            <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#F4C430]" />

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 md:text-lg md:leading-8">
              JCN Construction operates with complete legal compliance.
              Below are our official licenses and permits that demonstrate
              our commitment to professionalism, transparency, and quality
              service.
            </p>

          </div>

          {/* License List */}

          <div className="mx-auto max-w-5xl space-y-5">

            {licenses.map((license) => (
              <LicenseRow
                key={license.id}
                license={license}
                onView={setSelectedLicense}
              />
            ))}

          </div>

        </Container>
      </section>

      {/* Modal */}

      <LicenseModal
        license={selectedLicense}
        onClose={() => setSelectedLicense(null)}
      />
    </>
  );
}