import mongoose from 'mongoose';
import domPurifier from 'dompurify';
import { JSDOM } from 'jsdom';
import slug from 'mongoose-slug-generator';
const htmlPurify = domPurifier(new JSDOM().window);

//initialize slug
mongoose.plugin(slug);

const postSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, unique: true},
    category: { type: String, required: true },
    tag: { type: String, required: true },
    image1: { type: String, required: true },
    drImage: { type: String, required: true },
    image3: { type: String, required: true },
    image4: { type: String, required: true },
    image5: { type: String, required: true },
    feature1: { type: String, required: true },
    feature2: { type: String, required: true },
    feature3: { type: String, required: true },
    feature4: { type: String, required: true },
    feature5: { type: String, required: true },
    facebook: { type: String, required: true },
    instagram: { type: String, required: true },
    tiktok: { type: String, required: true },
    twitter: { type: String, required: true },
    website: { type: String, required: true },
    email: { type: String, required: true },
    contactNumber: { type: Number, required: true },
    drName: { type: String, required: true },
    province: { type: String, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
    downloadFile: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

postSchema.pre('validate', function (next) {
  //check if there is a description
  if (this.description) {
    this.description = htmlPurify.sanitize(this.description);
  }

  next();
});

const BusinessListing = mongoose.models.BusinessListing || mongoose.model('BusinessListing', postSchema);
export default BusinessListing;
