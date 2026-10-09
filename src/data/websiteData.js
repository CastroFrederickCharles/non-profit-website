import { 
  Droplet, 
  BookOpen, 
  Sprout, 
  ShieldCheck, 
  Heart, 
  Target, 
  Globe 
} from 'lucide-react';

export const INITIATIVES_DATA = [
  {
    id: 1,
    title: "Clean Water Access Initiative",
    category: "Environment",
    icon: Droplet,
    image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=800",
    description: "Installing sustainable solar-powered clean water filtration systems in rural off-grid villages.",
    raised: 42000,
    goal: 50000,
    beneficiaries: "12,500 people"
  },
  {
    id: 2,
    title: "Youth Tech Literacy Program",
    category: "Education",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    description: "Providing refurbished laptops and coding bootcamps to underprivileged public school students.",
    raised: 31500,
    goal: 40000,
    beneficiaries: "850 students"
  },
  {
    id: 3,
    title: "Sustainable Agriculture Hub",
    category: "Community",
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb1475a?auto=format&fit=crop&q=80&w=800",
    description: "Empowering smallholder farmers with regenerative agriculture toolkits and drought-resistant seeds.",
    raised: 18900,
    goal: 25000,
    beneficiaries: "320 farming families"
  }
];

export const IMPACT_STATS = [
  { label: "Lives Impacted", value: 15400, prefix: "", suffix: "+" },
  { label: "Community Projects", value: 58, prefix: "", suffix: "" },
  { label: "Total Raised", value: 1.2, prefix: "$", suffix: "M+" },
  { label: "Global Volunteers", value: 1250, prefix: "", suffix: "+" }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "The clean water well built in our village changed everything. Children no longer walk miles for water and can focus on attending school regularly.",
    name: "Aminata Diallo",
    role: "Community Leader, Sub-Saharan Rural Project",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    quote: "Partnering with this foundation allowed us to scale our digital education bootcamps. Transparency and empathy are in everything they do.",
    name: "Carlos Mendoza",
    role: "Educational Partner & STEM Mentor",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    quote: "Knowing exactly where every donated dollar goes gives me complete peace of mind. Truly a model for modern non-profits.",
    name: "Elena Rostova",
    role: "Monthly Recurring Donor",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  }
];

export const MILESTONES = [
  {
    year: "2018",
    title: "The Spark of Hope",
    description: "Started as a small community initiative after witnessing severe resource inequality during a volunteer trip abroad."
  },
  {
    year: "2020",
    title: "Official Non-Profit Registration",
    description: "Incorporated 501(c)(3) status and launched our flagship clean water accessibility program."
  },
  {
    year: "2022",
    title: "Expanding to Tech & Education",
    description: "Partnered with global tech companies to bring computer literacy to over 20 underfunded school districts."
  },
  {
    year: "2025",
    title: "$1M+ Raised & 15k+ Lives Impacted",
    description: "Achieved major milestone through sustainable community partnerships and transparent donor accountability."
  }
];

export const VALUES = [
  { name: "Radical Transparency", desc: "Open financial reporting and direct tracking for every dollar donated.", icon: ShieldCheck },
  { name: "Empathy-Driven Action", desc: "Listening first to community needs before building sustainable solutions.", icon: Heart },
  { name: "Long-Term Sustainability", desc: "Creating local capacity so projects remain self-sufficient after launch.", icon: Target },
  { name: "Global Collaboration", desc: "Uniting donors, local leaders, and experts across borders.", icon: Globe }
];

