import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { to: '/', label: 'Начало' },
    { to: '/services', label: 'Услуги' },
    { to: '/gallery', label: 'Портфолио' },
    { to: '/about', label: 'За нас' },
    { to: '/contact', label: 'Контакт' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-rose-100/20 shadow-sm">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 md:py-6 max-w-screen-2xl mx-auto">
        <Link to="/" className="text-xl md:text-2xl font-light tracking-[0.2em] text-on-background font-serif-editorial">
          NAIL STUDIO
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-12 items-center">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`font-serif-editorial font-light italic text-lg uppercase tracking-widest transition-colors duration-500 ${
                pathname === to
                  ? 'text-primary border-b border-secondary/30 pb-1'
                  : 'text-tertiary hover:text-primary'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/booking"
            className="satin-button text-on-primary px-5 md:px-8 py-2.5 md:py-3 rounded-lg font-medium tracking-wide hover:opacity-90 transition-all duration-500 active:scale-95 text-sm md:text-base"
          >
            Запази час
          </Link>

          {/* Hamburger button — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <span
              className={`block w-6 h-0.5 bg-current text-on-background transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current text-on-background transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current text-on-background transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden glass-nav border-t border-rose-100/20 px-6 py-4 flex flex-col gap-4">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={`font-serif-editorial font-light italic text-base uppercase tracking-widest transition-colors duration-300 ${
                pathname === to
                  ? 'text-primary border-b border-secondary/30 pb-1 w-fit'
                  : 'text-tertiary hover:text-primary'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
