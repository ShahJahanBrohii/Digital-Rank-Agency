import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Counter animation hook
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) return;
    
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasAnimated]);

  return [count, setHasAnimated];
};

const Stats = () => {
  const stats = [
    { label: "Average Revenue Growth", value: 247, suffix: "%", duration: 2500 },
    { label: "Client Retention Rate", value: 94, suffix: "%", duration: 2000 },
    { label: "Active Campaigns", value: 180, suffix: "+", duration: 2200 }
  ];

  const caseStudyMetrics = [
    { metric: "Organic Traffic", value: "+340%" },
    { metric: "ROAS", value: "2.8x" },
    { metric: "Monthly Revenue", value: "$1M+" },
    { metric: "Timeline", value: "6 Months" }
  ];

  return (
    <section id="case-studies" className="relative py-24 lg:py-32 px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Proven Results,
            <span className="block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Measurable Impact
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Real performance metrics from real businesses. Your success is our only KPI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const [count, setHasAnimated] = useCounter(stat.value, stat.duration);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                onViewportEnter={() => setHasAnimated(true)}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8 lg:p-12 bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-sm border border-zinc-700/50 rounded-2xl text-center">
                  <div className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-4">
                    {count}{stat.suffix}
                  </div>
                  <div className="text-lg text-zinc-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 p-8 lg:p-12 bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-sm border border-zinc-700/50 rounded-2xl"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-400 mb-6">
                Featured Case Study
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                E-Commerce Brand Scales to 7-Figures
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                A mid-sized e-commerce brand partnered with us to overhaul their digital strategy. Within 6 months, we achieved a 340% increase in organic traffic, 2.8x ROAS on paid campaigns, and helped them cross $1M in monthly revenue.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2">
                Read Full Case Study
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {caseStudyMetrics.map((item, idx) => (
                <div key={idx} className="p-6 bg-zinc-800/50 border border-zinc-700/50 rounded-xl">
                  <div className="text-sm text-zinc-400 mb-2">{item.metric}</div>
                  <div className="text-2xl font-bold text-blue-500">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
