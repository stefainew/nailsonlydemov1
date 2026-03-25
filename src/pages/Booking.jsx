import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const services = [
  { name: 'Класически маникюр', price: 'от 35 лв.', desc: 'Прецизно оформяне, почистване на кутикули и подхранваща терапия за естествен блясък.' },
  { name: 'Гел / шелак', price: 'от 45 лв.', desc: 'Дълготраен цвят и безупречен финиш с професионални продукти от най-висок клас.' },
  { name: 'Удължаване', price: 'от 80 лв.', desc: 'Перфектна форма и дължина с помощта на иновативни техники за естествен вид.' },
  { name: 'Nail Art', price: 'от 10 лв.', desc: 'Авторски дизайни и ръчно рисувани детайли за вашата уникална визия.' },
]

const calendarDays = [
  { day: '28', prev: true }, { day: '29', prev: true }, { day: '30', prev: true }, { day: '31', prev: true },
  { day: '1' }, { day: '2' }, { day: '3' },
  { day: '4' }, { day: '5', selected: true }, { day: '6' }, { day: '7' },
  { day: '8' }, { day: '9' }, { day: '10', muted: true },
  { day: '11' }, { day: '12' }, { day: '13' },
]

const timeSlots = ['09:00', '11:00', '14:00', '15:30', '16:00', '17:30']

