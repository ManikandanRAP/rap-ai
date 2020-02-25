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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Q8Q":
/***/ (function(module, exports) {

module.exports = require("react-scrollspy");

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

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vMZa");


/***/ }),

/***/ "1cWV":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/feather/search");

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

/***/ "5RMd":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlT/wgALCAA6ADoBAREA/8QAGAABAAMBAAAAAAAAAAAAAAAAAAYHCAT/2gAIAQEAAAAA1AAAABz5NsiHXZNwAAAAB//EACQQAAICAQMEAgMAAAAAAAAAAAEDAgQFAAYhBxESIhMyMUBQ/9oACAEBAAE/AP2bbZJqPbD7QVOQ9TPkAkcRBJ0vNX6lenjE7jhkUfFWa/LzzN6lWc2VZwKG2GMdJLoSjFhhDsJg8xGqHUHOLtbfoTmmabeHous3LFVocmw2vJgruWokB7jHygB+OR2JI1RzN2jtyzTRnjlIxlgS3MxyVxaJFzJfOh7mtcax8V+8l9vuPXXTm7av7Pousvm9gbagWyYWiUVvnCJg2XLV+IHgw8zj7fw//9k="

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

/***/ "7dh8":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAMAAACfvvDEAAABlVBMVEUAAAD///+A//+q/6qA/7+A1dWS27aA37+O48aAzMyA1b+J2MSI3buH0sOA1caA2b+F07yA1b+F1sJ/zsSE0L2E08GE1r2Az7+A0ryD071/1L9/0LyD08GAzryC0L6C0sGC0MGC0r5/07+Cz8B/0L2Az72Cz76C0cCC0r6A0b2B0b6A0r+B0L6A0b+B0r2Bz76B0b2A0b6Az7+B0L1/0b+B0b1/z76Bz79/0b6B0b+B0L2Bz72A0L6B0L+B0b1/0L2Az72A0b2Bz75/z76Az76B0L6A0L6B0b+A0L2Az76A0L2A0L6A0L6A0L5/0L6A0L5/0L5/0L6A0L2A0L6Az76A0L2A0L6Az72A0L6A0L2Az76A0L6A0L5/0L6Az75/0L6A0L2A0L6Az75/0L2A0L2Az76A0L1/0L2Az76Az72A0L2Az72A0L6A0L6A0L1/z72Az76A0L2Az72Az72A0L5/z76A0L1/z72A0L2A0L6A0L5/0L6A0L6Az72Az76A0L5/0L2A0L1/z76Az76A0L1/0L6A0L5AFCOEAAAAhnRSTlMAAQIDBAYHCAkKDA0PERIUFxgZGhsdHyAiIyQmKSorLTEzNDU2Ojs9P0JDREdISUtNTlBRWFlaW15fYWVmZ2lscHR1dnp9fn+DhYiNkpSYmZyen6Slp6mrra+xtLe4u7y+v8DCycvNztDR0tXX2Nna293g4ePm6ezt7u/y8/X29/j5+vv9/jqZBNYAAAF2SURBVBgZjcGLW4txHMbh550sbSKSQ0NRQiinUkRK1KTkPOSwHENOyxYp7PD5u12/1dXV3vVu3/tWsAOp9B6ZfIB+WRwGWmTxAGZk0ZiHHlmMwUJYBjVpiMuiF/INsngFj2URA46pVKgtpnKT8E4+jyjc3Suf6F+4JJ8MUHjeF9F612ApKp+BHzi/b+7WGi8FEyoTHslQ9KZvk1acBvZpA5svPM3izA9E5ExDUgF23lrG+fPwhLQrD+cUqP7Ge4pmO8fhq6dKWp9kWXVFVdRfnqUo0aSquj7iZKfaVc1xVn0e2aqK7kHiUBJnceqUp0CNOTgitd9ZxJm7GFKAOHySEz4/h/NttFkbqcnAoFZ4Z5IFnJddKtcLS3Vas31oAedFp/xew22tFz6byAG5WpVqAfbLZ8d4jnSdSk3AtMo1XY2pVHQZTspiGFKeDELf4bosuuHfNlk8g/uyaC5Ahyzi8FYWW35CjyyOwq9aWUS+MCyb6EFV8B/fwIdoOyqDOgAAAABJRU5ErkJggg=="

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

/***/ "9e9t":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iw5HDq8Ouw6lfMSIgZGF0YS1uYW1lPSLDkcOrw67DqSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5My43IDk3Ljg5Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzBmMjEzN30uY2xzLTJ7ZmlsbDojZWI0ZDRifTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTg1LjA5IDM2My43NUg3NmEzLjcgMy43IDAgMDEtMy43LTMuN1YzMzJhMy43IDMuNyAwIDAxMy43LTMuN2g5LjFhMy43IDMuNyAwIDAxMy43IDMuN3YyOC4xYTMuNyAzLjcgMCAwMS0zLjcxIDMuNjV6bS05LjEtMzNhMS4yIDEuMiAwIDAwLTEuMiAxLjJ2MjguMWExLjIgMS4yIDAgMDAxLjIgMS4yaDkuMWExLjIgMS4yIDAgMDAxLjItMS4yVjMzMmExLjIgMS4yIDAgMDAtMS4yLTEuMnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Mi45OSAtMjkzLjExKSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTk0LjQzIDMzMy44NmExLjI1IDEuMjUgMCAwMS0uNTUtMi4zN2MuMDUgMCA0LjMtMi4xMyA1Ljc4LTUuMWwuNDEtLjgxYTE5LjY0IDE5LjY0IDAgMDAyLjY2LTguMTdjLjA5LTIgMi0zLjYzIDQuMzUtMy43MnM1LjI3IDEuNDMgNS44MSA2Yy40IDMuNDMtLjUxIDcuOTUtMS41MSAxMS41OUgxMjJhMS4yNSAxLjI1IDAgMTEwIDIuNWgtMTRsLjQ5LTEuNjFjMS41NC01LjEgMi4yMS05LjQzIDEuODktMTIuMTktLjI5LTIuNDItMS41LTMuODYtMy4yNC0zLjc2LTEgMC0xLjkxLjYzLTIgMS4zM2EyMiAyMiAwIDAxLTIuOTIgOS4ybC0uNC43OWMtMS44NyAzLjczLTYuNzIgNi4xMi02LjkyIDYuMjJhMS4yMyAxLjIzIDAgMDEtLjQ3LjF6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTIuOTkgLTI5My4xMSkiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xMjIuMTEgMzQxLjloLTEuMjlhMS4yNSAxLjI1IDAgMDEwLTIuNWguNzNjMS4yNiAwIDEuNzggMCAyLjU5LS43NGEzLjQxIDMuNDEgMCAwMC4zNS0zLjI4Yy0uNDgtMS4xNS0xLjYxLTEuNy0zLjM3LTEuNjRhMS4yMSAxLjIxIDAgMDEtMS4yOS0xLjIgMS4yNCAxLjI0IDAgMDExLjItMS4yOWMzLjc5LS4xNSA1LjI0IDEuOTEgNS43NiAzLjE1YTUuODMgNS44MyAwIDAxLS45MiA2LjA3IDQuODYgNC44NiAwIDAxLTMuNzYgMS40M3ptLTEuMTEgNy4yMmgtMS43NmExLjI1IDEuMjUgMCAxMS0uMTItMi41aDEuMTljMS4xNCAwIDEuNzEgMCAyLjMxLS41NWEyLjM1IDIuMzUgMCAwMC40OS0xLjg5IDEuMjUgMS4yNSAwIDAxMi40OC0uMzMgNC43MiA0LjcyIDAgMDEtMS4yMSA0IDQuNDggNC40OCAwIDAxLTMuMzggMS4yN3ptLTEuNjggNi44OGgtMS43NmExLjI1IDEuMjUgMCAwMS0uMTEtMi41aDEuMThjMS4xNC4wNSAxLjcyLjA1IDIuMzEtLjU1YTIuMzEgMi4zMSAwIDAwLjUxLTEuNzcgMS4yNSAxLjI1IDAgMTEyLjQ5LS4yMiA0LjY0IDQuNjQgMCAwMS0xLjIzIDMuNzYgNC40OCA0LjQ4IDAgMDEtMy4zOSAxLjI4em0tMS42MyA2LjA5SDkyLjEzYTEuMjMgMS4yMyAwIDAxLS4wNi0yLjQ2aDI0Ljk4YzEuMTQuMDUgMS43Mi4wNSAyLjMxLS41NWExLjg5IDEuODkgMCAwMC41MS0xLjE5IDEuMjUgMS4yNSAwIDAxMi40OS4yNiA0LjM4IDQuMzggMCAwMS0xLjIzIDIuNyA0LjQ1IDQuNDUgMCAwMS0zLjQ0IDEuMjR6TTExNCAzMzMuNzVoLTdhMS4yNSAxLjI1IDAgMDEwLTIuNWg3YTEuMjUgMS4yNSAwIDExMCAyLjV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTIuOTkgLTI5My4xMSkiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik04Mi4xIDM1Ni42MmExLjM0IDEuMzQgMCAxMS0xLjM0LTEuMzMgMS4zNCAxLjM0IDAgMDExLjM0IDEuMzN6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTIuOTkgLTI5My4xMSkiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik05OS4xMSAzOTFIOTljLTMuMTIgMC01LjQyLTMuMTEtNy42NS01Ljg4LTEuNTctMS45NS0zLjE5LTQuMDYtNC43OC00LjYxcy00LjEyIDAtNi42Mi41N2EyNS41OSAyNS41OSAwIDAxLTUuNjMuODkgNi4xNyA2LjE3IDAgMDEtMy44Mi0xLjEyYy0yLjQzLTEuODMtMi42Mi01LjQ2LTIuOC05LS4xMy0yLjU0LS4yNi01LjE4LTEuMjctNi42MVM2My4xNyAzNjMgNjAuOSAzNjJjLTMuMzItMS4zOC02Ljc0LTIuODEtNy42Ny01Ljg1czEuMS02LjE1IDMuMDctOS4xNWMxLjM1LTIuMDcgMi43NS00LjIgMi43OC01Ljgzcy0xLjMzLTQtMi42NS02LjE4Yy0xLjgyLTMtMy42OS02LjExLTIuNy05czQuNDEtNC4yMSA3LjcxLTUuNDdjMi4zNi0uOSA0LjgtMS44MyA1LjgzLTMuMnMxLjIyLTMuOTIgMS40My02LjQxYy4yOS0zLjU1LjU5LTcuMjIgMy4xNC05YTUuODEgNS44MSAwIDAxMy40My0xQTIzLjQ2IDIzLjQ2IDAgMDE4MS4xIDMwMmMyLjUyLjY4IDUuMjEgMS4zMiA2LjguODNzMy40Ni0yLjU0IDUuMTUtNC41YzIuMjUtMi42IDQuNTgtNS4yOSA3LjUzLTUuMjkgMy4xOS4wNSA1LjUgMi45MiA3LjczIDUuNjkgMS41NiAyIDMuMTggNCA0Ljc3IDQuNTJzNC4xMiAwIDYuNjItLjYyYTI2LjI3IDI2LjI3IDAgMDE1LjYzLS45MSA2LjE2IDYuMTYgMCAwMTMuODIgMS4xMWMyLjQzIDEuODMgMi42MiA1LjQ1IDIuOCA5IC4xMyAyLjU0LjI2IDUuMTcgMS4yNyA2LjZzMy4yOSAyLjMyIDUuNTcgMy4yN2MzLjMxIDEuMzggNi43NCAyLjgxIDcuNjcgNS44NXMtMS4xMSA2LjE0LTMuMDggOS4xNGMtMS4zNSAyLjA3LTIuNzUgNC4yLTIuNzggNS44M3MxLjM0IDQgMi42NSA2LjE4YzEuODIgMyAzLjcgNi4xMSAyLjcxIDlzLTQuNDIgNC4yMS03LjcyIDUuNDdjLTIuMzYuOS00LjggMS44My01LjgzIDMuMnMtMS4yMiAzLjkyLTEuNDIgNi40MWMtLjI5IDMuNTUtLjU5IDcuMjItMy4xNSA5YTUuODEgNS44MSAwIDAxLTMuNDMgMSAyMy40NiAyMy40NiAwIDAxLTUuODMtMS4wOWMtMi41Mi0uNjctNS4yMS0xLjMyLTYuNzktLjgzLTEuNzMuNTMtMy40NyAyLjczLTUuMTYgNC42OC0yLjI1IDIuNTgtNC41OCA1LjQ2LTcuNTIgNS40NnpNODUgMzc3LjdhNy4zNiA3LjM2IDAgMDEyLjM5LjM2YzIuMjcuNzggNC4xMiAzLjA4IDUuOTEgNS4zMXMzLjc2IDQuNzMgNS43IDQuNzZjMiAwIDMuNzgtMi4yNSA1LjY3LTQuNDNzMy45Mi00LjUxIDYuMzMtNS4yNWE3LjI4IDcuMjggMCAwMTIuMTYtLjMgMjQuMTQgMjQuMTQgMCAwMTYgMS4xMSAyMi4xNiAyMi4xNiAwIDAwNS4xOSAxIDMuNDIgMy40MiAwIDAwMi0uNTFjMS41OS0xLjExIDEuODQtNC4xOSAyLjA4LTcuMTZzLjQ4LTUuNzkgMS45Mi03LjcxIDQuMjUtMyA2Ljk0LTQgNS42Mi0yLjE0IDYuMjQtMy45NC0xLTQuMzctMi40OC02Ljg4LTMuMDUtNS0zLTcuNTEgMS42NC00LjggMy4xOS03LjE2YzEuNjUtMi41MiAzLjM2LTUuMTIgMi43OC03cy0zLjQ3LTMuMTEtNi4yNS00LjI3Yy0yLjYtMS4wOS01LjMtMi4yMi02LjY1LTQuMTVzLTEuNTctNS0xLjcyLTcuOS0uMy02LTEuOC03LjA5YTMuNzUgMy43NSAwIDAwLTIuMzItLjYxIDIzLjg3IDIzLjg3IDAgMDAtNS4wNi44NSAyNi4xNSAyNi4xNSAwIDAxLTUuNjIuOSA3LjI2IDcuMjYgMCAwMS0yLjM4LS4zNmMtMi4yOC0uNzgtNC4xMy0zLjA4LTUuOTEtNS4zMXMtMy44LTQuNzMtNS43NS00Ljc2Yy0xLjg0IDAtMy43OSAyLjI1LTUuNjcgNC40M3MtMy45IDQuNTEtNi4zMSA1LjI1YTcuMjggNy4yOCAwIDAxLTIuMTYuMyAyNC4yMiAyNC4yMiAwIDAxLTYtMS4xMSAyMiAyMiAwIDAwLTUuMTgtMSAzLjQyIDMuNDIgMCAwMC0yIC41MWMtMS41OSAxLjExLTEuODQgNC4xOS0yLjA4IDcuMTZzLS40OCA1Ljc5LTEuOTIgNy43MS00LjI1IDMtNi45NCA0LTUuNjIgMi4xNC02LjI0IDMuOTQgMSA0LjM3IDIuNDggNi44OCAzIDUgMyA3LjUxLTEuNjQgNC44LTMuMTkgNy4xNmMtMS42NSAyLjUyLTMuMzYgNS4xMi0yLjc3IDdzMy40NiAzLjExIDYuMjQgNC4yN2MyLjYgMS4wOSA1LjMgMi4yMiA2LjY1IDQuMTVzMS41NyA1IDEuNzIgNy45LjMxIDYgMS44IDcuMDlhMy43NyAzLjc3IDAgMDAyLjMyLjYxIDIzLjg3IDIzLjg3IDAgMDA1LjA2LS44NSAyNi4yNSAyNi4yNSAwIDAxNS42My0uOXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Mi45OSAtMjkzLjExKSIvPjwvc3ZnPg=="

/***/ }),

