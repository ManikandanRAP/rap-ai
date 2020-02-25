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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+LCl":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/illustration2-f5858e8e1dd02c0abe745e583e51e746.png";

/***/ }),

/***/ "+Q8Q":
/***/ (function(module, exports) {

module.exports = require("react-scrollspy");

/***/ }),

/***/ "/6NP":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAABuCAMAAAAuy6zWAAABF1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////jvJXZAAAAXXRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW1ynEJ2qAAAJi0lEQVRo3u1a23bcug4DIE3O//9uxiL2AynZnnjaTC4vZ29nNSudNoZJiSAIGfjv+n+8+DO/5V9H5eFPAfpFYH4BkwDB9auurxdw+RVQsv4kpmG7kH8FlQAJinmBiRh2vALbX84wSUqUqESNCIbh4Kdj7S+GSoCS1KRGEXBEjBEDQeOzuK/HKkqt9dZao4CI2Ma2ASZ+K8OZ3tZ777fWGmmPcd+I3FC/kmECINV6v91ut96b6Bh3CXYEf21dmYvab7e3t9utiY6tCY4YegG2v4QJimqt9/729r+3W2uMuBMRm8QXirC/tH9FqrXebrfb29vbWxdjENE3ib+BytpJranlur693XqDN4/WXov006gEQYqttZ7XrffexYgmvUzm/YVAs1B77721JkmSQcAG7FeaTv8cJljs0HpvvWV8DjjGiIgI+5Wm0z+Z3Anaeu+tibAHER7bdt+2bcSPssSeXKmptd56EycoPLb3+30bY0T8GOrEZGHmJcGxwYOMsb2/v9/vCfojGZ4dXNpB1STCMexBIsZ2f39/37bXYPtfF5Q7ppokEQGHRuZ5u9/f79sYryT4OepaUKpN0NlS7XwgI8bY7vcK9dvreqgWJR+1pqS9lchs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"

/***/ }),

/***/ "/Q04":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return themed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return base; });
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** this is our Base Component every components must be Extend it */

const themed = key => props => props.theme[key];
const base = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["compose"])(() => ({
  boxSizing: 'border-box'
}), styled_system__WEBPACK_IMPORTED_MODULE_0__["space"], styled_system__WEBPACK_IMPORTED_MODULE_0__["width"], styled_system__WEBPACK_IMPORTED_MODULE_0__["minWidth"], styled_system__WEBPACK_IMPORTED_MODULE_0__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_0__["height"], styled_system__WEBPACK_IMPORTED_MODULE_0__["minHeight"], styled_system__WEBPACK_IMPORTED_MODULE_0__["maxHeight"], styled_system__WEBPACK_IMPORTED_MODULE_0__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_0__["color"], styled_system__WEBPACK_IMPORTED_MODULE_0__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_0__["order"], styled_system__WEBPACK_IMPORTED_MODULE_0__["alignSelf"], styled_system__WEBPACK_IMPORTED_MODULE_0__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_0__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_0__["display"]);
base.propTypes = _objectSpread({}, styled_system__WEBPACK_IMPORTED_MODULE_0__["display"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_0__["space"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_0__["borders"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_0__["borderColor"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_0__["width"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_0__["height"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_0__["fontSize"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_0__["color"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_0__["flex"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_0__["order"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_0__["alignSelf"].propTypes);

/***/ }),

/***/ "/idJ":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/starO");

/***/ }),

/***/ "0Wpt":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/get-start-9409b393bfa0102dde20b5ca8a4eb53a.png";

/***/ }),

/***/ "1cWV":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/feather/search");

/***/ }),

/***/ "2MIm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("lpv4");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("7xIC");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "2muP":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/entypo/thinDown");

/***/ }),

/***/ "45mK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "4Af6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/Q04");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('p').withConfig({
  displayName: "Text__TextWrapper",
  componentId: "sc-49k381-0"
})(_base__WEBPACK_IMPORTED_MODULE_3__[/* base */ "a"], styled_system__WEBPACK_IMPORTED_MODULE_2__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_2__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_2__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_3__[/* themed */ "b"])('Text'));

const Text = (_ref) => {
  let {
    content
  } = _ref,
      props = _objectWithoutProperties(_ref, ["content"]);

  return __jsx(TextWrapper, props, content);
};

/* harmony default export */ __webpack_exports__["a"] = (Text);
Text.defaultProps = {
  as: 'p',
  mt: 0,
  mb: '1rem'
};

/***/ }),

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "4m+G":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAoCAMAAABKKxPSAAABF1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////jvJXZAAAAXXRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVdYWlxdXl9cHjTjAAACRUlEQVQ4y61U0XbrMAhDgJ1k3f9/6toYg+5D0yZ32+P8FJ+jCJCFRP724NvlvFP4Ow6igB6fJIs8kX7CoGZmAEUgrJyZJ+UFp60tzfX5T83Yd8mfOMD79rE2FQoUFXdlFfiDT225fX50VFHNuFvNyN/6s7Z+3Dpz0pqL135X+YmDQL0vjYM0b1KuV830lEuEgAJCASCs4i98wspMiqoKIMyZ+at+rKoi4KSaJqsusLOuAEKKPEsLRQDgBx9UzU1ZzCyCJebNk68e/UVmbVm6MjgnkS70ZY3iyw0vPvVl27pGZCZhrqLLNqsqr3xQ79u2No7MogjUDG3Lyjoq28HWt8/bqjkiYSY1k6IqrDymtsMqy+22OkeULWvXikiYgjWzzrpQX9buHHuqr5uOfEwS3ZexxFNtPyzQe0OMnYutH2pxv0+qeVt6C7z4AGu9a8W+o6mZsTuyrJm23myCx3vAvBkq9hEzS6DNjXNEwpvbyafqrpIxQiNmCcxVMqJE3U3B9xyqKpUzNCKyBAArswRmisu8qhAhWTPGMJlVJEnBywx+XUufgspwiUmYm37zC1mk+hLCppxDIsW1dUfxeI8nLnOW+Uova6iQKb5KWx01M984VsYYZh290BwkfG3qrhkjsni8LwBVVYWauxuEFJgbar9/3ffk2y/AJZAqq4qQyv3+9bVH8uxvQDK66zvAKFJzPB6PkZc5mHvN0VwvCVA1Y4zDLod+LDLD7KxPIfOywzhlhl4X8ZmU7x3GJU7xfwrzW/T+6fkHghSOWuDSQB0AAAAASUVORK5CYII="

/***/ }),

/***/ "5ML/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/theme/appModern/colors.js
const colors = {
  transparent: 'transparent',
  labelColor: '#767676',
  lightBorder: '#f1f4f6',
  inactiveField: '#F7F8FB',
  inactiveButton: '#b7dbdd',
  inactiveIcon: '#EBEBEB',
  primaryHover: '#3C74FF',
  secondary: '#09142E',
  secondaryHover: '#112045',
  yellow: '#FFA740',
  yellowHover: '#F6C416',
  borderColor: '#E8EBF1',
  black: '#000000',
  white: '#ffffff',
  light: '#FAFBFF',
  gray: '#E4E4E4',
  primary: '#d1397c',
  headingColor: '#0F2137',
  quoteText: '#343D48',
  menu: '#fff',
  textColor: 'rgba(52, 61, 72, 0.8)',
  linkColor: '#2b9eff',
  shadow: 'rgba(38, 78, 118, 0.1)'
};
/* harmony default export */ var appModern_colors = (colors);
// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/theme/appModern/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return theme; });

const theme = {
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
    roboto: '"Heebo", sans-serif'
  },
  borders: [0, '1px solid', '2px solid', '4px solid'],
  radius: [0, 3, 5, 10, 15, 20, 25, 50, 60, '50%'],
  colors: appModern_colors,
  colorStyles: {
    primary: {
      color: appModern_colors.primary,
      borderColor: appModern_colors.primary,
      '&:hover': {
        boxShadow: 'colors.primary 0px 12px 24px -10px'
      }
    },
    secondary: {
      color: appModern_colors.secondary,
      borderColor: appModern_colors.secondary,
      '&:hover': {
        color: appModern_colors.secondaryHover,
        borderColor: appModern_colors.secondaryHover
      }
    },
    warning: {
      color: appModern_colors.yellow,
      borderColor: appModern_colors.yellow,
      '&:hover': {
        color: appModern_colors.yellowHover,
        borderColor: appModern_colors.yellowHover
      }
    },
    error: {
      color: appModern_colors.secondaryHover,
      borderColor: appModern_colors.secondaryHover,
      '&:hover': {
        color: appModern_colors.secondary,
        borderColor: appModern_colors.secondary
      }
    },
    primaryWithBg: {
      color: appModern_colors.white,
      backgroundColor: appModern_colors.primary,
      borderColor: appModern_colors.primary
    },
    secondaryWithBg: {
      color: appModern_colors.white,
      backgroundColor: appModern_colors.secondary,
      borderColor: appModern_colors.secondary,
      '&:hover': {
        backgroundColor: appModern_colors.secondaryHover,
        borderColor: appModern_colors.secondaryHover
      }
    },
    warningWithBg: {
      color: appModern_colors.white,
      backgroundColor: appModern_colors.yellow,
      borderColor: appModern_colors.yellow,
      '&:hover': {
        backgroundColor: appModern_colors.yellowHover,
        borderColor: appModern_colors.yellowHover
      }
    },
    errorWithBg: {
      color: appModern_colors.white,
      backgroundColor: appModern_colors.secondaryHover,
      borderColor: appModern_colors.secondaryHover,
      '&:hover': {
        backgroundColor: appModern_colors.secondary,
        borderColor: appModern_colors.secondary
      }
    }
  },
  buttonStyles: {
    textButton: {
      border: 0,
      color: appModern_colors.primary,
      padding: 0,
      height: 'auto',
      backgroundColor: `${appModern_colors.transparent}`
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      backgroundColor: appModern_colors.transparent
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

/***/ }),

/***/ "5Tpg":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("FIas");

var _Object$defineProperty = __webpack_require__("LcAa");

var _typeof = __webpack_require__("KKIB");

var _WeakMap = __webpack_require__("l8JZ");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "5vD4":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAACLElEQVRIib2WTW9MURjHf+dSRRqkFhXSViKMRWMhNN7ShZAGYVUWfAAbQmIj8QFE7CpeP0AXmkglgiBdSIjY1cYYwUIrSEQwIS0zjzwzz4w7p/dmTObe+0+eZOa8/c49L//zOBHhldtIE+0E9gGDwFpgBRAAP4AZYAp4AExaWaRykqcZ8DBwGtjRbEamN8AN4GoUWIFBTMd+4DZwswWYah1wAXgK7I5qEAXcBjwGDrUA8jUA3AeO+xULvf9bgTvAyjZgNXUA14AFwJVaYfgLVwHjCcHCugQMRwFHbe+SljKuA91h4LCdyLSkH3K2Cny9FxxnAAHK9XDIvAhsin5EtQ2PVY1jytJDM9g/3tNHwCcX0IVzS3CVjW5FLqKtYkuI/JIyRaRyL7crcGTxpkW5lJZSJ95loYfyiC7IlhT3ztdmBfZlCFyjwOUZApcFMfaWlpzCvmcILCpwOkPgx8Aez6w0pfdwYrbw+yiwFEdnKmBhFvjZuaFjwklhD4WB6UmZk6G6X7iQc7hGF3Geq0jVEsMFEvnb8TmX710dsP4hMicXK64gFmWCepRw4ZAShMOvb+grDWOOKat2Je4BtxJfyn96D5zHu4MnrSJpiaUaX3zgBzVX4GvCwFO2gvhA1TPgoOWa7eoPcMJSDOKAqifAEHC3DeBL4ABw2a+I89G31kHv5/MWQO+Ac/rQWiY+T/+T6uukdgH7LY3stRdGy4tqV8ALAzwCvsUNlJM8fwG++6a7RQwgpAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "73nw":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/pattern-76bd128a83ef903c72cf0d22ba2789a9.png";

/***/ }),

/***/ "7AAj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useOnClickOutside(ref, handler) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

/* harmony default export */ __webpack_exports__["a"] = (useOnClickOutside);

/***/ }),

/***/ "7tZE":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/feather/x");

/***/ }),

/***/ "7xIC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Tpg");

var _interopRequireDefault = __webpack_require__("lpv4");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("L9lV"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("wsRY");

var _withRouter = _interopRequireDefault(__webpack_require__("2MIm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "8BOa":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-bfece249803f3d440ef27a70c60f54f1.png";

/***/ }),

/***/ "8obO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+Q8Q");
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("k094");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8qGZ");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const ScrollSpyMenu = (_ref) => {
  let {
    className,
    menuItems,
    drawerClose
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "menuItems", "drawerClose"]);

  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_3__[/* DrawerContext */ "a"]); // empty array for scrollspy items

  const scrollItems = []; // convert menu path to scrollspy items

  menuItems.forEach(item => {
    scrollItems.push(item.path.slice(1));
  }); // Add all classs to an array

  const addAllClasses = ['scrollspy__menu']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // Close drawer when click on menu item


  const toggleDrawer = () => {
    dispatch({
      type: 'TOGGLE'
    });
  };

  return __jsx(react_scrollspy__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    items: scrollItems,
    className: addAllClasses.join(' '),
    drawerClose: drawerClose
  }, props), menuItems.map((menu, index) => __jsx("li", {
    key: `menu-item-${index}`
  }, menu.staticLink ? __jsx("a", {
    href: menu.path
  }, menu.label) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, drawerClose ? __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: menu.path,
    offset: menu.offset,
    onClick: toggleDrawer
  }, menu.label) : __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: menu.path,
    offset: menu.offset
  }, menu.label)))));
};

ScrollSpyMenu.defaultProps = {
  componentTag: 'ul',
  currentClassName: 'is-current'
};
/* harmony default export */ __webpack_exports__["a"] = (ScrollSpyMenu);

/***/ }),

/***/ "8qGZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DrawerProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  isOpen: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return _objectSpread({}, state, {
        isOpen: !state.isOpen
      });

    default:
      return state;
  }
}

const DrawerContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
const DrawerProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState);
  return __jsx(DrawerContext.Provider, {
    value: {
      state,
      dispatch
    }
  }, children);
};

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("MkcS");


/***/ }),

/***/ "91bi":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABICAMAAACeJmi/AAABqlBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////eFPMCAAAAjnRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW1xdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+f4CBgoOEhYaHiImKjI2O1cDG2wAABppJREFUWMOlWIl2m0gQnBPQ4f//UFvinO6t6gFLYMnJvhDnOYGZos/qGpz718v/1a3HpX9a7vnj36Aof/SIkvb7fb1egNTtdu0x/B4g+MCrYhwhVIWXij5DpJ0BIcSYYog046cTqkXKUoqXZzPSYX9OOQHjdRywf5mXuRR5wkhP+0NKuWmanM0GPcaYNszzNE3zssgDwxAYPNqfmxZXzjRBjwi8J/M84gIG7NAajrRGkPtz23YnIMSAmKnwuV/T4B1i7L0UIPR5HOeK4XW1AQGw93enU9c1AIDD4lW5n4uc0kmGR8o0tD0xphn3pdpAF1LTdt3pfDp3bfJumcVJUQsPk+jUjECYnS7dgFjdGWy+QqsXIeamO58vZ9iQoy6iy7Qs6qwwrAycT+ITQu1Lw3SFwNtWXYbgY2pP5ysQuia5xcHbfl7Ux4isIAOlqE/ZxewCduMuDWBp+M0L2tCecHVtRrkQoJ8Wh+Bo9ABA2FxqgNAo4uFrZczzHBCsNZKopNYSyXfKgoAPE54GxXqFV3BpkZBb+OcBxCXTCFO2eqARKKbqXUXHWyUidE0KsmiBIVpvJ0QGqcu1cv2jqpkt1qGwaBbmGi43HQLrdQ6OFSiFNR0disX52n2HzmLaEDEsZKmggFokp2u8TgnWeqF/eBZqDnTXm7q2rQhCI6xW2O9zd7lezIYG0YkzgloT+7264qTadNa1aLlYHUoISXu6fpwNgTaEUUJaTcdmeFQb1BBogoWvEZaGRoZVU3e5nM9d8poRB5i1eAQP3EGIpcb6u6IqABoO/mNBSSmJss3QJEAI3IE+AQKgE4LFZFaILQ7CW2xZJABGIOaiXIwL9ZCEmU7qM9gDRa+u1OWyISAJvDWOKBgUl/FIkWDtbKzrK38E4x9fYNJUOeLbC7pBhHECRET75bTYTfyxBjBGIgPAFlcMAAhFHhzFQExpIEM1yvpModCXGTYHxW+GCB4ilEYywzDgbStC3HiSWUyRa5ylVmpvA2gah36cCtqibaJbhvvX1+etH9G8j3qoRsRK061nRcKXCV2CPtAF75wWljLbY7zfbrd++DZh9QIpNK6PeK8kQOOXVcnI7obbcwG/wCBZ+q/PL7OgrKWdtp4o89pdpQ2FfqHs5jGxPlgNDuTnyiTj7fPz694jjltvbJ0lICZjZjieHcqHRGmQbANQFOKEtp1hAhBgk8h+ZoG3S+V2FFwHQvUB75b6Gosxg1AsjASAD/uZVUNRBzSSj5Bjl5MJBAmAGBtHY+Yy3b9ut/vwCMIzP1QIm1UqTXBkWTMDUJGci1Ka+huiuAdY6+HBMVqHYLA5aVRBSkMlJJg03G93JlLkaao+I/jVN0tKqJOOw4w9msGXY3+3PO4AdhoGFOcW1gX7CdMz5Ab2evZDNIAeBhwB9ipISfUgGfQhtqdsVGaQ4KV5GHq2w17BHBDwCDQVhlXLkByqd7Kwn/phqMz0XomtXBGqlvCcIM7ae4IJ7Mh9Fl4iWEVxjjaz+IheRI+BD2QkKUy1y93vCFhAIiZLcU5iDGIG6eyrhFrJ9XcbKm/qVgnsTU21PX7ufodgJcVeZ0qwdfv3a7kcXu23OkIcTSc4XxkS9rxUieEFAOIIxmQdWp8pA4Lh0TSgQP9HL0xUoZBPJyTCWp6FFnFj6KaJyTwKzXhEoJ45XT4+OHUD81JrkARXjDGO0YxHC+AChjYQzmAJG7CUbF5t2lYp698jeGOTliZ8nCELOU8XIxmrTFMWv9pg0ji3ZsKFsrBQz7AyDIEeFZVfEaht2+58vX5cT2aCaXATtJ6yoYj8PKGkQxqgTC+XK6VtTSX3sxv5hPqqAjwr/3TIA4Jw/aB+ggnbucGkecydJYZibdfge4SUIa4vl8upSaFKdiw16QP9UYe4KTXx+toLs8EUXDZyIeMSxlf4BkrF1EsITxC7c1aIpvGhjU254wbUo/fbfzKGEQa5SdE3cbBs1o5SS1twazGoBDZMXp++6Qtv+bQ3spJFvpWnsMPtoOVNG+2qMu3PpGKyLphy3Q5SVZ2YeqBglkNz7eaFycIx+xIrJW1nLHPQU0lg4Gz66SUClcwQfZmqyY9XmaDDYJ0Hkw5v6oHjBks4simmDsdFb7Q/T30/HoxIeyd4EpiaVNO1P5/jTinTZGNL3s1NWfg3vz81VzlcdoNvlwtsh6Xb4eXF0d00fdl7sf96sH48CC+/YagdgYrsDyj7hd9fMF4h6Iqhh3rwf/8R5c1nFP//PuS8+pTzz9d/sxdbMvOZdE8AAAAASUVORK5CYII="

/***/ }),

/***/ "AO/g":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/graph-feature-2a5253a9e510c0d244c5569a92099d00.png";

/***/ }),

/***/ "AOwJ":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-bg-8e005665cd777eb9ef72353dfe09c812.png";

/***/ }),

/***/ "Cgac":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/star");

/***/ }),

/***/ "CtOc":
/***/ (function(module, exports) {



/***/ }),

/***/ "D7Vo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/customVariant.js
var customVariant = __webpack_require__("h2o+");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/base.js
var base = __webpack_require__("/Q04");

// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Button/button.style.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const ButtonStyle = external_styled_components_default.a.button.withConfig({
  displayName: "buttonstyle__ButtonStyle",
  componentId: "sc-1y9q4so-0"
})(["cursor:pointer;display:inline-flex;align-items:center;justify-content:center;color:", ";background-color:", ";min-height:", "px;min-width:", "px;border-radius:", "px;font-family:inherit;font-size:", "px;font-weight:", ";text-decoration:none;text-transform:capitalize;padding-top:", "px;padding-bottom:", "px;padding-left:", "px;padding-right:", "px;border:0;transition:all 0.3s ease;span.btn-text{padding-left:", "px;padding-right:", "px;}span.btn-icon{display:flex;> div{display:flex !important;}}&:focus{outline:none;}&.is-material{box-shadow:0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12);}&.is-loading{.btn-text{padding-left:", "px;padding-right:", "px;}}", " ", " ", " ", " ", " ", ""], Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'), Object(external_styled_system_["themeGet"])('colors.primary', '#028489'), Object(external_styled_system_["themeGet"])('heights.3', '48'), Object(external_styled_system_["themeGet"])('widths.3', '48'), Object(external_styled_system_["themeGet"])('radius.0', '3'), Object(external_styled_system_["themeGet"])('fontSizes.4', '16'), Object(external_styled_system_["themeGet"])('fontWeights.4', '500'), Object(external_styled_system_["themeGet"])('space.2', '8'), Object(external_styled_system_["themeGet"])('space.2', '8'), Object(external_styled_system_["themeGet"])('space.4', '15'), Object(external_styled_system_["themeGet"])('space.4', '15'), Object(external_styled_system_["themeGet"])('space.1', '4'), Object(external_styled_system_["themeGet"])('space.1', '4'), Object(external_styled_system_["themeGet"])('space.2', '8'), Object(external_styled_system_["themeGet"])('space.2', '8'), external_styled_system_["alignItems"], external_styled_system_["boxShadow"], customVariant["a" /* buttonStyle */], customVariant["c" /* colorStyle */], customVariant["d" /* sizeStyle */], base["a" /* base */]); // prop types can also be added from the style functions

ButtonStyle.propTypes = _objectSpread({}, external_styled_system_["alignItems"].propTypes, {}, external_styled_system_["boxShadow"].propTypes, {}, external_styled_system_["variant"].propTypes);
ButtonStyle.displayName = 'ButtonStyle';
/* harmony default export */ var button_style = (ButtonStyle);
// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Animation/index.js

const spinner = Object(external_styled_components_["keyframes"])(["0%{transform:rotate(0deg);}50%{transform:rotate(180deg);opacity:0.5;}100%{transform:rotate(360deg);}"]);
const AnimSpinner = Object(external_styled_components_["css"])(["animation:", " 1s linear infinite;"], spinner);

// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Loader/loader.style.js
function loader_style_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function loader_style_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { loader_style_ownKeys(Object(source), true).forEach(function (key) { loader_style_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { loader_style_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function loader_style_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const LoaderStyle = external_styled_components_default.a.span.withConfig({
  displayName: "loaderstyle__LoaderStyle",
  componentId: "u2l068-0"
})(["display:inline-flex;width:14px;height:14px;border-radius:50%;overflow:hidden;border-width:2px;border-style:solid;border-color:", ";border-top-color:transparent !important;", " ", " ", ""], props => props.loaderColor ? props.loaderColor : '#000000', AnimSpinner, customVariant["c" /* colorStyle */], base["a" /* base */]); // prop types can also be added from the style functions

LoaderStyle.propTypes = loader_style_objectSpread({}, external_styled_system_["variant"].propTypes);
LoaderStyle.displayName = 'LoaderStyle';
/* harmony default export */ var loader_style = (LoaderStyle);
// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Loader/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Loader = (_ref) => {
  let {
    loaderColor,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["loaderColor", "className"]);

  // Add all classs to an array
  const addAllClasses = ['reusecore__loader']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(loader_style, _extends({
    className: addAllClasses.join(' '),
    loaderColor: loaderColor
  }, props));
};

Loader.defaultProps = {};
/* harmony default export */ var components_Loader = (Loader);
// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Button/index.js
var Button_jsx = external_react_default.a.createElement;

function Button_extends() { Button_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Button_extends.apply(this, arguments); }

function Button_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Button_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Button_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Button = (_ref) => {
  let {
    type,
    title,
    icon,
    disabled,
    iconPosition,
    onClick,
    loader,
    loaderColor,
    isMaterial,
    isLoading,
    className
  } = _ref,
      props = Button_objectWithoutProperties(_ref, ["type", "title", "icon", "disabled", "iconPosition", "onClick", "loader", "loaderColor", "isMaterial", "isLoading", "className"]);

  // Add all classs to an array
  const addAllClasses = ['reusecore__button']; // isLoading prop checking

  if (isLoading) {
    addAllClasses.push('is-loading');
  } // isMaterial prop checking


  if (isMaterial) {
    addAllClasses.push('is-material');
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // Checking button loading state


  const buttonIcon = isLoading !== false ? Button_jsx(external_react_["Fragment"], null, loader ? loader : Button_jsx(components_Loader, {
    loaderColor: loaderColor || '#30C56D'
  })) : icon && Button_jsx("span", {
    className: "btn-icon"
  }, icon); // set icon position

  const position = iconPosition || 'right';
  return Button_jsx(button_style, Button_extends({
    type: type,
    className: addAllClasses.join(' '),
    icon: icon,
    disabled: disabled,
    "icon-position": position,
    onClick: onClick
  }, props), position === 'left' && buttonIcon, title && Button_jsx("span", {
    className: "btn-text"
  }, title), position === 'right' && buttonIcon);
};

Button.defaultProps = {
  disabled: false,
  isMaterial: false,
  isLoading: false,
  type: 'button'
};
/* harmony default export */ var components_Button = __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "DhOV":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABxCAMAAADyDj0KAAABLFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9PVkEkAAAAZHRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW1xdXl9gYWJjUJU2xAAACP1JREFUaN7tWtGS5DgKzATV/f8Hl8h7ACS52tVVO3NxcQ/n6Jjd6bGFEZBkIgP/v/4XLv75ffrPWeDtjfrSCr+5Y/0A3Euvn7+0QIAECYLbgiBI0BcmxkcDBOvaryNIkgRA1F/50MvbaUMQFFKUGf2FD2nAaGZpo1yQpAiG4rMXH3aJJM3MrWxkHCSFZsQMxMeEGp+2kGbu7ubpRbsQYTE5gRDwqxPjswvuPtzdrz5Mm2mOH5wYHxLVzNzHGG0BYFowMwKQEPrVifFFFMYYY7iZdeYJoTJgEom/2iVz9zEe7r5SCYDCSGZE+Me5RJA08zHGYwy3wwBkkQYiTORvCTs+eGDuYzwew90ypEqEUhgJKUIS/ygOPAyM8XAzQIISoyjNshAm8ZeqGO8LofPo8Xg8hptJkiiCNEJmVPkgxPusHe/wmrAM8shdIiWFRNBopIIQYkaEAAQF3SbVeI/XWQjj8fjX4zHMIAUlgEYzSkYiykBj+k1Axlu83lv0KAsRURachIysXwlgvMPycWvALgbG4+HOw4IZTbJ0IQSQkyGFbvJ23BiwCrIvD4anDwqBMJoRmlkPkYk9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"

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "E+gT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/Q04");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const LinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('a').withConfig({
  displayName: "Link__LinkWrapper",
  componentId: "gszw5l-0"
})({
  textDecoration: 'none'
}, _base__WEBPACK_IMPORTED_MODULE_2__[/* base */ "a"], Object(_base__WEBPACK_IMPORTED_MODULE_2__[/* themed */ "b"])('Link'));

const Link = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(LinkWrapper, props, children);
};

/* harmony default export */ __webpack_exports__["a"] = (Link);
Link.defaultProps = {
  as: 'a',
  m: 0,
  display: 'inline-block'
};

/***/ }),

/***/ "E9dt":
/***/ (function(module, exports) {



/***/ }),

/***/ "FIas":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "Gozm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "H3JQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/UI/Container/style.js

const ContainerWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "style__ContainerWrapper",
  componentId: "sc-1gre7ok-0"
})(["margin-left:auto;margin-right:auto;", ";", ";@media (min-width:768px){max-width:750px;width:100%;}@media (min-width:992px){max-width:970px;width:100%;}@media (min-width:1220px){max-width:", ";width:100%;}@media (max-width:768px){", ";}"], props => props.fullWidth && Object(external_styled_components_["css"])(["width:100%;max-width:none !important;"]), props => props.noGutter && Object(external_styled_components_["css"])(["padding-left:0;padding-right:0;"]) || Object(external_styled_components_["css"])(["padding-left:30px;padding-right:30px;"]), props => props.width || '1170px', props => props.mobileGutter && Object(external_styled_components_["css"])(["padding-left:30px;padding-right:30px;"]));
/* harmony default export */ var style = (ContainerWrapper);
// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/UI/Container/index.js
var __jsx = external_react_default.a.createElement;



const Container = ({
  children,
  className,
  fullWidth,
  noGutter,
  mobileGutter,
  width
}) => {
  // Add all classs to an array
  const addAllClasses = ['container']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(style, {
    className: addAllClasses.join(' '),
    fullWidth: fullWidth,
    noGutter: noGutter,
    width: width,
    mobileGutter: mobileGutter
  }, children);
};

/* harmony default export */ var UI_Container = __webpack_exports__["a"] = (Container);

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

/***/ "IrP5":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "JHY8":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/entypo/thinRight");

/***/ }),

/***/ "JUQ4":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAMAAAC6CgRnAAACjlBMVEUAAADgTmjdMlDbGTvZDDHYAyrYASfYAynZCzDbGTvdM1LfRWHgUGvbJkbYByvYACPYACTYACXYACfYBircJ0bgT2rlc4jYASLXACLYACbYACLYCCveOVft8/LvytLaHz3XAB3YACjcLEtrk06uypf4///u0dfXACDfSWRlg09spkFmoTquyZn5///uz9bbID7XAB7hWXJjb0lqoUVspkRspEKuypnu0NfZByzkdIjbvUq9xENmokRspETXAB/eNlR/eFzZuT3/6Ua2v0RlokRrpETu0tjbHz7XABvXACPYACHYASfiZXw+QEghHAfXuzr/6Ee3wETuztXcLUnaFDTaFDjZEzPgU20nJyYAAAAhGwnbvzv/6Ui1v0T4/P/27vX15Or15Ov15+4REREkHgnYvDu3v0RnoTypyJPS4cvO4MbP4McEBAQiHAnVujr/4kZspURspUNnoj1ooj5ooj1rpEEAAABEORL94EX/3kSRskRno0RtpURtpUQfGgjStzm4wERrpEEPDw8hHAn/6Ei5wERnoTunxpHS38bP3sHP3cHP3cDQ3sInJia4v0RloTqryZb++fvz8vno6vXp6/Xp6/U+P0cfGgbVuTqsyZb//PzR3Oowbr8WXrgXYboVXLhcj8t6c1jWtjvV3ushZbsASLAAT7MATrMATbICU7R7o9PewE2/xUNmo0TT3eoiZbsASrEAUrQATLI0dcFxf1JqoUTU3esAULMFVLVvm9BsjVRsp0EAUbQATrJxndBWfDuuzZjU3us2dsLz8e/N2uoma71ql852oNMATLIGVLU9esNOhsgpbL4GVbUhZ7xKg8dLhMcvcb8cZLsMWbcEVLUCU7QLWLYYYbowccBJgsaI7ClcAAAA2nRSTlMAG2Ojz+bt5s+kZBwgle3/////7pYhX+n////qYoj/////jIn/////jF7/////////YR3t/////+8fl/////+aGfH////////////zG2L///////////9mpf///////////6jQ/////////9Hn///////////m7v///////+3////n0f///////////9Km/////////6lk////////////aBry////////8xyZ/////////5wf7v//8CFh////ZI3//5CL/5ABY+vsZiKY75okHmen0OXs0KhoH34jmFIAAAF0SURBVCjPZZK/SxxRFIXPNz7nx5uBTcxmRIgiihiVFDEgxGKJlY0WtvvPpPRfsLQXLE2ZRrFIkbSxMCEKKTbGWcKMLoG8FKO7b/Q0F+7Hee/ey0F3YqTyvlWXrO5KzjkDPY/lwOD+hQi4HLJpgL6GcpE9lxRImo+iyLnWiMH4y9q3VP/V953RJJ8VaNVa6xIXN5yD79FbGcWAyrRq0W+NnEGIeAdAUaU3U3C6Ln/fbYA/g9sqvX4F+AOZFCD7GauMsgYTJq2cpTd3Hmu1iYRJKpXtGVz85iHC2Cvp1wxrgEqfKTOVpAWKpycrMOajf8bkV1ru5fkHTnZ4NKcWftzMHiVFlyZzgUk6hBwmRWV57GO/c5wUXUgaDEAHsFd0Le0Hm7NtlPCeruXF78xHISjQ1vhuZWkPGigNw00h6SNnixdZ8yhPOnUmNsaWmygsn5lhzk759nx4sLQ3x5qXz0/wVXkppX+vJ3Je+9mVvgDgAmDxrvUfLx5dF7TXrpIAAAAASUVORK5CYII="

/***/ }),

/***/ "KFN4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/Q04");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('img').withConfig({
  displayName: "Image__ImageWrapper",
  componentId: "csrlc2-0"
})({
  display: 'block',
  maxWidth: '100%',
  height: 'auto'
}, _base__WEBPACK_IMPORTED_MODULE_2__[/* base */ "a"], Object(_base__WEBPACK_IMPORTED_MODULE_2__[/* themed */ "b"])('Image'));

const Image = (_ref) => {
  let {
    src,
    alt
  } = _ref,
      props = _objectWithoutProperties(_ref, ["src", "alt"]);

  return __jsx(ImageWrapper, _extends({
    src: src,
    alt: alt
  }, props));
};

/* harmony default export */ __webpack_exports__["a"] = (Image);
Image.defaultProps = {
  m: 0
};

/***/ }),

/***/ "KKIB":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("45mK");

var _Symbol = __webpack_require__("Gozm");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "KeDb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("lpv4");

var _interopRequireWildcard = __webpack_require__("5Tpg");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = _interopRequireDefault(__webpack_require__("7xIC"));

var _utils = __webpack_require__("fvxO");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "KkoF":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAABsCAMAAABq6K2nAAABRFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////98CHTaAAAAbHRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW1xdXl9gYWJjZGVmZ2hpamuhs9BQAAAJ6ElEQVRo3u1abXvjOAgUstr9///2trHEwQyS5cSJ3eb2yz3rfes2qScgGAZwSn+vv9dPLvkDd9E/jSj72+gJprwPh9/4Sx1L+c/Tq7yPJ+J/AGi/aKLon0DscLwcUVNT1dcm/hxx4GXJGZCG2HJr7bWJP0YU4hlYXvwvjwc1uCqpyUvM8h5eNrzFIB1RW211xM5/aqM7FO50tKUsDikOWCt8KyrpvciRAxNpX1mKX4aYkgGuNxylyHs27hNcw0LHM7iP8vHhiGZUrTc/yYwgegNxS29SCfAd0HxpcJ8fdplX3acGWE/xThEZImncRvE9D9CyGNbnp2Mui/v0ZnhZzjmsXIrJwGQQ+jfMowD8ZZhlcZ+mtmZ/i+o7iEEpnm788ErEnGnhL/tlJmbRqhlovH6MGJzil2SSCiIn00RYaCaaB5xokB21kefe4BzpOb65VQRR84mrfFhmNENbcQ3In3o1kmAJyH6O2fPiw6OmFAc0uNvt6+vrFpAvK2Q5o5aMJCetpNmrHjoeNE0t879+2/V1u63v2SiR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"

/***/ }),

/***/ "L9lV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("YBsB"));

const utils_1 = __webpack_require__("fvxO");

const is_dynamic_1 = __webpack_require__("Lko9");

const route_matcher_1 = __webpack_require__("TBBy");

const route_regex_1 = __webpack_require__("uChv");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  true && (_cachedData = this.sdc[pathname]) ? Promise.resolve(_cachedData) : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (false) {} // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "LQxt":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABGCAMAAABVJ1JCAAABVlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8yE6ggAAAAcnRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW1xdXl9gYWJjZGVmZ2hpamtsbW5vcHFtH0iCAAAGtElEQVRYw61Y23IjuQ4jQEpO/v9fT9wtkjgP6mScjJOZrV1VnlI2zAsIQjL7Tw/+4Sf1H8Dh/c9Mpp8w8TdggAHYcJK0QZ+d+BswECQAM6nVan0X4p+iAwDSnU7ATN1d1d3qp3jxp9AId4/wIAGpq7Iyq58nHD+WH4AzYowYQdKsuzLXWquqnuUbP5afpMcYY44IJ8zUles8ncusn+QbP5af7jHGnGPErp1115pHkIZ80o940ppdfjrdI8aYYwx3wGCArHOFk7vLP0f3niPo7uERI+YY4Q6YzEAQ1jnCYZKEr+HF0xzpERFjjDFGBGGqVu+fodUImvXFv+/gYO8pukeMGGOOOSJgXdlVDTeaBzUCpqoufWVLPKAR7nGdETHGmHMErZdUK0VRYDhGwDozs/v7ZAG/IhojwmO3IaDVUFfJaCB90MI6z/Nche+SBegx5+12u805wi/KTUdrmUmbhnT3MKrWcRyR+NKMh2TpMV9eX15vtzGcZra/zHJ30s1itxgg+nbOsZn9fXRjvry+vr7cRrh1t6lbBrq7DyM8HNZdBNxjjD3GT+FgoI95e3l9fZnDoexuE5000EcZQYcqTRoU6HTHT9HFuEoXtFRnWoMEDKTLDKrOiqp2tRnxrqnPakd6zDnnCMLUtdayhjvZksFsaxJjzBqofqqVnzs7xjU/lZlrqRkO76rKzO7uFmK81M07fx+JX3DYaDHCCZVVZWZKHo7utc7zXFVVJfqtpFBWfwsHwyUf13BX7VAqF6rO+/1+rLXhRhnRyOr+VlFA9z3vTjNpq5TUlUDd7/+738/MrjZvxEygqlrSsyEDSI8x9zhIkJEebVAXLM/j/nY/V5WEYHV3W2XVc0XBJslGA0y2xbFN1mWWmbnOY1ULdBlMbfUUbydLj3G73eZwQDKYE9ZSmxrWex1WtRFwd8K6Mqv7mUCB9HG7vdxmEB+abN0lNQwy7kVhoI8xw6HOzKxntYPBY9xeNpzMDIRZEzCVGY0eY5TQ9DlvczhUuXZ09iy6LU3DuZeT9iroKsgMHLdqYwpxe3m5DUdlZj6hXrzr5u4E9nLvVq3MzDIH3DVljGzGfHmZg9218tlcxC/WzQg3mSSTutZxrNUmkAwDfKQQc96Gm3XV74W7ageAzvAIR7esq6tyrXNlw7xlDjJWCRFjOC7+gtQXBxmPW5FuQFuttXJlZfV2dEDQY7bAcIcJW4Ba1p+X2YZT915zlKzyOM6163z5OpBytQEkTARjlAzMqn6ML/bvd+XKrDCT6jzejixdjsedALG/BMDUjJaMdD8T9Wh93My4TYRHOKzzPO7Hyjb6ZQOczmuJXa7xMjEOflllsVPN8xhjDgf2PLXBY0T4BgI+hFxoXntvjO190j7i820MAdIZhDrPc5UQ21LsgIiN+LEIYaTv39ncwmPtCjwixgyE2uDDjbGr9olW2n2TZHDACUL7/Kod3kUqnDC14DG32bk+eX1YUnd356bBbvsj2o7OrCvXOs816AjzMjOoq1oG+EdemwTX/0n4NNtW/gKMnUNX5TrPMwgGhyRV1jqzBXcPJ2n7XtFZWd1gRDiHqqqqenf4orGpKtd5BLF539m13o6zbLs0v6Lrru3E6GPO4T6qtrboccikynWEk6CTXdnr/nY/Su9wBEyPcDO1/cZaY8/jA1x3rsMJAx2AdZ73t7ejeif7AFdZ2aJnAxyIMc/t6/UBJ6hrXXwlrTOP+47O9jhwz9nF8ha9bY+gxxhxSemvZDv3XII073Ucx/04zmt0iU1BqVXdkuAGjwju8eFm+IdAqW03h6R5H8eWlRLsGgm83z9bMsGWr5XpzrgYr4forC0lwMcIeK91rRaYqWH4uG1rmwSTqjJLxo/O68GQqSWjr5VV1lnVBjoe7qkwGQzXfF7FNMC3VNSnZCG7ytwNSduk/3BP982efX24xjs+jXd/DCDoMc37BzjGHO5OatPoc7Jmwq+14WOW+UXO54c+bjPcsfuOby6gMBCmNn/uMB/M9LzNEeJ+eMDvcJKpZaANMap/fOOgjzGuu+O10L5Gp+7KKjOGsfvHlwLSw01V9ZsEfMhjrXW6Dcgo8A+vGLSW8jjXuvDiS2yV63CoLtH+w7NINdR53I+VpQcJeD/deRJdg7Tv33J+9cxMtc7jfq7PEvChegtQrie3t+dHqjzP47yutp9rZ+paqjzfFeLPcN2ZudblRL8SpU1d6eRv163naJcA1uUc8ezJiQRhfwd37cr32Xz2IvPkKvhD8R5Y/CSES9v+Gu7TEyH+5RPmXzxg/ovzf35vBhdorktlAAAAAElFTkSuQmCC"

