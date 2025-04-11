import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center space-x-2 text-sm">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight className="w-4 h-4 text-secondary-300" />}
          {index === items.length - 1 ? (
            <span className="text-primary-300">{item.label}</span>
          ) : (
            <Link
              to={item.path}
              className="text-secondary-300 hover:text-primary-300 transition-colors"
            >
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

export default Breadcrumb;