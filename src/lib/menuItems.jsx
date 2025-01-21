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
    href: "/",
    icon: Home,
    disabled: location.pathname === "/",
    description: "Return to homepage",
    bgColor: "from-blue-500/10 to-purple-500/10"
  },
  {
    name: "Features",
    icon: Zap,
    description: "Explore our key offerings",
    bgColor: "from-purple-500/10 to-pink-500/10",
    submenu: [
      { name: "Consulting Services", href: "/features/consulting", icon: Briefcase },
      { name: "Digital Transformation", href: "/features/digital", icon: Laptop },
      { name: "Strategy Planning", href: "/features/strategy", icon: Target },
      { name: "Business Analytics", href: "/features/analytics", icon: BarChart }
    ]
  },
  {
    name: "Services",
    icon: Settings,
    description: "Professional solutions",
    bgColor: "from-pink-500/10 to-orange-500/10",
    submenu: [
      { name: "Enterprise Solutions", href: "/services/enterprise", icon: Building },
      { name: "Cloud Services", href: "/services/cloud", icon: Cloud },
      { name: "IT Infrastructure", href: "/services/infrastructure", icon: Server },
      { name: "AI Integration", href: "/services/ai", icon: Server }
    ]
  },
  {
    name: "Resources",
    icon: BookOpen,
    description: "Knowledge center",
    bgColor: "from-orange-500/10 to-green-500/10",
    submenu: [
      { name: "Case Studies", href: "/resources/cases", icon: FileText },
      { name: "Whitepapers", href: "/resources/whitepapers", icon: Book },
      { name: "Webinars", href: "/resources/webinars", icon: Video }
    ]
  },
  {
    name: "About",
    icon: Users,
    description: "Our story",
    bgColor: "from-green-500/10 to-teal-500/10",
    submenu: [
      { name: "Our Team", href: "/about/team", icon: Users },
      { name: "Company Culture", href: "/about/culture", icon: Heart },
      { name: "Testimonials", href: "/about/testimonials", icon: MessageCircle }
    ]
  },
  { 
    name: "Contact",
    href: "/contact",
    icon: Mail,
    disabled: location.pathname === "/contact",
    description: "Get in touch",
    bgColor: "from-teal-500/10 to-blue-500/10"
  }
];

export default menuItems;
