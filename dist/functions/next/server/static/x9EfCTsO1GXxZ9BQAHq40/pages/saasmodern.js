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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Q8Q":
/***/ (function(module, exports) {

module.exports = require("react-scrollspy");

/***/ }),

/***/ "+ZwK":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/briefcase");

/***/ }),

/***/ "+ypD":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dash-3-3025a0ee541b4a00a01c6509caa87833.png";

/***/ }),

/***/ "/G5B":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_play_circle_filled");

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

/***/ "0YK7":
/***/ (function(module, exports) {

module.exports = require("rc-tabs");

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("rEiF");


/***/ }),

/***/ "1wYk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GlideSlideWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ButtonControlWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BulletControlWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BulletButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DefaultBtn; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);

 // Glide wrapper style

const GlideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "glidestyle__GlideWrapper",
  componentId: "sc-1df9bf1-0"
})(["", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"]); // Glide slide wrapper style

const GlideSlideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "glidestyle__GlideSlideWrapper",
  componentId: "sc-1df9bf1-1"
})(["", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"]); // Button wrapper style

const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "glidestyle__ButtonWrapper",
  componentId: "sc-1df9bf1-2"
})(["display:inline-block;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_1__["position"], styled_system__WEBPACK_IMPORTED_MODULE_1__["top"], styled_system__WEBPACK_IMPORTED_MODULE_1__["left"], styled_system__WEBPACK_IMPORTED_MODULE_1__["right"], styled_system__WEBPACK_IMPORTED_MODULE_1__["bottom"]); // ButtonControlWrapper style

const ButtonControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "glidestyle__ButtonControlWrapper",
  componentId: "sc-1df9bf1-3"
})(["", " ", " ", " ", " ", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_1__["position"], styled_system__WEBPACK_IMPORTED_MODULE_1__["top"], styled_system__WEBPACK_IMPORTED_MODULE_1__["left"], styled_system__WEBPACK_IMPORTED_MODULE_1__["right"], styled_system__WEBPACK_IMPORTED_MODULE_1__["bottom"]); // BulletControlWrapper style

const BulletControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "glidestyle__BulletControlWrapper",
  componentId: "sc-1df9bf1-4"
})(["", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexWrap"]); // BulletButton style

const BulletButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "glidestyle__BulletButton",
  componentId: "sc-1df9bf1-5"
})(["cursor:pointer;width:10px;height:10px;margin:4px;border:0;padding:0;outline:none;border-radius:50%;background-color:#D6D6D6;&:hover,&.glide__bullet--active{background-color:#869791;}", " ", " ", " ", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"]); // default button style

const DefaultBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "glidestyle__DefaultBtn",
  componentId: "sc-1df9bf1-6"
})(["cursor:pointer;margin:10px 3px;"]);

/* harmony default export */ __webpack_exports__["g"] = (GlideWrapper);

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

/***/ "5sXw":
/***/ (function(module, exports) {



/***/ }),

/***/ "63gR":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODMiIGhlaWdodD0iODciPjxnIGRhdGEtbmFtZT0iQ2FwYSAxIj48ZyBkYXRhLW5hbWU9IiZsdDtHcnVwbyZndDsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04MTUgLTEzNzkpIj48ZyBkYXRhLW5hbWU9IiZsdDtHcnVwbyZndDsiPjxpbWFnZSBkYXRhLW5hbWU9IiZsdDtUcmF6YWRvJmd0OyIgd2lkdGg9IjY4IiBoZWlnaHQ9Ijg3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MTUgMTM3OSkiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRVFBQUFCWENBWUFBQUM5VWVPSEFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFhQkpSRUZVZUp6dDNFc3lBMUVZUi9Famd0M1lGNUtnV0FWS0tZL3QyWUNCTXNCQWVReHVoK1JmOFVxNkt2UTl2MG5QdmtwTzNmNjZZMkRsOXViNmxmL3JBamdBbnRvYTJBTWUyaHEyQkVQZ2xQSTlXdEhhb0NVYUFKZkFSaHZEdWhBRVlBczRBbFlYSGRTVklBQWo0QnhZVzJSSWw0SUFiRk4yeXZxOEEvcnRmWlkvWTlCY1I4Q3ZuNkJkT3lGakErQ0tPVTVLVjRQQW5JdTJ5MEVBZGltTDlzZXJvZXRCb0N6YU0zNTQrM1J4cWM2eUE3d0FlODMxVXpXY2tMRWg1WTMyeTVOU1V4QW9pL2FZTDE3ZWFnc0M1ZjNrakUrZVBqVUdnYkpvejVueGc3Q1dwVHJMTnZBTTdEZFhvTjRUTWphay9KSHBmYWZVSGdUS29qMmhlZnJVZk10TUdsR1c3S0ZCUHV3QWQ5NHkwellOTXUzSklNRWd3U0RCSU1FZ3dTREJJTUVnd1NEQklNRWd3U0RCSU1FZ3dTREJJTUVnd1NEQklNRWd3U0RCSU1FZ3dTREJJTUVnd1NEQklNRWd3U0RCSU1FZ3dTREJJTUVnd1NEQklNRWd3U0RCSU1FZ3dTREJJTUVnd1NEQklNRWd3U0RCSU1FZ3dTREJJTUVnd1NEQklNRWd3U0RCSU1FZ3dTREJJTUVnb1lkUkp2WDZ3RDNmL0R1OGlqeStBZFpWSkVpdm8wWm1BQUFBQUVsRlRrU3VRbUNDIi8+PGltYWdlIGRhdGEtbmFtZT0iJmx0O0dydXBvJmd0OyIgd2lkdGg9IjQxIiBoZWlnaHQ9IjUxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MjkgMTM5OCkiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2tBQUFBekNBWUFBQUFLTFNFTEFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFYTkpSRUZVYUlIdDJiRnFGRUVZd1BIZjdRMkJWSGFwSW1wSzBVNnhzaER5QUxZMkZqWVdkalkraEE4Z0NCWnFtenFGZVlLZ3hLUklJU2hZUkFpQ2lFS0lJUUV0ZHRMdG5jSjlNck13UHhnTzdtRDRzd3Z6M2Q1TjluZTMzdUNLeFR6Rjh3WDNtR215djd2MU8yQ2ZkN2dac00rZ0R0OEM5dGtPMkdPbWhGdTR0TUFleDlpSnlSbVc4Q212YW5XbEEvNUZpNHpTSXFPTUlqSmhpcFhTSVFNNmZNVnB3bXRjelI5RWpNZ281MmY0dzRSN2hXUG11WVpYSFg2V0xwbmpCejRuckdPMWNNd3NCOWhKZUp0WHRVWnhCTFhJS0MweXlpZ2lVMzVkS2xveGJJSVQrc2dYdUlFemRjM3VKZjJqOHBPRUI0Vmo1cm1PemFTZmo4dnF1b3IwdC9zWUJ3bDNjRkYvdTJzeXhSZDVkci9QcTFxak9JSmFaSlFXR2FWRlJrbDRpY3VsUTJZNHhLT0UrNlZML21LancxSHBpamxPNU5sOUcydjV6WnErWkV6eEVYdHRka2Rwa1ZGYVpKUlJSSjQvZDE4b1dqR3N3M2Y2eUdmNlI4ZmFKSHpBNDZqL3UvK251NTM4VTBhbGZ1SHdEOVRJUG8rakJFQ1FBQUFBQUVsRlRrU3VRbUNDIi8+PGltYWdlIGRhdGEtbmFtZT0iJmx0O1RyYXphZG8mZ3Q7IiB3aWR0aD0iMjIiIGhlaWdodD0iMjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg2MiAxMzc5KSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCWUFBQUFWQ0FZQUFBQkNJQjZWQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUw5SlJFRlVPSTJ0MU0xcEFtRVFnT0ZuUThnMU1ab2NyU2J4cHdPeE55RWlSc3pKdTZRSEwxWmhFeDRHV1JGMWQ5MzVDbmo0bUhlWVlyL2JiakhGUWVKN3doY1dlTXVHWVlnL2ZHYkQ4STBmZExOaEdPTVhuV3dZQmxocE9aWnJNREh6dVJZL3Z3WERDR3Q4Wk1ORTBEbDYyVEFSZEluWGJKZ0kybWpQNjhJbnZIYlFKakJsME1xWk40V0pvQXNWMi9JSVRQejg3dUY2RktiaWNMV0JLUS9YZXpaTTdQbnFFcytBaVZWY09ndWFCUk5CTitpamVNWi9FbHpnQlJQTWp0c3pHVVpxY1FSL0FBQUFBRWxGVGtTdVFtQ0MiLz48L2c+PGltYWdlIGRhdGEtbmFtZT0iJmx0O0dydXBvJmd0OyIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4NjIgMTQzMCkiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ1FBQUFBa0NBWUFBQURoQUppWUFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUJMdEpSRUZVV0lXOTJIOXNsVmNkeC9IWDh6ejNYdHBDaDVRNmxHNk16VkZHQnRGdGhibENHTWxZUXFZenhsK1pmNUJvb2lhR1JLYlRmekF1TXpGbWk1cnBpREh1bnptekdKY1lrODFrdU9rZjhnZVFzYldpMjdBcmxBR2preUVyQlFybDl0N25lZnpqYVMvUTN0NTdxYTJmUDgvNVB1ZTh6L2wrei9jNTN4TjB2dnhyMTZCT3JNYzZkR0VONWsyeXVZQ0QySTg5Mkl0ampVNFFOQWkwQnQvQ2ZiaTUwY0hIMVljLzR4YzRXczg0ck5PL0dEK1hyZlJyTTRDQjIvQXdldkVvRnN3VXFCdXZZRHRhWndBeVdZdndRL3dKcTY0VjZDRzhpRHRuQVdTeU51RXYyTndvMEVQNHJjeGRjNlVPUEkrTjlZQTI0bW5rNXhCbVFtMTREcXVuQTJxWG5ZVFppSmVxU3RKMGN0T05lQktGYWtDUDRoTnpBVkpNWWlQbE1WRVFDS1oyYjVhZHdxdUExdURyY3dFekdwZHRXWEtMWjdzKzdibTFEMnFKOHRWMmFqdVdUUUFGK0RhYVpodW1tSlRkM3RydXg3ZmZhL1AxeTNVdCtxZ2JXNjZUbUFLMEZGK2RBRnFCKzJjYnBwUW01dWNLdm45YnQ3WkN0dFpTa29qVGxLazdCSjlEZTRoN2NjTnN3cVN5dU5tNmJMVU43WmVIZnViWVB4MDhkMW9VUnRVK1c0T3VFQnRtRXdZdXhXVWJGbmQ0NU5hMWxiYTlId3phT2RBRDFRSjdvcms3eEIyekNWTktZdTJGWmp0VzNpTS92aE5uUzBVL08vU3E0VkpSSWF6NSsxeVh3OHA2a3hTVFdEbEpCQUhOVVg2NkZVcWt5bWxxMjhmdTh2R0ZTeXJ0dnp6UzY3VXovOVlTNWFlRzg5VzZJK2VLcERSWmFacktoNUhPNjlwME5MZTZFSS9aYzNwUUdBU2lZQ3BXTVM2NzcvcWJiVjEyT2ZuKzdmUnh6eDU3bzdKYmRkU1NxOWtkQk02WGl4Nit0Y3ZHOW1XS1NkblQ3eHl3YzZCSGtnYnlWMnovV0pKWTJ0VHFzVlhySzI0WkhCM3hvNzY5THNXeHBxZ2hvTFNtUXdPTUpiR0YrWG55WVdoQnJ1QTdLOVo1WXZVbXJibUNTMGtNNGpRVkJueTNjNTJiV2habUkyUG53R3Y2enAxdUZBYjFMMmlhb3J6ZkhIL1QyVkt4MHZhbEcxYjUxWjFiTEc5WmFEUXVHNDFMUHQreDBtZVhkbFpzL2pqWTcva1RmZWJucG8ySWFncENGR3RaekFzakw3elg3eHU5dTd4OWZxalMzdDIyMUROM1BhRHJReC9SdWFETjkxYmNMUmRrNnp0ODRZd25EKyt2RjhEVk5CSXQzdnJnWjJUM2sybVZDeU5ITGd6Yk0zVENMZk1YV1Q3dWxrV0ZKdmN2V1c3VGgyK3F1S3FVeEhhOHRWdlA4RW5OVWUwUXJhTGRJZjVlenlyQWdsemVzWXZuYkR2d3N0KzllN0RTMTFab3RxcjE4bDN1OXlmKzVaVlRSN1ZFTTdwUzdRK3hyeEhMVk9hK2krV3lIVy90OXZqYisxeUt5MWZaSEJnKzVhZUg5bGROQ1Ewb3h0NFF1MTFEM1pRUFE0VXc4dFJBaiszLytLdkIwZlBnZzdGUmovZnZNelEyS2gvVVBTdlZkQUE5T2J5RGwvRE5Sci9NWEZqdzB2dEg5SThNNlY3Y29YZjRmWWRIaGpUUHpGWHdCNXlaS0JSWHlPcW1talZUTlkwbHNYUWNNaDlHMC81VzZ1Z283c0hKaWIwOWhKMHpHYWtRUnVhRmtjTE1ZZUFuT01uVmlmRUpEUWI0TE9zRlZPcjVLNEhPWWh0Ty9SOWgrdkdJN0lSTkFTTExTVitSdldETXRkN0RsekZ3WldPMTg3a0xYOFM3Y3dqVEo3dEQ5MDd1bUM1aDdNS25aRGxxdHZVaXR1RFZhcDIxTXRnYmVBQ1BHVDhCLzZPT3krcXZMNmlSaU91bDFJdXlKNVQxc2xQNDVneEFYc2NQc0JaUG9WVEx1TkVYdEFsMXlKN3lQb203WmFWM3RTZTkxMlZQZXZ0a2NmS2ZSaWY0TDZzdVh5d2tWbHlFQUFBQUFFbEZUa1N1UW1DQyIvPjwvZz48L2c+PC9zdmc+"

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

/***/ "8N94":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/entypo/minus");

/***/ }),

