/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
//import Image from 'next/image';

export default function ProductItem({ category }) {
  return (

    <div className="group relative overflow-hidden hover:shadow-lg hover:dark:shadow-gray-800 rounded-md duration-500 p-6 text-center">
        <Link  href={`/search-best-rentals?category=${category.slug}`} className="font-semibold hover:text-indigo-600 text-lg">{category.name}</Link>
    </div>

  );
}
