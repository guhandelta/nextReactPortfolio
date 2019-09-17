const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(withSass()); // Informing Next.js framework that both CSS and SCSS are used