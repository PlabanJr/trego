/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://trego.in', // Replace with your actual site URL
  generateRobotsTxt: true, // (optional) Generate a robots.txt file
  // Exclude specific paths or include additional paths if necessary
  exclude: ['/admin/*'], // Example of excluding paths
  // Additional options for customization
};
