module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6i86");


/***/ }),

/***/ "6i86":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_src_theme_agency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("yxf+");
/* harmony import */ var common_src_assets_css_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("H4oa");
/* harmony import */ var common_src_assets_css_icon_example_page_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("iz9A");
/* harmony import */ var common_src_assets_css_icon_example_page_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_css_icon_example_page_css__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: common_src_theme_agency__WEBPACK_IMPORTED_MODULE_2__[/* agencyTheme */ "a"]
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(common_src_assets_css_style__WEBPACK_IMPORTED_MODULE_3__[/* ResetCSS */ "a"], null), __jsx("div", {
    id: "flaticonExample"
  }, __jsx("header", null, __jsx("a", {
    href: "https://www.flaticon.com",
    target: "_blank",
    className: "logo"
  }, __jsx("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 560.875 102.036"
  }, __jsx("defs", null), __jsx("g", null, __jsx("g", {
    className: "letters"
  }, __jsx("path", {
    fill: "#ffffff",
    d: "M141.596,29.675c0-3.777,2.985-6.767,6.764-6.767h34.438c3.426,0,6.15,2.728,6.15,6.15 c0,3.43-2.724,6.149-6.15,6.149h-27.674v13.091h23.719c3.429,0,6.151,2.724,6.151,6.15c0,3.43-2.723,6.149-6.151,6.149h-23.719 v17.574c0,3.773-2.986,6.761-6.764,6.761c-3.779,0-6.764-2.989-6.764-6.761V29.675z"
  }), __jsx("path", {
    fill: "#ffffff",
    d: "M193.844,29.149c0-3.781,2.985-6.767,6.764-6.767c3.776,0,6.763,2.985,6.763,6.767v42.957h25.039 c3.426,0,6.149,2.726,6.149,6.153c0,3.425-2.723,6.15-6.149,6.15h-31.802c-3.779,0-6.764-2.986-6.764-6.768V29.149z"
  }), __jsx("path", {
    fill: "#ffffff",
    d: "M241.891,75.71l21.438-48.407c1.492-3.341,4.215-5.357,7.906-5.357h0.792 c3.686,0,6.323,2.017,7.815,5.357l21.439,48.407c0.436,0.967,0.701,1.845,0.701,2.723c0,3.602-2.809,6.501-6.414,6.501 c-3.161,0-5.269-1.845-6.499-4.655l-4.132-9.661h-27.059l-4.301,10.102c-1.144,2.631-3.426,4.214-6.237,4.214 c-3.517,0-6.24-2.81-6.24-6.325C241.1,77.64,241.451,76.677,241.891,75.71z M279.932,58.666l-8.521-20.297l-8.526,20.297H279.932 z"
  }), __jsx("path", {
    fill: "#ffffff",
    d: "M314.864,35.387H301.86c-3.429,0-6.239-2.813-6.239-6.238c0-3.429,2.811-6.24,6.239-6.24h39.533 c3.426,0,6.237,2.811,6.237,6.24c0,3.425-2.811,6.238-6.237,6.238h-13.001v42.785c0,3.773-2.99,6.761-6.764,6.761 c-3.779,0-6.764-2.989-6.764-6.761V35.387z"
  }), __jsx("path", {
    fill: "#A9FD00",
    d: "M352.615,29.149c0-3.781,2.985-6.767,6.767-6.767c3.774,0,6.761,2.985,6.761,6.767v49.024 c0,3.773-2.987,6.761-6.761,6.761c-3.781,0-6.767-2.989-6.767-6.761V29.149z"
  }), __jsx("path", {
    fill: "#A9FD00",
    d: "M374.132,53.836v-0.179c0-17.481,13.178-31.801,32.065-31.801c9.22,0,15.459,2.458,20.557,6.238 c1.402,1.054,2.637,2.985,2.637,5.357c0,3.692-2.985,6.59-6.681,6.59c-1.845,0-3.071-0.702-4.044-1.319 c-3.776-2.813-7.729-4.393-12.562-4.393c-10.364,0-17.831,8.611-17.831,19.154v0.173c0,10.542,7.291,19.329,17.831,19.329 c5.715,0,9.492-1.756,13.359-4.834c1.049-0.874,2.458-1.491,4.039-1.491c3.429,0,6.325,2.813,6.325,6.236 c0,2.106-1.056,3.78-2.282,4.834c-5.539,4.834-12.036,7.733-21.878,7.733C387.572,85.464,374.132,71.493,374.132,53.836z"
  }), __jsx("path", {
    fill: "#A9FD00",
    d: "M433.009,53.836v-0.179c0-17.481,13.79-31.801,32.766-31.801c18.981,0,32.592,14.143,32.592,31.628v0.173 c0,17.483-13.785,31.807-32.769,31.807C446.625,85.464,433.009,71.32,433.009,53.836z M484.224,53.836v-0.179 c0-10.539-7.725-19.326-18.626-19.326c-10.893,0-18.449,8.611-18.449,19.154v0.173c0,10.542,7.73,19.329,18.626,19.329 C476.676,72.986,484.224,64.378,484.224,53.836z"
  }), __jsx("path", {
    fill: "#A9FD00",
    d: "M506.233,29.321c0-3.774,2.99-6.763,6.767-6.763h1.401c3.252,0,5.183,1.583,7.029,3.953l26.093,34.265 V29.059c0-3.692,2.99-6.677,6.681-6.677c3.683,0,6.671,2.985,6.671,6.677v48.934c0,3.78-2.987,6.765-6.764,6.765h-0.436 c-3.257,0-5.188-1.581-7.034-3.953l-27.056-35.492v32.944c0,3.687-2.985,6.676-6.678,6.676c-3.683,0-6.673-2.989-6.673-6.676 V29.321z"
  })), __jsx("g", {
    className: "insignia"
  }, __jsx("path", {
    fill: "#ffffff",
    d: "M48.372,56.137h12.517l11.156-18.537H37.186L25.688,18.539h57.825L94.668,0H9.271 C5.925,0,2.842,1.801,1.198,4.716c-1.644,2.907-1.593,6.482,0.134,9.343l50.38,83.501c1.678,2.781,4.689,4.476,7.938,4.476 c3.246,0,6.257-1.695,7.935-4.476l2.898-4.804L48.372,56.137z"
  }), __jsx("g", {
    className: "i"
  }, __jsx("path", {
    fill: "#A9FD00",
    d: "M93.575,18.539h0.031v0.004l21.652,0.004l2.705-4.488c1.727-2.861,1.778-6.436,0.133-9.343 C116.454,1.801,113.371,0,110.026,0h-5.294L93.575,18.539z"
  }), __jsx("polygon", {
    fill: "#A9FD00",
    points: "88.291,27.356 64.725,66.486 75.519,84.404 109.942,27.356"
  }))))))), __jsx("section", {
    id: "glyphs"
  }, __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-flask"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-flask"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "001-flask",
    href: "http://www.freepik.com"
  }, "Freepik"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-pencil-case"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-pencil-case"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "002-pencil-case",
    href: "http://www.freepik.com"
  }, "Freepik"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-ruler"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-ruler"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "003-ruler",
    href: "http://www.freepik.com"
  }, "Freepik"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-startup"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-startup"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "004-startup",
    href: "http://www.freepik.com"
  }, "Freepik"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-creative"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-creative"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "005-creative",
    href: "https://www.flaticon.com/authors/good-ware"
  }, "Good Ware"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-briefing"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-briefing"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "006-briefing",
    href: "http://www.freepik.com"
  }, "Freepik"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-magnifying-glass"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-magnifying-glass"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "007-magnifying-glass",
    href: "https://www.flaticon.com/authors/gregor-cresnar"
  }, "Gregor Cresnar"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-user"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-user"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "008-user",
    href: "http://www.freepik.com"
  }, "Freepik"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-quotes"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-quotes"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "009-quotes",
    href: "https://www.flaticon.com/authors/icomoon"
  }, "Icomoon"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-next"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-next"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "010-next",
    href: "https://www.flaticon.com/authors/lyolya"
  }, "Lyolya"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-left-arrow"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-left-arrow"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "011-left-arrow",
    href: "https://www.flaticon.com/authors/lyolya"
  }, "Lyolya"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-plus-symbol"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-plus-symbol"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "012-plus-symbol",
    href: "https://www.flaticon.com/authors/lyolya"
  }, "Lyolya"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-minus-symbol"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-minus-symbol"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "013-minus-symbol",
    href: "https://www.flaticon.com/authors/lyolya"
  }, "Lyolya"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-trophy"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-trophy"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "014-trophy",
    href: "https://www.flaticon.com/authors/dinosoftlabs"
  }, "DinosoftLabs"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-conversation"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-conversation"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "015-conversation",
    href: "http://www.freepik.com"
  }, "Freepik"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-atom"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-atom"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "016-atom",
    href: "https://www.flaticon.com/authors/kiranshastry"
  }, "Kiranshastry"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-link"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-link"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "017-link",
    href: "https://www.flaticon.com/authors/smashicons"
  }, "Smashicons"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-battery"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-battery"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "018-battery",
    href: "https://www.flaticon.com/authors/smashicons"
  }, "Smashicons"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-stopwatch"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-stopwatch"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "019-stopwatch",
    href: "https://www.flaticon.com/authors/smashicons"
  }, "Smashicons"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-stopwatch-1"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-stopwatch-1"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "020-stopwatch-1",
    href: "https://www.flaticon.com/authors/smashicons"
  }, "Smashicons"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-objective"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-objective"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "021-objective",
    href: "https://www.flaticon.com/authors/good-ware"
  }, "Good Ware"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-facebook-logo"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-facebook-logo"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "022-facebook-logo",
    href: "http://www.freepik.com"
  }, "Freepik"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-twitter-logo-silhouette"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-twitter-logo-silhouette"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "023-twitter-logo-silhouette",
    href: "https://www.flaticon.com/authors/elegant-themes"
  }, "Elegant Themes"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-instagram"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-instagram"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "024-instagram",
    href: "http://www.freepik.com"
  }, "Freepik"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-dribble-logo"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-dribble-logo"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "025-dribble-logo",
    href: "https://www.flaticon.com/authors/daniel-bruce"
  }, "Daniel Bruce"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-tumblr-logo"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-tumblr-logo"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "026-tumblr-logo",
    href: "https://www.flaticon.com/authors/dave-gandy"
  }, "Dave Gandy"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-youtube"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-youtube"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "027-youtube",
    href: "https://www.flaticon.com/authors/pixel-perfect"
  }, "Pixel perfect"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-google-plus"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-google-plus"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "028-google-plus",
    href: "https://www.flaticon.com/authors/hanan"
  }, "Hanan"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-blockchain"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-blockchain"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "029-blockchain",
    href: "https://www.flaticon.com/authors/srip"
  }, "srip"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-money-bag"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-money-bag"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "030-money-bag",
    href: "https://www.flaticon.com/authors/gregor-cresnar"
  }, "Gregor Cresnar"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-wallet"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-wallet"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "031-wallet",
    href: "https://www.flaticon.com/authors/epiccoders"
  }, "EpicCoders"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-security"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-security"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "032-security",
    href: "http://www.freepik.com"
  }, "Freepik"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-bitcoin"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-bitcoin"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "033-bitcoin",
    href: "https://www.flaticon.com/authors/srip"
  }, "srip"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-blockchain-1"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-blockchain-1"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "034-blockchain-1",
    href: "https://www.flaticon.com/authors/nikita-golubev"
  }, "Nikita Golubev"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-annonymous"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-annonymous"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "035-annonymous",
    href: "http://www.freepik.com"
  }, "Freepik"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-group"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-group"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "036-group",
    href: "https://www.flaticon.com/authors/prosymbols"
  }, "Prosymbols"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-prototype"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-prototype"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "037-prototype",
    href: "http://www.freepik.com"
  }, "Freepik"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-code"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-code"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "038-code",
    href: "https://www.flaticon.com/authors/dave-gandy"
  }, "Dave Gandy"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-vectors"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-vectors"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "039-vectors",
    href: "http://www.freepik.com"
  }, "Freepik"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-export"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-export"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "040-export",
    href: "https://www.flaticon.com/authors/gregor-cresnar"
  }, "Gregor Cresnar"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-hourglass"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-hourglass"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "041-hourglass",
    href: "https://www.flaticon.com/authors/smashicons"
  }, "Smashicons"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-trophy-1"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-trophy-1"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "042-trophy-1",
    href: "http://www.freepik.com"
  }, "Freepik"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-upload"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-upload"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "043-upload",
    href: "https://www.flaticon.com/authors/gregor-cresnar"
  }, "Gregor Cresnar"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-settings"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-settings"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "044-settings",
    href: "https://www.flaticon.com/authors/gregor-cresnar"
  }, "Gregor Cresnar"))), __jsx("div", {
    className: "glyph"
  }, __jsx("div", {
    className: "glyph-icon flaticon-strategy"
  }), __jsx("div", {
    className: "class-name"
  }, ".flaticon-strategy"), __jsx("div", {
    className: "author-name"
  }, "Author:", __jsx("a", {
    "data-file": "045-strategy",
    href: "http://www.freepik.com"
  }, "Freepik")))), __jsx("section", {
    className: "iconsuse"
  }, __jsx("div", null, __jsx("div", {
    className: "title"
  }, "Examples:"), __jsx("div", {
    className: "image"
  }, __jsx("p", null, __jsx("i", {
    className: "glyph-icon flaticon-flask"
  }), __jsx("span", null, "<i className=\"flaticon-flask\"></i>"))), __jsx("div", {
    className: "image"
  }, __jsx("p", null, __jsx("i", {
    className: "glyph-icon flaticon-pencil-case"
  }), __jsx("span", null, "<i className=\"flaticon-pencil-case\"></i>"))), __jsx("div", {
    className: "image"
  }, __jsx("p", null, __jsx("i", {
    className: "glyph-icon flaticon-ruler"
  }), __jsx("span", null, "<i className=\"flaticon-ruler\"></i>"))), __jsx("div", {
    className: "image"
  }, __jsx("p", null, __jsx("i", {
    className: "glyph-icon flaticon-startup"
  }), __jsx("span", null, "<i className=\"flaticon-startup\"></i>"))))))));
});

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "H4oa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetCSS; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _flaticon_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mXe9");
/* harmony import */ var _flaticon_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_flaticon_css__WEBPACK_IMPORTED_MODULE_1__);


