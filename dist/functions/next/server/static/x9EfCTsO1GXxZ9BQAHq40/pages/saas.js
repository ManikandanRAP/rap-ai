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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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

/***/ "0Rg0":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QjmD");


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

/***/ "6MyC":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAABS0lEQVQ4ja3Tv0pcURDH8U+uq5ZiuIWxSSEYIVWqLTaglSjiC9jl5XyAy8UUa9YHCCYs2sRGERExneAiFrsWO4vHy/5xYae5v5n5zZfDmXM//N/fO8C62cW/DCszBMKnDK0ZQ1s1tPENn6N4gcMpIOn1XaOdoYef6EZj3fvv+Evi7eIoL8peFoU7nCbmHdQmAGvhG8RpXpR3kCXFE3RCf0RjArSB5dCdmFeFdnCc5N+xNAK4FP1B/MqLcnCgN1D4i9vQ89geAd2NvvD/SZtVaA9H8YWvWKt41rCR+vOi7KWGKhRu9J9Zeqq50HORD6KdF+VNFTAMCk08hc5RD12PXPSbw4ZHQR8l28QmVrGV1E7C924o/MZ96EX8wELk99EfGuOgXW+XNp/00j9wKihc4bxSO8PluKFJUPrLeA79bMRypoU+eH0NzcjHxgsLtUxOm5qSqgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "7t0J":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAllBMVEUwfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv9w6jhqAAAAMnRSTlMAAgMEBQoLDxASExcYHR8gISIjJSsyMz0+Q0RGTFJbX3t8fX5/gIaHioyOj5CRk5SVmV23O/AAAADkSURBVCjPfZLdWoJQEEU3P5UVppiYIEmBgacO6nr/l+tCKBB0X5515puZvUc6y1tuc4vNt0tPXTlve1qZpMOec7rKgxbMvoEyXUy8yet7CfzMzyCwcEzc5pubHMEGkuTmYKadplMDhStpA6ewN094go3kG0jUVwLGVwSVe0GcClbKINWlUshUwGJAQtjJwsOA3IMV4A2IANVXamrtrvT5ujHbCipndJ8xD2Iw/phv87NvN7xWYOEQ/+UTH9p8pBcDlGl45zSZmllb//jRu4PPp86Y6//b2a/7S/hRVtTURRb5zcsvDoEoKiBacYsAAAAASUVORK5CYII="

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

/***/ "8TYK":
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

/***/ "8qPd":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Slide");

/***/ }),

/***/ "93Ab":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/saas-banner-86fc9b9dce69a945e7f106073da622dd.jpg";

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

/***/ "Ci5P":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

/***/ "FIas":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "GFhP":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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d8QbBbCko6Oj4/0QQtgD0BZbhz8FsCGh172JADN6w1KAluI76m2AEbFXngHQmWBchT4BeDJkxquy2DrsHADl2xIna13mXtVrNUDT+RButZadg0VLwSNlj/0agK4E4yq0psY7PbNe0QfE/LLlw+ziSW0Cr0M5gC3FD6fiBn3vqMpXnlN79VDda+aj/vh67Lyia5w+KHnE6wDsSuYVXWDTHr2plgI0ni5d2rGv5MEbHvLFY1Wv/DCA43r13+6ZANBUnMT876PvGPPJvBYBNBcWBNERcULhupgbLQBN/V8or+chR7eqXpcKp9d69Xe0ASD38tUQQug9Mj367aKqS7JKr52UXWx/oOzqj93Rnv2qqyGEkD/WDsCYWym8DgG0Br1K73mv8F3IlMXL5hc2KpqPhURe55sBnu5/L74AwF8Kt9YWXnna0hWLRkd/bjkbUnjteJRXAjyuXmFXU+wMqO10SOTVMxWgueSy2+iIOOJ6H1gu9spjz4Y0Xq8Q2xXWK4QQzpT9RuygF2scsiq81lGxfIsuSFxYPKA9WfrKueW3U40rOnFfq1fFOuzA3L6Lz9pW1b5KPeb1Za7KLyEsKzfs2dve99tdw1/6Ju24FhfPFTLrVat7R/e+tendT/4HWz93v9i7tfOtD7ry4YeY/7+NXqaX6aWX6WV66WV6mV56mV6ml16ml+mll+lleullepleepleppdeppfppZfpZXrpZXqZXnqZXqaXXqaX6aWX6WV6mV56mV6ml16ml+mll+lleullepleepleppdeppfppZfpZXrpZXqZXnqZXqaXXqaX6aWX6WV66WV6mV56mV6ml16ml+lleullepleepleppdeppfppZfpZXrpZXqZXnqZXqaXXqaX6aWX6WV66WV6mV56mV6ml16ml+mll+lleullepleepleppfppZfpZXrpZXqZXnqZXqaXXqaX6aWX6WV66WV6mV56mV6ml16ml+mll+lleullepleepleppdeppfppZfpZXrpZXqZXqaXXqaX6aWX6WV66WV6mV56mV6ml16ml+mll+lleullepleepleppdeppfppZfpZXrpZXqZXnqZXqaXXqaX6aWX6WV6mV56mV6ml16ml+mll+lleullepleepleppdeppfppZfpZXrpZXqZXnqZXqaXXqaX6aWX6WV66WV6mV562ePffwCaUSqBIGb8vAAAAABJRU5ErkJggg=="

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

/***/ "I9Ys":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAA/CAAAAAB27V17AAADoElEQVRo3u3X709bVRzH8XfLhYZS6OxGRqgsFQyTzLEfqU4NAccyM39A0DqdPDBDcAu6ZQlbJEyJghmdLsNoGSLDybSODQYNMLZm9/PH+eDetpcFHnKj8ZxH55x+7+kr957zPeeg/2jBwA3cwA3cwA3cwA3cwA3cwA3cwA383wQf4XSxnumstcLNfave3+0jnNj6yY3BlnDZnjczhfbYsWhZTfKq7Q98rqoE7w8AwN47noDP2QZ+93knOjAgScp3OE0O5PyA/7qLInwMEtdWsv0WdRvFgBlrG3huLxUD2eXvGyAtSe9Dx3Tuj1SAV3yAXw5RgrcQy0nSV3CpOB0a2AbejfWTJK1EOSjp7yCdkqReuLXT8KlDsK+iALctepxKmJOFkPd4Ob4lPFdBr1Prrd6Xl76AeUnSPFzYaXgNgXfWi3PcLqPbqVW7L08aJ5xtcOALESKLkmQfoiyjEYJLm9Zw9rq7aDzfa6fg0aPTUmlxthJbdbSFv16MMiwXrhFok6Rz0Cd10STp/uzSs4N2Efxrp+Hzkhc+FeLFH1cXL1ayP++8xSTtKsLVDmPS7XJabamVDl1pABLfeEZcu/E69PuTxz3p8HYSgFBq3WkPsjvnga/E2L2WbyRyT1Kcrrfc/JcqjvUGELoqv+H2+ZgjOfybJGm2PPCDPHBdg54zMCpJUaI0TTxaG6uHocJYjTWVEL3kN/w4dM48Wfm6joqbkh4n+ECb4HqXYJBTkqQING9I0sM9xPKFmSL7l2YY9Bf+HXzoTIk4tXmph8TjZ+Dr9RB/5CxsmHQ6LxRrTkwDIX/hbVS5G+YojGsCy5kxHriOw0tP3V7raTH/DXkHvAL+whMcdruW4TOdwFuGCh8F+iRJSarc6AX40jvgtN/wJlpL8IGt4A+j7O/AmpGkM7DsRN+CUenjxEH36Zt+wzsJuefZb2Fcs2m31HIknV5wsp01t1xD4omkyeLOfpbAfambwF2nfdpveBpO2pKUi7OrdDwszfHL8Kk07J7KGolmJenPCMckZeA1W5J+rqDF53TYDkdv5B6M1IN3NyzAs2FeyEt6lcCkpIzFc0MPloZjhH6XpFOQnFy+czZEeM5n+EbhKlC+KUu4cLuV4LQk3QtTtyYpXe1Eh9PORaLTfbp2yvctX9c7aq3KRCqrLeDn4COn4yK8LUlLnyTKrXhqoRA40RazIgfOr5vLsoEbuIEbuIEbuIEbuIEbuIEbuIEb+P8X/g9alo9VQFG9tAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "INZR":
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ }),

/***/ "Ihd7":
/***/ (function(module, exports) {



/***/ }),

/***/ "IjfZ":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/visitor_bg-bab2b2c9bf655bc3ede0e11626c28d87.png";

/***/ }),

/***/ "IrP5":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "J0TH":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAMAAADX9CSSAAAAllBMVEX7Lo/////7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo8jNrCFAAAAMnRSTlMAAAIEBQYKDQ4PEBIXGBogISIjKissNTdASUpLUlVbXF5fZ2hub3FydHV2eHp7fH5/gGx6LbwAAAD0SURBVCjPVdHNQoJQGITh+YhMxaA0/hQMTSXROrz3f3MtkPTM8tnNjCRJSna/7SaSJBsy8MoB9HXse3jmlmb56BmcXpJtD/CVBqMHB8glLSoHcMzCwVPoQknSvLwCnD9MkvZQ6JZJ0QEukbSE62R0WZifoJHUQKm7m03hIsXgZp4n0Eo1VPJ8C2tFPf3C80VPH2kDW3leQW1qIfF85iA2XWDqeQmNmRpo8+e7T66wNFPigK74L1bA3syk1TfATzkfJu8gHfZ8yo4ArnqVlMMhGPcP0j1A//k2PUF2/1F6b8bLzuGjS3HtANzKfJeidXvZJcO/f6XAIuVCvM/gAAAAAElFTkSuQmCC"

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

