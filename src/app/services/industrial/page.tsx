// src/app/services/industrial/page.tsx

import ServicePageLayout from "@/components/ServicePageLayout";

const slides = [
  {
    title: "Industrial Construction",
    description:
      "Heavy-duty industrial facilities engineered for operational efficiency and safety.",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Manufacturing Plants",
    description:
      "Purpose-built facilities optimized for production workflows and equipment integration.",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Warehouses & Distribution",
    description:
      "Large-scale storage and logistics facilities with advanced material handling systems.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
  },
];

const details = [
  {
    icon: "Building2",
    title: "Heavy Industrial",
    description:
      "Steel structures, factories, and processing plants built to withstand heavy operations.",
  },
  {
    icon: "Truck",
    title: "Warehouse Solutions",
    description:
      "High-bay warehouses with efficient logistics layouts and loading systems.",
  },
  {
    icon: "Zap",
    title: "Power & Utilities",
    description:
      "Electrical infrastructure and utility systems for industrial operations.",
  },
  {
    icon: "Shield",
    title: "Safety Compliance",
    description:
      "Full adherence to industrial safety standards and environmental regulations.",
  },
  {
    icon: "Ruler",
    title: "Custom Engineering",
    description:
      "Specialized designs for unique industrial processes and equipment requirements.",
  },
  {
    icon: "TrendingUp",
    title: "Scalable Design",
    description:
      "Facilities designed for future expansion and production capacity increases.",
  },
];

const benefits = [
  "Expertise in pre-engineered buildings (PEB) and steel structures",
  "Heavy foundation design for machinery and equipment",
  "Crane runway systems and material handling integration",
  "Industrial-grade electrical and HVAC systems",
  "Fire protection and safety systems installation",
  "Environmental compliance and pollution control",
  "Fast-track construction with minimal downtime",
  "Turn-key solutions from design to commissioning",
];

const processSteps = [
  {
    title: "Requirement Analysis",
    description:
      "Understanding production needs, equipment specifications, and operational workflows.",
  },
  {
    title: "Engineering Design",
    description:
      "Structural and MEP engineering tailored for industrial requirements.",
  },
  {
    title: "Construction",
    description:
      "Systematic execution with safety protocols and quality assurance.",
  },
  {
    title: "Commissioning",
    description:
      "Equipment installation, testing, and operational handover with documentation.",
  },
];

export default function IndustrialConstructionPage() {
  return (
    <ServicePageLayout
      serviceName="Industrial Construction"
      serviceTagline="Engineering Facilities for Production Excellence"
      slides={slides}
      description="Build world-class industrial facilities that drive operational efficiency and productivity. Our industrial construction services encompass manufacturing plants, warehouses, processing facilities, and specialized industrial structures. With expertise in heavy construction, steel fabrication, and industrial engineering, we deliver robust facilities designed to support demanding industrial operations while meeting stringent safety and environmental standards."
      details={details}
      benefits={benefits}
      processSteps={processSteps}
    />
  );
}
