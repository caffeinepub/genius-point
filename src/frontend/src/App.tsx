import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Award,
  BookOpen,
  Brain,
  Calculator,
  ChevronRight,
  Clock,
  Cpu,
  Eye,
  Fingerprint,
  Gamepad2,
  GraduationCap,
  Heart,
  Lightbulb,
  MapPin,
  Menu,
  PenTool,
  Phone,
  Shield,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useSubmitInquiry } from "./hooks/useQueries";

const queryClient = new QueryClient();

// ── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Courses", href: "#courses" },
    { label: "About", href: "#about" },
    { label: "Benefits", href: "#benefits" },
    { label: "Branches", href: "#branches" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-dark/95 backdrop-blur-md shadow-lg border-b border-teal/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full gradient-teal-purple flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-black text-xl text-white leading-none">
              Genius Point
            </div>
            <div className="text-xs text-teal-light">
              Brain Development Centre
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              data-ocid={`nav.${l.label.toLowerCase()}.link`}
              className="text-sm text-white/80 hover:text-teal transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            data-ocid="nav.book_demo.button"
            className="gradient-teal-purple text-white font-bold rounded-full px-6 hover:opacity-90 transition-opacity border-0"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Sparkles className="w-4 h-4 mr-2" /> Book Free Demo
          </Button>
        </div>

        {/* Mobile Menu */}
        <button
          type="button"
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          data-ocid="nav.menu.toggle"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-navy-dark/98 border-t border-teal/20 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-white/80 hover:text-teal py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <Button
                className="gradient-teal-purple text-white font-bold rounded-full mt-2 border-0"
                onClick={() => {
                  setIsOpen(false);
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book Free Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.10 0.04 240) 0%, oklch(0.15 0.06 220) 40%, oklch(0.18 0.08 270) 100%)",
      }}
    >
      {/* BG doodles */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/assets/generated/hero-bg-doodles.dim_1400x800.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Floating decorative blobs */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-teal/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-purple/20 blur-3xl animate-pulse" />
      <div className="absolute top-40 right-40 w-24 h-24 rounded-full bg-orange/20 blur-3xl animate-float" />

      {/* Floating icons */}
      <div className="absolute top-24 right-[10%] animate-float text-yellow">
        <Star className="w-8 h-8 fill-current" />
      </div>
      <div className="absolute bottom-32 left-[8%] animate-float-slow text-teal">
        <Zap className="w-6 h-6" />
      </div>
      <div className="absolute top-48 left-[15%] animate-float text-orange">
        <Brain className="w-7 h-7" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 grid lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left: Speech bubble panel */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/20"
            style={{ boxShadow: "0 8px 60px oklch(0.63 0.12 192 / 0.25)" }}
          >
            <div className="inline-flex items-center gap-2 bg-teal/20 border border-teal/40 rounded-full px-4 py-1 mb-4">
              <Cpu className="w-4 h-4 text-teal" />
              <span className="text-teal text-sm font-semibold">
                AI-Powered Brain Development
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-3">
              Unlock Your Child's <span className="text-gradient">Genius!</span>
            </h1>

            <p className="text-2xl font-bold text-yellow mb-4">
              अपने बच्चे की प्रतिभा जगाएं!
            </p>

            <p className="text-white/75 text-base leading-relaxed mb-8">
              15 साल के अनुभव के साथ, Genius Point बच्चों के मानसिक विकास के लिए
              Abacus, Memory Techniques, Vedic Maths और AI-आधारित पद्धतियों से
              खेल-खेल में सीखाता है। Age 5–15 | 0–8 Levels | Weekly 2 Days
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                data-ocid="hero.book_demo.primary_button"
                size="lg"
                className="gradient-teal-purple text-white font-bold rounded-full px-8 border-0 hover:opacity-90 transition-opacity shadow-glow"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Sparkles className="w-5 h-5 mr-2" /> Book Free Demo
              </Button>
              <Button
                data-ocid="hero.explore_courses.secondary_button"
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-2 border-teal text-teal hover:bg-teal/10 font-bold"
                onClick={() =>
                  document
                    .getElementById("courses")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Courses <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* Mini trust badges */}
            <div className="mt-6 flex flex-wrap gap-4">
              {[
                { icon: Shield, label: "15+ Years Trusted" },
                { icon: Users, label: "5000+ Students" },
                { icon: MapPin, label: "4 Branches" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-white/70 text-sm"
                >
                  <Icon className="w-4 h-4 text-teal" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Child image + robot */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <img
              src="/assets/generated/hero-child-abacus-transparent.dim_600x700.png"
              alt="Child learning with abacus"
              className="w-[320px] md:w-[420px] lg:w-[480px] object-contain drop-shadow-2xl"
            />
            {/* Robot mascot */}
            <div className="absolute -bottom-4 -left-8 animate-float-slow">
              <img
                src="/assets/generated/ai-robot-mascot-transparent.dim_300x350.png"
                alt="AI Robot Mascot"
                className="w-24 md:w-32"
              />
            </div>
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
              className="absolute top-4 -right-4 bg-yellow text-navy-dark text-xs font-bold px-3 py-2 rounded-2xl shadow-lg"
            >
              🧠 IQ Boost!
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.5,
              }}
              className="absolute top-32 -left-10 bg-purple text-white text-xs font-bold px-3 py-2 rounded-2xl shadow-lg"
            >
              ⚡ Level 0–8
            </motion.div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 1,
              }}
              className="absolute bottom-20 -right-6 bg-orange text-white text-xs font-bold px-3 py-2 rounded-2xl shadow-lg"
            >
              🎮 Game Mode
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronRight className="w-5 h-5 rotate-90" />
        </motion.div>
      </div>
    </section>
  );
}

