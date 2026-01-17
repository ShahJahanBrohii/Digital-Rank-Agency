import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Target, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: Search,
      title: "SEO Excellence",
      description: "Dominate search rankings with data-driven strategies that convert organic traffic into revenue.",
      features: ["Technical SEO Audits", "Content Optimization", "Link Building", "Local SEO"],
      gradient: "from-cyan-500/20 to-blue-600/20"
    },
    {
      icon: Target,
      title: "Google Ads",
      description: "Precision-targeted campaigns that maximize ROI and minimize wasted ad spend.",
      features: ["Search Campaigns", "Display Advertising", "Shopping Ads", "Remarketing"],
      gradient: "from-blue-500/20 to-indigo-600/20"
    },
    {
      icon: TrendingUp,
      title: "Social Ads",
      description: "Transform social platforms into revenue engines with compelling creative and strategic targeting.",
      features: ["Facebook Ads", "Instagram Campaigns", "LinkedIn B2B", "TikTok Advertising"],
      gradient: "from-indigo-500/20 to-purple-600/20"
    }
  ];

  return (
    <section id="services" className="relative py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Services That
            <span className="block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Scale Revenue
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Strategic digital marketing solutions engineered for sustainable growth and maximum ROI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onHoverStart={() => setActiveService(index)}
              onHoverEnd={() => setActiveService(null)}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative h-full p-8 bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-sm border border-zinc-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/20">
                    <service.icon className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-zinc-400">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="mt-8 w-full py-3 bg-zinc-800 hover:bg-blue-500/10 border border-zinc-700 hover:border-blue-500/50 rounded-xl font-semibold text-zinc-300 hover:text-blue-400 transition-all duration-300 flex items-center justify-center gap-2 group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