/***/ }),

/***/ "LcAa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "Lko9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "MkcS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/theme/appModern/index.js + 1 modules
var appModern = __webpack_require__("5ML/");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/css/style.js
var style = __webpack_require__("H4oa");

// EXTERNAL MODULE: external "react-stickynode"
var external_react_stickynode_ = __webpack_require__("isz7");
var external_react_stickynode_default = /*#__PURE__*/__webpack_require__.n(external_react_stickynode_);

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/ScrollSpyMenu/index.js
var ScrollSpyMenu = __webpack_require__("8obO");

// EXTERNAL MODULE: external "react-scrollspy"
var external_react_scrollspy_ = __webpack_require__("+Q8Q");
var external_react_scrollspy_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollspy_);

// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__("k094");
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);

// EXTERNAL MODULE: external "react-icons-kit"
var external_react_icons_kit_ = __webpack_require__("Oi65");

// EXTERNAL MODULE: external "react-icons-kit/feather/menu"
var menu_ = __webpack_require__("gCS2");

// EXTERNAL MODULE: external "react-icons-kit/feather/x"
var x_ = __webpack_require__("7tZE");

// EXTERNAL MODULE: external "react-icons-kit/feather/search"
var search_ = __webpack_require__("1cWV");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/UIElements/Logo/index.js
var Logo = __webpack_require__("cIfr");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Button/index.js + 4 modules
var Button = __webpack_require__("D7Vo");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("H3JQ");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/hooks/useOnClickOutside.js
var useOnClickOutside = __webpack_require__("7AAj");

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appClassic/search.svg
var search = __webpack_require__("to13");
var appClassic_search_default = /*#__PURE__*/__webpack_require__.n(search);

// CONCATENATED MODULE: ./containers/CryptoModern/Navbar/navbar.style.js



const NavbarWrapper = external_styled_components_default.a.nav.withConfig({
  displayName: "navbarstyle__NavbarWrapper",
  componentId: "sc-6fp35x-0"
})(["width:100%;padding:25px 0 26px;background-color:transparent;position:fixed;z-index:9999;transition:all 0.3s ease;@media only screen and (max-width:1366px){padding:20px 0 21px;}> div.container{width:100%;display:flex;align-items:center;justify-content:space-between;.main-logo{img{width:128px;height:auto;}}.logo-alt{width:128px;height:auto;display:none;}}ul{li{a{color:", ";font-size:16px;font-weight:400;transition:all 0.3s ease;&:hover{font-weight:700;}}&.is-current{a{font-weight:700;}}}}"], Object(external_styled_system_["themeGet"])('colors.menu', '#fff'));
const MenuArea = external_styled_components_default.a.div.withConfig({
  displayName: "navbarstyle__MenuArea",
  componentId: "sc-6fp35x-1"
})(["display:flex;align-items:center;.menu{display:flex;align-items:center;margin-right:11px;opacity:1;visibility:visible;transition:all 0.3s ease;@media only screen and (max-width:1366px){margin-right:13px;}@media only screen and (max-width:991px){display:none;}li{margin:0 19px;@media only screen and (max-width:1366px){margin:0 17px;}&:first-child{margin-left:0;}&:last-child{margin-right:0;}}}&.active{.menu{opacity:0;visibility:hidden;}.search{form{opacity:1;visibility:visible;}input{width:320px;@media only screen and (min-width:1367px){width:350px;}@media only screen and (max-width:480px){width:calc(100vw - 122px);}}}}.reusecore__button{border-radius:5px;font-weight:500;text-transform:inherit;padding-left:13px;padding-right:13px;min-height:42px;&.text{padding:0;margin-right:28px;cursor:pointer;.btn-icon{svg{width:22px;height:auto;stroke:", ";@media only screen and (max-width:991px){width:24px;}}}@media only screen and (max-width:1366px){margin-right:20px;}@media only screen and (max-width:991px){margin-right:0;}}&.trail{border-radius:4px;background-image:linear-gradient(to right,#4ba1d8,#4464bd 95%);&:hover{box-shadow:rgba(75,109,235,0.78) 0px 12px 24px -10px;}@media only screen and (max-width:991px){display:none;}}&.menubar{display:none;@media only screen and (max-width:991px){display:inline-flex;padding:0;justify-content:flex-end;min-width:35px;color:#fff;svg{width:27px;height:auto;}}}}"], Object(external_styled_system_["themeGet"])('colors.menu', '0D233E'));
const Search = external_styled_components_default.a.div.withConfig({
  displayName: "navbarstyle__Search",
  componentId: "sc-6fp35x-2"
})(["position:relative;display:flex;align-items:center;form{opacity:0;visibility:hidden;position:absolute;right:100%;}input{width:0px;height:46px;padding:0 15px;border-radius:5px;border:1px solid rgba(0,0,0,0.05);font-size:15px;color:", ";background-color:", ";background-image:url(", ");background-repeat:no-repeat;background-position:calc(100% - 15px) center;background-size:16px;z-index:1;transition:all 0.3s ease 0.1s;&::placeholder{color:", ";}&:focus{border-color:", ";}}"], Object(external_styled_system_["themeGet"])('colors.menu', '0D233E'), Object(external_styled_system_["themeGet"])('colors.light', '#FAFBFF'), appClassic_search_default.a, Object(external_styled_system_["themeGet"])('colors.textColor', 'rgba(52, 61, 72, 0.8)'), Object(external_styled_system_["themeGet"])('colors.primary', '#2563FF'));
const MobileMenu = external_styled_components_default.a.div.withConfig({
  displayName: "navbarstyle__MobileMenu",
  componentId: "sc-6fp35x-3"
})(["display:none;@media only screen and (max-width:991px){display:flex;width:100%;height:calc(100vh - 70px);padding:27px 0 40px;opacity:0;visibility:hidden;position:absolute;top:82px;flex-direction:column;background-color:", ";transition:all 0.3s ease;color:", ";&.active{opacity:1;visibility:visible;box-shadow:0 3px 12px ", ";}.container{width:100%;height:100%;display:flex;flex-direction:column;justify-content:space-between;}ul{padding-bottom:20px;li{a{display:block;padding:13px 0;border-radius:5px;transition:all 0.3s ease;color:", ";}&:hover{a{padding:13px 15px;color:", ";}}}}.reusecore__button{width:100%;border-radius:4px;background-image:-moz-linear-gradient( -31deg,rgb(64,219,216) 0%,rgb(44,31,132) 100% );background-image:-webkit-linear-gradient( -31deg,rgb(64,219,216) 0%,rgb(44,31,132) 100% );background-image:-ms-linear-gradient( -31deg,rgb(64,219,216) 0%,rgb(44,31,132) 100% );@media only screen and (max-width:480px){margin-top:20px;}}}"], Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'), Object(external_styled_system_["themeGet"])('colors.secondary', '#000'), Object(external_styled_system_["themeGet"])('colors.shadow', 'rgba(38, 78, 118, 0.1)'), Object(external_styled_system_["themeGet"])('colors.secondary', '#000'), Object(external_styled_system_["themeGet"])('colors.primary'));
/* harmony default export */ var navbar_style = (NavbarWrapper);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/logo-white.png
var logo_white = __webpack_require__("xcLp");
var logo_white_default = /*#__PURE__*/__webpack_require__.n(logo_white);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/logo.png
var logo = __webpack_require__("8BOa");
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/feature-1.png
var feature_1 = __webpack_require__("/6NP");
var feature_1_default = /*#__PURE__*/__webpack_require__.n(feature_1);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/feature-2.png
var feature_2 = __webpack_require__("VsMR");
var feature_2_default = /*#__PURE__*/__webpack_require__.n(feature_2);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/feature-3.png
var feature_3 = __webpack_require__("KkoF");
var feature_3_default = /*#__PURE__*/__webpack_require__.n(feature_3);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/feature-4.png
var feature_4 = __webpack_require__("DhOV");
var feature_4_default = /*#__PURE__*/__webpack_require__.n(feature_4);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/wallet1.png
var wallet1 = __webpack_require__("V7eC");
var wallet1_default = /*#__PURE__*/__webpack_require__.n(wallet1);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/wallet2.png
var wallet2 = __webpack_require__("Njvv");
var wallet2_default = /*#__PURE__*/__webpack_require__.n(wallet2);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/wallet3.png
var wallet3 = __webpack_require__("4m+G");
var wallet3_default = /*#__PURE__*/__webpack_require__.n(wallet3);

// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/data/CryptoModern/index.js
/* ------------------------------------ */
// Navbar data section

/* ------------------------------------ */

const navbar = {
  logo: logo_default.a,
  navMenu: [{
    id: 1,
    label: 'Home',
    path: '#home',
    offset: '84'
  }, {
    id: 2,
    label: 'Key Features',
    path: '#key-features',
    offset: '81'
  }, {
    id: 3,
    label: 'Fund Raising',
    path: '#fund',
    offset: '81'
  }, {
    id: 4,
    label: 'Locations',
    path: '#map',
    offset: '81'
  }, {
    id: 5,
    label: 'FAQ',
    path: '#faqSection',
    offset: '81'
  }]
};
/* ------------------------------------ */
// Features data section

/* ------------------------------------ */





const Features = [{
  id: 1,
  icon: feature_1_default.a,
  title: 'Great Market Value',
  description: 'The leading digital currency by market capitalization, has grown in value by more than 10 times.'
}, {
  id: 2,
  icon: feature_2_default.a,
  title: 'Verified Mining',
  description: 'Your mining rigs are already set up and running. As soon as you set up your account.'
}, {
  id: 3,
  icon: feature_3_default.a,
  title: 'Fastest Miner',
  description: 'Don’t wrestle with rig assembly and hot, noisy miners at home. We have the fastest bitcoin mining.'
}, {
  id: 4,
  icon: feature_4_default.a,
  title: 'Secure Transactions',
  description: 'You can mine any cryptocurrency available in our catalogue! Switch your mining power.'
}];
/* ------------------------------------ */
// Wallet  data section

/* ------------------------------------ */




const WalletFeatures = [{
  id: 1,
  icon: wallet1_default.a,
  title: 'Secure transfers with verified Casinos.'
}, {
  id: 2,
  icon: wallet2_default.a,
  title: 'Easily buy and sell CLV within the wallet'
}, {
  id: 3,
  icon: wallet3_default.a,
  title: 'Pay as many as you want'
}];
/* ------------------------------------ */
// Faq  data section

/* ------------------------------------ */

const Faq = [{
  id: 1,
  expend: true,
  title: 'How to contact with Customer Service?',
  description: 'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. '
}, {
  id: 2,
  title: 'App installation failed, how to update system information?',
  description: 'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . '
}, {
  id: 3,
  title: 'Website reponse taking time, how to improve?',
  description: 'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .'
}, {
  id: 4,
  title: 'New update fixed all bug and issues?',
  description: 'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .'
}];
/* ------------------------------------ */
// Footer data section

/* ------------------------------------ */

const Footer_Data = [{
  title: 'About Us',
  menuItems: [{
    url: '#',
    text: 'Support Center'
  }, {
    url: '#',
    text: 'Customer Support'
  }, {
    url: '#',
    text: 'About Us'
  }, {
    url: '#',
    text: 'Copyright'
  }, {
    url: '#',
    text: 'Popular Campaign'
  }]
}, {
  title: 'Our Information',
  menuItems: [{
    url: '#',
    text: 'Return Policy'
  }, {
    url: '#',
    text: 'Privacy Policy'
  }, {
    url: '#',
    text: 'Terms & Conditions'
  }, {
    url: '#',
    text: 'Site Map'
  }, {
    url: '#',
    text: 'Store Hours'
  }]
}, {
  title: 'My Account',
  menuItems: [{
    url: '#',
    text: 'Press inquiries'
  }, {
    url: '#',
    text: 'Social media directories'
  }, {
    url: '#',
    text: 'Images & B-roll'
  }, {
    url: '#',
    text: 'Permissions'
  }, {
    url: '#',
    text: 'Speaker requests'
  }]
}, {
  title: 'Policy',
  menuItems: [{
    url: '#',
    text: 'Application security'
  }, {
    url: '#',
    text: 'Software principles'
  }, {
    url: '#',
    text: 'Unwanted software policy'
  }, {
    url: '#',
    text: 'Responsible supply chain'
  }]
}];
// CONCATENATED MODULE: ./containers/CryptoModern/Navbar/index.js
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















const Navbar = () => {
  const {
    navMenu
  } = navbar;
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({
    search: '',
    searchToggle: false,
    mobileMenu: false
  });
  const searchRef = Object(external_react_["useRef"])(null);
  Object(useOnClickOutside["a" /* default */])(searchRef, () => setState(_objectSpread({}, state, {
    searchToggle: false
  })));

  const toggleHandler = type => {
    if (type === 'search') {
      setState(_objectSpread({}, state, {
        search: '',
        searchToggle: !state.searchToggle,
        mobileMenu: false
      }));
    }

    if (type === 'menu') {
      setState(_objectSpread({}, state, {
        mobileMenu: !state.mobileMenu
      }));
    }
  };

  const handleOnChange = event => {
    setState(_objectSpread({}, state, {
      search: event.target.value
    }));
  };

  const handleSearchForm = event => {
    event.preventDefault();

    if (state.search !== '') {
      console.log('search data: ', state.search);
      setState(_objectSpread({}, state, {
        search: ''
      }));
    } else {
      console.log('Please fill this field.');
    }
  };

  const scrollItems = [];
  navMenu.forEach(item => {
    scrollItems.push(item.path.slice(1));
  });

  const handleRemoveMenu = () => {
    setState(_objectSpread({}, state, {
      mobileMenu: false
    }));
  };

  return __jsx(navbar_style, {
    className: "navbar"
  }, __jsx(Container["a" /* default */], null, __jsx(Logo["a" /* default */], {
    href: "/cryptoModern",
    logoSrc: logo_white_default.a,
    title: "Crypto Modern",
    className: "main-logo"
  }), __jsx(Logo["a" /* default */], {
    href: "/cryptoModern",
    logoSrc: logo_default.a,
    title: "Crypto Modern",
    className: "logo-alt"
  }), __jsx(MenuArea, {
    className: state.searchToggle ? 'active' : ''
  }, __jsx(ScrollSpyMenu["a" /* default */], {
    className: "menu",
    menuItems: navMenu,
    offset: -84
  }), __jsx(Search, {
    className: "search",
    ref: searchRef
  }, __jsx("form", {
    onSubmit: handleSearchForm
  }, __jsx("input", {
    type: "text",
    value: state.search,
    placeholder: "Enter your keyword",
    onChange: handleOnChange
  })), __jsx(Button["a" /* default */], {
    className: "text",
    variant: "textButton",
    icon: __jsx(external_react_icons_kit_["Icon"], {
      icon: state.searchToggle ? x_["x"] : search_["search"]
    }),
    onClick: () => toggleHandler('search')
  })), __jsx(external_react_anchor_link_smooth_scroll_default.a, {
    href: "#trail",
    offset: 84
  }, __jsx(Button["a" /* default */], {
    className: "trail",
    title: "Try for Free"
  })), __jsx(Button["a" /* default */], {
    className: "menubar",
    icon: state.mobileMenu ? __jsx(external_react_icons_kit_["Icon"], {
      className: "bar",
      icon: x_["x"]
    }) : __jsx(Fade_default.a, null, __jsx(external_react_icons_kit_["Icon"], {
      className: "close",
      icon: menu_["menu"]
    })),
    color: "#0F2137",
    variant: "textButton",
    onClick: () => toggleHandler('menu')
  }))), __jsx(MobileMenu, {
    className: `mobile-menu ${state.mobileMenu ? 'active' : ''}`
  }, __jsx(Container["a" /* default */], null, __jsx(external_react_scrollspy_default.a, {
    className: "menu",
    items: scrollItems,
    offset: -84,
    currentClassName: "active"
  }, navMenu.map((menu, index) => __jsx("li", {
    key: `menu_key${index}`
  }, __jsx(external_react_anchor_link_smooth_scroll_default.a, {
    href: menu.path,
    offset: menu.offset,
    onClick: handleRemoveMenu
  }, menu.label)))), __jsx(Button["a" /* default */], {
    title: "Try for Free"
  }))));
};

/* harmony default export */ var CryptoModern_Navbar = (Navbar);
// EXTERNAL MODULE: external "react-icons-kit/fa/playCircle"
var playCircle_ = __webpack_require__("U9T1");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Text/index.js
var Text = __webpack_require__("4Af6");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Image/index.js
var Image = __webpack_require__("KFN4");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Heading/index.js
var Heading = __webpack_require__("bHe8");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Rating/index.js
var Rating = __webpack_require__("mU6f");

// CONCATENATED MODULE: ./containers/CryptoModern/Banner/banner.style.js


const BannerWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__BannerWrapper",
  componentId: "wawrb0-0"
})(["padding-top:100px;min-height:802px;overflow:hidden;background-image:linear-gradient( 135deg,rgba(64,219,216,0.15) 0%,rgba(3,16,59,0.15) 35% );@media only screen and (min-width:1201px) and (max-width:1440px){min-height:100%;}@media only screen and (max-width:1099px){padding-top:120px;min-height:100%;}@media only screen and (max-width:480px){padding-top:120px;min-height:100%;}> div.container{display:flex;align-items:center;justify-content:space-between;min-height:calc(802px - 100px);@media only screen and (min-width:1201px) and (max-width:1440px){min-height:100%;}@media only screen and (max-width:1099px){min-height:100%;}@media only screen and (max-width:480px){flex-wrap:wrap;min-height:100%;}}"]);
const BannerContent = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__BannerContent",
  componentId: "wawrb0-1"
})(["max-width:425px;width:100%;@media only screen and (max-width:991px){flex-shrink:0;max-width:360px;}h1{font-size:48px;line-height:1.25;font-weight:400;color:", ";margin-bottom:24px;letter-spacing:-0.025em;@media only screen and (max-width:1440px){font-size:38px;margin-bottom:20px;}}p{color:", ";font-size:16px;line-height:33px;font-weight:400;}"], Object(external_styled_system_["themeGet"])('colors.menu', '#0D233E'), Object(external_styled_system_["themeGet"])('colors.paragraph', '#496b96'));
const DiscountLabel = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__DiscountLabel",
  componentId: "wawrb0-2"
})(["display:flex;border-radius:4em;background-color:rgb(26,29,95);box-shadow:0px 5px 15px 0px rgba(22,53,76,0.05);border:1px solid rgba(0,0,0,0.03);padding:7px 25px;margin-bottom:15px;width:80%;@media (max-width:767px){padding:7px 15px;width:100%;}.discountAmount{font-size:14px;color:rgb(64,224,219);margin-bottom:0;margin-right:0.6em;font-weight:700;}.discountText{font-size:14px;color:rgba(255,255,255,0.902);margin-bottom:0;font-weight:700;}"]);
const BannerImage = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__BannerImage",
  componentId: "wawrb0-3"
})(["flex-shrink:0;width:calc(100% - 425px);img{margin-left:80px;@media only screen and (max-width:1600px){margin-left:0;}@media only screen and (max-width:480px){max-width:70%;}}"]);
const ButtonGroup = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__ButtonGroup",
  componentId: "wawrb0-4"
})(["margin-top:35px;.reusecore__button{text-transform:inherit;border-radius:5px;padding-left:16px;padding-right:16px;font-size:14px;font-weight:500;text-transform:uppercase;&.primary{background-image:linear-gradient(to right,#4ba1d8,#4464bd 95%);&:hover{box-shadow:rgba(75,109,235,0.78) 0px 12px 24px -10px;}}&.text{margin-left:15px;color:#fff;border:1px solid rgba(255,255,255,0.302);}}"]);
/* harmony default export */ var banner_style = (BannerWrapper);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/banner-bg.png
var banner_bg = __webpack_require__("AOwJ");
var banner_bg_default = /*#__PURE__*/__webpack_require__.n(banner_bg);

// CONCATENATED MODULE: ./containers/CryptoModern/Banner/index.js
var Banner_jsx = external_react_default.a.createElement;













