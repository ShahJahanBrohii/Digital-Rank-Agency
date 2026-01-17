import React from 'react';
import { Zap, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    services: ['SEO Excellence', 'Google Ads', 'Social Media Ads', 'Content Marketing', 'Analytics & Reporting'],
    company: ['About Us', 'Case Studies', 'Blog', 'Careers', 'Contact']
  };

  return (
    <footer className="relative py-16 px-6 lg:px-8 border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full" />
                <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold">
                Digital<span className="text-blue-500">Rank</span>
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Transforming businesses through data-driven digital marketing strategies that deliver measurable results.
            </p>
            <div className="flex items-center gap-4">
              {[Linkedin, Twitter, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-blue-500 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-400 hover:text-blue-500 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-400 hover:text-blue-500 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-4">Stay Updated</h4>
            <p className="text-zinc-400 text-sm mb-4">
              Get the latest insights on digital marketing and SEO.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-all"
              />
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © 2025 DigitalRank. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