/***/ "8RTH":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODciIGhlaWdodD0iODYiPjxnIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyMTYgLTEzODApIj48aW1hZ2UgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIHdpZHRoPSI3OSIgaGVpZ2h0PSI1OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIyMCAxNDA3KSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFOEFBQUE3Q0FZQUFBQTZoOWRSQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUw5SlJFRlVlSnp0M0xGTkFnQUFSTkVEY1dBWHNYSVVWaUlob2JXWGdnWFVYeENTOXlhNC9BSHVzUFBYNTdhZjhSZkhiYmZUdG85bkwzbFIxK096Rjd5d2IvRUM4UUx4QXZFQzhRTHhBdkVDOFFMeEF2RUM4UUx4QXZFQzhRTHhBdkVDOFFMeEF2RUM4UUx4QXZFQzhRTHhBdkVDOFFMeEF2RUM4UUx4QXZFQzhRTHhBdkVDOFFMeEF2RUM4UUx4QXZFQzhRTHhBdkVDOFFMeEF2RUM4UUx4QXZFQzhRTHhBdkVDOFFMeEF2SCs3LzIwN2JySG80OVhuOTk3MjNhNUEyMytDbHlKYTNkbUFBQUFBRWxGVGtTdVFtQ0MiLz48aW1hZ2UgZGF0YS1uYW1lPSImbHQ7R3JvdXAmZ3Q7IiB3aWR0aD0iNzkiIGhlaWdodD0iNTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMjAgMTQwNykiIG9wYWNpdHk9Ii4xMDIiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRThBQUFBN0NBWUFBQUE2aDlkUkFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFQQkpSRUZVZUp6dDNMRUp3bEFVUnVFL0pxNGp1SUc2a1lWck9JVzlpN2lHa001R3NMRFFRaXNUOHlBSEFvSHp3YXR1Y3puYytsWGJ6ZTZZNUpXdU9za2x5YWxucGlSTmt2M0EvQnpqL2JVb3pCK1RiREZUcFhnYVlEekFlSUR4QU9NQnhnT01CeGdQTUI1Z1BNQjRnUEVBNHdIR0E0d0hHQTh3SG1BOHdIaUE4UURqQWNZRGpBY1lEekFlWUR6QWVJRHhBT01CeGdPTUJ4Z1BNQjVnUE1CNGdQRUE0d0hHQTR3SEdBOHdIbUE4d0hpQThRRGpBY1lEakFlVTRqMG4yV0ttbXNKOGxlUVFML1JYbGVSV2lyZitQblcxWHRSNGQrTUJ4Z09NQnhodnZHV1RwTTNuUjUrK1gzM1VyMDV5ZlFQUit3K2RaQmo5N0FBQUFBQkpSVTVFcmtKZ2dnPT0iLz48aW1hZ2UgZGF0YS1uYW1lPSImbHQ7R3JvdXAmZ3Q7IiB3aWR0aD0iNzEiIGhlaWdodD0iNDYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMjQgMTQxNikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRWNBQUFBdUNBWUFBQUI2U3dTTkFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUJlbEpSRUZVYUlIdDIxdU1uVlVkQmZEZm5EUFRsbDRaN1FXbldDcWtWQkVyamFnbG1OWUxYbXU5WWsyOFJUQ2lNU0UrZ05FWVFvS0d4RXZpTFZvVVlyeFZ2QlhiVWdXallsUWtvUTlxZ3BnZ01TQTJXQ3JZaWloUzJsb2YxbmZDcEpuejdmMXBxRDZjbFV3eUQrdjh6LzliWjUvWmE2Ly9uakZmdUF4ZWhYM1lyUTZiOGR2bXB4YnZ4UlljcXVBdXdBWDRUR1h0S1htR3ozZm81enc4aXA4UEkvVHdXbndkMStLY2lxSnZ3MVo4QTJzcitJdndXWHdLWDhUaUF2L2twdjZuY1FWT0tQQlBsZjYzNEJKTVZQVDBDbm5lYjRwSU0ySzhlZk1Kek1hY2lzSnpwcjF1ZGdXL2gvbk43L1BRTC9EN21OdjhQaGRqQmY3RU5ONjhDajdwZTNiVDI5Qm5IbXUrVnB1eEZ6ZFhGQ2FyNTNiOHFwSVA3NWZWOEVnRmR4SVg0YU9WdFZmZzlmaGtoMzQyeXRmcVI4TUlBM0ZHbUFHOS8zVUQvODhZaWRPQ2tUZ3RLSW56bjRoWHMxdjhOemh1OVVzUC96bXM3MUI0SmI3cXNhMjdoRFB4WlhYZUJGNHBmcWtMcnNTYk8vQS9JVDdJK0JEQ1hIR243OERyOEFZdFRyTEJhbXpIMDdBY2I4SjlMZnl6R3Y1S25DaU8rRUFMLzZWaURoZmhpRmlETnJjOUppYnlnemdvMi9aM1d2Z1QrTGc0K1F1d2VkaktPWWh2NGMvWWdUdGFpZzZ3RjEvRFE3SjYvbHJnM3lNTzljSG1kZjhvOEcvREQvQW5YSWZEQmY1UjdNSmR1RW41YUhRWTIzQXZ2by9iU2o3blhQd0dmeXNVbm80TitGa2xkMEtPTEtWVk9jQmluS2IrREFocjhJQ0lXb096UmREOUl4UFlndEZXM29LUk9DMDRudUtVVHVQSG0xL0VRSndyY0dHSDEzMU1Uc0cxV0NRNzJQSksvbFB4RmN5cTVLL0ROUjM2Z1V0eGNSdGhIQi9BNWVJWkhwRVFhQmg2WXFyZUoxdnZJVnhmYUdLNTJJSno4WFNjajkrMzhOZmd1N0lyelZmMlArYzAvSk5rOWJ4SDJSWmNMSjZHMkphclp5TDFjQ1B1bE8zM2xrTFJmNGtZZS9CRC9MTEFoLzM0a3RpQnJkcU5JZnhSVXNZSEcvN2ZDL3c3eGZjOElCL3N3WXFlYnNLdmNTdCtPb3cwMk1yUGJKclpVMUdZeEtQM2lrbXN4WXUxQkV2SG9JOFg0TWVWL0hsNHRwWUhuUUdyeFBqZFBZd3c4amt0R0czbExSaUowNEtST0Mwb2lmTWszYzNWMU9QSW40VmxIZXRQcWhzNURiQkVreThORTJkTWhtczc4RzdEYzUvcDZPSGxzc1d2VlU3cytuaWp4QkNuVi9BbnhMaHR3OUtLZnVBSllncytwRTZncFdJTExzVkUzNllaZzc0NXVBb3Z3UXZ4Qy95aFVQaDBNV09ueXJGL2gzWXp0aGJmeGlsNGhnUmZiUjVsbzVpMVUyUTEzQ0NaVFJzK2pMZUtBYjFENHBkaDZFdksrQnF4RWJ1SGlYTllNcFoxTWxqYlVkSElBUm55cldrYXVxZkEzNGZmaVJOK2k3STV2RXZFN3VPZGVMakFKeWJ2REVrQXJ4SVRPd3hIWmFqNUxCa3RYMXZ5T1V2d2wwTFJZN0ZVTjNPNEJQZFhjaWV3c09tcEZndmxXUFJvSlg5UzBzekRwYjhsdFUxUFJ4ZGh1cjdISWQyRW9WdUt5YlJ6M0dncmI4RkluQllNeERuUlk5YythakNwUG1zWllNWGp5TytKOWVpQytRclAzQk5odHVJanloZUZ5QVJnR3k1VGZ6L25PZUpuemxOM1ArZDgyYXBYcS9OTEYyS25iUE0xRTlFRkVvNXQwVEtBN051MC92S20rSFBGeTdUZHVlbExTTFJaUmpDM0sxOTllN0w0bVRPYTE5d28yY3N3bkMzR2JhWDRuMTM0Wnd0L2c4eTlWb2pIMnFXOE0xMGl3N3V6bWw1dW5ZblV0Mm45YmpGd044Z290T1FGYnNFekpjYThwc0FudThYTkl2NUZFaksxNFQ0UmZMVk1UZmNXK0h1YW4yWGlyL1lYK0dRQlRJa29WeG95SUJ6NG5BV2lkazJLUmpMaGg5VmRmaHhnU3YxZ3JTdC9UTVFwR2NucE9FRSs3S0UzelFZKzU2RU9SVWxxMkJWZGhPbktQNnFiTUxSL1ZUSGF5bHN4RXFjRkkzRmFVQkpuZy96eDdZS2hsNTVud0N5OHFBTi9LWjdYclIxcjFROFRTUkt4bU9IaWpNc3RxdXZrN25CTityWlFRcVhyOFM1bFF6a3B4bk9uYk5rbHg3MUNZb2R0a2pHVlB0Z3hHZmh0bDJucmFRVityNm03WGY1TjRPUmhiOUREeS9CRVdRbFBLUlFtYW04VVVWNnRmQnlaa3V0bDh4cCt5VzJ2a2hCcW1jekFhcHp3ODhVMXJ4TVQyb2F4cHU1SjhvMVpOU3pzT2lLbWNGSkd4VE02eUdOd0FOK1RGZlIyWlh0d3Z3ejV4dVY2WGVsbSs5MWlJUGZKbGJkUytFWVN6Q09TSU80c2NJL0tKSFNPM0FYNHliOEJvb296MWpMYS9YWUFBQUFBU1VWT1JLNUNZSUk9Ii8+PGltYWdlIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7wqArwqAmbHQ7UGF0aCZndDsiIHdpZHRoPSI4NyIgaGVpZ2h0PSI3MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIxNiAxMzk2KSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGY0FBQUJHQ0FZQUFBQzVRZ2hTQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQXk1SlJFRlVlSnp0bkxGdUUwRVFocjhkSDBwRVE0ZEVRUUZkaENoQmloTXFKR1NJS0JCVkNxaDRCQ1FRRDRKRXh3c2dlaWdodkVZa0pFU0JvRUFRQW9udktPeHpOaGNudm5oM2RtMW52dEt5OXVZK2plYitQYTN0dmo5NjhBUjRDWnpEaU1VTzhGaUE1NWpZMkp3SG5nbHdJWGNsQzRvSVVPYXVZa0VwSlhjRmk0ekpWY1RrS21KeUZURzVpcGhjUlV5dUlpWlhFWk9yaU1sVlJEREJXblFFK0pxN2lnWGxWd0U4QlY0RGw3S1ZVUUY3a2RaeXpNSUwxTS9BaXdKNEI5d0FiaklvcTBwYVJnbjBLZVcyUE9TaTI2UWZzRllCYkZldnlxM3lQVXNJTGxLTjdYSEFQMkFMK0ZZTVAvd0N2RTFlU2duc2c5d1QzTHBjcGM5bThKb3I3cE56dktrK2xMQU1HUVNQS0NaL1JZbVIyQTZ1NjJDSHBTanJPcGFsSjVSQTliR0VKYklKenBNVS9JN3RPdmdiY2UzaC9KYWVJT3N5V0R2dG9CdVJYdTRoc1VvM1B4VHNlb0pieXljNHJWeGY3SnJBTG5vM1hRMnZkVmR3bVRvNG5keWhXT2VMVFhITnZYeUMwOGoxT2xiV0JQNlE3aWE5R1R3U25Bajl0RkNMM1JEY2FxS09QYTZHbmxBQlphSVVvZHU1NDhSbWVuS1B4bExkd1FscTBaTTcySGtoRzUxOEhkdWtuc0U5d2QzU244RTZjdXVPdlN1NDFjZzVOcFNFT1RpKzNCUTVOaFEvQnlzS2ppdlhuN0hhT1RhVU9nY3JDbzRudDM1Z2JBdzdkaFptN0NUOEdheXdrNHNqMTgreDNjUTVOcFJ4TzdsSWhNdHR6dGg1Nk5nbVhnNldpREV0VE80NHNmUFNzVTBVY3ZEMGN1c2NPODhkMnlSeURwNU9ycDlqdTJuMzYrcEV6TUdubHpzUE9UYVVTRG40ZEhKVHZvL05UWVFjM0Y3dVBPYllVTHdVTVkzZ2RuTDlISnY3N1ZacXhnbHV5V1M1NDJic1dXUEtISHl5M0VYS3NhRTBjM0NMRVhHODNFWE1zYUg0T2JpRjRQRnltem5XeEI1d2loeDhWSzdOMk1tMHpNR0g1WjZsSEJ0S2l4eDhJTmMvVjJDam9CMFRjckFjK2xKOXJzQTZ0ajBuQ0M3WUJUcVdDb0lZZHk0Q0tOeXE0RlljN29venNTSFVZL1dPSUpjZDFYWkZJZmNGK3NRN05uK1dLWUVLM0RXSHUrNkdZOEdJUjhYZzRENzJNeWxWVEs0aUpsY1JrNnVJeVZYRTVDcGljaFV4dVlxWVhFVk1yaUltVnhHVHE0akpWY1RrS21KeUZaa2x1WjFJNjh6TVBlWDdwNUNqL0FSK0FQc0JhM1NBMzNIS0NlYy95MkErRXJXU0JkY0FBQUFBU1VWT1JLNUNZSUk9Ii8+PGltYWdlIGRhdGEtbmFtZT0iJmx0O0dyb3VwJmd0OyIgd2lkdGg9IjExIiBoZWlnaHQ9IjE3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjE2IDEzOTYpIiBvcGFjaXR5PSIuMTAyIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFzQUFBQVJDQVlBQUFBTDRWYmJBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBR2RKUkVGVUtKSHQwckVOZ2xBWWhkSERlNkV6REdIckV1QWdOaXhBWXVjVWRxN0RMaVNFaHRaT1kwRW85YmVrNEt2UDdXN1IxT2NXRDVTKzErT1NjQXZnQ3gyR2hPb0hoQ2RtU0hnSEdQS0svMjdIRzhVNU1JWGxUQkxHQUI5d1hQRVZVekM0NC9RQldEa003dFFSQzZ3QUFBQUFTVVZPUks1Q1lJST0iLz48aW1hZ2UgZGF0YS1uYW1lPSImbHQ7Q29tcG91bmQgUGF0aCZndDsiIHdpZHRoPSI2NyIgaGVpZ2h0PSIzMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIyNiAxMzgwKSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFTUFBQUFoQ0FZQUFBQ0M5aFlpQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQTVoSlJFRlVhSUh0MkdtSTFWVVl4L0hQdlU1UzZWaFQxa1JvVkVSQ1lFRWhWa1MybVVzNkpTWkZDOVVMeVNoSWFDRW83RlVRUnFGUUJORm0rQ0tEaUlLd29PSVdsVVFMZ1prMGxNWU1oUzIwTUxUblRDK2VjNzNIMnpqZUZSSCtYL2pEUGZ0emZ1Yzg1em5ubGdZckE4YmhMQ3pEaFRnWlV6R0tYN0FEVzFEQk8vaHp2QTRPRUVmaUlweUh1VGdSdmFuc1Z3emlUYnlJTCtvYmwrckVPQWtQWUFWNkdoaDhPemJnR1h6Zmt2bWQ0UlNzeE5VNG9ZSDZ2K0ZwckJFTGpMM0ZtSWVObUpFMUdzSlgrRkdJYzJ3YWJHWmQ1OS9nWVR5R3Y1dWJSMXNjaGJ1d1N1eUtuQjBZRnJZVHRwK0svcXpPcDdoSzdKZzlZcHlHdHpFOVZmcEVUTzVWc2IxeWpzRFp1QnhYNHBpczdGMnN4c2V0ekt4SkZtQTlabVY1UTlpRVY4UWNmcTlyMHk5c3ZrTjRBYkc3NStHSDBtQmxvRWY0MGZtcGNBTnVGVnRwZjh6QWJlbWJrdkpHY0NlZWFIUldMYkFHOTZPYzB0L2lFYkgxZjI2Zy9YRmlucGVtOUZPNHVUUllHVmlJelNuenJWUmhkNVBHemNaYUxNenkxb2tWR0cyeXI0bm9GWWF2eVBLZXhYM0NWWnVoVHdTQ1djSzFGNVZ4V1NvY0U0ZG5zMExBVml4T1JsWGJyeGJxSDlKQ2YrTnh0TmorVlNGR2NGUDZtaFdDMkVFUHBkK1RzYlNNNDFQR2Q4TFBXcVVxNWdxMUUvbzZQSmNHYTRmcFFvZ0xVbm9uNW90ZDBRNWIxQlp2WmhtbGxCalRtUzM5RXBZSWNZbHc5eVFtdGRoZnI3Z1huSnZTMjRRN2Z0Q0dqVlhHOHQ5bDdFcUpmcHplZ1FIZ1BTeFZFK1I2RVoyYXBVZUUrK3JoL2prV1NhR3dBNXlwdGtpN3luZzlKY3E0dTBPRHdJZFlydVl5dCtPV3JId1NyaFVSNERVOExnVE1XWXZxUmVqcjlIdTRRL1lkcmpiZlVXd3VEVllHSm92N3daeFVzRTVjWlA3dDBLQkxoT3YwNEM5eHhmOU1iUDM1NDlUZmlCdHhqVGh2NEtkVXQ1MHpMV2VhT0crV3BmUW0zRkM5ZE0wUllYVnFLcXpnUVhFUjY4VGJZeVVlRlFmcE51R2FGMDlRLzJXY0kyNk5JN2dpMmRjdTA4Umw3VjZja2ZLR3hGdG1PTCtPTHhhcjBwYzEzbzZQeE1xTXFSMjJqVkk5b0VaRkNPeWJvTzYrMklubmNWaEt0MkpEV1FnN1YrM21TYmplY21uSDFUL1Vab3ZZdTZCcGt3OHVkZ3ZYdUVkMkJ0Vy9UTGVLc0hWSitzcjJEaitOOG85NHYwemtDcTN5QXI3VTJLdTZuakwrRUcrdS80WG1mWFg0UnZyYVlaWHVpTEVlNzNlaDN6MFBuVzV3YUpmNm5iTC9LcTNSVFRFT09nb3hNZ294TWdveE1nb3hNZ294TWdveE1nb3hNZ294TWdveE1nb3hNZ294TWdveE1yb3BSclAvU0Ixd3VpbEd0L3J1bXMzL0FVaTd4QlFacENMRUFBQUFBRWxGVGtTdVFtQ0MiLz48L2c+PC9zdmc+"

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

/***/ "980Q":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dash-4-3025a0ee541b4a00a01c6509caa87833.png";

/***/ }),

/***/ "9NE4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glide_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1wYk");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // Glide Slide wrapper component

const GlideSlide = ({
  children
}) => {
  return __jsx(_glide_style__WEBPACK_IMPORTED_MODULE_1__[/* GlideSlideWrapper */ "f"], {
    className: "glide__slide"
  }, children);
};

/* harmony default export */ __webpack_exports__["a"] = (GlideSlide);

/***/ }),

/***/ "Av/8":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/entypo/plus");

/***/ }),

/***/ "Bt41":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "CfLJ":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dash-bg-a2916d37b6d85744028431b4d6b3bba1.png";

/***/ }),

/***/ "D1tS":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-texture-adebdd2809c56f1ab37cef371acdb87b.png";

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

/***/ "EXmy":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "EvP7":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlT/wgALCAA7ADsBAREA/8QAGwABAAICAwAAAAAAAAAAAAAAAAQFAgcDBgj/2gAIAQEAAAAA9QAAAAR9DWtdsDvooefGbMAAAAf/xAAkEAACAgICAgICAwAAAAAAAAABAwIEBREABhIhFCIHQBMgQ//aAAgBAQABPwD9m28Vqr3nxAUqcyZyEIjxBP2J9AevZPocodj7rTxxoZHJWn5ARwti1bqitcEK14zhKdSCq69zMlHcCGajojfMZ+TMjXp4FNyj8l2VyV+jWe1sasyat014Mevx+gmsAkj/AE1DQ2OS7P3SkMqWX/lPu0snbxQQ6rYQpFa3FR0IJXL+VcGgQBnMTkDvnRM3ey8M6mw229ePywr1rFuuKz2rNZTiWLEF6IkwgfUHX9CARxXVesIovorwuNhUfOM3V41VhTJR0QZQA0SNDRPJYDAzUFHF0SsV4IEChZAVAiUVga14xI2BxfXOvKnekvE0ISviQuGNZYNgSJJDSB9wSTvfKGPoYutGrRqIqogZGKkrCoAk7OhEADZOz+3/AP/Z"

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

