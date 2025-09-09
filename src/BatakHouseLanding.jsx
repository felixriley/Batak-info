import React from 'react'
import { motion } from 'framer-motion'

export default function BatakHouseLanding() {
  return (
    <div className="min-h-screen bg-[#07060A] text-gray-200 antialiased leading-relaxed relative">

      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[60rem] h-[60rem] rounded-full bg-gradient-to-tr from-[#6b21a8] to-[#0ea5a0] opacity-10 blur-3xl transform rotate-12" />
        <div className="absolute -bottom-40 -right-40 w-[48rem] h-[48rem] rounded-full bg-gradient-to-br from-[#b91c1c] to-[#f97316] opacity-6 blur-2xl" />
      </div>

      {/* Navbar */}
      <header className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/5 flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
              <path d="M3 12L12 3l9 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 12v7a1 1 0 001 1h10a1 1 0 001-1v-7" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight">Batak‑Info</h1>
            <p className="text-xs text-white/60">A visual exploration of Batak houses</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#architecture" className="hover:text-white">Architecture</a>
          <a href="#compare" className="hover:text-white">Compare</a>
          <a href="#bibliography" className="hover:text-white">Bibliography</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pb-20">
        {/* Architecture Section */}
        <section id="architecture" className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="p-8 rounded-2xl bg-gradient-to-b from-white/3 to-white/2 backdrop-blur-md border border-white/6 shadow-lg">
            <h2 className="text-4xl font-extrabold mb-3">The Architecture of Batak Houses</h2>
            <p className="text-lg text-white/80 mb-6">Discover how these traditional homes of North Sumatra blend practicality, artistry, and meaning in every detail.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FeatureCard title="Stilts" emoji="🪵">
                Batak houses are on thick wooden stilts. This not only gives them a commanding look but also provides special space below for animals, tools, or storage.
              </FeatureCard>

              <FeatureCard title="Carvings And Colours" emoji="🎨">
                All the ornaments and all the colors has a purpose. Red, white, and black paints—made from natural materials—symbolize the cosmos, while carvings act as spiritual protection for the house.
              </FeatureCard>

              <FeatureCard title="How They Are Made" emoji="🔨">
                Using strong wood and flexible bamboo, the Batak people made homes adapted to their environment they are: strong, sustainable, and long-lasting.
              </FeatureCard>

              <FeatureCard title="A Space For Lots Of People" emoji="🏠">
                Inside, the house is wide open, usually shared by many families. More than just shelter, it was a place where families would live together.
              </FeatureCard>
            </div>
          </motion.div>

          <motion.figure initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl p-6 bg-gradient-to-b from-white/2 to-white/3 border border-white/5 shadow-xl">
            <div className="w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#0f172a]/40 to-[#001219]/30 p-6">
              <svg viewBox="0 0 160 100" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <rect width="160" height="100" rx="8" fill="#081019" />
              </svg>
              <figcaption className="mt-4 text-sm text-white/60">Stylized depiction — shapes inspired by the tall, upward-reaching roofs of Batak houses.</figcaption>
            </div>
          </motion.figure>
        </section>

        {/* Comparison Section */}
        <section id="compare" className="mt-14">
          <motion.h3 initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-2xl font-bold mb-6">How Do They Compare?</motion.h3>

          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <CompareCard title="Tongkonan (Toraja)" text="Both the Tongkonan and Batak houses have dramatic roofs. But while the Torajan house is more intimate, the Batak version is more like a large hall." />
            <CompareCard title="Rumah Gadang (Minangkabau)" text="The Rumah Gadang looks almost like a palace with its wave-like rooflines. The Batak house, on the other hand, is more solid and bigger." />
            <CompareCard title="Bubungan Tinggi (Banjar)" text="Banjar homes spread wide across the lowlands, while Batak houses reach upward. Their tall, compact form suits the steep terrain of North Sumatra’s highlands." />
            <CompareCard title="Rumah Melayu (Malay)" text="The Rumah Melayu is often simpler in design. In contrast, Batak houses are far more elaborate, with timber frames and detailed joints." />
            <MinecraftCard youtubeId="YOUR_VIDEO_ID" /> {/* Replace with your YouTube video ID */}
          </div>
        </section>

        {/* Bibliography Section */}
        <section id="bibliography" className="mt-12">
          <div className="p-6 rounded-xl bg-gradient-to-b from-white/3 to-white/2 border border-white/6">
            <h4 className="text-xl font-semibold mb-3">Bibliography</h4>
            <ul className="text-sm text-white/70 list-disc list-inside space-y-1">
              <li>ArtAsia (n.d.). Indonesian Architecture: The Batak House. <a href="http://artasia.www2.50megs.com/Indonesia/houses.html" className="underline">Link</a> [Accessed 31 July 2025]</li>
              <li>Hanan, H. and Wonorahardjo, S. (2012). The Architecture of Batak Toba: An Expression of Living Harmoniously. <a href="https://ph01.tci-thaijo.org/index.php/nakhara/article/view/104899" className="underline">Link</a> [Accessed 31 July 2025]</li>
              <li>Nasution, A.H., Usman, B. and Musyirwan, N. (2015). The Values of Local Wisdom on Toba Batak Traditional House. Procedia - Social and Behavioral Sciences, 202, pp.257–264. doi:10.1016/j.sbspro.2015.08.229</li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 py-10 text-center text-sm text-white/60">
          <div>© 2025 Batak-Info — Created for learning and discovery.</div>
        </footer>
      </main>
    </div>
  )
}

/* Subcomponents */
function FeatureCard({ title, children, emoji }) {
  return (
    <div className="rounded-xl p-4 bg-white/3 border border-white/6 backdrop-blur-md shadow-sm">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/6 to-white/3 flex items-center justify-center text-2xl">{emoji}</div>
        <div>
          <h5 className="font-semibold">{title}</h5>
          <p className="mt-1 text-sm text-white/70">{children}</p>
        </div>
      </div>
    </div>
  )
}

function CompareCard({ title, text }) {
  return (
    <motion.article whileHover={{ scale: 1.02 }} className="rounded-xl p-5 bg-white/3 border border-white/6 backdrop-blur-md shadow">
      <h5 className="font-semibold mb-2">{title}</h5>
      <p className="text-sm text-white/70">{text}</p>
    </motion.article>
  )
}

// Updated Minecraft section with YouTube embed
function MinecraftCard({ youtubeId }) {
  const youtubeUrl = `https://www.youtube.com/embed/${youtubeId}`

  return (
    <motion.article whileHover={{ scale: 1.02 }} className="rounded-xl p-5 bg-white/3 border border-white/6 backdrop-blur-md shadow flex flex-col gap-4">
      <h5 className="font-semibold mb-2">The House built in Minecraft</h5>
      <p className="text-sm text-white/70">This is built in Minecraft and can be watched in video format below.</p>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-full rounded-lg border border-white/10"
          src={youtubeUrl}
          title="Minecraft Batak House"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </motion.article>
  )
}