/***/ "KXjX":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAACV0lEQVRIibWWPWgUQRTHf6tnIgaJnhEdsQinkLOJ8btx7cTCQuwEbcRO0mihoIagGLCxEgSxsbCxEcHWytEuGsTicgG/lQXRwfMIISB3FjPLvWz2dm7vkgcLb/8z83579+bNm2D7y99k2AAw7vwHwJ/khCgsZq1fZgXP+EngqPN3AteAei5CwtZ4xg8IfxiYBDasFnAjUE5oI8B1oH81gGNivA40nT8KXMWfjtxA+Xc+Ax6J90PAZc/6XMAgAXwDPAWeCC0ExpU2wUoAS8Am5xvgo/MfA8/FvOPAhZUAHhT+DK38ATwEXoj3U0qbs70C9wt/OjHWBO4Br4R2RmlzulugLIcG8C5lTgO4m/iY80qbE90A9wp9lvYnyz/gDvDevQfARaXNsbxAmb+3WYuBRWAKqIp4l5Q2RzoFBmTnb5lFYXEeuAV8dlIBuKK0Ge0EWAI2O79Gqxx80L/YczZyUh8wobQZ8QFlsU+ztBx8UAPcAH45aT1wU2kz3CnQl7806E8HrTlpALittNmRBkyWw0xeoIP+ACaAeScNAlNKm61JoCyHKj002igsfsLmdNFJQw46KFtMnnJINaXNNmzPLAN7WNrCFHAuFgJgnxj0lgOwDtittImDl2nt8HZWj4ElIL4N1YAPKZO3iMBlYBf+JtwAvgEV7In0Ol6Q7H1rXcCyeIY8wcFulFnxVKOwuCAnpAHHsI22zxO8CXx3gSvAHPA1CouZtVvA1oq8LLW7aC5gd++c+AX1bu6l/dhNk7RIBK4AX7A56ckK2CvEfeCwCxpDahnrurb/7GOVLT6LtEwAAAAASUVORK5CYII="

/***/ }),

/***/ "KYuu":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

/***/ "MnFb":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "Oi65":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "QjmD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-stickynode"
var external_react_stickynode_ = __webpack_require__("isz7");
var external_react_stickynode_default = /*#__PURE__*/__webpack_require__.n(external_react_stickynode_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/theme/saas/colors.js
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
  primary: '#5268db',
  // 8
  primaryHover: '#5268db',
  // 9
  secondary: '#ff5b60',
  // 10
  secondaryHover: '#FF282F',
  // 11
  yellow: '#fdb32a',
  // 12
  yellowHover: '#F29E02',
  // 13
  primaryBoxShadow: ' 0px 9px 19.74px 1.26px rgba(82, 104, 219, 0.57) '
};
/* harmony default export */ var saas_colors = (colors);
// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/theme/saas/index.js

const saasTheme = {
  breakpoints: [575, 768, 990, 1440],
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
  colors: saas_colors,
  colorStyles: {
    primary: {
      color: saas_colors.primary,
      border: '1px solid',
      borderColor: saas_colors.primary,
      backgroundColor: saas_colors.transparent,
      '&:hover': {
        color: saas_colors.white,
        backgroundColor: saas_colors.primaryHover,
        borderColor: saas_colors.transparent,
        boxShadow: '0px 9px 20px -5px rgba(82, 104, 219, 0.57)',
        backgroundImage: 'linear-gradient( 31deg, rgba(215,178,233, 0.4) 0%, rgba(83,105,220, 0.4) 100%)'
      }
    },
    secondary: {
      color: saas_colors.secondary,
      borderColor: saas_colors.secondary,
      '&:hover': {
        color: saas_colors.secondaryHover,
        borderColor: saas_colors.secondaryHover
      }
    },
    warning: {
      color: saas_colors.yellow,
      borderColor: saas_colors.yellow,
      '&:hover': {
        color: saas_colors.yellowHover,
        borderColor: saas_colors.yellowHover
      }
    },
    error: {
      color: saas_colors.secondaryHover,
      borderColor: saas_colors.secondaryHover,
      '&:hover': {
        color: saas_colors.secondary,
        borderColor: saas_colors.secondary
      }
    },
    primaryWithBg: {
      color: saas_colors.white,
      backgroundColor: saas_colors.primary,
      borderColor: saas_colors.primary,
      backgroundImage: 'linear-gradient( 31deg, rgba(215,178,233, 0.4) 0%, rgba(83,105,220, 0.4) 100%)',
      '&:hover': {
        backgroundColor: saas_colors.primaryHover,
        borderColor: saas_colors.primaryHover,
        boxShadow: '0px 9px 20px -5px rgba(82, 104, 219, 0.57)'
      }
    },
    secondaryWithBg: {
      color: saas_colors.white,
      backgroundColor: saas_colors.secondary,
      borderColor: saas_colors.secondary,
      '&:hover': {
        backgroundColor: saas_colors.secondaryHover,
        borderColor: saas_colors.secondaryHover
      }
    },
    warningWithBg: {
      color: saas_colors.white,
      backgroundColor: saas_colors.yellow,
      borderColor: saas_colors.yellow,
      '&:hover': {
        backgroundColor: saas_colors.yellowHover,
        borderColor: saas_colors.yellowHover
      }
    },
    errorWithBg: {
      color: saas_colors.white,
      backgroundColor: saas_colors.secondaryHover,
      borderColor: saas_colors.secondaryHover,
      '&:hover': {
        backgroundColor: saas_colors.secondary,
        borderColor: saas_colors.secondary
      }
    },
    transparentBg: {
      backgroundColor: saas_colors.white,
      '&:hover': {
        backgroundColor: saas_colors.white
      }
    }
  },
  buttonStyles: {
    textButton: {
      border: 0,
      color: saas_colors.primary,
      padding: 0,
      height: 'auto',
      backgroundColor: saas_colors.transparent
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      backgroundColor: saas_colors.transparent
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

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./containers/Saas/saas.style.js


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
  displayName: "saasstyle__ContentWrapper",
  componentId: "wjkbat-0"
})(["position:relative;overflow:hidden;a:-webkit-any-link{text-decoration:none;}.sticky-nav-active{.hosting_navbar{background:#fff;box-shadow:0 0 20px rgba(0,0,0,0.15);padding:15px 0;}}.hosting_navbar{position:fixed;top:0;left:0;width:100%;transition:0.35s ease-in-out;padding:30px 0;.main_menu{margin-right:40px;li{display:inline-block;padding-left:13px;padding-right:13px;&:first-child{padding-left:0;}&:last-child{padding-right:0;}&.is-current{a{color:#eb4d4b;}}a{padding:5px;font-size:16px;font-weight:400;color:#343d48;transition:0.15s ease-in-out;&:hover{color:#eb4d4b;}}}@media (max-width:990px){display:none;}}.navbar_button{@media (max-width:990px){display:none;}}.reusecore-drawer__handler{@media (min-width:991px){display:none !important;}.hamburgMenu__bar{> span{}}}}.trial-section{background:linear-gradient(to bottom,#fafbff 0%,#f7f8fd 100%);.button_group{text-align:center;}}@media (max-width:990px){.glide__slide--active .pricing_table{box-shadow:0px 0px 30px rgba(0,0,0,0.05);border:0;}}"]);
const saas_style_ButtonGroup = external_styled_components_default.a.div.withConfig({
  displayName: "saasstyle__ButtonGroup",
  componentId: "wjkbat-1"
})([""]);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Navbar/index.js + 1 modules
var Navbar = __webpack_require__("HqwP");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Drawer/index.js
var Drawer = __webpack_require__("KfK3");

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

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saas/testimonial/client-1.jpg
var client_1 = __webpack_require__("0Rg0");
var client_1_default = /*#__PURE__*/__webpack_require__.n(client_1);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/agency/client/denny.png
var denny = __webpack_require__("GFhP");
var denny_default = /*#__PURE__*/__webpack_require__.n(denny);

// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/data/Saas/index.js


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
}, {
  id: 4,
  title: 'New update fixed all bug and issues?',
  description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
}];
const Features = [{
  id: 1,
  icon: 'flaticon-creative',
  title: 'Powerful Features',
  description: 'Automate time consuming tasks like organising expenses ,tracking your time and following up with clients '
}, {
  id: 2,
  icon: 'flaticon-briefing',
  title: 'Easy Invoicing',
  description: 'Want to surprice your clients with professional looking invoices ? Then you are some clicks behind .'
}, {
  id: 3,
  icon: 'flaticon-flask',
  title: 'Easy To Use',
  description: 'Very Simple and intuitive. So you have to spend less time in paperwork and impress your customer with looks'
}];
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
const Service = [{
  id: 1,
  icon: 'flaticon-briefing',
  title: 'App Development',
  description: 'We are specialized at custom Saas Application Development and special features .'
}, {
  id: 2,
  icon: 'flaticon-trophy',
  title: '10 Times Award',
  description: 'We are globally recognised for our services and won a lot of prices around the world .'
}, {
  id: 3,
  icon: 'flaticon-atom',
  title: 'Cloud Stroage',
  description: 'LiteSpeed Web Server known for its high performance and low resource consumption.'
}, {
  id: 4,
  icon: 'flaticon-ruler',
  title: 'Client Satisfaction',
  description: 'Client Satisfaction is our first priority and We are best at it .Keep In Touch.'
}, {
  id: 5,
  icon: 'flaticon-creative',
  title: 'UX Planning',
  description: 'We provide the best UI/UX Design by following the latest trends of the market  .'
}, {
  id: 6,
  icon: 'flaticon-conversation',
  title: 'Customer Support',
  description: 'A Dedicated support team is always ready to provide best support to our customers.'
}];
const Timeline = [{
  title: 'Wireframing for project',
  description: 'We respect our customer opinions and deals with them with perfect wireframing.'
}, {
  title: 'UI/UX for project',
  description: 'We provide the best UI/UX Design by following the latest trends of the market .'
}, {
  title: 'Negotiation about project',
  description: 'After the negotiation is done , We start to build the project with latest technology .'
}];
const Testimonial = [{
  id: 1,
  name: 'Jon Doe',
  designation: 'Ceo of Invission Co.',
  comment: 'Love to work with this designer in every our future project to ensure we are going to build best prototyping features.',
  avatar_url: client_1_default.a,
  social_icon: 'flaticon-instagram'
}, {
  id: 2,
  name: 'Roman Ul Oman',
  designation: 'Co-founder of QatarDiaries',
  comment: 'Impressed with master class support of the team and really look forward for the future. A true passionate team.',
  avatar_url: denny_default.a,
  social_icon: 'flaticon-twitter-logo-silhouette'
}];
const MENU_ITEMS = [{
  label: 'Home',
  path: '#banner_section',
  offset: '70'
}, {
  label: 'Service',
  path: '#service_section',
  offset: '70'
}, {
  label: 'Feature',
  path: '#feature_section',
  offset: '70'
}, {
  label: 'Pricing',
  path: '#pricing_section',
  offset: '70'
}, {
  label: 'Testimonial',
  path: '#testimonial_section',
  offset: '70'
}, {
  label: 'FAQ',
  path: '#faq_section',
  offset: '70'
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
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/ScrollSpyMenu/index.js
var ScrollSpyMenu = __webpack_require__("8obO");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saas/logo.png
var logo = __webpack_require__("8TYK");
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// CONCATENATED MODULE: ./containers/Saas/Navbar/index.js
var __jsx = external_react_default.a.createElement;












const Navbar_Navbar = ({
  navbarStyle,
  logoStyle,
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
  }), __jsx(Drawer["a" /* default */], {
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
  }))))));
};

