// src/components/ServicePageLayout.tsx - Updated to handle icon names

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import FloatingLines from "@/components/FloatingLines";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Home,
  Users,
  Palette,
  Shield,
  Clock,
  TrendingUp,
  Building2,
  Zap,
  DollarSign,
  Wrench,
  Sparkles,
  Recycle,
  Ruler,
  Truck,
} from "lucide-react";

type ServiceSlide = {
  title: string;
  description: string;
  image: string;
};

type ServiceDetail = {
  icon: string;
  title: string;
  description: string;
};

type ServicePageLayoutProps = {
  serviceName: string;
  serviceTagline: string;
  slides: ServiceSlide[];
  description: string;
  details: ServiceDetail[];
  benefits: string[];
  processSteps: { title: string; description: string }[];
};

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/#services",
    dropdown: [
      { label: "Residential Construction", href: "/services/residential" },
      { label: "Commercial Projects", href: "/services/commercial" },
      { label: "Renovations & Remodeling", href: "/services/renovations" },
      { label: "Infrastructure Development", href: "/services/infrastructure" },
      { label: "Industrial Construction", href: "/services/industrial" },
    ],
  },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

// Icon mapper function
const getIcon = (iconName: string) => {
  const icons: Record<
    string,
    React.ComponentType<{ size?: number; className?: string }>
  > = {
    Home,
    Users,
    Palette,
    Shield,
    Clock,
    TrendingUp,
    Building2,
    Zap,
    DollarSign,
    Wrench,
    Sparkles,
    Recycle,
    Ruler,
    Truck,
  };
  return icons[iconName] || Home;
};

function DynamicAurora() {
  const x = useMotionValue(50);
  const y = useMotionValue(50);
  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      x.set((event.clientX / window.innerWidth) * 100);
      y.set((event.clientY / window.innerHeight) * 100);
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [x, y]);
  const glow = useMotionTemplate`radial-gradient(circle at ${x}% ${y}%, rgba(251,191,36,0.18), transparent 32%)`;
  return (
    <div className="pointer-events-none absolute inset-0">
      <motion.div
        className="absolute inset-0"
        style={{ backgroundImage: glow }}
      />
    </div>
  );
}

