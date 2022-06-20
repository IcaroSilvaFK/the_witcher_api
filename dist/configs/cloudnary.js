"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientCloudinary = void 0;
const cloudinary_1 = require("cloudinary");
const clientCloudinary = cloudinary_1.v2;
exports.clientCloudinary = clientCloudinary;
clientCloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET,
    secure: true,
});
