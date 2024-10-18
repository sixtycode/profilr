module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/api/portraits/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "pagedone.io",
        port: "",
        pathname: "/asset/uploads/**",
        search: "",
      },
    ],
  },
};
