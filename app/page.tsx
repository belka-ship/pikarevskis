'use client'

import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const projects = [
  {
    number: '01',
    title: 'ArcaSave',
    description: 'High-yield stablecoin savings protocol. Architected entirely through AI-driven development workflows.',
    url: 'https://arcasave.com/'
  },
  {
    number: '02',
    title: 'Skillset',
    description: 'A Decentralized Physical Infrastructure Network (DePIN) designed to crowdsource training data for autonomous robotics.',
    url: 'https://skillset.network/'
  },
  {
    number: '03',
    title: 'BasedAI',
    description: 'Privacy-first AI agent integrated directly into Web3 wallets.',
    url: 'https://basedai.replit.app/'
  },
  {
    number: '04',
    title: 'Travel Loom',
    description: 'AI Assistant for luxury travel advisors. Uses Retrieval-Augmented Generation (RAG) to deliver hyper-personalized, verifiable itineraries.',
    url: 'https://travel-loom-vpikarevskis.replit.app/'
  },
  {
    number: '05',
    title: 'Turtle Hotels',
    description: 'Next-generation travel agency platform. Blends personalized high-touch service with AI-driven booking efficiency.',
    url: 'https://turtlehotels.com/'
  }
]

const experience = [
  {
    company: 'ArcaSave',
    role: 'Founder',
    impact: 'Shipped live stablecoin yield app using AI-native workflows.'
  },
  {
    company: 'Spotnana',
    role: 'Senior Manager',
    impact: 'Launched Open Hotel API and Marriott\'s travel management platform.'
  },
  {
    company: 'Fora',
    role: 'Founding Director of Product',
    impact: 'Shipped core SaaS platform transacting hundreds of millions in volume.'
  },
  {
    company: 'Revolut',
    role: 'Product Manager (New Products)',
    impact: 'Led 0-to-1 launch of Shops, driving $1M+ sales in the first month.'
  },
  {
    company: 'Amazon',
    role: 'Senior PM (Technical)',
    impact: 'Built ML search features driving 20M+ incremental playbacks/year.'
  }
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <div className="max-w-7xl mx-auto w-full">
          <motion.p 
            className="font-sans text-xs tracking-[0.3em] uppercase text-gray-500 mb-8"
            variants={fadeIn}
          >
            Product Leader & AI Builder
          </motion.p>
          
          <motion.h1 
            className="font-serif text-[clamp(3rem,12vw,12rem)] leading-[0.85] tracking-tightest mb-12"
            variants={fadeIn}
          >
            VADIM<br />
            <span className="italic font-normal">Pikarevskis</span>
          </motion.h1>
          
          <motion.p 
            className="font-sans text-lg md:text-xl text-gray-600 max-w-xl mb-16 leading-relaxed"
            variants={fadeIn}
          >
            I build beautiful, simple financial products that abstract away the complexity of blockchain infrastructure.
          </motion.p>
          
          <motion.div 
            className="flex gap-8 md:gap-12"
            variants={fadeIn}
          >
            <a 
              href="#experience" 
              className="font-sans text-sm tracking-wide uppercase link-underline"
            >
              Experience
            </a>
            <a 
              href="#works" 
              className="font-sans text-sm tracking-wide uppercase link-underline"
            >
              Selected Works
            </a>
            <a 
              href="/resume.pdf" 
              className="font-sans text-sm tracking-wide uppercase link-underline"
            >
              Resume
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-12 left-6 md:left-12 lg:left-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-gray-400">
            Scroll
          </p>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <section id="experience" className="px-6 md:px-12 lg:px-24 py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">
              Track Record
            </p>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight">
              Experience
            </h2>
          </motion.div>
          
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-3 gap-8 pb-6 border-b border-gray-800">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500">Company</p>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500">Role</p>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500">Impact</p>
          </div>
          
          {/* Table Rows */}
          <div className="divide-y divide-gray-800">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 py-8 md:py-10 group cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-serif text-2xl md:text-3xl tracking-tight group-hover:italic">
                  {exp.company}
                </h3>
                <p className="font-sans text-gray-400 text-sm md:text-base">
                  {exp.role}
                </p>
                <p className="font-sans text-gray-500 text-sm md:text-base">
                  {exp.impact}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Sandbox Section */}
      <section id="works" className="px-6 md:px-12 lg:px-24 py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">
              The AI Sandbox
            </p>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight text-black">
              Selected <span className="italic">Works</span>
            </h2>
          </motion.div>
          
          <div className="space-y-1">
            {projects.map((project, index) => (
              <motion.a
                key={project.number}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-t border-gray-200 py-12 md:py-16 cursor-pointer block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start gap-8 md:gap-16">
                    <span className="font-sans text-xs tracking-[0.2em] text-gray-400 pt-2">
                      {project.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight mb-4 group-hover:italic text-black">
                        {project.title}
                      </h3>
                      <p className="font-sans text-sm md:text-base text-gray-600 max-w-md leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div 
                    className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center group-hover:bg-black group-hover:border-black transition-colors duration-150"
                  >
                    <svg 
                      className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-150 -rotate-45" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-6 md:px-12 lg:px-24 py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">
                Philosophy
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight">
                Product <span className="italic">Engineering</span>
              </h2>
            </motion.div>
            
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <blockquote className="font-sans text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                <span className="font-serif text-5xl text-gray-300 leading-none">"</span>
                <p className="mt-4">
                  Modern product management requires technical fluency. I leverage AI-augmented workflows to build what I design, instantly closing the loop between user needs and technical execution.
                </p>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-24 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <p className="font-serif text-3xl md:text-4xl tracking-tight">
                Let's connect
              </p>
            </div>
            
            <div className="flex gap-8 md:gap-12">
              <a 
                href="https://linkedin.com/in/vadpik" 
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-lg md:text-xl tracking-wide uppercase link-underline"
              >
                LinkedIn
              </a>
              <a 
                href="https://x.com/vadpik" 
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-lg md:text-xl tracking-wide uppercase link-underline"
              >
                X
              </a>
              <a 
                href="mailto:vpikarevskis@gmail.com"
                className="font-sans text-lg md:text-xl tracking-wide uppercase link-underline"
              >
                Email
              </a>
            </div>
          </div>
          
                  </div>
      </footer>
    </main>
  )
}