Navbar_Navbar.defaultProps = {
  navbarStyle: {
    className: 'hosting_navbar',
    minHeight: '70px',
    display: 'block'
  },
  row: {
    flexBox: true,
    alignItems: 'center',
    justifyContent: ['space-between', 'space-between', 'space-between', 'flex-start'],
    width: '100%'
  },
  logoStyle: {
    maxWidth: '130px',
    mr: [0, 0, 0, '166px']
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
/* harmony default export */ var Saas_Navbar = (Navbar_Navbar);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Text/index.js
var Text = __webpack_require__("4Af6");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Image/index.js
var Image = __webpack_require__("KFN4");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Heading/index.js
var Heading = __webpack_require__("bHe8");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Button/index.js + 4 modules
var Button = __webpack_require__("D7Vo");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/FeatureBlock/index.js + 1 modules
var FeatureBlock = __webpack_require__("b4OD");

// EXTERNAL MODULE: external "react-particles-js"
var external_react_particles_js_ = __webpack_require__("INZR");
var external_react_particles_js_default = /*#__PURE__*/__webpack_require__.n(external_react_particles_js_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saas/particles/particle-1.png
var particle_1 = __webpack_require__("J0TH");
var particle_1_default = /*#__PURE__*/__webpack_require__.n(particle_1);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saas/particles/particle-2.png
var particle_2 = __webpack_require__("7t0J");
var particle_2_default = /*#__PURE__*/__webpack_require__.n(particle_2);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saas/particles/particle-3.png
var particle_3 = __webpack_require__("6MyC");
var particle_3_default = /*#__PURE__*/__webpack_require__.n(particle_3);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saas/particles/particle-4.png
var particle_4 = __webpack_require__("k2L5");
var particle_4_default = /*#__PURE__*/__webpack_require__.n(particle_4);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saas/particles/particle-5.png
var particle_5 = __webpack_require__("q6ez");
var particle_5_default = /*#__PURE__*/__webpack_require__.n(particle_5);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saas/particles/particle-6.png
var particle_6 = __webpack_require__("KXjX");
var particle_6_default = /*#__PURE__*/__webpack_require__.n(particle_6);

// CONCATENATED MODULE: ./containers/Saas/Particle/index.js
var Particle_jsx = external_react_default.a.createElement;









const ParticlesComponent = () => {
  return Particle_jsx(external_react_default.a.Fragment, null, Particle_jsx(external_react_particles_js_default.a, {
    className: "particle",
    params: {
      particles: {
        number: {
          value: 6,
          density: {
            enable: true,
            value_area: 800
          }
        },
        shape: {
          type: ['images'],
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
            width: 22,
            height: 22
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
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saas/saas-banner.jpg
var saas_banner = __webpack_require__("93Ab");
var saas_banner_default = /*#__PURE__*/__webpack_require__.n(saas_banner);

// CONCATENATED MODULE: ./containers/Saas/BannerSection/bannerSection.style.js



const BannerWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "bannerSectionstyle__BannerWrapper",
  componentId: "sc-1uczega-0"
})(["padding-top:210px;padding-bottom:160px;background-image:url(", ");background-size:cover;background-position:center;background-repeat:no-repeat;background-attachment:fixed;min-height:100vh;position:relative;overflow:hidden;@media (max-width:990px){padding-top:180px;padding-bottom:60px;min-height:auto;}@media (max-width:767px){padding-top:130px;padding-bottom:20px;min-height:auto;}@media only screen and (max-width:480px){background:none;}.particle{position:absolute;width:50%;height:100%;top:0;left:0;overflow:hidden;@media (max-width:767px){display:none;}@media only screen and (max-width:480px){width:100%;}}.row{position:relative;z-index:1;}.button__wrapper{margin-top:40px;@media (max-width:767px){margin-bottom:30px;}.reusecore__button{&.outlined{border-color:rgba(82,104,219,0.2);}}}"], saas_banner_default.a);
const BannerObject = external_styled_components_default.a.div.withConfig({
  displayName: "bannerSectionstyle__BannerObject",
  componentId: "sc-1uczega-1"
})(["position:absolute;width:50%;height:100%;top:0;right:0;display:flex;align-items:center;@media (max-width:767px){display:none;}.objectWrapper{margin-left:auto;position:relative;.dashboardWrapper{position:absolute;top:0;right:0;.chatObject{position:absolute;top:20px;left:120px;}}}"]);
const DiscountLabel = external_styled_components_default.a.div.withConfig({
  displayName: "bannerSectionstyle__DiscountLabel",
  componentId: "sc-1uczega-2"
})(["display:inline-block;border-radius:4em;border:1px solid ", ";padding:7px 25px;box-shadow:0px 7px 25px 0px rgba(22,53,76,0.05);margin-bottom:30px;background-color:", ";@media (max-width:767px){padding:7px 15px;}"], Object(external_styled_system_["themeGet"])('colors.lightBorder', '#f1f4f6'), Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'));

/* harmony default export */ var bannerSection_style = (BannerWrapper);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saas/banner/bannerObject1.png
var bannerObject1 = __webpack_require__("knu/");
var bannerObject1_default = /*#__PURE__*/__webpack_require__.n(bannerObject1);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saas/banner/bannerObject2.png
var bannerObject2 = __webpack_require__("Ci5P");
var bannerObject2_default = /*#__PURE__*/__webpack_require__.n(bannerObject2);

// CONCATENATED MODULE: ./containers/Saas/BannerSection/index.js
var BannerSection_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }














const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle
}) => {
  const ButtonGroup = () => BannerSection_jsx(external_react_["Fragment"], null, BannerSection_jsx(Button["a" /* default */], _extends({
    title: "FREE TRAIL"
  }, btnStyle)), BannerSection_jsx(Button["a" /* default */], _extends({
    className: "outlined",
    title: "EXPLORE MORE",
    variant: "outlined"
  }, outlineBtnStyle)));

  return BannerSection_jsx(bannerSection_style, {
    id: "banner_section"
  }, BannerSection_jsx(Particle, null), BannerSection_jsx(Container["a" /* default */], null, BannerSection_jsx(Box["a" /* default */], _extends({
    className: "row"
  }, row), BannerSection_jsx(Box["a" /* default */], _extends({
    className: "col"
  }, col), BannerSection_jsx(DiscountLabel, null, BannerSection_jsx(Text["a" /* default */], _extends({
    content: "25% Discount"
  }, discountAmount)), BannerSection_jsx(Text["a" /* default */], _extends({
    content: "on every first project "
  }, discountText))), BannerSection_jsx(FeatureBlock["a" /* default */], {
    title: BannerSection_jsx(Heading["a" /* default */], _extends({
      content: "Ultimate Platform to monitor your best workflow."
    }, title)),
    description: BannerSection_jsx(Text["a" /* default */], _extends({
      content: "We help to create SaaS product that are innovative, differentiated with a superb User Experience, fully accessible through mobile devices. SaaS products are changing the world ."
    }, description)),
    button: BannerSection_jsx(ButtonGroup, null)
  })))), BannerSection_jsx(BannerObject, null, BannerSection_jsx("div", {
    className: "objectWrapper"
  }, BannerSection_jsx(Image["a" /* default */], {
    src: bannerObject1_default.a,
    alt: "BannerObject1"
  }), BannerSection_jsx("div", {
    className: "dashboardWrapper"
  }, BannerSection_jsx(Image["a" /* default */], {
    src: bannerObject2_default.a,
    alt: "BannerObject2"
  })))));
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center'
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, '70%', '50%', '45%']
  },
  title: {
    fontSize: ['22px', '34px', '30px', '55px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.5'
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '0'
  },
  btnStyle: {
    minWidth: ['120px', '120px', '120px', '156px'],
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'primaryWithBg'
  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#5167db',
    ml: '18px'
  },
  discountAmount: {
    fontSize: '14px',
    color: '#eb4d4b',
    mb: 0,
    as: 'span',
    mr: '0.4em',
    fontWeight: 700
  },
  discountText: {
    fontSize: ['13px', '14px'],
    color: '#0f2137',
    mb: 0,
    as: 'span',
    fontWeight: 500
  }
};
/* harmony default export */ var Saas_BannerSection = (BannerSection);
// CONCATENATED MODULE: ./containers/Saas/FeatureSection/featureSection.style.js

const FeatureSectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "featureSectionstyle__FeatureSectionWrapper",
  componentId: "sc-1s8fnmh-0"
})(["padding:80px 0 180px 0;@media (max-width:990px){padding:60px 0 60px 0;}@media (max-width:767px){padding:60px 0 30px 0;}.feature__block{position:relative;height:100%;transition:box-shadow 0.3s ease;@media (max-width:500px){padding:30px 0;}.icon__wrapper{position:relative;border-bottom-left-radius:6px;overflow:hidden;background:linear-gradient( -60deg,rgba(241,39,17,0.7),rgba(245,175,25,0.7) );.flaticon-flask{&:before{margin-left:8px;}}&:before,&:after{content:'';width:28px;height:calc(100% + 30px);position:absolute;}&:before{transform:rotate(45deg);background-color:rgba(255,255,255,0.15);}&:after{transform:rotate(-45deg);background-color:rgba(0,0,0,0.05);}}&:hover{", "}}.row{> .col{&:nth-child(-n + 3){}&:nth-child(3n + 3),&:last-child{}&:nth-child(1){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(236,0,140,0.75),rgba(255,103,103,0.75) );}}}&:nth-child(2){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(110,72,170,0.75),rgba(192,91,210,0.75) );}}}&:nth-child(3){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(241,39,17,0.7),rgba(245,175,25,0.7) );}}}&:nth-child(4){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(47,128,237,0.75),rgba(86,204,242,0.75) );}}}&:nth-child(5){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(50,207,167,0.75),rgba(150,201,61,0.75) );}}}}}"], ''
/* box-shadow: 0 40px 90px -30px rgba(39, 79, 117, 0.2); */
);
/* harmony default export */ var featureSection_style = (FeatureSectionWrapper);
// CONCATENATED MODULE: ./containers/Saas/FeatureSection/index.js
var FeatureSection_jsx = external_react_default.a.createElement;

function FeatureSection_extends() { FeatureSection_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return FeatureSection_extends.apply(this, arguments); }










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
    id: "service_section"
  }, FeatureSection_jsx(Container["a" /* default */], null, FeatureSection_jsx(Box["a" /* default */], sectionHeader, FeatureSection_jsx(Text["a" /* default */], FeatureSection_extends({
    content: "OUR SERVICES"
  }, sectionSubTitle)), FeatureSection_jsx(Heading["a" /* default */], FeatureSection_extends({
    content: "Featured Service that We Provide"
  }, sectionTitle))), FeatureSection_jsx(Box["a" /* default */], FeatureSection_extends({
    className: "row"
  }, row), Features.map((feature, index) => FeatureSection_jsx(Box["a" /* default */], FeatureSection_extends({
    className: "col"
  }, col, {
    key: index
  }), FeatureSection_jsx(FeatureBlock["a" /* default */], {
    icon: FeatureSection_jsx("i", {
      className: feature.icon
    }),
    wrapperStyle: blockWrapperStyle,
    iconStyle: iconStyle,
    contentStyle: contentStyle,
    title: FeatureSection_jsx(Heading["a" /* default */], FeatureSection_extends({
      content: feature.title
    }, featureTitle)),
    description: FeatureSection_jsx(Text["a" /* default */], FeatureSection_extends({
      content: feature.description
    }, featureDescription)),
    className: "saasFeature"
  }))))));
}; // FeatureSection style props


