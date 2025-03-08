/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function CtaItem() {
  return (
    <section className="py-28 w-full table relative bg-banner bg-center bg-no-repeat bg-cover jarallax" data-jarallax data-speed="0.5">
        <div className="absolute inset-0 bg-slate-900/30"></div>
        <div className="container relative">
            <div className="grid grid-cols-1 text-center">
                <h3 className="mb-4 md:text-4xl text-3xl text-white font-bold">List and Automate your Lead Generation &<br/> Sale upto 30%</h3>

                <p className="text-white/80 max-w-xl mx-auto">Rentals, Businesses & Service Providers—if you don’t get quality leads within 30 days, we’ll feature your business in a premium spotlight for FREE..</p>

                <div className="mt-6">
                    <Link href={`/search`} className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><i className="mdi mdi-cart-outline"></i> Market Your Business!</Link>
                </div>
            </div>
        </div>
    </section>

  );
}
