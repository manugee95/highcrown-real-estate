import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  TrendingUp,
  Users,
  Target,
  Zap,
  BarChart,
  Globe,
  Smartphone,
  LineChart,
  Settings,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  Shield,
} from "lucide-react";
import logo from "../assets/highcrown-logo__1_.png";
import demo_1 from "../assets/demo-1.png";
import demo_2 from "../assets/demo-2.png";
import Pixel from "../pixel";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    Pixel.pageView();

    const params = new URLSearchParams(window.location.search);

    if (params.get("booking") === "success") {
      Pixel.trackCustom("StrategyCallBooked");

      window.history.replaceState({}, "", window.location.pathname);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const bookCall = () => {
    Pixel.trackCustom("BookCallClicked");

    window.location.href = "https://calendly.com/manugeetech/30min";
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center cursor-pointer">
              <img src={logo} alt="Highcrown Digital Hub" className="h-12" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-[#0F172A] hover:text-[#DC2626] transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-[#0F172A] hover:text-[#DC2626] transition-colors cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("packages")}
                className="text-[#0F172A] hover:text-[#DC2626] transition-colors cursor-pointer"
              >
                Packages
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-[#0F172A] hover:text-[#DC2626] transition-colors cursor-pointer"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-[#0F172A] hover:text-[#DC2626] transition-colors cursor-pointer"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-[#0F172A] hover:text-[#DC2626] transition-colors cursor-pointer"
              >
                Contact
              </button>
              <button
                onClick={bookCall}
                className="bg-gradient-to-r from-[#DC2626] to-[#F59E0B] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Book Free Call
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden pb-6 space-y-4"
            >
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left py-2 text-[#0F172A] hover:text-[#DC2626]"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left py-2 text-[#0F172A] hover:text-[#DC2626]"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("packages")}
                className="block w-full text-left py-2 text-[#0F172A] hover:text-[#DC2626]"
              >
                Packages
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block w-full text-left py-2 text-[#0F172A] hover:text-[#DC2626]"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left py-2 text-[#0F172A] hover:text-[#DC2626]"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 text-[#0F172A] hover:text-[#DC2626]"
              >
                Contact
              </button>
              <button
                onClick={bookCall}
                className="w-full bg-gradient-to-r from-[#DC2626] to-[#F59E0B] text-white px-6 py-3 rounded-lg"
              >
                Book Free Call
              </button>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-red-50 to-orange-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight mb-6">
                Get More Qualified Property Leads and Close More Real Estate
                Deals Without Chasing Prospects
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Highcrown Digital Hub helps real estate businesses attract
                high-quality buyers through Meta advertising, conversion-focused
                landing pages, websites, and WhatsApp automation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={bookCall}
                  className="bg-gradient-to-r from-[#DC2626] to-[#F59E0B] text-white px-8 py-4 rounded-lg text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  Book Free Strategy Call
                </button>
                <button
                  onClick={() => scrollToSection("solution")}
                  className="border-2 border-[#DC2626] text-[#DC2626] px-8 py-4 rounded-lg text-lg hover:bg-[#DC2626] hover:text-white transition-all duration-300 cursor-pointer"
                >
                  See How It Works
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: Facebook, text: "Facebook Ads Experts" },
                  { icon: Globe, text: "Landing Page Specialists" },
                  { icon: MessageCircle, text: "WhatsApp Automation" },
                  { icon: TrendingUp, text: "Real Estate Marketing" },
                ].map((badge, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm"
                  >
                    <badge.icon className="text-[#DC2626] mb-2" size={32} />
                    <span className="text-sm text-gray-700">{badge.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-6 space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-[#0F172A]">
                    Lead Dashboard
                  </h3>
                  <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg">
                    Live
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-xl">
                    <Users size={32} className="mb-3" />
                    <div className="text-3xl font-bold">247</div>
                    <div className="text-sm opacity-90">New Leads</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl">
                    <MessageCircle size={32} className="mb-3" />
                    <div className="text-3xl font-bold">189</div>
                    <div className="text-sm opacity-90">WhatsApp Chats</div>
                  </div>
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-6 rounded-xl">
                    <TrendingUp size={32} className="mb-3" />
                    <div className="text-3xl font-bold">68%</div>
                    <div className="text-sm opacity-90">Conversion Rate</div>
                  </div>
                  <div className="bg-gradient-to-br from-rose-500 to-rose-600 text-white p-6 rounded-xl">
                    <Target size={32} className="mb-3" />
                    <div className="text-3xl font-bold">92</div>
                    <div className="text-sm opacity-90">Property Inquiries</div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">
                      Recent Activity
                    </span>
                    <span className="text-xs text-green-600">
                      Updated 2 min ago
                    </span>
                  </div>
                  <div className="space-y-2">
                    {[
                      "New inquiry: 3BR Apartment",
                      "WhatsApp: Schedule viewing",
                      "Lead: Luxury Villa Interest",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-6 -right-6 bg-[#F59E0B] text-white p-4 rounded-xl shadow-lg"
              >
                <div className="text-sm">ROI</div>
                <div className="text-2xl font-bold">340%</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Free Audit Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#DC2626] to-[#F59E0B]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <div className="inline-block bg-[#F59E0B] text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
              LIMITED TIME OFFER
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
              Free Real Estate Lead Generation Audit
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Book a 30-minute strategy call and discover the biggest
              opportunities to increase your property inquiries.
            </p>
            <button
              onClick={bookCall}
              className="bg-gradient-to-r from-[#DC2626] to-[#F59E0B] text-white px-10 py-4 rounded-lg text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
            >
              Claim Your Free Audit <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4">
              Most Real Estate Businesses Are Losing Potential Buyers Every Day
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Low Quality Leads",
                desc: "Spending money on ads but getting unqualified prospects",
              },
              {
                icon: TrendingUp,
                title: "Poor Website Conversion",
                desc: "Visitors leave without taking action",
              },
              {
                icon: Clock,
                title: "Slow Response Time",
                desc: "Missing opportunities while leads go cold",
              },
              {
                icon: MessageCircle,
                title: "Manual Follow-Up",
                desc: "Wasting hours chasing leads manually",
              },
              {
                icon: Target,
                title: "Wasted Ad Spend",
                desc: "Burning budget without measurable results",
              },
              {
                icon: BarChart,
                title: "Unpredictable Lead Flow",
                desc: "Inconsistent pipeline makes growth impossible",
              },
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <problem.icon className="text-red-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600">{problem.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section
        id="solution"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-orange-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4">
              How Highcrown Digital Hub Helps You Generate More Property
              Inquiries
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DC2626] to-[#F59E0B] transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {[
                {
                  step: 1,
                  title: "Attract Qualified Buyers",
                  desc: "Precision-targeted Meta ads that reach property buyers actively searching in your area",
                  icon: Target,
                },
                {
                  step: 2,
                  title: "Convert Visitors Into Leads",
                  desc: "High-converting landing pages designed specifically for real estate lead capture",
                  icon: Globe,
                },
                {
                  step: 3,
                  title: "Automate Follow-Up Through WhatsApp",
                  desc: "Instant automated responses keep leads engaged while you focus on closing deals",
                  icon: MessageCircle,
                },
                {
                  step: 4,
                  title: "Close More Deals",
                  desc: "Organized pipeline and automated nurture sequences turn prospects into buyers",
                  icon: CheckCircle,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`lg:grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="bg-white rounded-xl p-8 shadow-xl">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#DC2626] to-[#F59E0B] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                          {item.step}
                        </div>
                        <h3 className="text-2xl font-bold text-[#0F172A]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-lg text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                  <div
                    className={`hidden lg:flex justify-center ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-[#DC2626] to-[#F59E0B] rounded-full flex items-center justify-center">
                      <item.icon className="text-white" size={40} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4">
              Our Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Landing Page Design",
                desc: "High-converting pages built to capture real estate leads",
              },
              {
                icon: Smartphone,
                title: "Website Development",
                desc: "Professional websites that showcase your properties",
              },
              {
                icon: Facebook,
                title: "Facebook Lead Generation",
                desc: "Targeted ad campaigns that bring qualified buyers",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp Automation",
                desc: "Instant follow-up that never misses a lead",
              },
              {
                icon: LineChart,
                title: "Conversion Optimization",
                desc: "Data-driven improvements to maximize ROI",
              },
              {
                icon: Settings,
                title: "Funnel Setup",
                desc: "Complete lead generation systems from ad to sale",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#DC2626] to-[#F59E0B] rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <button className="text-[#DC2626] font-semibold hover:gap-3 inline-flex items-center gap-2 transition-all">
                  Learn More <ArrowRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section
        id="packages"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-orange-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4">
              Choose The Growth Package That Fits Your Business
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standard Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-3xl font-bold text-[#0F172A] mb-4">
                Standard Package
              </h3>
              <div className="mb-8">
                <div className="text-gray-600 mb-6">
                  Perfect for getting started
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Professional Landing Page",
                  "Facebook Lead Campaign Setup",
                  "WhatsApp Integration",
                  "Lead Capture Forms",
                  "Mobile Responsive Design",
                  "Basic Conversion Tracking",
                  "14 Days Support",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={bookCall}
                className="w-full border-2 border-[#DC2626] text-[#DC2626] px-8 py-4 rounded-lg text-lg hover:bg-[#DC2626] hover:text-white transition-all duration-300 cursor-pointer"
              >
                Book Free Consultation
              </button>
            </motion.div>

            {/* Premium Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-[#DC2626] to-[#F59E0B] rounded-2xl p-8 shadow-2xl transform lg:scale-105 relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#0F172A] text-white px-6 py-2 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                Premium Package
              </h3>
              <div className="mb-8">
                <div className="text-white/90 mb-6">
                  Complete growth solution
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Everything In Standard",
                  "Full Business Website",
                  "Advanced Facebook Ads Setup",
                  "WhatsApp Automation",
                  // 'CRM Integration',
                  // 'Retargeting Campaign',
                  "Lead Dashboard",
                  "Conversion Optimization",
                  "Priority Support",
                  // 'Monthly Strategy Review'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      className="text-white flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={bookCall}
                className="w-full bg-white text-[#DC2626] px-8 py-4 rounded-lg text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Book Free Consultation
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4">
              Why Real Estate Businesses Choose Highcrown Digital Hub
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Industry-Focused",
                desc: "We specialize exclusively in real estate marketing and understand your unique challenges",
              },
              {
                icon: TrendingUp,
                title: "Lead Generation First",
                desc: "Every strategy is designed to generate qualified property inquiries and sales",
              },
              {
                icon: Zap,
                title: "Automation Driven",
                desc: "WhatsApp and CRM automation ensures no lead ever falls through the cracks",
              },
              {
                icon: Award,
                title: "Results Oriented",
                desc: "We measure success by your ROI, not vanity metrics",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#DC2626] to-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-orange-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4">
              See What Your Business Could Look Like
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                img: demo_1,
                title: "PrimeLand Estates",
                desc: "High-converting page for premium property developers",
                url: "https://real-estate-demo-1-ruby.vercel.app",
              },
              {
                img: demo_2,
                title: "Prestige Heights Realty",
                desc: "Full-featured site with property listings",
                url: "https://real-estate-demo-2-three.vercel.app/",
              },
              // {
              //   img: 'https://images.unsplash.com/photo-1648134859175-78b41b4db186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
              //   title: 'Property Investment Funnel',
              //   desc: 'Complete automation from ad to qualified appointment'
              // },
              // {
              //   img: 'https://images.unsplash.com/photo-1648134859177-66e35b61e106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
              //   title: 'Land Sales Campaign',
              //   desc: 'Facebook ads + landing page generating 200+ leads/month'
              // }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.desc}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DC2626] font-semibold hover:gap-3 inline-flex items-center gap-2 transition-all cursor-pointer"
                  >
                    View Demo <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1626178793926-22b28830aa30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
                name: "David Okafor",
                position: "CEO, Oak Properties Ltd",
                review:
                  "Highcrown transformed our lead generation completely. We went from 10 inquiries per month to over 150 qualified leads. The WhatsApp automation alone saves us 20 hours weekly.",
              },
              {
                img: "https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
                name: "Jennifer Riley",
                position: "Director, Luxury Estate Group",
                review:
                  "The premium package paid for itself in the first month. Our conversion rate doubled and we closed 3 major deals directly from their landing page and Facebook campaigns.",
              },
              {
                img: "https://images.unsplash.com/photo-1647580427155-0483906cb9de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
                name: "Michael Eze",
                position: "Founder, UrbanSpace Realty",
                review:
                  "Best investment we made this year. Their team understands real estate marketing inside out. Our property inquiries tripled and sales are up 65%.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-[#F59E0B] fill-current"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-[#0F172A]">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-orange-50"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "How quickly can we launch?",
                a: "Most landing pages and campaigns launch within 7-10 business days. Full websites typically take 2-3 weeks depending on complexity and content readiness.",
              },
              {
                q: "Do you manage Facebook ads?",
                a: "Yes! We handle everything from strategy and creative to targeting, optimization, and reporting. You can upgrade to ongoing ad management after launch.",
              },
              {
                q: "Do I need a website?",
                a: "Not necessarily. Many clients start with just a high-converting landing page and Facebook ads. We recommend a full website if you want to showcase multiple properties or build long-term brand authority.",
              },
              {
                q: "Can leads go directly to WhatsApp?",
                a: "Absolutely. We set up WhatsApp integration so leads can instantly connect with you. We also offer automation to send welcome messages, property details, and follow-ups automatically.",
              },
              {
                q: "Do you work only with real estate businesses?",
                a: "Yes, we specialize exclusively in real estate marketing. This focus allows us to deliver superior results because we understand your audience, sales cycle, and lead generation challenges deeply.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActiveAccordion(activeAccordion === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-[#0F172A] pr-4">
                    {faq.q}
                  </span>
                  {activeAccordion === index ? (
                    <ChevronUp
                      className="text-[#DC2626] flex-shrink-0"
                      size={24}
                    />
                  ) : (
                    <ChevronDown
                      className="text-[#DC2626] flex-shrink-0"
                      size={24}
                    />
                  )}
                </button>
                {activeAccordion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-700">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with Calendly */}
      <section id="calendly" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#DC2626] to-[#F59E0B] rounded-3xl p-12 text-center text-white shadow-2xl mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Ready To Generate More Property Leads?
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Let's build a predictable lead generation system that helps your
              real estate business attract, convert, and close more prospects.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
              {/* <Shield className="text-white" size={24} /> */}
              {/* <span>Book Your Free Strategy Call</span> */}

              <button
                onClick={bookCall}
                className="w-full bg-white text-[#DC2626] px-8 py-4 rounded-lg text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Book Your Free Strategy Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-[#000000] text-white py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <img
                src={logo}
                alt="Highcrown Digital Hub"
                className="h-12 mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 mb-6">
                Helping Real Estate Businesses Generate More Qualified Leads
                Through Digital Marketing, Conversion-Focused Websites, and
                Automation.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-[#DC2626] rounded-full flex items-center justify-center transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-[#DC2626] rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-[#DC2626] rounded-full flex items-center justify-center transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-[#F59E0B] rounded-full flex items-center justify-center transition-colors"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("packages")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Packages
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("portfolio")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("faq")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@hcdigitalhub.com</li>
                <li>+234 903 038 1626</li>
                <li>Lagos, Nigeria</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Highcrown Digital Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button (Mobile) */}
      <div className="fixed bottom-6 right-6 lg:hidden z-40">
        <motion.button
          onClick={() => scrollToSection("calendly")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-[#DC2626] to-[#F59E0B] text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-2"
        >
          <MessageCircle size={20} />
          <span className="font-semibold">Book Call</span>
        </motion.button>
      </div>
    </div>
  );
}