// FeatureSection default style
FeatureSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '40px', '40px', '80px']
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '10px'
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap'
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 3, 1 / 3]
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '20px', '20px']
  },
  // feature icon default style
  iconStyle: {
    width: ['70px', '75px', '75px', '84px'],
    height: ['70px', '75px', '75px', '84px'],
    borderRadius: '50%',
    bg: '#93d26e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: ['32px', '36px'],
    color: '#ffffff',
    overflow: 'hidden',
    mb: ['20px', '20px', '20px', '30px'],
    borderBottomLeftRadius: '50%'
  },
  // feature content default style
  contentStyle: {
    textAlign: 'left'
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '20px'],
    letterSpacing: '-0.020em'
  },
  // feature description default style
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.75',
    color: '#343d4ccc'
  }
};
/* harmony default export */ var Saas_FeatureSection = (FeatureSection);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: external "react-reveal/Zoom"
var Zoom_ = __webpack_require__("wtZI");
var Zoom_default = /*#__PURE__*/__webpack_require__.n(Zoom_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Card/index.js
var Card = __webpack_require__("rZdf");

// CONCATENATED MODULE: ./containers/Saas/VisitorSection/visitor.style.js

const VisitorSectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "visitorstyle__VisitorSectionWrapper",
  componentId: "atm1oi-0"
})(["min-height:630px;display:flex;align-items:center;margin-bottom:40px;position:relative;@media only screen and (max-width:1200px){min-height:500px;margin-bottom:45px;}@media only screen and (max-width:991px){min-height:370px;margin-bottom:40px;}@media (max-width:767px){min-height:auto;display:block;}"]);
const SectionObject = external_styled_components_default.a.div.withConfig({
  displayName: "visitorstyle__SectionObject",
  componentId: "atm1oi-1"
})(["position:absolute;width:55%;height:100%;top:0;left:0;display:flex;align-items:center;justify-content:flex-end;@media (max-width:767px){width:100%;position:relative;height:auto;top:auto;left:auto;}img{max-width:93%;height:auto;}.objectWrapper{margin-right:auto;position:relative;.dashboardWrapper{position:absolute;top:4vw;left:0;}}"]);

/* harmony default export */ var visitor_style = (VisitorSectionWrapper);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saas/saasvisitor1.png
var saasvisitor1 = __webpack_require__("MnFb");
var saasvisitor1_default = /*#__PURE__*/__webpack_require__.n(saasvisitor1);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saas/visitor_bg.png
var visitor_bg = __webpack_require__("IjfZ");
var visitor_bg_default = /*#__PURE__*/__webpack_require__.n(visitor_bg);

// CONCATENATED MODULE: ./containers/Saas/VisitorSection/index.js
var VisitorSection_jsx = external_react_default.a.createElement;

function VisitorSection_extends() { VisitorSection_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return VisitorSection_extends.apply(this, arguments); }

















const VisitorSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  btnStyle
}) => {
  return VisitorSection_jsx(visitor_style, {
    id: "visitorSection"
  }, VisitorSection_jsx(SectionObject, null, VisitorSection_jsx(Card["a" /* default */], VisitorSection_extends({
    className: "objectWrapper"
  }, imageWrapper), VisitorSection_jsx(Zoom_default.a, null, VisitorSection_jsx(Image["a" /* default */], {
    src: visitor_bg_default.a,
    alt: "BgImage"
  })), VisitorSection_jsx(Card["a" /* default */], VisitorSection_extends({
    className: "dashboardWrapper"
  }, imageWrapper), VisitorSection_jsx(Fade_default.a, {
    left: true
  }, VisitorSection_jsx(Image["a" /* default */], {
    src: saasvisitor1_default.a,
    alt: "VisitorDashboard1"
  }))))), VisitorSection_jsx(Container["a" /* default */], null, VisitorSection_jsx(Box["a" /* default */], textArea, VisitorSection_jsx(FeatureBlock["a" /* default */], {
    title: VisitorSection_jsx(Heading["a" /* default */], VisitorSection_extends({
      content: "Make your website growth with next level visitors"
    }, title)),
    description: VisitorSection_jsx(Text["a" /* default */], VisitorSection_extends({
      content: "For Enhanced performance we use LiteSpeed Web Server, HTTP/2, PHP7. We make your website faster, which will help you to increase search ranking!."
    }, description)),
    button: VisitorSection_jsx(link_default.a, {
      href: "#"
    }, VisitorSection_jsx("a", null, VisitorSection_jsx(Button["a" /* default */], VisitorSection_extends({
      title: "HOW IT WORKS"
    }, btnStyle))))
  }))));
};

VisitorSection.defaultProps = {
  textArea: {
    width: ['100%', '100%', '45%'],
    ml: [0, 0, '58%']
  },
  imageWrapper: {
    boxShadow: 'none'
  },
  title: {
    fontSize: ['20px', '26px', '26px', '36px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    lineHeight: '1.5'
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px']
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg'
  }
};
/* harmony default export */ var Saas_VisitorSection = (VisitorSection);
// CONCATENATED MODULE: ./containers/Saas/ServiceSection/service.style.js

const ServiceSectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "servicestyle__ServiceSectionWrapper",
  componentId: "sc-1nshczp-0"
})(["padding:80px 0 40px;@media (max-width:990px){padding:60px 0 0 0;}.feature__block{position:relative;height:100%;transition:box-shadow 0.3s ease;display:flex;@media (max-width:500px){padding:30px 0;}.icon__wrapper{position:relative;border-bottom-right-radius:6px;flex-shrink:0;margin-right:22px;background:#fff5f6;.flaticon-flask{&:before{margin-left:8px;}}}&:hover{", "}}.row{> .col{&:nth-child(-n + 3){}&:nth-child(3n + 3),&:last-child{}&:nth-child(1){.feature__block{.icon__wrapper{background:#fff5f6;color:#f55767;}}}&:nth-child(2){.feature__block{.icon__wrapper{background:#ebfff2;color:#29c05e;}}}&:nth-child(3){.feature__block{.icon__wrapper{background:#f1faff;color:#2595d4;}}}&:nth-child(4){.feature__block{.icon__wrapper{background:#fffae8;color:#e9b600;}}}&:nth-child(5){.feature__block{.icon__wrapper{background:#f5eeff;color:#a55cef;}}}&:nth-child(6){.feature__block{.icon__wrapper{background:#ffecfa;color:#e764a5;}}}}}"], ''
/* box-shadow: 0 40px 90px -30px rgba(39, 79, 117, 0.2); */
);
/* harmony default export */ var service_style = (ServiceSectionWrapper);
// CONCATENATED MODULE: ./containers/Saas/ServiceSection/index.js
var ServiceSection_jsx = external_react_default.a.createElement;

