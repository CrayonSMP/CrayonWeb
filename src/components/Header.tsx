import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, PlayCircle } from "lucide-react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar px-4 md:px-8 py-3 backdrop-blur-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-white hover:text-gray-200 transition"
        >
          <img
            src="https://crayonsmp.com/logo.png"
            alt="CrayonSMP Logo"
            className="w-8 h-8 rounded-full"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/32x32/1e1e1e/e0e0e0?text=C";
            }}
          />
          <span>
            Crayon<span className="accent-text">SMP</span>
          </span>
        </Link>

        <div className="flex items-center space-x-6">
          <a
            href="/#about"
            className="text-gray-300 hover:text-white transition font-medium"
          >
            About
          </a>
          <a
            href="/#how-it-works"
            className="text-gray-300 hover:text-white transition font-medium"
          >
            How it Works
          </a>
          <Link
            to="/rules"
            className="text-gray-300 hover:text-white transition font-medium"
          >
            Rules
          </Link>
          <a
            href="/#plugins"
            className="text-gray-300 hover:text-white transition font-medium"
          >
            Tech
          </a>
          <a
            href="/#developers"
            className="text-gray-300 hover:text-white transition font-medium"
          >
            Developers
          </a>
          <a
            href="/pioneers"
            className="text-gray-300 hover:text-white transition font-medium"
          >
            Pioneers
          </a>
          <a
            href="/team"
            className="text-gray-300 hover:text-white transition font-medium"
          >
            Team
          </a>
          <a
            href="https://discord.gg/M2M6m3j2Qf"
            className="cta-button secondary text-sm py-2 px-4"
          >
            <PlayCircle className="w-4 h-4" />
            <span>Join Now</span>
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-2 px-4 pb-4">
          <a
            href="/#about"
            onClick={closeMobileMenu}
            className="block text-gray-300 hover:text-white transition font-medium px-3 py-2 rounded-md hover:bg-gray-700"
          >
            About
          </a>
          <a
            href="/#how-it-works"
            onClick={closeMobileMenu}
            className="block text-gray-300 hover:text-white transition font-medium px-3 py-2 rounded-md hover:bg-gray-700"
          >
            How it Works
          </a>
          <Link
            to="/rules"
            onClick={closeMobileMenu}
            className="block text-gray-300 hover:text-white transition font-medium px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Rules
          </Link>
          <a
            href="/#plugins"
            onClick={closeMobileMenu}
            className="block text-gray-300 hover:text-white transition font-medium px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Tech
          </a>
          <a
            href="/#developers"
            onClick={closeMobileMenu}
            className="block text-gray-300 hover:text-white transition font-medium px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Developers
          </a>
          <a
            href="/pioneers"
            onClick={closeMobileMenu}
            className="block text-gray-300 hover:text-white transition font-medium px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Pioneers
          </a>
          <a
            href="/team"
            onClick={closeMobileMenu}
            className="block text-gray-300 hover:text-white transition font-medium px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Team
          </a>
          <a
            href="https://discord.gg/M2M6m3j2Qf"
            className="block cta-button secondary text-sm w-full mt-2"
          >
            <PlayCircle className="w-4 h-4" />
            <span>Join Now</span>
          </a>
        </div>
      )}
    </nav>
  );
}

export default Header;
