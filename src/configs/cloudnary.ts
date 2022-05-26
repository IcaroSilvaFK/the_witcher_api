import { v2 as cloudinary } from "cloudinary";

const clientCloudinary = cloudinary;

clientCloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
  secure: true,
});

export { clientCloudinary };
