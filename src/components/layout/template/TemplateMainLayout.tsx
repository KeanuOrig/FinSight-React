import React from 'react';
import OrganismHeader from '@components/layout/organisms/OrganismHeader';
import OrganismFooter from '@components/layout/organisms/OrganismFooter';

interface MainLayoutProps {
  children: React.ReactNode;
}

const TemplateMainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <OrganismHeader />
    <main className="flex-1 container mx-auto p-4">{children}</main>
    <OrganismFooter />
  </div>
);

export default TemplateMainLayout;
