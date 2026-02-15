// src/app/services/residential/page.tsx

import ServicePageLayout from "@/components/ServicePageLayout";

const slides = [
  {
    title: "Residential Construction",
    description:
      "Custom homes and gated communities built with meticulous attention to detail and lasting quality.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Luxury Villas",
    description:
      "Premium villa construction with world-class architecture and modern amenities.",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Gated Communities",
    description:
      "Comprehensive residential developments with integrated facilities and security.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
  },
];

const details = [
  {
    icon: "Home",
    title: "Custom Home Design",
    description:
      "Tailored architectural designs that reflect your lifestyle and preferences with innovative layouts.",
  },
  {
    icon: "Users",
    title: "Family-Centric Spaces",
    description:
      "Creating functional living environments that enhance comfort and family interactions.",
  },
  {
    icon: "Palette",
    title: "Interior & Finishing",
    description:
      "Premium materials and finishes with attention to aesthetic details and durability.",
  },
  {
    icon: "Shield",
    title: "Quality Assurance",
    description:
      "Rigorous quality checks at every construction phase ensuring structural integrity.",
  },
  {
    icon: "Clock",
    title: "Timely Delivery",
    description:
      "Project milestones met on schedule with transparent progress tracking.",
  },
  {
    icon: "TrendingUp",
    title: "Value Appreciation",
    description:
      "Construction quality that ensures long-term property value and investment returns.",
  },
];

const benefits = [
  "End-to-end project management from design to handover",
  "Licensed architects and certified structural engineers",
  "Energy-efficient designs with sustainable building practices",
  "Premium quality materials sourced from trusted suppliers",
  "Comprehensive warranty and post-construction support",
  "Transparent pricing with no hidden costs",
  "Regular site inspections and quality audits",
  "Compliance with all local building codes and regulations",
];

const processSteps = [
  {
    title: "Consultation",
    description:
      "Initial meeting to understand your vision, requirements, and budget constraints.",
  },
  {
    title: "Design & Planning",
    description:
      "Architectural design, structural planning, and obtaining necessary approvals.",
  },
  {
    title: "Construction",
    description:
      "Systematic execution with regular quality checks and progress updates.",
  },
  {
    title: "Handover",
    description:
      "Final inspection, documentation, and property handover with warranty.",
  },
];

export default function ResidentialConstructionPage() {
  return (
    <ServicePageLayout
      serviceName="Residential Construction"
      serviceTagline="Building Dream Homes with Precision"
      slides={slides}
      description="Transform your vision of a perfect home into reality. We specialize in custom residential construction, from single-family homes to large gated communities, delivering exceptional quality and craftsmanship that stands the test of time. With over 25 years of experience, our team combines traditional building excellence with modern construction technologies to create homes that are not just structures, but lifetime investments."
      details={details}
      benefits={benefits}
      processSteps={processSteps}
    />
  );
}
