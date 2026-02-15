"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import FloatingLines from "@/components/FloatingLines";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  ArrowRight,
  Award,
  Building2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  HardHat,
  Home as HomeIcon,
  Mail,
  MapPin,
  Menu,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wrench,
  X,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

type ProjectCategory = "All" | "Residential" | "Commercial" | "Renovation";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const statItems = [
  { label: "Years in Business", value: 25, suffix: "+", icon: Clock3 },
  { label: "Projects Completed", value: 500, suffix: "+", icon: Building2 },
  { label: "Happy Clients", value: 300, suffix: "+", icon: Users },
  { label: "Team Members", value: 50, suffix: "+", icon: HardHat },
];

const serviceItems = [
  {
    title: "Residential Construction",
    description:
      "Custom homes and gated communities delivered with rigorous standards.",
    icon: HomeIcon,
  },
  {
    title: "Commercial Projects",
    description:
      "Corporate towers and mixed-use spaces engineered for durability and speed.",
    icon: Building2,
  },
  {
    title: "Renovations & Remodeling",
    description:
      "Transforming existing spaces through precision planning and execution.",
    icon: Wrench,
  },
  {
    title: "Infrastructure Development",
    description:
      "Roadways, utilities, and industrial foundations built for scale.",
    icon: Ruler,
  },
];

const projects = [
  {
    name: "Skyline Crest Residences",
    category: "Residential",
    location: "Hyderabad",
    duration: "18 Months",
    size: "420K sq.ft",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    isHero: false,
  },
  {
    name: "Cobalt Tech Park",
    category: "Commercial",
    location: "Bengaluru",
    duration: "14 Months",
    size: "310K sq.ft",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80",
    isHero: false,
  },
  {
    name: "Heritage Villa Renewal",
    category: "Renovation",
    location: "Chennai",
    duration: "9 Months",
    size: "48K sq.ft",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
    isHero: false,
  },
  {
    name: "Azure Corporate Spine",
    category: "Commercial",
    location: "Mumbai",
    duration: "20 Months",
    size: "500K sq.ft",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
    isHero: false,
  },
  {
    name: "Palmwood Residential Cluster",
    category: "Residential",
    location: "Pune",
    duration: "12 Months",
    size: "260K sq.ft",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&q=80",
    isHero: false,
  },
  {
    name: "Civic Hall Retrofit",
    category: "Renovation",
    location: "Vijayawada",
    duration: "8 Months",
    size: "70K sq.ft",
    image:
      "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=900&q=80",
    isHero: false,
  },
] as const;

const features = [
  { title: "Licensed & Certified", icon: ShieldCheck },
  { title: "Premium Quality Materials", icon: Sparkles },
  { title: "On-Time Delivery", icon: Clock3 },
  { title: "Expert Engineering Team", icon: HardHat },
];

const testimonials = [
  {
    quote: "Their delivery discipline and quality control were exceptional.",
    name: "Ananya Reddy",
    project: "Commercial Tower",
  },
  {
    quote: "Every milestone was transparent and professional.",
    name: "Raghav Menon",
    project: "Luxury Residential",
  },
  {
    quote: "They handled complex renovation constraints with confidence.",
    name: "Suresh Babu",
    project: "Retail Renovation",
  },
];

// Hero slide definition
const heroSlide = {
  name: "Sreeven Projects",
  category: "Hero" as const,
  location: "Hyderabad",
  duration: "25+ Years",
  size: "500+ Projects",
  image: "/logo-mark.png",
  isHero: true,
};

