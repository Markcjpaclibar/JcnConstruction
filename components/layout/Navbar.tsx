"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Building2,
  LogOut,
} from "lucide-react";
import { Bebas_Neue } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase-browser";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "PROJECTS", href: "/projects" },
  { name: "SERVICES", href: "/services" },
  { name: "CLIENTS", href: "/clients" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const supabase = createClient();

  const isAdminPage = pathname.startsWith("/admin");

  const closeMenu = () => setMenuOpen(false);

  async function handleLogout() {
    await supabase.auth.signOut();

    router.push("/login");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* ================= Logo ================= */}

       <Link
  href="/"
  onClick={closeMenu}
  className="flex items-center"
>
      <Image
        src="/images/logos/logo-removebg-preview.png"
        alt="JCN Construction Company"
        width={240}
        height={60}
        priority
        className="h-8 w-auto transition duration-300 hover:scale-105 md:h-10 lg:h-12"
      />
</Link>

        {/* ================= Desktop Navigation ================= */}

        <nav className="hidden md:block">
          <ul className="flex items-center gap-10">

            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`${bebas.className} group relative text-2xl tracking-[1.5px] text-[#0A1F44] transition duration-300 hover:text-[#003D78]`}
                >
                  {link.name}

                  <span className="absolute -bottom-2 left-0 h-[3px] w-0 rounded-full bg-[#F4C430] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}

            {/* ================= Premium Logout Button ================= */}

            {isAdminPage && (
              <li>
                <button
                  onClick={handleLogout}
                  className={`${bebas.className} group relative overflow-hidden rounded-xl border border-red-500/20 bg-gradient-to-r from-red-600 via-red-500 to-red-600 px-6 py-3 text-xl tracking-[1px] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30 active:scale-95`}
                >
                  {/* Shine Effect */}

                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <span className="relative flex items-center gap-2">
                    <LogOut
                      size={20}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />

                    LOGOUT
                  </span>
                </button>
              </li>
            )}

          </ul>
        </nav>

        {/* ================= Mobile Menu Button ================= */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-[#003D78] transition hover:bg-gray-100 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>
      </div>

      {/* ================= Mobile Menu ================= */}

      <div
        className={`overflow-hidden bg-white shadow-lg transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-[700px]" : "max-h-0"
        }`}
      >
        <nav>
          <ul className="flex flex-col py-4">

            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={`${bebas.className} block border-b border-gray-100 px-6 py-5 text-2xl tracking-[1px] text-[#0A1F44] transition hover:bg-[#003D78] hover:text-[#F4C430]`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* ================= Mobile Logout ================= */}

            {isAdminPage && (
              <li>
                <button
                  onClick={async () => {
                    closeMenu();
                    await handleLogout();
                  }}
                  className={`${bebas.className} flex w-full items-center gap-3 border-b border-gray-100 bg-gradient-to-r from-red-600 to-red-500 px-6 py-5 text-left text-2xl tracking-[1px] text-white transition-all duration-300 hover:from-red-700 hover:to-red-600`}
                >
                  <LogOut
                    size={24}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                  LOGOUT
                </button>
              </li>
            )}

          </ul>
        </nav>
      </div>
    </header>
  );
}