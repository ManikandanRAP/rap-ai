/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onClientEntry = () => {
  window.addEventListener('load', pageload);
  function pageload() {
    setTimeout(function() {
      document.getElementById('___gatsby').classList.add('page__loaded');
    }, 3000);
  }
};
