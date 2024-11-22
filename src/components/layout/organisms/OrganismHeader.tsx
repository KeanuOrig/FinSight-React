import React, { useState } from 'react';
import AtomLogo from '@components/layout/atoms/AtomLogo';
import MoleculeNavMenu from '@components/layout/molecules/MoleculeNavMenu';
import AtomMenuButton from '@components/layout/atoms/AtomMenuButton';
import MoleculeMobileMenu from '@components/layout/molecules/MoleculeMobileMenu';

const OrganismHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <AtomLogo />
        <MoleculeNavMenu />
        <AtomMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>
      <MoleculeMobileMenu isOpen={isMenuOpen} />
    </nav>
  );
};

export default OrganismHeader;