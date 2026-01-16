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
            className="font-serif text-[clamp(3rem,12vw,12rem)] leading-[0.85] tracking-tighter mb-12"
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
      </motion.section>

      <section id="experience" className="px-6 md:px-12 lg:px-24 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Experience
          </motion.h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="border-b border-gray-200 pb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                  <h3 className="font-serif text-2xl md:text-3xl">{exp.company}</h3>
                  <p className="font-sans text-sm tracking-wide text-gray-500 uppercase">{exp.role}</p>
                </div>
                <p className="font-sans text-gray-600 text-lg">{exp.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Selected Works
          </motion.h2>
          
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.a
                key={project.number}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-8">
                  <span className="font-sans text-sm text-gray-400">{project.number}</span>
                  <div className="flex-1">
                    <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 group-hover:italic transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="font-sans text-gray-600 text-lg max-w-2xl">{project.description}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed">
              <p>
                Modern product management requires technical fluency. I leverage AI-augmented workflows to build what I design, instantly closing the loop between user needs and technical execution.
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

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
