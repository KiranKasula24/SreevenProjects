// src/app/services/renovations/page.tsx

import ServicePageLayout from "@/components/ServicePageLayout";

const slides = [
  {
    title: "Renovations & Remodeling",
    description:
      "Transform existing spaces with precision planning and expert execution.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Interior Remodeling",
    description:
      "Complete interior transformations that modernize and enhance functionality.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Heritage Restoration",
    description:
      "Preserving architectural character while upgrading structural integrity.",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
  },
];

const details = [
  {
    icon: "Wrench",
    title: "Complete Remodeling",
    description:
      "Full-scale renovations from structural changes to aesthetic upgrades.",
  },
  {
    icon: "Sparkles",
    title: "Aesthetic Enhancement",
    description:
      "Modern design interventions that refresh and revitalize existing spaces.",
  },
  {
    icon: "Recycle",
    title: "Sustainable Upgrades",
    description:
      "Energy-efficient renovations that reduce environmental impact and costs.",
  },
  {
    icon: "Home",
    title: "Space Optimization",
    description:
      "Intelligent redesigns that maximize usability and flow of existing areas.",
  },
  {
    icon: "Clock",
    title: "Minimal Disruption",
    description:
      "Efficient renovation processes that allow continued occupancy when possible.",
  },
  {
    icon: "DollarSign",
    title: "Budget-Friendly Options",
    description:
      "Flexible renovation packages that deliver maximum impact within your budget.",
  },
];

const benefits = [
  "Detailed pre-renovation assessment and planning",
  "Preservation of existing structures where possible",
  "Modern electrical and plumbing system upgrades",
  "Structural reinforcement and safety improvements",
  "Interior design consultation included",
  "Minimal waste and eco-friendly disposal practices",
  "Updated to current building code standards",
  "Extended warranty on all renovation work",
];

const processSteps = [
  {
    title: "Assessment",
    description:
      "Comprehensive evaluation of existing structure and renovation possibilities.",
  },
  {
    title: "Planning",
    description:
      "Detailed renovation design with material selection and cost estimation.",
  },
  {
    title: "Execution",
    description:
      "Systematic renovation work with daily cleanup and progress documentation.",
  },
  {
    title: "Completion",
    description:
      "Final touches, quality inspection, and post-renovation support.",
  },
];

export default function RenovationsPage() {
  return (
    <ServicePageLayout
      serviceName="Renovations & Remodeling"
      serviceTagline="Revitalizing Spaces, Enhancing Lives"
      slides={slides}
      description="Breathe new life into existing structures with our comprehensive renovation and remodeling services. Whether you're updating a family home, refreshing a commercial space, or restoring a heritage property, our experienced team handles complex renovation challenges with expertise. We blend modern design sensibilities with structural know-how to transform outdated spaces into contemporary environments while preserving what makes them special."
      details={details}
      benefits={benefits}
      processSteps={processSteps}
    />
  );
}
