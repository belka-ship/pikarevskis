import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-semibold">
            <a href="#" className="hover:text-accent transition-colors">
              Doronichev
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
