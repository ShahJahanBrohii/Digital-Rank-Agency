import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, DollarSign, BarChart3 } from 'lucide-react';

const Hero = () => {
  const quickStats = [
    { icon: Users, label: "500+ Clients" },
    { icon: DollarSign, label: "$50M+ Revenue" },
    { icon: BarChart3, label: "247% Avg Growth" }
  ];

  const floatingCards = [
    { label: "SEO Traffic", value: "+340%", delay: 0.5, position: "top-0 right-0" },
    { label: "Conversion Rate", value: "+127%", delay: 0.7, position: "bottom-20 left-0" },
    { label: "ROI", value: "4.2x", delay: 0.9, position: "top-1/3 right-1/4" }
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-blue-400">Trusted by 500+ Businesses</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                Growth Engineered.
                <span className="block mt-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Results Delivered.
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-zinc-400 leading-relaxed max-w-2xl">
                Transform your digital presence into a revenue powerhouse with data-driven strategies that deliver measurable ROI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                Get Your Free Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 text-white font-semibold rounded-xl hover:bg-zinc-800 hover:border-zinc-600 transition-all">
                View Case Studies
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-8 pt-8 border-t border-zinc-800/50"
            >
              {quickStats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <stat.icon className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium text-zinc-400">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square">
              {/* Floating Cards */}
              {floatingCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: card.delay, duration: 0.6 }}
                  className={`absolute ${card.position} p-6 bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 rounded-2xl shadow-2xl`}
                >
                  <div className="text-sm text-zinc-400 mb-1">{card.label}</div>
                  <div className="text-3xl font-bold text-blue-500">{card.value}</div>
                </motion.div>
              ))}
              
              {/* Central Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
