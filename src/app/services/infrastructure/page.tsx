// src/app/services/infrastructure/page.tsx

import ServicePageLayout from "@/components/ServicePageLayout";

const slides = [
  {
    title: "Infrastructure Development",
    description:
      "Large-scale infrastructure projects built for durability and long-term performance.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Road Construction",
    description:
      "Highway and road networks engineered for heavy traffic and longevity.",
    image:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Utility Systems",
    description:
      "Underground utilities and drainage systems built to exacting standards.",
    image:
      "https://images.unsplash.com/photo-1625147226587-da740c37b22e?auto=format&fit=crop&w=1200&q=80",
  },
];

const details = [
  {
    icon: "Ruler",
    title: "Civil Engineering",
    description:
      "Comprehensive civil works from earthmoving to final surfacing and landscaping.",
  },
  {
    icon: "Truck",
    title: "Heavy Construction",
    description:
      "Large-scale projects utilizing advanced machinery and construction techniques.",
  },
  {
    icon: "Zap",
    title: "Utility Installation",
    description:
      "Water, sewage, electrical, and telecommunications infrastructure integration.",
  },
  {
    icon: "Shield",
    title: "Quality Materials",
    description:
      "Use of high-grade concrete, steel, and materials for lasting infrastructure.",
  },
  {
    icon: "Users",
    title: "Skilled Workforce",
    description:
      "Experienced civil engineers and specialized construction crews.",
  },
  {
    icon: "TrendingUp",
    title: "Scalable Solutions",
    description:
      "Infrastructure designed to accommodate future growth and expansion.",
  },
];

const benefits = [
  "Expertise in both urban and rural infrastructure",
  "Advanced surveying and geotechnical analysis",
  "Environmental impact assessment and mitigation",
  "Traffic management during construction phases",
  "Government contract compliance and documentation",
  "Safety protocols exceeding industry standards",
  "Long-term maintenance planning and support",
  "Integration with existing infrastructure systems",
];

const processSteps = [
  {
    title: "Survey & Design",
    description:
      "Topographical surveys, soil testing, and detailed engineering design.",
  },
  {
    title: "Approvals",
    description:
      "Obtaining necessary government permits and environmental clearances.",
  },
  {
    title: "Construction",
    description:
      "Systematic execution using heavy machinery and quality control measures.",
  },
  {
    title: "Commissioning",
    description:
      "Testing, inspection, and handover with maintenance documentation.",
  },
];

export default function InfrastructurePage() {
  return (
    <ServicePageLayout
      serviceName="Infrastructure Development"
      serviceTagline="Building the Foundations of Progress"
      slides={slides}
      description="We specialize in large-scale infrastructure projects that form the backbone of modern communities. From road networks and drainage systems to utilities and industrial foundations, our infrastructure development services combine heavy civil engineering expertise with precision execution. Our projects are designed not just for today's needs but built to support decades of growth and development, meeting the highest standards of durability and performance."
      details={details}
      benefits={benefits}
      processSteps={processSteps}
    />
  );
}