const Banner = () => {
  return Banner_jsx(banner_style, {
    id: "home"
  }, Banner_jsx(Container["a" /* default */], null, Banner_jsx(BannerContent, null, Banner_jsx(Fade_default.a, {
    up: true
  }, Banner_jsx(DiscountLabel, null, Banner_jsx(Text["a" /* default */], {
    className: "discountAmount",
    content: "25% Discount"
  }), Banner_jsx(Text["a" /* default */], {
    className: "discountText",
    content: "on every first project "
  }))), Banner_jsx(Fade_default.a, {
    up: true,
    delay: 100
  }, Banner_jsx(Heading["a" /* default */], {
    as: "h1",
    content: "Welcome next level  cryptocurrency token with faster transfer"
  })), Banner_jsx(Fade_default.a, {
    up: true,
    delay: 200
  }, Banner_jsx(Text["a" /* default */], {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore magna ipsum dolor sit amet consectetur."
  })), Banner_jsx(Fade_default.a, {
    up: true,
    delay: 300
  }, Banner_jsx(ButtonGroup, null, Banner_jsx(Button["a" /* default */], {
    className: "primary",
    title: "GET TOKEN"
  }), Banner_jsx(Button["a" /* default */], {
    className: "text",
    variant: "textButton",
    title: "WHITE PAPER"
  })))), Banner_jsx(BannerImage, null, Banner_jsx(Fade_default.a, {
    in: true,
    delay: 100
  }, Banner_jsx(Image["a" /* default */], {
    src: banner_bg_default.a,
    alt: "Banner"
  })))));
};

/* harmony default export */ var CryptoModern_Banner = (Banner);
// EXTERNAL MODULE: ./containers/CryptoModern/CountDown/timer.css
var timer = __webpack_require__("CtOc");

// CONCATENATED MODULE: ./containers/CryptoModern/CountDown/timer.js
var timer_jsx = external_react_default.a.createElement;

 // function component

const StaticCard = ({
  position,
  digit
}) => {
  return timer_jsx("div", {
    className: position
  }, timer_jsx("span", null, digit));
}; // function component


const NormalUnitContainer = ({
  digit,
  unit = 'time',
  countdown
}) => {
  // assign digit values
  let currentDigit = digit;
  let previousDigit;

  if (countdown) {
    previousDigit = digit + 1; // to prevent a negative value

    if (unit !== 'hours') {
      previousDigit = previousDigit === 60 ? 59 : previousDigit;
    } else {
      previousDigit = previousDigit === 24 ? 23 : previousDigit;
    }
  } // add zero


  if (currentDigit < 10) {
    currentDigit = `0${currentDigit}`;
  }

  if (previousDigit < 10) {
    previousDigit = `0${previousDigit}`;
  }

  return timer_jsx("div", {
    className: 'NormalUnitContainer'
  }, timer_jsx(StaticCard, {
    position: 'NormalupperCard',
    digit: currentDigit
  }), timer_jsx("div", {
    className: "digitLabel"
  }, timer_jsx("label", null, unit)));
};

function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  let hours = Math.floor(t / (1000 * 60 * 60) % 24);
  let minutes = Math.floor(t / 1000 / 60 % 60);
  let seconds = Math.floor(t / 1000 % 60);
  return {
    time: t,
    days,
    hours,
    minutes,
    seconds
  };
} // class component


class timer_NormalClock extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    const {
      days,
      hours,
      minutes,
      seconds
    } = getTimeRemaining(this.props.countdown);

    if (days !== this.state.days) {
      this.setState({
        days
      });
    } // on hour chanage, update hours and shuffle state


    if (hours !== this.state.hours) {
      this.setState({
        hours
      });
    } // on minute chanage, update minutes and shuffle state


    if (minutes !== this.state.minutes) {
      this.setState({
        minutes
      });
    } // on second chanage, update seconds and shuffle state


    if (seconds !== this.state.seconds) {
      this.setState({
        seconds
      });
    }
  }

  render() {
    // state object destructuring
    const {
      days,
      hours,
      minutes,
      seconds
    } = this.state;
    const {
      countdown,
      divider
    } = this.props;
    return timer_jsx("div", {
      className: 'NormalClock'
    }, timer_jsx(NormalUnitContainer, {
      countdown: countdown,
      unit: 'days',
      digit: days
    }), divider ? timer_jsx("span", {
      className: "dividerColon"
    }, ":") : '', timer_jsx(NormalUnitContainer, {
      countdown: countdown,
      unit: 'hours',
      digit: hours
    }), divider ? timer_jsx("span", {
      className: "dividerColon"
    }, ":") : '', timer_jsx(NormalUnitContainer, {
      countdown: countdown,
      unit: 'minutes',
      digit: minutes
    }), divider ? timer_jsx("span", {
      className: "dividerColon"
    }, ":") : '', timer_jsx(NormalUnitContainer, {
      countdown: countdown,
      unit: 'seconds',
      digit: seconds
    }));
  }

}

/* harmony default export */ var CountDown_timer = (timer_NormalClock);
// CONCATENATED MODULE: ./containers/CryptoModern/CountDown/countdown.style.js


const SectionWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "countdownstyle__SectionWrapper",
  componentId: "sc-1xrv3zr-0"
})(["padding:75px 0;overflow:hidden;@media only screen and (max-width:1440px){padding:100px 0 50px;}@media only screen and (max-width:480px){padding:60px 0 5px;}"]);
const ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "countdownstyle__ContentWrapper",
  componentId: "sc-1xrv3zr-1"
})(["display:flex;flex-direction:column;flex-wrap:wrap;align-items:center;@media (max-width:480px){flex-wrap:nowrap;align-items:center;}h2{color:", ";font-size:32px;line-height:44px;font-weight:400;margin-bottom:27px;@media only screen and (max-width:1366px){font-size:30px;line-height:42px;margin-bottom:20px;}@media only screen and (max-width:991px){font-size:26px;line-height:38px;}@media only screen and (max-width:768px){max-width:100%;}@media only screen and (max-width:480px){margin-bottom:0px;}}.timerCount{margin-top:30px;margin-bottom:60px;.NormalClock{display:flex;justify-content:space-between;width:600px;align-items:center;@media (max-width:480px){width:100%;}.NormalUnitContainer{width:110px;height:100px;border-radius:5px;background-color:#0b1741;@media (max-width:480px){width:70px;height:70px;background-color:transparent;}.NormalupperCard{align-items:center;display:flex;justify-content:center;span{font-size:60px;letter-spacing:-1px;color:#ffffff;font-family:'Roboto';font-weight:300;text-align:center;@media (max-width:480px){font-size:30px;}}}.digitLabel{font-size:14px;letter-spacing:3px;color:#8ec7ff;font-family:'Roboto';font-weight:500;text-align:center;margin-top:12px;@media (max-width:480px){font-size:10px;}}}.dividerColon{font-size:36px;line-height:48px;color:#fff;font-family:'Roboto';font-weight:700;text-align:center;@media (max-width:480px){display:none;}}}}.reusecore__button{text-transform:inherit;border-radius:5px;padding-left:16px;padding-right:16px;font-size:14px;font-weight:500;text-transform:uppercase;margin-top:30px;&.primary{background-image:linear-gradient(to right,#4ba1d8,#4464bd 95%);&:hover{box-shadow:rgba(75,109,235,0.78) 0px 9px 20px -10px;}}}"], Object(external_styled_system_["themeGet"])('colors.white', '#fff'));
/* harmony default export */ var countdown_style = (SectionWrapper);
// CONCATENATED MODULE: ./containers/CryptoModern/CountDown/index.js
var CountDown_jsx = external_react_default.a.createElement;








const deadline = new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000);


const CountDownSection = () => {
  return CountDown_jsx(countdown_style, null, CountDown_jsx(Container["a" /* default */], null, CountDown_jsx(ContentWrapper, null, CountDown_jsx(Heading["a" /* default */], {
    content: "Token Pre-sale starting in: "
  }), CountDown_jsx(Fade_default.a, {
    up: true
  }, CountDown_jsx("div", {
    className: "timerCount"
  }, CountDown_jsx(CountDown_timer, {
    countdown: deadline,
    divider: "true"
  }))), CountDown_jsx(Button["a" /* default */], {
    className: "primary",
    title: "PRE-ORDER NOW"
  }))));
};

/* harmony default export */ var CountDown = (CountDownSection);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Box/index.js
var Box = __webpack_require__("l54f");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/FeatureBlock/index.js + 1 modules
var FeatureBlock = __webpack_require__("b4OD");

// CONCATENATED MODULE: ./containers/CryptoModern/FeatureSection/featureSection.style.js

const FeatureSectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "featureSectionstyle__FeatureSectionWrapper",
  componentId: "sc-8u6bqu-0"
})(["padding:80px 0 180px 0;@media (max-width:990px){padding:60px 0 60px 0;}@media (max-width:767px){padding:60px 0 30px 0;}.sectionHeader{display:flex;flex-direction:column;justify-content:center;align-items:center;}.feature__block{position:relative;height:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;transition:all 0.3s ease;padding:0 20px;cursor:pointer;border-radius:5px;&:hover{background-image:linear-gradient( to bottom,transparent 50%,rgba(255,255,255,0.031) );}@media (max-width:500px){padding:15px 0;&:hover{background-image:none;}}}"]);
/* harmony default export */ var featureSection_style = (FeatureSectionWrapper);
// CONCATENATED MODULE: ./containers/CryptoModern/FeatureSection/index.js
var FeatureSection_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const FeatureSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  featureTitle,
  featureDescription,
  iconStyle,
  contentStyle,
  blockWrapperStyle
}) => {
  return FeatureSection_jsx(featureSection_style, {
    id: "key-features"
  }, FeatureSection_jsx(Container["a" /* default */], null, FeatureSection_jsx(Box["a" /* default */], _extends({}, sectionHeader, {
    className: "sectionHeader"
  }), FeatureSection_jsx(Text["a" /* default */], _extends({
    content: "Why you choose TheCoin"
  }, sectionSubTitle)), FeatureSection_jsx(Heading["a" /* default */], _extends({
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor Lorem ipsum dolor"
  }, sectionTitle))), FeatureSection_jsx(Box["a" /* default */], _extends({
    className: "row"
  }, row), Features.map((feature, index) => FeatureSection_jsx(Box["a" /* default */], _extends({
    className: "col"
  }, col, {
    key: index
  }), FeatureSection_jsx(FeatureBlock["a" /* default */], {
    icon: FeatureSection_jsx("img", {
      src: feature.icon
    }),
    wrapperStyle: blockWrapperStyle,
    contentStyle: contentStyle,
    title: FeatureSection_jsx(Heading["a" /* default */], _extends({
      content: feature.title
    }, featureTitle)),
    description: FeatureSection_jsx(Text["a" /* default */], _extends({
      content: feature.description
    }, featureDescription)),
    className: "cryptoFeature"
  }))))));
}; // FeatureSection style props


// FeatureSection default style
FeatureSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '40px', '40px', '80px'],
    display: 'flex',
    width: '100%'
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: ['30px', '40px'],
    fontWeight: '300',
    letterSpacing: '-0.025em',
    color: '#fff',
    mb: '15px'
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['14px', '16px'],
    fontWeight: '400',
    color: '#496b96',
    mb: '0',
    maxWidth: '420px',
    lineHeight: '1.5'
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap'
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 4, 1 / 4]
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '20px', '20px']
  },
  // feature content default style
  contentStyle: {
    textAlign: 'center'
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#fff',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '15px'],
    letterSpacing: '-0.025em',
    mt: ['15px', '15px', '15px', '25px']
  },
  // feature description default style
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: 'rgba(142, 199, 255, 0.502)'
  }
};
/* harmony default export */ var CryptoModern_FeatureSection = (FeatureSection);
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__("NHP8");
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Card/index.js
var Card = __webpack_require__("rZdf");

// CONCATENATED MODULE: ./containers/CryptoModern/WorkHistory/workHistory.style.js


const WorkHistoryWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "workHistorystyle__WorkHistoryWrapper",
  componentId: "nbgtuu-0"
})(["padding:70px 0 80px;overflow:hidden;@media (max-width:990px){padding:50px 0 60px 0;}@media (max-width:480px){padding:50px 0 0px 0;}.feature__block{padding-left:132px;margin-top:-120px;@media only screen and (max-width:1200px){padding-right:32px;padding-left:15px;}@media only screen and (max-width:991px){padding-right:0;margin-bottom:0;}@media only screen and (max-width:767px){padding-right:0;margin-bottom:40px;margin-top:0;}h2{font-size:48px;line-height:1.2;font-family:'Roboto',sans-serif;font-weight:300;color:#fff;max-width:270px;@media only screen and (max-width:1440px){font-size:38px;max-width:100%;}@media only screen and (max-width:767px){font-size:25px;max-width:100%;}}p{color:#496b96;font-size:16px;line-height:33px;font-weight:400;}.reusecore__button{transition:all 0.3s ease;color:#fff;margin-left:0;padding-left:0;justify-content:flex-start;.flaticon-next{margin-top:3px;}}}"]);
const CounterUpArea = external_styled_components_default.a.div.withConfig({
  displayName: "workHistorystyle__CounterUpArea",
  componentId: "nbgtuu-1"
})(["display:flex;flex-wrap:wrap;@media only screen and (max-width:1200px){padding-left:0;}@media only screen and (max-width:991px){padding-right:0;margin-left:-25px;}@media only screen and (max-width:767px){margin-left:0;margin-top:50px;margin-bottom:30px;}.card{width:calc(50% - 25px);margin-left:25px;margin-bottom:27px;display:flex;flex-direction:column;justify-content:center;align-items:center;transition:all 0.3s ease-in-out;background-color:#152149;cursor:pointer;@media (max-width:767px){width:calc(50% - 13px);&:nth-child(2n + 1){margin-left:0;}}&:hover{background-image:linear-gradient(to right,#1d7ccb 30%,#1951b8 100%);box-shadow:0px 16px 57px 0px rgba(22,53,76,0.7);}h3{font-size:30px;font-weight:400;margin:30px 0 10px;color:", ";@media (max-width:767px){margin-bottom:10px;}}p{color:rgba(142,199,255,0.502);font-size:16px;font-weight:500;margin-bottom:7px;@media (max-width:990px){font-size:14px;text-align:center;}}img{opacity:0.2;}&:nth-child(even){position:relative;top:-70px;}}"], Object(external_styled_system_["themeGet"])('colors.white', '#fff'));

/* harmony default export */ var workHistory_style = (WorkHistoryWrapper);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/Shape-1.png
var Shape_1 = __webpack_require__("91bi");
var Shape_1_default = /*#__PURE__*/__webpack_require__.n(Shape_1);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/Shape-2.png
var Shape_2 = __webpack_require__("LQxt");
var Shape_2_default = /*#__PURE__*/__webpack_require__.n(Shape_2);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/Shape-3.png
var Shape_3 = __webpack_require__("wA39");
var Shape_3_default = /*#__PURE__*/__webpack_require__.n(Shape_3);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/Shape-4.png
var Shape_4 = __webpack_require__("XaeP");
var Shape_4_default = /*#__PURE__*/__webpack_require__.n(Shape_4);

// CONCATENATED MODULE: ./containers/CryptoModern/WorkHistory/index.js
var WorkHistory_jsx = external_react_default.a.createElement;

function WorkHistory_extends() { WorkHistory_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return WorkHistory_extends.apply(this, arguments); }

















const WorkHistory = ({
  row,
  col,
  cardStyle,
  btnStyle
}) => {
  return WorkHistory_jsx(workHistory_style, {
    id: "workHistorySection"
  }, WorkHistory_jsx(Container["a" /* default */], null, WorkHistory_jsx(Box["a" /* default */], WorkHistory_extends({
    className: "row"
  }, row), WorkHistory_jsx(Box["a" /* default */], WorkHistory_extends({
    className: "col"
  }, col), WorkHistory_jsx(CounterUpArea, null, WorkHistory_jsx(Card["a" /* default */], WorkHistory_extends({
    className: "card"
  }, cardStyle), WorkHistory_jsx(Image["a" /* default */], {
    src: Shape_1_default.a,
    alt: "Shape 1"
  }), WorkHistory_jsx("h3", null, WorkHistory_jsx(external_react_countup_default.a, {
    start: 0,
    end: 75000
  }), "+"), WorkHistory_jsx(Text["a" /* default */], {
    content: "Awards"
  })), WorkHistory_jsx(Card["a" /* default */], WorkHistory_extends({
    className: "card"
  }, cardStyle), WorkHistory_jsx(Image["a" /* default */], {
    src: Shape_2_default.a,
    alt: "Shape 2"
  }), WorkHistory_jsx("h3", null, WorkHistory_jsx(external_react_countup_default.a, {
    start: 0,
    end: 80,
    duration: 5
  })), WorkHistory_jsx(Text["a" /* default */], {
    content: "Million Customers"
  })), WorkHistory_jsx(Card["a" /* default */], WorkHistory_extends({
    className: "card"
  }, cardStyle), WorkHistory_jsx(Image["a" /* default */], {
    src: Shape_3_default.a,
    alt: "Shape 3"
  }), WorkHistory_jsx("h3", null, WorkHistory_jsx(external_react_countup_default.a, {
    start: 0,
    end: 9350,
    duration: 5
  }), "+"), WorkHistory_jsx(Text["a" /* default */], {
    content: "Community"
  })), WorkHistory_jsx(Card["a" /* default */], WorkHistory_extends({
    className: "card"
  }, cardStyle), WorkHistory_jsx(Image["a" /* default */], {
    src: Shape_4_default.a,
    alt: "Shape 4"
  }), WorkHistory_jsx("h3", null, WorkHistory_jsx(external_react_countup_default.a, {
    start: 0,
    end: 30000,
    duration: 5
  }), "+"), WorkHistory_jsx(Text["a" /* default */], {
    content: "Transactions"
  })))), WorkHistory_jsx(Box["a" /* default */], WorkHistory_extends({
    className: "col"
  }, col), WorkHistory_jsx(FeatureBlock["a" /* default */], {
    title: WorkHistory_jsx(Heading["a" /* default */], {
      content: "Our Largest Achievements "
    }),
    description: WorkHistory_jsx(Text["a" /* default */], {
      content: "We have worked with some leading agencies around the globe and their appreciation is our main strength. In the modern cryptocurrency era, customer satisfaction is our main criteria. "
    }),
    button: WorkHistory_jsx(Button["a" /* default */], WorkHistory_extends({
      title: "See our stories",
      variant: "textButton",
      icon: WorkHistory_jsx("i", {
        className: "flaticon-next"
      })
    }, btnStyle))
  })))));
}; // WorkHistory style props


// WorkHistory default style
WorkHistory.defaultProps = {
  // WorkHistory section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  // WorkHistory section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center'
  },
  // Card default style
  cardStyle: {
    p: ['20px 20px', '30px 20px', '30px 20px', '53px 40px'],
    borderRadius: '10px'
  },
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500'
  }
};
/* harmony default export */ var CryptoModern_WorkHistory = (WorkHistory);
// CONCATENATED MODULE: ./containers/CryptoModern/Investment/investment.style.js


const investment_style_SectionWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "investmentstyle__SectionWrapper",
  componentId: "imhlho-0"
})(["padding:75px 0 25px;position:relative;@media (max-width:1600px){padding:25px 0 0px;}@media only screen and (max-width:1366px){padding:30px 0;}@media only screen and (max-width:667px){padding:30px 0 0;}.patternImg{position:absolute;left:-28%;top:-100%;width:50%;@media only screen and (max-width:1440px){display:none;}}"]);
const investment_style_ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "investmentstyle__ContentWrapper",
  componentId: "imhlho-1"
})(["display:flex;flex-wrap:wrap;align-items:center;.image{width:50%;@media only screen and (max-width:991px){width:50%;}@media only screen and (max-width:768px){width:100%;margin-bottom:40px;}img{width:100%;object-fit:cover;}}.content{width:50%;@media only screen and (max-width:991px){width:50%;}@media only screen and (max-width:768px){width:100%;margin-bottom:50px;}h2{color:", ";font-size:48px;line-height:1.2;font-weight:300;letter-spacing:-0.025em;margin-bottom:27px;max-width:370px;@media only screen and (max-width:1440px){font-size:38px;}@media only screen and (max-width:768px){max-width:100%;text-align:center;}@media only screen and (max-width:480px){font-size:30px;}}p{font-size:16px;line-height:28px;color:#496b96;max-width:400px;@media only screen and (max-width:768px){max-width:100%;text-align:center;}}}"], Object(external_styled_system_["themeGet"])('colors.white', 'fff'));
/* harmony default export */ var investment_style = (investment_style_SectionWrapper);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/graph.png
var graph = __webpack_require__("UKU4");
var graph_default = /*#__PURE__*/__webpack_require__.n(graph);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/pattern.png
var pattern = __webpack_require__("73nw");
var pattern_default = /*#__PURE__*/__webpack_require__.n(pattern);

// CONCATENATED MODULE: ./containers/CryptoModern/Investment/index.js
var Investment_jsx = external_react_default.a.createElement;









const InvestmentPortal = () => {
  return Investment_jsx(investment_style, null, Investment_jsx(Container["a" /* default */], null, Investment_jsx(investment_style_ContentWrapper, null, Investment_jsx("div", {
    className: "content"
  }, Investment_jsx(Heading["a" /* default */], {
    content: "Total Investment sale from last year transaction"
  }), Investment_jsx(Text["a" /* default */], {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu"
  })), Investment_jsx("div", {
    className: "image"
  }, Investment_jsx(Image["a" /* default */], {
    src: graph_default.a,
    alt: "Graph Image"
  })))), Investment_jsx(Image["a" /* default */], {
    className: "patternImg",
    src: pattern_default.a,
    alt: "pattern Image"
  }));
};

