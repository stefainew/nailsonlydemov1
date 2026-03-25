import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CATEGORIES = ['Всички', 'Минимал', 'Луксозен', 'Арт', 'Педикюр', 'Студио']

const galleryItems = [
  {
    id: 1,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf7oUKf18wvqisMXQnYNtyiiHFdTgeOdJKb2gcrq47yCgTuFac6oZ4mQbGLBGXSobqkNcpRy8zT9sJ2SRphVyuD-9eIDFPXHJUQ0sKGbxe89pMjJ_nYV0VBPxv2ygq4dE0c7G2iT7U7nCpCrN2WwC3qXbAn1ca_nFV8uKb7LALFoiQmjSFkgEca-39Hv6pOXyvUZMtYTBSK-tH_ROZhPQw5JjU1sIhaWrLl56G6fE6krPkiFgrFgcnJBDuX4oJ_Gh_k3JpGmMywuI3',
    alt: 'Luxury deep rose red manicure with gold leaf accents on silk',
    title: 'Royal Velvet & Gold',
    category: 'Луксозен',
    size: 'wide',
  },
  {
    id: 2,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjIMPp05VlstUN1ZflcfTkPAGiMuYYwPULzs8q77EMRdTTwgJyDuusKB-TiPvwA2fc0DPA7lUC30y0OrEdlHdv8ferGcqpZaxYIqIevc3WNH1JnVqmv1-my85dtu4z0rX8cS_vxZ5p-tE-b4LTkwsena_GF_eYeQHDGcskxs95PyPzwbIK5jD9pjxgy9JauIkCvh1oym3ZauDzj88IGfheWmTffZJARcJ75qPAEbSApMMsQZoDeH7RGYCxA7GWP8qzHOC-Zha20zTq',
    alt: 'Close-up of minimalist almond-shaped nails with a soft pearl sheen',
    title: 'Перлено Минимал',
    category: 'Минимал',
    size: 'tall',
  },
  {
    id: 4,
    src: '/images/manicure.jpg',
    alt: 'Classic manicure',
    title: 'Класически Маникюр',
    category: 'Минимал',
    size: 'square',
  },
  {
    id: 5,
    src: '/images/salon-interior.jpg',
    alt: 'Our nail studio interior',
    title: 'Нашето Студио',
    category: 'Студио',
    size: 'feature',
  },
  {
    id: 6,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIO9bKJxQcElV7Y4UAHw5kwB86178mAw7dK1VWXg-6bdnN90O7InYo-hoqi7T8Brigemp5ycyKRpDscReqbEiyM4LGVcJuw3W8qg7qUpmrnxuFqlgRZbPXRscF8dSZQzIXw4mPJBose0pOktDg0uSRHZZTVlzHxuUOsQ7tN7-2EN7kFNLv3fJfW4rP4wHQHWM3j4Us4UA9AQ-UhCz-rsUTkaSrgUbAAmbYxtkOvXON5hxuoqv3Dcxd60jGuurWRyi8T_qgrrB1boyI',
    alt: 'Artistic abstract nail design with soft watercolor swirls of blush and taupe',
    title: 'Акварелни Мечти',
    category: 'Арт',
    size: 'wide',
  },
  {
    id: 7,
    src: '/images/pedicure-spa.jpg',
    alt: 'Luxury SPA pedicure',
    title: 'SPA Педикюр',
    category: 'Педикюр',
    size: 'tall',
  },
  {
    id: 8,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDM5xifz_PJMNU8cZLHXXwz4vPeTPJwDCbtsCtkutfSwPuycq8HUOYVvaJ0A66d1PxWqvOwefuiMCzhwFcOdOIF2OKpYxI6GP6FfD0zqpDKgId40chkd1XGnvFML0FuisdLzbLjReB7ugp1dKWa2FsbRvCU2F1g3zxYg4eK_5dzL7QBa_k8w83TEAh9pwTeP23P1XlG0puFO53_-mfkK2xvHNqiSQthuSr8Ikty3wUS_7pjfurxcah5uESH9RU4lXxUSvdbsLO0Fmam',
    alt: 'Clean aesthetic nude nails holding a designer perfume bottle',
    title: 'Nude Естетика',
    category: 'Минимал',
    size: 'square',
  },
  {
    id: 10,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADulXgopcm9s4dUHhPuIlMPtFzmst8eLxMeDmLkqmIEQ8WaJRzO80Fmop6dYdx-QHZb0rNceyXvPW_Y6QTismcnhePClBToLIZlLq6S5Cg1MK1OZBHCUDrr4DQyG3Lg72FzD4AyrN6ljz97m9jalR_O7WsyGLUdckdAERT8gr7fnM-aidxDWRFC_j8fu7AHAXTMIjVS9hHbTPDFkNfEgeKQ2UNIoET6Gk7jeqjerJQVQPglembQheXbvQbm9b7MVbPg-rF4M_iwaOo',
    alt: 'Intricate geometric nail art with chrome metallic lines and matte finish',
    title: 'Chrome Геометрия',
    category: 'Арт',
    size: 'wide',
  },
  {
    id: 12,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRntj6UmsCVICO_u-C_TDQVYS9FrAvXJNXOzPYG_1XcdnW1ZNVobeu9hcB6Eg1u_YrsHx16n9dNzerpvHXSH8-XLgzLyToMCUhS1OZThJkKCGJ6Ygtb6WWP5KujLhQOQHp3QCR2FW59xjFNMc_kaE88tH9ABmq3OmV7RsEtKU-etL1FaDpgFx_HsUNzN9Ix8VyxNI2MxiWWdsqZreeURpha2Sw1ihh8XMEOQaHs_vI6xVg0g1aq-nijq9ljfJUWjN_uTC21XQ8A5cg',
    alt: 'Classic French manicure reinvented with thin gold tips',
    title: 'Позлатен French',
    category: 'Луксозен',
    size: 'square',
  },
  {
    id: 13,
    src: '/images/pedicure-massage.jpg',
    alt: 'Relaxing massage pedicure',
    title: 'Масажен Педикюр',
    category: 'Педикюр',
    size: 'square',
  },
  {
    id: 14,
    src: '/images/pedicure-medical.jpg',
    alt: 'Medical pedicure treatment',
    title: 'Медицински Педикюр',
    category: 'Педикюр',
    size: 'square',
  },
]