/***/ "HLbV":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA1CAYAAADh5qNwAAAGKUlEQVRo3u2aW0wcVRjHp03T1FZrvCUmmviiMfHB1IeqD4o1KW0TKXeWZXeBptHQYktohVKrJjWNidZqJMWYSAxqBTUab7FSStNUKBSQy5YFuZRQKrSgBQqU297m83+YgQ7DYWb2Cg9s8gvLXM58vznnfOcCwvQfUYIG68B3YGiZ0Ate0YlZEHQueATQMuNUoFKrwdvgT1CxDCgFmwOVmoFq47rA0BLTZSRW41L1pjFAS8yYL1Ibwb1a0GXbMKAlZlgvTpn1TKoDDGhBTVZv4EFZA7sfMejFKZPPpG7rZRwUGAShgKWMZsevmdRwSKXsFqLW14l6TqKc5HBIFYVeqimR6OrHRFO9EAygxgKU+hZkKCG7bdxvqcZ4osFymvl05CE4k581bhtXxwUy5X60QOqm6mDGgpR+2TbknxSaXnM60fSAJHW9RJL07wUNLZLC21XxF7KD3aqD7wZNijW9rmM09xnvwBs3+9sEeVJ3gxuq+D9iJ2rU1eeblFUK1J68kIZoov9O35ES3URtB1Fbcfzr7Sm+Sj0GJlXx5wpyH1IerOJIDS8q5NiNvvImUfsbUsBzHAA5aHr9NO8z8BOyYabqWtCeJ92zeC3ypCI4iSJJkCesyoPs5vtVUjcWH3/SEOjPUi2IXiKvS8YpHeN92LnZ60SXdGyqj+jKUbl5GpbKVsXOplJPsxM7OLbbVFIXNMch1nd68oncY+TXZ7RBqr2mJF+b36+quOtnp0kPgRHVyQKVVImh1P13FtFth3EZVkvXi6VB2Z7sa6J4kDMcfaKcpZeqTvaBDQqp941lO5NUc/0/oGlNaQtN9hB1viMlDZb6jU1olVK7Fmthsxfs5lyQppBK92la1IBZyM0yjRpCX2vPhVCsLym9VyVVq4r3Gmt6SqkHwKDqIgdYK0s9A7yGJ68sNU90atfUtc98HYjLFUJRnEo4zlsknuRcuF+W2gD+MdYE0TfacziZT5z/60itlGCMSx2T41wrv3BlnE7wJE/qcc5AxqZQj6JAY8liNmH0fTVfoP9HjGWHUXtdd465R4laMvQGXCUvyHEe4bz8b7SW88c5N/wuS0UZa3pIFmMtUuCuQaLuDyTRxgScT5/f17pPoLYSjAi1gDWI5TkwrYqPrQef0JJic6lOjthRFLoOdOk3vVx57LFL6yhlv2G1wuTY2soziSZYL8vqSrEJwsPgCie2HCMbL5FA5Ny8lxWuO4Ht/YLo398kAe4ywyqlcTYtGqmTxLWb4LjnkmkTnl/NiakSrDG6m/QebwHmLI95S3fGzvrJ7HilN6axZYnjVe1Ze5O1GM+u48QzqG52elJsE/MXnpi3xlShO075st7SXoZMOs/GdHPi8GhtP2vtn90DyhcUWLqTxEbLZDi2xTwXE50cIVGeTfi9mcnEzqgLdp2PC7mQWJ8y8wI5NbQrGDu0d8mb8vMe4KlOCp2U3Uauc7FqoVsgNnjbzkTsZx5wK5uh9y9zSKTcFQlqoUawKbh76ZCSxbaAprlsWBbN+ldw+xFagEKG7crms61xNgEIiZRc8Hq51vrkNB80MYxHSqEy8KI8mxFCKqV4AFtcHgJtSLskNlgCrKEZoWl5KIlUPitsUooHsUQSBbES9DG/Ur2nKukqyjgMnuI9I+xSSlwX4jeixgrx3W0sy1n78CLS9Mr1WWouYCMYfDh4HpzXmimAE+A+H8o0HGeopBirnJ/HFHnOmEissUhUp5D7+4Qxumh91seyQiilJdeWKjg/jBYmkrcJk2nbwY7V4ylb7SPxETSSEEGjiS8R+z6K787XdiZ5MhMEz554wbMvXhArrQK1+i8ROqkWUJsqUJ5FoOwUgQ5atlK2mVwZsTRuiaTRpC00kbqdIEM4XglWUaZZoEJc3xZYzYROaqa2wJcIkgWbbS5lUnQghUmQmGWSvsu/U5b5ZTqE62qs0gtZtlIOUA+OmDfTXrOX9iH4WfYrvjP2mE9TsUYtLYEU+4v9p6AKXJqHA1TZ+ugs1knnFqF85qdITbY6albdL1EO4sItdUpz/HGAVrYK1qFZcxwbDbfUrXD830S4pcLxzyJD4ZYaWpFakVqRCqqUJwxSnnBLFYCiEFPgr9T/UetnYL9ibIQAAAAASUVORK5CYII="

/***/ }),

/***/ "HqwP":
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

// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Navbar/navbar.style.js


const NavbarStyle = external_styled_components_default.a.nav.withConfig({
  displayName: "navbarstyle__NavbarStyle",
  componentId: "ro5965-0"
})(["display:flex;align-items:center;padding:10px 16px;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], external_styled_system_["display"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], external_styled_system_["flexDirection"], external_styled_system_["flexWrap"], external_styled_system_["width"], external_styled_system_["height"], external_styled_system_["color"], external_styled_system_["space"], external_styled_system_["boxShadow"], external_styled_system_["borderRadius"]);
NavbarStyle.displayName = 'NavbarStyle';
/* harmony default export */ var navbar_style = (NavbarStyle);
// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Navbar/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Navbar = (_ref) => {
  let {
    className,
    children,
    navbarStyle
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children", "navbarStyle"]);

  // Add all classs to an array
  const addAllClasses = ['reusecore__navbar']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(navbar_style, _extends({
    className: addAllClasses.join(' ')
  }, props), children);
};

/** Navbar default proptype */
Navbar.defaultProps = {};
/* harmony default export */ var components_Navbar = __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "Ihd7":
/***/ (function(module, exports) {



/***/ }),

/***/ "IrP5":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "JRwp":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

/***/ "KU6X":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/map-18b073154fe6a34a0819d1c79f404288.png";

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

/***/ "KfK3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ik7d");
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rc_drawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5sXw");
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Drawer = (_ref) => {
  let {
    className,
    children,
    closeButton,
    closeButtonStyle,
    drawerHandler,
    toggleHandler,
    open
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open"]);

  // Add all classs to an array
  const addAllClasses = ['reusecore__drawer']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(rc_drawer__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    open: open,
    onClose: toggleHandler,
    className: addAllClasses.join(' ')
  }, props), __jsx("div", {
    className: "reusecore-drawer__close",
    onClick: toggleHandler,
    style: closeButtonStyle
  }, closeButton), children), __jsx("div", {
    className: "reusecore-drawer__handler",
    style: {
      display: 'inline-block'
    },
    onClick: toggleHandler
  }, drawerHandler));
};

Drawer.defaultProps = {
  width: '300px',
  handler: false,
  level: null
};
/* harmony default export */ __webpack_exports__["a"] = (Drawer);

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

/***/ "M4OK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PROCESS_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MONTHLY_PRICING_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return YEARLY_PRICING_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FAQ_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FOOTER_WIDGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FEATURES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SCREENSHOTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return TESTIMONIALS; });
/* harmony import */ var _assets_image_saasModern_process_1_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wNHZ");
/* harmony import */ var _assets_image_saasModern_process_1_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_process_1_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_image_saasModern_process_2_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("63gR");
/* harmony import */ var _assets_image_saasModern_process_2_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_process_2_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_saasModern_process_3_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8RTH");
/* harmony import */ var _assets_image_saasModern_process_3_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_process_3_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_image_saasModern_icon_1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("yxYw");
/* harmony import */ var _assets_image_saasModern_icon_1_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_icon_1_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_image_saasModern_icon_2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("HLbV");
/* harmony import */ var _assets_image_saasModern_icon_2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_icon_2_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_image_saasModern_icon_3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("qQcl");
/* harmony import */ var _assets_image_saasModern_icon_3_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_icon_3_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_image_saasModern_icon_4_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("srWm");
/* harmony import */ var _assets_image_saasModern_icon_4_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_icon_4_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_image_saasModern_icon_5_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("TaBH");
/* harmony import */ var _assets_image_saasModern_icon_5_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_icon_5_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_image_saasModern_icon_6_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("p7cN");
/* harmony import */ var _assets_image_saasModern_icon_6_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_icon_6_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_image_saasModern_dash_3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("+ypD");
/* harmony import */ var _assets_image_saasModern_dash_3_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_dash_3_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_image_saasModern_dash_4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("980Q");
/* harmony import */ var _assets_image_saasModern_dash_4_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_dash_4_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_image_saasModern_author_1_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("EvP7");
/* harmony import */ var _assets_image_saasModern_author_1_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_author_1_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_image_saasModern_author_2_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("gd+H");
/* harmony import */ var _assets_image_saasModern_author_2_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_author_2_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_image_saasModern_author_3_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("huKr");
/* harmony import */ var _assets_image_saasModern_author_3_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasModern_author_3_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_icons_kit_md_ic_monetization_on__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("en32");
/* harmony import */ var react_icons_kit_md_ic_monetization_on__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_monetization_on__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_icons_kit_md_ic_settings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("tJGH");
/* harmony import */ var react_icons_kit_md_ic_settings__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_settings__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_icons_kit_icomoon_pieChart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("fB6L");
/* harmony import */ var react_icons_kit_icomoon_pieChart__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_pieChart__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_icons_kit_fa_briefcase__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("+ZwK");
/* harmony import */ var react_icons_kit_fa_briefcase__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_briefcase__WEBPACK_IMPORTED_MODULE_17__);


















const MENU_ITEMS = [{
  label: 'Home',
  path: '#banner_section',
  offset: '0'
}, {
  label: 'Feature',
  path: '#feature_section',
  offset: '0'
}, {
  label: 'Pricing',
  path: '#pricing_section',
  offset: '0'
}, {
  label: 'Testimonial',
  path: '#testimonial_section',
  offset: '0'
}, {
  label: 'FAQ',
  path: '#faq_section',
  offset: '0'
}];
const PROCESS_ITEMS = [{
  image: _assets_image_saasModern_process_1_svg__WEBPACK_IMPORTED_MODULE_0___default.a,
  title: 'Download our app',
  description: 'Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.'
}, {
  image: _assets_image_saasModern_process_2_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
  title: 'Create a free account',
  description: 'Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.'
}, {
  image: _assets_image_saasModern_process_3_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
  title: 'Now Start your journey',
  description: 'Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.'
}];
const MONTHLY_PRICING_TABLE = [{
  freePlan: true,
  name: 'Basic Account',
  description: 'For Small teams or group who need to build website ',
  price: '$0',
  priceLabel: 'Only for first month',
  buttonLabel: 'CREATE FREE ACCOUNT',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '1,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: 'eCommerce Store '
  }, {
    content: '30+ Webmaster Tools'
  }]
}, {
  name: 'Business Account',
  description: 'For Mediums teams or group who need to build website ',
  price: '$9.87',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'START FREE TRIAL',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '1,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: 'eCommerce Store '
  }, {
    content: '30+ Webmaster Tools'
  }]
}, {
  name: 'Premium Account',
  description: 'For Large teams or group who need to build website ',
  price: '$12.98',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'START FREE TRIAL',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '1,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: 'eCommerce Store '
  }, {
    content: '30+ Webmaster Tools'
  }]
}];
const YEARLY_PRICING_TABLE = [{
  freePlan: true,
  name: 'Basic Account',
  description: 'For a single client or team who need to build website ',
  price: '$0',
  priceLabel: 'Only for first month',
  buttonLabel: 'CREATE FREE ACCOUNT',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '1,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: 'eCommerce Store '
  }, {
    content: '30+ Webmaster Tools'
  }]
}, {
  name: 'Business Account',
  description: 'For Small teams or group who need to build website ',
  price: '$6.00',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'START FREE TRIAL',
  url: '#',
  listItems: [{
    content: 'Unlimited secure storage'
  }, {
    content: '2,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: '24/7 phone support'
  }, {
    content: '50+ Webmaster Tools'
  }]
}, {
  name: 'Premium Account',
  description: 'For Large teams or group who need to build website ',
  price: '$9.99',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'START FREE TRIAL',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '3,000s of Templates Ready'
  }, {
    content: 'Advanced branding'
  }, {
    content: 'Knowledge base support'
  }, {
    content: '80+ Webmaster Tools'
  }]
}];
const FAQ_DATA = [{
  expend: true,
  title: 'How to contact with Customer Service?',
  description: 'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. '
}, {
  title: 'App installation failed, how to update system information?',
  description: 'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . '
}, {
  title: 'Website reponse taking time, how to improve?',
  description: 'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .'
}, {
  title: 'New update fixed all bug and issues?',
  description: 'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .'
}];
const FOOTER_WIDGET = [{
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
const FEATURES = [{
  icon: _assets_image_saasModern_icon_1_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  title: 'App Development',
  description: 'Get your proof tests delivered home collect a sample from the news get design.'
}, {
  icon: _assets_image_saasModern_icon_2_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  title: '10 Times Award',
  description: 'Get your proof tests delivered home collect a sample from the news get design.'
}, {
  icon: _assets_image_saasModern_icon_3_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: 'Cloud Storage',
  description: 'Get your proof tests delivered home collect a sample from the news get design.'
}, {
  icon: _assets_image_saasModern_icon_4_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  title: 'Customization',
  description: 'Get your proof tests delivered home collect a sample from the news get design.'
}, {
  icon: _assets_image_saasModern_icon_5_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  title: 'UX Planning',
  description: 'Get your proof tests delivered home collect a sample from the news get design.'
}, {
  icon: _assets_image_saasModern_icon_6_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  title: 'Customer Support',
  description: 'Get your proof tests delivered home collect a sample from the news get design.'
}];
const SCREENSHOTS = [{
  icon: react_icons_kit_md_ic_monetization_on__WEBPACK_IMPORTED_MODULE_14__["ic_monetization_on"],
  title: 'Budget Overview',
  image: _assets_image_saasModern_dash_4_png__WEBPACK_IMPORTED_MODULE_10___default.a
}, {
  icon: react_icons_kit_md_ic_settings__WEBPACK_IMPORTED_MODULE_15__["ic_settings"],
  title: 'Create & Adjust',
  image: _assets_image_saasModern_dash_3_png__WEBPACK_IMPORTED_MODULE_9___default.a
}, {
  icon: react_icons_kit_icomoon_pieChart__WEBPACK_IMPORTED_MODULE_16__["pieChart"],
  title: 'View Reports',
  image: _assets_image_saasModern_dash_4_png__WEBPACK_IMPORTED_MODULE_10___default.a
}, {
  icon: react_icons_kit_fa_briefcase__WEBPACK_IMPORTED_MODULE_17__["briefcase"],
  title: 'Integrations',
  image: _assets_image_saasModern_dash_3_png__WEBPACK_IMPORTED_MODULE_9___default.a
}];
const TESTIMONIALS = [{
  title: 'Modern look & trending design',
  review: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  name: 'Jon Doe',
  designation: 'CEO of Dell Co.',
  avatar: `${_assets_image_saasModern_author_1_jpg__WEBPACK_IMPORTED_MODULE_11___default.a}`
}, {
  title: 'Modern look & trending design',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur.',
  name: 'Jon Doe',
  designation: 'Co Founder of IBM',
  avatar: `${_assets_image_saasModern_author_2_jpg__WEBPACK_IMPORTED_MODULE_12___default.a}`
}, {
  title: 'Modern look & trending design',
  review: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  name: 'Jeny Doe',
  designation: 'Manager of Hp co.',
  avatar: `${_assets_image_saasModern_author_3_jpg__WEBPACK_IMPORTED_MODULE_13___default.a}`
}];

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

/***/ "TaBH":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "Uag0":
/***/ (function(module, exports) {



/***/ }),

/***/ "UbIB":
/***/ (function(module, exports) {

module.exports = require("@glidejs/glide");

/***/ }),

/***/ "Xlsg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-white-512a641e90600644922a2327e20c5067.png";

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

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "ZHH+":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAA/CAAAAAB27V17AAADoElEQVRo3u3X709bVRzH8XfLhYZS6OxGRqgsFQyTzLEfqU4NAccyM39A0DqdPDBDcAu6ZQlbJEyJghmdLsNoGSLDybSODQYNMLZm9/PH+eDetpcFHnKj8ZxH55x+7+kr957zPeeg/2jBwA3cwA3cwA3cwA3cwA3cwA3cwA383wQf4XSxnumstcLNfave3+0jnNj6yY3BlnDZnjczhfbYsWhZTfKq7Q98rqoE7w8AwN47noDP2QZ+93knOjAgScp3OE0O5PyA/7qLInwMEtdWsv0WdRvFgBlrG3huLxUD2eXvGyAtSe9Dx3Tuj1SAV3yAXw5RgrcQy0nSV3CpOB0a2AbejfWTJK1EOSjp7yCdkqReuLXT8KlDsK+iALctepxKmJOFkPd4Ob4lPFdBr1Prrd6Xl76AeUnSPFzYaXgNgXfWi3PcLqPbqVW7L08aJ5xtcOALESKLkmQfoiyjEYJLm9Zw9rq7aDzfa6fg0aPTUmlxthJbdbSFv16MMiwXrhFok6Rz0Cd10STp/uzSs4N2Efxrp+Hzkhc+FeLFH1cXL1ayP++8xSTtKsLVDmPS7XJabamVDl1pABLfeEZcu/E69PuTxz3p8HYSgFBq3WkPsjvnga/E2L2WbyRyT1Kcrrfc/JcqjvUGELoqv+H2+ZgjOfybJGm2PPCDPHBdg54zMCpJUaI0TTxaG6uHocJYjTWVEL3kN/w4dM48Wfm6joqbkh4n+ECb4HqXYJBTkqQING9I0sM9xPKFmSL7l2YY9Bf+HXzoTIk4tXmph8TjZ+Dr9RB/5CxsmHQ6LxRrTkwDIX/hbVS5G+YojGsCy5kxHriOw0tP3V7raTH/DXkHvAL+whMcdruW4TOdwFuGCh8F+iRJSarc6AX40jvgtN/wJlpL8IGt4A+j7O/AmpGkM7DsRN+CUenjxEH36Zt+wzsJuefZb2Fcs2m31HIknV5wsp01t1xD4omkyeLOfpbAfambwF2nfdpveBpO2pKUi7OrdDwszfHL8Kk07J7KGolmJenPCMckZeA1W5J+rqDF53TYDkdv5B6M1IN3NyzAs2FeyEt6lcCkpIzFc0MPloZjhH6XpFOQnFy+czZEeM5n+EbhKlC+KUu4cLuV4LQk3QtTtyYpXe1Eh9PORaLTfbp2yvctX9c7aq3KRCqrLeDn4COn4yK8LUlLnyTKrXhqoRA40RazIgfOr5vLsoEbuIEbuIEbuIEbuIEbuIEbuIEb+P8X/g9alo9VQFG9tAAAAABJRU5ErkJggg=="

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

/***/ "dB7M":
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

// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/HamburgMenu/hamburgMenu.style.js


const HamburgMenuWrapper = external_styled_components_default.a.button.withConfig({
  displayName: "hamburgMenustyle__HamburgMenuWrapper",
  componentId: "sc-12m1tps-0"
})(["border:0;background:transparent;width:44px;height:30px;cursor:pointer;", " ", " ", " ", " ", " ", " ", " > span{display:block;width:100%;height:2px;margin:4px 0;float:right;background-color:", ";transition:all 0.3s ease;&:first-child{margin-top:0;}&:last-child{width:calc(100% - 10px);margin-bottom:0;}}&:focus,&:hover{outline:none;> span{&:last-child{width:100%;}}}&:focus,&.active{> span{&:first-child{transform:rotate(45deg);transform-origin:8px 50%;}&:nth-child(2){display:none;}&:last-child{width:100%;transform:rotate(-45deg);transform-origin:9px 50%;}}}"], external_styled_system_["width"], external_styled_system_["height"], external_styled_system_["color"], external_styled_system_["space"], external_styled_system_["border"], external_styled_system_["boxShadow"], external_styled_system_["borderRadius"], props => props.barColor ? props.barColor : '#10ac84');
HamburgMenuWrapper.displayName = 'HamburgMenuWrapper';
/* harmony default export */ var hamburgMenu_style = (HamburgMenuWrapper);
// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/HamburgMenu/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const HamburgMenu = (_ref) => {
  let {
    className,
    wrapperStyle,
    barColor
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "wrapperStyle", "barColor"]);

  // Add all classs to an array
  const addAllClasses = ['hamburgMenu__bar']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(hamburgMenu_style, _extends({
    className: addAllClasses.join(' ')
  }, wrapperStyle, {
    barColor: barColor,
    "aria-label": "hamburgMenu"
  }, props), __jsx("span", null), __jsx("span", null), __jsx("span", null));
};