function ServiceSection_extends() { ServiceSection_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ServiceSection_extends.apply(this, arguments); }










const ServiceSection = ({
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
  return ServiceSection_jsx(service_style, {
    id: "feature_section"
  }, ServiceSection_jsx(Container["a" /* default */], null, ServiceSection_jsx(Box["a" /* default */], sectionHeader, ServiceSection_jsx(Text["a" /* default */], ServiceSection_extends({
    content: "OUR FEATURES"
  }, sectionSubTitle)), ServiceSection_jsx(Heading["a" /* default */], ServiceSection_extends({
    content: "Why you should choose our Saas"
  }, sectionTitle))), ServiceSection_jsx(Box["a" /* default */], ServiceSection_extends({
    className: "row"
  }, row), Service.map((feature, index) => ServiceSection_jsx(Box["a" /* default */], ServiceSection_extends({
    className: "col"
  }, col, {
    key: index
  }), ServiceSection_jsx(FeatureBlock["a" /* default */], {
    icon: ServiceSection_jsx("i", {
      className: feature.icon
    }),
    wrapperStyle: blockWrapperStyle,
    iconStyle: iconStyle,
    contentStyle: contentStyle,
    title: ServiceSection_jsx(Heading["a" /* default */], ServiceSection_extends({
      content: feature.title
    }, featureTitle)),
    description: ServiceSection_jsx(Text["a" /* default */], ServiceSection_extends({
      content: feature.description
    }, featureDescription)),
    className: "saasService"
  }))))));
}; // ServiceSection style props


// ServiceSection default style
ServiceSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['50px', '50px', '50px', '80px']
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '10px'
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap'
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3]
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '20px', '20px']
  },
  // feature icon default style
  iconStyle: {
    width: ['70px', '80px'],
    height: ['70px', '80px'],
    borderRadius: '50%',
    bg: '#93d26e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: ['32px', '36px'],
    color: '#ffffff',
    overflow: 'hidden',
    mb: '30px',
    borderBottomLeftRadius: '50%'
  },
  // feature content default style
  contentStyle: {
    textAlign: 'left',
    mt: '-5px'
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    letterSpacing: '-0.020em',
    mb: '10px'
  },
  // feature description default style
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.75',
    color: '#343d4ccc'
  }
};
/* harmony default export */ var Saas_ServiceSection = (ServiceSection);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/hosting/footer-bg.png
var footer_bg = __webpack_require__("i1V0");
var footer_bg_default = /*#__PURE__*/__webpack_require__.n(footer_bg);

// CONCATENATED MODULE: ./containers/Saas/Footer/footer.style.js


const FooterWrapper = external_styled_components_default.a.footer.withConfig({
  displayName: "footerstyle__FooterWrapper",
  componentId: "sc-69qp6n-0"
})(["position:relative;background-color:#f9fbfd;overflow:hidden;background:linear-gradient(to bottom,#f7f8fd 0%,#fafbff 100%);@media (min-width:576px){padding-top:130px;&:before{content:'';position:absolute;width:104%;padding-bottom:104%;border-top-right-radius:11%;top:14%;left:0;pointer-events:none;background-color:#fff;transform:rotate(-6deg);@media (max-width:767px){padding-bottom:150%;}}}.footer_container{background-repeat:no-repeat;background-position:center 50px;padding-top:80px;padding-bottom:80px;position:relative;@media (min-width:576px){background-image:url(", ");}@media (max-width:990px){padding-bottom:20px;}}"], footer_bg_default.a);
const List = external_styled_components_default.a.ul.withConfig({
  displayName: "footerstyle__List",
  componentId: "sc-69qp6n-1"
})([""]);
const ListItem = external_styled_components_default.a.li.withConfig({
  displayName: "footerstyle__ListItem",
  componentId: "sc-69qp6n-2"
})(["a{color:rgba(52,61,72,0.8);font-size:14px;line-height:36px;transition:all 0.2s ease;&:hover,&:focus{outline:0;text-decoration:none;color:#343d48;}}"]);

/* harmony default export */ var footer_style = (FooterWrapper);
// CONCATENATED MODULE: ./containers/Saas/Footer/index.js
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
    color: '#343d48',
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
    color: '#0f2137',
    fontSize: '16px',
    mb: '10px'
  }
};
/* harmony default export */ var Saas_Footer = (Footer);
// EXTERNAL MODULE: external "react-icons-kit"
var external_react_icons_kit_ = __webpack_require__("Oi65");
var external_react_icons_kit_default = /*#__PURE__*/__webpack_require__.n(external_react_icons_kit_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/GlideCarousel/index.js
var GlideCarousel = __webpack_require__("mnHf");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/GlideCarousel/glideSlide.js
var glideSlide = __webpack_require__("9NE4");

// CONCATENATED MODULE: ./containers/Saas/PricingSection/pricing.style.js


const PricingTable = external_styled_components_default.a.div.withConfig({
  displayName: "pricingstyle__PricingTable",
  componentId: "sc-1y3vvuu-0"
})(["border:1px solid #f2f4f7;border-radius:5px;padding:60px 45px;border-radius:5px;margin-bottom:30px;@media (max-width:767px){padding:45px 35px;}"]);
const PricingHead = external_styled_components_default.a.div.withConfig({
  displayName: "pricingstyle__PricingHead",
  componentId: "sc-1y3vvuu-1"
})(["margin-bottom:40px;"]);
const PricingPrice = external_styled_components_default.a.div.withConfig({
  displayName: "pricingstyle__PricingPrice",
  componentId: "sc-1y3vvuu-2"
})(["margin-bottom:30px;"]);
const PricingButton = external_styled_components_default.a.div.withConfig({
  displayName: "pricingstyle__PricingButton",
  componentId: "sc-1y3vvuu-3"
})(["text-align:center;margin-bottom:55px;"]);
const PricingList = external_styled_components_default.a.div.withConfig({
  displayName: "pricingstyle__PricingList",
  componentId: "sc-1y3vvuu-4"
})([""]);
const pricing_style_ListItem = external_styled_components_default.a.div.withConfig({
  displayName: "pricingstyle__ListItem",
  componentId: "sc-1y3vvuu-5"
})(["display:flex;margin-bottom:19px;&:last-child{margin-bottom:0;}.price_list_icon{color:#18d379;margin-right:10px;}"]);
const SwitchWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "pricingstyle__SwitchWrapper",
  componentId: "sc-1y3vvuu-6"
})(["text-align:center;margin-top:20px;.reusecore__switch{.reusecore__field-label{font-size:16px;font-weight:400;color:#5c636c;cursor:pointer;}input[type='checkbox']{&:checked{+ div{width:40px !important;background-color:", ";> div{left:17px !important;}}}+ div{background-color:#f0f0f0;background-color:#f0f0f0;border:0;width:40px;height:25px;> div{background-color:#fff;box-shadow:0px 2px 3px 0.24px rgba(31,64,104,0.25);width:21px;height:21px;top:2px;left:2px;}}}}"], Object(external_styled_system_["themeGet"])('colors.primary'));
const PricingButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "pricingstyle__PricingButtonWrapper",
  componentId: "sc-1y3vvuu-7"
})(["text-align:center;margin-top:30px;.reusecore__button{font-size:16px;font-weight:400;color:#6f7a87;background:#fff;height:50px;width:165px;border:1px solid #e4e9ee;&:nth-child(1){border-top-left-radius:5px;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:5px;border-right-color:transparent;}&:nth-child(2){border-top-left-radius:0;border-top-right-radius:5px;border-bottom-right-radius:5px;border-bottom-left-radius:0;border-left-color:transparent;}&.active-item{color:#5167db;border-color:#5167db;}@media (max-width:575px){font-size:14px;height:44px;width:120px;padding:0 5px;}}"]);

/* harmony default export */ var pricing_style = (PricingTable);
// EXTERNAL MODULE: external "react-icons-kit/icomoon/checkmark"
var checkmark_ = __webpack_require__("pi7v");

// CONCATENATED MODULE: ./containers/Saas/PricingSection/index.js
var PricingSection_jsx = external_react_default.a.createElement;

function PricingSection_extends() { PricingSection_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PricingSection_extends.apply(this, arguments); }















