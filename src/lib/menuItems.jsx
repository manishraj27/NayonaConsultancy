const menuItems = [
  { name: "Home", href: "/", disabled: location.pathname === "/" },
  // {
  //   name: "About Us",
  //   href: "/about",
  //   disabled: location.pathname === "/about",
  // },
  {
    name: "Services",
    href: "/services",
    disabled: location.pathname === "/services",
  },
  { name: "Blog", href: "/blog", disabled: location.pathname === "/blog" },
  {
    name: "Careers",
    href: "/careers",
    disabled: location.pathname === "/careers",
  },
  {
    name: "Contact",
    href: "/contact",
    disabled: location.pathname === "/contact",
  }
];

export default menuItems;
