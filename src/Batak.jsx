import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BatakHouseLanding() {
  const [enterSite, setEnterSite] = useState(false);

  // Disable scroll until Enter is clicked
  useEffect(() => {
    if (!enterSite) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [enterSite]);

  const circles = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    size: Math.random() * 200 + 100,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    delay: Math.random() * 5,
  }));

  return (
    <div className="relative min-h-screen bg-dark overflow-hidden text-white">
      {/* Floating glowing circles background */}
      {circles.map((c) => (
        <motion.div
          key={c.id}
          className="absolute rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 blur-3xl"
          style={{
            width: c.size,
            height: c.size,
            top: c.y,
            left: c.x,
          }}
          animate={{
            y: [c.y, c.y + 50, c.y],
            x: [c.x, c.x + 30, c.x],
          }}
          transition={{
            duration: 10 + c.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Hero Section */}
      <AnimatePresence>
        {!enterSite && (
          <motion.section
            key="hero"
            className="fixed inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 bg-dark z-50"
            initial={{ opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
              The Architecture of Batak Houses
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-white/70 max-w-md sm:max-w-2xl">
              Explore the symbolism, functionality, and cultural importance of
              Batak houses from North Sumatra.
            </p>
            <button
              onClick={() => setEnterSite(true)}
              className="mt-10 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition"
            >
              Enter
            </button>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {enterSite && (
        <motion.main
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Section 1 */}
          <motion.section
            className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-20 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Symbolism and Design
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-md sm:max-w-2xl">
              Batak houses are raised on stilts to protect from flooding and
              animals. Their roofs, shaped like buffalo horns, symbolize
              strength and fertility. Every carved detail carries cultural
              meaning, passed down for generations.
            </p>
          </motion.section>

          {/* Section 2 */}
          <motion.section
            className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-20 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Community and Culture
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-md sm:max-w-2xl">
              Built as communal spaces, Batak houses reflect unity. Large family
              groups live under one roof, reinforcing the importance of kinship
              in Batak society.
            </p>
          </motion.section>

          {/* Bibliography Section */}
          <motion.section
            id="bibliography"
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-dark to-purple-900 px-4 sm:px-8 md:px-20 text-center"
            initial={{ scale: 1.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
              Bibliography
            </h2>
            <ul className="space-y-4 text-left max-w-md sm:max-w-2xl text-sm sm:text-base md:text-lg">
              <li>
                ArtAsia (n.d.). Indonesian Architecture: The Batak House.{" "}
                <a
                  href="http://artasia.www2.50megs.com/Indonesia/houses.html"
                  className="underline"
                >
                  Link
                </a>{" "}
                [Accessed 31 July 2025].
              </li>
              <li>
                Hanan, H. and Wonorahardjo, S. (2012). The Architecture of Batak
                Toba: An Expression of Living Harmoniously.{" "}
                <a
                  href="https://ph01.tci-thaijo.org/index.php/nakhara/article/view/104899"
                  className="underline"
                >
                  Link
                </a>{" "}
                [Accessed 31 July 2025].
              </li>
              <li>
                Nasution, A.H., Usman, B. and Musyirwan, N. (2015). The Values of
                Local Wisdom on Toba Batak Traditional House.{" "}
                <a
                  href="https://doi.org/10.1016/j.sbspro.2015.08.229"
                  className="underline"
                >
                  Link
                </a>{" "}
                [Accessed 31 July 2025].
              </li>
            </ul>
          </motion.section>

          <footer className="text-center py-8 sm:py-12 text-xs sm:text-sm md:text-base text-white/50">
            © 2025 Batak-Info. Created for learning and discovery.
          </footer>
        </motion.main>
      )}
    </div>
  );
}