export default function Booking() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative h-[614px] flex items-center justify-center overflow-hidden mb-24">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-60"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMyg1aDvCvlfabuDhwGWrehQy84VAtzNdCFkEK65DGz87ZzsUFSDO_VAYnAbwVolS-6_FZNvLTxGJJQhwc9E8q21q1X1dkCrNfsfFOZLPLsCJARtpaJcse9kIKM3QpJybjWnXBOL5pVtDRuUzx15Zb7b89Q_LNEGJCuC5Yc86pkPdFlH8Ke2LCeeuyXW622gx9t1vphl8e2EN_JT74_eCS_7tEEcTEBR6WMEwapxhMBZ1yU3SvV3TmmmKFRJIxU7kEmta-Ln3Xfftm"
              alt="elegant female hands with neutral manicure resting on soft silk fabric"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background"></div>
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="font-display italic text-5xl md:text-7xl lg:text-8xl text-primary max-w-4xl mx-auto leading-tight">
              Запазете Вашия <br />
              <span className="font-serif font-light text-tertiary">Момент за Красота</span>
            </h1>
            <div className="shimmer-line w-32 mx-auto mt-8"></div>
          </div>
        </section>

        {/* Booking Steps */}
        <div className="max-w-5xl mx-auto px-6 pb-32">

          {/* Step 1: Service */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <span className="font-serif italic text-4xl text-secondary">01</span>
              <h2 className="font-display text-3xl text-on-background">Избор на Услуга</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((svc, i) => (
                <label key={svc.name} className="group relative block cursor-pointer">
                  <input defaultChecked={i === 0} className="peer sr-only" name="service" type="radio" />
                  <div className="bg-surface-container-lowest p-8 border border-outline-variant/15 transition-all duration-500 peer-checked:bg-surface-container-high peer-checked:shadow-xl peer-checked:shadow-primary/5">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-display text-xl text-primary">{svc.name}</h3>
                      <span className="font-body text-sm font-medium text-secondary">{svc.price}</span>
                    </div>
                    <p className="text-on-surface-variant/80 text-sm leading-relaxed mb-6 font-light">{svc.desc}</p>
                    <div className="w-6 h-6 rounded-full border border-outline-variant flex items-center justify-center peer-checked:bg-primary transition-colors">
                      <span className="material-symbols-outlined text-white text-xs opacity-0 peer-checked:opacity-100">check</span>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </section>

          {/* Step 2: Date & Time */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <span className="font-serif italic text-4xl text-secondary">02</span>
              <h2 className="font-display text-3xl text-on-background">Избор на Дата и Час</h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Calendar */}
              <div className="flex-1 bg-surface-container-low p-8 rounded-lg">
                <div className="flex justify-between items-center mb-8">
                  <h4 className="font-display text-lg italic">Септември 2024</h4>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined cursor-pointer hover:text-primary">chevron_left</span>
                    <span className="material-symbols-outlined cursor-pointer hover:text-primary">chevron_right</span>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-xs tracking-widest text-on-surface-variant mb-4 font-bold uppercase">
                  {['Пн','Вт','Ср','Чт','Пт','Сб','Нд'].map(d => <span key={d}>{d}</span>)}
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-sm">
                  {calendarDays.map((d, i) => (
                    <div
                      key={i}
                      className={`py-3 ${
                        d.selected
                          ? 'bg-primary text-white font-medium'
                          : d.prev || d.muted
                          ? 'text-outline-variant'
                          : 'hover:bg-white cursor-pointer transition-colors'
                      }`}
                    >
                      {d.day}
                    </div>
                  ))}
                </div>
              </div>
              {/* Time Slots */}
              <div className="w-full lg:w-72">
                <h4 className="font-display text-lg mb-6 text-tertiary">Свободни часове</h4>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((t, i) => (
                    <button
                      key={t}
                      className={`py-3 px-4 text-sm transition-colors ${
                        i === 1
                          ? 'bg-primary text-white'
                          : 'border border-outline-variant/30 hover:border-primary hover:text-primary'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Step 3: Personal Info */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <span className="font-serif italic text-4xl text-secondary">03</span>
              <h2 className="font-display text-3xl text-on-background">Вашите Данни</h2>
            </div>
            <div className="space-y-12">
              {[
                { id: 'bname', label: 'Име', type: 'text' },
                { id: 'bphone', label: 'Телефон', type: 'tel' },
              ].map(f => (
                <div key={f.id} className="relative">
                  <input
                    className="block w-full border-0 border-b border-outline-variant bg-transparent py-4 text-lg focus:ring-0 focus:border-primary peer"
                    id={f.id}
                    placeholder=" "
                    type={f.type}
                  />
                  <label
                    className="absolute top-4 left-0 text-outline-variant font-body transition-all duration-300 cursor-text peer-focus:text-xs peer-placeholder-shown:text-base"
                    htmlFor={f.id}
                  >
                    {f.label}
                  </label>
                </div>
              ))}
              <div className="relative">
                <textarea
                  className="block w-full border-0 border-b border-outline-variant bg-transparent py-4 text-lg focus:ring-0 focus:border-primary peer resize-none"
                  id="bmessage"
                  placeholder=" "
                  rows="1"
                ></textarea>
                <label
                  className="absolute top-4 left-0 text-outline-variant font-body transition-all duration-300 cursor-text peer-focus:text-xs"
                  htmlFor="bmessage"
                >
                  Съобщение (незадължително)
                </label>
              </div>
            </div>
          </section>

          {/* Confirm Button */}
          <div className="pt-12">
            <button className="satin-button w-full text-on-primary py-6 text-xl font-display tracking-widest hover:opacity-95 transition-all duration-500 shadow-2xl shadow-primary/20">
              Потвърдете Вашата Резервация
            </button>
            <p className="text-center text-xs text-on-surface-variant/60 mt-6 font-light italic">
              С потвърждението се съгласявате с нашите общи условия и политика за поверителност.
            </p>
          </div>
        </div>
      </main>

      <footer className="w-full py-12 px-8 border-t border-stone-200 bg-stone-100">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 max-w-7xl mx-auto">
          <div className="font-serif italic text-xl text-rose-900">Nail Studio Sofia</div>
          <div className="flex flex-wrap justify-center gap-8 font-serif text-sm tracking-wide text-stone-500">
            <a href="#" className="hover:text-rose-700 hover:translate-y-[-1px] transition-transform">Политика за поверителност</a>
            <a href="#" className="hover:text-rose-700 hover:translate-y-[-1px] transition-transform">Общи условия</a>
            <a href="#" className="hover:text-rose-700 hover:translate-y-[-1px] transition-transform flex items-center gap-1">
              <span className="material-symbols-outlined text-base">photo_camera</span> Instagram
            </a>
            <a href="#" className="hover:text-rose-700 hover:translate-y-[-1px] transition-transform flex items-center gap-1">
              <span className="material-symbols-outlined text-base">social_leaderboard</span> Facebook
            </a>
          </div>
          <div className="font-serif text-sm tracking-wide text-stone-500">
            © 2024 Nail Studio Sofia. Всички права запазени.
          </div>
        </div>
      </footer>
    </div>
  )
}