/* harmony default export */ var Investment = (InvestmentPortal);
// CONCATENATED MODULE: ./containers/CryptoModern/FundRaising/fundRaising.style.js


const fundRaising_style_SectionWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "fundRaisingstyle__SectionWrapper",
  componentId: "sc-18u3ahw-0"
})(["padding:75px 0;position:relative;@media only screen and (max-width:667px){padding:30px 0 0;}.gradientDiv{position:absolute;width:700px;height:700px;opacity:0.16;right:-15%;bottom:-40%;border-radius:50%;background:radial-gradient( circle closest-side,rgb(109,140,243),rgb(3,16,59) );@media only screen and (max-width:1600px){display:none;}}"]);
const fundRaising_style_ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "fundRaisingstyle__ContentWrapper",
  componentId: "sc-18u3ahw-1"
})(["display:flex;flex-wrap:wrap;align-items:center;.image{width:50%;padding:70px;padding-right:100px;@media only screen and (max-width:991px){width:50%;}@media only screen and (max-width:768px){width:100%;padding:100px;margin-bottom:0;padding-top:0;}@media only screen and (max-width:480px){padding:25px;margin-bottom:30px;}img{width:100%;object-fit:cover;}}.content{width:50%;@media only screen and (max-width:991px){width:50%;}@media only screen and (max-width:768px){width:100%;margin-bottom:50px;}h2{color:", ";font-size:48px;line-height:1.2;font-weight:300;letter-spacing:-0.025em;margin-bottom:27px;@media only screen and (max-width:1440px){font-size:38px;margin-bottom:15px;}@media only screen and (max-width:768px){font-size:40px;max-width:100%;text-align:center;}@media only screen and (max-width:480px){font-size:30px;}}p{font-size:16px;line-height:28px;color:#496b96;max-width:400px;@media only screen and (max-width:768px){max-width:100%;text-align:center;}}img{margin-top:50px;object-fit:cover;width:100%;@media only screen and (max-width:1440px){margin-top:30px;}@media only screen and (max-width:1099px){margin-top:50px;}}}"], Object(external_styled_system_["themeGet"])('colors.white', 'fff'));
/* harmony default export */ var fundRaising_style = (fundRaising_style_SectionWrapper);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/fund-graph.png
var fund_graph = __webpack_require__("YJwd");
var fund_graph_default = /*#__PURE__*/__webpack_require__.n(fund_graph);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/graph-feature.png
var graph_feature = __webpack_require__("AO/g");
var graph_feature_default = /*#__PURE__*/__webpack_require__.n(graph_feature);

// CONCATENATED MODULE: ./containers/CryptoModern/FundRaising/index.js
var FundRaising_jsx = external_react_default.a.createElement;









const DesignedAndBuilt = () => {
  return FundRaising_jsx(fundRaising_style, {
    id: "fund"
  }, FundRaising_jsx(Container["a" /* default */], null, FundRaising_jsx(fundRaising_style_ContentWrapper, null, FundRaising_jsx("div", {
    className: "image"
  }, FundRaising_jsx(Image["a" /* default */], {
    src: fund_graph_default.a,
    alt: "Graph Image"
  })), FundRaising_jsx("div", {
    className: "content"
  }, FundRaising_jsx(Heading["a" /* default */], {
    content: "Fund raising allocation"
  }), FundRaising_jsx(Text["a" /* default */], {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor sit ."
  }), FundRaising_jsx(Image["a" /* default */], {
    src: graph_feature_default.a,
    alt: "Graph Feature Image"
  })), FundRaising_jsx("div", {
    className: "gradientDiv"
  }, " "))));
};

/* harmony default export */ var FundRaising = (DesignedAndBuilt);
// CONCATENATED MODULE: ./containers/CryptoModern/Privacy/privacy.style.js


const privacy_style_SectionWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "privacystyle__SectionWrapper",
  componentId: "sc-1dxxsaw-0"
})(["padding:25px 0 0;overflow:hidden;@media (max-width:1440px){padding:0;}@media only screen and (max-width:480px){padding:30px 0;}"]);
const privacy_style_ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "privacystyle__ContentWrapper",
  componentId: "sc-1dxxsaw-1"
})(["display:flex;flex-wrap:wrap;align-items:center;.image{width:50%;padding-left:50px;@media only screen and (max-width:1440px){padding-left:0px;}@media only screen and (max-width:991px){width:50%;}@media only screen and (max-width:768px){width:100%;margin-bottom:40px;padding-left:100px;}img{width:100%;object-fit:cover;@media only screen and (max-width:1440px){width:80%;}}}.content{width:50%;@media only screen and (max-width:991px){width:50%;}@media only screen and (max-width:768px){width:100%;margin-bottom:50px;}h2{color:", ";font-size:48px;line-height:1.2;font-weight:300;letter-spacing:-0.025em;margin-bottom:27px;max-width:370px;@media only screen and (max-width:1440px){font-size:38px;}@media only screen and (max-width:768px){font-size:40px;max-width:100%;text-align:center;}@media only screen and (max-width:480px){font-size:30px;}}p{font-size:16px;line-height:28px;color:#496b96;max-width:400px;@media only screen and (max-width:768px){max-width:100%;text-align:center;}}}"], Object(external_styled_system_["themeGet"])('colors.white', 'fff'));
/* harmony default export */ var privacy_style = (privacy_style_SectionWrapper);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/illustration1.png
var illustration1 = __webpack_require__("hWXR");
var illustration1_default = /*#__PURE__*/__webpack_require__.n(illustration1);

// CONCATENATED MODULE: ./containers/CryptoModern/Privacy/index.js
var Privacy_jsx = external_react_default.a.createElement;









const PrivacyPortal = () => {
  return Privacy_jsx(privacy_style, null, Privacy_jsx(Container["a" /* default */], null, Privacy_jsx(privacy_style_ContentWrapper, null, Privacy_jsx("div", {
    className: "content"
  }, Privacy_jsx(Heading["a" /* default */], {
    content: "Privacy Preserving  Anonymous Funds  Protocol"
  }), Privacy_jsx(Text["a" /* default */], {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu"
  })), Privacy_jsx("div", {
    className: "image"
  }, Privacy_jsx(Fade_default.a, {
    up: true
  }, Privacy_jsx(Image["a" /* default */], {
    src: illustration1_default.a,
    alt: "Illustration Image"
  }))))));
};

/* harmony default export */ var Privacy = (PrivacyPortal);
// CONCATENATED MODULE: ./containers/CryptoModern/WalletSection/walletSection.style.js


const walletSection_style_SectionWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "walletSectionstyle__SectionWrapper",
  componentId: "koax4n-0"
})(["padding:75px 0;overflow:hidden;@media only screen and (max-width:768px){padding:75px 0 0;}@media only screen and (max-width:480px){padding:30px 0 25px;}"]);
const walletSection_style_ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "walletSectionstyle__ContentWrapper",
  componentId: "koax4n-1"
})(["display:flex;flex-wrap:wrap;align-items:center;.image{width:50%;@media only screen and (max-width:991px){width:50%;}@media only screen and (max-width:768px){width:100%;display:none;}@media only screen and (max-width:480px){}img{width:100%;height:900px;object-fit:contain;}}.content{width:50%;padding-left:100px;@media only screen and (max-width:991px){width:50%;}@media only screen and (max-width:768px){width:100%;margin-bottom:50px;padding-left:0px;}@media only screen and (max-width:480px){margin-bottom:0px;}h2{color:", ";font-size:48px;line-height:1.2;font-weight:300;letter-spacing:-0.025em;margin-bottom:27px;@media only screen and (max-width:1440px){margin-bottom:15px;font-size:38px;}@media only screen and (max-width:768px){font-size:40px;max-width:100%;text-align:left;}@media only screen and (max-width:480px){font-size:30px;}}p{font-size:16px;line-height:28px;color:#496b96;max-width:400px;@media only screen and (max-width:768px){max-width:100%;text-align:left;}}.walletfeatures{margin-top:40px;img{height:24px;}p{font-size:16px;line-height:28px;color:", ";padding-left:24px;max-width:100%;margin-bottom:30px;margin-top:-1px;}}.btnGroups{margin-top:30px;margin-bottom:20px;.reusecore__button{font-weight:500;color:#fff;border:1px solid rgba(255,255,255,0.302);margin-right:17px;padding-left:30px;padding-right:30px;font-size:14px;text-transform:uppercase;@media only screen and (max-width:480px){width:100%;&:nth-child(1){margin-bottom:15px;}}.btn-icon{margin-right:10px;margin-top:-2px;img{height:18px;}}}}.windowsAllert{font-size:14px;}}"], Object(external_styled_system_["themeGet"])('colors.white', 'fff'), Object(external_styled_system_["themeGet"])('colors.white', 'fff'));
/* harmony default export */ var walletSection_style = (walletSection_style_SectionWrapper);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/illustration2.png
var illustration2 = __webpack_require__("+LCl");
var illustration2_default = /*#__PURE__*/__webpack_require__.n(illustration2);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/apple.png
var apple = __webpack_require__("bcok");
var apple_default = /*#__PURE__*/__webpack_require__.n(apple);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/playstore.png
var playstore = __webpack_require__("nyf8");
var playstore_default = /*#__PURE__*/__webpack_require__.n(playstore);

// CONCATENATED MODULE: ./containers/CryptoModern/WalletSection/index.js
var WalletSection_jsx = external_react_default.a.createElement;















const WalletPortal = () => {
  return WalletSection_jsx(walletSection_style, {
    id: "wallet"
  }, WalletSection_jsx(Container["a" /* default */], null, WalletSection_jsx(walletSection_style_ContentWrapper, null, WalletSection_jsx("div", {
    className: "image"
  }, WalletSection_jsx(Image["a" /* default */], {
    src: illustration2_default.a,
    alt: "Wallet Image"
  })), WalletSection_jsx("div", {
    className: "content"
  }, WalletSection_jsx(Heading["a" /* default */], {
    content: "Our wallet is built for the cryptocurrency  beginner"
  }), WalletSection_jsx(Text["a" /* default */], {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor sit elit sed eiu Lorem ipsum dolor sit ."
  }), WalletSection_jsx("div", {
    className: "walletfeatures"
  }, WalletSection_jsx(Fade_default.a, {
    up: true
  }, WalletFeatures.map((feature, index) => WalletSection_jsx(FeatureBlock["a" /* default */], {
    key: `feature_point-${index}`,
    icon: WalletSection_jsx("img", {
      src: feature.icon
    }),
    iconPosition: "left",
    title: WalletSection_jsx(Text["a" /* default */], {
      content: feature.title
    })
  })))), WalletSection_jsx("div", {
    className: "btnGroups"
  }, WalletSection_jsx(Button["a" /* default */], {
    title: "APP STORE",
    variant: "textButton",
    icon: WalletSection_jsx("img", {
      src: apple_default.a
    }),
    iconPosition: "left",
    className: "appStore"
  }), WalletSection_jsx(Button["a" /* default */], {
    title: "PLAY STORE",
    variant: "textButton",
    icon: WalletSection_jsx("img", {
      src: playstore_default.a
    }),
    iconPosition: "left",
    className: "playStore"
  })), WalletSection_jsx(Text["a" /* default */], {
    className: "windowsAllert",
    content: "*Windows app coming soon"
  })))));
};

/* harmony default export */ var WalletSection = (WalletPortal);
// CONCATENATED MODULE: ./containers/CryptoModern/MapSection/mapSection.style.js


const mapSection_style_SectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "mapSectionstyle__SectionWrapper",
  componentId: "sc-12g6sv6-0"
})(["width:100%;padding:81px 0;@media only screen and (max-width:1440px){padding:70px 0;}@media only screen and (max-width:1360px){padding:45px 0 50px;}@media only screen and (max-width:991px){padding:40px 0;}@media only screen and (max-width:480px){padding:40px 0 0;}"]);
const SectionHeader = external_styled_components_default.a.header.withConfig({
  displayName: "mapSectionstyle__SectionHeader",
  componentId: "sc-12g6sv6-1"
})(["text-align:center;margin-bottom:90px;display:flex;justify-content:center;align-items:center;flex-direction:column;@media only screen and (max-width:1440px){margin-bottom:70px;}@media only screen and (max-width:991px){margin-bottom:54px;}@media only screen and (max-width:480px){margin-bottom:0px;}h2{color:", ";font-size:40px;line-height:1.2;font-weight:300;letter-spacing:-0.025em;margin-bottom:27px;@media only screen and (max-width:1440px){margin-bottom:15px;}@media only screen and (max-width:768px){font-size:40px;max-width:100%;text-align:center;}@media only screen and (max-width:480px){font-size:30px;}}p{font-size:16px;line-height:28px;color:#496b96;max-width:400px;@media only screen and (max-width:768px){max-width:100%;text-align:center;}}.smallText{color:", ";font-size:18px;line-height:28px;margin-top:20px;}.countries{display:flex;justify-content:space-between;width:430px;margin-top:10px;@media only screen and (max-width:480px){width:100%;flex-direction:column;justify-content:center;align-items:center;}.countriesSingle{display:flex;@media only screen and (max-width:480px){margin-bottom:15px;}img{width:24px;height:24px;}p{font-size:16px;line-height:28px;color:#fff;margin:0;padding:0;margin-left:15px;}}}"], Object(external_styled_system_["themeGet"])('colors.white', 'fff'), Object(external_styled_system_["themeGet"])('colors.white', 'fff'));
const ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "mapSectionstyle__ImageWrapper",
  componentId: "sc-12g6sv6-2"
})(["display:flex;align-items:center;justify-content:center;position:relative;@media only screen and (max-width:480px){display:none;}.countryIcon{position:absolute;height:500px;width:100%;.countryIconSingle{position:absolute;&::before{content:'';position:absolute;display:block;width:40px;height:40px;box-shadow:0 0 0 0.8px #38c3c8;border-radius:50%;top:50%;left:50%;opacity:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);animation:pulse 2.2s ease-out infinite;backface-visibility:hidden;pointer-events:none;z-index:11;}&::after{content:'';position:absolute;width:40px;height:40px;border-radius:50%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:0.25s ease-in-out;-webkit-transition:0.25s ease-in-out;transition:0.25s ease-in-out;z-index:2;}&:nth-child(1){top:34%;position:absolute;left:13%;}&:nth-child(2){top:20%;position:absolute;left:19%;}&:nth-child(3){position:absolute;bottom:18%;left:28%;}&:nth-child(4){position:absolute;top:2%;left:38%;@media only screen and (max-width:768px){top:40%;}}&:nth-child(5){position:absolute;top:30%;left:60%;}&:nth-child(6){position:absolute;top:13%;right:15%;}&:nth-child(7){position:absolute;bottom:20%;right:11%;}}}@keyframes pulse{0%{transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1);opacity:1;}100%{transform:translateX(-50%) translateY(-50%) translateZ(0) scale(2);opacity:0;}}"]);
/* harmony default export */ var mapSection_style = (mapSection_style_SectionWrapper);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/map.png
var map = __webpack_require__("sAej");
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/uk.png
var uk = __webpack_require__("ikMy");
var uk_default = /*#__PURE__*/__webpack_require__.n(uk);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/africa.png
var africa = __webpack_require__("JUQ4");
var africa_default = /*#__PURE__*/__webpack_require__.n(africa);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/spain.png
var spain = __webpack_require__("5vD4");
var spain_default = /*#__PURE__*/__webpack_require__.n(spain);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/countryIcon.png
var countryIcon = __webpack_require__("d7pc");
var countryIcon_default = /*#__PURE__*/__webpack_require__.n(countryIcon);

// CONCATENATED MODULE: ./containers/CryptoModern/MapSection/index.js
var MapSection_jsx = external_react_default.a.createElement;












const MapSection = () => {
  return MapSection_jsx(mapSection_style, {
    id: "map"
  }, MapSection_jsx(Container["a" /* default */], {
    width: "1200px"
  }, MapSection_jsx(SectionHeader, null, MapSection_jsx(Heading["a" /* default */], {
    content: "More than 3 Bilion worldwide use"
  }), MapSection_jsx(Text["a" /* default */], {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor sit ."
  }), MapSection_jsx(Text["a" /* default */], {
    className: "smallText",
    content: "Licenced gambling countries"
  }), MapSection_jsx("div", {
    className: "countries"
  }, MapSection_jsx("div", {
    className: "countriesSingle"
  }, MapSection_jsx(Image["a" /* default */], {
    src: uk_default.a,
    alt: "country image"
  }), MapSection_jsx(Text["a" /* default */], {
    className: "smallText",
    content: "United Kingdom"
  })), MapSection_jsx("div", {
    className: "countriesSingle"
  }, MapSection_jsx(Image["a" /* default */], {
    src: africa_default.a,
    alt: "country image"
  }), MapSection_jsx(Text["a" /* default */], {
    className: "smallText",
    content: "South Africa"
  })), MapSection_jsx("div", {
    className: "countriesSingle"
  }, MapSection_jsx(Image["a" /* default */], {
    src: spain_default.a,
    alt: "country image"
  }), MapSection_jsx(Text["a" /* default */], {
    className: "smallText",
    content: "Spain"
  })))), MapSection_jsx(ImageWrapper, null, MapSection_jsx(Image["a" /* default */], {
    className: "mainImg",
    src: map_default.a,
    alt: "Map Image"
  }), MapSection_jsx("div", {
    className: "countryIcon"
  }, MapSection_jsx("div", {
    className: "countryIconSingle"
  }, MapSection_jsx(Image["a" /* default */], {
    className: "countryIconImg",
    src: countryIcon_default.a,
    alt: "Country Icon"
  })), MapSection_jsx("div", {
    className: "countryIconSingle"
  }, MapSection_jsx(Image["a" /* default */], {
    className: "countryIconImg",
    src: countryIcon_default.a,
    alt: "Country Icon"
  })), MapSection_jsx("div", {
    className: "countryIconSingle"
  }, MapSection_jsx(Image["a" /* default */], {
    className: "countryIconImg",
    src: countryIcon_default.a,
    alt: "Country Icon"
  })), MapSection_jsx("div", {
    className: "countryIconSingle"
  }, MapSection_jsx(Image["a" /* default */], {
    className: "countryIconImg",
    src: countryIcon_default.a,
    alt: "Country Icon"
  })), MapSection_jsx("div", {
    className: "countryIconSingle"
  }, MapSection_jsx(Image["a" /* default */], {
    className: "countryIconImg",
    src: countryIcon_default.a,
    alt: "Country Icon"
  })), MapSection_jsx("div", {
    className: "countryIconSingle"
  }, MapSection_jsx(Image["a" /* default */], {
    className: "countryIconImg",
    src: countryIcon_default.a,
    alt: "Country Icon"
  })), MapSection_jsx("div", {
    className: "countryIconSingle"
  }, MapSection_jsx(Image["a" /* default */], {
    className: "countryIconImg",
    src: countryIcon_default.a,
    alt: "Country Icon"
  }))))));
};

/* harmony default export */ var CryptoModern_MapSection = (MapSection);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Accordion/index.js + 1 modules
var Accordion = __webpack_require__("aVK5");

// EXTERNAL MODULE: external "react-icons-kit/entypo/thinDown"
var thinDown_ = __webpack_require__("2muP");

// EXTERNAL MODULE: external "react-icons-kit/entypo/thinRight"
var thinRight_ = __webpack_require__("JHY8");

// CONCATENATED MODULE: ./containers/CryptoModern/FaqSection/faqSection.style.js


const FaqSectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "faqSectionstyle__FaqSectionWrapper",
  componentId: "sc-1ttkj83-0"
})(["padding:80px 0 65px;overflow:hidden;@media (max-width:768px){padding:60px 0 15px;}.sectionHeader{display:flex;flex-direction:column;justify-content:center;align-items:center;}.reusecore__accordion{max-width:820px;margin:0 auto;border-radius:5px;.accordion__item{border-top:0;background-color:#08153f;color:#fff;border-radius:5px;transition:all 0.3s ease;cursor:pointer;i{opacity:0.6;}.accordion__header{padding:20px 30px;margin-bottom:7px;}.accordion__body{padding:5px 30px 20px;}}}"]);
/* harmony default export */ var faqSection_style = (FaqSectionWrapper);
// CONCATENATED MODULE: ./containers/CryptoModern/FaqSection/index.js
var FaqSection_jsx = external_react_default.a.createElement;

function FaqSection_extends() { FaqSection_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return FaqSection_extends.apply(this, arguments); }