/* harmony default export */ var components_HamburgMenu = __webpack_exports__["a"] = (HamburgMenu);

/***/ }),

/***/ "dmYZ":
/***/ (function(module, exports) {

module.exports = require("rc-tabs/lib/TabContent");

/***/ }),

/***/ "en32":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_monetization_on");

/***/ }),

/***/ "f8os":
/***/ (function(module, exports) {

module.exports = require("rc-tabs/lib/ScrollableInkTabBar");

/***/ }),

/***/ "fB6L":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/icomoon/pieChart");

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

/***/ "g67g":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-bfece249803f3d440ef27a70c60f54f1.png";

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gd+H":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlT/wgALCAA6ADoBAREA/8QAGAABAAMBAAAAAAAAAAAAAAAAAAYHCAT/2gAIAQEAAAAA1AAAABz5NsiHXZNwAAAAB//EACQQAAICAQMEAgMAAAAAAAAAAAEDAgQFAAYhBxESIhMyMUBQ/9oACAEBAAE/AP2bbZJqPbD7QVOQ9TPkAkcRBJ0vNX6lenjE7jhkUfFWa/LzzN6lWc2VZwKG2GMdJLoSjFhhDsJg8xGqHUHOLtbfoTmmabeHous3LFVocmw2vJgruWokB7jHygB+OR2JI1RzN2jtyzTRnjlIxlgS3MxyVxaJFzJfOh7mtcax8V+8l9vuPXXTm7av7Pousvm9gbagWyYWiUVvnCJg2XLV+IHgw8zj7fw//9k="

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

/***/ "huKr":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlT/wgALCAA3ADcBAREA/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMFBgcI/9oACAEBAAAAAPUAABDk9ZmtJOzHB7mTsl8AAAP/xAArEAACAgEDAwIEBwAAAAAAAAABAwIEBQYREgATIRQWBxUiMRAkMEBCQ7L/2gAIAQEAAT8A/Xs2a9Ou2zZatKErmxrWSEYQhEEmUifAiANyT0fiL8Po1FWzqzAiu1s1KccigQmyABlCMuXmURIbjqzZr067bNlq0oSubGtZIRhCEQSZSJ8CIA3JPXvzQxxRyvubC/LxY9Obnrkdjvbcu33OXHnt526rWa12smzWct6HrgxTVyE4MhICUZRMdwYkHwR+Os6kL+k8zUZWt2lvpNW1FWQi9i5DacVk/wAiOr9LJTZlLVZGszNabqtK2N7ncjNi0SK7AYO4FyfH6TZ+gxHWaqaiv5rUla/V1DawNqjbSmvXmwGdkqgLIiJ/0yjuK4l9Jlz2+8ep0oWEd3Io1e3DV861mKauV4XkxlSCzKYH5orLJMjDf/PWlhlfbGF+bGZyIxtX1vPjy7/bHc34eN+X32/b/wD/2Q=="

/***/ }),

/***/ "i1V0":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/footer-bg-6c398a2ed748b326cdce58b311f7b91b.png";

/***/ }),

/***/ "ik7d":
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

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

/***/ "mXe9":
/***/ (function(module, exports) {



/***/ }),

/***/ "mnHf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UbIB");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_glidejs_glide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Ihd7");
/* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _glide_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("1wYk");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const GlideCarousel = ({
  className,
  children,
  options,
  controls,
  prevButton,
  nextButton,
  prevWrapper,
  nextWrapper,
  bullets,
  numberOfBullets,
  buttonWrapperStyle,
  bulletWrapperStyle,
  bulletButtonStyle,
  carouselSelector
}) => {
  // Add all classs to an array
  const addAllClasses = ['glide']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // number of bullets loop


  const totalBullets = [];

  for (let i = 0; i < numberOfBullets; i++) {
    totalBullets.push(i);
  } // Load glide


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const glide = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_1___default.a(carouselSelector ? `#${carouselSelector}` : '#glide', _objectSpread({}, options));
    glide.mount();
  });
  return __jsx(_glide_style__WEBPACK_IMPORTED_MODULE_3__[/* default */ "g"], {
    className: addAllClasses.join(' '),
    id: carouselSelector || 'glide'
  }, __jsx("div", {
    className: "glide__track",
    "data-glide-el": "track"
  }, __jsx("ul", {
    className: "glide__slides"
  }, children)), controls && __jsx(_glide_style__WEBPACK_IMPORTED_MODULE_3__[/* ButtonControlWrapper */ "c"], _extends({
    className: "glide__controls",
    "data-glide-el": "controls"
  }, buttonWrapperStyle), __jsx(_glide_style__WEBPACK_IMPORTED_MODULE_3__[/* ButtonWrapper */ "d"], _extends({}, prevWrapper, {
    className: "glide__prev--area",
    "data-glide-dir": "<",
    "aria-label": "prev"
  }), prevButton ? prevButton : __jsx(_glide_style__WEBPACK_IMPORTED_MODULE_3__[/* DefaultBtn */ "e"], null, "Prev")), __jsx(_glide_style__WEBPACK_IMPORTED_MODULE_3__[/* ButtonWrapper */ "d"], _extends({}, nextWrapper, {
    className: "glide__next--area",
    "data-glide-dir": ">",
    "aria-label": "next"
  }), nextButton ? nextButton : __jsx(_glide_style__WEBPACK_IMPORTED_MODULE_3__[/* DefaultBtn */ "e"], null, "Next"))), bullets && __jsx(_glide_style__WEBPACK_IMPORTED_MODULE_3__[/* BulletControlWrapper */ "b"], _extends({
    className: "glide__bullets",
    "data-glide-el": "controls[nav]"
  }, bulletWrapperStyle), __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, totalBullets.map(index => __jsx(_glide_style__WEBPACK_IMPORTED_MODULE_3__[/* BulletButton */ "a"], _extends({
    key: index,
    className: "glide__bullet",
    "data-glide-dir": `=${index}`,
    "aria-label": `bullet${index + 1}`
  }, bulletButtonStyle))))));
};

// GlideCarousel default props
GlideCarousel.defaultProps = {
  controls: true,
  bullets: false
};
/* harmony default export */ __webpack_exports__["a"] = (GlideCarousel);

/***/ }),

/***/ "p7cN":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "pi7v":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/icomoon/checkmark");

/***/ }),

/***/ "qQcl":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "rEiF":
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

// EXTERNAL MODULE: external "react-stickynode"
var external_react_stickynode_ = __webpack_require__("isz7");
var external_react_stickynode_default = /*#__PURE__*/__webpack_require__.n(external_react_stickynode_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/contexts/DrawerContext.js
var DrawerContext = __webpack_require__("8qGZ");

// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/theme/saasModern/colors.js
const colors = {
  transparent: 'transparent',
  // 0
  black: '#000000',
  // 1
  white: '#ffffff',
  // 2
  headingColor: '#302b4e',
  textColor: '#43414e',
  // 3
  labelColor: '#767676',
  // 4
  inactiveField: '#f2f2f2',
  // 5
  inactiveButton: '#b7dbdd',
  // 6
  inactiveIcon: '#EBEBEB',
  // 7
  primary: '#2aa275',
  // 8
  primaryHover: '#2aa275',
  // 9
  secondary: '#edcd37',
  // 10
  secondaryHover: '#edcd37',
  // 11
  yellow: '#fdb32a',
  // 12
  yellowHover: '#F29E02',
  // 13
  borderColor: '#1b1e25',
  //14
  primaryBoxShadow: '0px 8px 20px -6px rgba(42, 162, 117, 0.57)',
  secondaryBoxShadow: '0px 8px 20px -6px rgba(237, 205, 55, 0.5)'
};
/* harmony default export */ var saasModern_colors = (colors);
// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/theme/saasModern/index.js

const saasModernTheme = {
  breakpoints: [576, 768, 991, 1220],
  space: [0, 5, 8, 10, 15, 20, 25, 30, 33, 35, 40, 50, 60, 70, 80, 85, 90, 100],
  fontSizes: [10, 12, 14, 15, 16, 18, 20, 22, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
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
  borders: [0, '1px solid', '2px solid', '3px solid', '4px solid', '5px solid', '6px solid'],
  radius: [3, 4, 5, 10, 20, 30, 60, 120, '50%'],
  widths: [36, 40, 44, 48, 54, 70, 81, 128, 256],
  heights: [36, 40, 44, 46, 48, 54, 70, 81, 128],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: saasModern_colors,
  colorStyles: {
    primary: {
      color: saasModern_colors.primary,
      borderColor: saasModern_colors.transparent,
      backgroundColor: saasModern_colors.transparent,
      '&:hover': {
        color: saasModern_colors.primary,
        backgroundColor: saasModern_colors.transparent
      }
    },
    secondary: {
      color: saasModern_colors.secondary,
      borderColor: saasModern_colors.transparent,
      backgroundColor: saasModern_colors.transparent,
      '&:hover': {
        color: saasModern_colors.secondaryHover,
        borderColor: saasModern_colors.transparent,
        backgroundColor: saasModern_colors.transparent
      }
    },
    warning: {
      color: saasModern_colors.yellow,
      borderColor: saasModern_colors.yellow,
      '&:hover': {
        color: saasModern_colors.yellowHover,
        borderColor: saasModern_colors.yellowHover
      }
    },
    error: {
      color: saasModern_colors.secondaryHover,
      borderColor: saasModern_colors.secondaryHover,
      '&:hover': {
        color: saasModern_colors.secondary,
        borderColor: saasModern_colors.secondary
      }
    },
    primaryWithBg: {
      color: saasModern_colors.white,
      backgroundColor: saasModern_colors.primary,
      borderColor: saasModern_colors.primary,
      border: '1px solid',
      '&:hover': {
        color: saasModern_colors.white,
        backgroundColor: saasModern_colors.primaryHover,
        borderColor: saasModern_colors.primaryHover,
        boxShadow: saasModern_colors.primaryBoxShadow
      }
    },
    secondaryWithBg: {
      color: saasModern_colors.black,
      backgroundColor: saasModern_colors.secondary,
      borderColor: saasModern_colors.secondary,
      '&:hover': {
        color: saasModern_colors.black,
        backgroundColor: saasModern_colors.secondaryHover,
        borderColor: saasModern_colors.secondaryHover,
        boxShadow: saasModern_colors.secondaryBoxShadow
      }
    },
    warningWithBg: {
      color: saasModern_colors.white,
      backgroundColor: saasModern_colors.yellow,
      borderColor: saasModern_colors.yellow,
      '&:hover': {
        backgroundColor: saasModern_colors.yellowHover,
        borderColor: saasModern_colors.yellowHover
      }
    },
    errorWithBg: {
      color: saasModern_colors.white,
      backgroundColor: saasModern_colors.secondaryHover,
      borderColor: saasModern_colors.secondaryHover,
      '&:hover': {
        backgroundColor: saasModern_colors.secondary,
        borderColor: saasModern_colors.secondary
      }
    },
    transparentBg: {
      backgroundColor: saasModern_colors.white,
      '&:hover': {
        backgroundColor: saasModern_colors.white
      }
    }
  },
  buttonStyles: {
    textButton: {
      border: 0,
      color: saasModern_colors.primary,
      padding: 0,
      height: 'auto',
      backgroundColor: saasModern_colors.transparent
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      backgroundColor: saasModern_colors.transparent
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
  } // FlexBox: {
  //   backgroundColor: 'green'
  // }

};
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/css/style.js
var style = __webpack_require__("H4oa");

// CONCATENATED MODULE: ./containers/SaasModern/sassModern.style.js

const GlobalStyle = external_styled_components_["createGlobalStyle"]`
  body{
    font-family: 'Roboto', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto', sans-serif;
  }

  section {
    position: relative;
  }

  .drawer-content-wrapper{
    @media (max-width: 767px) {
      width: 300px!important;
    }
    .drawer-content {
      padding: 60px;    
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 767px) {
        padding: 50px 40px 30px 40px;
      }
      .mobile_menu {
        margin-bottom: 40px;
        flex-grow: 1;
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
        li{
          margin-bottom: 35px;
          @media (max-width: 767px) {
            margin-bottom: 25px;
          }
          a{
            font-size: 20px;
            font-weight: 400;
            color: #343d48;
            position: relative;
            transition: 0.15s ease-in-out;
            @media (max-width: 767px) {
              font-size: 18px;
            }
            &:hover {
              color: #2aa275;
            }
            &:before{
              content: '';
              width: 7px;
              height: 7px;
              background: #2aa275;
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: -15px;
              transform: translateY(-50%);
              opacity: 0;
            }
          }
          &.is-current {
            a {
              color: #2aa275;
              &:before{
                opacity: 1;
              }
            }
          }
        }
      }
      .navbar_drawer_button button{
        width: 100%;
      }
    }

    .reusecore-drawer__close{
      width: 34px;
      height: 34px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      @media (max-width: 767px) {
        top: 15px;
        right: 15px;
      }
      &:before{
        content: '\f10b';
        font-family: Flaticon;
        font-size: 26px;
        color: #2aa275;
        transform: rotate(45deg);
        display: block;
      }
    }
  }
`;
const ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "sassModernstyle__ContentWrapper",
  componentId: "sc-45xbw9-0"
})(["overflow:hidden;.sticky-nav-active{.saas_navbar{background:#fff;box-shadow:0px 3px 8px 0px rgba(43,83,135,0.08);padding:15px 0;.main-logo{display:none;}.logo-alt{display:block;}.main_menu{li{a{color:#000;&:hover{color:#2aa275;}}&.is-current{a{color:#2aa275;}}}}}.hamburgMenu__bar{> span{background:#2aa275;}}}.saas_navbar{position:fixed;top:0;left:0;width:100%;transition:0.35s ease-in-out;padding:30px 0;.logo-alt{display:none;}.main_menu{margin-right:40px;li{display:inline-block;padding-left:13px;padding-right:13px;&:first-child{padding-left:0;}&:last-child{padding-right:0;}&.is-current{a{color:#edcd37;}}a{padding:5px;font-size:16px;font-weight:400;color:#fff;transition:0.15s ease-in-out;&:hover{color:#edcd37;}}}@media (max-width:990px){display:none;}}.navbar_button{@media (max-width:990px){display:none;}}.reusecore-drawer__handler{@media (min-width:991px){display:none !important;}.hamburgMenu__bar{> span{}}}}"]);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-icons-kit"
var external_react_icons_kit_ = __webpack_require__("Oi65");
var external_react_icons_kit_default = /*#__PURE__*/__webpack_require__.n(external_react_icons_kit_);

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Box/index.js
var Box = __webpack_require__("l54f");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Text/index.js
var Text = __webpack_require__("4Af6");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Heading/index.js
var Heading = __webpack_require__("bHe8");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Button/index.js + 4 modules
var Button = __webpack_require__("D7Vo");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Image/index.js
var Image = __webpack_require__("KFN4");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("H3JQ");

// CONCATENATED MODULE: ./containers/SaasModern/TiltShape/tiltShape.style.js

const ShapeWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "tiltShapestyle__ShapeWrapper",
  componentId: "sc-12vvaea-0"
})(["position:absolute;width:100%;bottom:0;left:0;z-index:0;pointer-events:none;svg{width:100%;height:auto;display:block;}& ~ div{z-index:1;position:relative;}"]);
/* harmony default export */ var tiltShape_style = (ShapeWrapper);
// CONCATENATED MODULE: ./containers/SaasModern/TiltShape/index.js
var __jsx = external_react_default.a.createElement;



const TiltShape = ({
  className,
  color
}) => {
  // Add all classs to an array
  const addAllClasses = ['tilt_shape']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(tiltShape_style, {
    className: addAllClasses.join(' ')
  }, __jsx("svg", {
    width: "1920",
    height: "500",
    viewBox: "0 0 1920 500"
  }, __jsx("defs", null, __jsx("clipPath", null, __jsx("rect", {
    width: "1920",
    height: "500"
  }))), __jsx("g", null, __jsx("rect", {
    width: "2356",
    height: "781",
    transform: "translate(-136.868 401.948) rotate(-11)",
    fill: color || '#fff'
  }))));
};

/* harmony default export */ var SaasModern_TiltShape = (TiltShape);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saasModern/banner-texture.png
var banner_texture = __webpack_require__("D1tS");
var banner_texture_default = /*#__PURE__*/__webpack_require__.n(banner_texture);

// CONCATENATED MODULE: ./containers/SaasModern/Banner/banner.style.js


const BannerWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "bannerstyle__BannerWrapper",
  componentId: "sc-1ig8j7l-0"
})(["padding:150px 0 50px 0;background-image:url(", "),linear-gradient(35deg,rgb(147,249,185) 0%,rgb(29,151,108) 100%);background-size:cover;background-position:top center;@media (max-width:575px){padding:120px 0 0 0;}img{max-width:100%;height:auto;display:block;}"], banner_texture_default.a);
const DiscountWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__DiscountWrapper",
  componentId: "sc-1ig8j7l-1"
})(["text-align:center;"]);
const DiscountLabel = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__DiscountLabel",
  componentId: "sc-1ig8j7l-2"
})(["font-family:'Open Sans',sans-serif;display:inline-block;border-radius:4em;padding:9px 22px;margin-bottom:22px;background-color:rgba(255,255,255,0.15);@media (max-width:575px){padding:7px 10px;}"]);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saasModern/banner-image.png
var banner_image = __webpack_require__("Bt41");
var banner_image_default = /*#__PURE__*/__webpack_require__.n(banner_image);

