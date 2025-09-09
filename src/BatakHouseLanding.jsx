import React from "react";
import { motion } from "framer-motion";

export default function BatakHouseCanvas() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="bg-[#07060A] text-white min-h-screen font-sans overflow-x-hidden">

      {/* Background Glow Circles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-64 -left-64 w-[70rem] h-[70rem] rounded-full bg-gradient-to-tr from-purple-700 to-teal-400 opacity-10 blur-3xl animate-spin-slow" />
        <div className="absolute -bottom-64 -right-64 w-[60rem] h-[60rem] rounded-full bg-gradient-to-br from-red-700 to-orange-500 opacity-8 blur-2xl animate-spin-slow-reverse" />
      </div>

      {/* Navbar */}
      <header className="fixed w-full z-50 backdrop-blur-md bg-white/5 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">Batak-Info</h1>
          <nav className="space-x-6 hidden md:flex text-white/70">
            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
            <a href="#compare" className="hover:text-white transition-colors">Compare</a>
            <a href="#aus-compare" className="hover:text-white transition-colors">Australia</a>
            <a href="#minecraft" className="hover:text-white transition-colors">Minecraft</a>
            <a href="#bibliography" className="hover:text-white transition-colors">Bibliography</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-8 relative">
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight"
        >
          The Architecture of Batak Houses
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl text-white/70 max-w-3xl"
        >
          Discover how these traditional homes of North Sumatra blend practicality, artistry, and meaning in every detail.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12"
        >
          <a href="#architecture" className="px-10 py-4 bg-gradient-to-r from-purple-700 to-teal-400 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg">
            Explore
          </a>
        </motion.div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute bottom-12">
          <div className="w-3 h-3 rounded-full bg-white/70 mb-2 mx-auto animate-bounce"></div>
          <div className="w-1 h-10 bg-white/20 mx-auto rounded-full"></div>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section id="architecture" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants} className="max-w-6xl mx-auto px-8 py-32 grid gap-12 md:grid-cols-2">
        <motion.div variants={staggerContainer} className="grid gap-8 md:grid-cols-2">
          <FeatureCard title="Stilts" description="Batak houses are on thick wooden stilts. This not only gives them a commanding look but also provides special space below for animals, tools, or storage." />
          <FeatureCard title="Carvings And Colours" description="All the ornaments and all the colors has a purpose. Red, white, and black paints—made from natural materials—symbolize the cosmos, while carvings act as spiritual protection for the house." />
          <FeatureCard title="How They Are Made" description="Using strong wood and flexible bamboo, the Batak people made homes adapted to their environment they are: strong, sustainable, and long-lasting." />
          <FeatureCard title="A Space For Lots Of People" description="Inside, the house is wide open, usually shared by many families. More than just shelter, it was a place where families would live together." />
        </motion.div>
      </motion.section>

      {/* Original Comparison Section */}
      <motion.section id="compare" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants} className="max-w-6xl mx-auto px-8 py-32">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-bold text-center mb-16">
          How Do They Compare?
        </motion.h2>
        <motion.div variants={staggerContainer} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <CompareCard title="Tongkonan (Toraja)" description="Both the Tongkonan and Batak houses have dramatic roofs. But while the Torajan house is more intimate, the Batak version is more like a large hall." />
          <CompareCard title="Rumah Gadang (Minangkabau)" description="The Rumah Gadang looks almost like a palace with its wave-like rooflines. The Batak house, on the other hand, is more solid and bigger." />
          <CompareCard title="Bubungan Tinggi (Banjar)" description="Banjar homes spread wide across the lowlands, while Batak houses reach upward. Their tall, compact form suits the steep terrain of North Sumatra’s highlands." />
          <CompareCard title="Rumah Melayu (Malay)" description="The Rumah Melayu is often simpler in design. In contrast, Batak houses are far more elaborate, with timber frames and detailed joints." />
        </motion.div>
      </motion.section>

      {/* Australian Comparison Section */}
      <motion.section id="aus-compare" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants} className="max-w-6xl mx-auto px-8 py-32">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-bold text-center mb-16">
          Batak Houses vs Australian Houses
        </motion.h2>
        <motion.div variants={staggerContainer} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <CompareCard title="Queenslander House" description="Australian Queenslander homes are built elevated on stilts for ventilation and flood protection. Unlike Batak houses, they are often made from lighter timber and have wide verandas for shade." />
          <CompareCard title="Modern Australian House" description="Modern Australian homes often prioritize open-plan living and large glass windows. Batak houses, in contrast, focus on communal space and spiritual symbolism." />
          <CompareCard title="Traditional Australian Hut" description="Traditional huts were simpler and suited for local climates. Batak houses are more elaborate with carvings and symbolic colors representing the cosmos." />
        </motion.div>
      </motion.section>

      {/* Minecraft Section */}
      <motion.section id="minecraft" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants} className="max-w-6xl mx-auto px-8 py-32">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-bold text-center mb-12">
          The House built in Minecraft
        </motion.h2>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="p-8 rounded-3xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-md flex flex-col gap-6">
          <p className="text-white/70 text-center md:text-lg">This is built in Minecraft and can be watched in the video below.</p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe className="w-full h-full rounded-2xl border border-white/10" src={`https://www.youtube.com/embed/YOUR_VIDEO_ID`} title="Minecraft Batak House" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </motion.div>
      </motion.section>
<section id="bibliography" className="max-w-6xl mx-auto px-8 py-32">
  <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
    Bibliography
  </h2>
  <ul className="space-y-3 text-white/70 list-disc list-inside">
    <li>
      ArtAsia (n.d.). Indonesian Architecture: The Batak House.{" "}
      <a 
        href="http://artasia.www2.50megs.com/Indonesia/houses.html" 
        className="underline hover:text-teal-400"
        target="_blank" 
        rel="noopener noreferrer"
      >
        Link
      </a>{" "}
      [Accessed 31 July 2025]
    </li>
    <li>
      Hanan, H. and Wonorahardjo, S. (2012). The Architecture of Batak Toba: An Expression of Living Harmoniously. Nakhara: Journal of Environmental Design and Planning, 8, pp.11-22.{" "}
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
      Nasution, A.H., Usman, B. and Musyirwan, N. (2015). The Values of Local Wisdom on Toba Batak Traditional House. Procedia - Social and Behavioral Sciences, 202, pp.257–264.{" "}
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
</section>

