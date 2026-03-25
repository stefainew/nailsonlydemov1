import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-tertiary text-on-tertiary">
      <div className="flex flex-col items-center text-center px-4 w-full pt-20 pb-10 max-w-screen-2xl mx-auto">
        <div className="text-3xl font-light text-background tracking-widest mb-4 font-serif-editorial">
          NAIL STUDIO SOFIA
        </div>
        <div className="flex gap-10 mb-12 mt-8">
          <a href="#" className="text-background/70 hover:text-primary-container transition-colors duration-500 font-sans-ui text-sm uppercase tracking-widest">Instagram</a>
          <a href="#" className="text-background/70 hover:text-primary-container transition-colors duration-500 font-sans-ui text-sm uppercase tracking-widest">Facebook</a>
          <Link to="/contact" className="text-background/70 hover:text-primary-container transition-colors duration-500 font-sans-ui text-sm uppercase tracking-widest">Contact</Link>
        </div>
        <div className="shimmer-line w-full mb-12 opacity-30"></div>
        <p className="font-sans-ui font-light text-background/50 text-sm">
          © 2024 NAIL STUDIO SOFIA. Красотата е в детайлите.
        </p>
      </div>
    </footer>
  )
}
