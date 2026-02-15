// src/app/services/commercial/page.tsx

import ServicePageLayout from "@/components/ServicePageLayout";

const slides = [
  {
    title: "Commercial Projects",
    description:
      "Corporate towers and mixed-use developments engineered for functionality and efficiency.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Office Spaces",
    description:
      "Modern office buildings designed for productivity and professional excellence.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Retail Complexes",
    description:
      "Strategic commercial spaces optimized for business success and customer flow.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  },
];

const details = [
  {
    icon: "Building2",
    title: "High-Rise Construction",
    description:
      "Expertise in multi-story commercial buildings with advanced structural systems.",
  },
  {
    icon: "Zap",
    title: "Fast-Track Delivery",
    description:
      "Accelerated construction schedules without compromising quality or safety.",
  },
  {
    icon: "DollarSign",
    title: "Cost Optimization",
    description:
      "Value engineering solutions that maximize ROI and minimize operational costs.",
  },
  {
    icon: "TrendingUp",
    title: "Future-Ready Design",
    description:
      "Adaptable spaces designed for business growth and technological evolution.",
  },
  {
    icon: "Users",
    title: "Tenant Experience",
    description:
      "Creating environments that attract and retain quality tenants and customers.",
  },
  {
    icon: "Shield",
    title: "Code Compliance",
    description:
      "Full adherence to commercial building codes and safety regulations.",
  },
];

const benefits = [
  "Experience with large-scale commercial developments",
  "MEP systems design and integration expertise",
  "LEED certification and green building practices",
  "Dedicated project managers and on-site supervisors",
  "Flexible construction financing options available",
  "24/7 construction monitoring and security",
  "Integration of smart building technologies",
  "Minimal disruption to surrounding businesses",
];

const processSteps = [
  {
    title: "Feasibility Study",
    description:
      "Site analysis, zoning review, and commercial viability assessment.",
  },
  {
    title: "Design Development",
    description:
      "Architectural and engineering design optimized for commercial use.",
  },
  {
    title: "Construction Execution",
    description:
      "Phased construction with quality controls and safety protocols.",
  },
  {
    title: "Commissioning",
    description:
      "System testing, certification, and building handover with documentation.",
  },
];

export default function CommercialProjectsPage() {
  return (
    <ServicePageLayout
      serviceName="Commercial Projects"
      serviceTagline="Engineering Success for Your Business"
      slides={slides}
      description="From corporate office towers to bustling retail complexes, we deliver commercial construction projects that drive business success. Our expertise spans mixed-use developments, hospitality venues, and industrial facilities. We understand that commercial projects demand speed, efficiency, and minimal disruption, which is why we employ advanced project management techniques and cutting-edge construction methodologies to deliver on time and within budget."
      details={details}
      benefits={benefits}
      processSteps={processSteps}
    />
  );
}
