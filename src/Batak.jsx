import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function GlassCard({ title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 shadow-xl transition-transform"
    >
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-white/70 leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function Batak() {
  const [zoomed, setZoomed] = useState(false);
  const bibliographyRef = useRef(null);

  // Lock scroll at the start
  useEffect(() => {
    document.body.style.overflow = zoomed ? "auto" : "hidden";
  }, [zoomed]);

  const scrollToBibliography = () => {
    bibliographyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0a0a0d] text-white font-sans overflow-x-hidden relative">
      {/* HERO SECTION */}
      <AnimatePresence>
        {!zoomed && (
          <motion.section
            className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden"
            initial={{ scale: 1, opacity: 1 }}
            exit={{ scale: 2, opacity: 0, rotateX: 20, rotateY: 10, transition: { duration: 0.8 } }}
          >
            {/* Glowing circles background */}
            <motion.div
              className="absolute w-96 h-96 rounded-full bg-purple-600/40 blur-3xl top-1/4 left-1/4"
              animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
              transition={{ duration: 15, repeat: Infinity, repeatType: "loop" }}
            />
            <motion.div
              className="absolute w-96 h-96 rounded-full bg-blue-500/40 blur-3xl bottom-1/4 right-1/4"
              animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
              transition={{ duration: 18, repeat: Infinity, repeatType: "loop" }}
            />
            <motion.div
              className="absolute w-72 h-72 rounded-full bg-purple-400/30 blur-3xl top-1/3 right-1/4"
              animate={{ x: [-20, 20, -20], y: [10, -10, 10] }}
              transition={{ duration: 12, repeat: Infinity, repeatType: "loop" }}
            />

            <motion.h1
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="text-6xl md:text-7xl font-extrabold mb-6"
            >
              The Architecture of Batak Houses
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/70 max-w-3xl mb-12"
            >
              Discover how these traditional homes of North Sumatra blend practicality, artistry, and meaning in every detail.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setZoomed(true)}
              className="px-8 py-4 bg-teal-500 rounded-full text-lg font-bold shadow-lg hover:bg-teal-400 transition"
            >
              Discover
            </motion.button>
          </motion.section>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      <AnimatePresence>
        {zoomed && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* FEATURES */}
            <motion.section
              className="max-w-7xl mx-auto px-6 py-32 grid gap-12 md:grid-cols-2 lg:grid-cols-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <GlassCard title="Stilts" description="Batak houses are on thick wooden stilts, giving them a commanding look and space for storage below." />
              <GlassCard title="Carvings & Colours" description="Red, white, and black paints symbolize the cosmos, while carvings act as spiritual protection." />
              <GlassCard title="How They Are Made" description="Strong wood and flexible bamboo make Batak houses durable, sustainable, and climate-adapted." />
              <GlassCard title="A Space For Families" description="Inside, multiple families can live together, making the house a communal space." />
            </motion.section>

            {/* COMPARISONS */}
            <motion.section
              className="max-w-7xl mx-auto px-6 py-32"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">How Do They Compare?</h2>
              <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                <GlassCard title="Tongkonan (Toraja)" description="Both have dramatic roofs. Batak houses are larger halls, while Tongkonan is more intimate." />
                <GlassCard title="Rumah Gadang (Minangkabau)" description="Rumah Gadang looks like a palace; Batak houses are bigger and more solid." />
                <GlassCard title="Bubungan Tinggi (Banjar)" description="Banjar homes spread across lowlands; Batak houses reach upward to fit highlands." />
                <GlassCard title="Rumah Melayu (Malay)" description="Rumah Melayu is simpler; Batak houses are elaborate with detailed timber frames." />
              </div>
            </motion.section>

            {/* AUSTRALIA COMPARISON */}
            <motion.section
              className="max-w-7xl mx-auto px-6 py-32"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Batak Houses vs Australian Houses</h2>
              <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                <GlassCard title="Queenslander House" description="Elevated on stilts with wide verandas, suitable for floods and ventilation." />
                <GlassCard title="Modern Australian House" description="Open-plan living with large glass windows; contrast to Batak communal focus." />
                <GlassCard title="Traditional Hut" description="Simpler design for the local climate, Batak houses are more symbolic and elaborate." />
              </div>
            </motion.section>

            {/* MINECRAFT */}
            <motion.section
              className="max-w-7xl mx-auto px-6 py-32"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Minecraft Build</h2>
              <div className="relative aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full rounded-3xl border border-white/10 shadow-xl"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="Minecraft Batak House"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </motion.section>

            {/* BIBLIOGRAPHY */}
            <motion.section
              ref={bibliographyRef}
              className="max-w-7xl mx-auto px-6 py-32"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Bibliography</h2>
              <ul className="space-y-3 text-white/70 list-disc list-inside">
                <li>ArtAsia (n.d.). Indonesian Architecture: The Batak House. <a href="http://artasia.www2.50megs.com/Indonesia/houses.html" className="underline hover:text-teal-400" target="_blank" rel="noopener noreferrer">Link</a> [Accessed 31 July 2025]</li>
                <li>Hanan, H. and Wonorahardjo, S. (2012). The Architecture of Batak Toba. <a href="https://ph01.tci-thaijo.org/index.php/nakhara/article/view/104899" className="underline hover:text-teal-400" target="_blank" rel="noopener noreferrer">Link</a> [Accessed 31 July 2025]</li>
                <li>Nasution, A.H., Usman, B. and Musyirwan, N. (2015). Values of Local Wisdom on Toba Batak Traditional House. <a href="https://doi.org/10.1016/j.sbspro.2015.08.229" className="underline hover:text-teal-400" target="_blank" rel="noopener noreferrer">DOI</a></li>
              </ul>
            </motion.section>

            <footer className="text-center py-12 text-white/50">© 2025 Batak-Info. Created for learning and discovery.</footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
