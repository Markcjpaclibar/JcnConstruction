import Container from "../ui/Container";
import { Bebas_Neue, DM_Sans } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const steps = [
  {
    number: "1",
    title: "CONSULTATION",
    description:
      "Free on-site visit, project feasibility check, and initial cost estimates with no obligation.",
  },
  {
    number: "2",
    title: "DESIGN & PLANNING",
    description:
      "Full architectural and structural design with detailed bill of quantities and transparent pricing.",
  },
  {
    number: "3",
    title: "CONSTRUCTION",
    description:
      "Licensed engineers and skilled workers execute your project using only branded materials.",
  },
  {
    number: "4",
    title: "TURNOVER",
    description:
      "Final cleaning, as-built drawings, and a 1-year warranty with after-sales support.",
  },
];

export default function Process() {
  return (
    <section className="bg-[#0A1F44] py-28">
      <Container>
        {/* Heading */}
        <div className="max-w-2xl">
          <p
            className={`${bebas.className} text-xl uppercase tracking-[2px] text-[#F4C430]`}
          >
            HOW IT WORKS
          </p>

          <h2
            className={`${bebas.className} mt-3 text-5xl md:text-6xl uppercase leading-none text-white`}
          >
            OUR PROCESS
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-300">
            A clear, structured approach from first meeting to final handover.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Line */}
          <div className="absolute left-0 right-0 top-7 hidden h-[2px] bg-gray-500 lg:block" />

          {/* Steps */}
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center"
              >
                {/* Circle */}
                <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#F4C430] bg-[#003D78]">
                  <span
                    className={`${bebas.className} text-3xl text-white`}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`${bebas.className} mt-6 text-3xl uppercase text-white`}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className={`${dmSans.className} mt-4 max-w-[220px] text-sm font-medium leading-7 text-gray-300`}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}