const PricingSection = ({
  sectionWrapper,
  row,
  col,
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
    data: MONTHLY_PRICING_TABLE,
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
  return PricingSection_jsx(Box["a" /* default */], PricingSection_extends({}, sectionWrapper, {
    id: "pricing_section"
  }), PricingSection_jsx(Container["a" /* default */], null, PricingSection_jsx(Box["a" /* default */], secTitleWrapper, PricingSection_jsx(Text["a" /* default */], secText), PricingSection_jsx(Heading["a" /* default */], secHeading), PricingSection_jsx(PricingButtonWrapper, null, PricingSection_jsx(Button["a" /* default */], {
    title: "Monthly Plan",
    className: activeStatus ? 'active-item' : '',
    onClick: () => setState({
      data: MONTHLY_PRICING_TABLE,
      active: true
    })
  }), PricingSection_jsx(Button["a" /* default */], {
    title: "Annual Plan",
    className: activeStatus === false ? 'active-item' : '',
    onClick: () => setState({
      data: YEARLY_PRICING_TABLE,
      active: false
    })
  }))), PricingSection_jsx(Box["a" /* default */], row, PricingSection_jsx(GlideCarousel["a" /* default */], {
    carouselSelector: "pricing-carousel",
    options: pricingCarouselOptions,
    controls: false
  }, PricingSection_jsx(external_react_default.a.Fragment, null, data.map((pricingTable, index) => PricingSection_jsx(glideSlide["a" /* default */], {
    key: `pricing-table-${index}`
  }, PricingSection_jsx(pricing_style, {
    freePlan: pricingTable.freePlan,
    className: "pricing_table"
  }, PricingSection_jsx(PricingHead, null, PricingSection_jsx(Heading["a" /* default */], PricingSection_extends({
    content: pricingTable.name
  }, nameStyle)), PricingSection_jsx(Text["a" /* default */], PricingSection_extends({
    content: pricingTable.description
  }, descriptionStyle))), PricingSection_jsx(PricingPrice, null, PricingSection_jsx(Text["a" /* default */], PricingSection_extends({
    content: pricingTable.price
  }, priceStyle)), PricingSection_jsx(Text["a" /* default */], PricingSection_extends({
    content: pricingTable.priceLabel
  }, priceLabelStyle))), PricingSection_jsx(PricingButton, null, PricingSection_jsx(link_default.a, {
    href: pricingTable.url
  }, PricingSection_jsx("a", null, pricingTable.freePlan ? PricingSection_jsx(Button["a" /* default */], PricingSection_extends({
    title: pricingTable.buttonLabel
  }, buttonStyle)) : PricingSection_jsx(Button["a" /* default */], PricingSection_extends({
    title: pricingTable.buttonLabel
  }, buttonFillStyle))))), PricingSection_jsx(PricingList, null, pricingTable.listItems.map((item, index) => PricingSection_jsx(pricing_style_ListItem, {
    key: `pricing-table-list-${index}`
  }, PricingSection_jsx(external_react_icons_kit_default.a, {
    icon: checkmark_["checkmark"],
    className: "price_list_icon",
    size: 13
  }), PricingSection_jsx(Text["a" /* default */], PricingSection_extends({
    content: item.content
  }, listContentStyle)))))))))))));
};

PricingSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '80px', '80px', '120px'],
    pb: ['20px', '20px', '20px', '80px']
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
    content: 'PRICING PLAN',
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '10px'
  },
  secHeading: {
    content: 'What’s our monthly pricing subscription',
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
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
    colors: 'primary',
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
/* harmony default export */ var Saas_PricingSection = (PricingSection);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saas/vendor-logos.png
var vendor_logos = __webpack_require__("I9Ys");
var vendor_logos_default = /*#__PURE__*/__webpack_require__.n(vendor_logos);

// CONCATENATED MODULE: ./containers/Saas/TrialSection/index.js
var TrialSection_jsx = external_react_default.a.createElement;

function TrialSection_extends() { TrialSection_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TrialSection_extends.apply(this, arguments); }











const TrialSection = ({
  sectionWrapper,
  row,
  title,
  description,
  textArea,
  imageArea,
  ImageOne,
  btnStyle,
  outlineBtnStyle
}) => {
  return TrialSection_jsx(Box["a" /* default */], sectionWrapper, TrialSection_jsx(Container["a" /* default */], null, TrialSection_jsx(Box["a" /* default */], row, TrialSection_jsx(Box["a" /* default */], imageArea, TrialSection_jsx(Image["a" /* default */], TrialSection_extends({}, ImageOne, {
    src: vendor_logos_default.a,
    alt: "VendorLogos"
  }))), TrialSection_jsx(Box["a" /* default */], textArea, TrialSection_jsx(Heading["a" /* default */], TrialSection_extends({}, title, {
    content: "Start your 30 days free trials today!"
  })), TrialSection_jsx(Text["a" /* default */], TrialSection_extends({}, description, {
    content: "We have provided 30 Days Money Back Guarantee in case of dissatisfaction with our product. We care for our customers and their values."
  })), TrialSection_jsx(saas_style_ButtonGroup, {
    className: "button_group"
  }, TrialSection_jsx(Button["a" /* default */], TrialSection_extends({
    title: "WORK HISTORY"
  }, btnStyle)), TrialSection_jsx(Button["a" /* default */], TrialSection_extends({
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
    fontSize: ['32px', '32px', '36px', '42px', '48px'],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '28px',
    textAlign: 'center',
    lineHeight: '1.25'
  },
  description: {
    fontSize: ['15px', '15px', '16px', '16px', '16px'],
    color: 'textColor',
    lineHeight: '2.1',
    textAlign: 'center',
    mb: ['35px', '35px', '40px', '60px']
  },
  ImageOne: {
    ml: 'auto',
    mr: 'auto'
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    colors: 'primaryWithBg'
  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#0f2137'
  }
};
/* harmony default export */ var Saas_TrialSection = (TrialSection);
// EXTERNAL MODULE: external "react-reveal/Slide"
var Slide_ = __webpack_require__("8qPd");
var Slide_default = /*#__PURE__*/__webpack_require__.n(Slide_);

// CONCATENATED MODULE: ./containers/Saas/TimelineSection/timeline.style.js

const TimelineWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "timelinestyle__TimelineWrapper",
  componentId: "sc-12jhrhj-0"
})([""]);
const TimelineDot = external_styled_components_default.a.div.withConfig({
  displayName: "timelinestyle__TimelineDot",
  componentId: "sc-12jhrhj-1"
})(["width:20px;height:20px;border-radius:50%;position:absolute;top:50%;left:0;box-shadow:0px 3px 8.46px 0.54px rgba(23,65,104,0.2);z-index:1;background:#fff;transform:translateY(-50%);&:after{content:'';position:absolute;width:12px;height:12px;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);background:#ebedf5;transition:0.25s ease-in-out;}@media (max-width:480px){width:16px;height:16px;&:after{width:10px;height:10px;}}"]);
const TimelineItem = external_styled_components_default.a.div.withConfig({
  displayName: "timelinestyle__TimelineItem",
  componentId: "sc-12jhrhj-2"
})(["position:relative;display:flex;align-items:center;margin-bottom:90px;padding-left:50px;&:first-child{&:before{display:none;}}&:last-child{margin-bottom:0;&:after{display:none;}}&:hover{", "{&:after{background:#5268db;}}}&:after,&:before{content:'';position:absolute;height:calc(50% + 45px);width:2px;background:#f0f0f1;left:9px;@media (max-width:480px){left:7px;}}&:before{bottom:50%;}&:after{top:50%;}@media (max-width:990px){margin-bottom:60px;}@media (max-width:480px){padding-left:30px;}"], TimelineDot);
const TimelineIndex = external_styled_components_default.a.div.withConfig({
  displayName: "timelinestyle__TimelineIndex",
  componentId: "sc-12jhrhj-3"
})([""]);
const TimelineContent = external_styled_components_default.a.div.withConfig({
  displayName: "timelinestyle__TimelineContent",
  componentId: "sc-12jhrhj-4"
})(["margin-left:30px;@media (max-width:480px){margin-left:20px;}"]);
const Hidden = external_styled_components_default.a.div.withConfig({
  displayName: "timelinestyle__Hidden",
  componentId: "sc-12jhrhj-5"
})(["overflow:hidden;"]);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saas/illustration.png
var illustration = __webpack_require__("KYuu");
var illustration_default = /*#__PURE__*/__webpack_require__.n(illustration);

// CONCATENATED MODULE: ./containers/Saas/TimelineSection/index.js
var TimelineSection_jsx = external_react_default.a.createElement;

function TimelineSection_extends() { TimelineSection_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TimelineSection_extends.apply(this, arguments); }















const TimelineSection = ({
  sectionWrapper,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  row,
  col,
  button,
  textArea,
  imageArea,
  imageTwo,
  buttonWrapper,
  indexStyle,
  timelineTitle,
  timelineDescription
}) => {
  return TimelineSection_jsx(Box["a" /* default */], sectionWrapper, TimelineSection_jsx(Container["a" /* default */], null, TimelineSection_jsx(Box["a" /* default */], sectionHeader, TimelineSection_jsx(Text["a" /* default */], TimelineSection_extends({}, sectionSubTitle, {
    content: "WORKING STEP"
  })), TimelineSection_jsx(Heading["a" /* default */], TimelineSection_extends({}, sectionTitle, {
    content: "How Pestro work behind the scenes"
  }))), TimelineSection_jsx(Box["a" /* default */], row, TimelineSection_jsx(Box["a" /* default */], TimelineSection_extends({}, col, imageArea), TimelineSection_jsx(Fade_default.a, {
    bottom: true
  }, TimelineSection_jsx(Image["a" /* default */], TimelineSection_extends({}, imageTwo, {
    src: illustration_default.a,
    alt: "Illustration"
  })))), TimelineSection_jsx(Box["a" /* default */], TimelineSection_extends({}, col, textArea), TimelineSection_jsx(TimelineWrapper, null, Timeline.map((item, index) => TimelineSection_jsx(TimelineItem, {
    key: `timeline-item-${index}`
  }, TimelineSection_jsx(TimelineIndex, null, TimelineSection_jsx(Hidden, null, TimelineSection_jsx(Slide_default.a, {
    bottom: true
  }, TimelineSection_jsx(Text["a" /* default */], TimelineSection_extends({
    as: "span",
    content: item.index || `0${index + 1}`
  }, indexStyle))))), TimelineSection_jsx(TimelineContent, null, TimelineSection_jsx(Hidden, null, TimelineSection_jsx(Slide_default.a, {
    bottom: true,
    delay: 100
  }, TimelineSection_jsx(Heading["a" /* default */], TimelineSection_extends({
    as: "h2",
    content: item.title
  }, timelineTitle)))), TimelineSection_jsx(Hidden, null, TimelineSection_jsx(Slide_default.a, {
    bottom: true,
    delay: 200
  }, TimelineSection_jsx(Text["a" /* default */], TimelineSection_extends({
    content: item.description
  }, timelineDescription))))), TimelineSection_jsx(TimelineDot, null)))))), TimelineSection_jsx(Box["a" /* default */], buttonWrapper, TimelineSection_jsx(link_default.a, {
    href: "#"
  }, TimelineSection_jsx("a", null, TimelineSection_jsx(Button["a" /* default */], TimelineSection_extends({}, button, {
    title: "HIRE FOR PROJECT"
  })))))));
};

TimelineSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '80px', '80px'],
    pb: ['60px', '80px', '80px', '80px']
  },
  // section header default style
  sectionHeader: {
    mb: '56px'
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '10px'
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
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
    width: ['100%', '100%', '55%', '50%', '55%'],
    mb: ['40px', '40px', '0', '0', '0']
  },
  imageArea: {
    width: ['100%', '100%', '45%', '50%', '45%'],
    mb: ['30px', '40px', '40px', '0', '0']
  },
  title: {
    fontSize: ['30px', '38px', '38px', '48px', '48px'],
    fontWeight: '300',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '15px'
  },
  description: {
    fontSize: '16px',
    color: 'textColor',
    lineHeight: '1.75',
    mb: '33px'
  },
  buttonWrapper: {
    mt: ['25px', '50px'],
    flexBox: true,
    justifyContent: 'center'
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    height: '46px'
  },
  imageOne: {
    mb: '40px',
    ml: 'auto',
    mr: 'auto'
  },
  imageTwo: {
    ml: 'auto',
    mr: 'auto'
  },
  indexStyle: {
    fontSize: ['36px', '42px', '52px', '56px', '72px'],
    fontWeight: '300',
    color: '#eaebec',
    display: 'block',
    lineHeight: '1',
    mb: '0'
  },
  timelineTitle: {
    fontSize: ['16px', '17px', '18px', '18px', '20px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '13px'
  },
  timelineDescription: {
    fontSize: ['14px', '15px', '15px', '15px', '16px'],
    lineHeight: '2',
    color: '#5d646d',
    mb: '0'
  }
};
/* harmony default export */ var Saas_TimelineSection = (TimelineSection);
// CONCATENATED MODULE: ./containers/Saas/TestimonialSection/testimonialSection.style.js


const TestimonialSectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "testimonialSectionstyle__TestimonialSectionWrapper",
  componentId: "d5eg1p-0"
})(["padding:80px 0 120px;overflow:hidden;@media (max-width:990px){padding-bottom:80px;}@media (max-width:767px){padding-top:40px;}.glide{max-width:954px;margin:0 auto;.glide__slide{display:flex;margin-bottom:40px;@media only screen and (max-width:991px){padding-top:30px;}@media only screen and (max-width:680px){flex-direction:column-reverse;}}.glide__controls{position:relative;bottom:0;.reusecore__button{&:hover{color:", ";}}}}"], Object(external_styled_system_["themeGet"])('colors.quoteText', '#343d48'));
const TextWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "testimonialSectionstyle__TextWrapper",
  componentId: "d5eg1p-1"
})(["max-width:540px;margin-right:auto;position:relative;padding-left:12px;margin-right:30px;p{text-indent:27px;margin-bottom:25px;}i{color:rgba(52,61,72,0.2);font-size:20px;position:absolute;top:0;left:12px;z-index:-1;}"]);
const ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "testimonialSectionstyle__ImageWrapper",
  componentId: "d5eg1p-2"
})(["width:256px;height:256px;position:relative;@media only screen and (max-width:680px){margin-bottom:40px;}.reusecore__button{position:absolute;z-index:2;bottom:0;left:20px;width:65px;height:65px;font-size:26px;background-color:rgb(220,57,95);box-shadow:0px 10px 28.2px 1.8px rgba(23,65,104,0.2);}"]);
const RoundWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "testimonialSectionstyle__RoundWrapper",
  componentId: "d5eg1p-3"
})(["width:256px;height:256px;border-radius:50%;box-sizing:border-box;border-bottom-right-radius:10px;background:rgb(232,230,192);background:radial-gradient( circle,rgba(232,230,192,1) 0%,rgba(199,195,134,1) 100% );overflow:hidden;"]);
const ClientName = external_styled_components_default.a.div.withConfig({
  displayName: "testimonialSectionstyle__ClientName",
  componentId: "d5eg1p-4"
})(["display:flex;align-items:center;@media (max-width:575px){flex-direction:column;align-items:inherit;}"]);

