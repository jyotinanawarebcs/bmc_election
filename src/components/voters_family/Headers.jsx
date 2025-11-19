import React from 'react';
import { ChevronLeft } from 'lucide-react';

const Header = ({ title }) => {
  return (
    <header className="header">
      <ChevronLeft className="back-icon" />
      <h1 className="header-title">{title}</h1>
    </header>
  );
};

export default Header;