// EXTERNAL MODULE: external "react-icons-kit/md/ic_play_circle_filled"
var ic_play_circle_filled_ = __webpack_require__("/G5B");

// CONCATENATED MODULE: ./containers/SaasModern/Banner/index.js
var Banner_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















const BannerSection = ({
  row,
  contentWrapper,
  discountAmount,
  discountText,
  title,
  description,
  imageWrapper,
  buttonWrapper,
  button,
  fillButton
}) => {
  return Banner_jsx(BannerWrapper, {
    id: "banner_section"
  }, Banner_jsx(SaasModern_TiltShape, null), Banner_jsx(Container["a" /* default */], null, Banner_jsx(Box["a" /* default */], row, Banner_jsx(Box["a" /* default */], contentWrapper, Banner_jsx(DiscountWrapper, null, Banner_jsx(DiscountLabel, null, Banner_jsx(Text["a" /* default */], _extends({}, discountAmount, {
    content: "25% Save"
  })), Banner_jsx(Text["a" /* default */], _extends({}, discountText, {
    content: "for first month trail version"
  })))), Banner_jsx(Heading["a" /* default */], _extends({}, title, {
    content: "Ultimate Platform to monitor your best workflow."
  })), Banner_jsx(Text["a" /* default */], _extends({}, description, {
    content: "For Enhanced performance we use LiteSpeed Web Server, HTTP/2, PHP7. We make your website faster, which will help you to increase search ranking!"
  })), Banner_jsx(Box["a" /* default */], buttonWrapper, Banner_jsx(link_default.a, {
    href: "#"
  }, Banner_jsx("a", null, Banner_jsx(Button["a" /* default */], _extends({}, fillButton, {
    title: "FREE TRIAL"
  })))), Banner_jsx(link_default.a, {
    href: "#"
  }, Banner_jsx("a", null, Banner_jsx(Button["a" /* default */], _extends({}, button, {
    title: "WATCH VIDEO",
    icon: Banner_jsx(external_react_icons_kit_default.a, {
      icon: ic_play_circle_filled_["ic_play_circle_filled"],
      size: 30
    }),
    iconPosition: "left"
  })))))), Banner_jsx(Box["a" /* default */], imageWrapper, Banner_jsx(Fade_default.a, {
    bottom: true
  }, Banner_jsx(Image["a" /* default */], {
    src: banner_image_default.a,
    alt: "banner image"
  }))))));
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentWrapper: {
    width: ['100%', '100%', '80%', '55%', '50%'],
    mb: '40px'
  },
  title: {
    fontSize: ['24px', '32px', '40px', '42px', '46px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px', '25px', '25px', '25px'],
    lineHeight: '1.2',
    textAlign: 'center'
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#fff',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center'
  },
  discountAmount: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
    color: '#00865b',
    mb: 0,
    as: 'span',
    mr: '0.4em'
  },
  discountText: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
    color: '#fff',
    mb: 0,
    as: 'span'
  },
  fillButton: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    colors: 'secondaryWithBg',
    minWidth: ['auto', '150px'],
    height: ['40px', '46px'],
    minHeight: 'auto'
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
    mt: '35px'
  },
  button: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    color: '#fff',
    colors: 'secondary',
    height: ['40px', '46px'],
    minHeight: 'auto'
  }
};
/* harmony default export */ var Banner = (BannerSection);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Navbar/index.js + 1 modules
var Navbar = __webpack_require__("HqwP");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Drawer/index.js
var Drawer = __webpack_require__("KfK3");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/UIElements/Logo/index.js
var Logo = __webpack_require__("cIfr");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/HamburgMenu/index.js + 1 modules
var HamburgMenu = __webpack_require__("dB7M");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/data/SaasModern/index.js
var SaasModern = __webpack_require__("M4OK");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/ScrollSpyMenu/index.js
var ScrollSpyMenu = __webpack_require__("8obO");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saasModern/logo-white.png
var logo_white = __webpack_require__("Xlsg");
var logo_white_default = /*#__PURE__*/__webpack_require__.n(logo_white);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saasModern/logo.png
var logo = __webpack_require__("g67g");
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// CONCATENATED MODULE: ./containers/SaasModern/Navbar/index.js
var Navbar_jsx = external_react_default.a.createElement;

function Navbar_extends() { Navbar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Navbar_extends.apply(this, arguments); }
















const Navbar_Navbar = ({
  navbarStyle,
  logoStyle,
  button,
  row,
  menuWrapper
}) => {
  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(DrawerContext["a" /* DrawerContext */]); // Toggle drawer

  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE'
    });
  };

  return Navbar_jsx(Navbar["a" /* default */], Navbar_extends({}, navbarStyle, {
    className: "saas_navbar"
  }), Navbar_jsx(Container["a" /* default */], null, Navbar_jsx(Box["a" /* default */], row, Navbar_jsx(Logo["a" /* default */], {
    href: "#",
    logoSrc: logo_white_default.a,
    title: "Portfolio",
    logoStyle: logoStyle,
    className: "main-logo"
  }), Navbar_jsx(Logo["a" /* default */], {
    href: "#",
    logoSrc: logo_default.a,
    title: "Portfolio",
    logoStyle: logoStyle,
    className: "logo-alt"
  }), Navbar_jsx(Box["a" /* default */], menuWrapper, Navbar_jsx(ScrollSpyMenu["a" /* default */], {
    className: "main_menu",
    menuItems: SaasModern["d" /* MENU_ITEMS */],
    offset: -70
  }), Navbar_jsx(link_default.a, {
    href: "#"
  }, Navbar_jsx("a", {
    className: "navbar_button"
  }, Navbar_jsx(Button["a" /* default */], Navbar_extends({}, button, {
    title: "GET STARTED"
  })))), Navbar_jsx(Drawer["a" /* default */], {
    width: "420px",
    placement: "right",
    drawerHandler: Navbar_jsx(HamburgMenu["a" /* default */], {
      barColor: "#fff"
    }),
    open: state.isOpen,
    toggleHandler: toggleHandler
  }, Navbar_jsx(ScrollSpyMenu["a" /* default */], {
    className: "mobile_menu",
    menuItems: SaasModern["d" /* MENU_ITEMS */],
    drawerClose: true,
    offset: -100
  }), Navbar_jsx(link_default.a, {
    href: "#"
  }, Navbar_jsx("a", {
    className: "navbar_drawer_button"
  }, Navbar_jsx(Button["a" /* default */], Navbar_extends({}, button, {
    title: "GET STARTED"
  })))))))));
};

Navbar_Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
    display: 'block'
  },
  row: {
    flexBox: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  logoStyle: {
    maxWidth: ['120px', '130px']
  },
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '700',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'secondaryWithBg',
    minHeight: 'auto',
    height: '40px'
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center'
  }
};
/* harmony default export */ var SaasModern_Navbar = (Navbar_Navbar);
// CONCATENATED MODULE: ./containers/SaasModern/WorkingProcess/workingProcess.style.js

const ProcessItem = external_styled_components_default.a.div.withConfig({
  displayName: "workingProcessstyle__ProcessItem",
  componentId: "sc-1u1bf8d-0"
})(["position:relative;"]);
const ProcessIndex = external_styled_components_default.a.span.withConfig({
  displayName: "workingProcessstyle__ProcessIndex",
  componentId: "sc-1u1bf8d-1"
})(["width:45px;height:45px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#fff;color:#343d48;font-size:24px;font-weight:700;box-shadow:0px 6px 10.34px 0.66px rgba(42,96,151,0.25);position:absolute;top:-15px;left:-15px;z-index:1;@media (max-width:990px){width:40px;height:40px;font-size:20px;top:-13px;left:-13px;}"]);
/* harmony default export */ var workingProcess_style = (ProcessItem);
// CONCATENATED MODULE: ./containers/SaasModern/WorkingProcess/index.js
var WorkingProcess_jsx = external_react_default.a.createElement;

function WorkingProcess_extends() { WorkingProcess_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return WorkingProcess_extends.apply(this, arguments); }










const WorkingProcessSection = ({
  sectionWrapper,
  secTitleWrapper,
  secText,
  secHeading,
  processRow,
  processCol,
  processImageStyle,
  processTitleStyle,
  processDescriptionStyle
}) => {
  return WorkingProcess_jsx(Box["a" /* default */], WorkingProcess_extends({}, sectionWrapper, {
    as: "section"
  }), WorkingProcess_jsx(Container["a" /* default */], null, WorkingProcess_jsx(Box["a" /* default */], secTitleWrapper, WorkingProcess_jsx(Text["a" /* default */], WorkingProcess_extends({}, secText, {
    content: "WORKING PROCESS"
  })), WorkingProcess_jsx(Heading["a" /* default */], WorkingProcess_extends({}, secHeading, {
    content: "Our Featured Service that We Provide"
  }))), WorkingProcess_jsx(Box["a" /* default */], processRow, SaasModern["f" /* PROCESS_ITEMS */].map((item, index) => WorkingProcess_jsx(Box["a" /* default */], WorkingProcess_extends({}, processCol, {
    key: `process-item-${index}`,
    className: "process_item_col"
  }), WorkingProcess_jsx(workingProcess_style, {
    className: "process_item"
  }, WorkingProcess_jsx(ProcessIndex, null, item.index || index + 1), WorkingProcess_jsx(Image["a" /* default */], WorkingProcess_extends({
    src: item.image,
    alt: `process-image-${index + 1}`
  }, processImageStyle)), WorkingProcess_jsx(Heading["a" /* default */], WorkingProcess_extends({
    as: "h3",
    content: item.title
  }, processTitleStyle)), WorkingProcess_jsx(Text["a" /* default */], WorkingProcess_extends({
    content: item.description
  }, processDescriptionStyle))))))));
};

WorkingProcessSection.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '15px', '15px', '15px', '15px'],
    pb: 0
  },
  secTitleWrapper: {
    mb: ['60px', '100px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#2aa275',
    mb: '5px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67'
  },
  processRow: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['0', '-15px', '-20px', '-35px', '-45px'],
    mr: ['0', '-15px', '-20px', '-35px', '-45px']
  },
  processCol: {
    width: [1, 1 / 3],
    pl: ['0', '15px', '20px', '35px', '45px'],
    pr: ['0', '15px', '20px', '35px', '45px'],
    mb: '40px'
  },
  processImageStyle: {
    mb: '35px',
    width: ['60px', '60px', '70px', 'auto']
  },
  processTitleStyle: {
    fontSize: ['20px', '18px', '20px', '20px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.02em',
    mb: ['20px', '20px', '22px', '22px', '22px']
  },
  processDescriptionStyle: {
    fontSize: ['15px', '15px', '15px', '15px'],
    fontWeight: '400',
    color: '#343d48',
    lineHeight: '1.87'
  }
};
/* harmony default export */ var WorkingProcess = (WorkingProcessSection);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/GlideCarousel/index.js
var GlideCarousel = __webpack_require__("mnHf");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/GlideCarousel/glideSlide.js
var glideSlide = __webpack_require__("9NE4");

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./containers/SaasModern/Pricing/pricing.style.js


const PricingTable = external_styled_components_default.a.div.withConfig({
  displayName: "pricingstyle__PricingTable",
  componentId: "sc-1bjb5jx-0"
})(["border:1px solid #f2f4f7;border-radius:5px;padding:60px 45px;border-radius:5px;@media (max-width:767px){padding:45px 35px;}"]);
const PricingHead = external_styled_components_default.a.div.withConfig({
  displayName: "pricingstyle__PricingHead",
  componentId: "sc-1bjb5jx-1"
})(["margin-bottom:40px;"]);
const PricingPrice = external_styled_components_default.a.div.withConfig({
  displayName: "pricingstyle__PricingPrice",
  componentId: "sc-1bjb5jx-2"
})(["margin-bottom:30px;"]);
const PricingButton = external_styled_components_default.a.div.withConfig({
  displayName: "pricingstyle__PricingButton",
  componentId: "sc-1bjb5jx-3"
})(["text-align:center;margin-bottom:55px;"]);
const PricingList = external_styled_components_default.a.div.withConfig({
  displayName: "pricingstyle__PricingList",
  componentId: "sc-1bjb5jx-4"
})([""]);
const ListItem = external_styled_components_default.a.div.withConfig({
  displayName: "pricingstyle__ListItem",
  componentId: "sc-1bjb5jx-5"
})(["display:flex;margin-bottom:19px;&:last-child{margin-bottom:0;}.price_list_icon{color:#18d379;margin-right:10px;}"]);
const SwitchWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "pricingstyle__SwitchWrapper",
  componentId: "sc-1bjb5jx-6"
})(["text-align:center;margin-top:20px;.reusecore__switch{.reusecore__field-label{font-size:16px;font-weight:400;color:#5c636c;cursor:pointer;}input[type='checkbox']{&:checked{+ div{width:40px !important;background-color:", ";> div{left:17px !important;}}}+ div{background-color:#f0f0f0;background-color:#f0f0f0;border:0;width:40px;height:25px;> div{background-color:#fff;box-shadow:0px 2px 3px 0.24px rgba(31,64,104,0.25);width:21px;height:21px;top:2px;left:2px;}}}}"], Object(external_styled_system_["themeGet"])('colors.primary'));
const PricingButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "pricingstyle__PricingButtonWrapper",
  componentId: "sc-1bjb5jx-7"
})(["text-align:center;margin-top:30px;.reusecore__button{font-size:16px;font-weight:400;color:#6f7a87;background:#fff;height:50px;width:165px;border:1px solid #e4e9ee;&:nth-child(1){border-top-left-radius:5px;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:5px;border-right-color:transparent;}&:nth-child(2){border-top-left-radius:0;border-top-right-radius:5px;border-bottom-right-radius:5px;border-bottom-left-radius:0;border-left-color:transparent;}&.active-item{color:#2aa275;border-color:#2aa275;}@media (max-width:575px){font-size:14px;height:44px;width:120px;padding:0 5px;}}"]);

/* harmony default export */ var pricing_style = (PricingTable);
// EXTERNAL MODULE: external "react-icons-kit/icomoon/checkmark"
var checkmark_ = __webpack_require__("pi7v");

// CONCATENATED MODULE: ./containers/SaasModern/Pricing/index.js
var Pricing_jsx = external_react_default.a.createElement;

function Pricing_extends() { Pricing_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Pricing_extends.apply(this, arguments); }















const PricingSection = ({
  sectionWrapper,
  row,
  secTitleWrapper,
  secHeading,
  secText,
  nameStyle,
  descriptionStyle,
  priceStyle,
  priceLabelStyle,
  buttonStyle,
  buttonFillStyle,
  listContentStyle
}) => {
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({
    data: SaasModern["e" /* MONTHLY_PRICING_TABLE */],
    active: true
  });
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    setTimeout(function () {
      setLoading(true);
    }, 500);
  });
  const data = state.data;
  const activeStatus = state.active;
  const pricingCarouselOptions = {
    type: 'slider',
    perView: 3,
    gap: 30,
    bound: true,
    breakpoints: {
      1199: {
        perView: 2,
        type: 'carousel',
        peek: {
          before: 100,
          after: 100
        }
      },
      990: {
        type: 'carousel',
        perView: 1,
        peek: {
          before: 160,
          after: 160
        }
      },
      767: {
        type: 'carousel',
        perView: 1,
        peek: {
          before: 80,
          after: 80
        }
      },
      575: {
        type: 'carousel',
        perView: 1,
        gap: 15,
        peek: {
          before: 20,
          after: 20
        }
      }
    }
  };
  return Pricing_jsx(Box["a" /* default */], Pricing_extends({}, sectionWrapper, {
    id: "pricing_section"
  }), Pricing_jsx(Container["a" /* default */], null, Pricing_jsx(Box["a" /* default */], secTitleWrapper, Pricing_jsx(Text["a" /* default */], Pricing_extends({}, secText, {
    content: "PRICING PLAN"
  })), Pricing_jsx(Heading["a" /* default */], Pricing_extends({}, secHeading, {
    content: "What\u2019s our monthly pricing subscription"
  })), Pricing_jsx(PricingButtonWrapper, null, Pricing_jsx(Button["a" /* default */], {
    title: "Monthly Plan",
    className: activeStatus ? 'active-item' : '',
    onClick: () => setState({
      data: SaasModern["e" /* MONTHLY_PRICING_TABLE */],
      active: true
    })
  }), Pricing_jsx(Button["a" /* default */], {
    title: "Annual Plan",
    className: activeStatus === false ? 'active-item' : '',
    onClick: () => setState({
      data: SaasModern["i" /* YEARLY_PRICING_TABLE */],
      active: false
    })
  }))), Pricing_jsx(Box["a" /* default */], row, Pricing_jsx(GlideCarousel["a" /* default */], {
    carouselSelector: "pricing-carousel",
    options: pricingCarouselOptions,
    controls: false
  }, Pricing_jsx(external_react_default.a.Fragment, null, data.map((pricingTable, index) => Pricing_jsx(glideSlide["a" /* default */], {
    key: `pricing-table-${index}`
  }, Pricing_jsx(pricing_style, {
    freePlan: pricingTable.freePlan,
    className: "pricing_table"
  }, Pricing_jsx(PricingHead, null, Pricing_jsx(Heading["a" /* default */], Pricing_extends({
    content: pricingTable.name
  }, nameStyle)), Pricing_jsx(Text["a" /* default */], Pricing_extends({
    content: pricingTable.description
  }, descriptionStyle))), Pricing_jsx(PricingPrice, null, Pricing_jsx(Text["a" /* default */], Pricing_extends({
    content: pricingTable.price
  }, priceStyle)), Pricing_jsx(Text["a" /* default */], Pricing_extends({
    content: pricingTable.priceLabel
  }, priceLabelStyle))), Pricing_jsx(PricingButton, null, Pricing_jsx(link_default.a, {
    href: pricingTable.url
  }, Pricing_jsx("a", null, pricingTable.freePlan ? Pricing_jsx(Button["a" /* default */], Pricing_extends({
    title: pricingTable.buttonLabel
  }, buttonStyle)) : Pricing_jsx(Button["a" /* default */], Pricing_extends({
    title: pricingTable.buttonLabel
  }, buttonFillStyle))))), Pricing_jsx(PricingList, null, pricingTable.listItems.map((item, index) => Pricing_jsx(ListItem, {
    key: `pricing-table-list-${index}`
  }, Pricing_jsx(external_react_icons_kit_default.a, {
    icon: checkmark_["checkmark"],
    className: "price_list_icon",
    size: 13
  }), Pricing_jsx(Text["a" /* default */], Pricing_extends({
    content: item.content
  }, listContentStyle)))))))))))));
};

PricingSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['100px', '100px', '100px', '140px', '160px'],
    pb: ['60px', '80px', '80px', '100px']
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center'
  },
  secTitleWrapper: {
    mb: ['50px', '75px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#2aa275',
    mb: '5px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67'
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    pr: '15px',
    pl: '15px'
  },
  nameStyle: {
    fontSize: ['20px', '20px', '22px', '22px', '22px'],
    fontWeight: '500',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    textAlign: 'center',
    mb: '12px'
  },
  descriptionStyle: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: 'textColor',
    lineHeight: '1.75',
    textAlign: 'center',
    mb: '0'
  },
  priceStyle: {
    as: 'span',
    display: 'block',
    fontSize: ['36px', '36px', '40px', '40px', '40px'],
    color: 'headingColor',
    textAlign: 'center',
    mb: '5px',
    letterSpacing: '-0.025em'
  },
  priceLabelStyle: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    color: 'textColor',
    lineHeight: '1.75',
    textAlign: 'center',
    mb: '0'
  },
  buttonStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    bg: '#fff',
    color: '#2aa275',
    colors: 'primaryWithBg',
    width: '222px',
    maxWidth: '100%'
  },
  buttonFillStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: 'white',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    colors: 'primaryWithBg',
    width: '200px',
    maxWidth: '100%'
  },
  listContentStyle: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: 'textColor',
    mb: '0'
  }
};
/* harmony default export */ var Pricing = (PricingSection);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saasModern/map.png
var map = __webpack_require__("KU6X");
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// CONCATENATED MODULE: ./containers/SaasModern/Partner/partner.style.js


const PartnerSectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "partnerstyle__PartnerSectionWrapper",
  componentId: "u4toeo-0"
})(["padding:120px 0;background-color:#f6fbf9;background-image:url(", ");background-repeat:no-repeat;background-position:25% center;@media (max-width:990px){padding:100px 0;}@media (max-width:767px){padding:80px 0;}@media (max-width:575px){padding:60px 0;}"], map_default.a);
/* harmony default export */ var partner_style = (PartnerSectionWrapper);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saasModern/partner.png
var partner = __webpack_require__("yKbb");
var partner_default = /*#__PURE__*/__webpack_require__.n(partner);

// CONCATENATED MODULE: ./containers/SaasModern/Partner/index.js
var Partner_jsx = external_react_default.a.createElement;

function Partner_extends() { Partner_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Partner_extends.apply(this, arguments); }












const PartnerSection = ({
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea
}) => {
  return Partner_jsx(partner_style, null, Partner_jsx(Container["a" /* default */], null, Partner_jsx(Box["a" /* default */], row, Partner_jsx(Box["a" /* default */], Partner_extends({}, col, imageArea), Partner_jsx(Image["a" /* default */], {
    src: partner_default.a,
    alt: "Domain Image"
  })), Partner_jsx(Box["a" /* default */], Partner_extends({}, col, textArea), Partner_jsx(Heading["a" /* default */], Partner_extends({}, title, {
    content: "Meet our business partner who work behind the scene"
  })), Partner_jsx(Text["a" /* default */], Partner_extends({}, description, {
    content: "You can trust us for any kind of services and some of the world class companies have also trusted us.So have faith and keep in touch with us ."
  })), Partner_jsx(Box["a" /* default */], null, Partner_jsx(link_default.a, {
    href: "#"
  }, Partner_jsx("a", null, Partner_jsx(Button["a" /* default */], Partner_extends({}, button, {
    title: "LEARN MORE"
  })))))))));
};

PartnerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center'
  },
  imageAreaRow: {
    flexDirection: 'row-reverse'
  },
  col: {
    pr: '15px',
    pl: '15px'
  },
  textArea: {
    width: ['100%', '100%', '55%', '50%', '42%']
  },
  imageArea: {
    width: ['100%', '100%', '45%', '50%', '58%'],
    mb: ['40px', '40px', '0', '0', '0']
  },
  title: {
    fontSize: ['26px', '30px', '30px', '48px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '15px',
    lineHeight: '1.25'
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px'
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'secondaryWithBg',
    minWidth: '150px'
  }
};
/* harmony default export */ var Partner = (PartnerSection);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Accordion/index.js + 1 modules
var Accordion = __webpack_require__("aVK5");

// EXTERNAL MODULE: external "react-icons-kit/entypo/plus"
var plus_ = __webpack_require__("Av/8");

// EXTERNAL MODULE: external "react-icons-kit/entypo/minus"
var minus_ = __webpack_require__("8N94");

// CONCATENATED MODULE: ./containers/SaasModern/Faq/faq.style.js

const FaqWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "faqstyle__FaqWrapper",
  componentId: "sc-1cqpwx6-0"
})([".accordion_item{border:1px solid #eff2f5;border-radius:5px;margin-bottom:5px;}.accordion_title{padding:23px 30px;@media (max-width:575px){padding:15px 20px;}}.accordion_body{padding:0 30px 23px 30px;@media (max-width:575px){padding:0 20px 15px 20px;}}"]);
/* harmony default export */ var faq_style = (FaqWrapper);
// CONCATENATED MODULE: ./containers/SaasModern/Faq/index.js
var Faq_jsx = external_react_default.a.createElement;

function Faq_extends() { Faq_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Faq_extends.apply(this, arguments); }















const FaqSection = ({
  sectionWrapper,
  row,
  col,
  secTitleWrapper,
  secHeading,
  secText,
  title,
  description,
  buttonWrapper,
  button
}) => {
  return Faq_jsx(Box["a" /* default */], Faq_extends({}, sectionWrapper, {
    id: "faq_section"
  }), Faq_jsx(Container["a" /* default */], null, Faq_jsx(Box["a" /* default */], secTitleWrapper, Faq_jsx(Text["a" /* default */], Faq_extends({}, secText, {
    content: "FREQUENTLY ASK QUESTION"
  })), Faq_jsx(Heading["a" /* default */], Faq_extends({}, secHeading, {
    content: "Want to ask something from us?"
  }))), Faq_jsx(Box["a" /* default */], row, Faq_jsx(Box["a" /* default */], col, Faq_jsx(faq_style, null, Faq_jsx(Accordion["a" /* Accordion */], null, Faq_jsx(external_react_default.a.Fragment, null, SaasModern["a" /* FAQ_DATA */].map((accordionItem, index) => Faq_jsx(Accordion["c" /* AccordionItem */], {
    className: "accordion_item",
    key: `accordion-${index}`,
    expanded: accordionItem.expend
  }, Faq_jsx(external_react_default.a.Fragment, null, Faq_jsx(Accordion["d" /* AccordionTitle */], {
    className: "accordion_title"
  }, Faq_jsx(external_react_default.a.Fragment, null, Faq_jsx(Heading["a" /* default */], Faq_extends({}, title, {
    content: accordionItem.title
  })), Faq_jsx(Accordion["f" /* IconWrapper */], null, Faq_jsx(Accordion["g" /* OpenIcon */], null, Faq_jsx(external_react_icons_kit_["Icon"], {
    icon: minus_["minus"],
    size: 18
  })), Faq_jsx(Accordion["e" /* CloseIcon */], null, Faq_jsx(external_react_icons_kit_["Icon"], {
    icon: plus_["plus"],
    size: 18
  }))))), Faq_jsx(Accordion["b" /* AccordionBody */], {
    className: "accordion_body"
  }, Faq_jsx(Text["a" /* default */], Faq_extends({}, description, {
    content: accordionItem.description
  }))))))))), Faq_jsx(Box["a" /* default */], buttonWrapper, Faq_jsx(link_default.a, {
    href: "#"
  }, Faq_jsx("a", null, Faq_jsx(Button["a" /* default */], Faq_extends({}, button, {
    title: "EXPLORE FORUM"
  })))))))));
};

FaqSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['20px', '30px', '50px', '50px'],
    pb: ['60px', '80px', '80px', '80px']
  },
  secTitleWrapper: {
    mb: ['55px', '65px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#2aa275',
    mb: '5px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67'
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  col: {
    width: ['100%', '100%', '75%', '75%']
  },
  title: {
    fontSize: ['16px', '19px'],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: 0
  },
  description: {
    fontSize: '15px',
    color: 'textColor',
    lineHeight: '1.75',
    mb: 0
  },
  buttonWrapper: {
    mt: '50px',
    flexBox: true,
    justifyContent: 'center'
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: ['22px'],
    pr: ['22px'],
    colors: 'secondaryWithBg',
    minWidth: '150px'
  }
};
/* harmony default export */ var Faq = (FaqSection);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saasModern/vendor-logos.png
var vendor_logos = __webpack_require__("ZHH+");
var vendor_logos_default = /*#__PURE__*/__webpack_require__.n(vendor_logos);

// CONCATENATED MODULE: ./containers/SaasModern/Trial/index.js
var Trial_jsx = external_react_default.a.createElement;

function Trial_extends() { Trial_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Trial_extends.apply(this, arguments); }










const TrialSection = ({
  sectionWrapper,
  row,
  title,
  description,
  textArea,
  imageArea,
  ImageOne,
  btnStyle,
  outlineBtnStyle,
  buttonWrapper
}) => {
  return Trial_jsx(Box["a" /* default */], sectionWrapper, Trial_jsx(Container["a" /* default */], null, Trial_jsx(Box["a" /* default */], row, Trial_jsx(Box["a" /* default */], imageArea, Trial_jsx(Image["a" /* default */], Trial_extends({}, ImageOne, {
    src: vendor_logos_default.a,
    alt: "VendorLogos"
  }))), Trial_jsx(Box["a" /* default */], textArea, Trial_jsx(Heading["a" /* default */], Trial_extends({}, title, {
    content: "Start your 30 days free trials today!"
  })), Trial_jsx(Text["a" /* default */], Trial_extends({}, description, {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore."
  })), Trial_jsx(Box["a" /* default */], buttonWrapper, Trial_jsx(Button["a" /* default */], Trial_extends({
    title: "JOIN WITH SLACK"
  }, btnStyle)), Trial_jsx(Button["a" /* default */], Trial_extends({
    title: "Login with Email",
    variant: "textButton"
  }, outlineBtnStyle)))))));
};

TrialSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    className: 'trial-section',
    pt: ['20px', '40px', '60px', '80px'],
    pb: ['0px', '0px', '0px', '80px']
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center'
  },
  textArea: {
    width: ['100%', '100%', '80%', '43%']
  },
  imageArea: {
    width: ['100%', '100%', '43%'],
    mb: ['35px', '35px', '40px', '40px']
  },
  title: {
    fontSize: ['28px', '32px', '36px', '42px', '48px'],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '28px',
    textAlign: 'center',
    lineHeight: '1.25'
  },
  description: {
    fontSize: ['15px', '15px', '16px', '16px', '16px'],
    color: '#5c636c',
    lineHeight: '2.1',
    textAlign: 'center',
    mb: ['35px', '35px', '40px', '60px']
  },
  ImageOne: {
    ml: 'auto',
    mr: 'auto'
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center'
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'secondaryWithBg',
    pl: ['15px', '30px'],
    pr: ['15px', '30px']
  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#0f2137',
    colors: 'secondary'
  }
};
/* harmony default export */ var Trial = (TrialSection);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Card/index.js
var Card = __webpack_require__("rZdf");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saasModern/dash-bg.png
var dash_bg = __webpack_require__("CfLJ");
var dash_bg_default = /*#__PURE__*/__webpack_require__.n(dash_bg);

// CONCATENATED MODULE: ./containers/SaasModern/Info/info.style.js


const InfoSectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "infostyle__InfoSectionWrapper",
  componentId: "heupe5-0"
})(["padding:380px 0 250px 0;@media (max-width:1600px){padding:280px 0 200px 0;}@media (max-width:1400px){padding:180px 0 180px 0;}@media (max-width:1300px){padding:150px 0 150px 0;}@media (max-width:1199px){padding:100px 0 100px 0;}@media (max-width:767px){padding:30px 0 60px 0;}.info-sec-container{@media (min-width:768px){position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:-1;}@media (max-width:768px) and (min-width:768px){top:40%;}@media (max-width:767px){padding-bottom:40px;}.image_area{background-image:url(", ");background-position:bottom left;background-size:contain;background-repeat:no-repeat;padding:50px 0 60px 0;@media (max-width:767px){padding-top:0;}}}"], dash_bg_default.a);
/* harmony default export */ var info_style = (InfoSectionWrapper);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saasModern/dash-1.png
var dash_1 = __webpack_require__("JRwp");
var dash_1_default = /*#__PURE__*/__webpack_require__.n(dash_1);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saasModern/dash-2.png
var dash_2 = __webpack_require__("EXmy");
var dash_2_default = /*#__PURE__*/__webpack_require__.n(dash_2);

// CONCATENATED MODULE: ./containers/SaasModern/Info/index.js
var Info_jsx = external_react_default.a.createElement;

function Info_extends() { Info_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Info_extends.apply(this, arguments); }















const InfoSection = ({
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
  imageAreaRow,
  imageWrapper,
  imageWrapperOne,
  imageWrapperTwo,
  textAreaRow
}) => {
  return Info_jsx(info_style, null, Info_jsx(Container["a" /* default */], {
    fullWidth: true,
    noGutter: true,
    className: "info-sec-container"
  }, Info_jsx(Box["a" /* default */], Info_extends({}, row, imageAreaRow), Info_jsx(Box["a" /* default */], Info_extends({}, col, imageArea, {
    className: "image_area"
  }), Info_jsx(Card["a" /* default */], Info_extends({}, imageWrapper, imageWrapperOne), Info_jsx(Fade_default.a, {
    left: true
  }, Info_jsx(Image["a" /* default */], {
    src: dash_1_default.a,
    alt: "Info Image One"
  }))), Info_jsx(Card["a" /* default */], Info_extends({}, imageWrapper, imageWrapperTwo), Info_jsx(Fade_default.a, {
    bottom: true
  }, Info_jsx(Image["a" /* default */], {
    src: dash_2_default.a,
    alt: "Info Image Two"
  })))))), Info_jsx(Container["a" /* default */], null, Info_jsx(Box["a" /* default */], Info_extends({}, row, textAreaRow), Info_jsx(Box["a" /* default */], Info_extends({}, col, textArea), Info_jsx(Heading["a" /* default */], Info_extends({}, title, {
    content: "Make your website growth with next level visitors"
  })), Info_jsx(Text["a" /* default */], Info_extends({}, description, {
    content: "For Enhanced performance we use LiteSpeed Web Server, HTTP/2, PHP7. We make your website faster, which will help you to increase search ranking!."
  })), Info_jsx(Box["a" /* default */], null, Info_jsx(link_default.a, {
    href: "#"
  }, Info_jsx("a", null, Info_jsx(Button["a" /* default */], Info_extends({}, button, {
    title: "HOW IT WORKS"
  })))))))));
};

InfoSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  textAreaRow: {
    flexDirection: 'row-reverse'
  },
  col: {
    pr: '15px',
    pl: '15px'
  },
  textArea: {
    width: ['100%', '100%', '50%', '50%', '42%']
  },
  imageArea: {
    width: ['100%', '100%', '50%', '50%', '55%'],
    flexBox: true
  },
  imageWrapper: {
    boxShadow: 'none'
  },
  imageWrapperOne: {
    mr: ['-250px', '-250px', '-200px', '-250px', '-400px']
  },
  imageWrapperTwo: {
    alignSelf: 'flex-end',
    mb: '-60px'
  },
  title: {
    fontSize: ['26px', '32px', '36px', '40px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px',
    lineHeight: '1.25'
  },
  description: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    color: '#343d48cc',
    lineHeight: '2',
    mb: '33px'
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'secondaryWithBg'
  }
};
/* harmony default export */ var Info = (InfoSection);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/FeatureBlock/index.js + 1 modules
var FeatureBlock = __webpack_require__("b4OD");

// CONCATENATED MODULE: ./containers/SaasModern/Feature/index.js
var Feature_jsx = external_react_default.a.createElement;

function Feature_extends() { Feature_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Feature_extends.apply(this, arguments); }










const FeatureSection = ({
  sectionWrapper,
  secTitleWrapper,
  secText,
  secHeading,
  row,
  col,
  FeatureItemStyle,
  iconStyle,
  contentStyle,
  featureTitle,
  featureDescription
}) => {
  return Feature_jsx(Box["a" /* default */], Feature_extends({}, sectionWrapper, {
    as: "section",
    id: "feature_section"
  }), Feature_jsx(Container["a" /* default */], null, Feature_jsx(Box["a" /* default */], secTitleWrapper, Feature_jsx(Text["a" /* default */], Feature_extends({}, secText, {
    content: "FEATURES"
  })), Feature_jsx(Heading["a" /* default */], Feature_extends({}, secHeading, {
    content: "Why you choose Our Plugin"
  }))), Feature_jsx(Box["a" /* default */], row, SaasModern["b" /* FEATURES */].map((item, index) => Feature_jsx(Box["a" /* default */], Feature_extends({}, col, {
    key: `feature-item-${index}`
  }), Feature_jsx(FeatureBlock["a" /* default */], {
    icon: Feature_jsx(Image["a" /* default */], {
      src: item.icon,
      alt: `feature-item-icon-${index + 1}`
    }),
    wrapperStyle: FeatureItemStyle,
    iconStyle: iconStyle,
    contentStyle: contentStyle,
    iconPosition: "left",
    title: Feature_jsx(Heading["a" /* default */], Feature_extends({
      content: item.title
    }, featureTitle)),
    description: Feature_jsx(Text["a" /* default */], Feature_extends({
      content: item.description
    }, featureDescription))
  }))))));
};

