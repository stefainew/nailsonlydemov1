import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />

      <main className="pt-24 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[716px] flex flex-col items-center justify-center px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="font-dmsans text-secondary uppercase tracking-[0.3em] text-xs font-medium">The Art of Ritual</span>
            <h1 className="font-playfair text-7xl md:text-9xl text-on-surface leading-none tracking-tighter">
              За <span className="font-cormorant italic font-light text-primary">Нас</span>
            </h1>
            <div className="w-24 h-px bg-secondary-fixed mx-auto mt-8"></div>
          </div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 opacity-10 bg-primary-container rounded-full blur-[100px]"></div>
          <div className="absolute -top-20 -left-20 w-80 h-80 opacity-10 bg-secondary-fixed rounded-full blur-[80px]"></div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 px-8 bg-surface-container-low relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <img
                className="w-full aspect-[4/5] object-cover rounded shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIf32aPgxHV04yOZsSAA5E6cNuXzNd6QRW7iKIKLampIa2nKwxyunJcoCTPbWGpjaF0N62DiBz22PBBoRGp56W1RyGs9oqi8r8AkvVoe_DT_vv5QRpijsghY77UKOWte4bYFLnZvgXm64M0iUqlyBDtFg6fShqCQkmlVnx1JCmE6JKgxRRvoMHudDzvDhReSqjq_6HE48n8K1IRdKOzlSi_BTvKmjYYCfbQOJ8r1kg_UqHEA9v5EyzZ3oqoGktz9YIPoZGZTcUO8-c"
                alt="close-up of elegant female hands with nude manicured nails resting on a soft velvet peach surface"
              />
              <div className="absolute -bottom-8 -left-8 p-12 bg-white/40 backdrop-blur-md hidden md:block editorial-shadow border border-white/20">
                <p className="font-playfair text-2xl italic text-primary">"Soft Luxury is a feeling, not just a service."</p>
              </div>
            </div>
            <div className="space-y-10">
              <h2 className="font-playfair text-5xl text-on-surface leading-tight">
                A Ritual Inspired by <br />
                <span className="font-cormorant italic text-primary">Pure Radiance</span>
              </h2>
              <div className="shimmer-line mb-8"></div>
              <div className="font-dmsans text-lg text-on-surface-variant leading-relaxed font-light space-y-6">
                <p>В Nail Studio Sofia вярваме, че грижата за ръцете е интимно преживяване, вдъхновено от философията на "Soft Luxury". Подобно на прочутите ритуали за красота на Charlotte Tilbury, ние превръщаме обикновения маникюр в акт на себеуважение и релаксация.</p>
                <p>Нашият подход е холистичен — от мекото осветление и ароматерапията, до прецизното оформяне на всеки нокът. Използваме само най-висок клас материали, които не само разкрасяват, но и подхранват, създавайки "glow" ефект, който излъчва здраве и изтънченост.</p>
                <p>Тук не просто лакираме нокти; ние скулптурираме Вашето самочувствие чрез деликатни детайли, топъл тауп и блестящи акценти, които улавят светлината при всяко движение.</p>
              </div>
              <div className="pt-6">
                <Link to="/services" className="inline-flex items-center gap-4 group">
                  <span className="font-cormorant text-2xl italic text-secondary underline underline-offset-8 decoration-secondary-fixed group-hover:decoration-secondary transition-all">
                    Discover our signature ritual
                  </span>
                  <span className="material-symbols-outlined text-secondary text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-32 px-8 bg-background">
          <div className="max-w-7xl mx-auto text-center mb-24">
            <h2 className="font-playfair text-6xl mb-4">Нашите Експерти</h2>
            <p className="font-dmsans text-on-surface-variant tracking-[0.2em] text-sm uppercase">Curators of Elegance</p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
            <div className="space-y-8 flex flex-col items-center">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded">
                <img
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbFl52jkmK2FgVnsqWSff-LXfT9eEur0xfyXOrFsy-RgEP0c21BLD_s77-qt_4LX47bjmAF3qvRUy8C07XA5rJ9LtG4QrrQ5C-vOtAKRJ87emKaQiE6Q1b7sCOdxXZYHYYAugIgD_vmZz5SanDIdeRCUr54YE0YNpxqlWjUzC8kC93uRsVsvoOAJR11oo4wA3NPjXVaPnHkTHJFLKaor-lVU6w-45yR2wuha9Cfx8QpOr47fiu6nHGrK7RdrZTA9-mJyInUQRli-wr"
                  alt="professional portrait of Elena Kostova"
                />
              </div>
              <div className="text-center space-y-4 max-w-sm">
                <h3 className="font-playfair text-3xl">Елена Костова</h3>
                <p className="font-cormorant italic text-primary text-xl">Основател &amp; Главен Стилист</p>
                <p className="font-dmsans text-on-surface-variant font-light leading-relaxed">
                  С над 12 години опит в международни академии, Елена е визионерът зад концепцията Sofia. Тя вярва в минимализма и перфектната симетрия.
                </p>
              </div>
            </div>
            <div className="space-y-8 flex flex-col items-center md:mt-24">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded">
                <img
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcJODy14s7R0AUGegKg_-Q7Zeo_3gZcIyMVMWLKkjGocEoCE5x6H88dMn2asWFS9UaGmHeupVefn-pW7yEpNscsl5B5qluaGOzSHDctAp2milZdijzk0N12Q_cE15-7k2j_BwJM84g_FgLN-Sr6LLtdS85FL4mMzT3gC9t4ryR5b15687jDAGGhiOWp3xe3Q4RCJPV-mYLBnShRpjtKJbhFOyVa8e934u88vsY82Ot1heqDpwWY430ty8-LpgFLCvZ3zMeFnOSLxoJ"
                  alt="professional portrait of Sofia Dimitrova"
                />
              </div>
              <div className="text-center space-y-4 max-w-sm">
                <h3 className="font-playfair text-3xl">София Димитрова</h3>
                <p className="font-cormorant italic text-primary text-xl">Специалист по Nail Art &amp; SPA Ритуали</p>
                <p className="font-dmsans text-on-surface-variant font-light leading-relaxed">
                  София съчетава артистичен талант с дълбоки познания в дерматологията, превръщайки всяка процедура в лечебно преживяване.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Salon Space Section */}
        <section className="py-32 px-8 bg-surface-container overflow-hidden">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="max-w-2xl">
                <h2 className="font-playfair text-5xl md:text-6xl text-on-surface">Пространството</h2>
                <p className="font-dmsans text-on-surface-variant mt-6 text-lg font-light leading-relaxed">
                  Нашето студио в сърцето на София е проектирано като убежище от градския шум. Всеки ъгъл е докоснат от топъл тауп, меки текстури и златни акценти.
                </p>
              </div>
              <div className="pb-2">
                <p className="font-cormorant italic text-2xl text-secondary">A sanctuary for the senses.</p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6 h-[800px]">
              <div className="col-span-12 md:col-span-8 h-full relative group">
                <img
                  className="w-full h-full object-cover rounded"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdmLqXtnFn1AeAdW07v2FcwzGhlKJXBPcEFiCnrTq-irv-Kl8al0LBJaTfp_6lwB4OJe7NhZAZkCNfSUrudaxH1BpCkm1tGlo9TK8cLuXboFqD3Srqzt0rmZqvoDML-cTxzIuOsR2KhnYQvoyGiPfFxEbWqlb8umpvIu9UdkbGXVm78-KkZTo03YkaCK0_SKPrsMtLt9Z3h85scLcwZu2pj1PQQXjTh38YEcTloJIcNrhgmoJ1Nu4aFisz13V8Y3qgMi0HE4FiKpOg"
                  alt="wide shot of a luxury nail salon interior"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-6 h-full">
                <div className="relative overflow-hidden group">
                  <img
                    className="w-full h-full object-cover rounded hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEpSl4gk2WwIV0sslGogTVfzVhrPBmMF4s2i3GTqB51sfXR3xRb-VTBFdNOVn2xUhm_GElo5zNEiaEsFXexpLTycjfg1mH9UGEg1qJhxzehyHn9knxLxZn_W1RDP16BQsLnbTMNap86YtLP6iV5cZuwApMrZKSMi4u_tiYQeiPrYeMWY15sl2l3IXaL94yBMKE65aj_yKAcIRjVxKic3HT0ZhZnaJbIndX8zwJFi02nr2wZ6wPJcL-eRW_CcvtIJfj9hQTCMznjGPD"
                    alt="close-up of elegant gold faucets in a luxury salon"
                  />
                </div>
                <div className="relative overflow-hidden group">
                  <img
                    className="w-full h-full object-cover rounded hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNunpgbeMmQY7YtDbezsvRzAj-BDFujoR4OfiEdyplDT27YfflT53YyJ5pL9kBKY7VvyknryAWMWNn3bsKKelvaWP9uTl9KBGLejIaSCaxjkmbpk-h81TUwVO1GCNEKYqO0knK1yO993UMNKBGXS59_FPCjoxlAB-dtAGYXopWvad53px5TNtlwYzhGrmm91UwsZEMe27Wmzf5tTTUUnRTpa0aZpoNp45dPNqWM5MPT0VjXuLn21e7zVPnHlXEOghTCnSBsx_ZOEEt"
                    alt="aesthetic display of luxury beauty products"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-8 text-center bg-background">
          <div className="max-w-3xl mx-auto space-y-10">
            <span className="material-symbols-outlined text-secondary-fixed text-5xl">auto_fix_high</span>
            <h2 className="font-playfair text-5xl leading-tight italic">
              Готови ли сте да преживеете <br /> своята промяна?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <Link to="/booking" className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 text-sm font-medium tracking-[0.2em] uppercase transition-all hover:shadow-xl active:scale-95">
                Book Your Ritual
              </Link>
              <Link to="/gallery" className="border border-outline-variant text-on-surface px-10 py-4 text-sm font-medium tracking-[0.2em] uppercase hover:bg-surface-container-high transition-all">
                View Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