/***/ "9ihO":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYUAAAGVCAAAAAA0nrIPAAAL6ElEQVR42u3b6XcUVR6H8aeykBAMwSCbAQyCbJFtRBlRRFmEwWVU3HEZFDioCIpREAR3ZSaKBnEBcRCBicQFRRIS+v5x86K7tu4ocM4c59g+31eput1V3f2punXvryoE8/8P/gQqGBVUMCqoYFRQwaigglFBBaOCCkYFFYwKKhgVVDAqqGBUUMGooIJRQQWjggpGBRWMCioYFVQwKqhgVFDBqKCCUUEFfwIVjAoqGBVUMCqoYFRQwaigglFBBaOCCkYFFYwKKhgVVDAqqGBUUMGooIJRQQWjggpGBRWMCioYFVQwKqhgVFDBqKCCP4EKRgUVjAoqGBVUMCqoYFRQwaigglFBBaOCCkYFFYwKKhgVVDAqqGBUUMGooIJRQQWjggpGBRWMCioYFVQwKqhgVFDBn0AFo4IKRgUVjAoqGBVUMCqoYFRQwaigglFBBaOCCkYFFYwKKhgVVDAqqGBUUMGooIJRQQWjggpGBRWMCioYFVQwKqjgT6CCUUEFo4IKRgUVjAoqGBVUSNLXuXxic23TlFV7Byob962dMbp++LgFTx6paBp4a82UUXXNU+94//yl77S7BjrKV369bm5r/bAx12/+vqxhEeXZWV0K5zc0J19t1Jay33Nfe9IWLfom3/bq+KRtwu5L3evP46hQ+OHWKN5g/SP9uaYxVa5wuiP35eb8kG1cF2Xbmt7INJ1blnvfLWcubbe3UaHwZWt2gzOyH+RHqlvhzDQAhs9ZPO8yANozP+eTxS981aKFxcO+bl/aG80rto2eM3c0ADMvieEVKhROjARg/PwZTQBM60vbuqpcYRXA5TsGQgiFN8YCrEy7bgBWnAghhM/mAoxI+uu/AzDvQAghdHcA3HAJe/1meIXCwDSABYdCCP2vjAS4O23cDLS+n0tvFSl0A7TF3+jHyUD0RdzYAbApvnysBLiztPQBAI+Vlgp3A2y76L0OzqRC4VmA1YXiQs+VQO3XSeNK4K/VO0a6Gag5nCweijK/9EmAm9KDtQ0YURpFzQO4P93OYqDll4vd6yNUKPS3ANMH48VjTcDSpPVq4PGqVThTCyzLrOgA2uIxEMCHadszAAdCCCF8BTA5M679fhjw3EXu9cMIRs/LK+wA6EqXnwai7+IDoA54q2oV3gF4N7PiLqCu9PcmgNNlvdfeEEIIzwHsyG5pNTD7IkdlYyD655K8wvUZ/hBCOF0LbI1PUYCeqlU4d2jXozf9lFmxJqOwASAzXjwI8GoIIYQlQE1uULQLiH68qJ0uAdaGvMK5hnwPV+zz5mVGVC1/ogpGBzCp9PdugHRsGjoB9ocQQpgFTM298Uj84nsBWjOn0AaA6WnvtR2Ycq5MoRvgzdxUBagrvWstsPDPo3AkyhySvTXA4qStMBNoKg7i24Drc+/sBdgQQuhvB7g9afi0Dmg6niwfbYBhR0KZwgsAJ7Ib3APwefHv+cDDfxqF3nZg2Ml4cRmZvrk4sHmg+PdY4ObcW08lI/wv6wHeL63/pQ1gTzrSuqZ0Gc8r3AfUF7Ib/DzzvmZgTzi1ceGY+ssm3dJ5upoVzm1vBdiSoowBuPPbEEL4ZinAVaVrwTRgbr78QHLiPAMwpvTK2wHuSF/3ALCwUKGwFBhfeXIVJys9AN2r6uJp82UbzlWnQteL65eOAIg2Zqe4UwCiqYsXt0cAs+Lp3UJgZO7Q3ZGO/wsL01/+NYApaWXuXxG09IYKhTnArHyREeChdCTXlC1fzOqtSoV58dc7kFs98My49KtP2JYUXB8D+Cj7ymUA15QO4xYg6gohnBwBNPw7rZq2JgP/vEI7cF3+IzUAa0IIIaxPPkJyOozrrUaFuEg9+fFcTbXv2empQsdrydG/n7JRy8k6gKtKS28CTOgL568F6ExfdmPaPeUVrsxN00MIIbQkNa1bAGi4/YPvwsDR564EYPZA9SkM1iS/9fDMZOyd1nwdc+axuLtoA3gmff9cACZmpx08UDyIV6Tb2wpMPDuUwhjglvxnuhy4LRmRMT3e9+DDxOOxKlM4u+Po2bNHn58IwOZ47bbixaDzeP/PhzeNA2g+WGp6CSBaXzo5fr6hqDQlOYcmArU76oC2tLp0pAHqPgtDKbQCt+Y/0+i4ktTfCMzK3PX5B0Dzz9U6Uh18CCDaX7piR0BtXCkdWAtw+anSybCgeDPihWP9Zw6tb4GG+cD0ZEufxT14/aF0DDYFeCoMqTAWWPJrPVKht3tX9jpQ6Cjr6Kpt7vxwekifnwiQuZX5OJnS3w/j853V7nuAOflqHMDz6ap7gbmFoRXagBvzH+Wy5OpckfepPHWqSaHQDtAdQghvA6zKts0FoniC25u5btO4IyzP9+yF4pUiM7V7L4IRJ8PQCtOB+fmPUgPcN/SnHGgExlWvQngZ4InkCns82/YhQDKf6Hu8MRk9HS0+JXFP5sUfka+7fjcK2BV+ReF6YFrug/wC8PRvlLsaqljhVHJrZyrQnj9RRuaP7u+33Th55Kjp93wUj3UzM77zxYcKmr+NV+zkV7I8hGJhfHRuZ8d+q++/CaCvehVCXdy/t1bUisK1uStwLj8BvFc2jgH+UrgohaeAKFeX6EoruJVZAtQUqkbh/Imu7vyaxrhE1Jwf68eTrslDb2gfQHLgh4O1QGN23PvbCm8BHMlucCvAj78x1W+pmh5pUS3MyK05kww/JmZus2TOhTlDb2ktMCGdf7QBDYcnAfWHL0bhFMDL2Q2uAsaGEEJYd/O1k2ZWjmI7qkZhGVCTq1m8C7AuhGJRv2Uwd+I0x0I/7dz04IrsgXr+CuDeZHF1cWp9IALai/Otvp58FgEzenp6eop16onlZ94VwN+SK3eU+5CHAR6pGoUt+UJECOHWZKS6vvyedLGr3hZC6Vm51zNNu9MnA0IIbwBcWyieIRmc8q49czjfDzRlHuLYn958W5evt8fDt0+qRuH7WuCKs+mK7ggYW0gOuBmZk6EwG4h6kurb4kw/NiFbmT41Emg4FkLoawOifRehcBhgfbq8AGgdSJvGZyoYn9cBM6uojrQMYHWyeLw18/DhIoAH811/PI1bl6l0hDC4KHuLunAdyWMxH0dA6w8XVgjzgbrkUZgnyFQ7ZuXvFPVMKBuP/eEVTjUBrC6dDe+2AMwrDQGP1AMsLd1fPL0CoKn0PMrJYUBLqVP4dk62tlG81xaXKtZSWbMeUuFgBDQVe7nz6wDGxBOCTyOAVaX+quuK8kn9H3++sDcCaHnwrQP7Ns8ulqeT27q7inX9lTv2d++5awRATdK5rAeoWbrrk/07l9cDXB0/GPNlPdAYT7r72gC2X1ihWMJiQefHXZsnA9Skk4UnKH7Itz/ten4+AFPPVJVC2F6THzhe85/MmL023zYsrUAUluabppaKraVnMNKL6ccR0HjswgqF1bkNRi+VjYNze/suVJdC+Cj7Hxo1d+b+e2P/uOx3n/R5tqJ2f+Z/G6I1yfDmvmynlqyYMXhBhVB4tC7dYvPrubad2dvO0ZqzodoUQv+WyaWv17K6/Jgd2D699GPXzn617P98Di4pnSrDVnyWzqEjoDH7ZFGxT3r0wgohfHXr8NJTFmvL7yufXh+X0huXf/E7FnR+zzrSt69vfWrL7i+GrMycfveljRs79w3VEZ/tenHDxu3d/8PnUvq7Xt6wqfPTwaHaTu7d+tSGzgMDIVSpglFBBaOCCkYFFYwKKhgVVDAqqGBUUMGooIJRQQWjggpGBRWMCioYFVQwKqhgVFDBqKCCUUEFo4JRQQWjggpGBRWMCioYFVQwKqhgVFDBqKCCUUEFo4IKRgUVjAoqGBVUMCqoYFRQwaigglFBBaOCCkYFFYwKKhgVVDAqGBVUMCqoYFRQwaigglFBBaOCCkYFFYwKKhgVVDAqqGBUUMGooIJRQQWjggpGBRWMCioYFVQwKqhgVFDBqKCCUUEFo4JRQQWjggpGBRWMCioYFVQwKqhgVFDBqKCCUUEFo4IKRgUVjAoqGBVUMCqoYFRQwaigglFBBaOCCkYFFYwKKhgVVDAqGBVUMCqoYFRQwaigglFBBaOCCkYFFYwKKhgVVDAq/HHzX1TEFW3qNEszAAAAAElFTkSuQmCC"

/***/ }),

/***/ "Av/8":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/entypo/plus");

/***/ }),

/***/ "B79a":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAMAAADX9CSSAAABI1BMVEUAAAD/AP//AP//AP//QL//QP//K9X/K//bJNv/Sdv/M+brO9jtN9vtN+3vQN/wPOHxOePyNtfyQ+TyQObzOujpN97rO+LtQOTuPObvQN/wPuDqQNzxPuPrPN3sQN/sPuDtPeHtQdvuQNzuPuPuPd7pQd7qPuDwPeDrQdzwQeHrQN3sQd/tQN/uQdzuQeHuQN3uQOHuP+LrP9zsPtzsQN3pP97tPtvtQdvuPt3uQeDuP+HvPt7sQN/vQN/tP97tPt7rP9/rPt3rQN3uQODsQN/tPt3tQN7rP9/uQN/uP9/sQN7sP97tQN/tQN/tP93rQN7tQODrQN7tQN7uP97sQN/uQN/uQN/sP93sP97sQeDsQN7sQODsQN7tP97tP9/tQN/tQN+my8XUAAAAYXRSTlMAAQIDBAQGBgcHCg0ODhAREhMTFBYXGhweICEkJSYoKSorLC0uLzEyMzM0Nzg7Ozw8PUFCREVGR0pLTU5QUFVWWVpbW2BiZGZoaWttb3Bxc3N0dHV3d3h5enp7e3x9fn+AvTkBbAAAAPRJREFUGBldwQkjwgAAhuFPk1QURW45IvdNyJUrJEU0R7X3//8KW0Vbz6OW1Bv13KS6LdOUn5NHwKStsGKoYxsKQ7FsHdvrVr/ajAosSQoffWIzD0NqSkPJJ0dwp4Lta1aOImyorXe1CFgzkpLw4de/nvkC3EvKw77colCVJqAekts4PEs3cCKPHBxrBKyI3IYtrIiycCGPc7iUXiAht3ADEpIJg3LLwK2ka3hKqiPwA1OSRqtAIW2obRce5Yg/YCtv9slhVGBRLdN32MyDkKQ1KPn0Z+zKAmqn0VgR1uUSP2vQ8u6Xx0DmG0dK3YJ7NcoLavoFfihDV29Ncy8AAAAASUVORK5CYII="

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

/***/ "ERjp":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmsAAAGpCAAAAAD37y4aAAARfElEQVR42u2d6XvU1B6AM6V0ZS2UrVRBEMEiiiBoQRGxbAqKcCubStmUC1LAigJyqRV5kKVAqyxSlpZCS20pS5dpJ3/cLeSczGRyTmYmGe61j+/7qZOTZNLknbP+zolhAvxvMLgFgGuAawC4BrgGgGuAa4BrALgGuAaAa4BrgGsAuAa4BoBrgGuAawC4BrgGgGuAa4BrALgGuAaAa4BrgGsAuAa4BoBrgGuAawC4BrgGgGuAa4BrALgGuAaAa4BrgGsAuAa4BoBrgGuAawC4BrgGgGuAa4BrALgGuAaAa4BrgGsAuAa4BoBrgGuAawC4BrgGgGuAawC4BrgGuAaAa4BrALgGuAa4BoBrgGsAuAa4BrgGgGuAawC4BrgGuAaAa4BrALgGuAa4BoBrgGsAuAa4BrgGgGuAawC4BrgGuAaAa4BrALgGuAa4BoBrgGsAuAa4BrgGgGuAawC4BrgGuAaAa4BrALgGuAa4BoBrgGsAuAa4BrgGgGuAawC4BrgGuMYtAFwDXAPANcA1AFwDXANcA8A1wDUAXANcA1wDwDXANQBcA1wDXAPANcA1AFwDXANcA8A1wDUAXANcA1wDwDXANQBcA1wDXAPANcA1AFwDXANcA8A1wDUAXANcA1wDwDXANQBcA1wDXAPANcA1AFwDXANc+5vTX799ybSC3OzCaQsqLoaTPapx+QBVCc5c++XC4mGZ2YXTl1fefD4X33boKTUee0Su7CmbVZg3JDN/4pw1Vfdw7f/HvY0FRgzDNv2V3HGlT/de5bVHu/PMMw90p//qI/OenXuWdoc75Y6LMIzplbrLWDzUg5W4FpTH64cacWRt7U/iwJNGAtfC27Ljz1x4JJLu699reLrWvnKI4aLgkPoyCg0PluFaQC5OUN3X2S0JD7w/MoFrjS+pzjynLb3XfyPL07Xq4Wpx5qvy7k4D154jP2aqb+zYuwkO7H3N8HbtQr76zAUX0nn94emGl2sVIZ05E2659z6Pa8+RA9pnUdzhXUtaYni7di5bd+asc2n8BzYaXq595aHOmDuu3ffg2vOjJsPObTafbQs/uL5vjn1r53qqtsbwdu1mNFcbse7Xu49b6/eWSK9z69NXAwh5uXbcvoaM+V/XNT36q6F6bbRK9sKT+P1X4Npz426euI3ZO+2Ojt8my3t71EO1lYa3az0v2LnYdrvRVzdVZimd6WrXRCubCtdabd+XNUYL3crRcuuK+AOm49rzIiIzsYIrMVsfvia3PtEd2L3ESODav+xqUUPM1j6p6JI0/QfLDS/XlspfkvNX0zpLHlMbV/cTDfIH9K+lne9lO6DZmSe9LLYf0hzX9oqRwLUm2eIocrY6I+vE9p/T8g+cMLxcaxDla2Zt/E9lpmwTO7dft7aOM3Et3fSOEz/7y/F1LVGLK1EfVzvWSOSarPjkNcVnpa9bCVPT0c3WNsLTtY9Eyj73gbJz909nm9zauAjX0k6luOGV2qKpSdXJsMnZdFW59kD0eRk/uJJahlkpx9NQBZhveLnWKyqjLysOPSQO2qgq+LfhWtoRNfVX3VlMvXgUirHOumlxNeZVHhbPU6RtMRIMKSXNPpFFak54WlzECcWh/eOttBmOrW9aG3/FtXRTJ56FqgNiopX0Sfz2jtV2phYaq3dtgdjnjKrgE1W5W0Gv/5bVgffWHo1r5aIYVw63fSq6QhxxBtZAiNGGa+nmU2X92GKN8vk93JJrZ2dDj67SutafI3Ic5fcutBJ3Bbz88Ixnpxl+X+eaqBku9GxVNMZsuy+a3yaupRvRNaWMxbn0WcWB6gs3nY3/nmHRknPcH6betQZlbUiy00p8I+Dlb7ZO85Opc22EV+3rkrjESzHbTnnJiWsBuCE69fuSPuJJVLUlA52xetf+I/Y6pTzNBSsxR3xxn0BV1EVkortKeclqKy81da7Jqz3o9d87SnnxI9iCa+lG1Kw/NFN3bfSxpx/1rn0j9lOPDrSK1GtWX1exLJQVFbgy2avsGpsVAwZPByA0rvUc31O+7PXJudXKizinyNfetzZV41q6Ec/x+5Rdy1j70PR2TYyHZ6pP0y0e8xHr42XZ7VviyrzkcGborOskYgDitKl1zc4blVtlN3ZsqLCwvhnX0k1xys1By7X5DeKj3rV13pXsoc6yqsLQ9LnKrjhFva/aSlhrJnZNzTJhcW/Mb8AqlYebuJZmuqzOi+xIaq7NPm9/1Lu2VkQlac6T6Sy9+0tk+IczZE4OMRizXFXKNqt3oqjbr2t9ouEwJWbb747wlu76X6r2Hz7dFMG1wPxp3dlp0UfbWPPdnsrjV3v1rmWUxoY56l3b4JmvdcUPRjbJnpT5jv12yXGuZk3/XYbVM+jHtcPi3OtitomxhPKBP5u3lsiSfcS7x3twLRjVjrG//p8/kPE3WW9WaeI7+p0TkPSufeFZX2uR4WP2lu9kKXo4ZrermdrQpv2OQtiHa5EXFYEen1ibjpmXSp2jcKN39eBaEHbH/LAjB5xzDobv7E3iDHrXDhpeHfBnRerI6KZS+cXt0dpTsS7ITA4YTA/7dk2OoU2ILSFFUX6xzB25VnQe1wKw3rqLFQN/NsxwB4BfDuKaHIk8pjxum+HK9jpGu+LaZNzv5C5XXcu63KGyjZK6a/fzFa2RiBiqz1OFSWZsx7XAXR4DMR7VOYqbO/SHAK61i5OsVh43T35HzFjkSblNjmL8KoW86jpeDN5/Y/p1LfKWnEAYO030jmdMrrEmgmt+WSgrQ0fVs1tC+/y7Joe/8h4q0prt73scs1XGmo15ZNk6Snze4zq+zuqamBPx7dqX8gJ+UlRgtXyKa34RcdA1p4bobu5R/66JarZyLHK9/QWxwwpdRY688G3xaYErN3kyydI42j+SqmtH5fcvVDVorPrZplP3unpbrlSWxuT5e3HNJ1NEmLeYqjtqdc2tR913zpUXRYvRq75dk/Msc909xQ1Z9he0x26vF7HAoYsDHw5ox6bkt8ZE1qXo2mnZvh3l+H67fTLQQP45anhHdFGAzKu45g8xW8pSLXebXXOJVNmLX7zY69c1OShhTIlfOKN3ajSjcIq0VT7psNkkcpPQb64T11gppaZf12rltNUhcQNf4+VllTvXzmmwE2ZGcM0Xsb0cRbFRXGaHPc1ot2/Xquy1Gpzj712xYdvOpD45YWZXRE7k+tx13r+sAYOR7X5dq83RjIg9lPVUV6Oo3Z7JdwzXfDEm+sxnxM1R654rFyx64te1/il270nsdMDGWbEVwsfKbjMjt1zmI2Fdi8YRc5eKa6ftyfjr4lL+EEXrfvdBd+WSIC/jWkDXRrqWiWmXxei3fl0zf7cn1IeWX5O9CuXW8xRh/Ub8MOd+Z9skz70GQqWqezcF107Yi5csd5WHkZbaqq3L1qsO+0UehWu+sGshqqkcsndrhm/XZOCh1T1f9vnuzSvlqkVFt3VDWG8laAfftnKl8Y99ulZpd7cs60/pZr2Ka0Eo8lxzRUyWCrX6dk0muxjV2OwaoxI45nsudyX3WVOIQ3EDRkm7tsU+d1lqqtkZG64F6fPQzDf4IYnacALXImrZxlwzb2lDjmL6U4vcdUXRA7bB9OVauMz/GEBfLq4FQAaNDVUu59khUtf7d20gKCjDrdrMVnuyoGpWvb0+R+YVV5rogXuxx5drna/b17Ap9bs1H9cCILsuNdOZRAfZO0FcM+unxpmWvbM/mnup1o95JNuJxa42qBhZcEuYlGu37TpDaI+Pu/UVrgVglabtL/ggPpTSj2tm/4+xq0zlb7DWDd2rLgtjkgbYHJ+0OhqYkrprtfZKppm+OskO4VoAthiei1eIicoTgrk2wPXdi4rzM7LHlKz7RWZVa3RLupg3o2tRZlyKS8sxkkO1ROFhu68j318kWjWuBUBOJNqvThb18NGBXVMghgXcA1Dh2EC6SU/S5pod2GGMv+Hvbp3BtQBc0C4Y9YztiZci8+tav8i87nt0Siii33y7Fl1u1XjF71IdJ3AtADKesUKdXO6eZ5Qu1y7rZr7UxbVba9LiWji6BuZi32/yOIhrQRin6zJ9xkqPhWUCurbDHarxDBGZZoT2Z6qCfny6Fl5sp6xP1K0Wbr2q2aUC14Igfu7T1akiUPuj5+CaWKT335qG5kAArAxbLA3uWt/i5AKNf1pUUpSvn5r9Dq4FQXQvhJQLEcuJHvv8u9bTXKdaltK8H3KvbvAUOQ40ocsMT1Es2Lu0VIPYebj4+IXj/7AHC7K8l+n4WrsQ5rPTDMe1INzRrx1pmtdE4u/+XDs5pzhfVz7vVo9QdYyKWbujXviYeyeJf8Srf81+08awBC+LOeW5qnk946HBEPNxX1WlfS5qTBF/rv0mui1UrVARYBI/CU6OY3z87JOclFDSH8i1I/aA/7UEJ5FvohqmjEV+H9eCsUO9yP9TukWZ4fkWQw/X5JNrcCeJiN2suJkEcup7oRUv1D3Ju5mcnGsNsmt4dOIVcmZ4RBs0ZyQRYoVrHnSI5t6Mfl2zy6jz6Zo5STd03zlGafEduaTHabHhfEg7Bp+0a31yGemcq8n/8ia7g4Ej8zwrc7iWBPIlKltdPWCZyfyOvVwTvbK58f21kffExBJny8Beqiiq4MdyqkuPb9fkLyZUk8TNkEtGGzu0Ghb145pfWkQREzrs3H5voldoW1KuNYozvBe3XU4liBt33y5fIPPI3vS40Ds4ILFr8t/TLNur63Jxmfmd7GI+aeKab+Q4YWhnbBvg9rhkXrSXoM9jrmoqVI/MSQucUdz2kkSx4egyDj10xqdrq+x5g316ov/4fVmMZx9x5MTbjTS/Q+uf6ZpddBlz7LVi+r627/nNAK5dl9PpS6NDkGflSlQZp509cXJ7mWPzh7K50OnLtbbMZHp+f4wecMDeuCI626fefvXWhIe4FqgUjb5Mc/a31x6GWy5sHK96DKm7Jtf7G6jdlx1vfhLuqNsdDeKIGzL4TOZ2TqkeyMWLlvpy7UsjRddkzN7Ta156+FZnuKV+18xo8F2DiWuBuDVK+xQS1nK8XeuZoz3zZ849z4Q07977T3Iri2hcm5iyaz1v6vfL+buvwDYI3sHdNFlzcxOv8p9gjOqx5sWvobgXtnQWarMvOZY5rCV11xqNlF0zexbpdhtRb+JaYDrfU93bvCS6khKNvXe+ozrzyPhxSflC2ZHudWLaZOT23EjKrh314ZoZ2aau5M1pMXEtHRx3lzYLm8zgrg1MZHfFZoRWx1f0bSdUL3mUSygbe1J2bacf1wYGgt9w71NQOQgWAx8crpnhKscyG0MX1yV1WBIxRZ07Chwl0Ybb8Xu0yqzrXeUJ5Ez4rBupurbVn2sD02Dez3LsMe3brsHwEAeJawM0H1wxqyAnI2/c7HVHH6XzxH11O99+aWx2VsGUhRXnegfHzeg+uWnBC8MzM/LGlKw80DRInuDgcQ0GO7gGuAa4BoBrgGsAuAa4BrgGgGuAawC4BrgGuAaAa4BrALgGuAa4BoBrgGsAuAa4BrgGgGuAawC4BrgGuAaAa4BrALgGuAa4BoBrgGsAuAa4BrgGgGuAawC4BrgGuAaAa4BrALgGuAa4BoBrgGsAuAa4BrgGgGuAawC4BrgGuAaAa4BrALgGuAa4BoBrgGsAuAa4BoBrgGuAawC4BrgGgGuAa4BrALgGuAaAa4BrgGsAuAa4BoBrgGuAawC4BrgGgGuAa4BrALgGuAaAa4BrgGsAuAa4BoBrgGuAawC4BrgGgGuAa4BrALgGuAaAa4BrgGsAuAa4BoBrgGuAawC4BrgGgGuAa4BrALgGuAaAa4BrgGsAuAa4BoBrgGsAuAa4BrgGgGuAawC4BrgGuAaAa4BrALgGuAa4BoBrgGsAuAa4BrgGgGuAawC4BrgGuAaAa4BrALgGuAa4BoBrgGsAuAa4BrgGgGuAawC4BrgGuAaAa4BrALgGuAa4BoBrgGsAuAa4BrgGgGuAawC4BrgG/1T+C48CVDdFQMkfAAAAAElFTkSuQmCC"