const FaqSection = ({
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  titleStyle,
  descriptionStyle
}) => {
  return FaqSection_jsx(faqSection_style, {
    id: "faqSection"
  }, FaqSection_jsx(Container["a" /* default */], null, FaqSection_jsx(Box["a" /* default */], FaqSection_extends({}, sectionHeader, {
    className: "sectionHeader"
  }), FaqSection_jsx(Text["a" /* default */], FaqSection_extends({
    content: "Have Any Question ?"
  }, sectionSubTitle)), FaqSection_jsx(Heading["a" /* default */], FaqSection_extends({
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor Lorem ipsum dolor"
  }, sectionTitle))), FaqSection_jsx(Box["a" /* default */], {
    className: "row"
  }, FaqSection_jsx(Accordion["a" /* Accordion */], null, FaqSection_jsx(external_react_["Fragment"], null, Faq.map((faqItem, index) => FaqSection_jsx(Accordion["c" /* AccordionItem */], {
    key: `accordion_key-${index}`
  }, FaqSection_jsx(external_react_["Fragment"], null, FaqSection_jsx(Accordion["d" /* AccordionTitle */], null, FaqSection_jsx(external_react_["Fragment"], null, FaqSection_jsx(Heading["a" /* default */], FaqSection_extends({
    content: faqItem.title
  }, titleStyle)), FaqSection_jsx(Accordion["f" /* IconWrapper */], null, FaqSection_jsx(Accordion["g" /* OpenIcon */], null, FaqSection_jsx(external_react_icons_kit_["Icon"], {
    icon: thinRight_["thinRight"],
    size: 18
  })), FaqSection_jsx(Accordion["e" /* CloseIcon */], null, FaqSection_jsx(external_react_icons_kit_["Icon"], {
    icon: thinDown_["thinDown"],
    size: 18
  }))))), FaqSection_jsx(Accordion["b" /* AccordionBody */], null, FaqSection_jsx(Text["a" /* default */], FaqSection_extends({
    content: faqItem.description
  }, descriptionStyle)))))))))));
}; // FaqSection style props


// FaqSection default style
FaqSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '56px']
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: ['30px', '40px'],
    fontWeight: '300',
    letterSpacing: '-0.025em',
    color: '#fff',
    mb: '15px'
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['14px', '16px'],
    fontWeight: '400',
    color: '#496b96',
    mb: '0',
    maxWidth: '420px',
    lineHeight: '1.5'
  },
  // accordion title default style
  titleStyle: {
    fontSize: ['16px', '17px'],
    fontWeight: '400',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  // accordion description default style
  descriptionStyle: {
    fontSize: '15px',
    color: '#496b96',
    lineHeight: '1.75',
    mb: '0'
  }
};
/* harmony default export */ var CryptoModern_FaqSection = (FaqSection);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Input/index.js + 1 modules
var Input = __webpack_require__("olOc");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/cryptoModern/get-start.png
var get_start = __webpack_require__("0Wpt");
var get_start_default = /*#__PURE__*/__webpack_require__.n(get_start);

// CONCATENATED MODULE: ./containers/CryptoModern/Newsletter/newsletter.style.js


const NewsletterWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "newsletterstyle__NewsletterWrapper",
  componentId: "sc-1t2v4up-0"
})(["position:relative;background-image:url(", ");background-size:cover;background-position:center;background-repeat:no-repeat;padding:60px 80px;display:flex;align-items:center;justify-content:space-between;border-radius:10px;z-index:1;margin-top:100px;@media (max-width:1220px){padding:35px 40px;}@media (max-width:990px){flex-wrap:wrap;justify-content:center;}@media (max-width:575px){padding:35px 20px;margin-top:50px;}.container{display:flex;}"], get_start_default.a);
const ContactFormWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "newsletterstyle__ContactFormWrapper",
  componentId: "sc-1t2v4up-1"
})(["display:flex;align-items:flex-end;width:470px;max-width:100%;margin-left:auto;margin-right:auto;@media (max-width:1220px){width:420px;}@media (max-width:575px){width:100%;}@media (max-width:575px){flex-direction:column;align-items:center;margin-bottom:25px;button{width:100%;}}.email_input{flex-grow:1;margin-right:20px;@media (max-width:575px){width:100%;margin-right:0;margin-bottom:20px;}&.is-material{&.is-focus{label{font-size:14px;color:#fff;}.highlight{background:#fff;height:1px;}}}.highlight{background:rgba(255,255,255,0.4);}input{background:transparent;font-size:17px;font-weight:300;color:#fff;padding:10px 15px;border-color:rgba(255,255,255,0.3);@media (max-width:575px){height:48px;}}label{font-size:17px;color:#fff;font-weight:400;padding-left:10px;top:5px;pointer-events:none;}}.reusecore__button{background-color:#ffffff;color:#03103b;font-size:14px;letter-spacing:-0.1px;border-radius:5px;padding-left:16px;padding-right:16px;text-transform:uppercase;&:hover{box-shadow:#ffffff 0px 7px 18px -10px;}}"]);
/* harmony default export */ var newsletter_style = (NewsletterWrapper);
// CONCATENATED MODULE: ./containers/CryptoModern/Newsletter/index.js
var Newsletter_jsx = external_react_default.a.createElement;

function Newsletter_extends() { Newsletter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Newsletter_extends.apply(this, arguments); }










const Newsletter = ({
  sectionWrapper,
  textArea,
  buttonArea,
  buttonStyle,
  title,
  description
}) => {
  return Newsletter_jsx(Box["a" /* default */], Newsletter_extends({}, sectionWrapper, {
    as: "section"
  }), Newsletter_jsx(Container["a" /* default */], null, Newsletter_jsx(newsletter_style, null, Newsletter_jsx(Box["a" /* default */], textArea, Newsletter_jsx(Heading["a" /* default */], Newsletter_extends({
    content: "Get Started Mining now!"
  }, title)), Newsletter_jsx(Text["a" /* default */], Newsletter_extends({
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore"
  }, description))), Newsletter_jsx(Box["a" /* default */], buttonArea, Newsletter_jsx(ContactFormWrapper, null, Newsletter_jsx(Input["a" /* default */], {
    inputType: "email",
    label: "Email address",
    iconPosition: "right",
    isMaterial: true,
    className: "email_input"
  }), Newsletter_jsx(Button["a" /* default */], Newsletter_extends({}, buttonStyle, {
    title: "Get access"
  })))))));
};

Newsletter.defaultProps = {
  sectionWrapper: {},
  textArea: {
    mb: ['40px', '40px', '40px', '0', '0'],
    pr: ['0', '0', '0', '80px', '100px']
  },
  title: {
    fontSize: ['18px', '20px', '22px', '24px', '26px'],
    fontWeight: '500',
    color: '#fff',
    lineHeight: '1.34',
    mb: ['14px', '14px', '14px', '14px', '13px'],
    textAlign: ['center', 'center', 'center', 'left', 'left'],
    letterSpacing: '-0.025em'
  },
  description: {
    fontSize: ['14px', '14px'],
    maxWidth: ['100%', '400px'],
    fontWeight: '400',
    color: '#fefefe',
    lineHeight: '1.7',
    mb: 0,
    textAlign: ['center', 'center', 'center', 'left', 'left']
  },
  buttonArea: {
    zIndex: 1,
    width: ['100%', 'auto']
  },
  buttonStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '700',
    pl: '30px',
    pr: '30px'
  }
};
/* harmony default export */ var CryptoModern_Newsletter = (Newsletter);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/footer-bg.png
var footer_bg = __webpack_require__("i1V0");
var footer_bg_default = /*#__PURE__*/__webpack_require__.n(footer_bg);

// CONCATENATED MODULE: ./containers/CryptoModern/Footer/footer.style.js


const FooterWrapper = external_styled_components_default.a.footer.withConfig({
  displayName: "footerstyle__FooterWrapper",
  componentId: "sc-7hbsfl-0"
})(["position:relative;overflow:hidden;@media (min-width:576px){padding-top:170px;margin-top:-150px;&:before{content:'';position:absolute;width:104%;padding-bottom:104%;border-top-right-radius:11%;top:14%;left:0;pointer-events:none;background-color:rgba(18,103,230,0.03);transform:rotate(-6deg);@media (max-width:767px){padding-bottom:150%;}}}.footer_container{background-repeat:no-repeat;background-position:center 50px;padding-top:80px;padding-bottom:80px;position:relative;@media (min-width:576px){background-image:url(", ");}@media (max-width:990px){padding-bottom:20px;}}"], footer_bg_default.a);
const List = external_styled_components_default.a.ul.withConfig({
  displayName: "footerstyle__List",
  componentId: "sc-7hbsfl-1"
})([""]);
const ListItem = external_styled_components_default.a.li.withConfig({
  displayName: "footerstyle__ListItem",
  componentId: "sc-7hbsfl-2"
})(["a{color:#8ec7ff;font-size:14px;line-height:36px;transition:all 0.2s ease;font-weight:300;&:hover,&:focus{outline:0;text-decoration:none;color:#fff;}}"]);

/* harmony default export */ var footer_style = (FooterWrapper);
// CONCATENATED MODULE: ./containers/CryptoModern/Footer/index.js
var Footer_jsx = external_react_default.a.createElement;

function Footer_extends() { Footer_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Footer_extends.apply(this, arguments); }












const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  titleStyle,
  logoStyle,
  textStyle
}) => {
  return Footer_jsx(footer_style, null, Footer_jsx(Container["a" /* default */], {
    className: "footer_container"
  }, Footer_jsx(Box["a" /* default */], Footer_extends({
    className: "row"
  }, row), Footer_jsx(Box["a" /* default */], colOne, Footer_jsx(Logo["a" /* default */], {
    href: "#",
    logoSrc: logo_white_default.a,
    title: "Hosting",
    logoStyle: logoStyle
  }), Footer_jsx(Text["a" /* default */], Footer_extends({
    content: "hello@redq.io"
  }, textStyle)), Footer_jsx(Text["a" /* default */], Footer_extends({
    content: "+479-443-9334"
  }, textStyle))), Footer_jsx(Box["a" /* default */], colTwo, Footer_Data.map((widget, index) => Footer_jsx(Box["a" /* default */], Footer_extends({
    className: "col"
  }, col, {
    key: `footer-widget-${index}`
  }), Footer_jsx(Heading["a" /* default */], Footer_extends({
    content: widget.title
  }, titleStyle)), Footer_jsx(List, null, widget.menuItems.map((item, index) => Footer_jsx(ListItem, {
    key: `footer-list-item-${index}`
  }, Footer_jsx(link_default.a, {
    href: item.url
  }, Footer_jsx("a", {
    className: "ListItem"
  }, item.text)))))))))));
}; // Footer style props


// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  // Footer col one style
  colOne: {
    width: [1, '35%', '35%', '23%'],
    mt: [0, '13px'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0]
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '65%', '65%', '77%'],
    flexBox: true,
    flexWrap: 'wrap'
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '25%'],
    pl: '15px',
    pr: '15px',
    mb: '30px'
  },
  // widget title default style
  titleStyle: {
    color: '#fff',
    fontSize: '16px',
    fontWeight: '700',
    mb: '30px'
  },
  // Default logo size
  logoStyle: {
    width: '100px',
    mb: '15px'
  },
  // widget text default style
  textStyle: {
    color: '#8ec7ff',
    fontSize: '16px',
    mb: '10px',
    fontWeight: '300'
  }
};
/* harmony default export */ var CryptoModern_Footer = (Footer);
// CONCATENATED MODULE: ./containers/CryptoModern/cryptoModern.style.js


const GlobalStyle = external_styled_components_["createGlobalStyle"]`
  body {
    font-family: 'Roboto', sans-serif;
    background:#03103b;
  }
  .reuseModalParentWrapper,
  .reuseModalOverlay {
    z-index: 99999;
    .reuseModalHolder{
      border: 0;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-family: 'Roboto', sans-serif;
  }
  section {
    position: relative;
  }
  .reusecore__button {
    font-weight: 500;
  }
  @media only screen and (max-width: 667px) {
    .container {
      width: 100%;
    }
  }
  @media only screen and (max-width: 667px) {
    .container {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  @media only screen and (width: 320px) {
    .container {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
`;
const CryptoWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "cryptoModernstyle__CryptoWrapper",
  componentId: "qmfqiq-0"
})(["overflow:hidden;display:flex;flex-direction:column;min-height:100vh;.sticky-active{.navbar{padding:20px 0 21px;background-color:", ";background-image:none;box-shadow:0px 3px 8px 0px rgba(43,83,135,0.08);@media only screen and (max-width:1366px){padding:15px 0 16px;}.main-logo{display:none;}.logo-alt{display:block;}.mobile-menu{top:72px;}ul{li{a{color:", ";font-size:16px;font-weight:400;transition:all 0.3s ease;&:hover{color:", ";}}&.is-current{a{color:", ";}}}}.reusecore__button{&.menubar{color:", ";}&.text{color:", ";.btn-icon{svg{stroke:", ";}}@media only screen and (max-width:991px){}}}}}"], Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'), Object(external_styled_system_["themeGet"])('colors.secondary', '#000'), Object(external_styled_system_["themeGet"])('colors.menuHoverColor', '#03103b'), Object(external_styled_system_["themeGet"])('colors.menuHoverColor', '#03103b'), Object(external_styled_system_["themeGet"])('colors.secondary', '#000'), Object(external_styled_system_["themeGet"])('colors.secondary', '#000'), Object(external_styled_system_["themeGet"])('colors.secondary', '#000'));
const cryptoModern_style_ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "cryptoModernstyle__ContentWrapper",
  componentId: "qmfqiq-1"
})(["flex:1 0 auto;width:100%;overflow:hidden;"]);
const cryptoModern_style_SectionHeader = external_styled_components_default.a.header.withConfig({
  displayName: "cryptoModernstyle__SectionHeader",
  componentId: "qmfqiq-2"
})(["max-width:352px;width:100%;margin:0 auto 58px;text-align:center;@media only screen and (max-width:991px){margin-bottom:50px;}h5{font-size:14px;font-weight:700;line-height:24px;margin-bottom:12px;letter-spacing:1.5px;color:", ";text-transform:uppercase;@media only screen and (max-width:991px){font-size:13px;margin-bottom:10px;}}h2{font-size:30px;line-height:36px;font-weight:700;color:", ";margin:0;letter-spacing:-1px;@media only screen and (max-width:1366px){font-size:28px;letter-spacing:-0.7px;}@media only screen and (max-width:991px){font-size:26px;line-height:38px;letter-spacing:-0.5px;}}"], Object(external_styled_system_["themeGet"])('colors.primary', '#2563FF'), Object(external_styled_system_["themeGet"])('colors.headingColor', '#0F2137'));
/* harmony default export */ var cryptoModern_style = (GlobalStyle);
// CONCATENATED MODULE: ./pages/cryptomodern.js

var cryptomodern_jsx = external_react_default.a.createElement;



















/* harmony default export */ var cryptomodern = __webpack_exports__["default"] = (function () {
  return cryptomodern_jsx(external_styled_components_["ThemeProvider"], {
    theme: appModern["a" /* theme */]
  }, cryptomodern_jsx(external_react_default.a.Fragment, null, cryptomodern_jsx(head_default.a, null, cryptomodern_jsx("title", null, "Crypto Modern | A next js landing page"), cryptomodern_jsx("meta", {
    name: "Description",
    content: "React next landing page"
  }), cryptomodern_jsx("meta", {
    name: "theme-color",
    content: "#2563FF"
  }), cryptomodern_jsx("meta", {
    name: "keywords",
    content: "React, React js, Next, Next js, Super fast next js landing, Modren landing, Next js landing"
  }), cryptomodern_jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i",
    rel: "stylesheet"
  })), cryptomodern_jsx(style["a" /* ResetCSS */], null), cryptomodern_jsx(cryptoModern_style, null), cryptomodern_jsx(CryptoWrapper, null, cryptomodern_jsx(external_react_stickynode_default.a, {
    top: 0,
    innerZ: 9999,
    activeClass: "sticky-active"
  }, cryptomodern_jsx(CryptoModern_Navbar, null)), cryptomodern_jsx(cryptoModern_style_ContentWrapper, null, cryptomodern_jsx(CryptoModern_Banner, null), cryptomodern_jsx(CountDown, null), cryptomodern_jsx(CryptoModern_FeatureSection, null), cryptomodern_jsx(CryptoModern_WorkHistory, null), cryptomodern_jsx(Investment, null), cryptomodern_jsx(FundRaising, null), cryptomodern_jsx(Privacy, null), cryptomodern_jsx(WalletSection, null), cryptomodern_jsx(CryptoModern_MapSection, null), cryptomodern_jsx(CryptoModern_FaqSection, null), cryptomodern_jsx(CryptoModern_Newsletter, null)), cryptomodern_jsx(CryptoModern_Footer, null))));
});

/***/ }),

/***/ "NHP8":
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "Njvv":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABGlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+zRnCkAAAAXnRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RGR0hJSktMTU5PUFFSU1RVVldYWltcXl9j8oM0twAAAitJREFUOMutlMFy3DAMQwmQku1m+v9f2mRtiUQPXm82mU1P9VF+A1EkCLP//eFfp3o6ilcYAJikZxIvMNIJU2aVflKEgfSIoOUcwz7JuGQMBjMY3Vvr4TbHzjFLegIBkARggHucYB5BcpRONMzOvx5OgnB6eLhDy9Jut33MMl0goy+9Nw867kW403L7eP/zYTPvioD3bdvW3po7rDJnCmzB+as7JOVdkdHXt7et997cau67qYyxNtvdcs6ETkV6W7dt6b0FjCIkSYKTNfbbDfZZ49k4kyv323FMwXgwzFsL56NGEkrZjXTlGMdMQ1bl4gV34n61AbA6NMqMlpmZZvQxc3YVSDxNRnOO20jBVCUzesy6Rgo8QFXW/r6POr0FeqfMzEi/330pquY49jIzE+hELOvSgxXhxJN7VHUWZ2aQs29vW29hdUrqi810OQVs69vvtRGVdAd+dDijr+vqVgYABF6DZ2vPtuhagtegas4RjqsgvQalHPs767SOTpO/VKw83lFjaQ2Z9x37QfGA5r5tq+ecM58VQbr74y01rLJkLY+RpbuiZACjperz1Zr0COWYs+6KMivB22Kez/vtsJp5bWyc4ysF7DTMg/UWqDln1tXHyjmTbJ56Dhu6q8YYeSmqcuw0B/gtXkpj38enovKgVRD2Lb6UY9/Ho0Yph9UM8sWExjjbaDib4e6nP7+ClZl5Rgqu5CT4LS1lkqrucYpH316ltOxL6v7f7y+EeGg0lQ9RkAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "Oi65":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "TBBy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "U9T1":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/playCircle");

/***/ }),

/***/ "UKU4":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/graph-72a7d7a1a6daf8216e14f27643ecd2d6.png";

/***/ }),

/***/ "V7eC":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAMAAAChHKjRAAAAtFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////oK74hAAAAPHRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5OjvS6oqJAAACa0lEQVQ4y5VUi5IbIQzD2LDJ/f+3XnZ52JUgaXOda6clM5m7IGTLEqT0D0u+/T/+BhIsYrD+BJKUs+ac3Kf7O5t8hVgxgEYfX2Cyv/DJkq3UWjXN1lofHh4pFtIWJHOpWj2OAlC/rjYmyLCoAqDEbVN8lVJXObPSUXHOQSiZJGupRwUq22obp4rW4cC0q6XkwXJ63O8HGNBfdIgX9GcWEHCp+JPJ6v3j0MBRRwFPGcUhNMtkf3Mx7XKpD0iCeIIK2ivFNI2ieatj29B9nm30OYJMBqGxBckqxxWjfX6ejbJBjaq5z5Aaa3ONAP3OANHZOD8MTeAM/kBXe+hPkMOK3mfCUbYtMX1gSPkNBNPXcMmNroul0R1sLjsNRsh2kQlAr5Cl3mLIM1rxk4kDzJaKUT2UT1nhSi+mlTD2q5KPY5mHiXowGrF3bbe9gpCs3G4lx3DY6xC5VWImiQ0Cnfkj6OBWP8+rO46lJWiXQ1wjC0aLIcLg/vh8XG48xRzvcuEIKxzVMZu4LqIhdJinPJ5Mc0zDDHtvs2Wn0WmlPbDxYkIRuK0FIRgXho0NBKOacGPuOQUtKVkr88oeQrQeNyRsUCVAuq5kZkt5DYNCrd4+7lWYnk51+rxSuAdK+3mgHLf7vcKb83HN+TIYvRKhh+iFKABVa6bKhpw+QeGpc+A1H1p2fDHSxpFOj19RGcvMqtV27AL9PEC0DdbXfV8XevlCZ8aFfq4l7Q20c7eeHMwNNODpHu/xBYt3RhjvBc3gi9HnC/Pr6eHLw8gtECY93t4eeX/m+IYhDLgF2/1vn8N1ETi3395D+f4JjfTf6wfsBOSdhjwX3QAAAABJRU5ErkJggg=="

/***/ }),