// ── Stats Strip ─────────────────────────────────────────────────────────────
function StatsStrip() {
  const stats = [
    {
      value: "15+",
      label: "Years Experience",
      sub: "सालों का अनुभव",
      icon: Award,
    },
    { value: "7", label: "Courses", sub: "विशेष कोर्स", icon: BookOpen },
    { value: "4", label: "Branches", sub: "शाखाएं", icon: MapPin },
    { value: "5000+", label: "Students", sub: "सफल छात्र", icon: Users },
    { value: "0–8", label: "Levels", sub: "स्तर क्रम", icon: TrendingUp },
  ];

  return (
    <section
      className="py-8 relative overflow-hidden"
      style={{ background: "oklch(0.63 0.12 192)" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map(({ value, label, sub, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Icon className="w-6 h-6 text-white/80 mx-auto mb-1" />
              <div className="text-3xl font-black text-white">{value}</div>
              <div className="text-white/90 font-semibold text-sm">{label}</div>
              <div className="text-white/60 text-xs">{sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Courses ─────────────────────────────────────────────────────────────────
const COURSES = [
  {
    icon: Calculator,
    name: "Abacus",
    hindi: "मानसिक गणित",
    desc: "Learn lightning-fast mental maths using the ancient Japanese abacus technique.",
    color: "oklch(0.63 0.12 192)",
    shadow: "glow",
  },
  {
    icon: Brain,
    name: "Memory Techniques",
    hindi: "स्मृति तकनीक",
    desc: "Powerful visualization and association techniques to boost memory retention.",
    color: "oklch(0.72 0.18 55)",
    shadow: "glow-orange",
  },
  {
    icon: Zap,
    name: "Vedic Maths",
    hindi: "वैदिक गणित",
    desc: "Ancient Indian mathematical formulas for rapid calculation and problem solving.",
    color: "oklch(0.5 0.2 290)",
    shadow: "glow-purple",
  },
  {
    icon: Lightbulb,
    name: "Mid-Brain Activation",
    hindi: "मिड ब्रेन एक्टिवेशन",
    desc: "Unlock the bridge between left and right brain for enhanced sensory ability.",
    color: "oklch(0.78 0.16 85)",
    shadow: "glow-orange",
  },
  {
    icon: Fingerprint,
    name: "DMIT",
    hindi: "डर्माटोग्लिफिक्स टेस्ट",
    desc: "Dermatoglyphics Multiple Intelligence Test to identify your child's unique potential.",
    color: "oklch(0.63 0.12 192)",
    shadow: "glow",
  },
  {
    icon: PenTool,
    name: "Handwriting",
    hindi: "हस्तलेखन सुधार",
    desc: "Scientific handwriting improvement techniques for clarity and personality development.",
    color: "oklch(0.69 0.21 35)",
    shadow: "glow-orange",
  },
  {
    icon: Cpu,
    name: "QSR Training",
    hindi: "क्यूएसआर ट्रेनिंग",
    desc: "Quick Sensory Response training for sharper reflexes and concentration.",
    color: "oklch(0.5 0.2 290)",
    shadow: "glow-purple",
  },
];

function CoursesSection() {
  return (
    <section
      id="courses"
      className="py-20"
      style={{ background: "oklch(0.12 0.03 240)" }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-teal/20 border border-teal/40 text-teal text-sm font-semibold rounded-full px-4 py-1 mb-4">
            <GraduationCap className="w-4 h-4" /> Our Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
            Our Featured <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-2xl font-bold text-yellow">हमारे विशेष कोर्स</p>
          <p className="text-white/60 mt-3 max-w-xl mx-auto">
            7 expertly designed programs for holistic brain development — all
            taught through games, zero mental load!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {COURSES.map(({ icon: Icon, name, hindi, desc, color }, i) => (
            <motion.div
              key={name}
              data-ocid={`courses.item.${i + 1}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all cursor-default"
              style={{
                background: `linear-gradient(135deg, ${color}22, ${color}08)`,
                boxShadow: `0 4px 30px ${color}33`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${color}33` }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">{name}</h3>
              <p className="font-semibold mb-3" style={{ color }}>
                {hindi}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Why Choose Us ────────────────────────────────────────────────────────────
const BENEFITS = [
  {
    icon: Calculator,
    title: "Mental Maths",
    hindi: "मानसिक गणित",
    desc: "Calculate 10x faster than peers without a calculator.",
  },
  {
    icon: Brain,
    title: "Memory Power",
    hindi: "स्मृति शक्ति",
    desc: "Photographic memory techniques used by world champions.",
  },
  {
    icon: Target,
    title: "Concentration",
    hindi: "एकाग्रता",
    desc: "Laser-sharp focus for studies, exams, and life goals.",
  },
  {
    icon: Eye,
    title: "Imagination",
    hindi: "कल्पना शक्ति",
    desc: "Creative visualization that fuels innovation and IQ.",
  },
  {
    icon: Heart,
    title: "Confidence",
    hindi: "आत्मविश्वास",
    desc: "Public speaking and performance confidence from Day 1.",
  },
  {
    icon: Zap,
    title: "Focus",
    hindi: "ध्यान केन्द्रण",
    desc: "Attention span and distraction-free learning habits.",
  },
  {
    icon: Cpu,
    title: "AI Learning Assessment",
    hindi: "AI आधारित मूल्यांकन",
    desc: "Personalized AI reports tracking each child's progress.",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="benefits"
      className="py-20"
      style={{ background: "oklch(0.97 0.005 240)" }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-teal/15 border border-teal/30 text-teal-dark text-sm font-semibold rounded-full px-4 py-1 mb-4">
            <Sparkles className="w-4 h-4" /> Why AI Coaching?
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-3">
            Why{" "}
            <span
              className="text-gradient-purple"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.63 0.12 192), oklch(0.5 0.2 290))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Choose Us?
            </span>
          </h2>
          <p
            className="text-2xl font-bold"
            style={{ color: "oklch(0.72 0.18 55)" }}
          >
            हमें क्यों चुनें?
          </p>
          <p className="text-navy/60 mt-3 max-w-lg mx-auto">
            Learning that feels like play — zero pressure, maximum growth.
          </p>
        </motion.div>

        <div
          id="about"
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {BENEFITS.map(({ icon: Icon, title, hindi, desc }, i) => (
            <motion.div
              key={title}
              data-ocid={`benefits.item.${i + 1}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.07 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-navy/5 transition-all"
            >
              <div className="w-12 h-12 rounded-xl gradient-teal-purple flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-navy font-bold text-lg">{title}</h3>
              <p className="text-teal font-semibold text-sm mb-2">{hindi}</p>
              <p className="text-navy/60 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── How It Works ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: Users,
      title: "Enroll Your Child",
      hindi: "नामांकन करें",
      desc: "Book a free demo class. We assess your child's current level and suggest the perfect starting point.",
      color: "oklch(0.63 0.12 192)",
    },
    {
      num: "02",
      icon: Gamepad2,
      title: "Learn Through Games",
      hindi: "खेल-खेल में सीखें",
      desc: "2 days/week, 1.5 hours per session. Fun game-based activities that strengthen the brain naturally.",
      color: "oklch(0.72 0.18 55)",
    },
    {
      num: "03",
      icon: TrendingUp,
      title: "Level Up (0 → 8)",
      hindi: "स्तर बढ़ाएं",
      desc: "Progress through 9 exciting levels. Watch your child's confidence, speed, and skills multiply.",
      color: "oklch(0.5 0.2 290)",
    },
  ];

  return (
    <section className="py-20" style={{ background: "oklch(0.14 0.03 240)" }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-orange/20 border border-orange/40 text-orange text-sm font-semibold rounded-full px-4 py-1 mb-4">
            <Clock className="w-4 h-4" /> Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
            Get Started in{" "}
            <span style={{ color: "oklch(0.72 0.18 55)" }}>3 Steps</span>
          </h2>
          <p className="text-xl font-bold text-white/60">3 आसान कदम</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-teal via-orange to-purple opacity-30" />

          {steps.map(({ num, icon: Icon, title, hindi, desc, color }, i) => (
            <motion.div
              key={title}
              data-ocid={`steps.item.${i + 1}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div
                className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white/10 relative"
                style={{ background: `${color}22` }}
              >
                <Icon className="w-10 h-10" style={{ color }} />
                <div
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white"
                  style={{ background: color }}
                >
                  {num}
                </div>
              </div>
              <h3 className="text-white font-bold text-xl mb-1">{title}</h3>
              <p className="font-semibold mb-3" style={{ color }}>
                {hindi}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Mother of Arjun (Age 9), Bilaspur",
    text: "Genius Point ने मेरे बेटे को मात्र 6 महीनों में Tables याद करने की शानदार क्षमता दी है। उसका confidence देखकर दिल खुश हो जाता है! Abacus course बहुत ही लाजवाब है।",
    stars: 5,
    initial: "PS",
  },
  {
    name: "Rakesh Verma",
    role: "Father of Riddhi (Age 11), Korba",
    text: "DMIT test ने हमें बताया कि हमारी बेटी का रुझान Arts में है, अब हम सही दिशा में guide कर पा रहे हैं। Memory Techniques से exam में 90%+ marks आ रहे हैं। शानदार program!",
    stars: 5,
    initial: "RV",
  },
  {
    name: "Sunita Patel",
    role: "Mother of Rohan (Age 7), Katni",
    text: "बच्चा पहले पढ़ाई से दूर भागता था। अब Genius Point की gaming classes में खुद जाने की जिद करता है। Vedic Maths से division और multiplication बहुत fast हो गई है।",
    stars: 5,
    initial: "SP",
  },
];

function Testimonials() {
  return (
    <section className="py-20" style={{ background: "oklch(0.10 0.04 250)" }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-yellow/20 border border-yellow/40 text-yellow text-sm font-semibold rounded-full px-4 py-1 mb-4">
            <Star className="w-4 h-4 fill-current" /> Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
            Parent &amp;{" "}
            <span style={{ color: "oklch(0.78 0.16 85)" }}>Child Stories</span>
          </h2>
          <p className="text-2xl font-bold text-white/60">माता-पिता की आवाज़</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ name, role, text, stars, initial }, i) => (
            <motion.div
              key={name}
              data-ocid={`testimonials.item.${i + 1}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="rounded-2xl p-6 border border-white/10"
              style={{
                background: "oklch(0.16 0.04 240)",
                boxShadow: "0 4px 30px oklch(0.63 0.12 192 / 0.1)",
              }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: stars }, (_, j) => j + 1).map(
                  (starNum) => (
                    <Star
                      key={starNum}
                      className="w-4 h-4 fill-current"
                      style={{ color: "oklch(0.78 0.16 85)" }}
                    />
                  ),
                )}
              </div>
              <p className="text-white/75 text-sm leading-relaxed mb-6 italic">
                "{text}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: "oklch(0.63 0.12 192)" }}
                >
                  {initial}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{name}</div>
                  <div className="text-white/50 text-xs">{role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Branches ─────────────────────────────────────────────────────────────────
const BRANCHES = [
  {
    name: "Bilaspur",
    tag: "Head Office",
    state: "Chhattisgarh",
    desc: "Main headquarters and flagship center with all courses and advanced training.",
    color: "oklch(0.63 0.12 192)",
  },
  {
    name: "Korba",
    tag: "Branch",
    state: "Chhattisgarh",
    desc: "Full-service branch offering all 7 programs for children aged 5–15.",
    color: "oklch(0.72 0.18 55)",
  },
  {
    name: "Katni",
    tag: "Branch",
    state: "Madhya Pradesh",
    desc: "Expanding center serving the Katni district with certified Genius Point coaches.",
    color: "oklch(0.5 0.2 290)",
  },
  {
    name: "Pendra Road",
    tag: "Branch",
    state: "Chhattisgarh",
    desc: "Newest branch bringing world-class brain development training to Pendra Road.",
    color: "oklch(0.78 0.16 85)",
  },
];

function BranchesSection() {
  return (
    <section
      id="branches"
      className="py-20"
      style={{ background: "oklch(0.97 0.005 240)" }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span
            className="inline-flex items-center gap-2 border text-sm font-semibold rounded-full px-4 py-1 mb-4"
            style={{
              background: "oklch(0.5 0.2 290 / 0.1)",
              borderColor: "oklch(0.5 0.2 290 / 0.3)",
              color: "oklch(0.5 0.2 290)",
            }}
          >
            <MapPin className="w-4 h-4" /> Our Locations
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-3">
            Our{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.5 0.2 290), oklch(0.63 0.12 192))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Branches
            </span>
          </h2>
          <p
            className="text-2xl font-bold"
            style={{ color: "oklch(0.72 0.18 55)" }}
          >
            हमारी शाखाएं
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRANCHES.map(({ name, tag, state, desc, color }, i) => (
            <motion.div
              key={name}
              data-ocid={`branches.item.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-navy/5 transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${color}22` }}
              >
                <MapPin className="w-6 h-6" style={{ color }} />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-navy font-black text-xl">{name}</h3>
                {tag === "Head Office" && (
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                    style={{ background: color }}
                  >
                    HQ
                  </span>
                )}
              </div>
              <p className="text-sm font-semibold mb-2" style={{ color }}>
                {tag} · {state}
              </p>
              <p className="text-navy/60 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Demo Form ─────────────────────────────────────────────────────────────────
function DemoForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    childAge: "",
    courseInterest: "",
  });

  const { mutate, isPending, isSuccess } = useSubmitInquiry();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.phone ||
      !form.city ||
      !form.childAge ||
      !form.courseInterest
    ) {
      toast.error("Please fill all fields!");
      return;
    }
    mutate(
      {
        name: form.name,
        phone: form.phone,
        city: form.city,
        childAge: BigInt(form.childAge),
        courseInterest: form.courseInterest,
      },
      {
        onSuccess: () => {
          toast.success("Demo booked! हम जल्द आपसे संपर्क करेंगे 🎉");
          setForm({
            name: "",
            phone: "",
            city: "",
            childAge: "",
            courseInterest: "",
          });
        },
        onError: () => toast.error("Something went wrong. Please try again."),
      },
    );
  };

  return (
    <section
      id="contact"
      className="py-20"
      style={{ background: "oklch(0.12 0.04 240)" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center gap-2 bg-teal/20 border border-teal/40 text-teal text-sm font-semibold rounded-full px-4 py-1 mb-4">
              <Sparkles className="w-4 h-4" /> Free Demo Class
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
              Book Your <span className="text-gradient">Free Demo</span>
            </h2>
            <p className="text-xl font-bold text-white/60">मुफ़्त डेमो बुक करें</p>
          </motion.div>

          <motion.form
            data-ocid="demo.modal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="rounded-3xl p-8 border border-white/10"
            style={{ background: "oklch(0.16 0.04 240)" }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label className="text-white/80 font-semibold mb-2 block">
                  Parent's Name *
                </Label>
                <Input
                  data-ocid="demo.name.input"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/30 rounded-xl focus:border-teal"
                />
              </div>
              <div>
                <Label className="text-white/80 font-semibold mb-2 block">
                  Phone Number *
                </Label>
                <Input
                  data-ocid="demo.phone.input"
                  placeholder="10-digit mobile number"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, phone: e.target.value }))
                  }
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/30 rounded-xl focus:border-teal"
                />
              </div>
              <div>
                <Label className="text-white/80 font-semibold mb-2 block">
                  City *
                </Label>
                <Select
                  value={form.city}
                  onValueChange={(v) => setForm((p) => ({ ...p, city: v }))}
                >
                  <SelectTrigger
                    data-ocid="demo.city.select"
                    className="bg-white/5 border-white/20 text-white rounded-xl focus:border-teal"
                  >
                    <SelectValue placeholder="Select your city" />
                  </SelectTrigger>
                  <SelectContent>
                    {["Bilaspur", "Korba", "Katni", "Pendra Road"].map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-white/80 font-semibold mb-2 block">
                  Child's Age *
                </Label>
                <Input
                  data-ocid="demo.childage.input"
                  type="number"
                  min="5"
                  max="15"
                  placeholder="5 to 15 years"
                  value={form.childAge}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, childAge: e.target.value }))
                  }
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/30 rounded-xl focus:border-teal"
                />
              </div>
              <div className="sm:col-span-2">
                <Label className="text-white/80 font-semibold mb-2 block">
                  Course Interest *
                </Label>
                <Select
                  value={form.courseInterest}
                  onValueChange={(v) =>
                    setForm((p) => ({ ...p, courseInterest: v }))
                  }
                >
                  <SelectTrigger
                    data-ocid="demo.course.select"
                    className="bg-white/5 border-white/20 text-white rounded-xl focus:border-teal"
                  >
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "Abacus",
                      "Memory Techniques",
                      "Vedic Maths",
                      "Mid-Brain Activation",
                      "DMIT",
                      "Handwriting",
                      "QSR Training",
                      "Not Sure (Let Us Guide)",
                    ].map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              data-ocid="demo.submit_button"
              type="submit"
              disabled={isPending || isSuccess}
              size="lg"
              className="w-full mt-6 gradient-teal-purple text-white font-bold rounded-xl border-0 hover:opacity-90 transition-opacity text-base h-12"
            >
              {isPending ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Booking...
                </span>
              ) : isSuccess ? (
                "✅ Demo Booked!"
              ) : (
                <span className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" /> Book Free Demo Now
                </span>
              )}
            </Button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap justify-center gap-6 text-white/60"
          >
            <a
              href="tel:9977066797"
              data-ocid="contact.phone1.link"
              className="flex items-center gap-2 hover:text-teal transition-colors"
            >
              <Phone className="w-4 h-4" /> 9977066797
            </a>
            <a
              href="tel:9826149505"
              data-ocid="contact.phone2.link"
              className="flex items-center gap-2 hover:text-teal transition-colors"
            >
              <Phone className="w-4 h-4" /> 9826149505
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      className="pt-16 pb-8 border-t border-white/10"
      style={{ background: "oklch(0.09 0.03 240)" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full gradient-teal-purple flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-black text-xl text-white">
                  Genius Point
                </div>
                <div className="text-xs text-teal-light">
                  Brain Development Centre
                </div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              15 साल से बच्चों की प्रतिभा को निखारते हुए। Bilaspur, C.G. में स्थित India
              का भरोसेमंद Brain Development Institute.
            </p>
            <div className="text-white/50 text-sm">
              <p className="font-semibold text-white/70 mb-1">Founder & CEO</p>
              <p>Mr. Prem Vaishya</p>
              <p className="font-semibold text-white/70 mt-2 mb-1">Director</p>
              <p>Smt. Shalini Vaishya</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                ["Home", "#home"],
                ["Courses", "#courses"],
                ["Benefits", "#benefits"],
                ["Branches", "#branches"],
                ["Book Demo", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    data-ocid={`footer.${label.toLowerCase().replace(" ", "_")}.link`}
                    className="text-white/50 hover:text-teal transition-colors text-sm flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-bold mb-4">Our Courses</h4>
            <ul className="space-y-2">
              {COURSES.map((c) => (
                <li key={c.name}>
                  <span className="text-white/50 text-sm flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-teal" /> {c.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm">
                  Head Office: Bilaspur, Chhattisgarh
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal shrink-0" />
                <div className="text-sm">
                  <a
                    href="tel:9977066797"
                    className="text-white/50 hover:text-teal block transition-colors"
                  >
                    9977066797
                  </a>
                  <a
                    href="tel:9826149505"
                    className="text-white/50 hover:text-teal block transition-colors"
                  >
                    9826149505
                  </a>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-white/40 text-xs mb-2">Branches:</p>
                <div className="flex flex-wrap gap-2">
                  {["Bilaspur", "Korba", "Katni", "Pendra Road"].map((b) => (
                    <span
                      key={b}
                      className="text-xs px-2 py-0.5 rounded-full border border-teal/30 text-teal/70"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-sm">
            © {year} Genius Point. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Built with{" "}
            <Heart className="w-3 h-3 inline text-red-400 fill-current" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal/60 hover:text-teal transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── App ────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" richColors />
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <CoursesSection />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <BranchesSection />
        <DemoForm />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
