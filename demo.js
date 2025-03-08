import Layout from '../components/Layout';

import BannerSec from '../components/BannerSec';
import About from '../components/About';
import Pricing from '../components/Pricing';
import Faq from '../components/Faq';
import Work from '../components/Courses';
import Join from '../components/Join';
import Testimonials from '../components/Testimonials';
import Servicesa from '../components/Servicesa';
import BackToTop from '../components/BackToTop';
//import Reservation from '../components/Reservation';
//import LawBanner from '../components/LawBanner';
import BlogHome from '../components/BlogHomeData';
import Workflow from '../components/Workflow';
import CatsDrs from '../components/CatsDrs';
import FeaturedDrs from '../components/FeaturedDrs';
import Post from '../models/Post';
//import Product from '../models/Product';
import Dr from '../models/BusinessListing';

export default function Home({posts, drs, categories }) {
  return (
    <Layout title="Mzansi Medical Web Agency">
      {/*mmwa*/}
      <BannerSec />
      <Workflow />
      <Servicesa />
      <About />
      <CatsDrs posts={categories} />
      <FeaturedDrs drs={drs} />
      <Pricing />
      <Testimonials />
      <Join />
      <Faq />
      <BlogHome posts={posts} />
      <BackToTop />
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  //const products = await Product.find().lean().limit(6);
  const drs = await Dr.find().lean().limit(6);
  const posts = await Post.find().lean().limit(6);
  const categories = await Dr.find().distinct('category');
  
  return {
    props: {
     // products: products.map(db.convertDocToObj),
      drs: drs.map(db.convertDocToObj),
      categories: categories.map(db.convertDocToObj),
      posts: posts.map(db.convertDocToObj),
    },
  };
}
