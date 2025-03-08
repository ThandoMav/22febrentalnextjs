import Layout from '../components/Layout';

import BannerSec from '../components/BannerSec';
//import About from '../components/About';
import Pricing from '../components/Pricing';
import Faq from '../components/Faq';
//import Work from '../components/Courses';
//import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testimonials';
//import Heroa from '../components/Heroa';
//import Herob from '../components/Herob';
//import Servicesa from '../components/Servicesa';
import BackToTop from '../components/BackToTop';
import BlogHome from '../components/BlogHomeData';
import Workflow from '../components/Workflow';
import CatsBusiness from '../components/CatsBusiness';
import CatsRental from '../components/CatsRental';
import FeaturedBusinesses from '../components/FeaturedBusinesses';
//import FeaturedDrs from '../components/FeaturedDrs';
import FeaturedAccs from '../components/FeaturedAccs';
import CtaBgImgMzb from '../components/CtaBgImgMzb';
import Post from '../models/Post';
import Rental from '../models/Rental';
import Bus from '../models/BusinessListing';
import db from '../utils/db';
import AboutMz from '../components/AboutMz';


export default function Home({posts, buses, rentals }) {
  return (
    <Layout title="Mzansiberg - Home Service listing and RSA Heritage conservation">
      {/*mzansiberg*/}
      <BannerSec />
      <Workflow />
      {/*
      <Servicesa />
      <About />
      <Work />
     */}
      <AboutMz />
      <CatsBusiness />
      <FeaturedBusinesses buses={buses} />
      <Pricing />
      <CatsRental />
      <FeaturedAccs rentals={rentals} />
      <Testimonials />
      <CtaBgImgMzb />
      <Faq />
      <BlogHome posts={posts}/>
      

      <BackToTop />
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  //const products = await Product.find().lean().limit(6);
  const buses = await Bus.find().lean().limit(6);
  const posts = await Post.find().lean().limit(6);
  const rentals = await Rental.find().lean().limit(6);
 
  return {
    props: {
     // products: products.map(db.convertDocToObj),
      buses: buses.map(db.convertDocToObj),
      rentals: rentals.map(db.convertDocToObj),
      posts: posts.map(db.convertDocToObj),
    },
  };
}

