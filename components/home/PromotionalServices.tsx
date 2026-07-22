import { Bebas_Neue } from "next/font/google";
import Container from "@/components/ui/Container";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const promotions = [
  {
    title: "FREE SITE INSPECTION & CONSULTATION",
    description:
      "Onsite evaluation, project feasibility advice, and initial cost estimates within the city and nearby municipalities.",
  },
  {
    title: "FREE PROJECT ESTIMATE",
    description:
      "Receive a detailed bill of quantities, labor breakdown, and transparent cost estimates tailored to your budget.",
  },
  {
    title: "DISCOUNTED CONSTRUCTION PACKAGES",
    description:
      "Enjoy promotional package rates for residential and commercial construction with limited-time offers.",
  },
  {
    title: "FLEXIBLE PAYMENT TERMS",
    description:
      "Convenient payment options including progress billing, bank financing, and customized payment schedules.",
  },
  {
    title: "QUALITY MATERIALS PROMO",
    description:
      "Selected projects receive complimentary material upgrades using trusted and premium construction brands.",
  },
  {
    title: "WARRANTY & AFTER-SALES SERVICE",
    description:
      "Every completed project includes workmanship warranty and responsive after-sales support for peace of mind.",
  },
  {
    title: "PROJECT TURNOVER FREEBIES",
    description:
      "Receive complimentary final cleaning, project documentation, and as-built drawings upon project completion.",
  },
];

export default function PromotionalServices() {
  return (
    <section className="bg-[#F8F9FB] py-24">
      <Container>
        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <p
            className={`${bebas.className} text-lg tracking-[3px] text-[#F4C430]`}
          >
            CURRENT PROMOTIONS
          </p>

          <h2
            className={`${bebas.className} mt-2 text-5xl uppercase leading-none text-[#0A1F44] md:text-6xl`}
          >
            PROMOTIONAL
            <br />
            SERVICES OFFERED
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We make quality construction more accessible through exclusive
            offers, flexible payment options, and value-added services for
            every client.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {promotions.map((promo, index) => (
            <article
              key={promo.title}
              className="group rounded-2xl border border-[#003D78]/30 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#003D78] hover:shadow-xl"
            >
              <div className="flex items-start gap-5">
                {/* Number */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F4C430] font-bold text-[#0A1F44] transition duration-300 group-hover:scale-110">
                  {index + 1}
                </div>

                {/* Content */}
                <div>
                  <h3
                    className={`${bebas.className} text-2xl uppercase text-[#0A1F44]`}
                  >
                    {promo.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {promo.description}
                  </p>

                  {/* Accent Line */}
                  <div className="mt-6 h-[3px] w-12 rounded-full bg-[#F4C430] transition-all duration-300 group-hover:w-24" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}