/***/ "VsMR":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAABsCAMAAAB0IZ0UAAAA9lBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+xt8V8AAAAUnRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRiUhbVwAADKVJREFUaN7tW+2SHDmOA0j1vP/7OgncD1LKrP6w270XuxF3Ww5PxHRXJiWKBEFQBv77+f/84b/8uP8z9t896H+vffZfjmn/eAX84VP7DwCfPz/4rJ+tmQRJtn3bAMyfrGD90DwZswDbtgwY9L/BPkEwGBGMti+LsgD//QLWD8yTjIiMiCBgSSoK9g8WsH7i+4jIzIxs+6WKKko/CIL1t0lHBCMzc+WKCEDSFSQLsGj/HSStv0jPCTxmZK61Vmbbr7ziIqni5ML3kWn93jSfqyAIMiJj5VpvKzNJu6qCZFCU/EACf2MR67cAxwNy9+5jdv9qP+JiUXJ74F6BaRhfhsX6PcSA3Fh7R/7KtR7+jwgyIqIu9QIOHhs2bPpLbFhf5/j53HDP6O33AjKCdCgaiuKKkizfBcHzwZfYsL7OcQYbYvi6/cyVK1dmBkmbvbKoqHp1gBucLH+JDet3EBPRW7vtByMj+3N+xcCsQLWNjfNtSaL0lQe+On9GRkbmLOCxKmZERgYnpmyQ0Y/Ueux/zFepCOHb598bjcz2ccz++xcdagxOcE+MgQFKYWtbb++rqi6WIX7qgE/9T3KSrGNsyvwjKmFoAqOP2SCC4cn/XZilui4Sxhe4+EX8R2Sut/W2MoO8Sc7ggd1rmSzfmMOd55MytqqCxMmCb8Z/MHKt9c96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"

/***/ }),

/***/ "XaeP":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABICAMAAACeJmi/AAABZVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8N/mJiAAAAd3RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW1xdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dtbDsHEAAAahSURBVFjDvVjXkuNIDGt2kuzd///TGyt0OIBsyWHG3n24Om+oGVuCGACQbef+r5fI20/evDfe708X9eONx1f84X7hX9E7+hGA8Be8vmPEH+4X78XjB71HAQyv4dX7K0T8BuC9DyEAxOlDu0KKApRaW32NIr4A4P7IVwh6kyHgTfxSy76X3b1CvMSA58eUc04xeITQ8IdRBQTRyr6uq8K+j4HxxjzN85STITBvRfCu7dsShZnJUxAvWfiQpsv1Ok8xSO8jCxYGCAUArdUqnyoJhDhdfv265Ogtgu4UAYCtAGDfNy/yvg7oREh5vlwvOTg+rQ3YwKQKADKgPsfANPI8z8mjdQyC7WEm6I1U1vcbvV/5IKObDt3f96ZsCNGBIejToNafWU0Wt1q2dauNmDF1MMLXNkj5EQHl44VVyJ91RRAIIVVHklYQqlSr7lsEAiD4PQpFgB9LQ2W6r7UWX7ZtA0j7pAsD2NYcRQVCHNc9y+k6P1g3SuM5iPAqTG0+K6+k7g6/5nmawIVt+fq6LQjicx2U/dOeVVm4vXavNA+uoA5Ion6sJLSvaeA5PgpCibl0n+bLlAXFbaOQ/XMMoCJSdT6FHmPaiJAZwu7NLvqf+XBwM8JXfAAC1Jp9b0aoYXgfdOHHCxiOXqWE9tqaoGQFXbq8U7cMg0lqDtWBBLjcgwoS4AqoSs6ohHPtESK+ijtP0ww+dFzKmqIXoVQKW5vCUpI3P8dgwpwuFyLUpgBoHp+dEjAlTsV00dtDKeJz9dA5Ivi2VSUxOExlIfzoXciqLPbjASI+VjGmab5eL1N0BcqEsBBCV2DkloMkstQw7tWMTzYNj0QICWa0LsuymYpoGRlgOQGCrqMO3l5joJHgSfMB8LXcNiqA+mgIiYpykVE06v/BsMODS+f5SpMNHQBfX/AXR7+C0du808mjiqut3wUaH8oIj4UCQi/b7XaDu6AuCQVUmxiGF1HNyoDqOUDjySWWcZ5h0pUAC8SFN6bke10Xt1dDAEFztZx6tWLGh1EDBDJhXxbYAADQFzS2q2OBnkr5CVWdC+3umH7xaIR1DI8sKwC26uN0/f3rmqWtGDY7rLfrWE8ITY2i+XpHUEdHI6BB5ECA4ny+XH//viQpUtcIw6Nvo1g+Ilqwdef46/c6KJ85biuZgCqyrldkEbtU9gMItKyISyh38LX4dtbB+MyZH3rd1gV+iqqruU2+NX9sICqRGDnfca26dj+yIAJUjWFpbG5B1QCZa73FiNVkjUtKnu7HDUN16vyJkLX38FlTpC4NtgmNTYoujDkGZpAoOkPdQLAskk74jRlW27iMija8uYP0um8b5IZsBoIYghgC6sVNh5Ima3Vi8UetH8mpwxQLRAHbw0CQkYVXD/Riyxb5pqbPkOkwxpToLQ9OdOH1DOvsRVAEvQJ0w6irNJiVD/boCuc4nlkYBOOK+shgy0i0ncESbUr5pjns+2orna5QG7kiOpBIaBh41J0TrTr4EPSCapppGA+ccdvEpgj8YpS+6zyqoIhuZyOGc0iwUnW0gaOLaLrJOcUXseFeVaYE8Lo6+zGx9Ql9bClq6Opl/EjO/Zj/6YbiDreRUclzdeZ9egbotkzyw34vj31g5inewjq1yZeu/sO9xkOZuSPR1fhHGP08MXybemIKGHtA12rsra03bB6b2pQ9zI488n1mjQ3aM03NGM3foO7ln68vWEYda75W8D76om0NXJicjOmMWWCdAZGkuAIEWoYju7BTGDPOdKLlbAWmd1B6HHXjPNCx/tBylBjYRshvar6NviuCNpnFDvQvPB+XU07KRbS7bCpHNh4XcCh64Xo4xnB0XVSIgAh4BADiPqYl9vsq+McNIPtELqcZSxXsuFEeNjOiJQEhbglcnxxn5GBdNBNBco4r8ZhrE5aqxuv3OmJwqheIT03UhbjbmuGNufjYxzoOO2plMKKxnLbDqykjnIAg1uQjAjb6KaGNqc1WjqFhDubbchBEs9C+acQtoQfhuGGcW52Rk6ORIkHKK+eqxtBPPuBd9dIKCLux38/O6tfdWIi+I16QdB0hWBYIQlarhx4TZRwp5b7s2m8aLmYSJvM6Qhis5kBy2hIUKsi7gz67VlnFddnODTuOR7RiPkpT9qfu3MvW3fXspCtaaQ+s1ujwVwsa1e9+DEK1Tu7x/nqs2PJw3NVmHYb2JothlO1+WJLn04mXNye603bUyR+/RJCXrx4OB/k5iyHqpy8h5PWg6N7df36N8vI9iPzVNzPPIP/1618clIh4BYN78AAAAABJRU5ErkJggg=="

/***/ }),

/***/ "YBsB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "YJwd":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/fund-graph-e9ac6d4497a3efd1b1d66fef95ff6315.png";

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aVK5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/react-accessible-accordion/dist/fancy-example.css
var fancy_example = __webpack_require__("E9dt");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-accessible-accordion"
var external_react_accessible_accordion_ = __webpack_require__("uQVn");

// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Accordion/accordion.style.js


const fadeIn = Object(external_styled_components_["keyframes"])(["0%{opacity:0;}100%{opacity:1;}"]);
const AccordionWrapper = external_styled_components_default()(external_react_accessible_accordion_["Accordion"]).withConfig({
  displayName: "accordionstyle__AccordionWrapper",
  componentId: "sc-1inv165-0"
})([""]);
const AccordionItemWrapper = external_styled_components_default()(external_react_accessible_accordion_["AccordionItem"]).withConfig({
  displayName: "accordionstyle__AccordionItemWrapper",
  componentId: "sc-1inv165-1"
})([""]);
const OpenIcon = external_styled_components_default.a.div.withConfig({
  displayName: "accordionstyle__OpenIcon",
  componentId: "sc-1inv165-2"
})([""]);
const CloseIcon = external_styled_components_default.a.div.withConfig({
  displayName: "accordionstyle__CloseIcon",
  componentId: "sc-1inv165-3"
})(["opacity:0;"]);
const AccordionTitleWrapper = external_styled_components_default()(external_react_accessible_accordion_["AccordionItemHeading"]).withConfig({
  displayName: "accordionstyle__AccordionTitleWrapper",
  componentId: "sc-1inv165-4"
})(["> div{display:flex;align-items:center;cursor:pointer;position:relative;&[aria-expanded='false']{", "{opacity:0;}", "{opacity:1;}}}&:focus{outline:none;}*{flex-grow:1;}"], OpenIcon, CloseIcon);
const AccordionItemButtonWrapper = external_styled_components_default()(external_react_accessible_accordion_["AccordionItemButton"]).withConfig({
  displayName: "accordionstyle__AccordionItemButtonWrapper",
  componentId: "sc-1inv165-5"
})([""]);
const AccordionBodyWrapper = external_styled_components_default()(external_react_accessible_accordion_["AccordionItemPanel"]).withConfig({
  displayName: "accordionstyle__AccordionBodyWrapper",
  componentId: "sc-1inv165-6"
})(["animation:0.35s ", " ease-in;&.accordion__body--hidden{animation:0.35s ", " ease-in;}"], fadeIn, fadeIn);
const IconWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "accordionstyle__IconWrapper",
  componentId: "sc-1inv165-7"
})(["margin-left:30px;width:40px;position:relative;", ",", "{position:absolute;top:50%;right:0;transform:translateY(-50%);transition:0.25s ease-in-out;}"], OpenIcon, CloseIcon);
// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Accordion/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Accordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AccordionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AccordionTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AccordionBody; });
/* concated harmony reexport IconWrapper */__webpack_require__.d(__webpack_exports__, "f", function() { return IconWrapper; });
/* concated harmony reexport OpenIcon */__webpack_require__.d(__webpack_exports__, "g", function() { return OpenIcon; });
/* concated harmony reexport CloseIcon */__webpack_require__.d(__webpack_exports__, "e", function() { return CloseIcon; });
var __jsx = external_react_default.a.createElement;




const Accordion = ({
  className,
  children,
  allowZeroExpanded = true
}) => {
  // Add all classs to an array
  const addAllClasses = ['reusecore__accordion']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(AccordionWrapper, {
    allowZeroExpanded: allowZeroExpanded,
    className: addAllClasses.join(' ')
  }, children);
};

const AccordionItem = ({
  className,
  children,
  expanded
}) => {
  // Add all classs to an array
  const addAllClasses = ['accordion__item']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(AccordionItemWrapper, {
    className: addAllClasses.join(' ')
  }, children);
};

const AccordionTitle = ({
  className,
  children
}) => {
  // Add all classs to an array
  const addAllClasses = ['accordion__header']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(AccordionTitleWrapper, {
    className: addAllClasses.join(' ')
  }, __jsx(AccordionItemButtonWrapper, null, children));
};

const AccordionBody = ({
  className,
  children
}) => {
  // Add all classs to an array
  const addAllClasses = ['accordion__body']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(AccordionBodyWrapper, {
    className: addAllClasses.join(' ')
  }, children);
};



/***/ }),

/***/ "b4OD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/FeatureBlock/featureBlock.style.js

 // FeatureBlock wrapper style

const FeatureBlockWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "featureBlockstyle__FeatureBlockWrapper",
  componentId: "sc-1pllarm-0"
})(["&.icon_left{display:flex;.icon__wrapper{flex-shrink:0;}}&.icon_right{display:flex;flex-direction:row-reverse;.content__wrapper{text-align:right;}.icon__wrapper{flex-shrink:0;}}", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], external_styled_system_["display"], external_styled_system_["width"], external_styled_system_["height"], external_styled_system_["flexWrap"], external_styled_system_["flexDirection"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], external_styled_system_["position"], external_styled_system_["color"], external_styled_system_["space"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["boxShadow"], external_styled_system_["borderRadius"], external_styled_system_["overflow"]); // Icon wrapper style

const IconWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "featureBlockstyle__IconWrapper",
  componentId: "sc-1pllarm-1"
})(["", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], external_styled_system_["display"], external_styled_system_["width"], external_styled_system_["height"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], external_styled_system_["position"], external_styled_system_["color"], external_styled_system_["space"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["boxShadow"], external_styled_system_["borderRadius"], external_styled_system_["overflow"], external_styled_system_["fontSize"]); // Content wrapper style

const ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "featureBlockstyle__ContentWrapper",
  componentId: "sc-1pllarm-2"
})(["", " ", " ", ""], external_styled_system_["width"], external_styled_system_["space"], external_styled_system_["textAlign"]); // Button wrapper style

const ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "featureBlockstyle__ButtonWrapper",
  componentId: "sc-1pllarm-3"
})(["", " ", " ", " ", " ", ""], external_styled_system_["display"], external_styled_system_["space"], external_styled_system_["alignItems"], external_styled_system_["flexDirection"], external_styled_system_["justifyContent"]);

/* harmony default export */ var featureBlock_style = (FeatureBlockWrapper);
// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/FeatureBlock/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const FeatureBlock = (_ref) => {
  let {
    className,
    icon,
    title,
    button,
    description,
    iconPosition,
    additionalContent,
    wrapperStyle,
    iconStyle,
    contentStyle,
    btnWrapperStyle
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "icon", "title", "button", "description", "iconPosition", "additionalContent", "wrapperStyle", "iconStyle", "contentStyle", "btnWrapperStyle"]);

  // Add all classs to an array
  const addAllClasses = ['feature__block']; // Add icon position class

  if (iconPosition) {
    addAllClasses.push(`icon_${iconPosition}`);
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // check icon value and add


  const Icon = icon && __jsx(IconWrapper, _extends({
    className: "icon__wrapper"
  }, iconStyle), icon);

  return __jsx(featureBlock_style, _extends({
    className: addAllClasses.join(' ')
  }, wrapperStyle, props), Icon, title || description || button ? __jsx(external_react_["Fragment"], null, __jsx(ContentWrapper, _extends({
    className: "content__wrapper"
  }, contentStyle), title, description, button && __jsx(ButtonWrapper, _extends({
    className: "button__wrapper"
  }, btnWrapperStyle), button)), additionalContent) : '');
};

FeatureBlock.defaultProps = {
  iconPosition: 'top'
};
/* harmony default export */ var components_FeatureBlock = __webpack_exports__["a"] = (FeatureBlock);

/***/ }),

/***/ "bHe8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/Q04");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('p').withConfig({
  displayName: "Heading__HeadingWrapper",
  componentId: "sc-10v4eax-0"
})(_base__WEBPACK_IMPORTED_MODULE_3__[/* base */ "a"], styled_system__WEBPACK_IMPORTED_MODULE_2__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_2__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_2__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_3__[/* themed */ "b"])('Heading'));

const Heading = (_ref) => {
  let {
    content
  } = _ref,
      props = _objectWithoutProperties(_ref, ["content"]);

  return __jsx(HeadingWrapper, props, content);
};

/* harmony default export */ __webpack_exports__["a"] = (Heading);
Heading.defaultProps = {
  as: 'h2',
  mt: 0,
  mb: '1rem',
  fontWeight: 'bold'
};

/***/ }),

/***/ "bcok":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAVCAYAAACg/AXsAAABK0lEQVQ4jaWUTyuEURSHn6bZTPInRZSULKVkYyOSD2Cj2NniC9ixsbSynKX1yMLCBqlhb2FCU+IDKElToh5d3qm31yyu61enzuLcp985956LGhsLal2tFetLxGkNOAVmgcdfJyJcDKstf/SpTqQ4WQUqWb4FNIoF5QhIJWtlHzjuWJGzNaLuqdfqg3qoLqt96rxaVZ/UV/VG3VV7wtk2YE598e9qqkNhJgPAEdAbeVPFVvvDTDZDkgBoAYvAfXCylAAIqgZASAJkMhFy1k5KkdfcSR95yFsiZDoPaSZC1oGuNuQyETIK1IBustf4H90FJ3XgNtEN351kz34l0cm7Op5fwJMEyE5+AUMMZtsbq3O1XISEGFMvsp/sSt1Qp9QZdVttqM/qQfsbUPkCFpo1BZ4+ajQAAAAASUVORK5CYII="

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cIfr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Af6");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("E+gT");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KFN4");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Logo = (_ref) => {
  let {
    logoWrapperStyle,
    logoStyle,
    titleStyle,
    withAchor,
    anchorProps,
    logoSrc,
    title
  } = _ref,
      props = _objectWithoutProperties(_ref, ["logoWrapperStyle", "logoStyle", "titleStyle", "withAchor", "anchorProps", "logoSrc", "title"]);

  return __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _extends({}, props, logoWrapperStyle), withAchor ? __jsx("a", anchorProps, logoSrc ? __jsx(_Image__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _extends({
    src: logoSrc,
    alt: title
  }, logoStyle)) : __jsx(_Text__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extends({
    content: title
  }, titleStyle))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, logoSrc ? __jsx(_Image__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _extends({
    src: logoSrc,
    alt: title
  }, logoStyle)) : __jsx(_Text__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extends({
    content: title
  }, titleStyle))));
};

Logo.defaultProps = {
  logoWrapperStyle: {
    display: 'inline-block',
    mr: '1rem',
    'a:hover,a:focus': {
      textDecoration: 'none'
    }
  },
  titleStyle: {
    display: 'inline-block',
    fontSize: '2rem',
    lineHeight: 'inherit',
    whiteSpace: 'nowrap'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Logo);

/***/ }),

/***/ "d7pc":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAqFBMVEUAAAA2wsY3w8c3w8c3w8c3w8c3w8c3w8c3w8c3w8c3w8c3w8Y3w8c2wsY2w8Y3w8c3w8c2wsc3wsY3w8c3w8c3w8c3w8c3w8c3wsc3w8c3w8c3w8c3w8c3w8c3w8c3w8c3w8c3w8c3w8c3w8c3w8c3w8c3w8c3w8c3w8c3wsc3w8c3w8c3w8c2wsc2wsY3w8c3w8c3w8Y3w8c3w8c3w8c2w8c3w8c3w8dqh206AAAAOHRSTlMAABYuQE1WWgszUldKPTgIOFhHIVU2Ajk7BENUQiMMi9L1Sdn/ivr52leM1fYAVyI6AkxHU0o9V28zWbYAAAF+SURBVDjLnZXpdoIwEIUViBgCCJgYFCy4tY0Krbi9/5s1eCwQdr0/J9/JySy5Mxi8q6EkK2CkqiOgyNKwBRxDDemGYUJoGoaONDhuACeW7XAql+nY1qSOnGKdwJIIwNMKOKPIhTVyEZ2J5HzhEVgr4i3mwp0+gI0CfvFe6sEWebSQESJtKEHLrErYha1yR/81ozrsEHg+4cMmXSixPx4odGCnHPiYEM3sRk0tnR0JiVErCFerMLDEKJI4KotJrTfbhzZrIazLHFUM4c4nyVlajCsKR4GA7raZdsW4ATiKhazCHA2FLmCOqsKbPnP0SzhQ29BVBX3hAWJaQY4GlbTEYtGsWN/VYr3QAomVGrs/HI+HfamxLG1s1G9coteGcDCOu0c7flqSBfp+mB7fEGfW9cPaPzdb9raM34K7nPykmUz803v2lpomqzdNVjbNNDecVK04wctag6fxWTT4c0wnjWvjwq7Kjb/EvSlXdmlcG6midBndVfWeLqPo7Z32Bzo9Rf0vCgUkAAAAAElFTkSuQmCC"

/***/ }),

/***/ "fvxO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gCS2":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/feather/menu");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "h2o+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buttonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return colorStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sizeStyle; });
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_0__);

const buttonStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'buttonStyles'
});
const colorStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'colorStyles',
  prop: 'colors'
});
const sizeStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'sizeStyles',
  prop: 'size'
});
const cards = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'cards'
});


/***/ }),

/***/ "hWXR":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/illustration1-fd4162eb4b69b92e2bda67f3773a28ef.png";

/***/ }),

/***/ "i1V0":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/footer-bg-6c398a2ed748b326cdce58b311f7b91b.png";

/***/ }),

