import Layout from '../components/Layout';
import BannerSec from '../components/BannerSec';
import Pricing from '../components/Pricing';
import Faq from '../components/Faq';
import Testimonials from '../components/Testimonials';
import BackToTop from '../components/BackToTop';
import BlogHome from '../components/BlogHomeData';
import Workflow from '../components/Workflow';
import CatsRental from '../components/CatsRental';
import FeaturedBusinesses from '../components/FeaturedBusinesses';
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
      <AboutMz />
      <CatsRental />
      <FeaturedBusinesses rentals={rentals} />
      <Pricing />
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