/* harmony default export */ var testimonialSection_style = (TestimonialSectionWrapper);
// CONCATENATED MODULE: ./containers/Saas/TestimonialSection/index.js
var TestimonialSection_jsx = external_react_default.a.createElement;

function TestimonialSection_extends() { TestimonialSection_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TestimonialSection_extends.apply(this, arguments); }












const TestimonialSection = ({
  sectionSubTitle,
  btnWrapperStyle,
  commentStyle,
  nameStyle,
  btnStyle,
  designationStyle
}) => {
  // Glide js options
  const glideOptions = {
    type: 'carousel',
    autoplay: 4000,
    perView: 1
  };
  return TestimonialSection_jsx(testimonialSection_style, {
    id: "testimonial_section"
  }, TestimonialSection_jsx(Container["a" /* default */], null, TestimonialSection_jsx(Text["a" /* default */], TestimonialSection_extends({
    content: "CLIENT COMMENTS"
  }, sectionSubTitle)), TestimonialSection_jsx(GlideCarousel["a" /* default */], {
    options: glideOptions,
    buttonWrapperStyle: btnWrapperStyle,
    nextButton: TestimonialSection_jsx(Button["a" /* default */], TestimonialSection_extends({
      icon: TestimonialSection_jsx("i", {
        className: "flaticon-next"
      }),
      variant: "textButton",
      "aria-label": "next"
    }, btnStyle)),
    prevButton: TestimonialSection_jsx(Button["a" /* default */], TestimonialSection_extends({
      icon: TestimonialSection_jsx("i", {
        className: "flaticon-left-arrow"
      }),
      variant: "textButton",
      "aria-label": "prev"
    }, btnStyle))
  }, TestimonialSection_jsx(external_react_["Fragment"], null, Testimonial.map((item, index) => TestimonialSection_jsx(glideSlide["a" /* default */], {
    key: index
  }, TestimonialSection_jsx(external_react_["Fragment"], null, TestimonialSection_jsx(TextWrapper, null, TestimonialSection_jsx("i", {
    className: "flaticon-quotes"
  }), TestimonialSection_jsx(Text["a" /* default */], TestimonialSection_extends({
    content: item.comment
  }, commentStyle)), TestimonialSection_jsx(ClientName, null, TestimonialSection_jsx(Heading["a" /* default */], TestimonialSection_extends({
    content: item.name
  }, nameStyle)), TestimonialSection_jsx(Heading["a" /* default */], TestimonialSection_extends({
    content: item.designation
  }, designationStyle)))), TestimonialSection_jsx(ImageWrapper, null, TestimonialSection_jsx(RoundWrapper, null, TestimonialSection_jsx(Image["a" /* default */], {
    src: item.avatar_url,
    alt: "Client Image"
  })), TestimonialSection_jsx(Button["a" /* default */], {
    variant: "fab",
    icon: TestimonialSection_jsx("i", {
      className: item.social_icon
    }),
    "aria-label": "social"
  })))))))));
}; // TestimonialSection style props


// TestimonialSection default style
TestimonialSection.defaultProps = {
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '20px',
    ml: 'auto',
    mr: 'auto',
    pl: '12px',
    maxWidth: '954px'
  },
  // client comment style
  commentStyle: {
    color: '#0f2137',
    fontWeight: '400',
    fontSize: ['22px', '22px', '22px', '30px'],
    lineHeight: '1.72',
    mb: '47px'
  },
  // client name style
  nameStyle: {
    as: 'h3',
    color: '#343d48',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '30px',
    mb: 0
  },
  // client designation style
  designationStyle: {
    as: 'h5',
    color: 'rgba(52, 61, 72, 0.8)',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '30px',
    mb: 0,
    ml: ['0', '10px']
  },
  // glide slider nav controls style
  btnWrapperStyle: {
    position: 'absolute',
    bottom: '62px',
    left: '12px'
  },
  // next / prev btn style
  btnStyle: {
    minWidth: 'auto',
    minHeight: 'auto',
    mr: '13px',
    fontSize: '16px',
    color: '#343d484d'
  }
};
/* harmony default export */ var Saas_TestimonialSection = (TestimonialSection);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saas/map.png
var map = __webpack_require__("kJPg");
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// CONCATENATED MODULE: ./containers/Saas/PartnerSection/partner.style.js


const PartnerSectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "partnerstyle__PartnerSectionWrapper",
  componentId: "sc-195aylg-0"
})(["padding:120px 0;background-color:#fafbff;background-image:url(", ");background-repeat:no-repeat;background-position:25% center;@media (max-width:990px){padding:100px 0;}@media (max-width:767px){padding:80px 0;}@media (max-width:575px){padding:60px 0;}"], map_default.a);
/* harmony default export */ var partner_style = (PartnerSectionWrapper);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/saas/partner.png
var partner = __webpack_require__("y5Wq");
var partner_default = /*#__PURE__*/__webpack_require__.n(partner);

// CONCATENATED MODULE: ./containers/Saas/PartnerSection/index.js
var PartnerSection_jsx = external_react_default.a.createElement;

function PartnerSection_extends() { PartnerSection_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PartnerSection_extends.apply(this, arguments); }












