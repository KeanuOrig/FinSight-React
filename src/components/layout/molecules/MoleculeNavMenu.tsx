import React from 'react';
import AtomNavLink from '@components/layout/atoms/AtomNavLink';

const MoleculeNavMenu: React.FC = () => (
  <div className="hidden md:flex space-x-4">
    <AtomNavLink to="/" label="Home" />
    <AtomNavLink to="/about" label="About" />
    <AtomNavLink to="/services" label="Services" />
    <AtomNavLink to="/contact" label="Contact" />
  </div>
);

export default MoleculeNavMenu;