const sizeClass = { feature: 'gallery-item--feature', wide: 'gallery-item--wide', tall: 'gallery-item--tall', square: '' }

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Всички')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeCategory === 'Всички'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  const openLightbox = useCallback((item) => {
    setLightbox(item)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightbox(null)
    document.body.style.overflow = ''
  }, [])

  const goNext = useCallback(() => {
    if (!lightbox) return
    const idx = galleryItems.findIndex(i => i.id === lightbox.id)
    setLightbox(galleryItems[(idx + 1) % galleryItems.length])
  }, [lightbox])

  const goPrev = useCallback(() => {
    if (!lightbox) return
    const idx = galleryItems.findIndex(i => i.id === lightbox.id)
    setLightbox(galleryItems[(idx - 1 + galleryItems.length) % galleryItems.length])
  }, [lightbox])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeLightbox, goNext, goPrev])

  return (
    <div className="bg-[#fdf8f5] text-on-background font-sans-ui selection:bg-primary-container selection:text-white min-h-screen">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 px-8 md:px-14 max-w-screen-2xl mx-auto overflow-hidden">

        {/* Decorative number */}
        <div
          className="absolute top-4 right-6 font-serif-editorial italic font-light leading-none select-none pointer-events-none"
          style={{ fontSize: 'clamp(8rem, 20vw, 20rem)', color: 'rgba(137,78,70,0.045)', lineHeight: 1 }}
          aria-hidden="true"
        >11</div>

        <div className="relative z-10 max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-6 h-[0.5px] bg-[#745a27]/55" />
            <span className="font-sans-ui text-[0.6rem] uppercase tracking-[0.3em] text-[#745a27]">
              Nail Studio Sofia — Портфолио
            </span>
          </motion.div>

          {/* Heading */}
          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              initial={{ y: '105%' }} animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16,1,0.3,1] }}
              className="font-serif-editorial italic font-light text-[#1c1b1a] leading-[0.88] mb-10"
              style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}
            >
              Портфолио
            </motion.h1>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16,1,0.3,1] }}
            style={{ transformOrigin: 'left' }}
            className="h-[0.5px] bg-gradient-to-r from-[#745a27]/50 to-transparent mb-10 w-64"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16,1,0.3,1] }}
            className="font-sans-ui font-light text-[#524341] text-lg leading-relaxed max-w-md mb-14"
          >
            Вдъхновете се от нашите последни творби — от деликатен минимализъм до смели арт дизайни и луксозни SPA процедури.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.16,1,0.3,1] }}
            className="flex gap-12 pt-10 border-t border-[#d7c2be]/40"
          >
            {[
              { num: '11', label: 'Работи' },
              { num: '5',  label: 'Категории' },
              { num: '∞',  label: 'Дизайни' },
            ].map(s => (
              <div key={s.label}>
                <div className="font-serif-editorial italic font-light text-[2rem] text-[#894e46] leading-none mb-1">{s.num}</div>
                <div className="font-sans-ui text-[0.58rem] uppercase tracking-[0.22em] text-[#705953]">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Category Filters ─────────────────────────── */}
      <section className="px-8 md:px-14 max-w-screen-2xl mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex items-center gap-2 flex-wrap"
        >
          {CATEGORIES.map(cat => {
            const count = cat === 'Всички' ? galleryItems.length : galleryItems.filter(i => i.category === cat).length
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="font-sans-ui text-[0.7rem] uppercase tracking-[0.18em] transition-all duration-300 flex items-center gap-2"
                style={{
                  padding: '8px 18px',
                  borderRadius: '2px',
                  background: isActive ? '#894e46' : 'transparent',
                  color: isActive ? 'white' : '#524341',
                  border: isActive ? '1px solid #894e46' : '1px solid rgba(215,194,190,0.55)',
                  boxShadow: isActive ? '0 4px 16px rgba(137,78,70,0.22)' : 'none',
                }}
              >
                {cat}
                <span style={{ fontSize: '0.6rem', opacity: 0.7 }}>({count})</span>
              </button>
            )
          })}
        </motion.div>
      </section>

      {/* ── Gallery Bento Grid ──────────────────────── */}
      <section className="px-8 md:px-14 max-w-screen-2xl mx-auto pb-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="gallery-bento"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.055, ease: [0.16,1,0.3,1] }}
                className={`gallery-item group relative overflow-hidden cursor-pointer ${sizeClass[item.size] || ''}`}
                style={{ borderRadius: '4px' }}
                onClick={() => openLightbox(item)}
              >
                {/* Photo */}
                <img
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                />

                {/* Dark gradient overlay — opacity driven by .gallery-item:hover in CSS */}
                <div
                  className="gallery-overlay absolute inset-0 flex flex-col justify-end p-6"
                  style={{
                    background: 'linear-gradient(to top, rgba(28,27,26,0.88) 0%, rgba(28,27,26,0.2) 50%, transparent 100%)',
                    opacity: 0,
                    transition: 'opacity 0.45s ease',
                  }}
                >
                  <span className="overlay-cat font-sans-ui text-[0.6rem] uppercase tracking-[0.28em] text-[#e4c285] mb-2 block">
                    {item.category}
                  </span>
                  <h3
                    className="overlay-title font-serif-editorial italic text-white block"
                    style={{ fontSize: 'clamp(1rem, 1.8vw, 1.35rem)', lineHeight: 1.2 }}
                  >
                    {item.title}
                  </h3>
                  <div className="overlay-line h-[0.5px] bg-[#e4c285] mt-3" />
                </div>

                {/* Item number */}
                <div
                  className="absolute top-4 right-4 font-serif-editorial italic text-white/0 group-hover:text-white/50 transition-all duration-500 select-none"
                  style={{ fontSize: '0.78rem' }}
                >
                  {String(galleryItems.findIndex(g => g.id === item.id) + 1).padStart(2, '0')}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-32">
            <p className="font-serif-editorial italic text-[#705953] text-2xl">Няма намерени работи</p>
          </div>
        )}
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="relative py-36 overflow-hidden" style={{ background: '#1e1511' }}>
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf7oUKf18wvqisMXQnYNtyiiHFdTgeOdJKb2gcrq47yCgTuFac6oZ4mQbGLBGXSobqkNcpRy8zT9sJ2SRphVyuD-9eIDFPXHJUQ0sKGbxe89pMjJ_nYV0VBPxv2ygq4dE0c7G2iT7U7nCpCrN2WwC3qXbAn1ca_nFV8uKb7LALFoiQmjSFkgEca-39Hv6pOXyvUZMtYTBSK-tH_ROZhPQw5JjU1sIhaWrLl56G6fE6krPkiFgrFgcnJBDuX4oJ_Gh_k3JpGmMywuI3"
            alt=""
            aria-hidden="true"
            style={{ opacity: 0.18 }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #1e1511 0%, transparent 30%, transparent 70%, #1e1511 100%)' }} />
        </div>

        {/* Decorative rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#e4c285]/6 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#e4c285]/8 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16,1,0.3,1] }}
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-3xl mx-auto px-8"
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-6 h-[0.5px]" style={{ background: 'rgba(228,194,133,0.5)' }} />
            <span className="font-sans-ui text-[0.58rem] uppercase tracking-[0.32em]" style={{ color: 'rgba(228,194,133,0.75)' }}>
              Nail Studio Sofia
            </span>
            <div className="w-6 h-[0.5px]" style={{ background: 'rgba(228,194,133,0.5)' }} />
          </div>

          <h2
            className="font-serif-editorial italic font-light text-white leading-[0.9] mb-8"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
          >
            Вашите нокти.<br />Нашето изкуство.
          </h2>

          <p className="font-sans-ui font-light text-lg mb-14 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Запазете своя час и създайте следващото произведение.
          </p>

          <Link
            to="/booking"
            className="inline-flex items-center gap-3 font-sans-ui text-[0.78rem] uppercase tracking-[0.24em] transition-all duration-400"
            style={{
              padding: '16px 40px',
              borderRadius: '2px',
              border: '1px solid rgba(228,194,133,0.45)',
              color: '#e4c285',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#e4c285'; e.currentTarget.style.color = '#1e1511' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#e4c285' }}
          >
            Запази час
            <span className="font-serif-editorial italic" style={{ fontSize: '1.1rem' }}>→</span>
          </Link>
        </motion.div>
      </section>

      {/* ── Lightbox ─────────────────────────────────── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] flex items-center justify-center"
            style={{ background: 'rgba(14,11,9,0.93)', backdropFilter: 'blur(12px)' }}
            onClick={closeLightbox}
          >
            {/* Image container */}
            <motion.div
              key={lightbox.id}
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.38, ease: [0.16,1,0.3,1] }}
              className="relative flex flex-col items-center max-w-[90vw] max-h-[90vh]"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="max-w-[90vw] max-h-[80vh] object-contain"
                style={{ borderRadius: '4px', boxShadow: '0 40px 100px rgba(0,0,0,0.7)' }}
              />

              {/* Caption */}
              <div className="mt-5 flex flex-col items-center gap-1">
                <span className="font-sans-ui text-[0.58rem] uppercase tracking-[0.3em] text-[#e4c285]/70">{lightbox.category}</span>
                <span className="font-serif-editorial italic text-white/90 text-xl">{lightbox.title}</span>
              </div>
            </motion.div>

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="fixed top-6 right-6 w-11 h-11 flex items-center justify-center rounded-full transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.16)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
              aria-label="Close"
            >
              <span className="material-symbols-outlined text-white" style={{ fontSize: '1.2rem' }}>close</span>
            </button>

            {/* Prev */}
            <button
              onClick={e => { e.stopPropagation(); goPrev() }}
              className="fixed left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.16)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
              aria-label="Previous"
            >
              <span className="material-symbols-outlined text-white" style={{ fontSize: '1.2rem' }}>chevron_left</span>
            </button>

            {/* Next */}
            <button
              onClick={e => { e.stopPropagation(); goNext() }}
              className="fixed right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.16)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
              aria-label="Next"
            >
              <span className="material-symbols-outlined text-white" style={{ fontSize: '1.2rem' }}>chevron_right</span>
            </button>

            {/* Counter */}
            <div
              className="fixed bottom-6 left-1/2 -translate-x-1/2 font-sans-ui text-[0.62rem] uppercase tracking-[0.22em]"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              {galleryItems.findIndex(i => i.id === lightbox.id) + 1} / {galleryItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />

      {/* Mobile bar */}
      <div className="md:hidden fixed bottom-8 left-8 right-8 z-50">
        <Link
          to="/booking"
          className="w-full satin-button text-white py-4 flex items-center justify-center gap-3 font-sans-ui text-sm tracking-[0.15em] uppercase shadow-2xl"
          style={{ borderRadius: '2px' }}
        >
          <span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
          Запази час
        </Link>
      </div>
    </div>
  )
}
