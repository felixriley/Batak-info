import React from 'react'
import { motion } from 'framer-motion'

export default function BatakHouseLanding() {
  return (
    <div className="min-h-screen bg-[#07060A] text-gray-200 antialiased leading-relaxed">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[60rem] h-[60rem] rounded-full bg-gradient-to-tr from-[#6b21a8] to-[#0ea5a0] opacity-10 blur-3xl transform rotate-12" />
        <div className="absolute -bottom-40 -right-40 w-[48rem] h-[48rem] rounded-full bg-gradient-to-br from-[#b91c1c] to-[#f97316] opacity-6 blur-2xl" />
      </div>

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

      <main className="max-w-6xl mx-auto px-6 pb-20">
        {/* Hero & Features Sections */}
        {/* Comparison Section */}
        {/* Bibliography & Footer */}
        {/* Subcomponents are included below */}
      </main>
    </div>
  )
}

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

function InfoCard({ title, description }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="rounded-xl p-5 bg-gradient-to-b from-white/3 to-white/2 border border-white/6 backdrop-blur-md shadow">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-white/70">{description}</p>
    </motion.div>
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

function MinecraftCard() {
  return (
    <motion.article whileHover={{ scale: 1.02 }} className="rounded-xl p-5 bg-white/3 border border-white/6 backdrop-blur-md shadow flex items-start gap-4">
      <div className="w-12 h-12 rounded-lg bg-white/6 flex items-center justify-center">🟩</div>
      <div>
        <h5 className="font-semibold mb-1">The House built in Minecraft</h5>
        <p className="text-sm text-white/70">This is built in Minecraft and not a real house.</p>
      </div>
    </motion.article>
  )
}
