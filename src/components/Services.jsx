import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Target, TrendingUp, CheckCircle2, ArrowRight, Code, X, Clock, DollarSign, Users, Zap } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: Search,
      title: "SEO Excellence",
      description: "Dominate search rankings with data-driven strategies that convert organic traffic into revenue.",
      features: ["Technical SEO Audits", "Link Building", "Local SEO", "On/Off-page SEO"],
      gradient: "from-cyan-500/20 to-blue-600/20",
      // Detailed information for modal
      detailedDescription: "Our comprehensive SEO services help your business achieve top rankings on search engines, driving organic traffic that converts into real revenue. We use cutting-edge techniques and industry best practices to ensure long-term success.",
      process: [
        "Initial SEO Audit & Competitor Analysis",
        "Keyword Research & Strategy Development",
        "On-Page Optimization & Content Creation",
        "Technical SEO Implementation",
        "Link Building & Authority Development",
        "Ongoing Monitoring & Reporting"
      ],
      benefits: [
        "Increased organic traffic by 200-400%",
        "Higher search engine rankings for target keywords",
        "Improved website authority and credibility",
        "Long-term sustainable growth",
        "Better user experience and site performance"
      ],
      pricing: "Starting at $499/month",
      timeline: "Results typically visible in 3-6 months",
      idealFor: "Businesses looking for sustainable, long-term growth through organic search visibility"
    },
    {
      icon: Target,
      title: "Google Ads",
      description: "Precision-targeted campaigns that maximize ROI and minimize wasted ad spend while driving consistent, high-quality traffic.", 
      features: ["Search Campaigns", "Display Advertising", "Shopping Ads", "Remarketing"],
      gradient: "from-blue-500/20 to-indigo-600/20",
      // Detailed information for modal
      detailedDescription: "Our Google Ads management services deliver immediate results through strategic campaign optimization. We focus on maximizing your ROI while minimizing wasted ad spend through continuous testing and refinement.",
      process: [
        "Account Setup & Campaign Structure",
        "Keyword Research & Ad Copy Creation",
        "Landing Page Optimization",
        "Bid Strategy & Budget Management",
        "A/B Testing & Optimization",
        "Performance Tracking & Reporting"
      ],
      benefits: [
        "Immediate traffic and lead generation",
        "Precise audience targeting",
        "Complete budget control",
        "Measurable ROI with detailed analytics",
        "Quick campaign adjustments based on performance"
      ],
      pricing: "Starting at $699/month + ad spend",
      timeline: "Results visible within 1-2 weeks",
      idealFor: "Businesses seeking immediate visibility and quick lead generation with measurable results"
    },
    {
      icon: TrendingUp,
      title: "Social Ads",
      description: "Transform social platforms into revenue engines with compelling creative and strategic targeting.",
      features: ["Facebook Ads", "Instagram Campaigns", "LinkedIn B2B", "TikTok Advertising"],
      gradient: "from-indigo-500/20 to-purple-600/20",
      // Detailed information for modal
      detailedDescription: "Leverage the power of social media advertising to reach your ideal customers where they spend their time. Our data-driven approach combines creative excellence with advanced targeting to drive conversions.",
      process: [
        "Audience Research & Persona Development",
        "Creative Strategy & Ad Design",
        "Campaign Setup & Targeting",
        "Multi-Platform Management",
        "Creative Testing & Optimization",
        "Performance Analysis & Scaling"
      ],
      benefits: [
        "Reach highly targeted audiences",
        "Build brand awareness and engagement",
        "Drive traffic and conversions",
        "Retarget interested prospects",
        "Scale successful campaigns quickly"
      ],
      pricing: "Starting at $799/month + ad spend",
      timeline: "Results visible within 1-3 weeks",
      idealFor: "Brands looking to build awareness and engage with their target audience on social platforms"
    },
    {
      icon: Code,
      title: "Website Development",
      description: "Build stunning, high-performance websites that convert visitors into customers.",
      features: ["Custom Web Design", "Responsive Development", "E-commerce Solutions", "Performance Optimization"],
      gradient: "from-purple-500/20 to-pink-600/20",
      // Detailed information for modal
      detailedDescription: "We create beautiful, high-performing websites that not only look great but also drive business results. Every website is custom-built with your specific goals and audience in mind.",
      process: [
        "Discovery & Requirements Gathering",
        "UI/UX Design & Prototyping",
        "Custom Development & Integration",
        "Content Migration & SEO Setup",
        "Testing & Quality Assurance",
        "Launch & Post-Launch Support"
      ],
      benefits: [
        "Professional, modern design that stands out",
        "Mobile-responsive across all devices",
        "Fast loading speeds for better SEO",
        "Secure and scalable architecture",
        "Easy content management system"
      ],
      pricing: "Starting at $2,999 (one-time)",
      timeline: "4-8 weeks for completion",
      idealFor: "Businesses needing a professional online presence that converts visitors into customers"
    }
  ];

  return (
    <>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
                  
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="mt-8 w-full py-3 bg-zinc-800 hover:bg-blue-500/10 border border-zinc-700 hover:border-blue-500/50 rounded-xl font-semibold text-zinc-300 hover:text-blue-400 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-xl transition-all z-10"
              >
                <X className="w-6 h-6 text-zinc-400 hover:text-white" />
              </button>

              {/* Modal Content */}
              <div className="p-8 lg:p-12">
                {/* Header */}
                <div className="mb-8">
                  <div className="inline-flex p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-500/20 mb-6">
                    <selectedService.icon className="w-12 h-12 text-blue-500" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                    {selectedService.title}
                  </h2>
                  <p className="text-xl text-zinc-400 leading-relaxed">
                    {selectedService.detailedDescription}
                  </p>
                </div>

                {/* Quick Info Cards */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="p-4 bg-zinc-800/50 border border-zinc-700/50 rounded-xl">
                    <DollarSign className="w-6 h-6 text-blue-500 mb-2" />
                    <div className="text-sm text-zinc-500 mb-1">Pricing</div>
                    <div className="text-white font-semibold">{selectedService.pricing}</div>
                  </div>
                  <div className="p-4 bg-zinc-800/50 border border-zinc-700/50 rounded-xl">
                    <Clock className="w-6 h-6 text-blue-500 mb-2" />
                    <div className="text-sm text-zinc-500 mb-1">Timeline</div>
                    <div className="text-white font-semibold">{selectedService.timeline}</div>
                  </div>
                  <div className="p-4 bg-zinc-800/50 border border-zinc-700/50 rounded-xl">
                    <Users className="w-6 h-6 text-blue-500 mb-2" />
                    <div className="text-sm text-zinc-500 mb-1">Ideal For</div>
                    <div className="text-white font-semibold text-sm">{selectedService.idealFor}</div>
                  </div>
                </div>

                {/* Our Process */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-blue-500" />
                    Our Process
                  </h3>
                  <div className="space-y-3">
                    {selectedService.process.map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-500 font-bold text-sm">
                          {index + 1}
                        </div>
                        <p className="text-zinc-300 pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Key Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedService.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-zinc-800/30 border border-zinc-700/50 rounded-xl">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-zinc-300 text-sm">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t border-zinc-700/50">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="px-6 py-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-semibold rounded-xl transition-all">
                      Schedule Consultation
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Services;