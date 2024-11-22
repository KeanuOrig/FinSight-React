import { LinkProps } from '@tstypes/index';
import React from 'react';
import { Link } from 'react-router-dom';

const AtomNavLink: React.FC<LinkProps> = ({ to, label }) => (
  <Link to={to} className="hover:text-gray-300">
    {label}
  </Link>
);

export default AtomNavLink;
