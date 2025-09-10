import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BatakHouseLanding() {
  const [enterSite, setEnterSite] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const circles = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    size: Math.random() * 150 + 80,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    delay: Math.random() * 5,
  }));

  return (
    <div className="relative min-h-screen bg-dark overflow-hidden">
      {/* Floating glowing circles */}
      {circles.map((c) => (
        <motion.div
          key={c.id}
          className="absolute rounded-full bg-gradient-to-r from-primary to-accent opacity-30 blur-3xl"
          style={{
            width: c.size,
            height: c.size,
            top: c.y,
            left: c.x,
          }}
          animate={{
            y: [c.y, c.y + 40, c.y],
            x: [c.x, c.x + 20, c.x],
          }}
          transition={{
            duration: 12 + c.delay,
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
            className="fixed inset-0 flex flex-col items-center justify-center text-center px-6 bg-dark z-50"
            initial={{ opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              The Architecture of Batak Houses
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-white/70 max-w-xl sm:max-w-2xl">
              Discover how these traditional homes of North Sumatra blend
              practicality, artistry, and meaning in every detail.
            </p>
            <button
              onClick={() => setEnterSite(true)}
              className="mt-10 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-accent text-base sm:text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition"
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
          transition={{ duration: 1.2 }}
        >
          {/* Example Section */}
          <motion.section
            className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 md:px-20 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              What Makes Batak Houses Unique?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-md sm:max-w-2xl">
              Batak houses are built with symbolism, strength, and community in
              mind — combining stilts, carvings, and spacious interiors.
            </p>
          </motion.section>

          {/* Bibliography Section */}
          <motion.section
            id="bibliography"
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-dark to-primary px-6 sm:px-12 md:px-20 text-center"
            initial={{ scale: 1.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
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
