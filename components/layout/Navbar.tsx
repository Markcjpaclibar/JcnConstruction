"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, LogOut } from "lucide-react";
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
  { name: "SERVICES", href: "/#services" },
  { name: "CLIENTS", href: "/clients" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const supabase = createClient();

  const isAdminPage = pathname.startsWith("/admin");

  /*
   * Detect scrolling
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Close mobile menu when route changes
   */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /*
   * Logout
   */
  async function handleLogout() {
    await supabase.auth.signOut();

    router.push("/login");
    router.refresh();
  }

  /*
   * Active navigation item
   */
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    if (href.startsWith("/#")) {
      return false;
    }

    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-gray-200/70 bg-white/85 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* ================= Main Navbar ================= */}

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:h-24 lg:px-8">

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
            className="h-10 w-auto object-contain md:h-12"
          />
        </Link>

        {/* ================= Desktop Navigation ================= */}

        <nav className="hidden md:block">
          <ul className="flex items-center gap-7 lg:gap-9">

            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`${bebas.className} group relative text-lg tracking-[1.5px] transition-colors duration-300 lg:text-xl ${
                      scrolled
                        ? "text-[#0A1F44] hover:text-[#003D78]"
                        : "text-white hover:text-[#F4C430]"
                    }`}
                  >
                    {link.name}

                    {/* Active / Hover Indicator */}

                    <span
                      className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-[#F4C430] transition-all duration-300 ${
                        active
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}

            {/* ================= Admin Logout ================= */}

            {isAdminPage && (
              <li>
                <button
                  onClick={handleLogout}
                  className={`${bebas.className} group flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-lg tracking-[1px] text-white shadow-lg transition-all duration-300 hover:bg-red-700 hover:shadow-xl`}
                >
                  <LogOut
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                  LOGOUT
                </button>
              </li>
            )}

          </ul>
        </nav>

        {/* ================= Mobile Menu Button ================= */}

        <button
          onClick={() => setMenuOpen((open) => !open)}
          className={`rounded-lg p-2 transition-colors duration-300 md:hidden ${
            scrolled
              ? "text-[#0A1F44] hover:bg-gray-100"
              : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
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
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[700px]"
            : "max-h-0"
        } ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl"
            : "bg-black/60 backdrop-blur-xl"
        }`}
      >
        <nav>
          <ul className="flex flex-col">

            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`${bebas.className} relative block border-b px-6 py-5 text-xl tracking-[1px] transition-colors duration-300 ${
                      scrolled
                        ? "border-gray-100 text-[#0A1F44] hover:bg-gray-50 hover:text-[#003D78]"
                        : "border-white/10 text-white hover:bg-white/10 hover:text-[#F4C430]"
                    } ${
                      active
                        ? scrolled
                          ? "bg-gray-50 text-[#003D78]"
                          : "bg-white/10 text-[#F4C430]"
                        : ""
                    }`}
                  >
                    {link.name}

                    {active && (
                      <span className="absolute bottom-0 left-6 h-[2px] w-10 bg-[#F4C430]" />
                    )}
                  </Link>
                </li>
              );
            })}

            {/* ================= Mobile Logout ================= */}

            {isAdminPage && (
              <li>
                <button
                  onClick={async () => {
                    closeMenu();
                    await handleLogout();
                  }}
                  className={`${bebas.className} flex w-full items-center gap-3 bg-red-600 px-6 py-5 text-left text-xl tracking-[1px] text-white transition-colors duration-300 hover:bg-red-700`}
                >
                  <LogOut size={22} />

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