import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  ArrowRight, 
  Zap,
  Star,
  TrendingUp,
  Sparkles
} from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'

  const pricingPlans = [
    {
      name: "Starter",
      icon: Zap,
      tagline: "Perfect for small businesses",
      monthlyPrice: 499,
      yearlyPrice: 4990, // ~17% discount
      description: "Essential digital marketing to get you started",
      features: [
        { name: "SEO Optimization (5 Keywords)", included: true },
        { name: "Google Ads Management", included: true },
        { name: "Monthly Performance Report", included: true },
        { name: "Social Media Setup", included: true },
        { name: "Email Support", included: true },
        { name: "Dedicated Account Manager", included: false },
        { name: "Advanced Analytics", included: false },
        { name: "Custom Strategy Sessions", included: false },
        { name: "Priority Support", included: false }
      ],
      cta: "Get Started",
      popular: false,
      gradient: "from-zinc-700 to-zinc-800"
    },
    {
      name: "Professional",
      icon: Star,
      tagline: "Most popular choice",
      monthlyPrice: 999,
      yearlyPrice: 9990, // ~17% discount
      description: "Comprehensive marketing for growing businesses",
      features: [
        { name: "SEO Optimization (15 Keywords)", included: true },
        { name: "Google Ads Management", included: true },
        { name: "Social Media Ads (2 Platforms)", included: true },
        { name: "Weekly Performance Reports", included: true },
        { name: "Content Creation (4 posts/month)", included: true },
        { name: "Dedicated Account Manager", included: true },
        { name: "Advanced Analytics Dashboard", included: true },
        { name: "Monthly Strategy Call", included: true },
        { name: "Priority Support", included: false }
      ],
      cta: "Start Growing",
      popular: true,
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      name: "Enterprise",
      icon: TrendingUp,
      tagline: "Maximum results & ROI",
      monthlyPrice: 2499,
      yearlyPrice: 24990, // ~17% discount
      description: "Complete digital domination for serious brands",
      features: [
        { name: "SEO Optimization (Unlimited Keywords)", included: true },
        { name: "Google Ads Management (Unlimited Budget)", included: true },
        { name: "Social Media Ads (All Platforms)", included: true },
        { name: "Real-time Performance Dashboard", included: true },
        { name: "Content Creation (12 posts/month)", included: true },
        { name: "Dedicated Account Manager", included: true },
        { name: "Advanced Analytics + Custom Reports", included: true },
        { name: "Weekly Strategy Calls", included: true },
        { name: "24/7 Priority Support", included: true }
      ],
      cta: "Go Enterprise",
      popular: false,
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  const addOns = [
    {
      name: "Website Development",
      price: 2999,
      description: "Professional website design and development"
    },
    {
      name: "Video Marketing",
      price: 799,
      description: "Monthly video content creation and promotion"
    },
    {
      name: "Influencer Outreach",
      price: 599,
      description: "Connect with relevant influencers in your niche"
    },
    {
      name: "Conversion Rate Optimization",
      price: 899,
      description: "A/B testing and landing page optimization"
    }
  ];

  const getPrice = (plan) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan) => {
    const yearlySavings = (plan.monthlyPrice * 12) - plan.yearlyPrice;
    return yearlySavings;
  };

  return (
    <section id="pricing" className="relative py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Simple, Transparent
            <span className="block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include our proven ROI-driven strategies.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-2 bg-zinc-900 border border-zinc-800 rounded-xl">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all relative ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Glow Effect */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl" />
              )}

              {/* Card Content */}
              <div className={`relative h-full p-8 bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-sm border rounded-2xl transition-all duration-300 ${
                plan.popular 
                  ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20' 
                  : 'border-zinc-700/50 hover:border-zinc-600'
              }`}>
                
                {/* Plan Header */}
                <div className="mb-6">
                  <div className={`inline-flex p-3 bg-gradient-to-br ${plan.gradient} rounded-xl mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-zinc-400 mb-4">{plan.tagline}</p>
                  <p className="text-zinc-500 text-sm">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">
                      ${billingCycle === 'monthly' ? getPrice(plan) : Math.floor(getPrice(plan) / 12)}
                    </span>
                    <span className="text-zinc-400">/month</span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <div className="mt-2">
                      <span className="text-green-500 text-sm font-medium">
                        Save ${getSavings(plan)}/year
                      </span>
                      <span className="text-zinc-500 text-sm ml-2">
                        (billed ${getPrice(plan)}/year)
                      </span>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 group mb-8 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-2xl hover:shadow-blue-500/50'
                    : 'bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700'
                }`}>
                  {plan.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Features List */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-zinc-400 mb-3">Everything included:</p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {feature.included ? (
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-blue-500" />
                        </div>
                      ) : (
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center mt-0.5">
                          <X className="w-3 h-3 text-zinc-600" />
                        </div>
                      )}
                      <span className={`text-sm ${
                        feature.included ? 'text-zinc-300' : 'text-zinc-600'
                      }`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-3">Power Up With Add-Ons</h3>
            <p className="text-zinc-400">Enhance your plan with additional services</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-sm border border-zinc-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="text-2xl font-bold text-blue-500 mb-1">
                    ${addon.price}
                  </div>
                  <h4 className="text-lg font-semibold text-white">{addon.name}</h4>
                </div>
                <p className="text-sm text-zinc-400">{addon.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ or Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 p-8 lg:p-12 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/20 rounded-2xl text-center"
        >
          <Star className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">30-Day Money-Back Guarantee</h3>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-6">
            Not satisfied with our service? Get a full refund within the first 30 days, no questions asked. 
            We're confident you'll love the results we deliver.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>No Long-term Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Flexible Plan Changes</span>
            </div>
          </div>
        </motion.div>

        {/* Custom Plan CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-zinc-400 mb-4">Need a custom solution for your unique requirements?</p>
          <button className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-blue-500/50 text-white font-semibold rounded-xl transition-all">
            Contact Us for Custom Pricing
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Pricing;
