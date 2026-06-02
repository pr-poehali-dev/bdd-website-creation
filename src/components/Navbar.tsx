import { useState } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { href: "#violation", label: "Заметил нарушение" },
  { href: "#injury", label: "Получил травму" },
  { href: "#about", label: "О БДД" },
  { href: "#chat", label: "Консультация" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2 font-bold text-xl text-primary">
          <Icon name="Shield" size={24} />
          <span>БДД</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#chat"
            className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Получить помощь
          </a>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary py-1 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#chat"
            className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg text-center hover:bg-primary/90 transition-colors mt-1"
            onClick={() => setOpen(false)}
          >
            Получить помощь
          </a>
        </div>
      )}
    </header>
  );
}