/***/ }),

/***/ "FIas":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "Gozm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "H192":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-bg-e4749dec5d0822d7ec05b6639b7c30a2.jpg";

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

/***/ "INZR":
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ }),

/***/ "ISvA":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iw5HDq8Ouw6lfMSIgZGF0YS1uYW1lPSLDkcOrw67DqSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3Ni40NyA3Ny43NSI+PGRlZnM+PHN0eWxlPi5jbHMtMntmaWxsOiMwZjIxMzd9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYzNy42NSAzMzAuNzljMC00LjA4IDMuODgtNS4zNCA3LjMzLTUuMzRzNy4zNiAxLjQ1IDcuMzkgNS41OGMwIDMuOTEtMy45NCA1LjUtNy4zMyA1LjUtMi44IDAtNiAuNjktNiA0djIuOTNoMTMuMTl2MS40MmgtMTQuNjl2LTQuMzJjMC00LjI0IDMuOTEtNS4zNCA3LjQ0LTUuMzQgMi40OSAwIDYtLjkzIDYtNC4xNnMtMy4zOS00LjMtNi00LjMtNS44OC44OC01Ljg4IDQuMDZ6bTI5Ljg2LTUuMXYxMy4zNmgyLjQxdjEuNDhoLTIuNDF2NC4zMkg2NjZ2LTQuMzJoLTExLjdsLS4zMS0xLjc4IDExLjA5LTEzLjA2em0tMS40NyAxLjFsLTEwLjQ2IDEyLjI2SDY2NnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MTQuNTggLTMwMS43NCkiIGZpbGw9IiNlYjRkNGIiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik02NzUuMjMgMzE5LjUyYy0zLjU3LTEwLTExLjgzLTE1Ljc4LTIyLjY2LTE1Ljc4cy0xOS4wOCA1Ljc1LTIyLjY1IDE1Ljc4bC0xLjg4LS42N2MzLjg3LTEwLjg4IDEyLjgxLTE3LjExIDI0LjUzLTE3LjExczIwLjY3IDYuMjMgMjQuNTQgMTcuMTF6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjE0LjU4IC0zMDEuNzQpIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNjc5IDMyOS44NWgtMmMwLTEyLjU4LTcuNjMtMjYuMTEtMjQuNC0yNi4xMXMtMjQuNCAxMy41My0yNC40IDI2LjExaC0yYzAtMTMuNTQgOC4yNi0yOC4xMSAyNi40LTI4LjExczI2LjQgMTQuNTcgMjYuNCAyOC4xMXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MTQuNTggLTMwMS43NCkiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik02ODIuMjIgMzQ4LjEzSDY3N3YtMTkuMjhoNS4yN2M0Ljg1LjA5IDguNzcgNC4zOCA4Ljc3IDkuNjRzLTMuOTUgOS41OS04LjgzIDkuNjR6bS0zLjIxLTJoMy4xMmMzLjgyIDAgNi45Mi0zLjQzIDYuOTItNy42NHMtMy4xLTcuNjQtNi45Mi03LjY0SDY3OXptLTUwLjg0IDJINjIzYy00LjYzLS4wNS04LjM4LTQuMzYtOC4zOC05LjY0czMuNzItOS41NSA4LjMyLTkuNjRoNS4yN3ptLTUuMTItMTcuMjhjLTMuNTcgMC02LjQ3IDMuNDMtNi40NyA3LjY0czIuOSA3LjY0IDYuNDcgNy42NGgzLjEydi0xNS4yOHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MTQuNTggLTMwMS43NCkiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik02NDQuMjggMzcyYy0xMy4xOS01LjgzLTE4LjExLTE4LjY1LTE4LjExLTI1LjM2aDJjMCA2LjIxIDQuNTkgMTguMDggMTYuOTIgMjMuNTN6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjE0LjU4IC0zMDEuNzQpIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNjUzLjUzIDM3OS40OWEzLjg1IDMuODUgMCAwMS0xLjI3LS4yMmwtNi0yLjExYy0yLjMyLS44Mi0zLjQyLTMuNy0yLjQ3LTYuNDRhNS4xOSA1LjE5IDAgMDE0LjY3LTMuNzEgMy45NCAzLjk0IDAgMDExLjI3LjIybDYuMDUgMi4xMWE0LjEzIDQuMTMgMCAwMTIuNSAyLjU5IDUuNzggNS43OCAwIDAxMCAzLjg1IDUuMTkgNS4xOSAwIDAxLTQuNzUgMy43MXpNNjQ4LjQxIDM2OWEzLjI2IDMuMjYgMCAwMC0yLjc4IDIuMzdjLS41OSAxLjcgMCAzLjQ0IDEuMjQgMy44OWw2IDIuMTFjMS4yNy40NSAyLjgyLS42MSAzLjQtMi4yNmEzLjggMy44IDAgMDAwLTIuNTEgMi4xNSAyLjE1IDAgMDAtMS4yOC0xLjM4bC01Ljk5LTIuMWExLjgzIDEuODMgMCAwMC0uNTktLjEyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYxNC41OCAtMzAxLjc0KSIvPjwvc3ZnPg=="

/***/ }),

/***/ "Ihd7":
/***/ (function(module, exports) {



/***/ }),

/***/ "IrP5":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "J4YY":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAA8FBMVEUAAAAAAP8AgP8AgP8zZv8rgP8kbf8ggP8ccf8udP8teP8uf/8sev8rgP8pev8xf/8se/8xe/8wfP8vf/8ufP8tef8tgP8sfP8xgP8vff8tff8vff8uev8ugP8tff8sf/8uff8uf/8tff8wff8uff8xff8ufP8wfP8wfv8vfv8ufv8wff8vff8vf/8uff8wfv8wgP8vff8ufv8wff8vfv8uff8wfv8wff8wgP8vfv8wfv8wff8vff8vff8vf/8vf/8wfv8wfv8vf/8vfv8wf/8wfv8wf/8vfv8vf/8vfv8vf/8vf/8wf/8wfv8vfv8wf/8QDVk5AAAAUHRSTlMAAQIEBQYHCAkLERYXGBkaHR8lJicoKCkqKy0xMjIzNDc4OTs9P0JKS1dZWlxcXl9gYmNmZ25vcHBzeXp8foKDhIaHiImKi4yNjpGTlZaYmYJzZ5wAAAD8SURBVBgZXcGHQoJQAIbRP0UUs3K2s+mIMm1ZaYPQS9O+93+bzJHAOZpJVNz+cGR6bjmhsFR9wJxft/Qv6xH2ktXMqgGCi1rBLtTaAWBymnB8oJPRlNMB/Iz+3EFQ1sJmAF2NHQIlhVWAAyllwFXUOQws7YNnKcp+hara0FRcE1rqw67iqtCTgRXFrcFQI7AUZ8O3AsgrLg9GT3CkuGN4VBtOFedCW3vw7ijK+YAdJQ1cKuoKTFKqARsK2wZOJC09QFDSQukN7pc05vjw41qass8AP6OJnAd8dhvFdLFx+wU8L2smfUPYta2FLY85b10RiUqrNxyZnltJaOoX4x9AVuB4TjwAAAAASUVORK5CYII="

/***/ }),

/***/ "K0LP":
/***/ (function(module, exports) {

module.exports = require("react-scroll-parallax");

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

/***/ "KN5u":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxOCI+PGcgZGF0YS1uYW1lPSJFbGxpcHNlIDEgY29weSAzIiBzdHJva2U9IiMzMDdlZmYiIHN0cm9rZS13aWR0aD0iMyIgb3BhY2l0eT0iLjYiIGZpbGw9Im5vbmUiPjxjaXJjbGUgY3g9IjkiIGN5PSI5IiByPSI5IiBzdHJva2U9Im5vbmUiLz48Y2lyY2xlIGN4PSI5IiBjeT0iOSIgcj0iNy41Ii8+PC9nPjwvc3ZnPg=="

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

/***/ "L+Py":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxOCI+PGcgZGF0YS1uYW1lPSJFbGxpcHNlIDEgY29weSA0IiBzdHJva2U9IiNmZmIxMjkiIHN0cm9rZS13aWR0aD0iMyIgb3BhY2l0eT0iLjYiIGZpbGw9Im5vbmUiPjxjaXJjbGUgY3g9IjkiIGN5PSI5IiByPSI5IiBzdHJva2U9Im5vbmUiLz48Y2lyY2xlIGN4PSI5IiBjeT0iOSIgcj0iNy41Ii8+PC9nPjwvc3ZnPg=="

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

/***/ "MLGx":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMi45NzcgMjIuOTc3Ij48ZyBkYXRhLW5hbWU9IlJvdW5kZWQgUmVjdGFuZ2xlIDEgY29weSAzIiBmaWxsPSJub25lIiBvcGFjaXR5PSIuNTAyIj48cGF0aCBkPSJNMTAuNDQ5LjM3NWwxMC4yIDQuNzM4YTQuMDE4IDQuMDE4IDAgMDExLjk1MiA1LjMzNmwtNC43MzggMTAuMmE0LjAxNiA0LjAxNiAwIDAxLTUuMzM2IDEuOTUybC0xMC4yLTQuNzM4YTQuMDE3IDQuMDE3IDAgMDEtMS45NTEtNS4zMzdsNC43MzgtMTAuMkE0LjAxOCA0LjAxOCAwIDAxMTAuNDQ5LjM3NXoiLz48cGF0aCBkPSJNOC43NiAzYy0uMzAxIDAtLjcyNC4xNTQtLjkyNi41OWwtNC43MzggMTAuMmExLjAxNiAxLjAxNiAwIDAwLjQ5NCAxLjM1M2wxMC4yMDQgNC43MzljLjEzNi4wNjMuMjguMDk1LjQyNS4wOTUuMyAwIC43MjMtLjE1NC45MjUtLjU5bDQuNzM4LTEwLjIwMmMuMTU0LS4zMzIuMDg3LS42My4wMzMtLjc3OGExLjAxMyAxLjAxMyAwIDAwLS41MjctLjU3M0w5LjE4NiAzLjA5NkExLjAwNyAxLjAwNyAwIDAwOC43NTkgM20wLTNjLjU2NyAwIDEuMTQyLjEyIDEuNjkuMzc1TDIwLjY1IDUuMTEzYTQuMDE4IDQuMDE4IDAgMDExLjk1MiA1LjMzNkwxNy44NjUgMjAuNjVhNC4wMTggNC4wMTggMCAwMS01LjMzNiAxLjk1MkwyLjMyNyAxNy44NjRhNC4wMTcgNC4wMTcgMCAwMS0xLjk1Mi01LjMzNkw1LjExMyAyLjMyNkE0LjAxOCA0LjAxOCAwIDAxOC43NiAweiIgZmlsbD0iI2VkNDFkZiIvPjwvZz48L3N2Zz4="

/***/ }),

/***/ "MSbZ":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAb4AAAAxCAAAAACAd5OMAAACWklEQVR42u3Y30tTcRzG8efkydl0abFSBGmGGjGINpVMGtrMfqIVhkZQEZG1gqxltIuCkIzQoB+GYAkWjYzFiibN5Xn+uC7qO89Mb7o5C5731Qe+n93sBd+zM1D9x0FfgfiU+JT4xKfEp8SnxCc+JT4lPiU+8SnxKfGJT4nPy5IYWztO7NviC09uuPr1zA674UJOfGXQJ3+Rz4yjCA4NVFsPN1jNNmLP+d5NoW/i8752FPn+jHNWW45cqAw666/24zTJJ9YJ8XneXXQZPjMex1uSvDbwfd3Vgi+QJ8l2Oyc+z6/OuHngFcftIXP6ytqaJdmNhOs8jQhJchhT4vP66qzLGj4zZhFPH672RWZIDqOfHEeH4zr/jDBJcgBJ8Xl9dT4yPyeL4xw6a4N9Uct+Ri7vwnTaX5txnzt1dppkvh7Xxefx1XnIvA2sjq+Bzh/kpBUskLMVTfsxUbp6BU0vCx8OVGFUfJ4WDXwxJqvjDKxFkuzBFMlLwKk1qytxAGhO4Lb4vOwOUuZd3DUuoJ4kmcAYyXngQekqyecjg/eXb+Kx+LwsAlPSNeYr6kiSN3CPXNlr1QQyJavm0314Lz4vuxyLxWKxNrTEpl0jw5gnyV7MkldxNoWuklUe2e2QXKpp0Gt7GfTXf54pRPLki4pm8p29c4kdGC85H0KKdE7ilvjKkY9H0Xju2OaqNyy04CmZ9vkX3eeZbXb/SCsOroivLPmcZGulv3uevIj476dg1HGff+wJ2KHET4pPiU+JT3xKfEp8SnziU+JT4lPiE58SnxKfEp/4lPjUP/QLqze7HmXMHUgAAAAASUVORK5CYII="

/***/ }),

/***/ "Oi65":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "P6xl":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAMAAAC6CgRnAAABVlBMVEUAAAD/AP//AP//AP//AP//M8z/JNv/Sf/jOePmM+boLtH/LujrO9j/QN/xOePyNuTmM+bzPdvpN970QN/rPeDtPuXvON/wPOHqPuPrPN3sOd/tPeHzPeHuPd7pPN7qPtvrQN3xQt7xQd/tQN/pPeHuPeHqP97uP+LvPt7vQd/vQN/vP9ztP+HtPdvtQd/uP9zuP+DuPeDsPd/vQeDtQN7qP97tPt7qPtzrPt3vP97sPt7sPt/tPt3tP97rQN3sQODsQN7sP97vQN/tQN/tP9/tP93rPt7rQN7tQN7uQN/sP97qPt7tP9ztP9/tQN/tP9/tQd7tQN7sP9/sQN3sQd/tQN7tQODtQN/uQN7sQN7sP9/tP97tP9/tQN/sP97sP9/sP+DsQN7sP9/sQd/tQd/tQN7tP97sQN7sQN7tQODtP9/sQN3sQN3sQN7sQd7uQd/sQN/sQN4OEfMMAAAAcnRSTlMAAQIDBAUHBwkKCwsNEBITFBUXGBkdICIlJigqKi4vMTQ2Nzg7Oz09Pj9AQUVHR0lJS09SVFVWV1pdXl9iZWhrbG1vcHFyc3R0d3p7fX5/gYKDhoiJi4yQk5SWmZmfoaGipKWlpqipq6ysra6vsLGxsrN+45hDAAABF0lEQVQYGXXBZyNCAQCG0ReZlZGVvVd2svfKSvYOKZtyn///RdG6yjn6Zb2ODOgfQ/DVrty2gXencskLEROqVg4NEH6C2xplm4F15yvcVSrLOfSp5RMCdv1hMzBKpfYIBOwyG4JTxXRF4bpYJrswqbh+Aw4tylDwAnX6MQocWJTWCkEljAN+i1IWYENJHsCXr6QrcCllEdhRQhkYNqUtA4v65YIzZVoBhvXDC1MyWQNjRHHPUC+TvD0weiQ1Q0h/lATga1Cah3VlKO+YPf4g5lK6gF4lOMZ8DyRtqhSiVkmO7jn/PUlv+55GyQUnjdP+R1KCXndboeK2yHDnWxqtVUqYhJvVgSqZXQKRI09nhbLZ3BNNRcrpG6bNYHr9jR6GAAAAAElFTkSuQmCC"

/***/ }),

/***/ "S0Kz":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAB/UlEQVQ4jZ2Uv09TcRTFP+fbJ9FojJNGVzCoaDW1SEFJkEJxdXDRsJs4OwqiiQ78CYZBBxcWJ1NbCCRqUn6IJrSDMQYnFDVpoiyUttfhfUVaaize6d3z7jnf830v54oGZblkFGkIowu4hFEG5nDkqJBWz9RyPUc1AoWOFtaP3sN0G3CNDgGqyMaJFO8o/mZzh5Atpk5Qrj4DtXuoBCwDi2ACnQeLgvaEBFsmqFxT58z7LSFb6dvLlyCP1OqHpqm667qY+Vp35SPgngApP/eRg59PqaNQCu2vBQ+3RGBU3VMD9SIASkyvKZEdwmwsBNTKz2MPAGTz/T1U3SuQwF4oMXXlL9+mpiw3OA30gxmmXkfF3QIJo0jLxnAzIgC0MAz8AAlx0wHHQ5ukFXv5rVkdxbKrwHPvr80BJ/271abd/C7b4rQ5xLpvDuxaSOz3T2WH8c4353bvyGJecckhvfXoBcslo01rLKROI+K+W3JIjzA2wt+vCbPa2DQ2gihXH4ccSlh5wqkrswJ231uMMz8w8k87c4N3kfy1bFTds5/CiMz0BewL8ttyliHYvKH47PcaJ69Th3HVp0hJDxXoOnRWmqz8Ce3C5XbKkUmkMx4KQ2s2j4jsCC0UgKtKZD/A/6wRo4JsnKA40nCN1MxuX2ymXkQJbA7IEXFpdWby9ZxfdPi78nAlEu0AAAAASUVORK5CYII="

/***/ }),

/***/ "SOF9":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iw5HDq8Ouw6lfMSIgZGF0YS1uYW1lPSLDkcOrw67DqSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MC4yOCA4Ni4zMyI+PGRlZnM+PHN0eWxlPi5jbHMtMntmaWxsOiNlYjRkNGJ9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ3NC44NiAyMDAuODhhMS4zNCAxLjM0IDAgMDEtLjUxLS4xMWMtMTUuNTYtNi45Mi0yNy0xNy0zMy0yOS05LjEzLTE4LjI3LTYuNDEtNDYuMzMtNi4yOS00Ny41MmExLjI2IDEuMjYgMCAwMS42LS45NCAxLjIzIDEuMjMgMCAwMTEuMTItLjA5IDIzLjQ5IDIzLjQ5IDAgMDA4Ljg2IDEuNjJjMTIuMjcgMCAyNC41NS03LjY0IDI2Ljc0LTkuNjlhMi4xOCAyLjE4IDAgMDExLjQ1LS41NiAyLjMgMi4zIDAgMDExLjI2LjQ0YzMuOTIgMi43MyAxNi43MSA5LjgxIDI4LjczIDkuODFhMjMuNzYgMjMuNzYgMCAwMDktMS42MiAxLjIzIDEuMjMgMCAwMTEuMTIuMDkgMS4yNyAxLjI3IDAgMDEuNiAxYy4xMSAxLjE4IDIuNSAyOS4wOS02LjMyIDQ3LjQ5LTkuNzUgMjAuMzQtMjcuMTUgMjYuOTItMzIuODcgMjkuMDlhMS4zMiAxLjMyIDAgMDEtLjQ5LS4wMXptLTM3LjQ1LTc0LjgxYy0uNDMgNi4yNi0xLjQzIDI5LjM2IDYuMTcgNDQuNTQgNy4xOSAxNC4zOCAyMC45IDIzIDMxLjMyIDI3LjY3IDUuOTMtMi4yNiAyMi04Ljc1IDMxLTI3LjY1IDcuMzQtMTUuMzEgNi41Ni0zOC4yOSA2LjE5LTQ0LjU1YTI3LjE2IDI3LjE2IDAgMDEtOC4zIDEuMjJjLTEyLjQ5IDAtMjUuNjktNy4yLTMwLTEwLjE0LTMuNjMgMy4xNy0xNi4xNCAxMC4xNC0yOC4yIDEwLjE0YTI2LjYxIDI2LjYxIDAgMDEtOC4xOC0xLjIzeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQzNC41OCAtMTE0LjU1KSIgZmlsbD0iIzBmMjEzNyIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTQ3NS4xOSAxNzYuNTJhMjEuMzIgMjEuMzIgMCAxMTIxLjMyLTIxLjMyIDIxLjM0IDIxLjM0IDAgMDEtMjEuMzIgMjEuMzJ6bTAtNDAuMTRBMTguODIgMTguODIgMCAxMDQ5NCAxNTUuMmExOC44NCAxOC44NCAwIDAwLTE4LjgxLTE4LjgyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQzNC41OCAtMTE0LjU1KSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTM5LjA5IDUwLjU1bC05Ljk0LTExLjA0IDEuODYtMS42OCA3Ljk1IDguODQgMTEuNTEtMTQuNzMgMS45NyAxLjU0LTEzLjM1IDE3LjA3eiIvPjwvc3ZnPg=="

/***/ }),

/***/ "SSas":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

/***/ "UbIB":
/***/ (function(module, exports) {

module.exports = require("@glidejs/glide");

/***/ }),

/***/ "Uq3F":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "W+gY":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "We7S":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iw5HDq8Ouw6lfMSIgZGF0YS1uYW1lPSLDkcOrw67DqSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5My4zNyA4NS4wOSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwZjIxMzd9LmNscy0ye2ZpbGw6I2ViNGQ0Yn08L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNzkuMzUgMjAyYTIuMzIgMi4zMiAwIDAxLS41OC0uMDhsLjU4LTIuMTQtLjYyIDIuMTNhMi4yMiAyLjIyIDAgMTExLjA3LTQuM2guMTNhMi4yMiAyLjIyIDAgMDEtLjU4IDQuMzZ6bS0xMC00LjExYTIuMjQgMi4yNCAwIDAxLTEuMDgtLjI5bC0uMTMtLjA4YTIuMiAyLjIgMCAxMTEuMjEuMzd6bS04LjU1LTYuNTVhMi4xOSAyLjE5IDAgMDEtMS41NS0uNjUgMi4yNiAyLjI2IDAgMDEwLTMuMTUgMi4yMSAyLjIxIDAgMDEzLjExIDBsLjA2LjA2YTIuMjMgMi4yMyAwIDAxLTEuNTcgMy44em0tNi41OS04LjU0YTIuMTcgMi4xNyAwIDAxLTEuODgtMS4wOWwtLjA1LS4wOWEyLjIyIDIuMjIgMCAwMTMuODYtMi4xOSAyLjI0IDIuMjQgMCAwMS0xLjkzIDMuMzd6bS00LjEzLTEwYTIuMTggMi4xOCAwIDAxLTIuMTEtMS42di0uMDlhMi4yMiAyLjIyIDAgMTE0LjI4LTEuMTUgMi4yNSAyLjI1IDAgMDEtMS41NCAyLjc2IDIuNjIgMi42MiAwIDAxLS41OS4xNnptNzkuNjgtMjEuNDZhMi4yMSAyLjIxIDAgMDEtMi4xMy0xLjY0IDIuMjQgMi4yNCAwIDAxMS41NC0yLjc2IDIuMTggMi4xOCAwIDAxMi43MSAxLjUydi4wOWEyLjIgMi4yIDAgMDEtMi4xNSAyLjc5em0tNC4xNC05Ljk0YTIuMiAyLjIgMCAwMS0xLjg4LTFsLS4wNy0uMTNhMi4yMiAyLjIyIDAgMTEzLjg0LTIuMjFsLTEuOTIgMS4xIDEuOTMtMS4wN2EyLjIxIDIuMjEgMCAwMS0uNzUgMyAyLjE3IDIuMTcgMCAwMS0xLjExLjM5em0tNi41Mi04LjRhMi4yMSAyLjIxIDAgMDEtMS41NS0uNjNsLS4wOC0uMDhhMi4yMiAyLjIyIDAgMDEzLjE0LTMuMTNoLjA1YTIuMjIgMi4yMiAwIDAxLTEuNTYgMy44em0tOC41NC02LjU0YTIuMiAyLjIgMCAwMS0xLjE1LS4zMiAyLjIyIDIuMjIgMCAwMS0uODQtMyAyLjIgMi4yIDAgMDEzLS44NGwuMTMuMDdhMi4yMiAyLjIyIDAgMDEtMS4xNSA0LjEyem0tOS45NS00LjExYTIgMiAwIDAxLS41My0uMDdoLS4xNGEyLjIyIDIuMjIgMCAwMTEuMTctNC4yOGwtLjU4IDIuMTQuNjItMi4xM2EyLjIyIDIuMjIgMCAwMS0uNTQgNC4zN3ptLTUyLjA0IDM4Ljk2YTEuMjUgMS4yNSAwIDAxLTEuMjUtMS4yNSA0Mi41OSA0Mi41OSAwIDAxNDIuNTUtNDIuNTQgMS4yNSAxLjI1IDAgMDEwIDIuNSA0MC4wOSA0MC4wOSAwIDAwLTQwLjA1IDQwIDEuMjUgMS4yNSAwIDAxLTEuMjUgMS4yOXptNDEuMyA0MS4zYTEuMjUgMS4yNSAwIDAxMC0yLjUgNDAuMDkgNDAuMDkgMCAwMDQwLTQwLjA1IDEuMjUgMS4yNSAwIDAxMi41IDAgNDIuNTkgNDIuNTkgMCAwMS00Mi41IDQyLjU1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI0Mi45NyAtMTE3LjUyKSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMzNS4wOSAxNjUuMTRhMS4yNSAxLjI1IDAgMDEtMS0uNDhsLTMtMy43OC00IDMuMzNhMS4yNSAxLjI1IDAgMDEtMS42LTEuOTJsNS00LjE2YTEuMyAxLjMgMCAwMS45My0uMjggMS4yNiAxLjI2IDAgMDEuODUuNDdsMy43NyA0Ljc5YTEuMjYgMS4yNiAwIDAxLTEgMnptLTg2Ljg3LS43M2gtLjA5YTEuMzEgMS4zMSAwIDAxLS44Ny0uNDRsLTQtNC43OWExLjI1IDEuMjUgMCAwMTEuOTItMS42MWwzLjE4IDMuODEgNC0zLjU1YTEuMjUgMS4yNSAwIDExMS42NCAxLjg3bC01IDQuNGExLjI2IDEuMjYgMCAwMS0uNzguMzF6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQyLjk3IC0xMTcuNTIpIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjkwIDE2MmgtNC44OWE4LjMgOC4zIDAgMDEtOC4xMS04LjQ1VjE1MmE3Ljg2IDcuODYgMCAwMTguMTEtNy45NUgzMDB2M2gtMTQuODVBNC44NyA0Ljg3IDAgMDAyODAgMTUydjEuNmE1LjMxIDUuMzEgMCAwMDUuMTEgNS40NUgyOTB6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQyLjk3IC0xMTcuNTIpIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjk0LjMxIDE3N0gyNzh2LTNoMTYuMjdhNiA2IDAgMDA1LjczLTUuNjJ2LTEuNTljMC0yLjY0LTIuNTctNC43OS01LjczLTQuNzlIMjg5di0zaDUuMjdjNC44OSAwIDguNzMgMy40MiA4LjczIDcuNzl2MS41OWE5IDkgMCAwMS04LjY5IDguNjJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQyLjk3IC0xMTcuNTIpIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNDQuMDcgMjIuNDhoM3Y1aC0zem0wIDM1aDN2NWgtM3oiLz48L3N2Zz4="

/***/ }),

/***/ "XRS6":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "Xzzn":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iw5HDq8Ouw6lfMSIgZGF0YS1uYW1lPSLDkcOrw67DqSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4OC44NyA4MS40MyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwZjIxMzd9LmNscy0ye2ZpbGw6I2ViNGQ0Yn08L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNDEuNTQgMTgzaC03N2ExLjUgMS41IDAgMDEtMS41LTEuNXYtNTFhMS41IDEuNSAwIDAxMS41LTEuNUgxMTNhMS41IDEuNSAwIDExMCAzSDY2djQ4aDc0di0yN2ExLjUgMS41IDAgMDEzIDB2MjguNWExLjUgMS41IDAgMDEtMS40NiAxLjV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjMuMDQgLTEyMC41NykiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xNC45NyA0OC45NGwtMS43Mi0xLjgyIDIzLjYxLTIyLjI3IDExLjY5IDEwLjYyTDg0LjA4IDIuNzRsMS42OSAxLjg0LTM3LjIxIDM0LjI4LTExLjY3LTEwLjYxLTIxLjkyIDIwLjY5eiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTg2LjY0IDcuMTRMODguODcgMGwtNy4zIDEuNjQgNS4wNyA1LjV6Ii8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTAzLjU0IDE5Ni41QTEuNSAxLjUgMCAwMTEwMiAxOTV2LTEzYTEuNSAxLjUgMCAwMTMgMHYxM2ExLjUgMS41IDAgMDEtMS40NiAxLjV6TTExOCAyMDJIODlhMS41IDEuNSAwIDAxMC0zaDI5YTEuNSAxLjUgMCAxMTAgM3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02My4wNCAtMTIwLjU3KSIvPjwvc3ZnPg=="

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

/***/ "ZqJU":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAABGlBMVEUAAAD/AP//QP//M///K///Sdv/OeP/M+b/QOruRN3vQN/wPOHyQObzPef0Q97tQOTuPObvQN/wPuDsQN/tQeHvQN/wPeDwQOLsP+LsPd7sQd/tP+DvQd/vQN/vP+DtQd/uP+DuQOHsQN/tQeDtQN7uQN/uP9/sP97tQN/tQN/tP9/tQeDuQd/sQODsQN7tQN/uQd7uQeDsQN/tQN/tQd/tQd/sQd/sQd7sQN7tQd/tQN7sQN/sQN7tQN7tQd/tQN7tQd7sQN7sQN7sQd/tQN/tQd7tQN7tQd/tQd/sQN7sQd/tQN/tQN7sQN/sQd7tQd/tQd/tQN/tQd7sQd/sQd/sQN/sQd7tQd7tQN7tQN7tQd/tQd/tQN/tQd8rIExGAAAAXXRSTlMAAgQFBgcJCgwPEBEUFRccHiAhKCswMjQ1Njc5P0BBR0lMUGJkaGltb3BxcnZ7fICFkpeYmZ2hoqOprK+ztLnDycrLzM/R09TV2tze4+bo7O3v8PT19vj5+vv8/f7WP6TzAAAA5klEQVQYGVXBiSICUQCG0Z8QkiF7SkIRkqXFlkxMspVdGt/7v4ZpdTtHfWOr2/nq7+uZpZ6RpWTOadJRn1HL+P51A9OlPH6brqeLdCwQ/sadkHSAp1bMxINqsyEi6R52LP3Lwq6kTwjIkICCpCpEZViBO0mnkJLB5+L6pD3Iy1SBsBQFR6YCJKRJcH0ypCAr6REWZYhAWdI5bMrgh8aQlIYjmR5gTlqHkgxTb2BJ0/ChjtHlZM5pQkWeZwhreGHr5KZB28+aPMfwXv6iz46pZbZOT62YiQfVNX8LvFwdblgaFIqENOAPSlRBxcdI7ZYAAAAASUVORK5CYII="

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

/***/ "b3gL":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMC45OTUgMTguMDA1Ij48ZyBkYXRhLW5hbWU9IlNoYXBlIDE2ODUgY29weSAyIiBmaWxsPSJub25lIiBvcGFjaXR5PSIuNTAyIj48cGF0aCBkPSJNMS4xNTUuMDAyaDE4LjY1NmExLjEzMSAxLjEzMSAwIDAxMS4wMDUgMS43MzZjLS40MDYuNjkyLTguNjA4IDE0LjUxMy05LjMwOSAxNS42OTNhMS4xNzQgMS4xNzQgMCAwMS0yLjAyMSAwQzguOTcyIDE2LjU4Mi43MjggMi43MDcuMTU1IDEuNzAzYTEuMTI0IDEuMTI0IDAgMDExLTEuNzAxeiIvPjxwYXRoIGQ9Ik00LjQwMyAzYzEuNzI3IDIuOTE2IDQuNCA3LjQxOCA2LjA5IDEwLjI2IDEuNzA0LTIuODcgNC4zNy03LjM2MyA2LjA4Ny0xMC4yNkg0LjQwM00xLjE1NSAwaDE4LjY1NmMuODY3IDAgMS41MTMuODcyIDEuMDA1IDEuNzM2LS40MDYuNjkyLTguNjA4IDE0LjUxMy05LjMwOSAxNS42OTNhMS4xNiAxLjE2IDAgMDEtMS4wMDUuNTc2IDEuMTggMS4xOCAwIDAxLTEuMDE2LS41NzZDOC45NzIgMTYuNTc5LjcyOCAyLjcwNS4xNTYgMS43LS4yNjQuOTY1LjIgMCAxLjE1NSAweiIgZmlsbD0iI2VkNDFkZiIvPjwvZz48L3N2Zz4="

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

/***/ "cjrA":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IsORw6vDrsOpIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDc1LjUgODAuMjEiPjxwYXRoIGQ9Ik0zOC42IDY2LjkxYTQuMjEgNC4yMSAwIDAxLTEuMjctLjIgNy41NyA3LjU3IDAgMDEtMi4xMi0xLjI1bC05LjA5LTguNTZhNy43NSA3Ljc1IDAgMDEwLTExLjM1bC4wOS0uMDlhOC42MSA4LjYxIDAgMDExMS43NiAwbC41NC41MS41NC0uNTFhOC42MSA4LjYxIDAgMDExMS43NyAwbC4xNC4xM2E3Ljc1IDcuNzUgMCAwMTAgMTEuMzVsLTkuMzIgOC44NmE2LjU3IDYuNTcgMCAwMS0xLjgxIDEgMy44IDMuOCAwIDAxLTEuMjMuMTF6bS02LjQ4LTIxLjMyYTYgNiAwIDAwLTQuMTcgMS42NGwtLjE0LjE0YTUuMjUgNS4yNSAwIDAwMCA3LjcybDkgOC41YTUuMzYgNS4zNiAwIDAwMS4yNC43NCAxLjY1IDEuNjUgMCAwMDEgMCA0LjEzIDQuMTMgMCAwMDEuMDUtLjU3bDkuMTgtOC43M2E1LjI1IDUuMjUgMCAwMDAtNy43MmwtLjE0LS4xM2E2LjEgNi4xIDAgMDAtOC4zMiAwbC0yLjI2IDIuMTUtMi4yNy0yLjE0YTYgNiAwIDAwLTQuMTctMS42eiIgZmlsbD0iI2ViNGQ0YiIvPjxwYXRoIGQ9Ik00Ljc1IDI2Ljc4YTEuMjQgMS4yNCAwIDAxLTEtMkwyMS4xNC42OGExLjI1IDEuMjUgMCAwMTIgMS40Nkw1Ljc1IDI2LjI0YTEuMjQgMS4yNCAwIDAxLTEgLjU0em02Ni43LjE4YTEuMjUgMS4yNSAwIDAxLTEtLjU0TDUzLjUzIDEuOTZBMS4yNTEgMS4yNTEgMCAwMTU1LjU5LjU0TDcyLjQ4IDI1YTEuMjUgMS4yNSAwIDAxLTEgMnpNMTguMjEgODAuMjJjLTEuMTkgMC01LjIxLS4yMi03LjQ2LTMtMS4zNy0xLjY3LTIuMTUtNi42Ni0yLjI5LTcuNjRMMi4wNCAzOC4wN2ExLjI1IDEuMjUgMCAwMTIuNDUtLjVsNi40MyAzMS41OGMuMzMgMi4yMyAxLjA4IDUuNjUgMS43NiA2LjQ5IDEuOCAyLjIgNS43NiAyIDUuOCAyaDQwLjQ5czMuMTQgMCA0LjgxLTEuOTVhMTAuMTkgMTAuMTkgMCAwMDEuODUtNC43Mmw1LjY3LTMxLjQ0YTEuMjUgMS4yNSAwIDExMi40Ni40NGwtNS42MyAzMS40OWExMi42NCAxMi42NCAwIDAxLTIuNDQgNmMtMi40MiAyLjc3LTYuNTIgMi44LTYuNjkgMi44SDE4LjIxem01Ni00Ny4wMWgtNzNhMS4yNSAxLjI1IDAgMTEwLTIuNWg3M2ExLjI1IDEuMjUgMCAwMTAgMi41eiIgZmlsbD0iIzBmMjEzNyIvPjwvc3ZnPg=="

/***/ }),

/***/ "d2jH":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABVlBMVEUAAAAA//+A//9V//9A//9mzP9J2/9V4/9N5v9d0f9V1f9i2P9V3f9a0v9e1/JZ2fJV2/NV1fRY0/Za1vdd2Pda0vhX0/ha1vFe1/Jc2PJb1fNd1vNc1vVa1/Vb1PVa1PFb1vFZ1fJc1fJc0/Nb0/Ra1vFa1fJc1vJc1PNb1PNa1fNb0/Nc1fFc1fJb0/Jc1PJb1PJc1fNb0/Nb1PNb1fFb1fJc0/Jc1PJb1fJb1fJb1fFc0/Jb1PJb0/Jc1PJc1PNb0/Fc1PFb0/Fb0/Jc1PJb1PJb1PJb0/Jb1PFc1PFb0/Fc0/Fb1PFb1PFb0/Fc1PJc0/Jc1PJb0/Jc0/Fb0/Fb1PFb1PJb1PJc1PJb0/Jb0/Jc1PJc1PFb1PFc1PFb0/Fc0/Jc1PJb0/Jc0/Jc0/Jc1PJb0/Fc0/Fb0/Fb1PFb1PFc0/Fc1PJb1PJb0/Jb0/Jb1PJc1PKz6kbnAAAAcXRSTlMAAQIDBAUHCQoLDA0PERMUFRgdHyEiIyUmJyosMjM1Njg8PUBGSk9QU1RVV1thYmRlZ2hqbXN0d3h5hIWKjI6QkpaXmJyfoKOlpqiptri7vcDCxsvMz9TV1tfY2dzg4eLk5+jp6uzu7/Dx8/X3+fv8/mcQpbIAAAEqSURBVBgZfcHVQgJRAEXRQ1jYgYrdgd3d3WJ3ByqO7P9/EVFHyruWoqruN7Nk0g9zMkk7J1wvk3o4cclkAwZlUvDAU64SNfQ69asTlhQvex5GZduFBsVqugfaZfNZnLhkqzoALqoVYxyG9CNnIQzhiTTFyrwmVK6oygtgxacEHRBQROGkBS/NShaANqkrBOx4lUJZiMeKAHDpV2pjfAn1ufSPFiJ2vPpH7iIRZ06l5vRfw80edCmlumNgOa84SLBQyTIWwnDcKmkE1pTEdwjBHoci3GdQq3glixYclepb9Qf7DsVw9L7C27Bbv2ZgQH8qtsGaLdIfzy2v+bI9w2mN4vhhVbal53G3EmxBo0y871x5ZDIF0zLx3PHuk0kzHDhkso7lkkl6t19Rn/b6T10wl3JWAAAAAElFTkSuQmCC"

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

/***/ "g6Dc":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAATCAMAAABIkLa5AAAAulBMVEUAAAD/AP//Vf//QP//M8z/QN/mM+boLuj/Ruj/QOrrO9jtN+3yQObrO+LsOdntQOTvOt7vQt7wPuDwQuLqQNztPeHwPeDrQN3wQOLsPd7tQN/tP+DtPtzrQd/vQd/rP9zsQN3uP+HvPt7sQd/sQN/sP+DtP97uQN/uPuDsP97sQN/uQN/sP93sQN7uQODsP97tQN/tQN/tP93rQN7tQODsQN/sP9/sP97sQeDsQN7sQODsQN7tQN/tQN+6uE20AAAAPnRSTlMAAQMEBQgKCwsMDQ4UGhscHx8hIyQqMjQ0Njg5Oj8/QURNTk9QUVVYWl1fZ2pra21vcHJzc3h5enp7e3x/gBo7jqkAAACbSURBVBgZfcGJcsEAAEXRF2KpNSilWrtYQpS2oeH+/281kUHIjHPkkLTUD0lfeiOpKcOBmW7msJBUBWq6sOBUUsAG11DEcGGkUNGHjiLv8JvV2Qd4GYWyHrQUMVYwUWgKa128ApakOmDpyoatKfMbxrrJH6GnPhxyihnAX/kIn4pL78CHTUp3GgROFT2wgaEevfh4BSW091099w8SriQAhmbtwwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gJbh":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOS4wMDYgMjkuMDA4Ij48cGF0aCBkYXRhLW5hbWU9IkZvcm1hIDEgY29weSA0IiBkPSJNLjY3NyA5Ljg4MWExLjExNyAxLjExNyAwIDExLjg2OS0yLjA1OWwxMi4zNjEgNS4yMjZMMTkuMTMxLjY3NWExLjExMiAxLjExMiAwIDExMi4wNDQuODc0TDE1Ljk2IDEzLjkwNGwxMi4zNjEgNS4yMjdhMS4xMTIgMS4xMTIgMCAxMS0uODU0IDIuMDUybC0xMi4zNzYtNS4yMjEtNS4yMSAxMi4zNjhhMS4xMTcgMS4xMTcgMCAwMS0yLjA1OS0uODY5bDUuMjEtMTIuMzY5eiIgZmlsbD0iIzgwZDBiZSIvPjwvc3ZnPg=="

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

/***/ "hahW":
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

/***/ "kQ/Y":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlT/wgALCAA7ADsBAREA/8QAGwABAAICAwAAAAAAAAAAAAAAAAQFAgcDBgj/2gAIAQEAAAAA9QAAAAR9DWtdsDvooefGbMAAAAf/xAAkEAACAgICAgICAwAAAAAAAAABAwIEBREABhIhFCIHQBMgQ//aAAgBAQABPwD9m28Vqr3nxAUqcyZyEIjxBP2J9AevZPocodj7rTxxoZHJWn5ARwti1bqitcEK14zhKdSCq69zMlHcCGajojfMZ+TMjXp4FNyj8l2VyV+jWe1sasyat014Mevx+gmsAkj/AE1DQ2OS7P3SkMqWX/lPu0snbxQQ6rYQpFa3FR0IJXL+VcGgQBnMTkDvnRM3ey8M6mw229ePywr1rFuuKz2rNZTiWLEF6IkwgfUHX9CARxXVesIovorwuNhUfOM3V41VhTJR0QZQA0SNDRPJYDAzUFHF0SsV4IEChZAVAiUVga14xI2BxfXOvKnekvE0ISviQuGNZYNgSJJDSB9wSTvfKGPoYutGrRqIqogZGKkrCoAk7OhEADZOz+3/AP/Z"

/***/ }),

/***/ "kxtJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__("vtRj");
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Select/select.style.js


const SelectStyle = external_styled_components_default.a.div.withConfig({
  displayName: "selectstyle__SelectStyle",
  componentId: "sc-64d7rz-0"
})([".reusecore__field-label{color:", ";font-size:", "px;font-weight:", ";}&.label_left{display:flex;align-items:center;.reusecore__field-label{margin-right:", "px;}}&.label_right{display:flex;flex-direction:row-reverse;align-items:center;.reusecore__field-label{margin-left:", "px;}}&.label_top{.reusecore__field-label{display:flex;margin-bottom:", "px;}}&.label_bottom{.reusecore__field-label{display:flex;margin-top:", "px;}}"], Object(external_styled_system_["themeGet"])('colors.labelColor', '#767676'), Object(external_styled_system_["themeGet"])('fontSizes.4', '16'), Object(external_styled_system_["themeGet"])('fontWeights.4', '500'), Object(external_styled_system_["themeGet"])('space.3', '10'), Object(external_styled_system_["themeGet"])('space.3', '10'), Object(external_styled_system_["themeGet"])('space.2', '8'), Object(external_styled_system_["themeGet"])('space.2', '8'));
SelectStyle.displayName = 'SelectStyle';
SelectStyle.defaultProps = {
  as: 'div'
};
/* harmony default export */ var select_style = (SelectStyle);
// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Select/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Select = (_ref) => {
  let {
    className,
    labelText,
    labelPosition
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "labelText", "labelPosition"]);

  // Add all classes to an array
  const addAllClasses = ['reusecore__select']; // Add label position class

  if (labelPosition) {
    addAllClasses.push(`label_${labelPosition}`);
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  }

  const LabelField = labelText && __jsx("span", {
    className: "reusecore__field-label"
  }, labelText);

  const position = labelPosition || 'top';
  return __jsx(select_style, {
    className: addAllClasses.join(' ')
  }, position === 'left' || position === 'right' || position === 'top' ? LabelField : '', __jsx(external_react_select_default.a, _extends({
    className: "select-field__wrapper",
    classNamePrefix: "select"
  }, props)), position === 'bottom' && LabelField);
};

Select.defaultProps = {
  as: 'div',
  labelPosition: 'top'
};
/* harmony default export */ var components_Select = __webpack_exports__["a"] = (Select);

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

/***/ "pi7v":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/icomoon/checkmark");

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

/***/ "sZWo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (initialValue => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const toggler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setValue(value => !value), []);
  return [value, toggler];
});

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

/***/ "vMZa":
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

// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/theme/hosting/colors.js
const colors = {
  transparent: 'transparent',
  // 0
  black: '#000000',
  // 1
  white: '#ffffff',
  // 2
  headingColor: '#0f2137',
  textColor: '#5d646d',
  // 3
  labelColor: '#767676',
  // 4
  inactiveField: '#f2f2f2',
  // 5
  inactiveButton: '#b7dbdd',
  // 6
  inactiveIcon: '#EBEBEB',
  // 7
  primary: '#eb4d4b',
  // 8
  primaryHover: '#eb4d4b',
  // 9
  secondary: '#ff5b60',
  // 10
  secondaryHover: '#FF282F',
  // 11
  yellow: '#fdb32a',
  // 12
  yellowHover: '#F29E02',
  // 13
  primaryBoxShadow: '0px 8px 20px -6px rgba(235,77,75,0.6)'
};
/* harmony default export */ var hosting_colors = (colors);
// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/theme/hosting/index.js

const hostingTheme = {
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
  colors: hosting_colors,
  colorStyles: {
    primary: {
      color: hosting_colors.primary,
      border: '1px solid',
      borderColor: hosting_colors.primary,
      backgroundColor: hosting_colors.transparent,
      '&:hover': {
        color: hosting_colors.white,
        backgroundColor: hosting_colors.primaryHover,
        borderColor: hosting_colors.primaryHover,
        boxShadow: hosting_colors.primaryBoxShadow
      }
    },
    secondary: {
      color: hosting_colors.secondary,
      borderColor: hosting_colors.secondary,
      '&:hover': {
        color: hosting_colors.secondaryHover,
        borderColor: hosting_colors.secondaryHover
      }
    },
    warning: {
      color: hosting_colors.yellow,
      borderColor: hosting_colors.yellow,
      '&:hover': {
        color: hosting_colors.yellowHover,
        borderColor: hosting_colors.yellowHover
      }
    },
    error: {
      color: hosting_colors.secondaryHover,
      borderColor: hosting_colors.secondaryHover,
      '&:hover': {
        color: hosting_colors.secondary,
        borderColor: hosting_colors.secondary
      }
    },
    primaryWithBg: {
      color: hosting_colors.white,
      backgroundColor: hosting_colors.primary,
      borderColor: hosting_colors.primary,
      '&:hover': {
        backgroundColor: hosting_colors.primaryHover,
        borderColor: hosting_colors.primaryHover,
        boxShadow: hosting_colors.primaryBoxShadow
      }
    },
    secondaryWithBg: {
      color: hosting_colors.white,
      backgroundColor: hosting_colors.secondary,
      borderColor: hosting_colors.secondary,
      '&:hover': {
        backgroundColor: hosting_colors.secondaryHover,
        borderColor: hosting_colors.secondaryHover
      }
    },
    warningWithBg: {
      color: hosting_colors.white,
      backgroundColor: hosting_colors.yellow,
      borderColor: hosting_colors.yellow,
      '&:hover': {
        backgroundColor: hosting_colors.yellowHover,
        borderColor: hosting_colors.yellowHover
      }
    },
    errorWithBg: {
      color: hosting_colors.white,
      backgroundColor: hosting_colors.secondaryHover,
      borderColor: hosting_colors.secondaryHover,
      '&:hover': {
        backgroundColor: hosting_colors.secondary,
        borderColor: hosting_colors.secondary
      }
    },
    transparentBg: {
      backgroundColor: hosting_colors.white,
      '&:hover': {
        backgroundColor: hosting_colors.white
      }
    }
  },
  buttonStyles: {
    textButton: {
      border: 0,
      color: hosting_colors.primary,
      padding: 0,
      height: 'auto',
      backgroundColor: hosting_colors.transparent
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      backgroundColor: hosting_colors.transparent
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
// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/FeatureBlock/index.js + 1 modules
var FeatureBlock = __webpack_require__("b4OD");

// CONCATENATED MODULE: ./containers/Hosting/hosting.style.js



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
              color: #eb4d4b;
            }
            &:before{
              content: '';
              width: 7px;
              height: 7px;
              background: #eb4d4b;
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
              color: #eb4d4b;
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
        color: #eb4d4b;
        transform: rotate(45deg);
        display: block;
      }
    }
  }
  

  /* Modal default style */
  button.modalCloseBtn {
    color: ${Object(external_styled_system_["themeGet"])('colors.white', '#ffffff')} !important;

    &.alt {
      background-color: ${Object(external_styled_system_["themeGet"])('colors.primary', '#5268db')} !important;
      box-shadow: 0px 9px 20px -5px rgba(82, 104, 219, 0.57) !important;
    }
  }
`;
const ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "hostingstyle__ContentWrapper",
  componentId: "r6jwr8-0"
})(["overflow:hidden;.sticky-nav-active{.hosting_navbar{background:#fff;box-shadow:0px 3px 8px 0px rgba(43,83,135,0.08);padding:0;}}.hosting_navbar{position:fixed;top:0;left:0;width:100%;transition:0.35s ease-in-out;padding:15px 0;.main_menu{margin-right:40px;li{display:inline-block;padding-left:13px;padding-right:13px;&:first-child{padding-left:0;}&:last-child{padding-right:0;}&.is-current{a{color:#eb4d4b;}}a{padding:5px;font-size:16px;font-weight:400;color:#343d48;transition:0.15s ease-in-out;&:hover{color:#eb4d4b;}}}@media (max-width:990px){display:none;}}.navbar_button{@media (max-width:990px){display:none;}}.reusecore-drawer__handler{@media (min-width:991px){display:none !important;}.hamburgMenu__bar{> span{}}}}.info-sec-container{@media (min-width:768px){position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:-1;}@media (max-width:768px) and (min-width:768px){top:40%;}@media (max-width:767px){padding-top:40px;}}.accordion_item{border-bottom:1px solid #ebebeb;border-top:0;}.accordion_title{padding:23px 30px;@media (max-width:575px){padding-left:0;padding-right:0;}}.accordion_body{padding:0 30px 23px 30px;}.service_section{background:linear-gradient( to bottom,#ffffff 0%,#f9fbfd 50%,#f9fbfd 100% );.service_col{border-width:1px 0 0 1px;border-style:solid;border-color:#f1f4f6;&:nth-child(3n + 3),&:last-child{border-right-width:1px;}&:nth-last-child(-n + 3){border-bottom-width:1px;}.service_item{position:relative;height:100%;transition:0.2s ease-in-out;&:hover{box-shadow:0 40px 90px -30px rgba(39,79,117,0.2);z-index:1;}&:before{content:'';position:absolute;width:85%;height:0;bottom:0;left:50%;display:block;pointer-events:0;transform:translateX(-50%);}&:hover{&:before{box-shadow:0px 0px 60px 0px rgba(39,79,117,0.2);}}img{width:80px;height:70px;}}}}@media (max-width:990px){.glide__slide--active .pricing_table{box-shadow:0px 0px 30px rgba(0,0,0,0.05);border:0;}}"]);
const FeatureItem = external_styled_components_default()(FeatureBlock["a" /* default */]).withConfig({
  displayName: "hostingstyle__FeatureItem",
  componentId: "r6jwr8-1"
})(["position:relative;padding:50px 30px;border:1px solid #f2f4f7;border-radius:5px;background-color:#fff;transition:0.35s ease-in-out;@media (max-width:768px) and (min-width:768px){padding:30px 20px;}@media (max-width:575px){padding:40px 25px;}&:before{content:'';position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;opacity:0;background:linear-gradient( 138deg,rgb(249,212,35) 0%,rgb(255,78,80) 100% );transition:0.35s ease-in-out;}& > div{position:relative;}h2,p{transition:0.35s ease-in-out;}.hover-shape{width:20px;height:auto;position:absolute;z-index:1;opacity:0;pointer-events:none;transition:0.6s cubic-bezier(0.215,0.61,0.355,1);transform:rotate(260deg);}.hover-shape-1{left:0;top:20px;}.hover-shape-2{right:29%;top:0;}.hover-shape-3{right:0;bottom:35%;}.hover-shape-4{right:30%;bottom:0;}.hover-shape-5{left:0;bottom:30%;}.icon__wrapper{margin-bottom:40px;@media (max-width:768px) and (min-width:768px){margin-bottom:30px;}@media (max-width:575px){margin-bottom:25px;}i{line-height:1;font-size:65px;transition:0.35s ease-in-out;@media (max-width:768px) and (min-width:768px){font-size:50px;}&.violate{color:#8569ff;}&.yellow{color:#ffb129;}&.green{color:#18d379;}}}.button__wrapper{a{color:#c2cbd6;font-size:24px;transition:0.35s ease-in-out;@media (max-width:768px) and (min-width:768px){font-size:20px;}@media (max-width:575px){font-size:22px;}}}&:hover{background-color:#eb4d4b;&:before{opacity:0.37;}.hover-shape-1{left:-40px;top:20px;}.hover-shape-2{right:29%;top:-47px;}.hover-shape-3{right:-27px;bottom:35%;}.hover-shape-4{right:30%;bottom:-60px;}.hover-shape-5{left:-35px;bottom:30%;}.hover-shape{transform:rotate(0);opacity:1;}h2,p{color:#fff;}.icon__wrapper{i{color:#fff;}}.button__wrapper{a{color:#fff;}}}"]);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/css/style.js
var style = __webpack_require__("H4oa");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Navbar/index.js + 1 modules
var Navbar = __webpack_require__("HqwP");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Drawer/index.js
var Drawer = __webpack_require__("KfK3");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Button/index.js + 4 modules
var Button = __webpack_require__("D7Vo");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/UIElements/Logo/index.js
var Logo = __webpack_require__("cIfr");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Box/index.js
var Box = __webpack_require__("l54f");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/HamburgMenu/index.js + 1 modules
var HamburgMenu = __webpack_require__("dB7M");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("H3JQ");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/contexts/DrawerContext.js
var DrawerContext = __webpack_require__("8qGZ");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/icon1.svg
var icon1 = __webpack_require__("Xzzn");
var icon1_default = /*#__PURE__*/__webpack_require__.n(icon1);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/icon2.svg
var icon2 = __webpack_require__("SOF9");
var icon2_default = /*#__PURE__*/__webpack_require__.n(icon2);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/icon3.svg
var icon3 = __webpack_require__("cjrA");
var icon3_default = /*#__PURE__*/__webpack_require__.n(icon3);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/icon4.svg
var icon4 = __webpack_require__("We7S");
var icon4_default = /*#__PURE__*/__webpack_require__.n(icon4);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/icon5.svg
var icon5 = __webpack_require__("9e9t");
var icon5_default = /*#__PURE__*/__webpack_require__.n(icon5);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/icon6.svg
var icon6 = __webpack_require__("ISvA");
var icon6_default = /*#__PURE__*/__webpack_require__.n(icon6);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/author-1.jpg
var author_1 = __webpack_require__("kQ/Y");
var author_1_default = /*#__PURE__*/__webpack_require__.n(author_1);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/author-2.jpg
var author_2 = __webpack_require__("5RMd");
var author_2_default = /*#__PURE__*/__webpack_require__.n(author_2);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/author-3.jpg
var author_3 = __webpack_require__("hahW");
var author_3_default = /*#__PURE__*/__webpack_require__.n(author_3);

// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/data/Hosting/images.js
// Service Icons





 //Testimonial reviewers image





// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/data/Hosting/data.js
 // Feature Section Content

const FEATURES_DATA = [{
  title: 'Domain Registration & Web Hosting',
  description: 'We have support team for 24/7 operation. They provide help and ongoing assistance at any time.',
  icon: 'flaticon-trophy violate',
  animation: true
}, {
  title: 'Website Design & Development',
  description: 'Transferring from another host? Our expert support team is standing by to transfer your site.',
  icon: 'flaticon-startup yellow',
  animation: true
}, {
  title: 'Dedicated Server & Cloud Hosting',
  description: 'LiteSpeed Web Server is a high-performance HTTP server and known for its high performance.',
  icon: 'flaticon-creative green',
  animation: true
}]; // FAQ Section Content

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
}]; // Service Section Content

const SERVICES_DATA = [{
  title: 'Development Server ',
  description: 'Get Lightspeed Development Server for your website and fly in the web',
  icon: `${icon1_default.a}`
}, {
  title: 'Web Protection',
  description: 'Best Protection and some tools are provided with our Web servers .',
  icon: `${icon2_default.a}`
}, {
  title: 'E-commerce Shop',
  description: 'You can build any kind of E-commerce Shop with payment security tools',
  icon: `${icon3_default.a}`
}, {
  title: 'Money Back Guarantee',
  description: 'We have provided 30 days money back guarantee for our customer',
  icon: `${icon4_default.a}`
}, {
  title: 'Client Satisfaction',
  description: 'Client Satisfaction is our first priority and We are best at it',
  icon: `${icon5_default.a}`
}, {
  title: '24/7 Online Support',
  description: 'A Dedicated support team is always ready to provide best support ',
  icon: `${icon6_default.a}`
}];
const MENU_ITEMS = [{
  label: 'Home',
  path: '#banner_section',
  offset: '70'
}, {
  label: 'Feature',
  path: '#feature_section',
  offset: '70'
}, {
  label: 'Service',
  path: '#service_section',
  offset: '70'
}, {
  label: 'Testimonial',
  path: '#testimonial_section',
  offset: '70'
}, {
  label: 'FAQ',
  path: '#faq_section',
  offset: '70'
}, {
  label: 'Contact',
  path: '#contact_section',
  offset: '70'
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
const TESTIMONIALS = [{
  review: 'Best working experience  with this amazing team & in future, we want to work together',
  name: 'Jon Doe',
  designation: 'CEO of Dell Co.',
  avatar: `${author_1_default.a}`
}, {
  review: 'Impressed with master class support of the team and really look forward for the future.',
  name: 'Jon Doe',
  designation: 'Co Founder of IBM',
  avatar: `${author_2_default.a}`
}, {
  review: 'I have bought more than 10 themes on ThemeForest, and this is the first one I review.',
  name: 'Jeny Doe',
  designation: 'Manager of Hp co.',
  avatar: `${author_3_default.a}`
}];
const DOMAIN_NAMES = [{
  label: '.com',
  value: 'com'
}, {
  label: '.net',
  value: 'net'
}, {
  label: '.org',
  value: 'org'
}, {
  label: '.co',
  value: 'co'
}, {
  label: '.edu',
  value: 'edu'
}, {
  label: '.me',
  value: 'me'
}];
const DOMAIN_PRICE = [{
  content: '.com $9.26'
}, {
  content: '.sg $7.91'
}, {
  content: '.space $12.54'
}, {
  content: '.info $9.13'
}, {
  content: '& much more',
  url: '#'
}];
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/ScrollSpyMenu/index.js
var ScrollSpyMenu = __webpack_require__("8obO");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/logo.png
var logo = __webpack_require__("Uq3F");
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// CONCATENATED MODULE: ./containers/Hosting/Navbar/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }















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

  return __jsx(Navbar["a" /* default */], navbarStyle, __jsx(Container["a" /* default */], null, __jsx(Box["a" /* default */], row, __jsx(Logo["a" /* default */], {
    href: "#",
    logoSrc: logo_default.a,
    title: "Agency",
    logoStyle: logoStyle
  }), __jsx(Box["a" /* default */], menuWrapper, __jsx(ScrollSpyMenu["a" /* default */], {
    className: "main_menu",
    menuItems: MENU_ITEMS,
    offset: -70
  }), __jsx(link_default.a, {
    href: "#"
  }, __jsx("a", {
    className: "navbar_button"
  }, __jsx(Button["a" /* default */], _extends({}, button, {
    title: "BUY NOW"
  })))), __jsx(Drawer["a" /* default */], {
    width: "420px",
    placement: "right",
    drawerHandler: __jsx(HamburgMenu["a" /* default */], {
      barColor: "#eb4d4b"
    }),
    open: state.isOpen,
    toggleHandler: toggleHandler
  }, __jsx(ScrollSpyMenu["a" /* default */], {
    className: "mobile_menu",
    menuItems: MENU_ITEMS,
    drawerClose: true,
    offset: -100
  }), __jsx(link_default.a, {
    href: "#"
  }, __jsx("a", {
    className: "navbar_drawer_button"
  }, __jsx(Button["a" /* default */], _extends({}, button, {
    title: "BUY NOW"
  })))))))));
};

Navbar_Navbar.defaultProps = {
  navbarStyle: {
    className: 'hosting_navbar',
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
    fontWeight: '600',
    color: 'white',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'primaryWithBg',
    minHeight: 'auto',
    height: `${1}`
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center'
  }
};
/* harmony default export */ var Hosting_Navbar = (Navbar_Navbar);
// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Text/index.js
var Text = __webpack_require__("4Af6");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Heading/index.js
var Heading = __webpack_require__("bHe8");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/shape-1.svg
var shape_1 = __webpack_require__("L+Py");
var shape_1_default = /*#__PURE__*/__webpack_require__.n(shape_1);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/shape-2.svg
var shape_2 = __webpack_require__("MLGx");
var shape_2_default = /*#__PURE__*/__webpack_require__.n(shape_2);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/shape-3.svg
var shape_3 = __webpack_require__("b3gL");
var shape_3_default = /*#__PURE__*/__webpack_require__.n(shape_3);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/shape-4.svg
var shape_4 = __webpack_require__("KN5u");
var shape_4_default = /*#__PURE__*/__webpack_require__.n(shape_4);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/shape-5.svg
var shape_5 = __webpack_require__("gJbh");
var shape_5_default = /*#__PURE__*/__webpack_require__.n(shape_5);

// CONCATENATED MODULE: ./containers/Hosting/Features/index.js
var Features_jsx = external_react_default.a.createElement;

function Features_extends() { Features_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Features_extends.apply(this, arguments); }
















const FeatureSection = ({
  sectionWrapper,
  row,
  col,
  secTitleWrapper,
  secHeading,
  secText,
  featureItemHeading,
  featureItemDes
}) => {
  return Features_jsx(Box["a" /* default */], sectionWrapper, Features_jsx(Container["a" /* default */], null, Features_jsx(Box["a" /* default */], secTitleWrapper, Features_jsx(Fade_default.a, {
    bottom: true,
    cascade: true
  }, Features_jsx(Text["a" /* default */], Features_extends({}, secText, {
    content: "OUR SERVICES"
  })), Features_jsx(Heading["a" /* default */], Features_extends({}, secHeading, {
    content: "Our Featured Service that We Provide"
  })))), Features_jsx(Box["a" /* default */], row, FEATURES_DATA.map((featureItem, index) => Features_jsx(Box["a" /* default */], Features_extends({}, col, {
    key: `feature-${index}`
  }), featureItem.animation ? Features_jsx(Fade_default.a, {
    bottom: true,
    delay: index * 120
  }, Features_jsx(FeatureItem, {
    title: Features_jsx(Heading["a" /* default */], Features_extends({}, featureItemHeading, {
      content: featureItem.title
    })),
    description: Features_jsx(Text["a" /* default */], Features_extends({}, featureItemDes, {
      content: featureItem.description
    })),
    icon: Features_jsx("i", {
      className: featureItem.icon
    }),
    additionalContent: Features_jsx(external_react_default.a.Fragment, null, Features_jsx("img", {
      className: "hover-shape-1 hover-shape",
      src: shape_1_default.a,
      alt: "Shape One"
    }), Features_jsx("img", {
      className: "hover-shape-2 hover-shape",
      src: shape_2_default.a,
      alt: "Shape Two"
    }), Features_jsx("img", {
      className: "hover-shape-3 hover-shape",
      src: shape_3_default.a,
      alt: "Shape Three"
    }), Features_jsx("img", {
      className: "hover-shape-4 hover-shape",
      src: shape_4_default.a,
      alt: "Shape Four"
    }), Features_jsx("img", {
      className: "hover-shape-5 hover-shape",
      src: shape_5_default.a,
      alt: "Shape Five"
    })),
    button: Features_jsx(link_default.a, {
      href: "#"
    }, Features_jsx("a", {
      "aria-label": `link-${index}`
    }, Features_jsx("i", {
      className: "flaticon-next"
    })))
  })) : Features_jsx(FeatureItem, {
    title: Features_jsx(Heading["a" /* default */], Features_extends({}, featureItemHeading, {
      content: featureItem.title
    })),
    description: Features_jsx(Text["a" /* default */], Features_extends({}, featureItemDes, {
      content: featureItem.description
    })),
    icon: Features_jsx("i", {
      className: featureItem.icon
    }),
    additionalContent: Features_jsx(external_react_default.a.Fragment, null, Features_jsx("img", {
      className: "hover-shape-1 hover-shape",
      src: shape_1_default.a,
      alt: "Shape One"
    }), Features_jsx("img", {
      className: "hover-shape-2 hover-shape",
      src: shape_2_default.a,
      alt: "Shape Two"
    }), Features_jsx("img", {
      className: "hover-shape-3 hover-shape",
      src: shape_3_default.a,
      alt: "Shape Three"
    }), Features_jsx("img", {
      className: "hover-shape-4 hover-shape",
      src: shape_4_default.a,
      alt: "Shape Four"
    }), Features_jsx("img", {
      className: "hover-shape-5 hover-shape",
      src: shape_5_default.a,
      alt: "Shape Five"
    })),
    button: Features_jsx(link_default.a, {
      href: "#"
    }, Features_jsx("a", {
      "aria-label": `link-${index}`
    }, Features_jsx("i", {
      className: "flaticon-next"
    })))
  }))))));
};

FeatureSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '80px', '80px'],
    pb: ['60px', '80px', '80px', '80px'],
    id: 'feature_section'
  },
  secTitleWrapper: {
    mb: ['50px', '60px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#eb4d4b',
    mb: '10px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  col: {
    className: 'col',
    width: [1, 1 / 2, 1 / 3, 1 / 3],
    pr: '15px',
    pl: '15px',
    mb: '30px'
  },
  featureItemHeading: {
    fontSize: ['18px', '18px', '16px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '10px'],
    letterSpacing: '-0.020em',
    maxWidth: ['auto', 'auto', 'auto', '180px']
  },
  featureItemDes: {
    fontSize: ['14px', '14px', '14px', '15px'],
    lineHeight: '1.75',
    color: '#343d48cc',
    mb: ['20px', '20px', '20px', '20px']
  }
};
/* harmony default export */ var Features = (FeatureSection);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Card/index.js
var Card = __webpack_require__("rZdf");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Image/index.js
var Image = __webpack_require__("KFN4");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/info1.png
var info1 = __webpack_require__("W+gY");
var info1_default = /*#__PURE__*/__webpack_require__.n(info1);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/info2.png
var info2 = __webpack_require__("9ihO");
var info2_default = /*#__PURE__*/__webpack_require__.n(info2);

// CONCATENATED MODULE: ./containers/Hosting/Info/index.js
var Info_jsx = external_react_default.a.createElement;

function Info_extends() { Info_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Info_extends.apply(this, arguments); }














const InfoSection = ({
  sectionWrapper,
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
  imageWrapperTwo
}) => {
  return Info_jsx(Box["a" /* default */], sectionWrapper, Info_jsx(Container["a" /* default */], null, Info_jsx(Box["a" /* default */], row, Info_jsx(Box["a" /* default */], Info_extends({}, col, textArea), Info_jsx(Fade_default.a, {
    bottom: true,
    cascade: true
  }, Info_jsx(Heading["a" /* default */], Info_extends({}, title, {
    content: "Increase your website growth with high performance servers"
  })), Info_jsx(Text["a" /* default */], Info_extends({}, description, {
    content: "For Enhanced performance we use LiteSpeed Web Server, HTTP/2, PHP7. We make your website faster, which will help you to increase search ranking!."
  })), Info_jsx(Box["a" /* default */], null, Info_jsx(link_default.a, {
    href: "#"
  }, Info_jsx("a", null, Info_jsx(Button["a" /* default */], Info_extends({}, button, {
    title: "HOW IT WORKS"
  }))))))))), Info_jsx(Container["a" /* default */], {
    fullWidth: true,
    noGutter: true,
    className: "info-sec-container"
  }, Info_jsx(Box["a" /* default */], Info_extends({}, row, imageAreaRow), Info_jsx(Box["a" /* default */], Info_extends({}, col, imageArea), Info_jsx(Card["a" /* default */], Info_extends({}, imageWrapper, imageWrapperOne), Info_jsx(Fade_default.a, {
    right: true
  }, Info_jsx(Image["a" /* default */], {
    src: info1_default.a,
    alt: "Info Image One"
  }))), Info_jsx(Card["a" /* default */], Info_extends({}, imageWrapper, imageWrapperTwo), Info_jsx(Fade_default.a, {
    bottom: true
  }, Info_jsx(Image["a" /* default */], {
    src: info2_default.a,
    alt: "Info Image Two"
  })))))));
};

InfoSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['0px', '0px', '0px', '0px', '80px'],
    pb: ['60px', '80px', '40px', '80px', '80px'],
    id: 'info_section'
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
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
    width: ['100%', '100%', '50%'],
    flexBox: true,
    flexDirection: 'row-reverse'
  },
  imageWrapper: {
    boxShadow: 'none'
  },
  imageWrapperOne: {
    ml: '-200px'
  },
  imageWrapperTwo: {
    alignSelf: 'flex-end',
    mb: '-60px'
  },
  title: {
    fontSize: ['30px', '38px', '38px', '48px', '48px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px'
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px'
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    height: `{5}`
  }
};
/* harmony default export */ var Info = (InfoSection);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/circle.png
var circle = __webpack_require__("SSas");
var circle_default = /*#__PURE__*/__webpack_require__.n(circle);

// CONCATENATED MODULE: ./containers/Hosting/Domain/index.js
var Domain_jsx = external_react_default.a.createElement;

function Domain_extends() { Domain_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Domain_extends.apply(this, arguments); }












const DomainSection = ({
  sectionWrapper,
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea
}) => {
  return Domain_jsx(Box["a" /* default */], sectionWrapper, Domain_jsx(Container["a" /* default */], null, Domain_jsx(Box["a" /* default */], row, Domain_jsx(Box["a" /* default */], Domain_extends({}, col, imageArea), Domain_jsx(Image["a" /* default */], {
    src: circle_default.a,
    alt: "Domain Image"
  })), Domain_jsx(Box["a" /* default */], Domain_extends({}, col, textArea), Domain_jsx(Fade_default.a, {
    bottom: true,
    cascade: true
  }, Domain_jsx(Heading["a" /* default */], Domain_extends({}, title, {
    content: "Available domain extension with your custom name"
  })), Domain_jsx(Text["a" /* default */], Domain_extends({}, description, {
    content: "You can check the domain avaibility by our domain tool and choose your desired domain without any hagitation if available."
  })), Domain_jsx(Box["a" /* default */], null, Domain_jsx(link_default.a, {
    href: "#"
  }, Domain_jsx("a", null, Domain_jsx(Button["a" /* default */], Domain_extends({}, button, {
    title: "EXPLORE MORE"
  }))))))))));
};

DomainSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['0', '0', '40px', '80px'],
    pb: ['40px', '40px', '80px', '80px']
  },
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
    fontSize: ['26px', '38px', '38px', '48px', '48px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px'
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
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg'
  }
};
/* harmony default export */ var Domain = (DomainSection);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/pay-card.png
var pay_card = __webpack_require__("ERjp");
var pay_card_default = /*#__PURE__*/__webpack_require__.n(pay_card);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/pay-logo.png
var pay_logo = __webpack_require__("MSbZ");
var pay_logo_default = /*#__PURE__*/__webpack_require__.n(pay_logo);

// CONCATENATED MODULE: ./containers/Hosting/Payment/index.js
var Payment_jsx = external_react_default.a.createElement;

function Payment_extends() { Payment_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Payment_extends.apply(this, arguments); }













const PaymentSection = ({
  sectionWrapper,
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
  imageOne,
  imageTwo
}) => {
  return Payment_jsx(Box["a" /* default */], sectionWrapper, Payment_jsx(Container["a" /* default */], null, Payment_jsx(Box["a" /* default */], row, Payment_jsx(Box["a" /* default */], Payment_extends({}, col, textArea), Payment_jsx(Fade_default.a, {
    bottom: true,
    cascade: true
  }, Payment_jsx(Heading["a" /* default */], Payment_extends({}, title, {
    content: "We have supported all payment gateways on domain hosting"
  })), Payment_jsx(Text["a" /* default */], Payment_extends({}, description, {
    content: "You can pay your bills with your desired payment system. No pain of using a specific credit card for bill payments"
  })), Payment_jsx(Box["a" /* default */], null, Payment_jsx(link_default.a, {
    href: "#"
  }, Payment_jsx("a", null, Payment_jsx(Button["a" /* default */], Payment_extends({}, button, {
    title: "LEARN MORE"
  }))))))), Payment_jsx(Box["a" /* default */], Payment_extends({}, col, imageArea), Payment_jsx(Fade_default.a, {
    right: true
  }, Payment_jsx(Image["a" /* default */], Payment_extends({}, imageOne, {
    src: pay_card_default.a,
    alt: "Card Image"
  }))), Payment_jsx(Fade_default.a, {
    bottom: true
  }, Payment_jsx(Image["a" /* default */], Payment_extends({}, imageTwo, {
    src: pay_logo_default.a,
    alt: "Payment logos"
  })))))));
};

PaymentSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '80px', '80px'],
    pb: ['40px', '40px', '40px', '80px']
  },
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
    width: ['100%', '100%', '55%', '50%', '42%'],
    mb: ['40px', '40px', '0', '0', '0']
  },
  imageArea: {
    width: ['100%', '100%', '45%', '50%', '58%']
  },
  title: {
    fontSize: ['26px', '38px', '38px', '48px', '48px'],
    fontWeight: '300',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '20px'
  },
  description: {
    fontSize: '16px',
    color: 'textColor',
    lineHeight: '1.75',
    mb: '33px'
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: 'white',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg'
  },
  imageOne: {
    mb: '40px',
    ml: 'auto',
    mr: 'auto'
  },
  imageTwo: {
    ml: 'auto',
    mr: 'auto'
  }
};
/* harmony default export */ var Payment = (PaymentSection);
// EXTERNAL MODULE: external "react-reveal/Zoom"
var Zoom_ = __webpack_require__("wtZI");
var Zoom_default = /*#__PURE__*/__webpack_require__.n(Zoom_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/badge.png
var badge = __webpack_require__("XRS6");
var badge_default = /*#__PURE__*/__webpack_require__.n(badge);

// CONCATENATED MODULE: ./containers/Hosting/Guarantee/index.js
var Guarantee_jsx = external_react_default.a.createElement;

function Guarantee_extends() { Guarantee_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Guarantee_extends.apply(this, arguments); }











const GuaranteeSection = ({
  sectionWrapper,
  row,
  title,
  description,
  textArea,
  imageArea,
  ImageOne
}) => {
  return Guarantee_jsx(Box["a" /* default */], sectionWrapper, Guarantee_jsx(Container["a" /* default */], null, Guarantee_jsx(Box["a" /* default */], row, Guarantee_jsx(Box["a" /* default */], textArea, Guarantee_jsx(Fade_default.a, {
    bottom: true,
    cascade: true
  }, Guarantee_jsx(Heading["a" /* default */], Guarantee_extends({}, title, {
    content: "30 Days Money Back Guarantee"
  })), Guarantee_jsx(Text["a" /* default */], Guarantee_extends({}, description, {
    content: "We have provided 30 Days Money Back Guarantee in case of dissatisfaction with our product. We care for our customers and their values. "
  }))))), Guarantee_jsx(Box["a" /* default */], row, Guarantee_jsx(Box["a" /* default */], imageArea, Guarantee_jsx(Zoom_default.a, null, Guarantee_jsx(Image["a" /* default */], Guarantee_extends({}, ImageOne, {
    src: badge_default.a,
    alt: "Guarantee"
  })))))));
};

GuaranteeSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['0px', '0px', '0px', '80px'],
    pb: ['0px', '0px', '0px', '25px']
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  textArea: {
    width: [1, 1, '65%', 1 / 2],
    mb: ['40px', '50px', '60px', '80px']
  },
  imageArea: {
    width: [1, 1, '40%', 1, 1 / 2]
  },
  title: {
    fontSize: ['28px', '30px', '32px', '36px', '36px'],
    fontWeight: '300',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '20px',
    textAlign: 'center'
  },
  description: {
    fontSize: ['15px', '15px', '16px', '16px', '16px'],
    color: 'textColor',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center'
  },
  ImageOne: {
    ml: 'auto',
    mr: 'auto'
  }
};
/* harmony default export */ var Guarantee = (GuaranteeSection);
// CONCATENATED MODULE: ./containers/Hosting/Services/index.js
var Services_jsx = external_react_default.a.createElement;

function Services_extends() { Services_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Services_extends.apply(this, arguments); }











const ServicesSection = ({
  sectionWrapper,
  row,
  col,
  secTitleWrapper,
  secHeading,
  secText,
  featureItemHeading,
  featureItemDes,
  featureBlockStyle,
  iconStyle,
  contentStyle
}) => {
  return Services_jsx(Box["a" /* default */], sectionWrapper, Services_jsx(Container["a" /* default */], null, Services_jsx(external_react_default.a.Fragment, null, Services_jsx(Box["a" /* default */], secTitleWrapper, Services_jsx(Fade_default.a, {
    bottom: true,
    cascade: true
  }, Services_jsx(Text["a" /* default */], Services_extends({}, secText, {
    content: "OUR SERVICES"
  })), Services_jsx(Heading["a" /* default */], Services_extends({}, secHeading, {
    content: "What Featured Service that We Provide"
  })))), Services_jsx(Box["a" /* default */], row, SERVICES_DATA.map((featureItem, index) => Services_jsx(Box["a" /* default */], Services_extends({}, col, {
    key: `service-${index}`
  }), Services_jsx(FeatureBlock["a" /* default */], {
    wrapperStyle: featureBlockStyle,
    iconStyle: iconStyle,
    contentStyle: contentStyle,
    title: Services_jsx(Heading["a" /* default */], Services_extends({}, featureItemHeading, {
      content: featureItem.title
    })),
    description: Services_jsx(Text["a" /* default */], Services_extends({}, featureItemDes, {
      content: featureItem.description
    })),
    icon: Services_jsx(Image["a" /* default */], {
      src: featureItem.icon,
      alt: `icon-${index}`
    })
  })))))));
};

ServicesSection.defaultProps = {
  sectionWrapper: {
    id: 'service_section',
    as: 'section',
    pt: ['60px', '80px', '80px', '80px'],
    pb: ['60px', '80px', '80px', '100px'],
    className: 'service_section',
    id: 'service_section'
  },
  secTitleWrapper: {
    mb: ['50px', '60px', '60px', '75px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#eb4d4b',
    mb: '10px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap'
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    className: 'service_col',
    bg: '#fff'
  },
  featureBlockStyle: {
    p: '45px 55px',
    className: 'service_item'
  },
  iconStyle: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    mb: '45px'
  },
  contentStyle: {
    textAlign: 'center'
  },
  featureItemHeading: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: '20px',
    letterSpacing: '-0.020em'
  },
  featureItemDes: {
    fontSize: '15px',
    lineHeight: '1.84',
    color: '#343d48cc',
    mb: '0'
  }
};
/* harmony default export */ var Services = (ServicesSection);
// EXTERNAL MODULE: external "react-icons-kit"
var external_react_icons_kit_ = __webpack_require__("Oi65");
var external_react_icons_kit_default = /*#__PURE__*/__webpack_require__.n(external_react_icons_kit_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Input/index.js + 1 modules
var Input = __webpack_require__("olOc");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Select/index.js + 1 modules
var Select = __webpack_require__("kxtJ");

// EXTERNAL MODULE: external "react-particles-js"
var external_react_particles_js_ = __webpack_require__("INZR");
var external_react_particles_js_default = /*#__PURE__*/__webpack_require__.n(external_react_particles_js_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/particles/particle-1.png
var particle_1 = __webpack_require__("J4YY");
var particle_1_default = /*#__PURE__*/__webpack_require__.n(particle_1);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/particles/particle-2.png
var particle_2 = __webpack_require__("S0Kz");
var particle_2_default = /*#__PURE__*/__webpack_require__.n(particle_2);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/particles/particle-3.png
var particle_3 = __webpack_require__("d2jH");
var particle_3_default = /*#__PURE__*/__webpack_require__.n(particle_3);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/particles/particle-4.png
var particle_4 = __webpack_require__("7dh8");
var particle_4_default = /*#__PURE__*/__webpack_require__.n(particle_4);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/particles/particle-5.png
var particle_5 = __webpack_require__("ZqJU");
var particle_5_default = /*#__PURE__*/__webpack_require__.n(particle_5);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/particles/particle-6.png
var particle_6 = __webpack_require__("B79a");
var particle_6_default = /*#__PURE__*/__webpack_require__.n(particle_6);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/particles/particle-7.png
var particle_7 = __webpack_require__("P6xl");
var particle_7_default = /*#__PURE__*/__webpack_require__.n(particle_7);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/particles/particle-8.png
var particle_8 = __webpack_require__("g6Dc");
var particle_8_default = /*#__PURE__*/__webpack_require__.n(particle_8);

// CONCATENATED MODULE: ./containers/Hosting/Particle/index.js
var Particle_jsx = external_react_default.a.createElement;











const ParticlesComponent = () => {
  return Particle_jsx(external_react_default.a.Fragment, null, Particle_jsx(external_react_particles_js_default.a, {
    className: "particle",
    params: {
      particles: {
        number: {
          value: 10,
          density: {
            enable: true,
            value_area: 800
          }
        },
        shape: {
          type: ['circle', 'images'],
          images: [{
            src: `${particle_1_default.a}`,
            width: 25,
            height: 25
          }, {
            src: `${particle_2_default.a}`,
            width: 18,
            height: 18
          }, {
            src: `${particle_3_default.a}`,
            width: 32,
            height: 32
          }, {
            src: `${particle_4_default.a}`,
            width: 41,
            height: 41
          }, {
            src: `${particle_5_default.a}`,
            width: 22,
            height: 22
          }, {
            src: `${particle_6_default.a}`,
            width: 23,
            height: 23
          }, {
            src: `${particle_7_default.a}`,
            width: 27,
            height: 27
          }, {
            src: `${particle_8_default.a}`,
            width: 21,
            height: 19
          }]
        },
        opacity: {
          value: 0.17626369048095938,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 10,
          random: false
        },
        line_linked: {
          enable: false
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: 'none',
          random: false,
          straight: false,
          bounce: true,
          attract: {
            enable: true,
            rotateX: 100,
            rotateY: 400
          }
        }
      },
      retina_detect: true
    }
  }));
};

/* harmony default export */ var Particle = (ParticlesComponent);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/banner-bg.jpg
var banner_bg = __webpack_require__("H192");
var banner_bg_default = /*#__PURE__*/__webpack_require__.n(banner_bg);

// CONCATENATED MODULE: ./containers/Hosting/Banner/banner.style.js


const BannerWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "bannerstyle__BannerWrapper",
  componentId: "sc-14z9nfk-0"
})(["padding-top:210px;padding-bottom:160px;background-image:url(", ");background-size:cover;background-position:center;background-repeat:no-repeat;min-height:100vh;display:flex;align-items:center;@media (max-width:990px){padding-top:170px;padding-bottom:120px;min-height:auto;}@media (max-width:575px){padding-top:150px;padding-bottom:60px;}.particle{position:absolute;width:100%;height:100%;top:0;left:0;@media (max-width:767px){display:none;}}.banner_container{position:relative;}"], banner_bg_default.a);
const SearchWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__SearchWrapper",
  componentId: "sc-14z9nfk-1"
})(["@media (min-width:576px){display:flex;align-items:stretch;height:70px;box-shadow:0px 6px 15.98px 1.02px rgba(56,86,122,0.1);border-radius:10px;}@media (max-width:990px) and (min-width:576px){height:65px;}.domain_search_input{flex-grow:1;box-shadow:none;outline:none;.field-wrapper{border:0;}.field-wrapper,input{height:100%;box-shadow:none;outline:none;}input{font-size:17px;padding-left:50px;padding-right:30px;text-shadow:none;border:1px solid #ebebeb;&:focus{border-color:#ebebeb;}@media (min-width:576px){border-right:0;border-top-left-radius:10px;border-bottom-left-radius:10px;border-top-right-radius:0;border-bottom-right-radius:0;border-color:#f4f5f7;&:focus{border-color:#f4f5f7;}}@media (max-width:575px){height:52px;padding-left:20px;margin-bottom:20px;}}}.domain_search_select{min-width:165px;@media (max-width:575px){height:52px;margin-bottom:20px;}.select__control,.select-field__wrapper{height:100%;}.select__control{padding:0 15px 0 10px;box-shadow:none;position:relative;border-color:#ebebeb;@media (min-width:576px){border-color:#f4f5f7;border-left:0;border-right:0;border-radius:0;&:before{content:'';position:absolute;width:1px;height:55%;background:#d9d9d9;display:block;top:50%;left:0;transform:translateY(-50%);}}.select__placeholder{font-size:17px;color:#0f2137;}.select__indicator{color:#0f2137;}}.select__indicator-separator{display:none;}}.domain_search_button{width:160px;@media (min-width:576px){border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:10px;border-bottom-right-radius:10px;}@media (max-width:575px){height:52px;width:100%;}}"]);
const List = external_styled_components_default.a.ul.withConfig({
  displayName: "bannerstyle__List",
  componentId: "sc-14z9nfk-2"
})(["text-align:center;margin-top:17px;li{display:inline-block;font-size:17px;font-weight:400;color:#0f2137;padding:8px 12px;a{font-size:15px;color:#87909b;display:block;&:hover{color:#eb4d4b;}}}"]);
const DiscountWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__DiscountWrapper",
  componentId: "sc-14z9nfk-3"
})(["text-align:center;"]);
const DiscountLabel = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__DiscountLabel",
  componentId: "sc-14z9nfk-4"
})(["font-family:'Open Sans',sans-serif;display:inline-block;border-radius:4em;border:1px solid #f6f6f7;padding:7px 25px;box-shadow:0px 7px 25px 0px rgba(22,53,76,0.05);margin-bottom:30px;background-color:#fff;@media (max-width:575px){padding:7px 10px;}"]);
/* harmony default export */ var banner_style = (BannerWrapper);
// EXTERNAL MODULE: external "react-icons-kit/feather/search"
var search_ = __webpack_require__("1cWV");

// CONCATENATED MODULE: ./containers/Hosting/Banner/index.js
var Banner_jsx = external_react_default.a.createElement;

function Banner_extends() { Banner_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Banner_extends.apply(this, arguments); }
















const BannerSection = ({
  row,
  title,
  description,
  button,
  textArea,
  searchArea,
  discountAmount,
  discountText
}) => {
  return Banner_jsx(banner_style, {
    id: "banner_section"
  }, Banner_jsx(Particle, null), Banner_jsx(Container["a" /* default */], {
    className: "banner_container"
  }, Banner_jsx(Box["a" /* default */], row, Banner_jsx(Box["a" /* default */], textArea, Banner_jsx(DiscountWrapper, null, Banner_jsx(DiscountLabel, null, Banner_jsx(Text["a" /* default */], Banner_extends({}, discountAmount, {
    content: "25% Discount"
  })), Banner_jsx(Text["a" /* default */], Banner_extends({}, discountText, {
    content: "on every first annual purchase"
  })))), Banner_jsx(Heading["a" /* default */], Banner_extends({}, title, {
    content: "The best webhosting starting at $12.98/month"
  })), Banner_jsx(Text["a" /* default */], Banner_extends({}, description, {
    content: " For Enhanced performance we use LiteSpeed Web Server, HTTP/2, PHP7. We make your website faster, which will help you to increase search ranking!"
  }))), Banner_jsx(Box["a" /* default */], searchArea, Banner_jsx(SearchWrapper, null, Banner_jsx(Input["a" /* default */], {
    inputType: "text",
    placeholder: "Enter your domain name",
    iconPosition: "right",
    className: "domain_search_input",
    "aria-label": "search"
  }), Banner_jsx(Select["a" /* default */], {
    options: DOMAIN_NAMES,
    placeholder: ".com",
    className: "domain_search_select",
    "aria-label": "select options"
  }), Banner_jsx(Button["a" /* default */], Banner_extends({}, button, {
    icon: Banner_jsx(external_react_icons_kit_default.a, {
      icon: search_["search"],
      size: 24
    }),
    className: "domain_search_button"
  }))), Banner_jsx(List, null, DOMAIN_PRICE.map((item, index) => Banner_jsx("li", {
    key: `domain-list-${index}`
  }, item.url ? Banner_jsx(link_default.a, {
    href: item.url
  }, Banner_jsx("a", null, item.content)) : Banner_jsx(external_react_default.a.Fragment, null, item.content))))))));
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textArea: {
    width: ['100%', '100%', '90%', '100%', '55%']
  },
  title: {
    fontSize: ['26px', '32px', '42px', '46px', '55px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px', '25px', '25px', '25px'],
    lineHeight: '1.31',
    textAlign: 'center'
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center'
  },
  button: {
    title: 'Search',
    type: 'button',
    fontSize: '18px',
    fontWeight: '500',
    color: '#fff',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    iconPosition: 'left'
  },
  searchArea: {
    className: 'search_area',
    width: ['100%', '100%', '80%', '100%', '70%'],
    mt: ['45px', '50px', '60px', '60px', '60px']
  },
  discountAmount: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '600',
    color: '#eb4d4b',
    mb: 0,
    as: 'span',
    mr: '0.4em'
  },
  discountText: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '400',
    color: '#0f2137',
    mb: 0,
    as: 'span'
  }
};
/* harmony default export */ var Banner = (BannerSection);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/useToggle/index.js
var useToggle = __webpack_require__("sZWo");

// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/lightenDarken.js
const pad = (num, totalChars) => {
  let pad = '0';
  num = num + '';

  while (num.length < totalChars) {
    num = pad + num;
  }

  return num;
}; // Ratio is between 0 and 1


const changeColor = (color, ratio, darker) => {
  // Trim trailing/leading whitespace
  color = color.replace(/^\s*|\s*$/, ''); // Expand three-digit hex

  color = color.replace(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i, '#$1$1$2$2$3$3'); // Calculate ratio

  const difference = Math.round(ratio * 256) * (darker ? -1 : 1),
        // Determine if input is RGB(A)
  rgb = color.match(new RegExp('^rgba?\\(\\s*' + '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' + '\\s*,\\s*' + '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' + '\\s*,\\s*' + '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' + '(?:\\s*,\\s*' + '(0|1|0?\\.\\d+))?' + '\\s*\\)$', 'i')),
        alpha = !!rgb && rgb[4] != null ? rgb[4] : null,
        // Convert hex to decimal
  decimal = !!rgb ? [rgb[1], rgb[2], rgb[3]] : color.replace(/^#?([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])/i, function () {
    return parseInt(arguments[1], 16) + ',' + parseInt(arguments[2], 16) + ',' + parseInt(arguments[3], 16);
  }).split(/,/); // Return RGB(A)

  return !!rgb ? 'rgb' + (alpha !== null ? 'a' : '') + '(' + Math[darker ? 'max' : 'min'](parseInt(decimal[0], 10) + difference, darker ? 0 : 255) + ', ' + Math[darker ? 'max' : 'min'](parseInt(decimal[1], 10) + difference, darker ? 0 : 255) + ', ' + Math[darker ? 'max' : 'min'](parseInt(decimal[2], 10) + difference, darker ? 0 : 255) + (alpha !== null ? ', ' + alpha : '') + ')' : // Return hex
  ['#', pad(Math[darker ? 'max' : 'min'](parseInt(decimal[0], 10) + difference, darker ? 0 : 255).toString(16), 2), pad(Math[darker ? 'max' : 'min'](parseInt(decimal[1], 10) + difference, darker ? 0 : 255).toString(16), 2), pad(Math[darker ? 'max' : 'min'](parseInt(decimal[2], 10) + difference, darker ? 0 : 255).toString(16), 2)].join('');
};

const lightenColor = (color, ratio) => {
  return changeColor(color, ratio, false);
};

const darkenColor = (color, ratio) => {
  return changeColor(color, ratio, true);
};


// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/base.js
var base = __webpack_require__("/Q04");

// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Switch/switch.style.js




const SwitchStyle = external_styled_components_default.a.div.withConfig({
  displayName: "switchstyle__SwitchStyle",
  componentId: "sc-10sloje-0"
})(["display:inline-flex;.reusecore__field-label{color:", ";font-size:", "px;font-weight:", ";}&.label_left{label{display:flex;align-items:center;.reusecore__field-label{margin-right:", "px;}}}&.label_right{label{display:flex;flex-direction:row-reverse;align-items:center;.reusecore__field-label{margin-left:", "px;}}}&.label_top{label{.reusecore__field-label{display:flex;margin-bottom:", "px;}}}&.label_bottom{label{.reusecore__field-label{display:flex;margin-top:", "px;}}}input[type='checkbox']{&.switch{opacity:0;position:absolute;margin:0;z-index:-1;width:0;height:0;overflow:hidden;left:0;pointer-events:none;&:checked + div{width:", ";background-position:0 0;background-color:", ";> div{background-color:", ";left:calc( ", " / 2 + 3px );}}}+ div{vertical-align:middle;width:", ";height:calc( ", " / 2 );border-radius:450px;border-width:2px;border-style:solid;border-color:", ";transition-duration:0.4s;transition-property:background-color,box-shadow;cursor:pointer;box-sizing:border-box;position:relative;> div{float:left;width:calc( ", " / 2 - 8px );height:calc( ", " / 2 - 8px );border-radius:50%;pointer-events:none;top:2px;left:2px;position:absolute;background-color:", ";transition-timing-function:cubic-bezier(1,0,0,1);transition-duration:0.4s;transition-property:left,background-color;}}}&.is-material{&.label_top{label{.reusecore__field-label{margin-bottom:", "px;}}}&.label_bottom{label{.reusecore__field-label{margin-top:", "px;}}}input[type='checkbox']{&.switch{&:checked + div{width:", ";background-color:", ";> div{background-color:", ";left:calc( ", " - ", " / 2 + 1px );}}}+ div{width:", ";height:calc( ", " / 4 );border-width:0;background-color:", ";> div{width:calc( ", " / 2 );height:calc( ", " / 2 );top:calc( -", " / 8 );left:0;background-color:", ";box-shadow:0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12);}}}}", ""], Object(external_styled_system_["themeGet"])('colors.labelColor', '#767676'), Object(external_styled_system_["themeGet"])('fontSizes.4', '16'), Object(external_styled_system_["themeGet"])('fontWeights.4', '500'), Object(external_styled_system_["themeGet"])('space.3', '10'), Object(external_styled_system_["themeGet"])('space.3', '10'), Object(external_styled_system_["themeGet"])('space.2', '8'), Object(external_styled_system_["themeGet"])('space.2', '8'), props => props.switchSize ? props.switchSize : '80px', props => props.switchColor ? props.switchColor : '#028489', Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'), props => props.switchSize ? props.switchSize : '80px', props => props.switchSize ? props.switchSize : '80px', props => props.switchSize ? props.switchSize : '80px', props => props.switchColor ? props.switchColor : '#028489', props => props.switchSize ? props.switchSize : '80px', props => props.switchSize ? props.switchSize : '80px', props => props.switchColor ? props.switchColor : '#028489', Object(external_styled_system_["themeGet"])('space.3', '10'), Object(external_styled_system_["themeGet"])('space.3', '10'), props => props.switchSize ? props.switchSize : '50px', props => props.switchColor ? lightenColor(props.switchColor, 0.2) : lightenColor('#028489', 0.2), props => props.switchColor ? props.switchColor : '#028489', props => props.switchSize ? props.switchSize : '50px', props => props.switchSize ? props.switchSize : '50px', props => props.switchSize ? props.switchSize : '50px', props => props.switchSize ? props.switchSize : '50px', props => props.barColor ? props.barColor : '#a0a0a0', props => props.switchSize ? props.switchSize : '50px', props => props.switchSize ? props.switchSize : '50px', props => props.switchSize ? props.switchSize : '50px', Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'), base["a" /* base */]); // prop types can also be added from the style functions

SwitchStyle.propTypes = {};
SwitchStyle.displayName = 'SwitchStyle';
/* harmony default export */ var switch_style = (SwitchStyle);
// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Switch/index.js
var Switch_jsx = external_react_default.a.createElement;

function Switch_extends() { Switch_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Switch_extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Switch = (_ref) => {
  let {
    className,
    switchColor,
    isChecked,
    labelText,
    labelPosition,
    switchSize,
    isMaterial,
    barColor,
    onChange,
    onFocus,
    onBlur,
    handleOnChange
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "switchColor", "isChecked", "labelText", "labelPosition", "switchSize", "isMaterial", "barColor", "onChange", "onFocus", "onBlur", "handleOnChange"]);

  // use toggle hooks
  const [toggleValue, toggleHandler] = Object(useToggle["a" /* default */])(isChecked); // Add all classs to an array

  const addAllClasses = ['reusecore__switch']; // Add label position class

  if (labelPosition) {
    addAllClasses.push(`label_${labelPosition}`);
  } // isMaterial prop checking


  if (isMaterial) {
    addAllClasses.push('is-material');
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  }

  handleOnChange = event => {
    toggleHandler();
    onChange(!toggleValue);
  };

  const LabelField = labelText && Switch_jsx("span", {
    className: "reusecore__field-label"
  }, labelText);

  const position = labelPosition || 'top';
  return Switch_jsx(switch_style, Switch_extends({
    className: addAllClasses.join(' '),
    switchColor: switchColor,
    switchSize: switchSize,
    barColor: barColor
  }, props), Switch_jsx("label", null, position === 'left' || position === 'right' || position === 'top' ? LabelField : '', Switch_jsx("input", {
    checked: toggleValue,
    onChange: handleOnChange,
    onBlur: onBlur,
    onFocus: onFocus,
    className: "switch",
    type: "checkbox",
    value: toggleValue
  }), Switch_jsx("div", null, Switch_jsx("div", null)), position === 'bottom' && LabelField));
};

Switch.defaultProps = {
  isChecked: false,
  labelPosition: 'top',
  onBlur: () => {},
  onFocus: () => {},
  onChange: () => {}
};
/* harmony default export */ var components_Switch = (Switch);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/GlideCarousel/index.js
var GlideCarousel = __webpack_require__("mnHf");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/GlideCarousel/glideSlide.js
var glideSlide = __webpack_require__("9NE4");

// CONCATENATED MODULE: ./containers/Hosting/Pricing/pricing.style.js


const PricingTable = external_styled_components_default.a.div.withConfig({
  displayName: "pricingstyle__PricingTable",
  componentId: "sc-15w56vm-0"
})(["border:1px solid #f2f4f7;border-radius:5px;padding:60px 45px;border-radius:5px;margin-bottom:30px;@media (max-width:990px){padding:50px 40px;}@media (max-width:767px){padding:45px 35px;}@media (max-width:575px){padding:40px 30px;}a:not([href]),a[href],a[data-href]{backface-visibility:hidden;}"]);
const PricingHead = external_styled_components_default.a.div.withConfig({
  displayName: "pricingstyle__PricingHead",
  componentId: "sc-15w56vm-1"
})(["margin-bottom:40px;"]);
const PricingPrice = external_styled_components_default.a.div.withConfig({
  displayName: "pricingstyle__PricingPrice",
  componentId: "sc-15w56vm-2"
})(["margin-bottom:30px;"]);
const PricingButton = external_styled_components_default.a.div.withConfig({
  displayName: "pricingstyle__PricingButton",
  componentId: "sc-15w56vm-3"
})(["text-align:center;margin-bottom:55px;@media (max-width:767px){margin-bottom:40px;}"]);
const PricingList = external_styled_components_default.a.div.withConfig({
  displayName: "pricingstyle__PricingList",
  componentId: "sc-15w56vm-4"
})([""]);
const ListItem = external_styled_components_default.a.div.withConfig({
  displayName: "pricingstyle__ListItem",
  componentId: "sc-15w56vm-5"
})(["display:flex;margin-bottom:19px;&:last-child{margin-bottom:0;}.price_list_icon{color:#18d379;margin-right:10px;}"]);
const SwitchWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "pricingstyle__SwitchWrapper",
  componentId: "sc-15w56vm-6"
})(["text-align:center;margin-top:20px;.reusecore__switch{.reusecore__field-label{font-size:16px;font-weight:400;color:#5c636c;cursor:pointer;}input[type='checkbox'].switch{&:checked{+ div{width:40px !important;background-color:", ";> div{left:17px !important;}}}+ div{background-color:#f0f0f0;background-color:#f0f0f0;border:0;width:40px;height:25px;> div{background-color:#fff;box-shadow:0px 2px 3px 0.24px rgba(31,64,104,0.25);width:21px;height:21px;top:2px;left:2px;}}}}"], Object(external_styled_system_["themeGet"])('colors.primary'));

/* harmony default export */ var pricing_style = (PricingTable);
// EXTERNAL MODULE: external "react-icons-kit/icomoon/checkmark"
var checkmark_ = __webpack_require__("pi7v");

// CONCATENATED MODULE: ./containers/Hosting/Pricing/index.js
var Pricing_jsx = external_react_default.a.createElement;

function Pricing_extends() { Pricing_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Pricing_extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















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
    toggle: true,
    data: MONTHLY_PRICING_TABLE
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

  const dataHandle = () => {
    setState(_objectSpread({}, state, {
      toggle: !state.toggle
    }));
  };

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
          before: 150,
          after: 150
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
  return Pricing_jsx(Box["a" /* default */], sectionWrapper, Pricing_jsx(Container["a" /* default */], null, Pricing_jsx(Box["a" /* default */], secTitleWrapper, Pricing_jsx(Fade_default.a, {
    bottom: true,
    cascade: true
  }, Pricing_jsx(Text["a" /* default */], Pricing_extends({}, secText, {
    content: "PRICING PLAN"
  })), Pricing_jsx(Heading["a" /* default */], Pricing_extends({}, secHeading, {
    content: "What\u2019s our monthly pricing subscription"
  })), Pricing_jsx(SwitchWrapper, null, Pricing_jsx(components_Switch, {
    labelPosition: "bottom",
    switchColor: "#f0f0f0",
    barColor: "#f0f0f0",
    labelText: "Show Pricing plan annually",
    labelPosition: "left",
    onChange: dataHandle
  })))), Pricing_jsx(Box["a" /* default */], row, Pricing_jsx(GlideCarousel["a" /* default */], {
    carouselSelector: "pricing-carousel",
    options: pricingCarouselOptions,
    controls: false
  }, state.toggle === true ? Pricing_jsx(external_react_default.a.Fragment, null, MONTHLY_PRICING_TABLE.map((pricingTable, index) => Pricing_jsx(glideSlide["a" /* default */], {
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
  }, listContentStyle))))))))) : Pricing_jsx(external_react_default.a.Fragment, null, YEARLY_PRICING_TABLE.map((pricingTable, index) => Pricing_jsx(glideSlide["a" /* default */], {
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
    pt: ['60px', '80px', '80px', '80px', '150px'],
    pb: ['40px', '40px', '40px', '40px']
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  secTitleWrapper: {
    mb: ['50px', '50px', '60px', '75px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#eb4d4b',
    mb: '10px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    pr: '15px',
    pl: '15px'
  },
  nameStyle: {
    fontSize: ['18px', '20px', '22px', '22px', '22px'],
    fontWeight: '500',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    textAlign: 'center',
    mb: '12px'
  },
  descriptionStyle: {
    fontSize: ['14px', '16px', '16px', '16px', '16px'],
    color: 'textColor',
    lineHeight: '1.75',
    textAlign: 'center',
    mb: '0'
  },
  priceStyle: {
    as: 'span',
    display: 'block',
    fontSize: ['32px', '36px', '40px', '40px', '40px'],
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
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    colors: 'primary',
    width: '222px',
    maxWidth: '100%'
  },
  buttonFillStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff!important',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    colors: 'primaryWithBg',
    width: '200px',
    maxWidth: '100%'
  },
  listContentStyle: {
    fontSize: ['14px', '16px', '16px', '16px', '16px'],
    color: 'textColor',
    mb: '0'
  }
};
/* harmony default export */ var Pricing = (PricingSection);
// CONCATENATED MODULE: ./containers/Hosting/Testimonials/testimonials.style.js

const TestimonialSecWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "testimonialsstyle__TestimonialSecWrapper",
  componentId: "sc-44xig8-0"
})(["padding:80px 0;@media (max-width:575px){padding:60px 0;}@media (max-width:575px){padding-left:15px;padding-right:15px;}.glide{&:hover{.glide__prev--area,.glide__next--area{opacity:1;}}}.glide__slides{padding-top:10px;padding-bottom:30px;.glide__slide{opacity:0.5;pointer-events:none;transition:0.25s ease;&.glide__slide--active{opacity:1;pointer-events:auto;+ .glide__slide{@media (min-width:800px){opacity:1;pointer-events:auto;}}}}}.glide__controls{position:static;.glide__prev--area,.glide__next--area{position:absolute;top:50%;transform:translateY(-50%);opacity:0;transition:0.15s ease-in-out;@media (max-width:990px){display:none;}button{font-size:28px;}}.glide__prev--area{left:10%;@media (max-width:1400px){left:5%;}}.glide__next--area{right:10%;@media (max-width:1400px){right:5%;}}}@media (max-width:990px){.glide__slide--active .testimonial_item{box-shadow:5px 0px 20px rgba(0,0,0,0.05);}}"]);
const TestimonialItem = external_styled_components_default.a.div.withConfig({
  displayName: "testimonialsstyle__TestimonialItem",
  componentId: "sc-44xig8-1"
})(["border:1px solid #f2f4f7;padding:40px;border-radius:5px;background-color:#fff;transition:0.425s ease;&:hover{box-shadow:0px 20px 40px -20px rgba(39,79,117,0.25);}@media (max-width:1300px){padding:30px;}"]);
const ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "testimonialsstyle__ImageWrapper",
  componentId: "sc-44xig8-2"
})(["width:50px;height:50px;flex-basis:50px;display:block;border-radius:50%;overflow:hidden;box-shadow:0px 6px 30px 0px rgba(39,79,117,0.2);margin-right:15px;img{width:100%;height:auto;display:block;}"]);
/* harmony default export */ var testimonials_style = (TestimonialSecWrapper);
// CONCATENATED MODULE: ./containers/Hosting/Testimonials/index.js
var Testimonials_jsx = external_react_default.a.createElement;

function Testimonials_extends() { Testimonials_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Testimonials_extends.apply(this, arguments); }













const TestimonialSection = ({
  secTitleWrapper,
  secText,
  secHeading,
  reviewStyle,
  TestimonialMeta,
  nameStyle,
  designationStyle
}) => {
  //Carousel Options
  const carouselOptions = {
    type: 'carousel',
    autoplay: 4000,
    perView: 2,
    gap: 30,
    animationDuration: 800,
    peek: {
      before: 390,
      after: 390
    },
    breakpoints: {
      1800: {
        perView: 2,
        peek: {
          before: 220,
          after: 220
        }
      },
      1400: {
        perView: 2,
        peek: {
          before: 160,
          after: 160
        }
      },
      1200: {
        perView: 2,
        peek: {
          before: 100,
          after: 100
        }
      },
      990: {
        perView: 2,
        peek: {
          before: 100,
          after: 100
        }
      },
      800: {
        perView: 1,
        peek: {
          before: 120,
          after: 120
        }
      },
      575: {
        perView: 1,
        peek: {
          before: 0,
          after: 0
        }
      }
    }
  };
  return Testimonials_jsx(testimonials_style, {
    id: "testimonial_section"
  }, Testimonials_jsx(Container["a" /* default */], {
    fullWidth: true,
    noGutter: true
  }, Testimonials_jsx(Box["a" /* default */], secTitleWrapper, Testimonials_jsx(Text["a" /* default */], Testimonials_extends({}, secText, {
    content: "TESTIMONIALS "
  })), Testimonials_jsx(Heading["a" /* default */], Testimonials_extends({}, secHeading, {
    content: "What\u2019s clients say about us"
  }))), Testimonials_jsx(GlideCarousel["a" /* default */], {
    options: carouselOptions,
    nextButton: Testimonials_jsx(Button["a" /* default */], {
      icon: Testimonials_jsx("i", {
        className: "flaticon-next"
      }),
      variant: "textButton",
      "aria-label": "next button"
    }),
    prevButton: Testimonials_jsx(Button["a" /* default */], {
      icon: Testimonials_jsx("i", {
        className: "flaticon-left-arrow"
      }),
      variant: "textButton",
      "aria-label": "prev button"
    })
  }, Testimonials_jsx(external_react_default.a.Fragment, null, TESTIMONIALS.map((slideItem, index) => Testimonials_jsx(glideSlide["a" /* default */], {
    key: `testimonial-slide-${index}`
  }, Testimonials_jsx(TestimonialItem, {
    className: "testimonial_item"
  }, Testimonials_jsx(Text["a" /* default */], Testimonials_extends({
    content: slideItem.review
  }, reviewStyle)), Testimonials_jsx(Box["a" /* default */], TestimonialMeta, Testimonials_jsx(ImageWrapper, null, Testimonials_jsx(Image["a" /* default */], {
    src: slideItem.avatar,
    alt: `reviewer-image-${index}`
  })), Testimonials_jsx(Box["a" /* default */], null, Testimonials_jsx(Heading["a" /* default */], Testimonials_extends({
    content: slideItem.name
  }, nameStyle)), Testimonials_jsx(Text["a" /* default */], Testimonials_extends({
    content: slideItem.designation
  }, designationStyle)))))))))));
};

TestimonialSection.defaultProps = {
  secTitleWrapper: {
    mb: ['40px', '40px', '50px', '75px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#eb4d4b',
    mb: '10px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  reviewStyle: {
    fontSize: ['16px', '16px', '17px', '17px', '19px'],
    fontWeight: '300',
    color: '#343d48',
    lineHeight: '1.74',
    mb: ['30px', '30px', '30px', '40px', '55px']
  },
  TestimonialMeta: {
    flexBox: true,
    alignItems: 'center'
  },
  nameStyle: {
    as: 'h3',
    fontSize: '16px',
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '8px'
  },
  designationStyle: {
    fontSize: '14px',
    fontWeight: '400',
    color: '#6f7a87',
    mb: '0'
  }
};
/* harmony default export */ var Testimonials = (TestimonialSection);
// CONCATENATED MODULE: ./containers/Hosting/Contact/contact.style.js

const ContactFromWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "contactstyle__ContactFromWrapper",
  componentId: "sc-14rqeo3-0"
})(["display:flex;align-items:stretch;width:490px;max-width:100%;margin-left:auto;margin-right:auto;margin-bottom:40px;@media (max-width:575px){flex-direction:column;align-items:center;margin-bottom:25px;button{width:100%;}}.email_input{flex-grow:1;margin-right:20px;@media (max-width:575px){width:100%;margin-right:0;margin-bottom:20px;}&.is-material{&.is-focus{label{color:#aeb1b6;font-size:12px;}}}input{height:100%;background:#fff;font-size:16px;font-weight:400;color:#343d48;padding:5px 15px;border-color:#dadada;@media (max-width:575px){height:48px;}}label{font-size:14px;color:#343d48;font-weight:500;padding-left:10px;top:5px;}}.field-wrapper{height:100%;}"]);
/* harmony default export */ var contact_style = (ContactFromWrapper);
// CONCATENATED MODULE: ./containers/Hosting/Contact/index.js
var Contact_jsx = external_react_default.a.createElement;

function Contact_extends() { Contact_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Contact_extends.apply(this, arguments); }










const ContactSection = ({
  sectionWrapper,
  row,
  contactForm,
  secTitleWrapper,
  secHeading,
  secText,
  button,
  note
}) => {
  return Contact_jsx(Box["a" /* default */], sectionWrapper, Contact_jsx(Container["a" /* default */], null, Contact_jsx(Box["a" /* default */], secTitleWrapper, Contact_jsx(Text["a" /* default */], Contact_extends({}, secText, {
    content: "CONTACT US"
  })), Contact_jsx(Heading["a" /* default */], Contact_extends({}, secHeading, {
    content: "Are you Interested to meet with us?"
  }))), Contact_jsx(Box["a" /* default */], row, Contact_jsx(Box["a" /* default */], contactForm, Contact_jsx(contact_style, null, Contact_jsx(Input["a" /* default */], {
    inputType: "email",
    placeholder: "Email address",
    iconPosition: "right",
    isMaterial: false,
    className: "email_input",
    "aria-label": "email"
  }), Contact_jsx(Button["a" /* default */], Contact_extends({}, button, {
    title: "SEND MESSAGE"
  }))), Contact_jsx(Text["a" /* default */], Contact_extends({}, note, {
    content: "Note: Please call us at 12pm to 8am. otherwise our customer supporter will not  available to reach your call, but you can drop mail anytime."
  }))))));
};

ContactSection.defaultProps = {
  sectionWrapper: {
    id: 'contact_section',
    as: 'section',
    pt: ['0px', '10px', '20px', '80px'],
    pb: ['0px', '0px', '0px', '0px', '80px'],
    bg: '#f9fbfd'
  },
  secTitleWrapper: {
    mb: ['45px', '50px', '60px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: `${2}`,
    letterSpacing: '0.15em',
    fontWeight: `${6}`,
    color: 'primary',
    mb: `${3}`
  },
  secHeading: {
    textAlign: 'center',
    fontSize: [`${6}`, `${8}`],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: `${0}`
  },
  row: {
    flexBox: true,
    justifyContent: 'center'
  },
  contactForm: {
    width: [1, 1, 1, 1 / 2]
  },
  button: {
    type: 'button',
    fontSize: `${2}`,
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    height: `${4}`
  },
  note: {
    fontSize: ['13px', '14px', '15px', '15px', '15px'],
    color: '#5d646d',
    lineHeight: '1.87',
    textAlign: 'center'
  }
};
/* harmony default export */ var Contact = (ContactSection);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/footer-bg.png
var footer_bg = __webpack_require__("i1V0");
var footer_bg_default = /*#__PURE__*/__webpack_require__.n(footer_bg);

// CONCATENATED MODULE: ./containers/Hosting/Footer/footer.style.js


const FooterWrapper = external_styled_components_default.a.footer.withConfig({
  displayName: "footerstyle__FooterWrapper",
  componentId: "ytgndl-0"
})(["position:relative;background-color:#f9fbfd;overflow:hidden;@media (min-width:576px){padding-top:130px;&:before{content:'';position:absolute;width:104%;padding-bottom:104%;border-top-right-radius:11%;top:14%;left:0;pointer-events:none;background-color:#fff;transform:rotate(-6deg);@media (max-width:767px){padding-bottom:150%;}}}.footer_container{background-repeat:no-repeat;background-position:center 50px;padding-top:80px;padding-bottom:80px;position:relative;@media (min-width:576px){background-image:url(", ");}@media (max-width:990px){padding-bottom:40px;}@media (max-width:767px){padding-bottom:0px;}}"], footer_bg_default.a);
const footer_style_List = external_styled_components_default.a.ul.withConfig({
  displayName: "footerstyle__List",
  componentId: "ytgndl-1"
})([""]);
const footer_style_ListItem = external_styled_components_default.a.li.withConfig({
  displayName: "footerstyle__ListItem",
  componentId: "ytgndl-2"
})(["a{color:rgba(52,61,72,0.8);font-size:14px;line-height:36px;transition:all 0.2s ease;&:hover,&:focus{outline:0;text-decoration:none;color:#343d48;}}"]);

/* harmony default export */ var footer_style = (FooterWrapper);
// CONCATENATED MODULE: ./containers/Hosting/Footer/index.js
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
  }, textStyle))), Footer_jsx(Box["a" /* default */], colTwo, FOOTER_WIDGET.map((widget, index) => Footer_jsx(Box["a" /* default */], Footer_extends({
    className: "col"
  }, col, {
    key: `footer-widget-${index}`
  }), Footer_jsx(Heading["a" /* default */], Footer_extends({
    content: widget.title
  }, titleStyle)), Footer_jsx(footer_style_List, null, widget.menuItems.map((item, index) => Footer_jsx(footer_style_ListItem, {
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
/* harmony default export */ var Hosting_Footer = (Footer);
// EXTERNAL MODULE: external "react-scroll-parallax"
var external_react_scroll_parallax_ = __webpack_require__("K0LP");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Accordion/index.js + 1 modules
var Accordion = __webpack_require__("aVK5");

// EXTERNAL MODULE: external "react-icons-kit/entypo/plus"
var plus_ = __webpack_require__("Av/8");

// EXTERNAL MODULE: external "react-icons-kit/entypo/minus"
var minus_ = __webpack_require__("8N94");

// CONCATENATED MODULE: ./containers/Hosting/Faq/index.js
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
  return Faq_jsx(Box["a" /* default */], sectionWrapper, Faq_jsx(Container["a" /* default */], null, Faq_jsx(Box["a" /* default */], secTitleWrapper, Faq_jsx(Text["a" /* default */], Faq_extends({}, secText, {
    content: "FREQUENTLY ASK QUESTION"
  })), Faq_jsx(Heading["a" /* default */], Faq_extends({}, secHeading, {
    content: "Want to ask something from us?"
  }))), Faq_jsx(Box["a" /* default */], row, Faq_jsx(Box["a" /* default */], col, Faq_jsx(Accordion["a" /* Accordion */], null, Faq_jsx(external_react_default.a.Fragment, null, FAQ_DATA.map((accordionItem, index) => Faq_jsx(Accordion["c" /* AccordionItem */], {
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
  })))))))), Faq_jsx(Box["a" /* default */], buttonWrapper, Faq_jsx(link_default.a, {
    href: "#"
  }, Faq_jsx("a", null, Faq_jsx(Button["a" /* default */], Faq_extends({}, button, {
    title: "EXPLORE FORUM"
  })))))))));
};

FaqSection.defaultProps = {
  sectionWrapper: {
    id: 'faq_section',
    as: 'section',
    pt: ['60px', '80px', '80px', '80px'],
    pb: ['60px', '80px', '80px', '80px'],
    bg: '#f9fbfd'
  },
  secTitleWrapper: {
    mb: ['55px', '75px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: `${2}`,
    letterSpacing: '0.15em',
    fontWeight: `${6}`,
    color: 'primary',
    mb: `${3}`
  },
  secHeading: {
    textAlign: 'center',
    fontSize: [`${6}`, `${8}`],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: `${0}`
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: -`${4}`,
    mr: -`${4}`
  },
  col: {
    width: [1],
    pr: `${4}`,
    pl: `${4}`,
    mb: `${7}`
  },
  title: {
    fontSize: ['16px', '19px'],
    fontWeight: `${3}`,
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: `${0}`
  },
  description: {
    fontSize: `${3}`,
    color: 'textColor',
    lineHeight: '1.75',
    mb: `${0}`
  },
  buttonWrapper: {
    mt: `${11}`,
    flexBox: true,
    justifyContent: 'center'
  },
  button: {
    type: 'button',
    fontSize: `${2}`,
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primary',
    height: `${4}`
  }
};
/* harmony default export */ var Faq = (FaqSection);
// CONCATENATED MODULE: ./pages/hosting.js
var hosting_jsx = external_react_default.a.createElement;






















/* harmony default export */ var hosting = __webpack_exports__["default"] = (() => {
  return hosting_jsx(external_styled_components_["ThemeProvider"], {
    theme: hostingTheme
  }, hosting_jsx(external_react_scroll_parallax_["ParallaxProvider"], null, hosting_jsx(head_default.a, null, hosting_jsx("title", null, "Hosting | A react next landing page"), hosting_jsx("meta", {
    name: "Description",
    content: "React next landing page"
  }), hosting_jsx("meta", {
    name: "theme-color",
    content: "#eb4d4b"
  }), hosting_jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,900|Open+Sans:400,400i,600,700",
    rel: "stylesheet"
  })), hosting_jsx(style["a" /* ResetCSS */], null), hosting_jsx(GlobalStyle, null), hosting_jsx(ContentWrapper, null, hosting_jsx(external_react_stickynode_default.a, {
    top: 0,
    innerZ: 9999,
    activeClass: "sticky-nav-active"
  }, hosting_jsx(DrawerContext["b" /* DrawerProvider */], null, hosting_jsx(Hosting_Navbar, null))), hosting_jsx(Banner, null), hosting_jsx(Features, null), hosting_jsx(Info, null), hosting_jsx(Pricing, null), hosting_jsx(Domain, null), hosting_jsx(Services, null), hosting_jsx(Payment, null), hosting_jsx(Testimonials, null), hosting_jsx(Guarantee, null), hosting_jsx(Faq, null), hosting_jsx(Contact, null), hosting_jsx(Hosting_Footer, null))));
});

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "vtRj":
/***/ (function(module, exports) {

module.exports = require("react-select");

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

/***/ "wtZI":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Zoom");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });