import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <header className="relative px-8 py-24 md:py-32 overflow-hidden flex flex-col items-center text-center">
          <div className="absolute inset-0 -z-10 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-tertiary-fixed rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
          </div>
          <h1 className="font-authority text-5xl md:text-7xl lg:text-8xl text-on-surface-variant leading-tight mb-6">
            Нашите <span className="font-editorial italic font-light">Услуги</span>
          </h1>
          <p className="max-w-2xl font-body text-on-surface-variant/80 text-lg md:text-xl font-light tracking-wide leading-relaxed">
            Потопете се в свят на изтънченост и детайл. Всяка процедура в Nail Studio Sofia е ритуал за красота, изпълнен с най-висококачествени материали и артистичен замах.
          </p>
          <div className="mt-12 shimmer-line w-48 mx-auto"></div>
        </header>

        {/* Services Bento Grid */}
        <section className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

            {/* Classic Manicure - Large Featured */}
            <div className="md:col-span-7 group">
              <div className="relative overflow-hidden rounded-lg aspect-[16/10] mb-6">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL9WiLTjsv2CSUevXWZ1IC1he5quQbwMlBG2AoavQC5Lm8dKmBv0JeDX97ogwIytENdY94qmCrBhC_By8mpf4tvIyQpr6uOHC7EnxuI4H5o5GUuiPNRzeTqSe5AMF8nadczkO04G9QGySz-aDzOA5JcMw_iekjhMMyDn4cNmyP2K_bYK-ZY-GzVaHUNcbSqCw4l9_8RLgw_EywTqDMR4s8JAAEyDHKV0Ogp0myXbG2Ksd1qKXYgxzV4kvAJRhU0A6RWBr72Xr8llOS"
                  alt="close-up of elegant classic manicure on pale skin with soft natural lighting"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="font-authority text-3xl mb-1">Класически маникюр</h2>
                  <p className="font-editorial italic text-lg opacity-90">Чистота и прецизност в детайла</p>
                </div>
              </div>
              <div className="bg-surface-container-low p-8 rounded-lg shadow-sm">
                <p className="text-on-surface-variant font-light mb-6 leading-relaxed">
                  Пълна грижа за вашите ръце, включваща оформяне на свободен край, почистване на кутикула с апаратен или комбиниран метод и подхранващ финиш.
                </p>
                <div className="flex justify-between items-center border-t border-outline-variant/20 pt-6">
                  <span className="font-label text-sm uppercase tracking-widest text-secondary flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">schedule</span> 45 - 60 мин.
                  </span>
                  <span className="font-authority text-2xl text-primary">от 35 лв.</span>
                </div>
              </div>
            </div>

            {/* Gel / Shellac */}
            <div className="md:col-span-5 flex flex-col h-full">
              <div className="bg-surface-container-highest p-8 rounded-lg flex-grow mb-8 border border-outline-variant/10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="font-authority text-3xl text-on-surface mb-2">Гел / шелак</h2>
                    <p className="font-editorial italic text-primary text-xl">Дълготраен блясък</p>
                  </div>
                  <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    ['Поставяне на гел лак', '45 лв.'],
                    ['Сваляне + нов маникюр', '55 лв.'],
                    ['Укрепване с база', '+10 лв.'],
                  ].map(([label, price]) => (
                    <li key={label} className="flex justify-between items-end gap-4">
                      <span className="font-label text-on-surface-variant">{label}</span>
                      <div className="flex-grow border-b border-dotted border-outline-variant mb-1"></div>
                      <span className="font-authority text-primary">{price}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-light text-on-surface-variant italic mb-6">
                  Работим с премиум брандове, които осигуряват до 4 седмици безупречен вид без увреждане на нокътната плочка.
                </p>
                <Link to="/booking" className="block w-full py-4 satin-cta text-on-primary font-label text-sm uppercase tracking-widest rounded-lg hover:opacity-90 transition-all text-center">
                  Запази час
                </Link>
              </div>
              <div className="rounded-lg overflow-hidden flex-shrink-0 aspect-square md:aspect-auto md:h-64">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJto8vHXN_uT692bB0aWiPIoxfS2z0frmuUWperXLpN41eLzk3Ha7WiGkG24tOOH4D8-v0iVRbbGwg87mysNnwnbNA7SjoUjbwBYOzceqmJDhRp4xGokD4-wzhcu_bCSiuNwottF5SMqYESCroT-W5vFwUofgFuQLTWDiyHWUCh0MlgobCEToOyvHz3vQvzEm7fIadFopDcdaI8XXp2Np5ixeAaHSvX6GhsgvdrLtjy6w8oPh8SRoxsdKI-lD6VuVKn7c6j2ECSF4l"
                  alt="bottles of high-end nail polish on a marble surface"
                />
              </div>
            </div>

            {/* Nail Art */}
            <div className="md:col-span-12 grid md:grid-cols-2 bg-tertiary rounded-lg overflow-hidden text-on-tertiary mt-8">
              <div className="p-12 flex flex-col justify-center">
                <h2 className="font-authority text-4xl mb-4">Nail Art &amp; Дизайн</h2>
                <p className="font-editorial italic text-2xl mb-8 opacity-80">Вашите нокти като платно</p>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <span className="material-symbols-outlined mt-1 text-secondary-fixed">brush</span>
                    <div>
                      <h4 className="font-authority text-xl">Ръчна рисунка</h4>
                      <p className="font-light text-on-tertiary/70 text-sm">Уникални флорални и геометрични мотиви, създадени специално за вас.</p>
                      <span className="inline-block mt-2 font-authority text-secondary-fixed">от 5 лв / нокът</span>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="material-symbols-outlined mt-1 text-secondary-fixed">flare</span>
                    <div>
                      <h4 className="font-authority text-xl">Инкрустация с кристали</h4>
                      <p className="font-light text-on-tertiary/70 text-sm">Прецизно поставяне на камъни Swarovski и метални елементи.</p>
                      <span className="inline-block mt-2 font-authority text-secondary-fixed">от 2 лв / нокът</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-96 md:h-full min-h-[400px] relative">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuaDlOH9m37890oukgkZ43ct7KaeekIlGnrtlR9i3636F76h5hl_Xxr0o2UgXe_BIkTgqkgH6BuwyUtEIDO6NQw4aGSa5Pl2nOF8jkMoymwECxswgfZBzGLTCTDfor_SIRk2gNNPYDACBo8MlvN5rv0GAfrk8JZHjQqJzsSM1NQd6HszXvZPz82Bu5wXAlvRur-AkJ5I3-t8RdgFYApXh940xY0ESwL45KFWVKy3cTA4Doq-fR3BVkV30LUM8UoR135ODsd3BiP6vz"
                  alt="macro shot of intricate minimalist nail art with delicate gold lines"
                />
              </div>
            </div>

            {/* Extensions */}
            <div className="md:col-span-12 lg:col-span-6 mt-8">
              <div className="group relative bg-surface-container p-12 rounded-lg border border-outline-variant/10 hover:bg-surface-container-high transition-colors">
                <div className="mb-8">
                  <span className="inline-block px-4 py-1 rounded-full border border-primary text-primary font-editorial italic text-sm mb-4">Премиум грижа</span>
                  <h2 className="font-authority text-4xl text-on-surface">Удължаване с гел</h2>
                </div>
                <p className="text-on-surface-variant font-light text-lg mb-8 max-w-lg">
                  Създаваме перфектната форма и дължина, която изглежда напълно естествено. Използваме хипоалергенни материали за максимална здравина и комфорт.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-2">Времетраене</h4>
                    <p className="font-authority text-xl">120 - 150 мин.</p>
                  </div>
                  <div>
                    <h4 className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-2">Цена</h4>
                    <p className="font-authority text-xl">от 85 лв.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialized Care */}
            <div className="md:col-span-12 lg:col-span-6 mt-8 h-full">
              <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden group">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC27n6QC1Tn3jyiNQ8HTq_VvTMTTFXToA579uHuOiJqkKd6ZR8adTaRT5mgc5n9z6mezvYZGb9Q5gvydkio_aYK_ZUazpIRzZJVRIBU4oaPabm6h2mfvYkVzg0DSMUXypzyBWzJhOyFVrcxTKPzRturOBctQIeEVG9-nmFUBFihL_GY-G3x6xz0sg2LS4AUeP7U4Vmu1WL3ySwSa3KpV2QZGYv4Y23nnu6v0hfUsbLA9pVlq5xysSSvPP9yDma2VXj4Q3hblnozoyJ2"
                  alt="luxury spa environment with professional manicure tools"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
                <div className="absolute inset-x-8 bottom-8 p-8 bg-surface/90 backdrop-blur-md rounded-lg">
                  <h3 className="font-authority text-2xl text-on-surface mb-2">Терапия за ръце</h3>
                  <p className="font-body text-sm font-light text-on-surface-variant">Парафинова вана и релаксиращ масаж за кадифена кожа.</p>
                  <Link to="/booking" className="inline-block mt-4 font-editorial italic text-primary hover:tracking-wider transition-all underline underline-offset-4">
                    Научете повече
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-8 text-center bg-surface-container-low border-t border-outline-variant/10">
          <h2 className="font-authority text-4xl md:text-5xl text-on-surface mb-8">
            Готови ли сте за своята <span className="font-editorial italic">трансформация?</span>
          </h2>
          <p className="max-w-xl mx-auto font-body font-light text-on-surface-variant mb-12">
            Запазете своя час онлайн лесно и бързо или ни се обадете за персонална консултация.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/booking" className="px-10 py-4 satin-cta text-on-primary font-label text-sm uppercase tracking-widest rounded-lg shadow-lg hover:translate-y-[-2px] transition-all">
              Онлайн Резервация
            </Link>
            <Link to="/contact" className="px-10 py-4 border border-outline text-on-surface font-label text-sm uppercase tracking-widest rounded-lg hover:bg-surface-container-highest transition-all">
              Свържете се с нас
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
