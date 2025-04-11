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
  File,
  User2Icon,
  UserCog2Icon,
  Users2,
  UsersRoundIcon,
  Building2,
} from "lucide-react";

const menuItems = [
  {
    name: "Home",
    to: "/",
    icon: Home,
    description: "Return to homepage",
  },
  
  // {
  //   name: "Features",
  //   icon: Zap,
  //   description: "Explore our key",
  //   submenu: [
  //     { name: "Consulting Services", to: "/features/consulting", icon: Briefcase },
  //     { name: "Digital Transformation", to: "/features/digital", icon: Laptop },
  //     { name: "Strategy Planning", to: "/features/strategy", icon: Target },
  //     { name: "Business Analytics", to: "/features/analytics", icon: BarChart }
  //   ]
  // },
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
    name: "Careers",
    icon: Briefcase,
    description: "Explore our openings",
    submenu: [
      { name: "All Jobs", to: "/careers", icon: Briefcase },
      { name: "Job Search", to: "/careers/search", icon: Target },
      //{ name: "Apply Now", to: "/careers/apply", icon: Heart }
    ]
  },
  {
    name: "Resources",
    icon: BookOpen,
    description: "Knowledge center",
    submenu: [
      { name: "Blog", to: "/resources/blogs", icon: Book },
      { name: "Case Studies", to: "/resources/cases", icon: FileText },
    ]
  },
  {
    name: "About",
    icon: Users,
    description: "Our story",
    submenu: [
      { name: "About Us", to: "/about/us", icon: Users },
      { name: "Our Team", to: "/about/team", icon: Building2 },
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