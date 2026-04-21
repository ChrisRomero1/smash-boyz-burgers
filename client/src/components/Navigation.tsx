import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/locations", label: "Locations" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-foreground text-background shadow-lg">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 font-bold text-xl md:text-2xl hover:opacity-80 transition">
            <img src="/logo.jpg" alt="Smash Boyz" className="w-10 h-10 rounded-full object-cover" />
            <span>SMASH BOYZ</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="font-semibold hover:text-accent transition">
                {link.label}
              </a>
            </Link>
          ))}
          <a
            href="https://cash.app/order/$smashboyzus"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4"
          >
            <Button className="bg-accent text-foreground hover:bg-accent/90 font-bold">
              Order Now
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-foreground border-t-2 border-accent">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className="font-semibold hover:text-accent transition block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <a
              href="https://cash.app/order/$smashboyzus"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button className="w-full bg-accent text-foreground hover:bg-accent/90 font-bold">
                Order Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
