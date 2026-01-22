import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Linkedin, 
  Instagram,
  Award,
  Users,
  Target,
  TrendingUp,
  Clock,
  Shield
} from 'lucide-react';
import profileImg from "../images/profile.webp";



const About = () => {
  const agencyStats = [
    { icon: Users, label: "Team Members", value: "25+" },
    { icon: Award, label: "Years Experience", value: "10+" },
    { icon: Target, label: "Projects Completed", value: "500+" },
    { icon: TrendingUp, label: "Client Success Rate", value: "98%" }
  ];

  const agencyValues = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that directly impact your bottom line."
    },
    {
      icon: Shield,
      title: "Transparent Process",
      description: "Complete visibility into our strategies, reporting, and performance metrics."
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "Dedicated support team ready to assist you whenever you need us."
    }
  ];

const ownerContact = {
  name: "Rana Aqib Ranjput",
  position: "Founder & CEO",
  bio: "Rana Aqib Ranjput is the founder and CEO of DigitalRank Agency. With years of hands-on experience in digital marketing, he has helped brands scale their online presence through data-driven strategies, performance marketing, and growth-focused solutions. His vision is to empower businesses with sustainable digital success.",
  phone: "+92 3162123698", // replace with real number
  email: "ranaaqib@digitalrankagency.com", // replace if needed
  social: {
    facebook: "https://facebook.com/ranaaqibranjput",
    linkedin: "https://linkedin.com/in/ranaaqibranjput",
    instagram: "https://instagram.com/ranaaqibranjput"
  },
  image: "/profile.webp"
};


  const agencyContact = {
    phone: "+92 3700267484",
    email: "hello@digitalrank.com",
    address: "123 Marketing Street, Digital City, DC 12345",
    social: {
      facebook: "https://web.facebook.com/profile.php?id=61585651601202&sk=about",
      linkedin: "https://linkedin.com/company/digitalrank",
      instagram: "https://instagram.com/digitalrank"
    }
  };

  return (
    <section id="about" className="relative py-24 lg:py-32 px-6 lg:px-8 bg-gradient-to-b from-transparent via-zinc-900/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            About
            <span className="block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              DigitalRank
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            We're not just another agency. We're your growth partners, committed to driving real results through innovative digital marketing strategies.
          </p>
        </motion.div>

        {/* Agency Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {agencyStats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-sm border border-zinc-700/50 rounded-2xl text-center hover:border-blue-500/50 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Agency Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-16 p-8 lg:p-12 bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-sm border border-zinc-700/50 rounded-2xl"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">Our Mission</h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                At DigitalRank, we believe every business deserves to thrive in the digital landscape. Our mission is to empower companies with cutting-edge marketing strategies that deliver measurable growth and sustainable success.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                We combine data analytics, creative excellence, and industry expertise to create campaigns that don't just look good—they perform exceptionally.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Core Values</h3>
              {agencyValues.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                      <value.icon className="w-6 h-6 text-blue-500" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{value.title}</h4>
                    <p className="text-zinc-400 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Agency Contact Info */}
          <div className="mt-12 pt-8 border-t border-zinc-700/50">
            <h4 className="text-xl font-bold text-white mb-6">Get In Touch With Us</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a 
                href={`tel:${agencyContact.phone}`}
                className="flex items-center gap-3 text-zinc-400 hover:text-blue-500 transition-colors group"
              >
                <div className="p-2 bg-zinc-800 border border-zinc-700 rounded-lg group-hover:border-blue-500/50 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500">Phone</div>
                  <div className="text-sm font-medium">{agencyContact.phone}</div>
                </div>
              </a>

              <a 
                href={`mailto:${agencyContact.email}`}
                className="flex items-center gap-3 text-zinc-400 hover:text-blue-500 transition-colors group"
              >
                <div className="p-2 bg-zinc-800 border border-zinc-700 rounded-lg group-hover:border-blue-500/50 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500">Email</div>
                  <div className="text-sm font-medium">{agencyContact.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-zinc-400">
                <div className="p-2 bg-zinc-800 border border-zinc-700 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500">Location</div>
                  <div className="text-sm font-medium">{agencyContact.address}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-xs text-zinc-500">Follow Us</div>
                <div className="flex gap-2">
                  <a
                    href={agencyContact.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-blue-500 transition-all"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={agencyContact.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-blue-500 transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={agencyContact.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-blue-500 transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Owner/Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl" />
          
          <div className="relative p-8 lg:p-12 bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-sm border border-zinc-700/50 rounded-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">Meet Our Founder</h3>
              <p className="text-zinc-400">The visionary behind DigitalRanks's success</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Owner Photo */}
              <div className="lg:col-span-1 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-2xl blur-2xl" />
                  <div className="relative w-64 h-64 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl border-2 border-zinc-700/50 overflow-hidden">
                    {/* Replace with actual image */}
                    <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-zinc-600">
                      {ownerContact.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    {/* Uncomment when you have an image */}
                   <img
  src={ownerContact.image}
  alt={ownerContact.name}
  className="w-full h-full object-cover"
  onError={(e) => {
    e.target.style.display = "none";
    e.target.nextSibling.style.display = "flex";
  }}
/>




                  </div>
                </div>
              </div>

              {/* Owner Info */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">{ownerContact.name}</h4>
                  <p className="text-blue-500 font-medium mb-4">{ownerContact.position}</p>
                  <p className="text-zinc-400 leading-relaxed">{ownerContact.bio}</p>
                </div>

                {/* Owner Contact */}
                <div className="grid md:grid-cols-2 gap-4">
                  <a 
                    href={`tel:${ownerContact.phone}`}
                    className="flex items-center gap-3 p-4 bg-zinc-800/50 border border-zinc-700 rounded-xl hover:border-blue-500/50 hover:bg-zinc-800 transition-all group"
                  >
                    <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg group-hover:bg-blue-500/20 transition-all">
                      <Phone className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500">Direct Line</div>
                      <div className="text-sm font-medium text-zinc-300">{ownerContact.phone}</div>
                    </div>
                  </a>

                  <a 
                    href={`mailto:${ownerContact.email}`}
                    className="flex items-center gap-3 p-4 bg-zinc-800/50 border border-zinc-700 rounded-xl hover:border-blue-500/50 hover:bg-zinc-800 transition-all group"
                  >
                    <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg group-hover:bg-blue-500/20 transition-all">
                      <Mail className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500">Email</div>
                      <div className="text-sm font-medium text-zinc-300">{ownerContact.email}</div>
                    </div>
                  </a>
                </div>

                {/* Owner Social Links */}
                <div>
                  <p className="text-sm text-zinc-500 mb-3">Connect with {ownerContact.name.split(' ')[0]}</p>
                  <div className="flex gap-3">
                    <a
                      href={ownerContact.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-blue-500 transition-all text-sm font-medium text-zinc-400"
                    >
                      <Facebook className="w-4 h-4" />
                      Facebook
                    </a>
                    <a
                      href={ownerContact.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-blue-500 transition-all text-sm font-medium text-zinc-400"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                    <a
                      href={ownerContact.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-blue-500 transition-all text-sm font-medium text-zinc-400"
                    >
                      <Instagram className="w-4 h-4" />
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
