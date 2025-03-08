import React from 'react';
import Link from 'next/link';
// import data
import { nav } from '../utils/data';

const Nav = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex gap-x-8 text-white">
        {nav.map((item, idx) => {
          return (
            <li key={idx}>
              <Link
                href={item.href}
                className="hover:text-primary-200 transition"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
