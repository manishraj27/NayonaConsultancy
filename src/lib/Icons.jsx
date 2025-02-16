// Custom EPM service icons as SVG components
const EPMIcon = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    {children}
  </svg>
);

const Icons = {
  planning: () => (
    <EPMIcon>
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <path d="M8 10h8M8 14h8" />
    </EPMIcon>
  ),
  consolidation: () => (
    <EPMIcon>
      <path d="M12 3v18M3 12h18M7 7h10v10H7z" />
    </EPMIcon>
  ),
  reporting: () => (
    <EPMIcon>
      <path d="M4 4h16M4 8h16M4 12h16M4 16h16M4 20h16" />
    </EPMIcon>
  ),
  tax: () => (
    <EPMIcon>
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <path d="M12 12v-2M12 16h.01" />
    </EPMIcon>
  ),
  accountRec: () => (
    <EPMIcon>
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <path d="M12 8v8M8 12h8" />
    </EPMIcon>
  ),
  profitability: () => (
    <EPMIcon>
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 4 4 4-4" />
    </EPMIcon>
  ),
};

export default Icons;