const ResetCSS = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  ::selection {
    background: #333333;
    color: #ffffff;
  }

  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *:focus {
    outline: none;
  }

  html,
  html a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  dl,
  th,
  dt,
  input,
  textarea,
  span,
  div {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  .reuseModalHolder {
    padding: 0 !important;
    &.demo_switcher_modal {
      border: 0 !important;
      background-color: rgba(16, 30, 77, 0.9) !important;
      .innerRndComponent {
        border-radius: 8px !important;
      }
    }
  }

  button.modalCloseBtn {
    position: fixed !important;
    z-index: 999991 !important;
    background-color: transparent !important;
    top: 10px !important;
    right: 10px !important;
    min-width: 34px !important;
    min-height: 34px !important;
    padding: 0 !important;
    span.btn-icon {
      font-size: 22px !important;
      transform: rotate(45deg) !important;
    }

    &.alt {
      border-radius: 50% !important;
      z-index: 999999 !important;
      padding: 0 !important;
      transition: all 0.3s ease !important;
      top: 25px !important;
      right: 30px !important;
      min-width: 40px !important;
      min-height: 40px !important;

      span.btn-icon {
        font-size: 20px !important;
      }

      &:hover {
        opacity: 0.88 !important;
      }
    }
  }
`;

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "iz9A":
/***/ (function(module, exports) {



/***/ }),

/***/ "mXe9":
/***/ (function(module, exports) {



/***/ }),

/***/ "yxf+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/theme/agency/colors.js
const colors = {
  transparent: 'transparent',
  labelColor: '#767676',
  lightBorder: '#f1f4f6',
  inactiveField: '#f2f2f2',
  inactiveButton: '#b7dbdd',
  inactiveIcon: '#EBEBEB',
  primaryHover: '#006b70',
  secondary: '#ff5b60',
  secondaryHover: '#FF282F',
  yellow: '#fdb32a',
  yellowHover: '#F29E02',
  borderColor: '#dadada',
  black: '#000000',
  white: '#ffffff',
  primary: '#10ac84',
  headingColor: '#0f2137',
  quoteText: '#343d48',
  textColor: 'rgba(52, 61, 72, 0.8)',
  linkColor: '#2b9eff'
};
/* harmony default export */ var agency_colors = (colors);
// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/theme/agency/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return agencyTheme; });

const agencyTheme = {
  breakpoints: [480, 768, 990, 1220],
  space: [0, 5, 10, 15, 20, 25, 30, 40, 56, 71, 91],
  fontSizes: [10, 12, 14, 15, 16, 20, 24, 36, 48, 55, 60, 81],
  fontWeights: [300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em'
  },
  fonts: {
    roboto: '"Roboto", sans-serif'
  },
  borders: [0, '1px solid', '2px solid', '4px solid'],
  radius: [0, 3, 5, 10, 15, 20, 25, 50, 60, '50%'],
  colors: agency_colors,
  colorStyles: {
    primary: {
      color: agency_colors.primary,
      borderColor: agency_colors.primary,
      '&:hover': {
        color: agency_colors.primaryHover,
        borderColor: agency_colors.primaryHover
      }
    },
    secondary: {
      color: agency_colors.secondary,
      borderColor: agency_colors.secondary,
      '&:hover': {
        color: agency_colors.secondaryHover,
        borderColor: agency_colors.secondaryHover
      }
    },
    warning: {
      color: agency_colors.yellow,
      borderColor: agency_colors.yellow,
      '&:hover': {
        color: agency_colors.yellowHover,
        borderColor: agency_colors.yellowHover
      }
    },
    error: {
      color: agency_colors.secondaryHover,
      borderColor: agency_colors.secondaryHover,
      '&:hover': {
        color: agency_colors.secondary,
        borderColor: agency_colors.secondary
      }
    },
    primaryWithBg: {
      color: agency_colors.white,
      backgroundColor: agency_colors.primary,
      borderColor: agency_colors.primary,
      '&:hover': {
        backgroundColor: agency_colors.primaryHover,
        borderColor: agency_colors.primaryHover
      }
    },
    secondaryWithBg: {
      color: agency_colors.white,
      backgroundColor: agency_colors.secondary,
      borderColor: agency_colors.secondary,
      '&:hover': {
        backgroundColor: agency_colors.secondaryHover,
        borderColor: agency_colors.secondaryHover
      }
    },
    warningWithBg: {
      color: agency_colors.white,
      backgroundColor: agency_colors.yellow,
      borderColor: agency_colors.yellow,
      '&:hover': {
        backgroundColor: agency_colors.yellowHover,
        borderColor: agency_colors.yellowHover
      }
    },
    errorWithBg: {
      color: agency_colors.white,
      backgroundColor: agency_colors.secondaryHover,
      borderColor: agency_colors.secondaryHover,
      '&:hover': {
        backgroundColor: agency_colors.secondary,
        borderColor: agency_colors.secondary
      }
    }
  },
  buttonStyles: {
    textButton: {
      border: 0,
      color: agency_colors.primary,
      padding: 0,
      height: 'auto',
      backgroundColor: `${agency_colors.transparent}`
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      backgroundColor: agency_colors.transparent
    },
    fab: {
      border: '0',
      width: '40px',
      height: '40px',
      padding: 0,
      borderRadius: '50%',
      justifyContent: 'center',
      'span.btn-icon': {
        paddingLeft: 0
      }
    },
    extendedFab: {
      border: '0',
      minWidth: '50px',
      height: '40px',
      borderRadius: '50px',
      justifyContent: 'center'
    }
  }
};

/***/ })

/******/ });