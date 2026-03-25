import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />

      <main className="min-h-screen pt-24 md:pt-0 flex flex-col md:flex-row">
        {/* Left Side: Cinematic Brand Statement */}
        <section className="relative w-full md:w-1/2 min-h-[512px] md:min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-surface-container-low via-surface to-primary-fixed/20 z-0"></div>
          <img
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-40 z-0"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1y5Wqc1hCg5rBuhHvRuuRAte_gBpIZ4Cyr29n06EWsBUZgeC1c8q9_2FAMq7fVvaWh-KAQMj1kzFA3BWfVraz7JyPhF3u6zRZLFtdrO0wNFbCKkbENZLh7XU2csQeIuWS_S7Q2wTW-EpTQ2zR5JC7RXnEvMgFO0_62__DBsTIu0DCQGmDw_Q0Yykw7V-wKnbYZe-ofj56WSUMsnNVEqgvbu-TeG_jJKu8AjxvKgb7JI_ZGDBDdLinOEYCd3hM1i32EiExxueKtrAh"
            alt="close-up of elegant manicured hands with soft rose petal background"
          />
          <div className="relative z-10 p-12 text-center md:text-left">
            <h1 className="font-editorial text-5xl md:text-7xl lg:text-8xl italic font-light text-on-surface leading-tight tracking-tight">
              Красотата е <br /> в <span className="text-primary-container">детайлите.</span>
            </h1>
            <div className="mt-8 flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-[1px] bg-secondary opacity-40"></div>
              <p className="font-editorial italic text-xl text-tertiary">Sofia, Bulgaria</p>
            </div>
          </div>
        </section>

        {/* Right Side: Booking Form */}
        <section className="w-full md:w-1/2 bg-background p-8 md:p-24 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <header className="mb-16">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary mb-4 block">Резервация</span>
              <h2 className="font-display text-4xl text-on-background font-light">Направете своя час</h2>
            </header>
            <form className="space-y-12">
              <div className="relative">
                <input
                  className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-2 text-on-surface transition-colors font-body"
                  id="name"
                  placeholder=" "
                  type="text"
                />
                <label className="absolute left-0 top-2 text-outline-variant transition-all pointer-events-none font-label text-sm uppercase tracking-widest" htmlFor="name">
                  Вашето Име
                </label>
              </div>
              <div className="relative">
                <input
                  className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-2 text-on-surface transition-colors font-body"
                  id="phone"
                  placeholder=" "
                  type="tel"
                />
                <label className="absolute left-0 top-2 text-outline-variant transition-all pointer-events-none font-label text-sm uppercase tracking-widest" htmlFor="phone">
                  Телефон
                </label>
              </div>
              <div className="relative">
                <select
                  className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-2 text-on-surface transition-colors font-body appearance-none"
                  id="service"
                  defaultValue=""
                >
                  <option disabled hidden value=""></option>
                  <option value="classic">Класически маникюр</option>
                  <option value="gel">Гел / шелак</option>
                  <option value="extensions">Удължаване на нокти</option>
                  <option value="art">Nail Art &amp; Дизайни</option>
                </select>
                <label className="absolute left-0 top-2 text-outline-variant transition-all pointer-events-none font-label text-sm uppercase tracking-widest" htmlFor="service">
                  Услуга
                </label>
                <span className="material-symbols-outlined absolute right-0 top-2 text-outline-variant pointer-events-none">expand_more</span>
              </div>
              <div className="relative">
                <input
                  className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-2 text-on-surface transition-colors font-body"
                  id="date"
                  placeholder=" "
                  type="date"
                />
                <label className="absolute left-0 top-2 text-outline-variant transition-all pointer-events-none font-label text-sm uppercase tracking-widest" htmlFor="date">
                  Предпочитана дата
                </label>
              </div>
              <div className="relative">
                <textarea
                  className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-2 text-on-surface transition-colors font-body resize-none"
                  id="message"
                  placeholder=" "
                  rows="1"
                ></textarea>
                <label className="absolute left-0 top-2 text-outline-variant transition-all pointer-events-none font-label text-sm uppercase tracking-widest" htmlFor="message">
                  Съобщение
                </label>
              </div>
              <button
                className="group relative w-full h-14 overflow-hidden rounded bg-gradient-to-r from-primary to-primary-container shadow-xl"
                type="button"
              >
                <span className="relative z-10 text-on-primary font-label font-medium uppercase tracking-[0.2em]">Запази час</span>
                <div className="absolute inset-0 bg-on-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </button>
            </form>

            <div className="mt-24 grid grid-cols-2 gap-8 pt-12 border-t border-outline-variant/10">
              <div>
                <h4 className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary mb-2">Адрес</h4>
                <p className="font-body text-xs text-on-surface">ул. „Оборище" 12, София</p>
              </div>
              <div>
                <h4 className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary mb-2">Работно време</h4>
                <p className="font-body text-xs text-on-surface">Пон - Съб: 09:00 - 20:00</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full pt-20 pb-10 bg-[#705953] flex flex-col items-center text-center px-4">
        <div className="text-3xl font-light text-[#fdf8f5] tracking-widest mb-4 font-['Cormorant_Garamond']">NAIL STUDIO</div>
        <div className="flex gap-8 mb-8">
          <a href="#" className="text-[#fdf8f5]/70 hover:text-[#c9847a] transition-colors duration-500 font-body text-sm tracking-widest">Instagram</a>
          <a href="#" className="text-[#fdf8f5]/70 hover:text-[#c9847a] transition-colors duration-500 font-body text-sm tracking-widest">Facebook</a>
          <Link to="/contact" className="text-[#fdf8f5]/70 hover:text-[#c9847a] transition-colors duration-500 font-body text-sm tracking-widest">Contact</Link>
        </div>
        <div className="shimmer-line w-24 mb-8"></div>
        <p className="text-[#fdf8f5]/50 font-body text-[10px] uppercase tracking-widest">© 2024 NAIL STUDIO SOFIA. Красотата е в детайлите.</p>
      </footer>
    </div>
  )
}
