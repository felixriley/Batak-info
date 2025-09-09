import React from "react";
import { motion } from "framer-motion";

export default function BatakHouseLanding() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-[#07060A] text-white min-h-screen relative font-sans overflow-x-hidden">

      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[60rem] h-[60rem] rounded-full bg-gradient-to-tr from-purple-700 to-teal-400 opacity-10 blur-3xl rotate-12" />
        <div className="absolute -bottom-40 -right-40 w-[48rem] h-[48rem] rounded-full bg-gradient-to-br from-red-700 to-orange-500 opacity-6 blur-2xl" />
      </div>

      {/* Navbar */}
      <header className="flex justify-between items-center p-8 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold tracking-tight">Batak-Info</h1>
        <nav className="space-x-6 hidden md:flex text-white/70">
          <a href="#architecture" className="hover:text-white">Architecture</a>
          <a href="#compare" className="hover:text-white">Compare</a>
          <a href="#aus-compare" className="hover:text-white">Australia</a>
          <a href="#minecraft" className="hover:text-white">Minecraft</a>
          <a href="#bibliography" className="hover:text-white">Bibliography</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
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
          <a href="#architecture" className="px-8 py-4 bg-gradient-to-r from-purple-700 to-teal-400 rounded-full font-semibold hover:scale-105 transition-transform">
            Explore
          </a>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section
        id="architecture"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="max-w-6xl mx-auto px-8 py-20 grid gap-12 md:grid-cols-2"
      >
        <FeatureCard 
          title="Stilts"
          description="Batak houses are on thick wooden stilts. This not only gives them a commanding look but also provides special space below for animals, tools, or storage."
        />
        <FeatureCard 
          title="Carvings And Colours"
          description="All the ornaments and all the colors has a purpose. Red, white, and black paints—made from natural materials—symbolize the cosmos, while carvings act as spiritual protection for the house."
        />
        <FeatureCard 
          title="How They Are Made"
          description="Using strong wood and flexible bamboo, the Batak people made homes adapted to their environment they are: strong, sustainable, and long-lasting."
        />
        <FeatureCard 
          title="A Space For Lots Of People"
          description="Inside, the house is wide open, usually shared by many families. More than just shelter, it was a place where families would live together."
        />
      </motion.section>

      {/* Original Comparison Section */}
      <motion.section
        id="compare"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="max-w-6xl mx-auto px-8 py-20"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          How Do They Compare?
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <CompareCard title="Tongkonan (Toraja)" description="Both the Tongkonan and Batak houses have dramatic roofs. But while the Torajan house is more intimate, the Batak version is more like a large hall."/>
          <CompareCard title="Rumah Gadang (Minangkabau)" description="The Rumah Gadang looks almost like a palace with its wave-like rooflines. The Batak house, on the other hand, is more solid and bigger."/>
          <CompareCard title="Bubungan Tinggi (Banjar)" description="Banjar homes spread wide across the lowlands, while Batak houses reach upward. Their tall, compact form suits the steep terrain of North Sumatra’s highlands."/>
          <CompareCard title="Rumah Melayu (Malay)" description="The Rumah Melayu is often simpler in design. In contrast, Batak houses are far more elaborate, with timber frames and detailed joints."/>
        </div>
      </motion.section>

      {/* Australian Comparison Section */}
      <motion.section
        id="aus-compare"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="max-w-6xl mx-auto px-8 py-20"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Batak Houses vs Australian Houses
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <CompareCard
            title="Queenslander House"
            description="Australian Queenslander homes are built elevated on stilts for ventilation and flood protection. Unlike Batak houses, they are often made from lighter timber and have wide verandas for shade."
          />
          <CompareCard
            title="Modern Australian House"
            description="Modern Australian homes often prioritize open-plan living and large glass windows. Batak houses, in contrast, focus on communal space and spiritual symbolism."
          />
          <CompareCard
            title="Traditional Australian Hut"
            description="Traditional huts were simpler and suited for local climates. Batak houses are more elaborate with carvings and symbolic colors representing the cosmos."
          />
        </div>
      </motion.section>

      {/* Minecraft Section */}
      <motion.section
        id="minecraft"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="max-w-6xl mx-auto px-8 py-20"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          The House built in Minecraft
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-md flex flex-col gap-6"
        >
          <p className="text-white/70 text-center md:text-lg">
            This is built in Minecraft and can be watched in the video below.
          </p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-2xl border border-white/10"
              src={`https://www.youtube.com/embed/YOUR_VIDEO_ID`}
              title="Minecraft Batak House"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </motion.section>

      {/* Bibliography */}
      <motion.section
        id="bibliography"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="max-w-6xl mx-auto px-8 py-20"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Bibliography
        </motion.h2>
        <ul className="space-y-3 text-white/70 list-disc list-inside">
          <li>ArtAsia (n.d.). Indonesian Architecture: The Batak House. <a href="http://artasia.www2.50megs.com/Indonesia/houses.html" className="underline">Link</a> [Accessed 31 July 2025]</li>
          <li>Hanan, H. and Wonorahardjo, S. (2012). The Architecture of Batak Toba: An Expression of Living Harmoniously. <a href="https://ph01.tci-thaijo.org/index.php/nakhara/article/view/104899" className="underline">Link</a> [Accessed 31 July 2025]</li>
          <li>Nasution, A.H., Usman, B. and Musyirwan, N. (2015). The Values of Local Wisdom on Toba Batak Traditional House. Procedia - Social and Behavioral Sciences, 202, pp.257–264. doi:10.1016/j.sbspro.2015.08.229</li>
        </ul>
      </motion.section>

      <footer className="text-center py-12 text-white/60">
        © 2025 Batak-Info Created for learning and discovery.
      </footer>
    </div>
  );
}

// Feature Card
function FeatureCard({ title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg"
    >
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
}

// Comparison Card
function CompareCard({ title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="p-6 rounded-3xl bg-white/5 border border-white/10 shadow-lg"
    >
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
}
