const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: '彰師資管專題報告', // Navigation and Site Title
  siteTitleAlt: 'NCUE-IM', // Alternative Site title for SEO
  siteUrl: 'https://portfolio-cara.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1000.jpg', // Used for SEO and manifest
  siteDescription: 'Project Presentation',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@diaper151', // Twitter Username
  ogSiteName: '戴屏川', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