function NavbarWithGlow({
  navSolid,
  menuOpen,
  setMenuOpen,
}: {
  navSolid: boolean;
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}) {
  const [showGlow, setShowGlow] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const px = useMotionValue(50);
  const py = useMotionValue(50);
  const smoothX = useSpring(px, { stiffness: 260, damping: 24 });
  const smoothY = useSpring(py, { stiffness: 260, damping: 24 });
  const glow = useMotionTemplate`radial-gradient(280px circle at ${smoothX}% ${smoothY}%, rgba(251,191,36,0.22), transparent 60%)`;

  return (
    <header
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        px.set(((e.clientX - rect.left) / rect.width) * 100);
        py.set(((e.clientY - rect.top) / rect.height) * 100);
      }}
      onMouseEnter={() => setShowGlow(true)}
      onMouseLeave={() => setShowGlow(false)}
      className={`fixed left-0 right-0 top-3 z-50 mx-auto w-[min(96%,1200px)] rounded-2xl border px-4 py-3 ${navSolid ? "glass-panel border-white/45" : "border-white/35 bg-slate-950/30"}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ backgroundImage: glow }}
        animate={{ opacity: showGlow ? 1 : 0 }}
      />
      <div className="relative z-10 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-xl ring-1 ring-white/45">
            <Image
              src="/logo-mark.png"
              alt="Sreeven Projects mark"
              fill
              sizes="44px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-white">Sreeven Projects</p>
            <p className="text-xs text-amber-300/80">Engineering Excellence</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() =>
                item.dropdown && setActiveDropdown(item.label)
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.dropdown ? (
                <>
                  <button className="flex items-center gap-1 text-sm text-slate-200 transition hover:text-amber-100">
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-white/25 bg-slate-950/95 p-2 backdrop-blur-xl"
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="block rounded-lg px-4 py-2.5 text-sm text-slate-200 transition hover:bg-cyan-500/10 hover:text-amber-100"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm text-slate-200 transition hover:text-amber-100"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className="hidden rounded-full border border-white/60 bg-cyan-500/15 px-6 py-2.5 text-sm font-medium text-white md:inline-flex"
          >
            Get Quote
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/50 text-amber-400 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="relative z-10 mt-3 space-y-2 rounded-xl border border-white/25 bg-slate-950/92 p-4 md:hidden"
          >
            {navItems.map((item) => (
              <div key={item.href}>
                {item.dropdown ? (
                  <>
                    <button
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-slate-100"
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label,
                        )
                      }
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="block rounded-lg px-3 py-2 text-sm text-slate-300"
                            onClick={() => setMenuOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default function ServicePageLayout({
  serviceName,
  serviceTagline,
  slides,
  description,
  details,
  benefits,
  processSteps,
}: ServicePageLayoutProps) {
  const [navSolid, setNavSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [isHovered, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setSubmitMessage(null);
    setSubmitError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      projectType: serviceName,
      budget: String(formData.get("budget") ?? ""),
      message: String(formData.get("message") ?? ""),
      source: "booking" as const,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send booking request");
      }

      setSubmitMessage("Booking request sent! We'll contact you shortly.");
      e.currentTarget.reset();
    } catch (error) {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="relative bg-black text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-28">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[4, 5, 4]}
          lineDistance={[9, 8, 9]}
          bendRadius={4.6}
          bendStrength={-0.32}
          animationSpeed={0.82}
          interactive={false}
          parallax={false}
          linesGradient={[
            "#1d4ed8",
            "#3b82f6",
            "#06b6d4",
            "#fbbf24",
            "#3b82f6",
          ]}
          mixBlendMode="screen"
        />
      </div>

      <div className="relative z-10">
        <NavbarWithGlow
          navSolid={navSolid}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        {/* Hero Section with Slideshow */}
        <section className="aurora-bg relative min-h-screen overflow-hidden pt-32">
          <DynamicAurora />
          <div className="section-shell relative z-10 flex min-h-[82vh] items-center justify-center">
            <div className="relative w-full max-w-5xl">
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.7 }}
                    className="relative"
                  >
                    <div className="grid items-center gap-8 md:grid-cols-2">
                      <div className="relative h-100 overflow-hidden rounded-2xl ring-1 ring-white/30">
                        <Image
                          src={slides[currentSlide].image}
                          alt={slides[currentSlide].title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="text-center md:text-left">
                        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-300">
                          Professional Services
                        </p>
                        <h1 className="text-glow text-3xl font-semibold text-white sm:text-5xl">
                          {slides[currentSlide].title}
                        </h1>
                        <p className="mt-6 text-slate-200">
                          {slides[currentSlide].description}
                        </p>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                          <a
                            href="#book-service"
                            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-slate-950"
                          >
                            Book This Service <ArrowRight size={16} />
                          </a>
                          <Link
                            href="/#projects"
                            className="inline-flex items-center rounded-full border border-white/70 px-7 py-3 text-sm font-semibold text-amber-100"
                          >
                            View Projects
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex items-center justify-center gap-4">
                  <button
                    onClick={prevSlide}
                    className="grid h-12 w-12 place-items-center rounded-full border border-white/50 bg-slate-950/50 text-amber-400 backdrop-blur-sm transition hover:border-amber-400/80 hover:bg-slate-900/80"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <div className="flex gap-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-amber-400" : "w-2 bg-white/30"}`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextSlide}
                    className="grid h-12 w-12 place-items-center rounded-full border border-white/50 bg-slate-950/50 text-amber-400 backdrop-blur-sm transition hover:border-amber-400/80 hover:bg-slate-900/80"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="section-shell py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-300">
              Overview
            </p>
            <h2 className="text-glow text-3xl font-semibold text-white sm:text-4xl">
              {serviceName}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              {description}
            </p>
          </div>
        </section>

        {/* Service Details */}
        <section className="geometric-grid py-24">
          <div className="section-shell">
            <p className="mb-3 text-center text-xs uppercase tracking-[0.3em] text-amber-300">
              What We Offer
            </p>
            <h2 className="text-glow mb-12 text-center text-3xl font-semibold text-white sm:text-4xl">
              Our Expertise
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {details.map((detail, index) => {
                const IconComponent = getIcon(detail.icon);
                return (
                  <article key={index} className="bento-card rounded-2xl">
                    <IconComponent className="mb-4 text-amber-400" size={28} />
                    <h3 className="text-lg font-semibold text-white">
                      {detail.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-300">
                      {detail.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-shell py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-300">
                Why Choose Us
              </p>
              <h2 className="text-glow text-3xl font-semibold text-white sm:text-4xl">
                Key Benefits
              </h2>
              <div className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-1 shrink-0 text-amber-400"
                      size={20}
                    />
                    <p className="text-slate-200">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bento-card rounded-2xl p-0">
              <div className="relative h-125 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1100&q=80"
                  alt="Construction site"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="geometric-grid py-24">
          <div className="section-shell">
            <p className="mb-3 text-center text-xs uppercase tracking-[0.3em] text-amber-300">
              How We Work
            </p>
            <h2 className="text-glow mb-12 text-center text-3xl font-semibold text-white sm:text-4xl">
              Our Process
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <article
                  key={index}
                  className="bento-card rounded-2xl text-center"
                >
                  <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-cyan-500/20 text-2xl font-bold text-amber-400">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Book Service */}
        <section
          id="book-service"
          className="aurora-bg relative overflow-hidden py-24"
        >
          <DynamicAurora />
          <div className="section-shell relative z-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-300">
                Get Started
              </p>
              <h2 className="text-glow text-3xl font-semibold text-white sm:text-4xl">
                Book {serviceName}
              </h2>
              <p className="mt-4 text-slate-300">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>
            </div>

            <form
              className="bento-card mx-auto mt-12 max-w-2xl rounded-2xl"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  name="name"
                  placeholder="Your Name"
                  className="input-control"
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="input-control"
                />
                <input
                  required
                  name="phone"
                  placeholder="Phone Number"
                  className="input-control"
                />
                <input
                  name="budget"
                  placeholder="Estimated Budget (Optional)"
                  className="input-control"
                />
              </div>
              <textarea
                required
                name="message"
                placeholder="Tell us about your project requirements"
                rows={6}
                className="input-control mt-4 w-full"
              />
              <button
                type="submit"
                disabled={sending}
                className="mt-4 w-full rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-50 sm:w-auto"
              >
                {sending ? "Submitting..." : "Submit Booking Request"}
              </button>
              {submitMessage && (
                <p className="mt-3 text-sm text-emerald-300">{submitMessage}</p>
              )}
              {submitError && (
                <p className="mt-3 text-sm text-red-300">{submitError}</p>
              )}
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-slate-950/80 py-12">
          <div className="section-shell">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-xl ring-1 ring-white/40">
                    <Image
                      src="/logo-mark.png"
                      alt="Sreeven Projects"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Sreeven Projects</p>
                    <p className="text-xs text-amber-300/80">
                      Engineering Excellence
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-400">
                  Building tomorrow's landmarks with precision, quality, and
                  divine dedication.
                </p>
              </div>

              <div>
                <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="transition hover:text-amber-300"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-4 font-semibold text-white">Services</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <Link
                      href="/services/residential"
                      className="transition hover:text-amber-300"
                    >
                      Residential Construction
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/commercial"
                      className="transition hover:text-amber-300"
                    >
                      Commercial Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/industrial"
                      className="transition hover:text-amber-300"
                    >
                      Industrial Construction
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/renovations"
                      className="transition hover:text-amber-300"
                    >
                      Renovations & Remodeling
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/infrastructure"
                      className="transition hover:text-amber-300"
                    >
                      Infrastructure Development
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 font-semibold text-white">
                  Connect With Us
                </h4>
                <div className="space-y-3 text-sm text-slate-400">
                  <p className="flex items-center gap-2">
                    <Phone size={14} className="text-amber-400" />
                    9030841530
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={14} className="text-amber-400" />
                    kasula08@gmail.com
                  </p>
                </div>
                <div className="mt-6 flex gap-3">
                  <a
                    href="#"
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-slate-400 transition hover:border-amber-400 hover:text-amber-400"
                    aria-label="Facebook"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="#"
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-slate-400 transition hover:border-amber-400 hover:text-amber-400"
                    aria-label="Instagram"
                  >
                    <Instagram size={16} />
                  </a>
                  <a
                    href="#"
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-slate-400 transition hover:border-amber-400 hover:text-amber-400"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="#"
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-slate-400 transition hover:border-amber-400 hover:text-amber-400"
                    aria-label="Twitter"
                  >
                    <Twitter size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
              <p>
                &copy; {new Date().getFullYear()} Sreeven Projects. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
