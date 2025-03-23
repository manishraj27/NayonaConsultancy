import {
  Home,
  Zap,
  Settings,
  BookOpen,
  Users,
  Mail,
  Briefcase,
  Laptop,
  Target,
  BarChart,
  Building,
  Cloud,
  Server,
  FileText,
  Video,
  Book,
  Heart,
  MessageCircle,
} from "lucide-react";

const menuItems = [
  {
    name: "Home",
    to: "/",
    icon: Home,
    description: "Return to homepage",
  },
  {
    name: "Features",
    icon: Zap,
    description: "Explore our key",
    submenu: [
      { name: "Consulting Services", to: "/features/consulting", icon: Briefcase },
      { name: "Digital Transformation", to: "/features/digital", icon: Laptop },
      { name: "Strategy Planning", to: "/features/strategy", icon: Target },
      { name: "Business Analytics", to: "/features/analytics", icon: BarChart }
    ]
  },
  {
    name: "Services",
    icon: Settings,
    description: "Professional solutions",
    submenu: [
      { name: "Enterprise Solutions", to: "/services/enterprise", icon: Building },
      { name: "Cloud Services", to: "/services/cloud", icon: Cloud },
      // { name: "IT Infrastructure", to: "/services/infrastructure", icon: Server },
      // { name: "AI Integration", to: "/services/ai", icon: Server }
    ]
  },
  {
    name: "Resources",
    icon: BookOpen,
    description: "Knowledge center",
    submenu: [
      { name: "Case Studies", to: "/resources/cases", icon: FileText },
      { name: "Blog", to: "/resources/blog", icon: Book },
    ]
  },
  {
    name: "About",
    icon: Users,
    description: "Our story",
    submenu: [
      { name: "About Us", to: "/about/team", icon: Users },
      { name: "Testimonials", to: "/about/testimonials", icon: MessageCircle }
    ]
  },
  {
    name: "Contact",
    to: "/contact",
    icon: Mail,
    description: "Get in touch",
  }
];

export default menuItems;