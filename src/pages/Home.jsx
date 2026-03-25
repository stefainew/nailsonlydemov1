import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { TestimonialsColumn } from '../components/ui/testimonials-columns'

const testimonials = [
  {
    text: "Перфектен маникюр всеки път! Елена е невероятен специалист — нокти, които издържат седмици без отлепване.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    name: "Мария Георгиева",
    role: "Гел маникюр",
  },
  {
    text: "Студиото е просто магия. Атмосферата е релаксираща, а резултатът надхвърля всички очаквания. Само препоръки!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    name: "Николета Петрова",
    role: "Nail Art",
  },
  {
    text: "Sofia Димитрова направи невероятен дизайн с камъни за моята сватба. Всички гости питаха откъде съм.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
    name: "Ивана Тодорова",
    role: "Булчински дизайн",
  },
  {
    text: "Идвам тук вече 2 години. Качеството е неизменно — всеки детайл е обмислен с любов и прецизност.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face",
    name: "Анна Христова",
    role: "Редовен клиент",
  },
  {
    text: "Booking-ът е лесен, студиото е чисто и модерно, а маникюристките са истински артисти. 5 звезди!",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=face",
    name: "Стела Василева",
    role: "Шелак маникюр",
  },
  {
    text: "Направих удължаване за пръв път и бях много притеснена, но Елена обясни всичко подробно. Резултатът е великолепен!",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face",
    name: "Виктория Ангелова",
    role: "Удължаване с гел",
  },
  {
    text: "Най-доброто студио в София без съмнение. Педикюрът с парафинова вана е просто терапия за душата.",
    image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=80&h=80&fit=crop&crop=face",
    name: "Десислава Колева",
    role: "SPA педикюр",
  },
  {
    text: "Дойдох за french маникюр и останах изумена от прецизността. Линиите са перфектни — като от учебник!",
    image: "https://images.unsplash.com/photo-1502767089025-6572583495b9?w=80&h=80&fit=crop&crop=face",
    name: "Калина Стоянова",
    role: "French маникюр",
  },
  {
    text: "Топ качество на продуктите и изключителна грижа към клиента. Нокти от мечтите ми — благодаря на целия екип!",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=80&h=80&fit=crop&crop=face",
    name: "Боряна Маринова",
    role: "Nail Art & Гел",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export default function Home() {
  return (
    <div className="bg-background font-sans-ui text-on-background selection:bg-primary-container selection:text-white">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative flex flex-col overflow-hidden bg-[#fdf8f5]" style={{ minHeight: '100dvh' }}>

        {/* Decorative ghost letter */}
        <div
          className="hero-deco-bg absolute bottom-0 left-[-3%] font-serif-editorial italic font-light leading-none select-none pointer-events-none z-0"
          style={{ fontSize: 'clamp(14rem, 28vw, 24rem)', color: 'rgba(137,78,70,0.035)' }}
          aria-hidden="true"
        >N</div>

        {/* Pulsing ring */}
        <div
          className="hero-pulse-ring absolute top-[22%] right-[44%] w-28 h-28 rounded-full border border-[#894e46]/20 pointer-events-none z-0 hidden lg:block"
          aria-hidden="true"
        />

        {/* ── Flex row: left text | right image card ─── */}
        <div className="flex-1 flex flex-col lg:flex-row items-center max-w-screen-2xl mx-auto w-full px-8 md:px-14 pt-28 pb-10 gap-10 lg:gap-16">

          {/* LEFT: Text column */}
          <div className="flex flex-col justify-center w-full lg:w-[52%] lg:pr-4 z-10">

            {/* Eyebrow */}
            <div className="hero-label-anim flex items-center gap-3 mb-10">
              <div className="w-7 h-[0.5px] bg-[#745a27]/55" />
              <span className="font-sans-ui text-[0.62rem] uppercase tracking-[0.28em] text-[#745a27]">
                Sofia, Bulgaria — Nail Studio
              </span>
              <div className="w-7 h-[0.5px] bg-[#745a27]/55" />
            </div>

            {/* Heading — line-by-line reveal */}
            <h1
              className="font-serif-editorial font-light tracking-tight mb-10"
              style={{ lineHeight: 0.93 }}
            >
              <div className="hero-line-wrap">
                <span className="hero-line-1 text-[#1c1b1a]" style={{ fontSize: 'clamp(2.8rem, 6.5vw, 7rem)' }}>
                  Изкуството
                </span>
              </div>
              <div className="hero-line-wrap">
                <span className="hero-line-2 italic text-[#894e46]" style={{ fontSize: 'clamp(2.8rem, 6.5vw, 7rem)' }}>
                  на перфектния
                </span>
              </div>
              <div className="hero-line-wrap">
                <span className="hero-line-3 text-[#1c1b1a]" style={{ fontSize: 'clamp(2.8rem, 6.5vw, 7rem)' }}>
                  маникюр.
                </span>
              </div>
            </h1>

            {/* Gold divider */}
            <div className="hero-divider-anim h-[0.5px] bg-gradient-to-r from-[#745a27]/50 to-transparent mb-10 w-full" />

            {/* Description */}
            <p className="hero-desc-anim font-sans-ui font-light text-[1.05rem] md:text-[1.1rem] text-[#524341] leading-[1.75] max-w-[430px] mb-12">
              Твоите нокти. Нашата страст. Потопете се в свят на изящество и прецизна грижа — всеки детайл е обмислен с любов.
            </p>

            {/* CTAs */}
            <div className="hero-btns-anim flex flex-col sm:flex-row gap-4 mb-14">
              <Link
                to="/booking"
                className="satin-button hero-btn-primary text-white px-9 py-[13px] text-[0.82rem] tracking-[0.16em] uppercase font-sans-ui font-medium shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                style={{ borderRadius: '2px' }}
              >
                <span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
                Запази час
              </Link>
              <Link
                to="/gallery"
                className="hero-btn-secondary border border-[#894e46]/35 text-[#894e46] px-9 py-[13px] text-[0.82rem] tracking-[0.16em] uppercase font-sans-ui font-medium flex items-center justify-center"
                style={{ borderRadius: '2px' }}
              >
                Виж портфолио
              </Link>
            </div>

            {/* Stats */}
            <div className="hero-stats-anim flex gap-10 pt-10 border-t border-[#d7c2be]/45">
              {[
                { num: '10+',  label: 'години опит' },
                { num: '500+', label: 'доволни клиенти' },
                { num: '4.9★', label: 'средна оценка' },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-serif-editorial font-light italic text-[2rem] text-[#894e46] leading-none mb-[5px]">{s.num}</div>
                  <div className="font-sans-ui text-[0.6rem] uppercase tracking-[0.2em] text-[#705953]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Image as floating card */}
          <div className="hero-image-anim relative w-full lg:flex-1 h-[62vw] lg:h-[600px] max-h-[680px] shrink-0">

            {/* The image card */}
            <img
              className="hero-img-inner w-full h-full object-cover shadow-[0_32px_80px_rgba(82,67,65,0.18)]"
              src="/images/unnamed.png"
              alt="cinematic close-up of a soft-lit hand with impeccable nails on a neutral silk fabric"
              style={{
                borderTopLeftRadius: '3rem',
                borderTopRightRadius: '0.75rem',
                borderBottomRightRadius: '3rem',
                borderBottomLeftRadius: '0.75rem',
              }}
            />

            {/* Quality badge — floats outside bottom-left */}
            <div
              className="hero-badge-anim absolute flex items-center gap-3 bg-white"
              style={{
                bottom: '2rem',
                left: '-1.25rem',
                borderRadius: '1rem',
                padding: '14px 18px',
                boxShadow: '0 8px 32px rgba(82,67,65,0.14), 0 2px 8px rgba(82,67,65,0.08)',
              }}
            >
              <div
                className="flex items-center justify-center shrink-0"
                style={{ width: '2.4rem', height: '2.4rem', background: '#ffdad5', borderRadius: '50%' }}
              >
                <span className="material-symbols-outlined text-[#894e46]" style={{ fontSize: '1.1rem', fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <div>
                <p className="font-sans-ui font-semibold text-[#1c1b1a]" style={{ fontSize: '0.83rem', lineHeight: 1.2 }}>Топ Качество</p>
                <p className="font-sans-ui font-light text-[#524341]" style={{ fontSize: '0.71rem', lineHeight: 1.4 }}>Сертифицирани специалисти</p>
              </div>
            </div>

            {/* Review bubble — floats outside top-right */}
            <div
              className="hero-review-anim absolute hidden lg:block"
              style={{
                top: '2.5rem',
                right: '-1.25rem',
                width: '13rem',
                background: 'white',
                borderRadius: '1rem',
                padding: '14px 16px',
                boxShadow: '0 8px 32px rgba(82,67,65,0.13), 0 2px 8px rgba(82,67,65,0.07)',
              }}
            >
              <div className="flex gap-[3px] mb-2">
                {[1,2,3,4,5].map(i => <span key={i} style={{ color: '#745a27', fontSize: '0.72rem' }}>★</span>)}
              </div>
              <p className="font-serif-editorial italic text-[#1c1b1a]" style={{ fontSize: '0.82rem', lineHeight: 1.45 }}>
                "Перфектен маникюр всеки път!"
              </p>
              <p className="font-sans-ui font-light text-[#705953]" style={{ fontSize: '0.65rem', marginTop: '8px', letterSpacing: '0.1em' }}>
                — Мария Г.
              </p>
            </div>
          </div>
        </div>

        {/* ── Marquee strip ─── */}
        <div className="hero-marquee-anim relative z-10 border-t border-[#d7c2be]/35 py-[14px] overflow-hidden">
          <div className="marquee-track select-none" aria-hidden="true">
            {[1, 2].map(i => (
              <span key={i} className="font-serif-editorial italic text-[0.82rem] tracking-[0.07em] text-[#705953]/55">
                Маникюр&ensp;•&ensp;Педикюр&ensp;•&ensp;Nail Art&ensp;•&ensp;Гел Лак&ensp;•&ensp;Удължаване&ensp;•&ensp;Spa Процедури&ensp;•&ensp;Дизайн с камъни&ensp;•&ensp;Парафинова вана&ensp;•&ensp;
              </span>
            ))}
          </div>
        </div>

      </section>

      {/* Services Section */}
      <section className="py-24 px-8 max-w-screen-2xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif-authority text-4xl md:text-6xl text-on-background mb-4">Нашите услуги</h2>
          <p className="font-serif-editorial italic text-xl text-tertiary">Премиум грижа за вашите ръце</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZHdzBx9_ePeVDiWnD_JGzKoSYqtNaU6SiERvdwXTqor5hDbZzicJl7k5FnKqVKD8llDgm1lDQ-U1uj15LuEpMIo1ignxUFEb4d6GR7jOxYODUevzROavO76UdvTaDhq6kft9QqDUp4QhzM53YPuJthLxGFl0cV7hUJICmgJVXJITj44MsfmnQjtgJFCmv6p0lAdbdn7hpGT46qPBddUseCsnXeZGOkF5sw1DxRsojwNNr-aEMmlPCxejJ-CbLzcr-8O1cFSInYE9B',
              alt: 'professional nail technician applying neutral nail polish',
              title: 'Класически маникюр',
              desc: 'Пълна грижа за кутикулите и оформяне, завършено с подхранващо олио.',
              price: 'от 35 лв',
            },
            {
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAg9C6btqbpOu2RHWl7-pZIJAT-v0c_G2Z0EmPhaWUPJpMBUsDmkig8UJ-JyQoGlW5EhtZUnzcI5seK5glBKi16CUWhcYAzgqAGwlRSqgDFcRu7LKcdkLwvWRRweFCL8LLZ-iW2rExP8PNAD_IOsa7xdgFtE5NtozgxZR97MnjpxHhLPsTkYfAcAQwYanP9qNc4XjYLo5wY3Ara5s5ep0tq_wdQbS_pydVo4zlrWRN-4BW8aKlWKH6bqKBwGX0tI8DY1Acq2ZRuIxUv',
              alt: 'manicured hands with shiny shellac finish in soft rose color',
              title: 'Гел / шелак',
              desc: 'Дълготраен блясък и цвят с професионални продукти от най-висок клас.',
              price: 'от 55 лв',
            },
            {
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS01vF-lJ5u2J345_tdRTh7Rwach2DnbzwHVndVbI_NAXiLeMyzBMXmnmQyQFaiTH9x04VY-EmZxjPHoXRs1FkgnEIo2c1grW59LM9_HxdcFlmFmVjMwZf4E0YqreXvBvkPcnKIptLmejq6mE5YFew2Wdj6P1hl3kO_E2XjvaYI99tBLudglPgUJT7zFrHtVftFHys_V8LldZxeU4PM_8eycUnWJ2wnktdH0wqJe_6lToa1ZFAO3rUyvQY03znd49y7vEy60n6iYAx',
              alt: 'nail extensions process, luxury studio setting',
              title: 'Удължаване',
              desc: 'Прецизно изграждане с гел за перфектна дължина и естествен вид.',
              price: 'от 80 лв',
            },
            {
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDR5dneJujnT_GxvFWGgfPcmh3hxi1FQUg0pVbXzm62Dk-O69ZkxXn0kblnzgctuqwF_TtXYHK7FVCWweFZy-cvhVjXSUGMT7nxsGEA0MpfvZ8jARNloAdll1vSSFcHC-A_SH2EQ1go1Hi-Q3iW3sRXci02n2pvTOnIgjD1kLzyH1QEBeREFb-pLU2EQKc6NM4UkXi5gYFhTEcBDbotltQvc2fXjLNfm9e-D0YtPv9h1DGxPgBuZXVjONj3MU-LXqILgb33TH5SILdo',
              alt: 'artistic nail design with delicate gold foil accents',
              title: 'Nail Art',
              desc: 'Индивидуален дизайн и ръчно рисувани детайли според вашия стил.',
              price: 'от 10 лв',
            },
          ].map((svc) => (
            <Link key={svc.title} to="/services" className="group p-8 bg-surface-container-low hover:bg-white transition-all duration-700 ease-in-out border-b border-transparent hover:border-secondary/20 cursor-pointer block">
              <div className="h-48 mb-6 overflow-hidden rounded">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={svc.img} alt={svc.alt} />
              </div>
              <h3 className="font-serif-authority text-2xl mb-4 text-on-background">{svc.title}</h3>
              <p className="font-sans-ui font-light text-on-surface-variant leading-relaxed mb-6">{svc.desc}</p>
              <span className="text-primary font-medium tracking-widest text-sm uppercase">{svc.price}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Section Break */}
      <div className="h-32 bg-gradient-to-b from-background via-surface-container-low to-white"></div>

      {/* Portfolio Section */}
      <section className="bg-white py-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-serif-authority text-5xl text-on-background mb-4">Портфолио</h2>
              <p className="font-serif-editorial italic text-2xl text-tertiary">Нашата работа говори сама за себе си</p>
            </div>
            <Link to="/gallery" className="text-primary border-b border-primary/30 pb-1 font-sans-ui tracking-widest uppercase text-sm hover:text-secondary hover:border-secondary transition-all">
              Виж всички проекти
            </Link>
          </div>
          <div className="masonry-grid">
            <div className="masonry-item-tall bg-surface-container overflow-hidden rounded-lg">
              <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-vooRcpplpKyVhS_A6bF695qICy55a1Zo8BhABkLeNFZVhNHLihi_gQdTVPJyvA6xj060iTnVEnkQHk55zzPPCZejwskCLiHOLdYSpb7WWgjIyoSkAvjWs_31ppONiI_wQ1KX7aIUaF3bLzBpif7REJIuaGH_36CXUV0UI-3desVS0xuidExl8EWC88qgQXURpoO4SuBidJLFuAcBIEqLcot96J_uGSZ-THBJg4HVQYNvsx8IMgOxjB0YCezVG5t2Krbw0E38-VbZ" alt="elegant dark emerald nail polish" />
            </div>
            <div className="masonry-item-short bg-surface-container overflow-hidden rounded-lg">
              <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdXXJTdIl1ilfYcj0yeiBhj95BFT6oi9KtsZb6BQoczrFXF2rjVfI6ivivPVblP14B-Qs7-9CJQhoH5rd1idpCFYfoQLXywO1QNU8P1jhXwpfL_EdZxhb2z9JEdn1pHBG-XNAtvtmdm2VAiXoIxyyMUlAXBLARRCC_pvOOQExLhnTt-YMJM_K3HIzkhqloVhTNgVxfwSC8ZJvE6uoM7GQ3lCerHajyieJDQnyd32XIt0C32xhCJbTHFy9Q-Nisee_8nPiUjtq41h3f" alt="soft nude manicure" />
            </div>
            <div className="masonry-item-tall bg-surface-container overflow-hidden rounded-lg">
              <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-RosVlrGyaW6cH0D-d2y9BaLVNk_PnvC_bNfewBao4FfWF9bE-DaBY7wAQIUN9VrR6jMr28TdTqoKij1ELpyQK0csqa24hOd2Js029jDMUjuyzvrmGGbCaDD8ZfsYwb0Nsy1cB-lTgzZkvGVvEg2Dc5TvPpPytO7y3O4WI9vQXR9GJ3yO2prkreu1n9cMm1LxLOkgG9wx4qZj9jtjk6WMzQIc7SFgJBnQV1Ocirgjxx3tuvIRRLmEZMLX7JUjtnLJSZ7IKr4KO-dK" alt="modern french manicure" />
            </div>
            <div className="masonry-item-short bg-surface-container overflow-hidden rounded-lg">
              <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKvK0CMi9CZ2I_3_o5W-WZiKqZb8unsa5i9ysjJxXoByquFVIx42EphNbZlie8e8_S4nFGr2eTNWnbL_b75KGglamD_7uRKmc-s2_fPv1PTNFlxHEL_a1BNnzYf2Pe874sxdVTb290aopalGzY81C1apH1mFzocs3jCoQChYtpbk40I4jQs03IrAV9W6Z4ylLl23R61kruSRz9oehLPtfbypK3m6L2pwDZyvzA30sh1l8KpufCaPVYtZlp1Odojc7xoidKemPlAnhS" alt="hands holding marble sphere with burgundy nails" />
            </div>
            <div className="masonry-item-short bg-surface-container overflow-hidden rounded-lg">
              <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" src="/images/manicure.jpg" alt="classic manicure" />
            </div>
            <div className="masonry-item-tall bg-surface-container overflow-hidden rounded-lg">
              <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" src="/images/pedicure-spa.jpg" alt="spa pedicure" />
            </div>
            <div className="masonry-item-short bg-surface-container overflow-hidden rounded-lg">
              <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" src="/images/Generated Image March 24, 2026 - 1_13PM.jpg" alt="nail art" />
            </div>
            <div className="masonry-item-short bg-surface-container overflow-hidden rounded-lg">
              <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" src="/images/salon-interior.jpg" alt="salon interior" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#6B5B52] py-32 text-on-tertiary overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="font-serif-editorial italic text-5xl md:text-7xl mb-8 leading-tight">
              Кои сме <br />ние?
            </h2>
            <p className="font-sans-ui font-light text-xl leading-relaxed mb-12 opacity-90">
              В сърцето на София, ние създадохме пространство, където красотата среща спокойствието. Нашата мисия е да подчертаем вашата индивидуалност чрез прецизност и изкуство.
            </p>
            <div className="editorial-line opacity-30 mb-12"></div>
            <div className="flex flex-col gap-12">
              {[
                {
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuwlDOvW6D5M6OI4JAQP-YtrvGYgxSBSpsXDeC0Y-dYenHrU6EC8jGl0L3wOqMXp02PUNB-YAeNp4s-Egd3QdPZ7433nvWK5X2UDKGODqfZ24Jblle3nHdm_QWzMImP4GYPSHArsKc3zqZ63SZlVLRlqk8vI7LqWIzkiTo8w1tpPdyOw5qBaDytL3p4HWFyMgB2Oz0cvj8HLChK05nqOYtuRRjyb_NCUmg56XKg7U52qMeDs4fEPJ66I42sDBZWaq-Y1G0pCUhac35',
                  name: 'Елена Костова',
                  role: 'Основател & Топ Маникюрист',
                  desc: 'Над 10 години опит в индустрията, специализираща в Nail Art и изграждане.',
                },
                {
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnoLn51iZznwuXXFbOOaH8V85KlaPzDVvUXONu5H-TrDAudoXtqQ_Jok7Gd3lsjmV6Cf6lh2UwxNTIzM8l8kuXMMwem6HrNzUuYnh75NCBSoUQKEXWDxOosOL6podcElH2086enClYylgx1oy5hFQWlppFvl4E0TBOXDK7802l6I196QEu2AGR5KTnrHeNKzH0vj8Kgd7roi_VwOM17XrRcsXtfXfgdQy04MgonfwBynhUzThsKfhZGyjH1hbU_0U8Nl5WpfBqrRxx',
                  name: 'София Димитрова',
                  role: 'Мастер Маникюрист',
                  desc: 'Експерт в терапевтичния маникюр и иновативните техники за гел лак.',
                },
              ].map((p) => (
                <div key={p.name} className="flex gap-8 items-start">
                  <div className="w-32 h-40 shrink-0 overflow-hidden rounded shadow-2xl">
                    <img className="w-full h-full object-cover" src={p.img} alt={p.name} />
                  </div>
                  <div>
                    <h4 className="font-serif-editorial text-3xl mb-2">{p.name}</h4>
                    <p className="font-sans-ui font-light opacity-80 italic mb-4">{p.role}</p>
                    <p className="font-sans-ui text-sm font-light leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden relative z-10">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsZvVpQP7nXiQgkPRmBXN3i09jhZu6fxbJwJVVifgP-dSa74gEQDUA8GLfkjQi7GmkGPA--IE40xswTSvofv8YalgFuuzSXGxonW_W092p-OLsdHGlZltg4xu6iywnizM-hEhvsur31Qq9hmjAl-zf7tFxxjpzq5Bh--1z1aneHXqNgM2JxfyT2sktdhpYICt5lmSEkffy7JgW_7MgnQwzqk74f6jgAgZSzkmTTH7kvXPGtohaJbR3eLpWZHCw_M3CSWzjKA6I8eLW"
                alt="interior of a luxury nail studio in Sofia"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-0"></div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-14"
          >
            <div className="flex justify-center mb-5">
              <div className="border border-[#d7c2be] py-1 px-4 rounded-full font-sans-ui text-[0.7rem] uppercase tracking-[0.2em] text-[#705953]">
                Отзиви
              </div>
            </div>
            <h2 className="font-serif-authority text-4xl md:text-5xl text-on-background tracking-tight text-center mb-5">
              Какво казват клиентите
            </h2>
            <p className="font-sans-ui font-light text-center text-[#524341] opacity-75 leading-relaxed">
              Над 500 доволни клиенти са избрали Nail Studio Sofia за своята грижа.
            </p>
          </motion.div>

          {/* Scrolling columns */}
          <div className="flex justify-center gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[680px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={18} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={20} />
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating Booking Bar (Mobile Only) */}
      <div className="md:hidden fixed bottom-8 left-8 right-8 z-50">
        <Link to="/booking" className="w-full satin-button text-on-primary py-4 rounded-lg font-medium shadow-2xl backdrop-blur-lg flex items-center justify-center gap-3">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
          Запази час сега
        </Link>
      </div>
    </div>
  )
}
