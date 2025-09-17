import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

function GlassCard({ title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 shadow-xl flex flex-col justify-between h-full"
    >
      <h3 className="text-xl sm:text-2xl font-bold mb-3">{title}</h3>
      <p className="text-white/70 leading-relaxed text-sm sm:text-base">
        {description}
      </p>
    </motion.div>
  );
}

export default function Batak() {
  const [zoomed, setZoomed] = useState(false);
  const bibliographyRef = useRef(null);
  const scrollY = useMotionValue(0);

  useEffect(() => {
    document.body.style.overflow = zoomed ? "auto" : "hidden";
  }, [zoomed]);

  useEffect(() => {
    const handleScroll = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  // Parallax background
  const circle1Y = useTransform(scrollY, [0, 1000], [0, 50]);
  const circle2Y = useTransform(scrollY, [0, 1000], [0, -50]);
  const circle3Y = useTransform(scrollY, [0, 1000], [-10, 20]);

  const cardVariants = {
    offscreen: { y: 50, opacity: 0, scale: 0.95 },
    onscreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="bg-[#0a0a0d] text-white font-sans overflow-x-hidden relative">
      {/* HERO SECTION */}
      <AnimatePresence>
        {!zoomed && (
          <motion.section
            className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden"
            initial={{ scale: 1, opacity: 1 }}
            exit={{
              scale: 2,
              opacity: 0,
              rotateX: 15,
              rotateY: 8,
              transition: { duration: 0.6, ease: "easeInOut" },
            }}
          >
            {/* Background glowing circles */}
            <motion.div
              style={{ y: circle1Y }}
              className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-purple-600/40 blur-3xl top-1/4 left-1/4 z-0"
              animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
              transition={{ duration: 15, repeat: Infinity, repeatType: "loop" }}
            />
            <motion.div
              style={{ y: circle2Y }}
              className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-blue-500/40 blur-3xl bottom-1/4 right-1/4 z-0"
              animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
              transition={{ duration: 18, repeat: Infinity, repeatType: "loop" }}
            />
            <motion.div
              style={{ y: circle3Y }}
              className="absolute w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-purple-400/30 blur-3xl top-1/3 right-1/4 z-0"
              animate={{ x: [-20, 20, -20], y: [10, -10, 10] }}
              transition={{ duration: 12, repeat: Infinity, repeatType: "loop" }}
            />

            {/* CONTENT ABOVE BACKGROUND */}
            <div className="relative z-10 px-4">
              <motion.h1
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6"
              >
                The Architecture of Batak Houses
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="text-base sm:text-lg md:text-2xl text-white/70 max-w-3xl mb-12 mx-auto"
              >
                Discover how these traditional homes of North Sumatra blend
                practicality, artistry, and meaning in every detail.
              </motion.p>

              <motion.button
                initial={{ scale: 0.9 }}
                animate={{ scale: [0.9, 1.05, 1] }}
                transition={{ repeat: Infinity, repeatType: "loop", duration: 1.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setZoomed(true)}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-teal-500 rounded-full text-base sm:text-lg font-bold shadow-lg hover:bg-teal-400 transition"
              >
                Discover
              </motion.button>
            </div>
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
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
            >
              {[
                {
                  title: "Stilts",
                  description:
                    "Batak houses are on thick wooden stilts, giving them a commanding look and space for storage below.",
                },
                {
                  title: "Carvings & Colours",
                  description:
                    "Red, white, and black paints symbolize the cosmos, while carvings act as spiritual protection.",
                },
                {
                  title: "How They Are Made",
                  description:
                    "Strong wood and flexible bamboo make Batak houses durable, sustainable, and climate-adapted.",
                },
                {
                  title: "A Space For Families",
                  description:
                    "Inside, multiple families can live together, making the house a communal space.",
                },
              ].map((item, idx) => (
                <motion.div key={idx} variants={cardVariants}>
                  <GlassCard {...item} />
                </motion.div>
              ))}
            </motion.section>

            {/* COMPARISONS */}
            <motion.section
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
                How Do They Compare?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Tongkonan (Toraja)",
                    description:
                      "Both have dramatic roofs. Batak houses are larger halls, while Tongkonan is more intimate.",
                  },
                  {
                    title: "Rumah Gadang (Minangkabau)",
                    description:
                      "Rumah Gadang looks like a palace; Batak houses are bigger and more solid.",
                  },
                  {
                    title: "Bubungan Tinggi (Banjar)",
                    description:
                      "Banjar homes spread across lowlands; Batak houses reach upward to fit highlands.",
                  },
                  {
                    title: "Rumah Melayu (Malay)",
                    description:
                      "Rumah Melayu is simpler; Batak houses are elaborate with detailed timber frames.",
                  },
                ].map((item, idx) => (
                  <motion.div key={idx} variants={cardVariants}>
                    <GlassCard {...item} />
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* AUSTRALIA COMPARISON */}
            <motion.section
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
                Batak Houses vs Australian Houses
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Queenslander House",
                    description:
                      "Similar stilts and also made to resist water, structure on the stilts is different.",
                  },
                  {
                    title: "Modern Australian House",
                    description:
                      "Not similar at all, modern houses are on the ground and have a different structure..",
                  },
                  {
                    title: "Traditional Hut",
                    description:
                      "Australian huts are smaller and are made to withstand different climates.",
                  },
                ].map((item, idx) => (
                  <motion.div key={idx} variants={cardVariants}>
                    <GlassCard {...item} />
                  </motion.div>
                ))}
              </div>
            </motion.section>
{/* MINECRAFT - FIXED HEIGHT */}
<motion.section
  className="w-full px-4 sm:px-6 lg:px-8 py-20 flex justify-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.9 }}
>
  <div className="text-center w-full max-w-5xl">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
      Minecraft Build
    </h2>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/Gwodj6jA6qY"
        title="Minecraft Batak House"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
  </div>
</motion.section>


            
{/* KAHOOT */}
<motion.section
  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.9 }}
>
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
    Kahoot to Play
  </h2>
  <div className="flex justify-center">
    <motion.a
      href="https://kahoot.it/"
      target="_blank"
      rel="noopener noreferrer"
      className="px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg transition bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:opacity-90"
      initial={{ scale: 0.95 }}
      animate={{ scale: [0.95, 1.05, 0.95] }}
      transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      Play Kahoot
    </motion.a>
  </div>
</motion.section>


              
            {/* BIBLIOGRAPHY */}
            <motion.section
              ref={bibliographyRef}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
              initial={{ opacity: 0, scale: 1.3, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
                Bibliography
              </h2>
              <ul className="space-y-3 text-white/70 list-disc list-inside text-sm sm:text-base">
                <li>
                  ArtAsia (n.d.). Indonesian Architecture: The Batak House.{" "}
                  <a
                    href="https://www.sciencedirect.com/science/article/pii/S1877042815033285?ref=pdf_download&fr=RR-2&rr=97fcbb46ca565738"
                    className="underline hover:text-teal-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>{" "}
                  [Accessed 31 July 2025]
                </li>
                <li>
                  Hanan, H. and Wonorahardjo, S. (2012). The Architecture of
                  Batak Toba.{" "}
                  <a
                    href="https://ph01.tci-thaijo.org/index.php/nakhara/article/view/104899"
                    className="underline hover:text-teal-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>{" "}
                  [Accessed 31 July 2025]
                </li>
                <li>
                  Nasution, A.H., Usman, B. and Musyirwan, N. (2015). Values of
                  Local Wisdom on Toba Batak Traditional House.{" "}
                  <a
                    href="https://doi.org/10.1016/j.sbspro.2015.08.229"
                    className="underline hover:text-teal-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DOI
                  </a>
                </li>
              </ul>
            </motion.section>

            <footer className="text-center py-12 text-white/50">
              © 2025 Batak Info. Created to get invited to the pizza party.
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