const PartnerSection = ({
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea
}) => {
  return PartnerSection_jsx(partner_style, null, PartnerSection_jsx(Container["a" /* default */], null, PartnerSection_jsx(Box["a" /* default */], row, PartnerSection_jsx(Box["a" /* default */], PartnerSection_extends({}, col, imageArea), PartnerSection_jsx(Image["a" /* default */], {
    src: partner_default.a,
    alt: "Domain Image"
  })), PartnerSection_jsx(Box["a" /* default */], PartnerSection_extends({}, col, textArea), PartnerSection_jsx(Heading["a" /* default */], PartnerSection_extends({}, title, {
    content: "Meet our business partner who work behind the scene"
  })), PartnerSection_jsx(Text["a" /* default */], PartnerSection_extends({}, description, {
    content: "You can trust us for any kind of services and some of the world class companies have also trusted us.So have faith and keep in touch with us ."
  })), PartnerSection_jsx(Box["a" /* default */], null, PartnerSection_jsx(link_default.a, {
    href: "#"
  }, PartnerSection_jsx("a", null, PartnerSection_jsx(Button["a" /* default */], PartnerSection_extends({}, button, {
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
    lineHeight: '1.5'
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
/* harmony default export */ var Saas_PartnerSection = (PartnerSection);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Accordion/index.js + 1 modules
var Accordion = __webpack_require__("aVK5");

// EXTERNAL MODULE: external "react-icons-kit/entypo/plus"
var plus_ = __webpack_require__("Av/8");

// EXTERNAL MODULE: external "react-icons-kit/entypo/minus"
var minus_ = __webpack_require__("8N94");

// CONCATENATED MODULE: ./containers/Saas/FaqSection/faqSection.style.js

const FaqSectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "faqSectionstyle__FaqSectionWrapper",
  componentId: "sc-1bu8i5x-0"
})(["padding:80px 0;background:#fafbff;.reusecore__accordion{max-width:820px;margin:0 auto;border-bottom:1px solid #ebebeb;.accordion__item{border-top:0;border-bottom:1px solid #ebebeb;&:last-child{border-bottom:0;}.accordion__header{padding:20px 30px;}.accordion__body{padding:5px 30px 20px;}}}"]);
/* harmony default export */ var faqSection_style = (FaqSectionWrapper);
// CONCATENATED MODULE: ./containers/Saas/FaqSection/index.js
var FaqSection_jsx = external_react_default.a.createElement;

function FaqSection_extends() { FaqSection_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return FaqSection_extends.apply(this, arguments); }















const FaqSection = ({
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  titleStyle,
  descriptionStyle,
  buttonWrapper,
  button
}) => {
  return FaqSection_jsx(faqSection_style, {
    id: "faq_section"
  }, FaqSection_jsx(Container["a" /* default */], null, FaqSection_jsx(Box["a" /* default */], sectionHeader, FaqSection_jsx(Text["a" /* default */], sectionSubTitle), FaqSection_jsx(Heading["a" /* default */], sectionTitle)), FaqSection_jsx(Box["a" /* default */], {
    className: "row"
  }, FaqSection_jsx(Accordion["a" /* Accordion */], null, FaqSection_jsx(external_react_["Fragment"], null, Faq.map((faqItem, index) => FaqSection_jsx(Accordion["c" /* AccordionItem */], {
    key: index,
    expanded: faqItem.expend
  }, FaqSection_jsx(external_react_["Fragment"], null, FaqSection_jsx(Accordion["d" /* AccordionTitle */], null, FaqSection_jsx(external_react_["Fragment"], null, FaqSection_jsx(Heading["a" /* default */], FaqSection_extends({
    content: faqItem.title
  }, titleStyle)), FaqSection_jsx(Accordion["f" /* IconWrapper */], null, FaqSection_jsx(Accordion["g" /* OpenIcon */], null, FaqSection_jsx(external_react_icons_kit_["Icon"], {
    icon: minus_["minus"],
    size: 18
  })), FaqSection_jsx(Accordion["e" /* CloseIcon */], null, FaqSection_jsx(external_react_icons_kit_["Icon"], {
    icon: plus_["plus"],
    size: 18
  }))))), FaqSection_jsx(Accordion["b" /* AccordionBody */], null, FaqSection_jsx(Text["a" /* default */], FaqSection_extends({
    content: faqItem.description
  }, descriptionStyle)))))))), FaqSection_jsx(Box["a" /* default */], buttonWrapper, FaqSection_jsx(link_default.a, {
    href: "#"
  }, FaqSection_jsx("a", null, FaqSection_jsx(Button["a" /* default */], button)))))));
}; // FaqSection style props


// FaqSection default style
FaqSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: '56px'
  },
  // sub section default style
  sectionSubTitle: {
    content: 'FREQUENTLY ASKED QUESTIONS',
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '5px'
  },
  // section title default style
  sectionTitle: {
    content: 'Want to ask something about us ?',
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  // accordion title default style
  titleStyle: {
    fontSize: ['16px', '19px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  // accordion description default style
  descriptionStyle: {
    fontSize: '15px',
    color: '#5d646d',
    lineHeight: '1.75',
    mb: '0',
    fontWeight: '400'
  },
  buttonWrapper: {
    mt: `${11}`,
    flexBox: true,
    justifyContent: 'center'
  },
  button: {
    title: 'EXPLORE FORUM',
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
/* harmony default export */ var Saas_FaqSection = (FaqSection);
// CONCATENATED MODULE: ./pages/saas.js
var saas_jsx = external_react_default.a.createElement;




















/* harmony default export */ var saas = __webpack_exports__["default"] = (() => {
  return saas_jsx(external_styled_components_["ThemeProvider"], {
    theme: saasTheme
  }, saas_jsx(external_react_["Fragment"], null, saas_jsx(head_default.a, null, saas_jsx("title", null, "Saas | A react next landing page"), saas_jsx("meta", {
    name: "Description",
    content: "React next landing page"
  }), saas_jsx("meta", {
    name: "theme-color",
    content: "#ec5555"
  }), saas_jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i",
    rel: "stylesheet"
  })), saas_jsx(style["a" /* ResetCSS */], null), saas_jsx(GlobalStyle, null), saas_jsx(ContentWrapper, null, saas_jsx(external_react_stickynode_default.a, {
    top: 0,
    innerZ: 9999,
    activeClass: "sticky-nav-active"
  }, saas_jsx(DrawerContext["b" /* DrawerProvider */], null, saas_jsx(Saas_Navbar, null))), saas_jsx(Saas_BannerSection, null), saas_jsx(Saas_FeatureSection, null), saas_jsx(Saas_VisitorSection, null), saas_jsx(Saas_ServiceSection, null), saas_jsx(Saas_PricingSection, null), saas_jsx(Saas_TestimonialSection, null), saas_jsx(Saas_PartnerSection, null), saas_jsx(Saas_TimelineSection, null), saas_jsx(Saas_FaqSection, null), saas_jsx(Saas_TrialSection, null), saas_jsx(Saas_Footer, null))));
});

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

/***/ "k2L5":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC10lEQVRYhb3XW4jUdRQH8M9uq4Y3DImQ9UFIuqBdMCSFHqQiehAEyQdpC0IkrVRCRbogUT74kFoaTUX4oAWB5IMGPXSBgrDAxMva2hIRUoj2kC5rgrnawznLTNvOzv8/jnNg+H/nzPmf8/2f/+9cpqOnd8AoMg67MRHPYFSjVkhXHf396El8Bi/cKAKddfTH0J94Fea3m8BlPJf4JryX17YRgK/wceJ5eL7dBGA9zid+A90tijseCzC+EYGzeCnxVOxoQfBHcAKHUGlEAD7AD4mX4fEmA9+GvfgSd6RuahECV0UlXMnv7+DmEoE78SxOqZb2EHZiRRECcBS7Et+OVwvedx++E1U0LXWH8SDWYaAoAdiM3xNvwF1j2E7G9gy2IHUXsDaD/zhsWIbAoGANE1BBxyh2S9GHF1U77Se4W2Txaq1xGQKwH58lXqT6TmEWDuJTzEzdL3gMy0VL/5+UJQBr8HfibeJ0b8JJLE79ZbyOe/HFWM7qDaOx5Ld0vhW3iqecXPP716KN/1zEWTMZgD24mHg4+Dk8jUeLBm+GQAdWiE42qUZ/EfeIRnOtjMMyBObiW3yI6akbzOsksbiUliIEJor3fQQP1QTeiNn4M3WbRSW0lMBicbo3iTUNDmAO3hTDamMN0V0jHTRLoBv7RF3PSt1pLMnP6RrbPfimhvDS6yHQJbpdH55I3RXxtHPE04+Ua1gtah/e9t+yLExgvhi7b2FK6g7hAZHmQfWlL0kSXfC1MgSmiBH7vVi9iC1olTh0xwv62oJfE68Tk7AQgYrY94az8ZGYdO8bMTgayCXV9b0r/Tassk7VjtYvuthT4nQ3I5+LwwsLsbLRDR09vQPjRLqOqx6k65Fu/CR2yL9ENs/VM+7EP2JxaEVw+AOvJL5FTMy60uwwaiQV1a3nSTzcbgJDYhEdEgPsXfFfoG0EiAxUEt+pTlk2s5CUkZcxQzSxo6MZ/Av4qY3UFBHrKQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "kJPg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/map-18b073154fe6a34a0819d1c79f404288.png";

/***/ }),

/***/ "knu/":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bannerObject1-3bbc95f8b66628182211d15de46e941b.png";

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

/***/ "pi7v":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/icomoon/checkmark");

/***/ }),

/***/ "q6ez":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAeFBMVEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEUjQUZpAAAAJ3RSTlMAAQ8RKCk/QkNERkddiYqNjpmaoq+xs7/H19jb3N3w8vP09vn6/f6Z4ZSSAAAAlUlEQVQY022Q2xLBQABDz9Yqil6pojetyv//oQeWquYxMzmTBABWybXvr8kaJ3vSWyf7cvxGag9xfGilxgewtYbQA/DCQbUFU+ixc4jdQ4VhI0UfKqG0IVW3+Fpep5RSOSPlKunHOYjU0/xbl9/gURXZFJ+xnZYI5qpiaw3716D9oHo5Pxts4c4prEOYIK3ut3MaGIAnH5MQr/fEE/gAAAAASUVORK5CYII="

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

/***/ }),

/***/ "y5Wq":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })

/******/ });