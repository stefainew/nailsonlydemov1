import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()

  const links = [
    { to: '/', label: 'Начало' },
    { to: '/services', label: 'Услуги' },
    { to: '/gallery', label: 'Портфолио' },
    { to: '/about', label: 'За нас' },
    { to: '/contact', label: 'Контакт' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-rose-100/20 shadow-sm">
      <div className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
        <Link to="/" className="text-2xl font-light tracking-[0.2em] text-on-background font-serif-editorial">
          NAIL STUDIO
        </Link>
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
        <Link
          to="/booking"
          className="satin-button text-on-primary px-8 py-3 rounded-lg font-medium tracking-wide hover:opacity-90 transition-all duration-500 active:scale-95"
        >
          Запази час
        </Link>
      </div>
    </nav>
  )
}