/***/ "ikMy":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAMAAAC6CgRnAAACqVBMVEXYACcAUrTw8PDw8PAAUrTw8PDw8PDkeIvkeIvmkKDiZHvw8PDw8PDw8PDw8PDw8PB/ptR7o9NwnNByndBmlc1pl85bjstdj8vw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw7u5/ptTw7O16o9Pw8PB2n9FyndBwnNBpl87w8PBllM3w8PBhkszw8PDw8PDw8PBWislVisngTWjgTWjgS2ZNhcdOhcjfSmVHgMZFf8U+e8Q+e8TopLDooK3opLDoo6/opbHooK3ooq8iaLwdZbu+z+TI1ebbH0HbIELbIUMbZLsfZryyx+DJiqTbGz7bHD/bHT8VYLkWYLkYYrq7hqW7zePGiKPNjaYPXLgQXbgRXbgSXrjZDTLZDjPaEDTaETUFVbUJWLYMWrcAUrQLWbcMWrcNW7cQXbgVYLkWYLkYYboYYroZY7oaY7sdZbseZrwfZrwgZ7whaLwjab0kar0lar0ma70na74pbb4tcL8ucMAvccA2dcE5eMI6eMM8esNHgMZIgcarw9+1yeG4y+K5jqy8zuO9z+O+kKy/kKzB0eTCkKvD0uXEkazE0+XF0+XIlK3I1ebI1ubKl6/M2OfNlazN2efPmK/P2ujQl63QnLHRl63R3OjT3enU3enVnLDW3+nYACfYBSvYnK7Y4OrY4erZBizZBy3ZCC3ZCC7ZCS/ZCjDZCzDaDzTaETXaEjbaEzfaFDjaFjnbIkPb4uvcJEXc4+vf5ezg5eziZnziaH7i5+zjaX/jaoDja4HjbILjbYLjb4TjcYbl6e3miJnmiZrmi5zonKronavonqvooK3ooa7oo6/opLDopbHpp7PpqLPpqrbpq7bprrnu29/u3uHu4OPu7e7v4uTv5+jv6Onv6erv6uvv7O7w6+zw7e7w7u7w7+/w8PD3PFsdAAAAY3RSTlMAAQECAwQFCAoKDCMkJSYnQERHSk5QV1phYmNkZWZnhomKiouLkZKUlpydnZ6foKHFxsfIycvLy9DR1dbX2NjZ2tvb+fr6+vr6+vv7+/v7+/v8/Pz8/Pz8/f39/f39/f3+/v67CtJpAAACKElEQVQYGU3BTW/SYAAH8P/TPqW8FgoMxgxCKLgs8+RLoonuZuLdq9nZD6Dfwk9i1Ivx6M1kOxiNidnc+9hgKy+lULpSytMH6eqS/X4E/yWUzFK80HH6I8vhuEZwTa2slNefHHmkcbzVbh8ZCFAEtGoVlAoiZDEtZ7NK6y8WKAB5uXbfwg0BaGQSuw5AAWH9fe2j3JvjRnLlZexN04cAVO5Yx6+yCkPoSiqtJhr1GiAi8/CeEJk+O4nSismoejLNrSn1b7HkpSNKq40p41F3o6MlTEZVmWtJ7WtLp7wrxh9H4Uz9uP2gdGUyurTEItqXjg7k92myIACOdXm3UyZYYOnlLdOQCXiKqmsU4F6lPkOEgIipFPK9vACw7zT3lCDgwBj7YEPuI/8cC/PPNH9MEBJmHmYXPY7QPEOTLm7zPNxI0XFEQEiYzQBJ4gjxER3WCEKifeFJJYWAITC3af8wDaBbXgUiPY/mMrakHxQADPt0sB0FJjlb0xWfYz6FOeye/YwBrkltIwZI4osTJ8sAzFG8UvvDAeBbIqQiEsubFyPLi5mMqsbvR5M48SfYb4q+W0yXNpv9y7ZVMRlVd892NlyZuJNtS8Bg5/z1qdFvtaIIFPXuh2qmfL7dgwAc/jkdGOddCaHkePCplmruzUEBX3+r1XUQhAh67N2vtg9QAO4Pa6bilvbuIRYoAgemViWM+5jy0ZjvHRkIEITEhJJV4wXdG5gj28e1f+Ny8rhYxBqlAAAAAElFTkSuQmCC"

/***/ }),

/***/ "isz7":
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "jvFD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KeDb")


/***/ }),

/***/ "k094":
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "l54f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/Q04");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const BoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('div').withConfig({
  displayName: "Box__BoxWrapper",
  componentId: "sc-6cmitf-0"
})(_base__WEBPACK_IMPORTED_MODULE_3__[/* base */ "a"], Object(_base__WEBPACK_IMPORTED_MODULE_3__[/* themed */ "b"])('Box'), props => props.flexBox && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])({
  display: 'flex'
}, styled_system__WEBPACK_IMPORTED_MODULE_2__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_2__["justifyContent"], Object(_base__WEBPACK_IMPORTED_MODULE_3__[/* themed */ "b"])('FlexBox')));

const Box = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(BoxWrapper, props, children);
};

/* harmony default export */ __webpack_exports__["a"] = (Box);
Box.defaultProps = {
  as: 'div'
};

/***/ }),

/***/ "l8JZ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "lpv4":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "mU6f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Oi65");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_kit_fa_star__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Cgac");
/* harmony import */ var react_icons_kit_fa_star__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_star__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit_fa_starO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/idJ");
/* harmony import */ var react_icons_kit_fa_starO__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_starO__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Rating = ({
  rating
}) => {
  const totalRating = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      totalRating.push(__jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        key: `rating-key${i}`,
        icon: react_icons_kit_fa_star__WEBPACK_IMPORTED_MODULE_2__["star"],
        className: "star"
      }));
    } else {
      totalRating.push(__jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        key: `rating-key${i}`,
        icon: react_icons_kit_fa_starO__WEBPACK_IMPORTED_MODULE_3__["starO"],
        className: "star-o"
      }));
    }
  }

  return __jsx("div", {
    className: "rating"
  }, totalRating);
};

/* harmony default export */ __webpack_exports__["a"] = (Rating);

/***/ }),

/***/ "mXe9":
/***/ (function(module, exports) {



/***/ }),

/***/ "nyf8":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "olOc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Input/input.style.js


const InputField = external_styled_components_default.a.div.withConfig({
  displayName: "inputstyle__InputField",
  componentId: "rbfkf4-0"
})(["position:relative;.field-wrapper{position:relative;}&.icon-left,&.icon-right{.field-wrapper{display:flex;align-items:center;> .input-icon{position:absolute;top:0;bottom:auto;display:flex;align-items:center;justify-content:center;width:34px;height:40px;}}}&.icon-left{.field-wrapper{> .input-icon{left:0;right:auto;}> input{padding-left:34px;}}}&.icon-right{.field-wrapper{> .input-icon{left:auto;right:0;}> input{padding-right:34px;}}}label{display:block;color:", ";font-size:", "px;font-weight:", ";margin-bottom:", "px;transition:0.2s ease all;}textarea,input{font-size:16px;padding:11px;display:block;width:100%;color:", ";box-shadow:none;border-radius:4px;box-sizing:border-box;border:1px solid ", ";transition:border-color 0.2s ease;&:focus{outline:none;border-color:", ";}}textarea{min-height:150px;}&.is-material{label{position:absolute;left:0;top:10px;}input,textarea{border-radius:0;border-top:0;border-left:0;border-right:0;padding-left:0;padding-right:0;}textarea{min-height:40px;padding-bottom:0;}.highlight{position:absolute;height:1px;top:auto;left:50%;bottom:0;width:0;pointer-events:none;transition:all 0.2s ease;}&.icon-left,&.icon-right{.field-wrapper{flex-direction:row-reverse;> .input-icon{width:auto;}> input{flex:1;}}}&.icon-left{.field-wrapper{> input{padding-left:20px;}}label{top:-15px;font-size:12px;}}&.icon-right{.field-wrapper{> input{padding-right:20px;}}}&.is-focus{input{border-color:", ";}label{top:-16px;font-size:12px;color:", ";}.highlight{width:100%;height:2px;background-color:", ";left:0;}}}"], Object(external_styled_system_["themeGet"])('colors.labelColor', '#767676'), Object(external_styled_system_["themeGet"])('fontSizes.4', '16'), Object(external_styled_system_["themeGet"])('fontWeights.4', '500'), Object(external_styled_system_["themeGet"])('space.3', '10'), Object(external_styled_system_["themeGet"])('colors.textColor', '#484848'), Object(external_styled_system_["themeGet"])('colors.inactiveIcon', '#ebebeb'), Object(external_styled_system_["themeGet"])('colors.primary', '#028489'), Object(external_styled_system_["themeGet"])('colors.inactiveIcon', '#ebebeb'), Object(external_styled_system_["themeGet"])('colors.textColor', '#484848'), Object(external_styled_system_["themeGet"])('colors.primary', '#028489'));
const EyeButton = external_styled_components_default.a.button.withConfig({
  displayName: "inputstyle__EyeButton",
  componentId: "rbfkf4-1"
})(["width:43px;height:40px;border:0;padding:0;margin:0;top:0;right:0;position:absolute;outline:none;cursor:pointer;box-shadow:none;display:flex;align-items:center;justify-content:center;background-color:transparent;> span{width:12px;height:12px;display:block;border:solid 1px ", ";border-radius:75% 15%;transform:rotate(45deg);position:relative;&:before{content:'';display:block;width:4px;height:4px;border-radius:50%;left:3px;top:3px;position:absolute;border:solid 1px ", ";}}&.eye-closed{> span{&:after{content:'';display:block;width:1px;height:20px;left:calc(50% - 1px / 2);top:-4px;position:absolute;background-color:", ";transform:rotate(-12deg);}}}"], Object(external_styled_system_["themeGet"])('colors.textColor', '#484848'), Object(external_styled_system_["themeGet"])('colors.textColor', '#484848'), Object(external_styled_system_["themeGet"])('colors.textColor', '#484848'));

/* harmony default export */ var input_style = (InputField);
// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Input/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Input = (_ref) => {
  let {
    label,
    value,
    onBlur,
    onFocus,
    onChange,
    inputType,
    isMaterial,
    icon,
    iconPosition,
    passwordShowHide,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label", "value", "onBlur", "onFocus", "onChange", "inputType", "isMaterial", "icon", "iconPosition", "passwordShowHide", "className"]);

  // use toggle hooks
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({
    toggle: false,
    focus: false,
    value: ''
  }); // toggle function

  const handleToggle = () => {
    setState(_objectSpread({}, state, {
      toggle: !state.toggle
    }));
  }; // add focus class


  const handleOnFocus = event => {
    setState(_objectSpread({}, state, {
      focus: true
    }));
    onFocus(event);
  }; // remove focus class


  const handleOnBlur = event => {
    setState(_objectSpread({}, state, {
      focus: false
    }));
    onBlur(event);
  }; // handle input value


  const handleOnChange = event => {
    setState(_objectSpread({}, state, {
      value: event.target.value
    }));
    onChange(event.target.value);
  }; // get input focus class


  const getInputFocusClass = () => {
    if (state.focus === true || state.value !== '') {
      return 'is-focus';
    } else {
      return '';
    }
  }; // init variable


  let inputElement, htmlFor; // Add all classs to an array

  const addAllClasses = ['reusecore__input']; // Add is-material class

  if (isMaterial) {
    addAllClasses.push('is-material');
  } // Add icon position class if input element has icon


  if (icon && iconPosition) {
    addAllClasses.push(`icon-${iconPosition}`);
  } // Add new class


  if (className) {
    addAllClasses.push(className);
  } // if lable is not empty


  if (label) {
    htmlFor = label.replace(/\s+/g, '_').toLowerCase();
  } // Label position


  const LabelPosition = isMaterial === true ? 'bottom' : 'top'; // Label field

  const LabelField = label && __jsx("label", {
    htmlFor: htmlFor
  }, label); // Input type check


  switch (inputType) {
    case 'textarea':
      inputElement = __jsx("textarea", _extends({}, props, {
        id: htmlFor,
        name: htmlFor,
        value: state.value,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus
      }));
      break;

    case 'password':
      inputElement = __jsx("div", {
        className: "field-wrapper"
      }, __jsx("input", _extends({}, props, {
        id: htmlFor,
        name: htmlFor,
        type: state.toggle ? 'password' : 'text',
        value: state.value,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus
      })), passwordShowHide && __jsx(EyeButton, {
        onClick: handleToggle,
        className: state.toggle ? 'eye' : 'eye-closed'
      }, __jsx("span", null)));
      break;

    default:
      inputElement = __jsx("div", {
        className: "field-wrapper"
      }, __jsx("input", _extends({}, props, {
        id: htmlFor,
        name: htmlFor,
        type: inputType,
        value: state.value,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus
      })), icon && __jsx("span", {
        className: "input-icon"
      }, icon));
  }

  return __jsx(input_style, {
    className: `${addAllClasses.join(' ')} ${getInputFocusClass()}`
  }, LabelPosition === 'top' && LabelField, inputElement, isMaterial && __jsx("span", {
    className: "highlight"
  }), LabelPosition === 'bottom' && LabelField);
};
/** Inout prop type checking. */


/** Inout default type. */
Input.defaultProps = {
  inputType: 'text',
  isMaterial: false,
  iconPosition: 'left',
  onBlur: () => {},
  onFocus: () => {},
  onChange: () => {}
};
/* harmony default export */ var components_Input = __webpack_exports__["a"] = (Input);

/***/ }),

/***/ "rZdf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _customVariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h2o+");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/Q04");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('div').withConfig({
  displayName: "Card__CardWrapper",
  componentId: "sc-1va5zk3-0"
})(_base__WEBPACK_IMPORTED_MODULE_4__[/* base */ "a"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["backgroundImage"], styled_system__WEBPACK_IMPORTED_MODULE_2__["backgroundSize"], styled_system__WEBPACK_IMPORTED_MODULE_2__["backgroundPosition"], styled_system__WEBPACK_IMPORTED_MODULE_2__["backgroundRepeat"], styled_system__WEBPACK_IMPORTED_MODULE_2__["opacity"], _customVariant__WEBPACK_IMPORTED_MODULE_3__[/* cards */ "b"], Object(_base__WEBPACK_IMPORTED_MODULE_4__[/* themed */ "b"])('Card'));

const Card = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(CardWrapper, props, children);
};

Card.defaultProps = {
  boxShadow: '0px 20px 35px rgba(0, 0, 0, 0.05)'
};
/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ "sAej":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/map-4944801b13d1cf7b96e6dca3857935f4.png";

/***/ }),

/***/ "to13":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNy45NzMiIGhlaWdodD0iMTcuOTc0Ij48cGF0aCBkPSJNMTcuNzUyIDE2LjY5OGwtNC4zMjEtNC4zMjFhNy41NjUgNy41NjUgMCAxMC0xLjA2IDEuMDZsNC4zMjEgNC4zMTZhLjc0OC43NDggMCAwMDEuMDYtMS4wNTZ6TTcuNTc0IDEzLjY0M2E2LjA2OSA2LjA2OSAwIDExNi4wNy02LjA2NyA2LjA3NSA2LjA3NSAwIDAxLTYuMDcgNi4wNjd6IiBmaWxsPSIjMGQyMzNlIi8+PC9zdmc+"

/***/ }),

/***/ "uChv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "uQVn":
/***/ (function(module, exports) {

module.exports = require("react-accessible-accordion");

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wA39":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABHCAMAAAB1TDrkAAABSlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9mcS2dAAAAbnRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW1xdXl9gYWJjZGVmZ2hpamtsbYf6BYIAAAbzSURBVFjD1VjpeuJIEOvLNpn3f9YB4+6ulVRtYzIJYY8/603my2Is6pBU1YTwX17xn7zZ/iVa3H8Gmn0NGd+EitF/HQtXMPsTML6BBZiY8F9Mjoard/xa+AxY3sFKuDL/YXDCwtWA2D8lXH4EI1LOBb9Ai0QjVGu1td4+4b1GY1yEKlMpwCMakgNYbXWrtaYW+znb8lNghJqnCXDMVR1lbHXTxQBP4b2MjYFN08xLYFE9U+EId8e1xRq6vREbs0Rcy7LM88Q0dwKQHb1N21RUS8DtwZXXYPN8WS4LIgOW08zb7BVAMT35Ha68aAAju3xcLvOEZ7o4BjgnX+Jn5SPiAfciNtRsuXx8XJaSUXlwggwLHpj4cmKgWbQXaHymCG2ZEFgjHwYaMJCiFefzALNXsZEcAFsQ2ZSt1+0OOKYqtNyFm1NBlhIGZWEvYhstAFjo4AKo1fkAm9EfCeQ5uDI8uO9iQwBowTITrBKtMhqKQRdyp7NkvIsiYxHid7F5nmTaUhJqJjAVzOH4BscD4CRdsB32BVpUZN6By5yDC9wCKZbVxeFKjX/kALVAd4jui9jczQY5Pi5TaqgTWQZWlCmTrbIR8sW8FdlFHP+om2iuB+ePX79+fSzZa5VyoMoAp9gAFg1oSXcpi2Ev5TOWu9m8XIg2px74v3golcwQMp8yggkvZqlCekXhyhnMw8JT6ABi+7gU2NdUe8xddwiGTDkR8DAphlfZMjfSc2zujNDyRBMicUkPiHUOmU3IMnM3pThM2CiPMTSetKDaFwLJHGlpSVMklZCdHjGdpynBussjOG8eaNIl2I+g2HDki7oEKrQH9tG90ryP/CGIRZfnMfnKWeSAIv0L47CKQns6uKmSBWpoH1ldWvIEj2FdjppR5BeaWSFI9Yk8rCmB8lB4p812OlOlNI8MfVqfYpMsL6p8Mh+W9jDNkKgFNLjRnGh1G8lPNSMLH9ZHbP7IRWYGlUPFlWLqYRdZMz4nz4ZqeZPv0IuJr+2JF2dt9jyXGXXHMMITVI6Nz9kqs7JMQW33VXDsDimFiDleu+ZqGf5D9gMMIt/WlZ7hliXe+N+2lFhhTuttVZrBRwPNhL7Q99gO/3Gw26q39zGfbGxE1qbUN+EhctOWUxQaHMnBiOYamDk0Y6v3db0BDGNDC5umSNskdXgAjYNFg+Kl9kIz5RIhQ/K6KTaCGfNcN9ZE3iFaijCiLkyAfdQN5zrMVBOonbpAt4EAUkBoHAD8YKny2Ndi34hRxCSkCZNUaQoTrSpMODIdFoXQCEabzWMn0hIjZ6x3vFDyjBjSBKOaSfVkINJYbY5Ms8atM43J0EnczMAmfgYKycbhcwprjE+kOy8l1BgeOgNapIEKzIiG4RNpJUjdjRap0MyaiRVTwo1NaDPmNl6RlB9bzb5Y8BHaVeD+ga4oVby3gQXiMtE45FOhgaIJU6wtxX1JP6veVwB+yr4AamPDi8gljxWJDeOkww9iAz3N/fPsSNredx/0lmgxzWPLSMOnD1s9D6bd4Q7V+/K/z3jb19w07CaGx9ED0QcQYjNYU4w9uELteVMdS442ecse2ZjDxyrRlTcsaVvvG7tQK7RDFT5tquYOTy2BZ47p5fATkG9G9MxEGbX1ugqNJt22q8PtXWCVTQ7D+mO0j3Kxu6q9uBnJItpVv1+vt61pYSjw+/v1PkR61K1pcyxC68wHuhg7KLcEMjpHSq/37fb7eruDx4VNt1alaztlSr+TMwPNxl5AUx0q5WyRY1DI6/X6+3aHlJMPHh1D+mm3dJOh2HMvnLhbT6ceqEOiTZL9XVGqtu9fvt88Z0rD2yoiL7jJMj5IFX09IW1y7HW93WDNTD3GYQr24AgzpRd7vCwcj2J2DHU/AWZ6VmbNYaZ3n1c7je10UC3+AvdDWpH+BiltZzQF7NsWisQRAzAnbLTwPJoP9moT7lqEyPot8u3cZPdTi8AwEm43j+wZ5OkMaGHsinCPQMstm3Z2zaycXLW00tvttp7JGr5CG8pi4zCWUKNNyTjaOLiQCmgnWlD7YWffoPnJn5O4GCteOOltnDW4nQWO5Rtj44z/9jRVng9DXEr5l9zR9cmRysHEsex5fhvasdUcVuVLuRveML0+FoZVO8P3eZ5jc30hp8rZPY46KgFXIj8o11dFO9WNakRlQg2NhypuZ3bcqH6KJ9ZLsCM2gq0YaDnwwF4PByRYr9V3sP6qZufYEMAdVoqZJsmKoPLL7gfdNhT3EuyRadvgEHeStPq6pS6Yq7qNE6j98M1OGUpDonR8H9F7D+L4BsqZ/FNgp7rxK5KmaXwsAnH/cszeg3ps+se8V6GGycThShbegjqhhf37Nd8jhRHD2zCfv397zH/7uxj/j+svrHzuwCifCa0AAAAASUVORK5CYII="

/***/ }),

/***/ "wsRY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "xcLp":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-white-512a641e90600644922a2327e20c5067.png";

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });