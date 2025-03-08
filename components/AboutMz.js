import React from 'react';
import Image from 'next/image';
//import Link from 'next/link';
import iimage from '../assets/img/about.png';
import { BsStarFill } from 'react-icons/bs';


const AboutMz = () => {
  
  return (   

<section className="wrapper !bg-[#ffffff] mx-auto px-32">
<div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
<div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] mt-[-30px] items-center">
<div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full !mx-auto mt-[30px]">
<div className="img-mask mask-1">
  <Image
      src={iimage.src}
      width={500}
      height={500}
      alt="responsive"
    ></Image>
  </div>
</div>

<div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[30px]">
<h2 className="text-[calc(1.285rem_+_0.42vw)] font-bold xl:text-[1.6rem] leading-[1.3] mb-5">UbuntuMzansi is a Marketing Hub & Digital Magazine that encapsulates heritage, faith, smart SA living, and business empowerment.</h2>
<p className="!mb-6">
   Empower South Africans with real, unfiltered stories, insights, and practical tools to live authentically in their faith, heritage, and community. We connect families with local businesses, helping them build homes, secure transport, and thrive financially while staying rooted in Ubuntu and God&apos;s wisdom. 
</p>
<div className="flex flex-wrap mx-[-15px] counter-wrapper mt-[-30px]">
<div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
<h3 className=" text-lg lg:text-xl font-semibold counter xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] !leading-none mb-2">20+</h3>
<p className="text-[0.8rem] font-medium !mb-0">Business Featured</p>
</div>

<div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
<h3 className="text-lg lg:text-xl font-semibold counter xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] !leading-none mb-2">20+</h3>
<p className="text-[0.8rem] font-medium !mb-0">Rentals</p>
</div>

<div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
<h3 className=" text-lg lg:text-xl font-semibold counter xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] !leading-none mb-2">9</h3>
<p className="text-[0.8rem] font-medium !mb-0">RSA Cultures & Provinces Covered</p>
</div>

</div>

</div>

</div>

<div className="bg-primary-200/5 p-16 flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] mt-8">
<div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[30px]">
<h3 className="text-lg lg:text-xl font-semibold">Our Skills</h3>
<p>UbuntuMzansi is South Africa&apos;s first faith-rooted, heritage-driven, and smart-living digital magazine & marketing hub.</p>
<ul className="progress-list m-0 p-0 list-none">
<li className="mb-[1rem] ">
<p className="!mb-[.25rem]">MERN Web Development</p>
<div className="progressbar line relative soft-primary bg-primary-200" data-value="100"></div>
</li>
<li className="mb-[1rem] ">
<p className="!mb-[.25rem]">Social Media Marketing</p>
<div className="progressbar line relative soft-primary" data-value="80"></div>
</li>
<li className="mb-[1rem] ">
<p className="!mb-[.25rem]">Graphic Design</p>
<div className="progressbar line relative soft-primary" data-value="85"></div>
</li>
<li className="!mb-0">
<p className="!mb-[.25rem]">SEO & Lead Gen.</p>
<div className="progressbar line relative soft-primary" data-value="75"></div>
</li>
</ul>

</div>


<div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[30px]">
<h3 className="text-lg lg:text-xl font-semibold">Why Choose us?</h3>
<p>We help South Africans make informed decisions on housing, transport and home services while keeping their roots.</p>
<ul className="pl-0 list-none bullet-bg bullet-soft-primary  !mb-0">
<li className="relative pl-6">
  <i className="absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-primary-200/2 text-[#3f78e0] rounded-[100%] top-[0.2rem]  before:align-middle before:table-cell">
     <BsStarFill className="text-primary-200"/>
  </i>
  We are for South Africans, by South Africans &ndash; No outsider narratives.
</li>
<li className="relative pl-6">
  <i className="absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-primary-200/2 text-[#3f78e0] rounded-[100%] top-[0.2rem]  before:align-middle before:table-cell">
     <BsStarFill className="text-primary-200"/>
  </i>
  We honor faith, family, and heritage &ndash; Rooted in biblical principles & Ubuntu values.
</li>
<li className="relative pl-6">
  <i className="absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-primary-200/2 text-[#3f78e0] rounded-[100%] top-[0.2rem]  before:align-middle before:table-cell">
     <BsStarFill className="text-primary-200"/>
  </i>
  We simplify decision-making &ndash; Whether it&apos;s housing, transport, or budgeting, we provide clarity.
</li>
<li className="relative pl-6">
  <i className="absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-primary-200/2 text-[#3f78e0] rounded-[100%] top-[0.2rem]  before:align-middle before:table-cell">
     <BsStarFill className="text-primary-200"/>
  </i>
  We empower local businesses &ndash; Connecting home service providers to clients through digital marketing & exposure.
</li>

</ul>
</div>


<div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[30px]">
<h3 className="text-lg lg:text-xl font-semibold">How It Works</h3>

<div className="flex flex-row mb-5">
<div>
<span className="icon btn bg-primary-200 pointer-events-none mt-1 mr-5 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]"><span class="number text-[0.9rem] table-cell text-center align-middle font-bold mx-auto my-0">1</span></span>
</div>
<div>
<h5 className="!mb-1">Search for a Home or Service</h5>
<p className="!mb-0"> Use our easy search filters to find rentals, home services, or transport info.</p>
</div>
</div>

<div className="flex flex-row mb-5">
<div>
<span className="icon btn bg-primary-200 pointer-events-none mt-1 mr-5 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]"><span class="number text-[0.9rem] table-cell text-center align-middle font-bold mx-auto my-0">2</span></span>
</div>
<div>
<h5 className="!mb-1">Compare & Verify </h5>
<p className="!mb-0">Read reviews, check listings, and compare pricing.</p>
</div>
</div>

<div className="flex flex-row">
<div>
<span className="icon btn bg-primary-200 pointer-events-none mt-1 mr-5 !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]"><span class="number text-[0.9rem] table-cell text-center align-middle font-bold mx-auto my-0">3</span></span>
</div>
<div>
<h5 className="!mb-1">Connect & Book</h5>
<p className="!mb-0">Securely contact landlords, agents, or service providers through our platform.</p>
</div>
</div>
</div>

</div>

</div>
</section>


  );
};

export default AboutMz;
