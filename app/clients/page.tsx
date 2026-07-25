import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ClientsHero from "@/components/clients/ClientsHero";
import ClientsStats from "@/components/clients/ClientsStats";
import ClientRelationships from "@/components/clients/ClientRelationships";
export default function ClientsPage() {
  return (
    <>
      <Navbar />

      <main>
        <ClientsHero />
        <ClientsStats />
        <ClientRelationships />
      </main>

      <Footer />
    </>
  );
}