FeatureSection.defaultProps = {
  sectionWrapper: {
    pt: ['50px', '50px', '50px', '50px', '50px'],
    pb: ['20px', '50px', '60px', '70px', '100px']
  },
  secTitleWrapper: {
    mb: ['60px', '100px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#2aa275',
    mb: '5px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67'
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['-30px', '-30px', '-30px', '-30px', '-30px'],
    mr: ['-30px', '-30px', '-30px', '-30px', '-45px']
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    pl: ['30px', '30px', '30px', '30px', '45px'],
    pr: ['30px', '30px', '30px', '30px', '45px'],
    mb: ['50px', '70px']
  },
  FeatureItemStyle: {
    alignItems: 'center'
  },
  iconStyle: {
    width: ['90px', '90px', '90px', '75px', '90px'],
    pr: '20px'
  },
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    lineHeight: '1.5',
    mb: ['10px', '15px']
  },
  featureDescription: {
    fontSize: '15px',
    fontWeight: '400',
    color: '#5d646d',
    letterSpacing: '-0.025em',
    lineHeight: '1.88',
    mb: 0
  }
};
/* harmony default export */ var Feature = (FeatureSection);
// EXTERNAL MODULE: external "rc-tabs"
var external_rc_tabs_ = __webpack_require__("0YK7");
var external_rc_tabs_default = /*#__PURE__*/__webpack_require__.n(external_rc_tabs_);

// EXTERNAL MODULE: external "rc-tabs/lib/TabContent"
var TabContent_ = __webpack_require__("dmYZ");
var TabContent_default = /*#__PURE__*/__webpack_require__.n(TabContent_);

// EXTERNAL MODULE: external "rc-tabs/lib/ScrollableInkTabBar"
var ScrollableInkTabBar_ = __webpack_require__("f8os");
var ScrollableInkTabBar_default = /*#__PURE__*/__webpack_require__.n(ScrollableInkTabBar_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/rc-tabs/assets/index.css
var assets = __webpack_require__("Uag0");

// CONCATENATED MODULE: ./containers/SaasModern/UpdateScreen/updateScreen.style.js

const SectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "updateScreenstyle__SectionWrapper",
  componentId: "fdq2be-0"
})(["padding:100px 0 0 0;background:linear-gradient( 35deg,rgb(147,249,185) 0%,rgb(29,151,108) 100% );@media (max-width:990px){padding:80px 0 0 0;}@media (max-width:575px){padding:60px 0 0 0;}@keyframes ScaleInUp{from{opacity:0;transform:translateY(30px) scale(0.97);}to{opacity:1;transform:translateY(0) scale(1);}}.update-screen-tab{border:0;overflow:initial;.rc-tabs-ink-bar{display:none !important;}.rc-tabs-bar{border:0;}.rc-tabs-nav-container{margin-bottom:40px;&:not(.rc-tabs-nav-container-scrolling){.rc-tabs-nav-scroll{width:100%;text-align:center;.rc-tabs-nav{float:none;display:block;.rc-tabs-tab{display:inline-block;float:none;}}}}.rc-tabs-tab{font-size:18px;color:#dcf4e8;font-weight:400;min-width:230px;padding:0 0 27px 0;text-align:center;margin-right:20px;transition:0.25s ease-in-out;&:hover{color:#fff;}&:last-child{margin-right:0;}&:before,&:after{content:'';position:absolute;width:100%;height:2px;bottom:0;left:0;display:block;@media (max-width:767px){display:none;}}&:before{background:rgba(0,0,0,0.08);}&:after{background:#fff;transform:scaleX(0);transform-origin:right center 0;transition:transform 0.7s cubic-bezier(0.19,1,0.22,1) 0s;}&.rc-tabs-tab-active{color:#fff;&:after{transform:scaleX(1);transform-origin:left center 0;transition:transform 0.35s cubic-bezier(0.43,0.49,0.51,0.68);}}> div{margin-right:8px;}@media (max-width:1199px){font-size:16px;padding:0 0 20px 0;min-width:170px;}@media (max-width:990px){min-width:auto;padding:0 10px 15px 10px;}@media (max-width:767px){font-size:14px;padding:0;svg{width:20px;}}}}.rc-tabs-content{.rc-tabs-tabpane{border-radius:10px;overflow:hidden;box-shadow:0px 5px 60px 0px rgba(27,67,111,0.15);&.rc-tabs-tabpane-active{animation:0.7s ScaleInUp;}> img{max-width:100%;height:auto;display:block;}}}}.rc-tabs-tab-prev-icon,.rc-tabs-tab-next-icon{font-size:20px;color:#fff;line-height:1;display:block;}"]);
/* harmony default export */ var updateScreen_style = (SectionWrapper);
// CONCATENATED MODULE: ./containers/SaasModern/UpdateScreen/index.js
var UpdateScreen_jsx = external_react_default.a.createElement;

function UpdateScreen_extends() { UpdateScreen_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return UpdateScreen_extends.apply(this, arguments); }
















const UpdateScreen = ({
  secTitleWrapper,
  secText,
  secHeading
}) => {
  return UpdateScreen_jsx(updateScreen_style, null, UpdateScreen_jsx(SaasModern_TiltShape, null), UpdateScreen_jsx(Container["a" /* default */], null, UpdateScreen_jsx(Box["a" /* default */], secTitleWrapper, UpdateScreen_jsx(Text["a" /* default */], UpdateScreen_extends({}, secText, {
    content: "UPDATE"
  })), UpdateScreen_jsx(Heading["a" /* default */], UpdateScreen_extends({}, secHeading, {
    content: "Meet our new updated screen"
  }))), UpdateScreen_jsx(external_rc_tabs_default.a, {
    renderTabBar: () => UpdateScreen_jsx(ScrollableInkTabBar_default.a, null),
    renderTabContent: () => UpdateScreen_jsx(TabContent_default.a, {
      animated: false
    }),
    className: "update-screen-tab"
  }, SaasModern["g" /* SCREENSHOTS */].map((item, index) => UpdateScreen_jsx(external_rc_tabs_["TabPane"], {
    forceRender: true,
    tab: UpdateScreen_jsx(external_react_default.a.Fragment, null, UpdateScreen_jsx(external_react_icons_kit_default.a, {
      icon: item.icon,
      size: 24
    }), item.title),
    key: index + 1
  }, UpdateScreen_jsx(Image["a" /* default */], {
    src: item.image,
    alt: `screenshot-${index + 1}`
  }))))));
};

UpdateScreen.defaultProps = {
  secTitleWrapper: {
    mb: ['60px', '80px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#fff',
    mb: '5px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67'
  }
};
/* harmony default export */ var SaasModern_UpdateScreen = (UpdateScreen);
// CONCATENATED MODULE: ./containers/SaasModern/Testimonial/testimonial.style.js

const TestimonialSlideWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "testimonialstyle__TestimonialSlideWrapper",
  componentId: "sc-36b6lp-0"
})([".glide__bullets{margin-top:45px;text-align:center;@media (max-width:575px){margin-top:30px;}.glide__bullet{width:12px;height:12px;background:#e7f1ed;margin:5px;transition:0.15s ease-in-out;&:hover{background:#d8e2de;}&.glide__bullet--active{background:#c9cecc;}}}"]);
const TestimonialItem = external_styled_components_default.a.div.withConfig({
  displayName: "testimonialstyle__TestimonialItem",
  componentId: "sc-36b6lp-1"
})(["position:relative;display:block;background:#fff;border:1px solid #f2f4f7;border-radius:5px;padding:40px;@media (max-width:575px){padding:30px;}"]);
const TestimonialMeta = external_styled_components_default.a.div.withConfig({
  displayName: "testimonialstyle__TestimonialMeta",
  componentId: "sc-36b6lp-2"
})(["display:flex;align-items:center;margin-top:30px;"]);
const AuthorInfo = external_styled_components_default.a.div.withConfig({
  displayName: "testimonialstyle__AuthorInfo",
  componentId: "sc-36b6lp-3"
})(["display:flex;align-items:center;"]);
const AuthorImage = external_styled_components_default.a.div.withConfig({
  displayName: "testimonialstyle__AuthorImage",
  componentId: "sc-36b6lp-4"
})(["width:50px;height:50px;flex-basis:50px;display:block;border-radius:50%;overflow:hidden;box-shadow:0px 6px 30px 0px rgba(39,79,117,0.2);margin-right:15px;@media (max-width:575px){width:40px;height:40px;flex-basis:40px;}"]);
// CONCATENATED MODULE: ./containers/SaasModern/Testimonial/index.js
var Testimonial_jsx = external_react_default.a.createElement;

function Testimonial_extends() { Testimonial_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Testimonial_extends.apply(this, arguments); }












const TestimonialSection = ({
  sectionWrapper,
  secTitleWrapper,
  secText,
  secHeading,
  reviewTitle,
  review,
  name,
  designation
}) => {
  const carouselOptions = {
    type: 'carousel',
    autoplay: 6000,
    perView: 2,
    gap: 30,
    animationDuration: 800,
    breakpoints: {
      990: {
        perView: 1
      }
    }
  };
  return Testimonial_jsx(Box["a" /* default */], Testimonial_extends({}, sectionWrapper, {
    as: "section",
    id: "testimonial_section"
  }), Testimonial_jsx(Container["a" /* default */], null, Testimonial_jsx(Box["a" /* default */], secTitleWrapper, Testimonial_jsx(Text["a" /* default */], Testimonial_extends({}, secText, {
    content: "TESTIMONIAL"
  })), Testimonial_jsx(Heading["a" /* default */], Testimonial_extends({}, secHeading, {
    content: "What our client say about us"
  }))), Testimonial_jsx(TestimonialSlideWrapper, null, Testimonial_jsx(GlideCarousel["a" /* default */], {
    options: carouselOptions,
    carouselSelector: "testimonial__slider",
    controls: false,
    bullets: true,
    numberOfBullets: SaasModern["h" /* TESTIMONIALS */].length
  }, Testimonial_jsx(external_react_default.a.Fragment, null, SaasModern["h" /* TESTIMONIALS */].map((item, index) => Testimonial_jsx(glideSlide["a" /* default */], {
    key: `testimonial-slide-${index}`
  }, Testimonial_jsx(TestimonialItem, null, Testimonial_jsx(Heading["a" /* default */], Testimonial_extends({
    as: "h3",
    content: item.title
  }, reviewTitle)), Testimonial_jsx(Text["a" /* default */], Testimonial_extends({
    content: item.review
  }, review)), Testimonial_jsx(TestimonialMeta, null, Testimonial_jsx(AuthorInfo, null, Testimonial_jsx(AuthorImage, null, Testimonial_jsx(Image["a" /* default */], {
    src: item.avatar,
    alt: `reviewer-image-${index}`
  })), Testimonial_jsx(Box["a" /* default */], null, Testimonial_jsx(Heading["a" /* default */], Testimonial_extends({
    as: "h3",
    content: item.name
  }, name)), Testimonial_jsx(Text["a" /* default */], Testimonial_extends({
    content: item.designation
  }, designation)))))))))))));
};

