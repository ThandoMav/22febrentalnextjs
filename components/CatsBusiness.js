import React from 'react';
import CategoryItem from './CategoryItemBus';

// import data
import { data } from '../utils/data';

const Banner = () => {
  // destructure banner data
  return (
    <section className="relative py-16">
      <div className="container relative mt-16 mx-auto">
        <div className="grid grid-cols-1 items-center">
          <h3 className="text-2xl leading-normal font-semibold">
            Top Home Service Categories
          </h3>
        </div>

        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 mt-8 gap-[30px]">
          {data.categoriesHomeservices.map((product) => (
            <CategoryItem key={product._id} category={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
