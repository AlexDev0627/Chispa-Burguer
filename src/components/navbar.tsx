import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#menu', label: 'Menú' },
  { href: '#galeria', label: 'Galería' },
  { href: '#testimonios', label: 'Reseñas' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex items-center justify-between py-4">
          <a
            href="#inicio"
            onClick={(e) => handleClick(e, '#inicio')}
            className="text-3xl font-black tracking-tight"
          >
            <span className="text-orange-600">chispa</span>
            <span className="text-orange-400">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`font-medium transition-colors duration-200 ${
                  scrolled
                    ? 'text-stone-700 hover:text-orange-500'
                    : 'text-white hover:text-orange-300'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contacto"
            onClick={(e) => handleClick(e, '#contacto')}
            className="hidden md:inline-block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-semibold transition-colors duration-200 shadow-md shadow-orange-200"
          >
            Reservar
          </a>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
            className={`md:hidden p-2 rounded-md ${
              scrolled ? 'text-stone-700' : 'text-white'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-7 h-7"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-lg border-t border-stone-100">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="py-2 text-stone-700 font-medium hover:text-orange-500"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => handleClick(e, '#contacto')}
              className="mt-2 text-center bg-orange-500 text-white px-5 py-2 rounded-full font-semibold"
            >
              Reservar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