TestimonialSection.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '80px', '90px', '100px', '100px'],
    pb: ['60px', '80px', '90px', '100px', '100px']
  },
  secTitleWrapper: {
    mb: ['40px', '60px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#2aa275',
    mb: '5px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67'
  },
  reviewTitle: {
    fontSize: ['15px', '16px'],
    fontWeight: '500',
    color: '#343d48',
    lineHeight: '1.5',
    mb: '13px'
  },
  review: {
    fontSize: ['16px', '19px'],
    fontWeight: '300',
    color: '#343d48',
    lineHeight: '1.7',
    mb: 0
  },
  name: {
    fontSize: ['14px', '16px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '8px'
  },
  designation: {
    fontSize: ['12px', '14px'],
    color: '#6f7a87',
    mb: 0
  }
};
/* harmony default export */ var Testimonial = (TestimonialSection);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/footer-bg.png
var footer_bg = __webpack_require__("i1V0");
var footer_bg_default = /*#__PURE__*/__webpack_require__.n(footer_bg);

// CONCATENATED MODULE: ./containers/SaasModern/Footer/footer.style.js


const FooterWrapper = external_styled_components_default.a.footer.withConfig({
  displayName: "footerstyle__FooterWrapper",
  componentId: "ls4s86-0"
})(["position:relative;background:linear-gradient(to bottom,#ffffff 0%,#fcfcfd 5%,#fcfcfd 100%);overflow:hidden;@media (min-width:576px){padding-top:150px;&:before{content:'';position:absolute;width:104%;padding-bottom:104%;border-top-right-radius:11%;top:18%;left:0;pointer-events:none;background-color:#fff;transform:rotate(-6deg);@media (max-width:767px){padding-bottom:150%;}}}.footer_container{background-repeat:no-repeat;background-position:center 50px;padding-top:80px;padding-bottom:80px;position:relative;@media (min-width:576px){background-image:url(", ");}@media (max-width:990px){padding-bottom:40px;}@media (max-width:767px){padding-bottom:0px;}}"], footer_bg_default.a);
const List = external_styled_components_default.a.ul.withConfig({
  displayName: "footerstyle__List",
  componentId: "ls4s86-1"
})([""]);
const footer_style_ListItem = external_styled_components_default.a.li.withConfig({
  displayName: "footerstyle__ListItem",
  componentId: "ls4s86-2"
})(["a{color:rgba(52,61,72,0.8);font-size:14px;line-height:36px;transition:all 0.2s ease;&:hover,&:focus{outline:0;text-decoration:none;color:#343d48;}}"]);

/* harmony default export */ var footer_style = (FooterWrapper);
// CONCATENATED MODULE: ./containers/SaasModern/Footer/index.js
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
    logoSrc: logo_default.a,
    title: "Hosting",
    logoStyle: logoStyle
  }), Footer_jsx(Text["a" /* default */], Footer_extends({
    content: "hello@redq.io"
  }, textStyle)), Footer_jsx(Text["a" /* default */], Footer_extends({
    content: "+479-443-9334"
  }, textStyle))), Footer_jsx(Box["a" /* default */], colTwo, SaasModern["c" /* FOOTER_WIDGET */].map((widget, index) => Footer_jsx(Box["a" /* default */], Footer_extends({
    className: "col"
  }, col, {
    key: `footer-widget-${index}`
  }), Footer_jsx(Heading["a" /* default */], Footer_extends({
    content: widget.title
  }, titleStyle)), Footer_jsx(List, null, widget.menuItems.map((item, index) => Footer_jsx(footer_style_ListItem, {
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
    color: '#343d48',
    fontSize: '16px',
    fontWeight: '700',
    mb: '30px'
  },
  // Default logo size
  logoStyle: {
    width: '130px',
    mb: '15px'
  },
  // widget text default style
  textStyle: {
    color: '#0f2137',
    fontSize: '16px',
    mb: '10px'
  }
};
/* harmony default export */ var SaasModern_Footer = (Footer);
// CONCATENATED MODULE: ./pages/saasmodern.js
var saasmodern_jsx = external_react_default.a.createElement;




















/* harmony default export */ var saasmodern = __webpack_exports__["default"] = (() => {
  return saasmodern_jsx(external_styled_components_["ThemeProvider"], {
    theme: saasModernTheme
  }, saasmodern_jsx(external_react_["Fragment"], null, saasmodern_jsx(head_default.a, null, saasmodern_jsx("title", null, "SaaS | A react next landing page"), saasmodern_jsx("meta", {
    name: "Description",
    content: "React next landing page"
  }), saasmodern_jsx("meta", {
    name: "theme-color",
    content: "#ec5555"
  }), saasmodern_jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,900|Open+Sans:400,400i,600,700",
    rel: "stylesheet"
  })), saasmodern_jsx(style["a" /* ResetCSS */], null), saasmodern_jsx(GlobalStyle, null), saasmodern_jsx(ContentWrapper, null, saasmodern_jsx(external_react_stickynode_default.a, {
    top: 0,
    innerZ: 9999,
    activeClass: "sticky-nav-active"
  }, saasmodern_jsx(DrawerContext["b" /* DrawerProvider */], null, saasmodern_jsx(SaasModern_Navbar, null))), saasmodern_jsx(Banner, null), saasmodern_jsx(WorkingProcess, null), saasmodern_jsx(Info, null), saasmodern_jsx(Feature, null), saasmodern_jsx(SaasModern_UpdateScreen, null), saasmodern_jsx(Pricing, null), saasmodern_jsx(Partner, null), saasmodern_jsx(Testimonial, null), saasmodern_jsx(Faq, null), saasmodern_jsx(Trial, null), saasmodern_jsx(SaasModern_Footer, null))));
});

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

/***/ "srWm":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "tJGH":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_settings");

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

/***/ "wNHZ":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODciIGhlaWdodD0iODciPjxnIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQwNCAtMTM3OSkiPjxpbWFnZSBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0O8KgK8KgJmx0O1BhdGgmZ3Q7IiB3aWR0aD0iODciIGhlaWdodD0iODciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwNCAxMzc5KSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGY0FBQUJYQ0FZQUFBQnh5TmxzQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQTJSSlJFRlVlSnp0M1U5SWsyRWN3UEh2ODh5eHZVNmJPbWVtVUoyNkZOMkNEcEZVRXBRV25qcEYwQ1VJdkJSRmh6cDFLWWlnb0tJL3R5QVVpZFFnT3RpcFM3Y3VVY2NJclZCTFZEQVZ3VDBkWHVlZk9lZXIrWFA1N3ZjQllXeDc1Y2VYbDJkNzNzTmVZOTdmWnhYMXdIR2dHZGdQMUFHeDFRN2FzbHdHOXV6OFNEUnlocW1aVWY1TWd3RWNFSTFBUE9vL0RxQ3N3R3Yxd0ZYZ0xIN1EwdUFNeEtMTlZDWjZtQjVwd2JrSmpGblh2N0lyUE44R2ZBQXVVMHBoc3h4UUZqMU1WV1VIMXBUakFwNnFPZkxGdlExMEE3di9ZYndRY0pEd1dtbE12OGFhcXZVRXpvMTdCN2kySWJOdFpmT3JnSU9FZDR5R2RNOTZBaStPZXc2NHNrSGpoWWlEaE5kRVkyMFAxbXdMK21FR0MzSFQrTXVCeXN0Qm9yeUo3VFV2Y0M0VzlBek94cjBCN0JDYkxSUWNsSHV0MUZhOXdwaGtrTUFXYUFET2k4OFdDZzdpc1pPa2t0MUJBbHZnRkZDNUtiT0Znb040N01oYzRJSnJzTVhmZmFrMW1RdGNrK3lFbGRkZ0MremIzTUhDd29FWE8wR3Fxc3MvZzVjSHRrRHQ1Zy8yUDNPUXlRUi9yeGM3VFNyWmsyOE5YbW43VzdveURpYW0xbkRBa2pVNHVYZ04xcmk1cklYaGNjak1ydUdnK2NBdmdYajJETmE0dWF5QmlVbjROb2lmSitnVk1RZnhXRE9wWkFmR1ZPQTBibjVsRWVnZmdxL2ZZWFlXUDFPUVB3T2UxMFpkZFM5bGtXU2g2N21sTFdLaGZ4aEd4aUZkRFJXZS8xd1F4aHdGdWpSdUlSRUxrek56U3dTczZhSzVjWWMwN21xc0lmaTZ1NWlaMWpWWGtNWVZwSEVGYVZ4QkdsZVF4aFdrY1FWcFhFRWFWNURHRmFSeEJXbGNRUnBYa01ZVnBIRUZhVnhCR2xlUXhoV2tjUVZwWEVFYVY1REdGYVJ4QldsY1FScFhrTVlWcEhFRmFWeEJHbGVReGhXa2NRVnBYRUVhVjVER0ZhUnhCV2xjUVJwWGtNWVZwSEVGYVZ4QkdsZVF4aFdrY1FWcFhFRWFWNURHRmFSeEJXbGNRUnBYa01ZVnBIRUZhVnhCR2xlUXhwVmpOSzZjR1F1TUZudUtrQnEyd09kaVR4RlNueXpRVit3cFFxclBBcjNBUkxFbkNaa3g0SzBGQm9ET0lnOFROcytCb2V5M2hadkE3eUlPRXlZL2dWdXc4RDEzQUxoZXRISENwUjBZaEtXYmlLZkFvNktNRXg1MzhXOTNCaXpmb2JVRER6ZDFuUEM0Ujg1ZHVYTGpPdnpBRjVrN3RkV3FmZ0FYZ0V1NUw2eTAvWDBNSEFTZUFPTnljMjFwWThBRDRBRHdMTjhiVElDN3ArNENXdkR2bnJvWFNMRyszNW5lNmh6d0MvZ0N2QVBlQVAyRkR2Z0xUSTZkb09VazlZVUFBQUFBU1VWT1JLNUNZSUk9Ii8+PGltYWdlIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiB3aWR0aD0iMTAiIGhlaWdodD0iOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDgxIDEzOTcpIiBvcGFjaXR5PSIuMiIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBb0FBQUFKQ0FZQUFBQUxwcjBUQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUhWSlJFRlVHSldGektFS0FrRVVodEhqSUJhalBvYVBZVEFKaW5XNnJ5ZVlkc0dnUmJ2UlpyU3NpN1lGTFJORWRuWnYrajg0M0VHTWNZWWRwbWkwMzIySUs3YllZNVNCazVCR2lUa2VHZGlFbnpoaGlicE5ocjgrWTRWbkg0UkQrdnp1ZzNERUdsWHFUdzVDZ1FWZUdIZEJ1R0NEK3hmU2ZSWDFjVVRGM1FBQUFBQkpSVTVFcmtKZ2dnPT0iLz48aW1hZ2UgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDvCoCvCoCZsdDtQYXRoJmd0O8KgK8KgJmx0O1BhdGgmZ3Q7wqArwqAmbHQ7UGF0aCZndDvCoCvCoCZsdDtQYXRoJmd0O8KgK8KgJmx0O1BhdGgmZ3Q7wqArwqAmbHQ7UGF0aCZndDvCoCvCoCZsdDtQYXRoJmd0O8KgK8KgJmx0O1BhdGgmZ3Q7wqArwqAmbHQ7UGF0aCZndDvCoCvCoCZsdDtQYXRoJmd0O8KgK8KgJmx0O1BhdGgmZ3Q7wqArwqAmbHQ7UGF0aCZndDvCoCvCoCZsdDtQYXRoJmd0O8KgK8KgJmx0O1BhdGgmZ3Q7wqArwqAmbHQ7UGF0aCZndDvCoCvCoCZsdDtQYXRoJmd0OyIgd2lkdGg9IjU1IiBoZWlnaHQ9IjM5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MjEgMTQwNykiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRGNBQUFBbkNBWUFBQUNyRGREZEFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUJ5aEpSRUZVYUlITm1XdU1KRlVWeDMvblZsVjNkVmUvcHJ0WFlHQUR1RzlaOW9PdVJoSFUrUHFDbTVoTmZJUWxDK3dtS0loS1NJd2tHeFA5SXNwSGlmckYrTWdxK1BxQVJDUkUxMmpVUkpTRW9QZ0lxTVFsZ1Izc2NmbzVYZS9qaCs0ZTV6MDkwNzJyLzZUU1hWWDNubnYrZGM0OTU5eDdwZGxzTWtJY3h3RFl0czI0aUtJSVZVVkVFQkdxMVNvaVVnZHVBTjROdkI3WURSU0dYUktnQWZ3ZCtBM3dNK0Rwc1FmY0JtUmE1QUNNTWRWcXRYcWZpSndDcnRpR0hyOEN2Z2c4dm8wK1c4Sk1ROGpRY3U4ckZvdFBpY2dadGtjTTRDYmd4OEMzZ05vMGRJSUp5WW5JeUdxZktwZkxqMlV5bWIwVDZuTVMrRGt3cVJ4Z0UzSnBtbTU1SlVsQ21xWm55dVh5ZzQ3anlEUVVBbzRBUHdJdW0xVFFtam1ucXVUemVYcTlIbW1hYnR4UmhEaU9QMUF1bDcvdmVkNmtlcXlIWHdQdkJmbzdGYkN1NVd6YnBsUXFrU1RKeURwcnJpaUtyckp0K3l2NWZINm5ZMitGRzRFemt3aFlsNXlxa3MxbUtaZkxpQWpHbURXWHFuNjJXQ3pXUmFibGpldmlQbURmVm8xRzBYbzFOZzBvbnVlUnkrVUlnb0FvaXBhdU1BejNXWloxd25YZG5hazhQbkxBSnpkNnFhb2JFb014b21XbFVxRlVLZzBhRDYwRzNPRzZybnVSclRiQ2gxZ25QWXlteTJZWUt4VlVLaFh5K1R4UkZKRWtpYVdxTjJlejJaMnB1bjNVR2VUQkpTUkpRaHpIYlBWeHg4NXpNek16ZUo1SG1xWlhBdnVHZ1dWam41Z3Uzakw2TTVvYTQzak4ySFdXaUZDcjFVaVNaSS92KzduNStYbHROcHRrczFrdEZBcmtjcmtOUjF0TUl4cFJCeGcyVWVVMW1SS3VHWHY0L1FCaEdOTHY5eG5YYThhUnZwZUJXeHdWa1lQMWVuMVBITWVxcWtSUlJCQUVMQ3dzMEdxMXRGZ3M0bm5lQ3BMbm1zOXoxL01QODByVUFSazZTcHB5alZ2bGtVT25PT3lOVmFtVmZkK24yV3lTeitmSHN0cFc1UFlEOXdNZkJKYXl0R1ZaV0pZRmdPdTZGSXRGVkpYRnhVWHRkRHJxKzc1V3ExVXpVdUFMTC8yVUY3b3ZnYjB5SHo3WCtodmYrZGZUUE9BZDIxQUJWZFdoRys1dU5wdDNEKzhYakRFdk9vN3pKeEhwTGlzQnh5YjNDZUJ6UUdVVDhrc1FFVHpQRTgvenBObHM2dno4dk5hcU5SRWpCQnFEeVNDeWNucXJjVWgwL1dnWFJaRjJ1MTM2L2Y1bzFiRlhSTDRNME8xMjZmVjZXSmIxejF3dTkyU2hVUGg2SnBONWFrdHlxdW9BWDNVYzUvUTRwTlpEcFZLUlhxK243WFk3TFZmS3hyQ3hDOG1xZDJtYWFydmRwdFZxb2FyaU9JN21jamxzMjFiTHNnVFFORTJKNDFqQ01MeTYzVzdmMmVsMFRwZEtwYlBsY3ZuVHhwaFhOeVFYUmRGRGxVcmw5RENYN1JpZTUwbmcrMmlVcFArZGFKc2ppaUp0TkJxRVlVaWhVTUR6UE0xa01oaGpsbitCcGY5cG1tb1lodlI2UGF2VDZkenUrLzZiZHUzYWRZdHQyOCtPMnBpUnYvcStmNjlsV1IvSjVYSVRFUnNoNjdvaWxoSFlPbHNFUWFCemMzTmtNaGxtWjJlcDFXcml1cTZzSXJZQ3hoaHhYVmRxdFJxenM3UHFPTTdyNXVibXpvVmhlT05TbXlBSThIMy9vTy83bjU5NkVXeTJDR3NDS0xxd3NFQ2xVcUZXcThsT2xrNjJiVXU5WHFkVUt0WG01K2UvbHlUSmJnQVR4ekZoR0g1R1JIS1pUT1pTSldWZ01PZVNqcS9GWXBGQ29UQnhMVmNzRmltVlNyT3RWdXRMQUxhSXZGWlZqMXVXdGEyOWs0a2hRdC92cTdFTlh0NmRXcEU2cktMZTcvditlNHlxSGxkVjE3WnRuVFNRYkJjaWd1UXpVeCswVUNpUUpNbTlSbFhmT1h4MlNWMFNWZHpzOUN5MkhDS0M0emhIelRCQkFwc2twRWtHMnV6bFJmeWNtVXpHc1lFWkdDd2pScHVyazhCUEkyNzk2MW5PK3cyTXNmbkw0Z1hFT0d2YWlaWGw3S3UvNHhldEYwalRtTXV5RlI0NWVCc0ZhMnBMS2JVQlMwU1cxa2lPczFhUjdjQVNnMjBNdi8vM244SEpnVGpyZnpBeHZCd3M4TExmZ0tqUHNTdHV3QkZyb3JGWHd6RGNYVXJUVk1Jd25GaWdJeGJmUG5DU0QxLzVEa2czWDFDS1dKREUzSHo1bS9uQm9WTmt4MThDalFVRHZESzY2ZmQzdkl1MkFyWVl2bm5nVm83dE9vckdHOHZVdU04YlovWno5dURKcVJPREFibG5ZYkEvTXF6Q3B6TE5zOGJtNFVPMzgvYnFkV2k4dU9hOXhqNkhpMWZ6NkhWM01tTmZsTzFCTWNCUFJuZHBta3FyMVpxYTlJS1Y1YnVIN3VCSTZWbzA5cGVlYXhKd29IQVZqeDMrS0xPWjh0VEdXd1Uxd0JQQWl6Q3dYcS9YazA2bk03VWdmWG1teEJQWDM4UDFwV3ZRcUl0R1hmWjdzeng1NUdOYzYwN3R6R005UENmbno1OEh1QWQ0YVBSVVZiVmVyNVBQNTZlVys4NEhDOXovajBmcEp5RVA3am5PdnR5dWFZbmVDQ2RHNUxJTURnTGZBRXRIVWxxcjFhWks4QkxpdDhCTm83b3VBRTRCYlZnNm1wSkdvMEdyMWRKTHVJVTNNYUlvNnNWeGZIY2N4L0h5b3ZVUHdBbUdlVzk0REN6TlpsTXVYTGhBdTkzV09JNy9YMGxxRUFRMEdvMmcyKzNlWWxuV003WnRNM0xMNVhnWDhBMEc1OWlEbnNNOWVjdXlOSnZOa3MxbUdhNGlSQzdSbnZwcXFLb21TVUlVUlJJRUFXRVl6b3ZJYmNWaThmRnllUkNCMTh1YzU0QzNBZzh3c09UU1liNnFTci9mWjNGeGtmOFZxV1dRWldmeHY3UXM2K01pOHNjVkRkYXgzSEs4RGJocitIdlJqM1MyaVJSNHhoanpOV1BNRDRmMzVQTjVScGI3RHlpRklkNGRtSm1HQUFBQUFFbEZUa1N1UW1DQyIvPjxpbWFnZSBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgd2lkdGg9IjEyIiBoZWlnaHQ9IjE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NDQgMTQyNikiIG9wYWNpdHk9Ii4xMDIiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQXdBQUFBT0NBWUFBQUFidmYzc0FBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFNbEpSRUZVS0pHTjBLRk9BMEVRZ09IdkxwaUtha3lENFIycUVRaXdUY0dkcWtPY294WkRVa05DRUZVVmJjSTVFZ3poTFJCVklERFlpaXBVZ3poRTc1TE41ckl3eVNZN3MvOC9PNW1zS0FxSjZHR0F6N2FRcDJoVU9BOExLV0dPRWI3L0k1UzQ2bnJvRWlaNENQSTZKVnhpRWRXeU1Ea0k3cWRZeFFCbXVHNmF2N1hDRU0vMmE0empzRGxRNVRqR0Uvb2RjQmgzdU0xeGo2TS80Q1dtbXJsS2ZDVGdSL3ZOMWEzd2hURTJIZkJMQ0xjQ3ZPTXNrbDV4Z1ord1E3aldOVTZhV2JlNHdTNys4aGZIdENCTFZtOWZTUUFBQUFCSlJVNUVya0pnZ2c9PSIvPjwvZz48L3N2Zz4="

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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yKbb":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "yxYw":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAA3CAYAAAClxaIBAAAFKUlEQVRo3u2Ya2wUVRTHq1Z8xUQSjY/4gBi/aND4iCHKB2qMJhpjtLTaBSGKrsaKxPgIBaPEhioUE6haCCBRmpaURAGjCWrVxvioCNvSlr7SlnahLX1MZaVQupUc/4d7J737mBc7szskfPhld2fvzNzf3HPOvXOz6MCCLA9ZAA6DoJf3yfJYogoQ2HUuS3whJarPS2RYolJKfH0uS7wrJUozKXEDeDiFG0wDD4ArUrjGQ+DmVCRq5ZP8xOMRM2K1vP/eVCTK5EXsilwK5oJloAL8ATRwBOwB5eBlMMvGtT5S7r0lFYmLlArDrAMXJ2l3PSgCLUpbMybBz3IyvCTuWtlgldJ2hwzLlBL7ArBVuei9cf8vAQM2O5+MEHhUud4dyn/VUsqV6nQhWCuH9Up57FqwO4XOq5yW8Z8li0C5DOVpXpbYmaDRJQGVKplXns8T14FWDwR0KmUIeybB8fmDhwI6xV5KFKVBQK9es72Q4FnzeJokmDo7lcmpRFkaBXSecFPiGjCaAYlv3JQoyIAAM+ymxKYMSYy6KVGXIQnNicRN4DaFmXENey1v2BAAz4rv9XkgH8yTxwPi+5njebI9t53vVGJGXD9v0SWWgjEwAaLycxy8p5ysmd8MnWkOErW8ThTKJTq8meh4M9HwHvy3kKjxBaKRGqJ/m4h61os2LUuJmhZbiWhxc9TJuH6eAG+qr5DxrLctwU+3axXRZAQdPUAUqSfqXoPvDUQnuonGOoiO7iQKbyQ6NYDjjUTRY0TtRTj3GbsSJQZtVuor1DvB/Qr3xL03hM1DqQBP9jV0sA+dXy2ebugpEUadxejschFOoafx9DEq/VVEE8MYoefRNmBXIlv2S+3nXXzcbmLvswwnjnEegfZlU3HPxzk3GpSnvf9JIXHsbxFWLia2FRWWic1PmUOGO8jfzUJvrJWob5t5Ow9KbNBSgjvHofRPnQgdo7DjAhAdESHWkJ/WkZghK5Z5XjS/gkTuFJ/8O2kBKEHuHMXvRVb5wPzi9gKw2no08kXl6S5NPhocPoO7MFq/28kH5jm3Je6W63zzvBjcTTT0bfJ4Z0nOh94NdiTawOVevBRttJ4vPsREdzCx/utlOKoRtb4xNbsb87hXb3bTQZPp0qPpReRFF9HBJbF5weHVs45oPCzamc/Um7zeKOAJZsR0NCL70eGy2Lzg8Br5kUirtSqtP4HL0rErzu+/g4Z5MbADnf1V6aycDE8egtynxiVYVKPpXm7ZvC23F/WnNCvptiUnb+cH6HBPrAAvDicGEWaFRvnwldw4423N98EKtyVKDLYxb01Yput5caqfqO0dseSoRyXq/QyVqV1IJgp8r+z23W6wCE1JQt2d3p4kXmfLZXFsEkdCWJJvFaWUw2oUc8PQd8ny4YjckNOvxyPxuZPdeCuB4jgBo73R0oS86KvApPbnVKfH+8TyPDEf8gx241WRj1ORqJGLsO0GW/o6V4OhmLzoWCE6zr/b3hLrpcTlyD6TLUt9N57v/5u5BJE19vJmjVywgYBGjYs05IVGHcs1zNAaJkAN5VebanOGxZbXtdE/exI2uO+xhTuB5oAat+7tpkQtIAeEfCWREyjcMrfg1SggB0zivAo/SYwCOgsifpLImTMveOjB3JfILnNyg/047xE/SXBO1DjMib18np8kNiPGJ84iJ770k0RnTkHhfw4lTuO8rvMl1gOJtQ4lKv0ocRXYAOosOv8X2AZu9KOESrmBQLnazu8S2WAlCMt1Ulj+zvZC4n8OY81Soi10vQAAAABJRU5ErkJggg=="

/***/ })

/******/ });