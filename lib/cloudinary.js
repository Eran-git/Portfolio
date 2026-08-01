import { v2 as cloudinary } from "cloudinary";  // import coudinary SDK

cloudinary.config({                                         // javascript object literal
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,          // i8onyoyf
    api_key: process.env.CLOUDINARY_API_KEY,                // 386855695978486
    api_secret: process.env.CLOUDINARY_API_SECRET,          // y_0GBxFLf1c9IvXtDNb3TIM4FeY
});

export default cloudinary;