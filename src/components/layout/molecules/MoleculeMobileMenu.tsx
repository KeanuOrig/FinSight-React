import React from 'react';
import AtomNavLink from '@components/layout/atoms/AtomNavLink';

type MobileMenuProps = {
  isOpen: boolean;
}

const MoleculeMobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => (
  isOpen ? (
    <div className="md:hidden flex items-center space-x-2 text-white justify-center bg-gray-700 p-4">
      <AtomNavLink to="/" label="Home" />
      <AtomNavLink to="/about" label="About" />
      <AtomNavLink to="/services" label="Services" />
      <AtomNavLink to="/contact" label="Contact" />
    </div>
  ) : null
);

export default MoleculeMobileMenu;