// Combined slides array
const allSlides = [heroSlide, ...projects];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { amount: 0.7, once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();
    const frame = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const next = Math.floor(progress * value);
      if (next !== start) {
        start = next;
        setCount(next);
      }
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [inView, value]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

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
  const ref = useRef<HTMLElement | null>(null);
  const [showGlow, setShowGlow] = useState(false);
  const px = useMotionValue(50);
  const py = useMotionValue(50);
  const smoothX = useSpring(px, { stiffness: 260, damping: 24 });
  const smoothY = useSpring(py, { stiffness: 260, damping: 24 });
  const glow = useMotionTemplate`radial-gradient(280px circle at ${smoothX}% ${smoothY}%, rgba(251,191,36,0.22), transparent 60%)`;
  const onMove = (event: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set(((event.clientX - rect.left) / rect.width) * 100);
    py.set(((event.clientY - rect.top) / rect.height) * 100);
  };
  return (
    <header
      ref={ref}
      onMouseMove={onMove}
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
        <a href="#home" className="flex items-center gap-3">
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
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-200 transition hover:text-amber-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full border border-white/60 bg-cyan-500/15 px-6 py-2.5 text-sm font-medium text-white md:inline-flex"
          >
            Get Quote
          </a>
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
              <a
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm text-slate-100"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 text-center">
      <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-300">
        {subtitle}
      </p>
      <h2 className="text-glow text-3xl font-semibold text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  const [navSolid, setNavSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [sending, setSending] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(
      () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length),
      5000,
    );
    return () => clearInterval(timer);
  }, []);

  // Auto-advance slideshow (8 seconds, pause on hover)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % allSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          activeFilter === "All" || project.category === activeFilter,
      ),
    [activeFilter],
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % allSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + allSlides.length) % allSlides.length);
  };

  const currentSlideData = allSlides[currentSlide];

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

        <section
          id="home"
          className="aurora-bg relative min-h-screen overflow-hidden pt-32"
        >
          <DynamicAurora />
          <div className="section-shell relative z-10 flex min-h-[82vh] items-center justify-center">
            <div className="relative w-full max-w-5xl">
              {/* Slideshow Container */}
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
                    {currentSlideData.isHero ? (
                      // Hero Slide
                      <div className="text-center">
                        <div className="relative mx-auto mb-8 h-24 w-24 overflow-hidden rounded-2xl ring-1 ring-white/40">
                          <Image
                            src={currentSlideData.image}
                            alt="Sreeven Projects mark"
                            fill
                            sizes="96px"
                            className="object-cover"
                          />
                        </div>
                        <h1 className="text-glow shiny-gold-loop text-4xl font-semibold leading-tight text-white sm:text-6xl">
                          Where Vision Meets Structure
                        </h1>
                        <p className="shiny-gold-loop mx-auto mt-6 max-w-2xl text-base text-slate-200 sm:text-lg">
                          We design and build iconic residential, commercial,
                          and infrastructure projects with precision and speed.
                        </p>
                        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                          <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-slate-950"
                          >
                            View Projects <ArrowRight size={16} />
                          </a>
                          <a
                            href="#contact"
                            className="inline-flex items-center rounded-full border border-white/70 px-7 py-3 text-sm font-semibold text-amber-100"
                          >
                            Contact Us
                          </a>
                        </div>
                      </div>
                    ) : (
                      // Project Slide
                      <div className="grid items-center gap-8 md:grid-cols-2">
                        <div className="relative h-[400px] overflow-hidden rounded-2xl ring-1 ring-white/30">
                          <Image
                            src={currentSlideData.image}
                            alt={currentSlideData.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                          />
                          <div className="absolute left-4 top-4 rounded-full bg-cyan-500/30 px-4 py-1.5 text-sm text-amber-100 backdrop-blur-sm">
                            {currentSlideData.category}
                          </div>
                        </div>
                        <div className="text-center md:text-left">
                          <h2 className="text-glow text-3xl font-semibold text-white sm:text-5xl">
                            {currentSlideData.name}
                          </h2>
                          <div className="mt-6 space-y-3">
                            <p className="flex items-center justify-center gap-2 text-slate-200 md:justify-start">
                              <MapPin size={18} className="text-amber-400" />
                              {currentSlideData.location}
                            </p>
                            <p className="flex items-center justify-center gap-2 text-slate-200 md:justify-start">
                              <Clock3 size={18} className="text-amber-400" />
                              Duration: {currentSlideData.duration}
                            </p>
                            <p className="flex items-center justify-center gap-2 text-slate-200 md:justify-start">
                              <Building2 size={18} className="text-amber-400" />
                              Size: {currentSlideData.size}
                            </p>
                          </div>
                          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                            <a
                              href="#contact"
                              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-slate-950"
                            >
                              Start Your Project <ArrowRight size={16} />
                            </a>
                            <a
                              href="#projects"
                              className="inline-flex items-center rounded-full border border-white/70 px-7 py-3 text-sm font-semibold text-amber-100"
                            >
                              View All Projects
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="mt-8 flex items-center justify-center gap-4">
                  <button
                    onClick={prevSlide}
                    className="grid h-12 w-12 place-items-center rounded-full border border-white/50 bg-slate-950/50 text-amber-400 backdrop-blur-sm transition hover:border-amber-400/80 hover:bg-slate-900/80"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  {/* Slide Indicators */}
                  <div className="flex gap-2">
                    {allSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === currentSlide
                            ? "w-8 bg-amber-400"
                            : "w-2 bg-white/30"
                        }`}
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
          <a
            href="#stats"
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-amber-400"
          >
            <ChevronDown className="animate-pulse-y" />
          </a>
        </section>

        <section id="stats" className="section-shell py-20">
          <SectionHeading title="Our Track Record" subtitle="Experience" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {statItems.map((item) => (
              <article key={item.label} className="bento-card rounded-2xl">
                <item.icon className="mb-4 text-amber-400" size={24} />
                <p className="text-3xl font-semibold text-white">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-1 text-sm text-slate-300">{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section-shell py-24">
          <SectionHeading title="What We Do" subtitle="Services" />
          <div className="grid gap-5 md:grid-cols-2">
            {serviceItems.map((service) => (
              <article
                key={service.title}
                className="glass-panel rounded-2xl p-7"
              >
                <service.icon className="mb-4 text-amber-400" size={26} />
                <h3 className="text-xl text-white">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-300">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="geometric-grid py-24">
          <div className="section-shell">
            <SectionHeading title="Featured Work" subtitle="Projects" />
            <div className="mb-8 flex flex-wrap justify-center gap-3">
              {(
                [
                  "All",
                  "Residential",
                  "Commercial",
                  "Renovation",
                ] as ProjectCategory[]
              ).map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-5 py-2.5 text-sm transition ${
                    activeFilter === filter
                      ? "border-white/80 bg-cyan-500/20 text-amber-100"
                      : "border-white/30 text-slate-300 hover:border-white/50"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
              {filteredProjects.map((project) => (
                <article
                  key={project.name}
                  className="bento-card mb-5 break-inside-avoid overflow-hidden rounded-2xl p-0"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute left-3 top-3 rounded-full bg-cyan-500/30 px-3 py-1 text-xs text-amber-100">
                      {project.category}
                    </div>
                  </div>
                  <div className="space-y-2 p-5">
                    <h3 className="text-lg text-white">{project.name}</h3>
                    <p className="flex items-center gap-2 text-xs text-slate-300">
                      <MapPin size={13} className="text-amber-400" />{" "}
                      {project.location}
                    </p>
                    <div className="flex items-center justify-between border-t border-white/20 pt-3 text-xs text-slate-300">
                      <span>Duration: {project.duration}</span>
                      <span>Size: {project.size}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-shell py-24">
          <SectionHeading title="Why Partner With Us" subtitle="About" />
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="bento-card rounded-2xl">
              <h3 className="text-2xl text-white">
                Built on Precision. Driven by Purpose.
              </h3>
              <p className="mt-4 text-slate-300">
                With over 25 years of engineering excellence, we transform
                ambitious visions into architectural landmarks. Our commitment
                to quality, safety, and innovation has made us a trusted partner
                for residential, commercial, and infrastructure projects across
                India.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-xl border border-white/20 bg-slate-950/60 p-4 text-sm text-slate-200"
                  >
                    <feature.icon size={16} className="mb-2 text-amber-400" />
                    {feature.title}
                  </div>
                ))}
              </div>
            </div>
            <div className="bento-card relative overflow-hidden rounded-2xl p-0">
              <div className="relative h-[420px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1100&q=80"
                  alt="Construction engineering team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-5 left-5 rounded-xl bg-slate-950/80 p-4">
                <p className="mb-2 flex items-center gap-2 text-sm text-amber-300">
                  <Award size={16} />
                  Certified Excellence
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell py-24">
          <SectionHeading
            title="Client Testimonials"
            subtitle="What Our Clients Say"
          />
          <div className="mx-auto max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bento-card rounded-2xl text-center"
              >
                <div className="mb-5 flex justify-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-base leading-relaxed text-slate-100">
                  &quot;{testimonials[activeTestimonial].quote}&quot;
                </p>
                <p className="mt-5 font-semibold text-white">
                  {testimonials[activeTestimonial].name}
                </p>
                <p className="text-sm text-amber-300">
                  {testimonials[activeTestimonial].project}
                </p>
              </motion.article>
            </AnimatePresence>
          </div>
        </section>

        <section
          id="contact"
          className="aurora-bg relative overflow-hidden py-24"
        >
          <DynamicAurora />
          <div className="section-shell relative z-10">
            <SectionHeading title="Let's Build Together" subtitle="Contact" />
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <form
                className="bento-card rounded-2xl"
                onSubmit={async (event) => {
                  event.preventDefault();
                  setSubmitMessage(null);
                  setSubmitError(null);
                  setSending(true);
                  const form = event.currentTarget;
                  const formData = new FormData(form);
                  const payload = {
                    name: String(formData.get("name") ?? ""),
                    email: String(formData.get("email") ?? ""),
                    phone: String(formData.get("phone") ?? ""),
                    projectType: String(formData.get("projectType") ?? ""),
                    message: String(formData.get("message") ?? ""),
                  };
                  try {
                    const response = await fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(payload),
                    });
                    const result = (await response.json()) as {
                      inquiryId?: string;
                      error?: string;
                    };
                    if (!response.ok)
                      throw new Error(
                        result.error ??
                          "Unable to submit inquiry. Please try again.",
                      );
                    form.reset();
                    setSubmitMessage(
                      `Inquiry submitted successfully. Reference: ${result.inquiryId ?? "INQ-PENDING"}`,
                    );
                  } catch (error) {
                    setSubmitError(
                      error instanceof Error
                        ? error.message
                        : "Unable to submit inquiry. Please try again.",
                    );
                  } finally {
                    setSending(false);
                  }
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    name="name"
                    placeholder="Name"
                    className="input-control"
                  />
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="input-control"
                  />
                  <input
                    name="phone"
                    placeholder="Phone"
                    className="input-control"
                  />
                  <select name="projectType" className="input-control">
                    <option>Project Type</option>
                    <option>Residential Construction</option>
                    <option>Commercial Projects</option>
                    <option>Renovation & Remodeling</option>
                    <option>Infrastructure Development</option>
                  </select>
                </div>
                <textarea
                  required
                  name="message"
                  placeholder="Tell us about your project"
                  rows={5}
                  className="input-control mt-4 w-full"
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="mt-4 inline-flex items-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-50"
                >
                  {sending ? "Sending..." : "Submit Inquiry"}
                </button>
                {submitMessage && (
                  <p className="mt-3 text-sm text-emerald-300">
                    {submitMessage}
                  </p>
                )}
                {submitError && (
                  <p className="mt-3 text-sm text-red-300">{submitError}</p>
                )}
              </form>
              <aside className="bento-card rounded-2xl">
                <h3 className="text-xl text-white">Contact Information</h3>
                <div className="mt-5 space-y-4 text-sm text-slate-200">
                  <p className="flex items-center gap-3">
                    <Phone size={16} className="text-amber-400" />
                    9030841530
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail size={16} className="text-amber-400" />
                    kasula08@gmail.com
                  </p>
                  <p className="flex items-center gap-3">
                    <MapPin size={16} className="text-amber-400" />
                    Jubilee Hills, Hyderabad
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="border-t border-white/10 bg-slate-950/80 py-12">
          <div className="section-shell">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {/* Company Info */}
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

              {/* Quick Links */}
              <div>
                <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="transition hover:text-amber-300"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="mb-4 font-semibold text-white">Services</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <a
                      href="#services"
                      className="transition hover:text-amber-300"
                    >
                      Residential Construction
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="transition hover:text-amber-300"
                    >
                      Commercial Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="transition hover:text-amber-300"
                    >
                      Renovations & Remodeling
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="transition hover:text-amber-300"
                    >
                      Infrastructure Development
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact & Social */}
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

            {/* Copyright */}
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
