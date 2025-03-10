import React from 'react';
import Link from 'next/link';
// import data
import { nav } from '../utils/data';

const NavMobile = ({ navMobile }) => {
  return (
    <nav
      className={`${
        navMobile ? 'min-h-screen' : 'min-h-0'
      } w-full fixed top-0 left-0 right-0 bg-neutral-500 -bottom-12 -z-10 lg:hidden overflow-hidden transition-all h-0`}
    >
      <ul className="w-full mb-12 top-0 left-0 h-full flex flex-col justify-center items-center gap-y-8">
        {nav.map((item, idx) => {
          return (
            <li key={idx}>
              <Link className="text-white text-body-md" href={item.href}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* buttons */}
      <div className="-mt-44 flex justify-center gap-x-8">
        <button className="btn btn-lg text-white">Log in</button>
        <button className="btn btn-lg btn-primary">Sign up</button>
      </div>
    </nav>
  );
};

export default NavMobile;
