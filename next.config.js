/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
      "backend_uri":"http://localhost:3256/imeet-service/v1/api/",

  },
  images:{
    domains:["media.istockphoto.com"]  }

}

module.exports = nextConfig


/**
 * 
 * <React.StrictMode>
 */