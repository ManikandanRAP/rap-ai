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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "0YK7":
/***/ (function(module, exports) {

module.exports = require("rc-tabs");

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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wXAh");


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

/***/ "4VqO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Box/index.js
var Box = __webpack_require__("l54f");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Text/index.js
var Text = __webpack_require__("4Af6");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Heading/index.js
var Heading = __webpack_require__("bHe8");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Image/index.js
var Image = __webpack_require__("KFN4");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/FeatureBlock/index.js + 1 modules
var FeatureBlock = __webpack_require__("b4OD");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/data/Agency/index.js
var Agency = __webpack_require__("sOBS");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("H3JQ");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./containers/Agency/TeamSection/teamSection.style.js

const TeamSectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "teamSectionstyle__TeamSectionWrapper",
  componentId: "sftqbi-0"
})(["padding:80px 0;overflow:hidden;@media (max-width:990px){padding:60px 0;}.team__member{.icon__wrapper{}}"]);
const SocialLinks = external_styled_components_default.a.div.withConfig({
  displayName: "teamSectionstyle__SocialLinks",
  componentId: "sftqbi-1"
})(["margin-top:12px;> button,a{margin:3px;cursor:pointer;width:30px;height:24px;line-height:20px;background-color:transparent;border-radius:3px;border:1px solid rgba(15,33,55,0.26);color:#0f2137;padding:1px 6px;font-size:13px;display:inline-block;transition:all 0.2s ease;&:hover,&:focus{outline:none;&.flaticon-facebook-logo{color:#ffffff;border-color:#3c5a99;background-color:#3c5a99;}&.flaticon-twitter-logo-silhouette{color:#ffffff;border-color:#1da1f2;background-color:#1da1f2;}&.flaticon-instagram{color:#ffffff;border-color:#fb3958;background-color:#fb3958;}&.flaticon-dribble-logo{color:#ffffff;border-color:#ea4c89;background-color:#ea4c89;}}}"]);

/* harmony default export */ var teamSection_style = (TeamSectionWrapper);
// CONCATENATED MODULE: ./containers/Agency/TeamSection/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const TeamSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  memberName,
  designation,
  contentStyle
}) => {
  return __jsx(teamSection_style, {
    id: "teamSection"
  }, __jsx(Container["a" /* default */], null, __jsx(Box["a" /* default */], sectionHeader, __jsx(Text["a" /* default */], _extends({
    content: "TEAM MEMBER"
  }, sectionSubTitle)), __jsx(Heading["a" /* default */], _extends({
    content: "Meet with team member behind scense"
  }, sectionTitle))), __jsx(Box["a" /* default */], _extends({
    className: "row"
  }, row), Agency["a" /* default */].teamMember.map((member, index) => __jsx(Box["a" /* default */], _extends({
    className: "col"
  }, col, {
    key: `team_key-${index}`
  }), __jsx(FeatureBlock["a" /* default */], {
    id: `member-${member.id}`,
    className: "team__member",
    icon: __jsx(Image["a" /* default */], {
      src: member.thumbnail_url,
      alt: `Team member photo ${member.id}`,
      className: "member__photo"
    }),
    contentStyle: contentStyle,
    title: __jsx(Heading["a" /* default */], _extends({
      content: member.name
    }, memberName)),
    description: __jsx(external_react_["Fragment"], null, __jsx(Text["a" /* default */], _extends({
      content: member.designation
    }, designation)), __jsx(SocialLinks, null, member.social_links.map((social, index) => __jsx("a", {
      href: social.url,
      key: `profile_id-${index}`,
      className: social.icon,
      "aria-label": social.icon
    }))))
  }))))));
}; // TeamSection style props


// TeamSection default style
TeamSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '56px']
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#10ac84',
    mb: '10px'
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  // Team member col default style
  col: {
    width: [1, 1 / 2, 1 / 3, 1 / 3],
    pl: '15px',
    pr: '15px',
    mb: '30px'
  },
  // Team member content default style
  contentStyle: {
    textAlign: 'center',
    mt: '25px'
  },
  // Team member memberName default style
  memberName: {
    fontSize: ['18px', '18px', '16px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: '8px',
    letterSpacing: '-0.020em'
  },
  // Team member description default style
  designation: {
    fontSize: ['15px', '16px', '14px', '17px'],
    lineHeight: '1',
    color: 'rgba(15, 33, 55, 0.6)',
    mb: 0
  }
};
/* harmony default export */ var Agency_TeamSection = __webpack_exports__["a"] = (TeamSection);

/***/ }),

/***/ "4gB6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgencyWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


/* agency global style */

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  body {
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
  /* Drawer menu style */
  .drawer {
    .drawer-content-wrapper {
      @media only screen and (max-width: 480px) {
        width: 320px !important;
      }
      .reusecore-drawer__close {
        position: absolute;
        top: 20px;
        right: 30px;
        > button {
          box-shadow: 0px 8px 38px 0px rgba(16, 172, 132, 0.5);
          transition: all 0.3s ease;
          svg {
            width: 22px;
            height: 22px;
          }
          &:hover {
            opacity: 0.9;
          }
        }
      }
      .scrollspy__menu {
        padding: 60px 71px;
        max-height: 505px;
        overflow-x: auto;
        @media only screen and (max-width: 320px) {
          max-height: 380px;
        }
        li {
          margin: 35px 0;
          &:first-child {
            margin-top: 0;
          }
          &:last-child {
            margin-bottom: 0;
          }
          a {
            display: block;
            color: #20201d;
            font-size: 22px;
            font-weight: 400;
            transition: all 0.3s ease;
            &:hover {
              color: ${Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#10ac84')};
            }
          }
          &.is-current {
            a {
              color: ${Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#10ac84')};
              position: relative;
              &:before {
                content: '';
                display: block;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: ${Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#10ac84')};
                position: absolute;
                top: calc(50% - 8px / 2);
                left: -20px;
              }
            }
          }
        }
      }
      .copyright_section {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        padding-left: 71px;
        padding-bottom: 56px;
        background-color: ${Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')};
      }
    }
  }
  /* Modal default style */
  button.modalCloseBtn {
    color: ${Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff')} !important;
    &.alt {
      background-color: ${Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#10ac84')} !important;
      box-shadow: 0 8px 38px rgba(16, 172, 132, 0.5) !important;
    }
  }
  .reuseModalHolder {
    border: 0 !important;
    background-color: transparent !important;
    &.search-modal,
    &.video-modal {
      background-color: rgba(255, 255, 255, 0.96) !important;
      overflow-y: auto !important;
      .innerRndComponent {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        iframe {
          max-width: 700px !important;
          max-height: 380px !important;
          width: 100% !important;
          height: 100% !important;
          border-radius: 5px !important;
        }
      }
    }
    &.demo_switcher_modal {
      border: 0 !important;
      background-color: rgba(16, 30, 77, 0.8) !important;
      .innerRndComponent {
        border-radius: 8px !important;
      }
    }
    &.video-modal {
      background-color: transparent !important;
    }
    .innerRndComponent {
      padding-right: 0 !important;
    }
  }
  .reuseModalCloseBtn {
    cursor: pointer !important;
  }

  .reuseModalOverlay,
  .reuseModalParentWrapper{
    z-index: 99999!important;
  }

    .reuseModalHolder.login-modal{
      @media (min-width: 768px) {
        top: 0!important;
        left: 0!important;
        max-width: 100%!important;
        max-height: 100%!important;
      }
    }

    .reuseModalHolder.search-modal{
      top: 0!important;
      left: 0!important;
      max-width: 100%!important;
      max-height: 100%!important;
      width: 100%;
      height: 100%;
    }

    .reuseModalHolder.login-modal .innerRndComponent{
      overflow-y: auto;
    }
`;
/* agency wrapper style */

const AgencyWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "agencystyle__AgencyWrapper",
  componentId: "sc-1a7lsl8-0"
})(["overflow:hidden;.reusecore__navbar{width:100%;position:fixed;left:0;top:0;transition:all 0.3s ease;.reusecore__button{color:", ";font-size:18px;@media only screen and (max-width:480px){color:", ";}}.hamburgMenu__bar{margin-left:8px;> span{background-color:", ";@media only screen and (max-width:480px){background-color:", ";}}}}.sticky-nav-active{.reusecore__navbar{background-color:", ";box-shadow:0 0 20px rgba(0,0,0,0.1);padding:15px auto;.reusecore__button{color:", ";}.hamburgMenu__bar > span{background-color:", ";}}}", " ", " ", " ", " ", " ", ""], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#10ac84'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#10ac84'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#10ac84'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#10ac84'), styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"]);
GlobalStyle.displayName = 'GlobalStyle';
AgencyWrapper.displayName = 'AgencyWrapper';


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

/***/ "9Zkp":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAMAAADX9CSSAAAAhFBMVEX7Lo/////7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo9mO0NAAAAALHRSTlMAAAIFBgoNDg8QEhcaHyAhIyosNTdASUtSVVteX2dobm9xcnR1dnh6fH5/gGXWhEoAAADvSURBVCjPVdHLYoJAAEPRDNSqQCnvp1alIg73//+vC6Q4WZ5dEkmSFJ+eQx1IklmycGoB5jZy3b/zSp+8ew63z7ibAX4yb3XvAoWksLEA19xfPIPRlyQdqwngnhpJOkOpV3blCNgvSQlMu9Vl/OIGvaQeKm1uzBEeUgT24HgMg9RCI8c7qBXMzKHj4cwcqIZOjjfQGg0QO36wEBk9YO94Bb0x6mEoPjbfTZAYo9gCY/lfrISzMUZKfwGm6rhMPkK27OnnVwDbhJIKuHjr/l52Bpi77/0N8u1HKenXy+7+u0tRawFsalyXgnp4nuLl3z/9Tx6XLetSNAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "9rnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Box/index.js
var Box = __webpack_require__("l54f");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Text/index.js
var Text = __webpack_require__("4Af6");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Heading/index.js
var Heading = __webpack_require__("bHe8");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Button/index.js + 4 modules
var Button = __webpack_require__("D7Vo");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/FeatureBlock/index.js + 1 modules
var FeatureBlock = __webpack_require__("b4OD");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("H3JQ");

// EXTERNAL MODULE: ./containers/Agency/Particle/index.js
var Particle = __webpack_require__("kO2b");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/agency/agency-banner.png
var agency_banner = __webpack_require__("oHnV");
var agency_banner_default = /*#__PURE__*/__webpack_require__.n(agency_banner);

// CONCATENATED MODULE: ./containers/Agency/BannerSection/bannerSection.style.js



const BannerWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "bannerSectionstyle__BannerWrapper",
  componentId: "ug7fag-0"
})(["padding-top:210px;padding-bottom:160px;background-image:url(", ");background-size:cover;background-position:center;background-repeat:no-repeat;overflow:hidden;@media only screen and (min-width:1367px){min-height:100vh;}@media (max-width:990px){padding-top:150px;padding-bottom:100px;}@media only screen and (max-width:480px){background:none;padding-top:130px;padding-bottom:60px;}.particle{position:absolute;width:50%;height:100%;top:0;left:0;overflow:hidden;@media (max-width:990px){display:none;}@media only screen and (max-width:480px){width:100%;}}.row{position:relative;z-index:1;}.button__wrapper{margin-top:40px;.reusecore__button{&:first-child{transition:all 0.3s ease;&:hover{box-shadow:0px 9px 20px -5px rgba(16,172,132,0.57);}}}}"], agency_banner_default.a);
const DiscountLabel = external_styled_components_default.a.div.withConfig({
  displayName: "bannerSectionstyle__DiscountLabel",
  componentId: "ug7fag-1"
})(["display:inline-block;border-radius:4em;padding:7px 25px;box-shadow:0px 4px 50px 0px rgba(22,53,76,0.08);margin-bottom:30px;background-color:", ";@media (max-width:767px){padding:7px 10px;}"], Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'));

/* harmony default export */ var bannerSection_style = (BannerWrapper);
// CONCATENATED MODULE: ./containers/Agency/BannerSection/index.js
var __jsx = external_react_default.a.createElement;

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
  const ButtonGroup = () => __jsx(external_react_["Fragment"], null, __jsx(Button["a" /* default */], _extends({
    title: "LEARN MORE"
  }, btnStyle)), __jsx(Button["a" /* default */], _extends({
    title: "WATCH WORKS",
    variant: "textButton",
    icon: __jsx("i", {
      className: "flaticon-next"
    })
  }, outlineBtnStyle)));

  return __jsx(bannerSection_style, null, __jsx(Particle["a" /* default */], null), __jsx(Container["a" /* default */], null, __jsx(Box["a" /* default */], _extends({
    className: "row"
  }, row), __jsx(Box["a" /* default */], _extends({
    className: "col"
  }, col), __jsx(DiscountLabel, null, __jsx(Text["a" /* default */], _extends({
    content: "25% Discount"
  }, discountAmount)), __jsx(Text["a" /* default */], _extends({
    content: "on every first project budget"
  }, discountText))), __jsx(FeatureBlock["a" /* default */], {
    title: __jsx(Heading["a" /* default */], _extends({
      content: "With Knowledge, Passion, Heart & Soul Agencies"
    }, title)),
    description: __jsx(Text["a" /* default */], _extends({
      content: "Agencies around the world are moving to the digital agencies. So, It is high time to introduce your agency digitaly ."
    }, description)),
    button: __jsx(ButtonGroup, null)
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
    width: ['100%', '70%', '60%', '50%']
  },
  title: {
    fontSize: ['26px', '34px', '42px', '55px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.31'
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '2.1',
    mb: '0'
  },
  btnStyle: {
    minWidth: ['120px', '156px'],
    fontSize: '14px',
    fontWeight: '500'
  },
  outlineBtnStyle: {
    minWidth: ['130px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
    color: '#0f2137',
    p: '5px 10px'
  },
  discountAmount: {
    fontSize: '14px',
    color: '#10AC84',
    mb: 0,
    as: 'span',
    mr: '0.4em'
  },
  discountText: {
    fontSize: '14px',
    color: '#0f2137',
    mb: 0,
    as: 'span'
  }
};
/* harmony default export */ var Agency_BannerSection = __webpack_exports__["a"] = (BannerSection);

/***/ }),

/***/ "Av/8":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/entypo/plus");

/***/ }),

/***/ "Aw9B":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "Bsug":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

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

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/data/Agency/index.js
var Agency = __webpack_require__("sOBS");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("H3JQ");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/GlideCarousel/index.js
var GlideCarousel = __webpack_require__("mnHf");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/GlideCarousel/glideSlide.js
var glideSlide = __webpack_require__("9NE4");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./containers/Agency/TestimonialSection/testimonialSection.style.js


const TestimonialSectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "testimonialSectionstyle__TestimonialSectionWrapper",
  componentId: "vy0g42-0"
})(["margin:80px 0 0;background-color:#f6f7fb;background:linear-gradient(transparent 50%,#f6f7fb);overflow:hidden;@media (max-width:990px){margin:0px 0 0;}.glide{.glide__slides{align-items:flex-end;}max-width:999px;margin-left:auto;.glide__slide{display:flex;align-items:center;justify-content:flex-end;@media only screen and (max-width:991px){padding-top:30px;}}.glide__controls{.reusecore__button{&:hover{color:", ";}}}}.glide__controls{@media (max-width:767px){width:100%;left:0;text-align:center;}}"], Object(external_styled_system_["themeGet"])('colors.quoteText', '#343d48'));
const TextWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "testimonialSectionstyle__TextWrapper",
  componentId: "vy0g42-1"
})(["max-width:504px;margin-right:auto;align-self:flex-end;margin-bottom:120px;position:relative;padding-left:12px;@media (max-width:767px){text-align:center;}@media (max-width:990px) and (min-width:768px){max-width:300px;}i{color:rgba(52,61,72,0.07);font-size:70px;position:absolute;top:-40px;left:0;z-index:-1;}"]);
const ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "testimonialSectionstyle__ImageWrapper",
  componentId: "vy0g42-2"
})(["flex-grow:1;@media only screen and (max-width:767px){display:none;}"]);

/* harmony default export */ var testimonialSection_style = (TestimonialSectionWrapper);
// CONCATENATED MODULE: ./containers/Agency/TestimonialSection/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













const TestimonialSection = ({
  sectionHeader,
  sectionTitle,
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
    autoplay: 5000,
    perView: 1,
    animationDuration: 700
  };
  return __jsx(testimonialSection_style, {
    id: "testimonialSection"
  }, __jsx(Container["a" /* default */], null, __jsx(Box["a" /* default */], sectionHeader, __jsx(Text["a" /* default */], _extends({
    content: "CLIENT FEEDBACK"
  }, sectionSubTitle)), __jsx(Heading["a" /* default */], _extends({
    content: "What our client say about us"
  }, sectionTitle))), __jsx(GlideCarousel["a" /* default */], {
    options: glideOptions,
    buttonWrapperStyle: btnWrapperStyle,
    nextButton: __jsx(Button["a" /* default */], _extends({
      icon: __jsx("i", {
        className: "flaticon-next"
      }),
      "aria-label": "Next",
      variant: "textButton"
    }, btnStyle)),
    prevButton: __jsx(Button["a" /* default */], _extends({
      icon: __jsx("i", {
        className: "flaticon-left-arrow"
      }),
      "aria-label": "Prev",
      variant: "textButton"
    }, btnStyle))
  }, __jsx(external_react_["Fragment"], null, Agency["a" /* default */].testimonial.map((item, index) => __jsx(glideSlide["a" /* default */], {
    key: index
  }, __jsx(external_react_["Fragment"], null, __jsx(TextWrapper, null, __jsx("i", {
    className: "flaticon-quotes"
  }), __jsx(Text["a" /* default */], _extends({
    content: item.comment
  }, commentStyle)), __jsx(Heading["a" /* default */], _extends({
    content: item.name
  }, nameStyle)), __jsx(Heading["a" /* default */], _extends({
    content: item.designation
  }, designationStyle))), __jsx(ImageWrapper, null, __jsx(Image["a" /* default */], {
    src: item.avatar_url,
    alt: "Client Image"
  })))))))));
}; // TestimonialSection style props


// TestimonialSection default style
TestimonialSection.defaultProps = {
  // section header default style
  sectionHeader: {
    pt: '30px',
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
    color: '#10ac84',
    mb: '10px'
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  // client comment style
  commentStyle: {
    color: '#343d48',
    fontWeight: '300',
    fontSize: ['20px', '24px'],
    lineHeight: '1.67',
    mb: '47px'
  },
  // client name style
  nameStyle: {
    as: 'h3',
    color: '#343d48',
    fontWeight: '500',
    fontSize: '18px',
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
    mb: 0
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
/* harmony default export */ var Agency_TestimonialSection = __webpack_exports__["a"] = (TestimonialSection);

/***/ }),

/***/ "CzWp":
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

/***/ "DEAh":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-bfece249803f3d440ef27a70c60f54f1.png";

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

/***/ "EeN0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Box/index.js
var Box = __webpack_require__("l54f");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Text/index.js
var Text = __webpack_require__("4Af6");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Heading/index.js
var Heading = __webpack_require__("bHe8");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Link/index.js
var Link = __webpack_require__("E+gT");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Image/index.js
var Image = __webpack_require__("KFN4");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/FeatureBlock/index.js + 1 modules
var FeatureBlock = __webpack_require__("b4OD");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/data/Agency/index.js
var Agency = __webpack_require__("sOBS");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("H3JQ");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./containers/Agency/BlogSection/blogSection.style.js

const BlogSectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "blogSectionstyle__BlogSectionWrapper",
  componentId: "sc-17t0oh5-0"
})(["padding:80px 0;overflow:hidden;@media (max-width:990px){padding:60px 0;}@media (max-width:767px){padding:40px 0;}.feature__block{&.blog__post{border-radius:5px;overflow:hidden;position:relative;width:calc(100% / 3 - 24px);height:450px;margin:0 12px;transition:all 0.3s ease;@media only screen and (max-width:1200px){height:400px;}@media only screen and (max-width:991px){width:calc(100% / 2 - 24px);margin-bottom:24px;&:first-child{width:100%;}}@media only screen and (max-width:767px){width:calc(100% - 24px);}.icon__wrapper{position:absolute;bottom:0;left:0;width:100%;height:100%;&.gatsby-image-wrapper{height:100%;}img{width:100%;height:100%;object-fit:cover;}}.content__wrapper{opacity:0;visibility:hidden;position:absolute;bottom:0;left:0;width:100%;height:100%;padding:25px;display:flex;flex-direction:column;justify-content:flex-end;background-color:rgba(0,0,0,0.9);background:linear-gradient(transparent,rgba(0,0,0,0.5));transition:all 0.3s ease;a{transform:translateY(50px);transition:all 0.3s ease;}p{transform:translateY(50px);transition:all 0.35s ease;}}&:hover{.content__wrapper{opacity:1;visibility:visible;a{transform:translateY(0);}p{transform:translateY(0);}}}&:first-child{.content__wrapper{@media (max-width:990px){opacity:1;visibility:visible;a{transform:translateY(0);}p{transform:translateY(0);}}}}}}"]);
/* harmony default export */ var blogSection_style = (BlogSectionWrapper);
// CONCATENATED MODULE: ./containers/Agency/BlogSection/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












const BlogSection = ({
  row,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  blogTitle,
  blogMeta
}) => {
  return __jsx(blogSection_style, {
    id: "blogSection"
  }, __jsx(Container["a" /* default */], null, __jsx(Box["a" /* default */], sectionHeader, __jsx(Text["a" /* default */], _extends({
    content: "PORTFOLIO"
  }, sectionSubTitle)), __jsx(Heading["a" /* default */], _extends({
    content: "Meet our work experience from customers"
  }, sectionTitle))), __jsx(Box["a" /* default */], _extends({
    className: "row"
  }, row), Agency["a" /* default */].blog.map((post, index) => __jsx(FeatureBlock["a" /* default */], {
    key: `post_key-${index}`,
    id: `post_id-${post.id}`,
    className: "blog__post",
    icon: __jsx(Image["a" /* default */], {
      src: post.thumbnail_url,
      alt: `Blog Image ${post.id}`,
      className: "blog__image"
    }),
    title: __jsx(Link["a" /* default */], _extends({
      href: post.postLink
    }, blogTitle), post.title),
    description: __jsx(Text["a" /* default */], _extends({
      content: post.date
    }, blogMeta))
  })))));
}; // BlogSection style props


// BlogSection default style
BlogSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '56px']
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#10ac84',
    mb: '10px'
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  // Blog post row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-12px',
    mr: '-12px'
  },
  // Blog post title default style
  blogTitle: {
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#ffffff',
    lineHeight: '1.5',
    mb: '10px',
    letterSpacing: '-0.020em'
  },
  // Blog post description default style
  blogMeta: {
    fontSize: '16px',
    lineHeight: '1',
    color: 'rgba(255, 255, 255, 0.5)',
    mb: 0
  }
};
/* harmony default export */ var Agency_BlogSection = __webpack_exports__["a"] = (BlogSection);

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

/***/ "HZTQ":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAACW0lEQVRIibWWPWgUQRTHf6uXRAwSPaM4YBFOMWcT41cq104sLLRVrLSTNNoE1CCBoJWVIIiNhY2NCLZWjlZGRRQuCeK3LIgOnkcIAbmzmFnu3Xq7c3uXPFh485+Z92PnzZuZYMfTX2TYIDDp/DvA7+SAKCxmzf/PCp7+E8AR5+8ELgO1XISErfP0HxT+CHAN2LhWwE1AOaGNAleAgbUAjov+GtBw/hgwhT8duYFyOR8B90T7MHDJMz8XMEgAXwIPgQdCC4FJpU2wGsASsNn5Bvjg/PvAYzHuGHB+NYCHhP+aZv4A7gJPRPuk0uZMr8ADwp9L9DWAW8AzoZ1W2pzqFijLoQ68aTOmDtzE5ja2c0qb490A9wl9nvST5S9wA3jn2gFwQWlzNC8wmb8sWwFmgUUR76LSZqJTYEBr/l54gERhcQmYAT45qQBMKW3GOgGWgC3Or9IsBx/0D/acjZzUD0wrbUZ9QFnsc7SWgw9qgKvATydtAGaUNiOdAl91ChPQHw5addIgMKu0Ue2AyXLwbZg06HdgGlhy0hBwXWkznATKcligh4s2CosfsTldcdKwgw7JK0aWQ+7lBFDabMeuUhnYS+sVpoCzsRAA+0WnPEHSrA/YrbSJg5dp7vA0q8XAEhC/hqrA+zaDt4rAZTenzwOoA1+BCvAWeB4Dk3ffemCXC7zHgbZ5goPdKPPiW4jC4rIc0A44jr1o+z3BG8A3F7iCPd6+RGExs3YL2FqRj6W0h+Yydvcuij+odfMuHcBumqRFInAF+IzNSU9WwD4hbgMTLmgMqWbM69r+AexPlS0Ld8GYAAAAAElFTkSuQmCC"

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

/***/ "I6BJ":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "INZR":
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ }),

/***/ "Ihd7":
/***/ (function(module, exports) {



/***/ }),

/***/ "IrP5":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "Jcsy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Box/index.js
var Box = __webpack_require__("l54f");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Text/index.js
var Text = __webpack_require__("4Af6");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Heading/index.js
var Heading = __webpack_require__("bHe8");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Card/index.js
var Card = __webpack_require__("rZdf");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Image/index.js
var Image = __webpack_require__("KFN4");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/FeatureBlock/index.js + 1 modules
var FeatureBlock = __webpack_require__("b4OD");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("H3JQ");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./containers/Agency/QualitySection/qualitySection.style.js

const QualitySectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "qualitySectionstyle__QualitySectionWrapper",
  componentId: "yvxz9u-0"
})(["padding:110px 0 60px;min-height:600px;overflow:hidden;@media (max-width:990px){padding:0 0 30px;}@media only screen and (min-width:1366px){min-height:895px;}.info-sec-container{width:100%;max-width:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:-1;@media only screen and (max-width:991px){display:none;}}.feature__block{margin:15px 0;.icon__wrapper{flex-shrink:0;position:relative;background:linear-gradient( -60deg,rgba(241,39,17,0.8),rgba(245,175,25,0.8) );.flaticon-flask{&:before{margin-left:6px;}}&:before,&:after{content:'';width:24px;height:100%;position:absolute;}&:before{transform:rotate(45deg);background-color:rgba(255,255,255,0.15);}&:after{transform:rotate(-45deg);background-color:rgba(0,0,0,0.05);}}}.row{> .col{&:nth-child(2){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(50,207,167,0.9),rgba(150,201,61,0.9) );}}}&:nth-child(3){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(236,0,140,0.85),rgba(255,103,103,0.85) );}}}&:nth-child(4){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(47,128,237,0.85),rgba(86,204,242,0.85) );}}}&:nth-child(5){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(0,57,115,0.85),rgba(299,299,199,0.85) );}}}&:last-child{.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(110,72,170,0.85),rgba(192,91,210,0.85) );}}}}}"]);
/* harmony default export */ var qualitySection_style = (QualitySectionWrapper);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/data/Agency/index.js
var Agency = __webpack_require__("sOBS");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/agency/surface-studio.png
var surface_studio = __webpack_require__("m/a5");
var surface_studio_default = /*#__PURE__*/__webpack_require__.n(surface_studio);

// CONCATENATED MODULE: ./containers/Agency/QualitySection/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }














const QualitySection = ({
  row,
  col,
  title,
  featureCol,
  description,
  textArea,
  imageArea,
  imageAreaRow,
  imageWrapper,
  featureTitle,
  featureDescription,
  iconStyle
}) => {
  return __jsx(qualitySection_style, {
    id: "qualitySection"
  }, __jsx(Container["a" /* default */], null, __jsx(Box["a" /* default */], _extends({
    className: "row"
  }, row), __jsx(Box["a" /* default */], _extends({
    className: "col"
  }, col, textArea), __jsx(FeatureBlock["a" /* default */], {
    title: __jsx(Heading["a" /* default */], _extends({
      content: "Our Quality feature that customers always prefer to use on their products."
    }, title)),
    description: __jsx(Text["a" /* default */], _extends({
      content: "Customers are our first priority and we provide some exceptional features that our customer prefers . That's why our customers never leave us ."
    }, description))
  }))), __jsx(Box["a" /* default */], _extends({
    className: "row"
  }, row, textArea), Agency["a" /* default */].qualityFeature.map((feature, index) => __jsx(Box["a" /* default */], _extends({
    className: "col"
  }, featureCol, {
    key: `quality_feature-${index}`
  }), __jsx(FeatureBlock["a" /* default */], {
    icon: __jsx("i", {
      className: feature.icon
    }),
    iconPosition: "left",
    iconStyle: iconStyle,
    title: __jsx(Heading["a" /* default */], _extends({
      content: feature.title
    }, featureTitle)),
    description: __jsx(Text["a" /* default */], _extends({
      content: feature.description
    }, featureDescription))
  }))))), __jsx(Container["a" /* default */], {
    fluid: true,
    noGutter: true,
    className: "info-sec-container"
  }, __jsx(Box["a" /* default */], _extends({
    className: "row"
  }, row, imageAreaRow), __jsx(Box["a" /* default */], _extends({
    className: "col"
  }, col, imageArea), __jsx(Card["a" /* default */], imageWrapper, __jsx(Fade_default.a, {
    right: true,
    delay: 90
  }, __jsx(Image["a" /* default */], {
    src: surface_studio_default.a,
    alt: "Feature Image"
  })))))));
};

QualitySection.defaultProps = {
  // Quality section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  // Quality section iamge row default style
  imageAreaRow: {
    flexDirection: 'row-reverse'
  },
  // Quality section col default style
  col: {
    pr: '15px',
    pl: '15px'
  },
  // Quality feature col default style
  featureCol: {
    width: [1, 1, 1 / 2],
    pr: '15px',
    pl: '15px'
  },
  // Quality section text area default style
  textArea: {
    width: [1, '100%', '100%', '70%', '64%']
  },
  // Quality section image area default style
  imageArea: {
    width: [1, '100%', '100%', '30%', '38%'],
    flexBox: true,
    flexDirection: 'row-reverse'
  },
  // Quality section image wrapper default style
  imageWrapper: {
    boxShadow: 'none'
  },
  // Quality section title default style
  title: {
    fontSize: ['26px', '26px', '32px', '40px'],
    lineHeight: '1.5',
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px'
  },
  // Quality section description default style
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '2.1',
    mb: '33px'
  },
  // feature icon default style
  iconStyle: {
    width: '54px',
    height: '54px',
    borderRadius: '50%',
    bg: '#93d26e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    color: '#ffffff',
    overflow: 'hidden',
    mt: '6px',
    mr: '22px',
    flexShrink: 0
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: '8px',
    letterSpacing: '-0.020em'
  },
  // feature description default style
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.84',
    color: '#343d48cc'
  }
};
/* harmony default export */ var Agency_QualitySection = __webpack_exports__["a"] = (QualitySection);

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

/***/ "M5Cx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

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

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./containers/Agency/VideoSection/videoSection.style.js


const VideoSectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "videoSectionstyle__VideoSectionWrapper",
  componentId: "sc-8qqp08-0"
})(["padding:80px 0;overflow:hidden;@media (max-width:990px){padding:60px 0;}@media (max-width:767px){padding:30px 0 60px 0;}.figure{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;img{border-radius:4px;}.fig__caption{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;z-index:2;.reusecore__button{.btn-icon{background-color:", ";line-height:0.4;}}}}"], Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'));
/* harmony default export */ var videoSection_style = (VideoSectionWrapper);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/agency/preview-image.jpg
var preview_image = __webpack_require__("vSXM");
var preview_image_default = /*#__PURE__*/__webpack_require__.n(preview_image);

// CONCATENATED MODULE: ./containers/Agency/VideoSection/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












const IntroVideo = () => __jsx("iframe", {
  title: "ReactivePro",
  width: "560",
  height: "315",
  src: "https://www.youtube.com/embed/9-8KYHo_wtc?controls=0&showinfo=0",
  frameBorder: "0",
  allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
  allowFullScreen: true
});

const CloseModalButton = () => __jsx(Button["a" /* default */], {
  className: "modalCloseBtn",
  variant: "fab",
  onClick: () => Object(reuse_modal_["closeModal"])(),
  icon: __jsx("i", {
    className: "flaticon-plus-symbol"
  })
});

const VideoSection = ({
  sectionHeader,
  sectionTitle,
  buttonStyle,
  sectionSubTitle
}) => {
  // Video modal handler
  const handleVideoModal = () => {
    Object(reuse_modal_["openModal"])({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: '100%',
          height: '100%',
          x: 0,
          y: 0
        }
      },
      component: IntroVideo,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false
    });
  };

  return __jsx(videoSection_style, {
    id: "videoSection"
  }, __jsx(Container["a" /* default */], null, __jsx(Box["a" /* default */], sectionHeader, __jsx(Text["a" /* default */], _extends({
    content: "HOW WE WORK"
  }, sectionSubTitle)), __jsx(Heading["a" /* default */], _extends({
    content: "Take a look how we enjoy work"
  }, sectionTitle))), __jsx(Box["a" /* default */], {
    className: "figure"
  }, __jsx(Image["a" /* default */], {
    src: preview_image_default.a,
    alt: "Video Preview Image"
  }), __jsx(Box["a" /* default */], {
    className: "fig__caption"
  }, __jsx(Button["a" /* default */], _extends({}, buttonStyle, {
    icon: __jsx("i", {
      className: "flaticon-youtube"
    }),
    onClick: handleVideoModal,
    "aria-label": "Play"
  }))))));
}; // VideoSection style props


// VideoSection default style
VideoSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '56px']
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#10ac84',
    mb: '10px'
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  // button default design
  buttonStyle: {
    variant: 'textButton',
    p: 0,
    color: '#ec4444',
    fontSize: '71px'
  }
};
/* harmony default export */ var Agency_VideoSection = __webpack_exports__["a"] = (VideoSection);

/***/ }),

/***/ "MvUT":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAflBMVEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEV6T+lUAAAAKXRSTlMAAQYHCwwoKS4vMDE4P0JDREZHj5GSk5maor/H19jb3N3k5fDy9Pj5+lX9F+4AAAChSURBVBgZPcELVsIwFEXRG6ARaqpUsBSi/Br7PPOfoF1ZMXsreztdza6nd/3zF4qLV9YlqtRp4SewY2iaMBhMXnIRnq/K2idEpz3MrYrdDHuNcFB1gFE3CKoC3GSwUrUGU4KVqgZM3xBUBbjrDJ+qBjjrA+adiu0MvVyER6usfUB0kp/AjmGzCYPB9KJFl6hSp8xHiuhVuH68//58jb3T4g/whBZlWtKt6AAAAABJRU5ErkJggg=="

/***/ }),

/***/ "NHP8":
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "OdzX":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/footer-bg-6c398a2ed748b326cdce58b311f7b91b.png";

/***/ }),

/***/ "Oi65":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "PvyY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__("NHP8");
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Box/index.js
var Box = __webpack_require__("l54f");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Card/index.js
var Card = __webpack_require__("rZdf");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Text/index.js
var Text = __webpack_require__("4Af6");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Heading/index.js
var Heading = __webpack_require__("bHe8");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Button/index.js + 4 modules
var Button = __webpack_require__("D7Vo");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/FeatureBlock/index.js + 1 modules
var FeatureBlock = __webpack_require__("b4OD");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("H3JQ");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./containers/Agency/WorkHistory/workHistory.style.js


const WorkHistoryWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "workHistorystyle__WorkHistoryWrapper",
  componentId: "sc-1nzs21q-0"
})(["padding:70px 0 80px;overflow:hidden;@media (max-width:990px){padding:50px 0 60px 0;}.feature__block{padding-right:132px;@media only screen and (max-width:1200px){padding-right:32px;}@media only screen and (max-width:991px){padding-right:0;margin-bottom:0;}@media only screen and (max-width:767px){padding-right:0;margin-bottom:40px;}.reusecore__button{transition:all 0.3s ease;&:hover{box-shadow:0px 9px 20px -5px rgba(16,172,132,0.57);}}}"]);
const CounterUpArea = external_styled_components_default.a.div.withConfig({
  displayName: "workHistorystyle__CounterUpArea",
  componentId: "sc-1nzs21q-1"
})(["display:flex;flex-wrap:wrap;padding-left:20px;@media only screen and (max-width:1200px){padding-left:0;}@media only screen and (max-width:991px){padding-right:0;margin-left:-25px;}@media only screen and (max-width:480px){margin-left:0;}.card{width:calc(50% - 25px);margin-left:25px;margin-bottom:27px;display:flex;flex-direction:column;justify-content:center;align-items:center;transition:box-shadow 0.3s ease-in-out;@media (max-width:767px){width:calc(50% - 13px);&:nth-child(2n + 1){margin-left:0;}}&:hover{box-shadow:0px 16px 35px 0px rgba(16,66,97,0.1);}h3{font-size:60px;font-weight:300;margin:0 0 20px;color:", ";@media (max-width:990px){font-size:40px;}@media (max-width:767px){margin-bottom:10px;}}p{color:", ";font-size:16px;font-weight:500;margin-bottom:7px;@media (max-width:990px){font-size:14px;text-align:center;}}a{color:", ";font-weight:500;font-size:15px;text-decoration:underline;margin-top:7px;@media (max-width:1190px){font-size:14px;text-align:center;}}&:nth-child(even){position:relative;top:22px;}&:last-child{box-shadow:none;border-radius:5px;border:2px dashed ", ";}}"], Object(external_styled_system_["themeGet"])('colors.headingColor', '#0f2137'), Object(external_styled_system_["themeGet"])('colors.headingColor', '#0f2137'), Object(external_styled_system_["themeGet"])('colors.linkColor', '#2b9eff'), Object(external_styled_system_["themeGet"])('colors.inactiveIcon', '#ebebeb'));

/* harmony default export */ var workHistory_style = (WorkHistoryWrapper);
// CONCATENATED MODULE: ./containers/Agency/WorkHistory/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













const WorkHistory = ({
  row,
  col,
  cardStyle,
  title,
  description,
  btnStyle
}) => {
  return __jsx(workHistory_style, {
    id: "workHistorySection"
  }, __jsx(Container["a" /* default */], null, __jsx(Box["a" /* default */], _extends({
    className: "row"
  }, row), __jsx(Box["a" /* default */], _extends({
    className: "col"
  }, col), __jsx(FeatureBlock["a" /* default */], {
    title: __jsx(Heading["a" /* default */], _extends({
      content: "Working With Knowledge, Passion, Heart & Soul "
    }, title)),
    description: __jsx(Text["a" /* default */], _extends({
      content: "We have worked with some leading agencies around the globe and their appreciation is our main strength ."
    }, description)),
    button: __jsx(Button["a" /* default */], _extends({
      title: "WORK HISTORY"
    }, btnStyle))
  })), __jsx(Box["a" /* default */], _extends({
    className: "col"
  }, col), __jsx(CounterUpArea, null, __jsx(Card["a" /* default */], _extends({
    className: "card"
  }, cardStyle), __jsx("h3", null, __jsx(external_react_countup_default.a, {
    start: 0,
    end: 20
  }), "+"), __jsx(Text["a" /* default */], {
    content: "Companies Engaged"
  })), __jsx(Card["a" /* default */], _extends({
    className: "card"
  }, cardStyle), __jsx("h3", null, __jsx(external_react_countup_default.a, {
    start: 0,
    end: 199,
    duration: 5
  })), __jsx(Text["a" /* default */], {
    content: "Happy Customers"
  })), __jsx(Card["a" /* default */], _extends({
    className: "card"
  }, cardStyle), __jsx("h3", null, __jsx(external_react_countup_default.a, {
    start: 0,
    end: 300,
    duration: 5
  }), "+"), __jsx(Text["a" /* default */], {
    content: "Project Complete"
  })), __jsx(Card["a" /* default */], _extends({
    className: "card"
  }, cardStyle), __jsx(Text["a" /* default */], {
    content: "& Much More"
  }), __jsx(link_default.a, {
    href: "#1"
  }, __jsx("a", null, "View work history"))))))));
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
    borderRadius: '10px',
    boxShadow: '0px 8px 20px 0px rgba(16, 66, 97, 0.07)'
  },
  // WorkHistory section title default style
  title: {
    fontSize: ['26px', '26px', '30px', '40px'],
    lineHeight: '1.5',
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px'
  },
  // WorkHistory section description default style
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px'
  },
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500'
  }
};
/* harmony default export */ var Agency_WorkHistory = __webpack_exports__["a"] = (WorkHistory);

/***/ }),

/***/ "SbaX":
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

/***/ "Uag0":
/***/ (function(module, exports) {



/***/ }),

/***/ "UbIB":
/***/ (function(module, exports) {

module.exports = require("@glidejs/glide");

/***/ }),

/***/ "Vi/G":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "WCjH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Navbar/index.js + 1 modules
var Navbar = __webpack_require__("HqwP");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Drawer/index.js
var Drawer = __webpack_require__("KfK3");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Button/index.js + 4 modules
var Button = __webpack_require__("D7Vo");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/UIElements/Logo/index.js
var Logo = __webpack_require__("cIfr");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/HamburgMenu/index.js + 1 modules
var HamburgMenu = __webpack_require__("dB7M");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/ScrollSpyMenu/index.js
var ScrollSpyMenu = __webpack_require__("8obO");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./containers/Agency/Navbar/navbar.style.js

const Container = external_styled_components_default.a.div.withConfig({
  displayName: "navbarstyle__Container",
  componentId: "sc-4u9tia-0"
})(["margin-left:auto;margin-right:auto;padding-left:25px;padding-right:25px;display:flex;width:100%;align-items:center;justify-content:space-between;@media (min-width:320px){padding-left:25px;padding-right:23px;}@media (min-width:768px){max-width:750px;}@media (min-width:992px){max-width:970px;}@media (min-width:1200px){max-width:1170px;}"]);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Text/index.js
var Text = __webpack_require__("4Af6");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Heading/index.js
var Heading = __webpack_require__("bHe8");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Input/index.js + 1 modules
var Input = __webpack_require__("olOc");

// EXTERNAL MODULE: external "react-icons-kit"
var external_react_icons_kit_ = __webpack_require__("Oi65");

// EXTERNAL MODULE: external "react-icons-kit/ionicons/iosSearchStrong"
var iosSearchStrong_ = __webpack_require__("rNYl");

// CONCATENATED MODULE: ./containers/Agency/SearchPanel/searchPanel.style.js

const SearchPanelWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "searchPanelstyle__SearchPanelWrapper",
  componentId: "d73o7r-0"
})(["max-width:600px;width:100%;margin:0 auto;padding:0 15px;.reusecore__input{.field-wrapper{input{border:0;border-radius:5px;height:70px;box-shadow:0 3px 20px rgba(35,49,90,0.08);color:#20201d;font-size:16px;font-weight:400;padding-left:39px;padding-right:80px;&:placholder{color:rgba(32,32,29,0.5);}}.input-icon{width:80px;height:100%;> div{svg{width:28px;height:28px;path{fill:#20201d;}}}}}}"]);
/* harmony default export */ var searchPanel_style = (SearchPanelWrapper);
// CONCATENATED MODULE: ./containers/Agency/SearchPanel/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const SearchPanel = ({
  titleStyle,
  hintStyle
}) => {
  return __jsx(searchPanel_style, null, __jsx(Heading["a" /* default */], _extends({
    content: "Search Panel"
  }, titleStyle)), __jsx(Input["a" /* default */], {
    inputType: "email",
    iconPosition: "right",
    placeholder: "Type what you want",
    icon: __jsx(external_react_icons_kit_["Icon"], {
      icon: iosSearchStrong_["iosSearchStrong"]
    })
  }), __jsx(Text["a" /* default */], _extends({
    content: "Example: \u201CApp Template\u201D \u201CApplication\u201D"
  }, hintStyle)));
}; // SearchPanel style props


// SearchPanel default style
SearchPanel.defaultProps = {
  // Title default style
  titleStyle: {
    fontSize: ['24px', '30px'],
    fontWeight: '400',
    color: '#20201D',
    letterSpacing: '-0.025em',
    mb: '30px'
  },
  // hint default style
  hintStyle: {
    fontSize: '15px',
    fontWeight: '400',
    color: 'rgba(32, 32, 29, 0.55)',
    letterSpacing: '-0.025em',
    mt: '17px',
    ml: ['15px', '30px'],
    mb: '0'
  }
};
/* harmony default export */ var Agency_SearchPanel = (SearchPanel);
// EXTERNAL MODULE: external "rc-tabs"
var external_rc_tabs_ = __webpack_require__("0YK7");
var external_rc_tabs_default = /*#__PURE__*/__webpack_require__.n(external_rc_tabs_);

// EXTERNAL MODULE: external "rc-tabs/lib/TabContent"
var TabContent_ = __webpack_require__("dmYZ");
var TabContent_default = /*#__PURE__*/__webpack_require__.n(TabContent_);

// EXTERNAL MODULE: external "rc-tabs/lib/ScrollableInkTabBar"
var ScrollableInkTabBar_ = __webpack_require__("f8os");
var ScrollableInkTabBar_default = /*#__PURE__*/__webpack_require__.n(ScrollableInkTabBar_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Box/index.js
var Box = __webpack_require__("l54f");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Checkbox/index.js + 1 modules
var Checkbox = __webpack_require__("iynF");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Image/index.js
var Image = __webpack_require__("KFN4");

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./containers/Agency/LoginModal/loginModal.style.js


const LoginModalWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "loginModalstyle__LoginModalWrapper",
  componentId: "ekhpfv-0"
})(["width:80%;margin:71px auto;border-radius:5px;overflow:hidden;background-color:", ";@media only screen and (min-width:1201px){max-width:1170px;width:100%;}@media only screen and (max-width:667px){width:100%;}.col{position:relative;.patternImage{position:absolute;width:100%;height:100%;object-fit:cover;}@media only screen and (max-width:991px){width:100%;&.imageCol{display:none;}}}.reusecore__button{background-color:transparent;&.default{background-color:", ";transition:all 0.3s ease;&:hover{box-shadow:0px 9px 20px -5px rgba(16,172,132,0.57);}}}.rc-tabs{border:0;max-width:360px;margin:30px 0 0;@media only screen and (max-width:991px){max-width:100%;}.rc-tabs-bar{margin-left:15px;}.rc-tabs-nav-container{padding:0;.rc-tabs-tab-prev,.rc-tabs-tab-next{display:none;}.rc-tabs-nav-scroll,.rc-tabs-nav{width:100%;.rc-tabs-tab{width:50%;margin-right:0;padding:13px 0;text-align:center;}}}.rc-tabs-tabpane{padding-left:15px;padding-bottom:15px;padding-right:15px;@media (min-width:1200px){min-height:560px;}}.google-login__btn{width:100%;font-size:15px;font-weight:700;margin-bottom:45px;box-shadow:0 4px 15px rgba(0,0,0,0.1);.btn-icon{position:relative;left:-22px;img{width:21px;height:auto;}}}.reusecore__input{margin-bottom:30px;&.is-material{&.is-focus{label{color:", ";top:-12px;}.highlight{background-color:", ";}}}label{font-weight:400;font-size:14px;color:rgba(0,0,0,0.6);top:15px;}}.reusecore__checkbox{margin:0 0 35px;label{.reusecore__field-label{font-size:13px;font-weight:400;}}}}"], Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'), Object(external_styled_system_["themeGet"])('colors.primary', '#10ac84'), Object(external_styled_system_["themeGet"])('colors.primary', '#10ac84'), Object(external_styled_system_["themeGet"])('colors.primary', '#10ac84'));
/* harmony default export */ var loginModal_style = (LoginModalWrapper);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/rc-tabs/assets/index.css
var assets = __webpack_require__("Uag0");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/agency/logo.png
var logo = __webpack_require__("DEAh");
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/agency/login-bg.jpg
var login_bg = __webpack_require__("tdLR");
var login_bg_default = /*#__PURE__*/__webpack_require__.n(login_bg);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/agency/google-icon.jpg
var google_icon = __webpack_require__("YbYX");
var google_icon_default = /*#__PURE__*/__webpack_require__.n(google_icon);

// CONCATENATED MODULE: ./containers/Agency/LoginModal/index.js
var LoginModal_jsx = external_react_default.a.createElement;

function LoginModal_extends() { LoginModal_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return LoginModal_extends.apply(this, arguments); }


















const LoginModal = ({
  row,
  col,
  btnStyle,
  logoStyle,
  titleStyle,
  contentWrapper,
  outlineBtnStyle,
  descriptionStyle,
  googleButtonStyle
}) => {
  const LoginButtonGroup = () => LoginModal_jsx(external_react_["Fragment"], null, LoginModal_jsx(Button["a" /* default */], LoginModal_extends({
    className: "default",
    title: "LOGIN"
  }, btnStyle)), LoginModal_jsx(Button["a" /* default */], LoginModal_extends({
    title: "Forget Password",
    variant: "textButton"
  }, outlineBtnStyle)));

  const SignupButtonGroup = () => LoginModal_jsx(external_react_["Fragment"], null, LoginModal_jsx(Button["a" /* default */], LoginModal_extends({
    className: "default",
    title: "REGISTER"
  }, btnStyle)));

  return LoginModal_jsx(loginModal_style, null, LoginModal_jsx(Box["a" /* default */], LoginModal_extends({
    className: "row"
  }, row), LoginModal_jsx(Box["a" /* default */], LoginModal_extends({
    className: "col imageCol"
  }, col), LoginModal_jsx(Image["a" /* default */], {
    className: "patternImage",
    src: login_bg_default.a,
    alt: "Login Banner"
  })), LoginModal_jsx(Box["a" /* default */], LoginModal_extends({
    className: "col tabCol"
  }, col), LoginModal_jsx(Box["a" /* default */], contentWrapper, LoginModal_jsx(Image["a" /* default */], LoginModal_extends({
    src: logo_default.a
  }, logoStyle, {
    alt: "Logo"
  })), LoginModal_jsx(external_rc_tabs_default.a, {
    defaultActiveKey: "loginForm",
    renderTabBar: () => LoginModal_jsx(ScrollableInkTabBar_default.a, null),
    renderTabContent: () => LoginModal_jsx(TabContent_default.a, null)
  }, LoginModal_jsx(external_rc_tabs_["TabPane"], {
    tab: "LOGIN",
    key: "loginForm"
  }, LoginModal_jsx(Heading["a" /* default */], LoginModal_extends({
    content: "Welcome Folk"
  }, titleStyle)), LoginModal_jsx(Text["a" /* default */], LoginModal_extends({
    content: "Welcome to Mate Family. Please login with your personal account information letter."
  }, descriptionStyle)), LoginModal_jsx(Button["a" /* default */], LoginModal_extends({
    icon: LoginModal_jsx(Image["a" /* default */], {
      src: google_icon_default.a,
      alt: "Google Icon"
    }),
    title: "Sign in with Google",
    iconPosition: "left",
    className: "google-login__btn"
  }, googleButtonStyle)), LoginModal_jsx(Input["a" /* default */], {
    inputType: "email",
    isMaterial: true,
    label: "Email Address"
  }), LoginModal_jsx(Input["a" /* default */], {
    inputType: "password",
    isMaterial: true,
    label: "Password"
  }), LoginModal_jsx(Checkbox["a" /* default */], {
    id: "remember",
    htmlFor: "remember",
    labelText: "Remember Me"
  }), LoginModal_jsx("div", null, LoginModal_jsx(LoginButtonGroup, null))), LoginModal_jsx(external_rc_tabs_["TabPane"], {
    tab: "REGISTER",
    key: "registerForm"
  }, LoginModal_jsx(Heading["a" /* default */], LoginModal_extends({
    content: "Welcome Folk"
  }, titleStyle)), LoginModal_jsx(Text["a" /* default */], LoginModal_extends({
    content: "Welcome to Mate Family. Please login with your personal account information letter."
  }, descriptionStyle)), LoginModal_jsx(Button["a" /* default */], LoginModal_extends({
    icon: LoginModal_jsx(Image["a" /* default */], {
      src: google_icon_default.a,
      alt: "Google Icon"
    }),
    title: "Sign up with Google",
    iconPosition: "left",
    className: "google-login__btn"
  }, googleButtonStyle)), LoginModal_jsx(Input["a" /* default */], {
    isMaterial: true,
    label: "Full Name"
  }), LoginModal_jsx(Input["a" /* default */], {
    inputType: "email",
    isMaterial: true,
    label: "Email Address"
  }), LoginModal_jsx(Input["a" /* default */], {
    inputType: "password",
    isMaterial: true,
    label: "Password"
  }), LoginModal_jsx("div", null, LoginModal_jsx(SignupButtonGroup, null))))))));
}; // LoginModal style props


// LoginModal default style
LoginModal.defaultProps = {
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap'
  },
  // Team member col default style
  col: {
    width: [1, 1 / 2]
  },
  // Default logo size
  logoStyle: {
    width: '128px',
    height: 'auto',
    ml: '15px'
  },
  // Title default style
  titleStyle: {
    fontSize: ['22px', '36px', '50px'],
    fontWeight: '400',
    color: '#20201D',
    letterSpacing: '-0.025em',
    mt: '35px',
    mb: '10px'
  },
  // Description default style
  descriptionStyle: {
    color: 'rgba(52, 61, 72, 0.8)',
    fontSize: '15px',
    lineHeight: '26px',
    letterSpacing: '-0.025em',
    mb: '23px',
    ml: '1px'
  },
  // Content wrapper style
  contentWrapper: {
    pt: ['32px', '56px'],
    pl: ['17px', '32px', '38px', '40px', '56px'],
    pr: '32px',
    pb: ['32px', '56px']
  },
  // Default button style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500'
  },
  // Outline button outline style
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#10ac84'
  },
  // Google button style
  googleButtonStyle: {
    bg: '#ffffff',
    color: '#343D48'
  }
};
/* harmony default export */ var Agency_LoginModal = (LoginModal);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./containers/Agency/CopyrightsSection/copyrightSection.style.js

const CopyrightWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "copyrightSectionstyle__CopyrightWrapper",
  componentId: "sc-13qkmti-0"
})(["ul{display:flex;align-items:center;li{margin:0 12px;&:first-child{margin-left:0;}&:last-child{margin-right:0;}a{color:#20201d;}}&:hover{li{a{&:not(:hover){opacity:0.4;}}}}}p{color:#20201d;font-size:16px;margin:30px 0 0;}"]);
/* harmony default export */ var copyrightSection_style = (CopyrightWrapper);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/data/Agency/index.js
var Agency = __webpack_require__("sOBS");

// CONCATENATED MODULE: ./containers/Agency/CopyrightsSection/index.js
var CopyrightsSection_jsx = external_react_default.a.createElement;






const CopyrightSection = () => {
  return CopyrightsSection_jsx(copyrightSection_style, {
    className: "copyright_section"
  }, CopyrightsSection_jsx("ul", null, Agency["a" /* default */].social_profile.map((profile, index) => CopyrightsSection_jsx("li", {
    key: `profile_key_${index}`
  }, CopyrightsSection_jsx(link_default.a, {
    href: "#1"
  }, CopyrightsSection_jsx("a", null, CopyrightsSection_jsx("i", {
    className: profile.icon
  })))))), CopyrightsSection_jsx(Text["a" /* default */], {
    content: "Copyrights 2019 @RedQ Inc"
  }));
};

/* harmony default export */ var CopyrightsSection = (CopyrightSection);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/contexts/DrawerContext.js
var DrawerContext = __webpack_require__("8qGZ");

// CONCATENATED MODULE: ./containers/Agency/Navbar/index.js
var Navbar_jsx = external_react_default.a.createElement;














 // Default close button for modal

const CloseModalButton = () => Navbar_jsx(Button["a" /* default */], {
  className: "modalCloseBtn",
  variant: "fab",
  onClick: () => Object(reuse_modal_["closeModal"])(),
  icon: Navbar_jsx("i", {
    className: "flaticon-plus-symbol"
  })
}); // Alt close button for modal


const CloseModalButtonAlt = () => Navbar_jsx(Button["a" /* default */], {
  className: "modalCloseBtn alt",
  variant: "fab",
  onClick: () => Object(reuse_modal_["closeModal"])(),
  icon: Navbar_jsx("i", {
    className: "flaticon-plus-symbol"
  })
});

const Navbar_Navbar = ({
  navbarStyle,
  logoStyle
}) => {
  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(DrawerContext["a" /* DrawerContext */]); // Search modal handler

  const handleSearchModal = () => {
    Object(reuse_modal_["openModal"])({
      config: {
        className: 'search-modal',
        disableDragging: true,
        width: '100%',
        height: '100%',
        animationFrom: {
          transform: 'translateY(100px)'
        },
        // react-spring <Spring from={}> props value
        animationTo: {
          transform: 'translateY(0)'
        },
        //  react-spring <Spring to={}> props value
        transition: {
          mass: 1,
          tension: 180,
          friction: 26
        }
      },
      component: Agency_SearchPanel,
      componentProps: {},
      closeComponent: CloseModalButtonAlt,
      closeOnClickOutside: false
    });
  }; // Authentication modal handler


  const handleLoginModal = () => {
    Object(reuse_modal_["openModal"])({
      config: {
        className: 'login-modal',
        disableDragging: true,
        width: '100%',
        height: '100%',
        animationFrom: {
          transform: 'translateY(100px)'
        },
        // react-spring <Spring from={}> props value
        animationTo: {
          transform: 'translateY(0)'
        },
        //  react-spring <Spring to={}> props value
        transition: {
          mass: 1,
          tension: 180,
          friction: 26
        }
      },
      component: Agency_LoginModal,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false
    });
  }; // Toggle drawer


  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE'
    });
  };

  return Navbar_jsx(Navbar["a" /* default */], navbarStyle, Navbar_jsx(Container, null, Navbar_jsx(Logo["a" /* default */], {
    href: "#",
    logoSrc: logo_default.a,
    title: "Agency",
    logoStyle: logoStyle
  }), Navbar_jsx("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, Navbar_jsx(Button["a" /* default */], {
    variant: "textButton",
    onClick: handleSearchModal,
    icon: Navbar_jsx("i", {
      className: "flaticon-magnifying-glass"
    }),
    "aria-label": "search"
  }), Navbar_jsx(Button["a" /* default */], {
    variant: "textButton",
    onClick: handleLoginModal,
    icon: Navbar_jsx("i", {
      className: "flaticon-user"
    }),
    "aria-label": "login"
  }), Navbar_jsx(Drawer["a" /* default */], {
    width: "420px",
    placement: "right",
    drawerHandler: Navbar_jsx(HamburgMenu["a" /* default */], null),
    open: state.isOpen,
    toggleHandler: toggleHandler
  }, Navbar_jsx(ScrollSpyMenu["a" /* default */], {
    menuItems: Agency["a" /* default */].menuItems,
    drawerClose: true,
    offset: -100
  }), Navbar_jsx(CopyrightsSection, null)))));
}; // Navbar style props


Navbar_Navbar.defaultProps = {
  // Default navbar style
  navbarStyle: {
    minHeight: '70px'
  },
  // Default logo size
  logoStyle: {
    width: '128px',
    height: 'auto'
  }
};
/* harmony default export */ var Agency_Navbar = __webpack_exports__["a"] = (Navbar_Navbar);

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

/***/ "YbYX":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QBARXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAFaADAAQAAAABAAAAFgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/9sAhAADAwMDAwMEBAQEBQUFBQUHBwYGBwcLCAkICQgLEQsMCwsMCxEPEg8ODxIPGxUTExUbHxoZGh8mIiImMC0wPj5UAQMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlT/wgARCAAWABUDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAACAcCBf/aAAgBAQAAAABMc9dxjZlRUGYn/8QAFQEBAQAAAAAAAAAAAAAAAAAABgf/2gAIAQIQAAAAJ22PJP/EABUBAQEAAAAAAAAAAAAAAAAAAAYH/9oACAEDEAAAAHsaOUX/xAAoEAABBAEEAQMEAwAAAAAAAAACAQMEBQYABxETMTJBUQgSFCJDUnH/2gAIAQEAAT8A3Gy3Pc5zY8LxjviRgVRMxNWu9B9bpuJ4aTTn055/SdU6nyGOc9DH7utxyOQ/KoeqaNaQqiFFsJ350ppgRfkqCB2mnkuE1txc1MDM5lPKebSycYMQFfVyBckHPyvnjW5mD7j3V8dhRZElbXtwwQwKc/HRCDlSNUbRU1T225dy5KGuv7iQkchQyGW8Sftzwqcr4XjW6+z6XU1/J6GYEGe3w7JElIRMg/kAg5UT1Cn7lZ3LHHHcjdcAjQCF54+suP7qIqpJ/utuNvq7AaVYzR90h8kclSOOOwk8Iiewj7a//8QAIREAAgIBBAIDAAAAAAAAAAAAAQIDBAAFERIhBhMHYXH/2gAIAQIBAT8A8FqJ5tRjvatKdPmmMnUhYCPg2wAH3j/H5rt6n1eopUDpt98uj0XEMRZOZBPEkd5PYntStLPK8kjbcnYkk/pOf//EAB8RAAMAAQQDAQAAAAAAAAAAAAECAwQABQYREiJBMf/aAAgBAwEBPwDc+f5PG5pg7Bi4tIYypPIVFWptTrtjQnR5WclmsMCx82J9AAv78A1yOE8XdkWHlNcno2VGKhyT9A1jRljwnKShUVQANf/Z"

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

/***/ "dUlh":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlT/wgALCAFpAfkBAREA/8QAHQABAAMBAQEBAQEAAAAAAAAAAAcICQYFBAMCAf/aAAgBAQAAAAC0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGEXJXkmH43sn6sYRcleSQiSL7F9B/FdPzsd+iJez6cAAAAAZlzT98zeJTWzlUtTMy5p++ZpWEJ0mt1R3W3PPv/ACvMvrBmWesstAAAAADJ243sWEzkuNKuW+kOYlxvYsJSmVuuqzdL9Ptyb11yk0X8jsutoFzVyJaAAAAAP8yluJXWSYR0b6vNy6WetxK6yTbzKv6tOus8nNj4NKMZrichJN32eFtZaAAAAAP5870/Ay77W90gZj3/AOm9PwMu9Y82Oc1K8n6Puz5nOhGxX8ZHa6M8Lay0AAAAAeHk5rRWHgZE4y3+W2p+TutFYeBnarHUyl8HD3gyz0Szs0a5mnWlzPC2stAAAAACDqlyDdv96TxvdGUYOqXIN26l2j+6nty6ZRNaawfHUg+u8/vK8S11oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//EADMQAAEEAgECAggFBAMAAAAAAAQBAgMFBgcIABESExAUFRYYITFQNTdTdHUXIFWgIkFS/9oACAEBAAESAP8ATR2PtzDtVpXLkMpLVsVmSBPi707+tadfF3p39a061xtXE9pjHkY+8l0YMjGTejPt7a11ySodvaLIc1EVwVbzC1GeUkM7LoBir28+kvabJKyCzqDoDQ507xz9bH25h2q0rlyGUlq2KzJAnxd6d/WtOvi707+tada42rie0xjyMfeS6MGRjJv7s93hrfXM6iXNsjjkRFUILmJqUshIpYbwRn62NZXjmY1jLKish7ARy9vM6kkjhjfJI9rGMarnvyflTqHGynjMPLtpI1Vr1xzldqLIS4xZTDap71RGOilinijmhkbJHI1HMf6Ntbgx3UVWGVZRylEGzKyAPDMnHzTFqq/HgfBFYjNmZF9i5m3XruxKqrY7uyvqGK5KnhlryapBlPtMhYY8WJSW/Bbq3/L5N1q3UGNajEsRqQqxIYfLHJKvIHZsuscAnMCejbQ+RBAOuPuhYtrKblOVEEvrUKexjMs4m6quamWGlClpTkYvkE6RzO/0rtaXE7t6xAlnoDYQdczbr13YlVVsd3ZX1DFclTwy15NUgyn2mQsMeLEpLfgt1b/l8m61bqDGtRiWI1IVYkMPljklX+zf+yJ9Z68KPCejbI2VAwV4/aLbt0k/JMmKKWrhKVipc8V9NWVc8YWmmrpvAqRlYzc5Fxx3JPXEEq8YYyMexYnZUTrlltmyNuvcClne0eBI1s+tVcS8UBpRzs3HfYWZDEe8LdfFrExsXPvsMglALroHzyhcOdknlyH4QfO6WKAdxlavW19+YXq8aaB87LG58C+XW5zmeTbBvZshvZXSyEqrIutEfk9h38VH9j2EUJmnJgxhc8UYaZEOJPLkXLXUlGW8caWyt1YqosmHcndUZgZGEh5NUTKqJGxF79c2LiSbLMZqO6+AWrkK7aOpoqLUeHisajfHUwEv9HMCpZWbaiNiTwrY1ApD3YVcPyHDcetpF7vPqQyXrsIoTNOTBjC54ow0yIcSeXIuWupKMt440tlbqxVRZMO5O6ozAyMJDyaomVUSNiL365L3+4td2A99j2RlR0JqpE+Hjzt1No4gjD5mreVfgiPTb+za7VeHE283glMk7w143HnK93bTyd5tlk5aUFbIji1yfDcVzQSMS/qRLGGJyujbi2J49hVPHUUQTQgY5HvZDc3lPjtdNY2x44IkKd3z5mVNvreRPsCGR0VobAOO5qRjwonfwsjb9dLwpsjkQLaGt8xklkbbSJl23dbYLOo99kQgpCIiqPj29NQ5kSleBkob5p/+CQUmA4NjRKE02N1FeQjVak/Wv+HphZ62ednIyJZVk9m8w6Sox0jB6yqDgCDGAMbFBoj8nsO/io/sTlVGqqIqqiKqILxu3BlOaOjuad1Ww8uaco+m4madrgGQGV5lnP2RHk724wB4XSEZNiUxEoIvZxoPEba5+Qhl4ZbkOnmrRknrpeY7nLtkdF+jaIVE6wNrWYPjLW/RKUDt6ObDUTNcbd/2tO/rS73rqPDVVFcqUYvyF43bgynNHR3NO6rYeXNOUfTcTNO1wDIDK8yzn7Ijyd7cYA8LpCMmxKYiUEXs40HiNtc/IQy8MtyHTzVoyT10uS45U5bQn0lrAk4R0LopWQLk3GbcSeaj5Yh39n9ZdfZPyX2yODVsewVXugr4sHwymwDGAKCpj8I4kfZX9X0R81HZxV/ZTHhTtGS74p7vKE9cLPr7WZjfkPpXbI2kb8qkyTFYR3Pm8k467sICcQsTw5mzRSVM88EuC5nf4TZll0XdtiaDIDBLhHDlbUBllnF2dEcWnmyCbe4nk4dRk3uL2JFkKGxZChOJ25LO/WXCb0pxM4w6zVhPo5u/jeH/ALIzrRH5PYd/FR/YnvZExXvcjWtTuqiXdMeS4YSxEInY1Xui6yuAYrF7uApEWCWtKZKnFBZ03TU+X8mKGd5vXNOtfDsKkP7dmE0bIkXVB7LTWOHlMXv46EBHL1zOPYTsyrFYvf1Whh8fWtwfYmt8UEn7RqLRANlUS7pjyXDCWIhE7Gq90XWVwDFYvdwFIiwS1pTJU4oLOm6any/kxQzvN9HL3PaXJsmrsYrR4iCqZ8iEmcZc8D1psM2kvw2ie1VYDKR1a39FRRtktbQIBju6tdW2ddchQnVxkBgsyKsU/XNjHa4c3GL6KNjCy2Eiku42kk5JoYAIh6uVjTgWP0BWwE7rxQQ6PskR8j1Z1JHHLG6ORjXMe1WubpFi1HISkHCVfBFbmQN9PN38bw/9kZ1oj8nsO/io/sWTUkGS47bUs7vDFZAECvdq7KT9Fbb73Y8kTRpJq+1ipL+kyWuisKc8c4SVqKybklvKgx3FrHF6Y6Eu6s4HjTJw110WMllm50KxxkQqFXdcucDJyjAR7wKJZScfmfNI3ijuWj93osHujIxCw5ZFrZMpy7HMKqJ7W8sIAhYmqviBiseRm91I9WewQ01ss7cloh8jxu2pJlRkViAQI5dXZSforbfe7HkiaNJNX2sVJf0mS10VhTnjnCStRWTckt5UGO4tY4vTHQl3VnA8aZOGuuixkss3OhWOMiFQq7rkFt6LVuIuaFK1byzR8VezipqebK7+TOryN0odeQqhJy61F9M/qIP/ABFcR8YNx+/eOe7tuR3u6iFqI/l9gpmS4ODfBRLLLQTyPmZxP3LRiUfuRemxBzQTvfWS2NtV04Uh1iaOGLG3xPn5D7Rj3BmtdXY9HKTX1yuGB61DhUmvddUVBN2UkcdXlLufHLnTW6fbwEXhHnsUtq2TXez8S2ZTQH0x0TpVjapAW5tx0Gr8cMcpcMt3NCrQAeIGCmXecEZcQxyiU8UjIpfRzd/G8P8A2RnWiPyew7+Kj+x7Z0Lh+2EaUUr6+2jYjI7EvhfsMaeRldkdLJAvy8eC8Mq0AyIvL7lLBsaovqAYYlcJAIJBHAPBG2OKJ7GSsdHI1HNc1WubsTh1U3J85+IWkdV5zlc4Cv4W56SUxLXJKeGBOyK/Vuo8V1PUvDqI3SkkeFSzuts6Fw/bCNKKV9fbRsRkdiXwv2GNPIyuyOlkgX5ePBeGVaAZEXl9ylg2NUX1AMMSuEgEEgjgHgjbHFFsXi7bbKy8vILXOlTzXI2EbHMfqsUogKWqgSAIGBkMLLAAK1AJANhZOKVC+GeLH+JJuH5aNkOPZ28OQMtZRo3sZLG5kjWva5qtcmxOHdDeGzWGJ2SUz5VVzgYOF+xZZ2MLyGjYOn0dqbjph2rp22SyPtrhEVGm9ZzgeMbFo5aa/DQgdzvFG+/4V5IOY6TG8nClh7qsaYvwrsnmsmyrIx0gR3d8ONYzR4fSi09KGwQIZvaOL0bu0L/WM2nJ94PZXs6GaPw4Hi3uTh1Nj3rfrfs0VsHrH+oj/8QAORAAAgECAwYDBQYGAwEAAAAAAQIDABEEITEQEhNBUWEUgYIFUFNikjJCUnGDsiAjoKHR06OxwsP/2gAIAQEAEz8A/o0YYTIbQW3ifqFeDrwdTQmPNxcbMKhnmUHMb1rKh7MRWIwiFB5QvI1QuHQ9RcaEHIg7IYTIbQW3ifqFeDrwdTQmPNxcfxYZDPMAcxvBck9RFTYSMp/xSO1QtfdOu6wOansdjEAKALkknIACvZ8IlTLpI5RG9JNY+AInm8TSKtKQVZSLgqRkQRmCNsJUSMFzeTM5KtOQWUNyJHuPpJiHJP8AYCo58OEEpW7hQYTkDXicN/orGSRuQYwVAXcSOvwOwu0voWhIRLjZ9ZGeQ5hajxE0y7w0EiTMwIoteOOYkJHiE/zzTZ0kxDkn+wFRz4cIJSt3CgwnIGvE4b/RWMkjcgxgqAu4kf8AD+CWQEmT0KpIoORLjcQbO93NyFF8zqagxU7Oh7iVnVqW4jxOEksyybvUKwddkWs80uaQZaqoIuOZoTPFBhr6ITEVLvXFeaKeKMXcLvlmVwKc34ahgJYh2zDDZA4LK3WdhcRigpEMSJmIouioG9ySOFjjgwZWKUsWIAACE1goBw/qmaO9e0YhCGJ6SIzps74mUp/8q+fFDjtfzfYOckbND/1GK+aaJXNSOFjjgwZWKUsWIAACE1goBw/qmaO9e0YhCGJ6SIzpsEMLjCTgaXZCd19VrIGUH7E4Atk/PvROc05GXpXV6GHgUTyHNcOpCfX0FToGKEixKnUE0GdwGkJZjdyxN6nkEaDtcnMnkBRQgrh4EWIzMOQspc0ToAOZo9U3pY/IPal3p5lB6xxB2FYlHwxkLZboE6oGrDYOKKWx+dQDY7MLJvO9zpNMNO4SoVCqBvp7jyue2dSSRzxRByXY/wAp23j0FTYuWNieoWEotTHiPChy4kb5EqOYNObscOCEaIn5Li1fqS1+iuz8pjX5R1JJHPFEHJdj/Kdt49BU2LljYnqFhKLUx4jwocuJG+RKjmDTm7HDghGiJ+S4tXY5gqeRXVTyNDJcdgJj/geTin+xhcKubzy9CdXo235XObyORqzHYW3QZShCZ8s6PtCV5vyBmRUoRuuPgzvZw5IaMdFtSG6urRFlZSNQQbg0oJeIzst2jA1ewstYQoXjL5nizShwz1iFHHSJcy6slg4XmKkN3eJMnhY8ymqbfWnuMmwA6kmopkdwoIBJCkkDYdCjRsDevl4Jrq8Ezk/vFfOkKow8iNnR5JpGo5AMsK7xJPeopkdwoIBJCkkDYdCjRsDevl4J2KLuJZcjhkI6avUybkuExEb2COTojNk+zEzxwg21sXIBtUEgkjcAkEqykgjYNZFh3WjPlc0fwb5C/SGtT8pcPG7p5h12MLggixBB1BFdYtyRP27fWnuPUqJ4yhI7i9KLsInObL1AIDjqKgcOpvyNtCOYNQuHGEhkFpC5GjsMgtH76b15pB5qFFAZnCzZS/SQGqZgqTxSsXMYY/fUmnYBnIH2UXV2PICvgez8NZcz1KgDuxoD7AmjMdwO17ilF2ETnNl6gEBx1FQOHU35G2hHMGoXDjCQyC0hcjR2GQWj99N680g81Civh8nnPZOXepczicZqZT1EX7qQeUeI/wDL05u2KwwyWTuyaPQ18NiAA7egoKmcJHIkxLtDvHRgxJFTSLHGote5ZiAKVCXxU+IYB3VejEBUofHnYyyAHopawog7jXcPJCeysSpHSmcCfDvzV06Dk2hoMGk4jCwkdRmsa6kmjo+LxClLd7ISTt9ae5IFBYqNFlQ2DgVK08DEd1RJKwitHE/Z5WsxFRqFREUWCqBkAALACmAIIIsQQdRWIQvApPw3TNB2sagM+IcL2V0iqbOWcj9qjkuyBQWKjRZUNg4FStPAxHdUSSsIrRxP2eVrMRUahURFFgqgZAACwApfZeUECk7sSkz0Og1LHq2rGnF1dHBUqw6Gn9mcQiP4UjCdd8FcjRFwQRYgg8jUsZkwwY/DK5xikfESsB2QxrU6BFhvkeBGCQhPUknYDuywuAQJI21UisaskEieqISXr2eryPJ+rKFC0l9dSWJzLE5knb4LxO/xSD8SO1cPhcTd57t2t/SJf//Z"

/***/ }),

/***/ "dmYZ":
/***/ (function(module, exports) {

module.exports = require("rc-tabs/lib/TabContent");

/***/ }),

/***/ "f8os":
/***/ (function(module, exports) {

module.exports = require("rc-tabs/lib/ScrollableInkTabBar");

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

/***/ "iiux":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Box/index.js
var Box = __webpack_require__("l54f");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Text/index.js
var Text = __webpack_require__("4Af6");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Heading/index.js
var Heading = __webpack_require__("bHe8");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Card/index.js
var Card = __webpack_require__("rZdf");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Image/index.js
var Image = __webpack_require__("KFN4");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Button/index.js + 4 modules
var Button = __webpack_require__("D7Vo");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/FeatureBlock/index.js + 1 modules
var FeatureBlock = __webpack_require__("b4OD");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./containers/Agency/AboutUsSection/aboutUsSection.style.js


const AboutUsSectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "aboutUsSectionstyle__AboutUsSectionWrapper",
  componentId: "sc-6e8cut-0"
})(["padding:80px 0 50px;overflow:hidden;@media (max-width:990px){padding:60px 0 40px 0;}.col{align-self:center;}.group-gallery{box-shadow:none;display:flex;flex-wrap:wrap;.col1{width:calc(60% - 30px);margin-right:30px;}.col2{width:calc(40% - 30px);align-self:center;margin-right:30px;}img{max-width:100%;height:auto;margin-bottom:30px;object-fit:contain;box-shadow:0px 0px 250px 0px rgba(39,79,117,0.1);}}.feature__block{align-items:center;margin-bottom:14px;.icon__wrapper{color:", ";margin-right:10px;}.content__wrapper{h2{margin-bottom:0;}}}.reusecore__button{margin-top:36px;transition:all 0.3s ease;&:hover{box-shadow:0px 9px 20px -5px rgba(16,172,132,0.57);}}"], Object(external_styled_system_["themeGet"])('colors.primary', '#10ac84'));
/* harmony default export */ var aboutUsSection_style = (AboutUsSectionWrapper);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/data/Agency/index.js
var Agency = __webpack_require__("sOBS");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/agency/group/group-image1.jpg
var group_image1 = __webpack_require__("dUlh");
var group_image1_default = /*#__PURE__*/__webpack_require__.n(group_image1);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/agency/group/group-image2.jpg
var group_image2 = __webpack_require__("vejf");
var group_image2_default = /*#__PURE__*/__webpack_require__.n(group_image2);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/agency/group/group-image3.jpg
var group_image3 = __webpack_require__("I6BJ");
var group_image3_default = /*#__PURE__*/__webpack_require__.n(group_image3);

// CONCATENATED MODULE: ./containers/Agency/AboutUsSection/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















const AboutUsSection = ({
  row,
  col,
  title,
  description,
  textArea,
  featureTitle,
  btnStyle
}) => {
  return __jsx(aboutUsSection_style, {
    id: "AboutUsSection"
  }, __jsx(Box["a" /* default */], _extends({
    className: "row"
  }, row), __jsx(Box["a" /* default */], _extends({
    className: "col"
  }, col), __jsx(Card["a" /* default */], {
    className: "group-gallery"
  }, __jsx(Box["a" /* default */], {
    className: "col1"
  }, __jsx(Fade_default.a, {
    top: true,
    delay: 30
  }, __jsx(Image["a" /* default */], {
    src: group_image1_default.a,
    alt: "Feature Image"
  })), __jsx(Fade_default.a, {
    left: true,
    delay: 60
  }, __jsx(Image["a" /* default */], {
    src: group_image3_default.a,
    alt: "Feature Image"
  }))), __jsx(Box["a" /* default */], {
    className: "col2"
  }, __jsx(Fade_default.a, {
    bottom: true,
    delay: 90
  }, __jsx(Image["a" /* default */], {
    src: group_image2_default.a,
    alt: "Feature Image"
  }))))), __jsx(Box["a" /* default */], _extends({
    className: "col"
  }, col), __jsx(Box["a" /* default */], textArea, __jsx(FeatureBlock["a" /* default */], {
    title: __jsx(Heading["a" /* default */], _extends({
      content: "Great Responsive & Strong Competitive People"
    }, title)),
    description: __jsx(Text["a" /* default */], _extends({
      content: "Some hardworking People are Working Day and Night to provide you highly scalable product . "
    }, description))
  })), __jsx(Box["a" /* default */], textArea, Agency["a" /* default */].aboutus.map((feature, index) => __jsx(FeatureBlock["a" /* default */], {
    key: `feature_point-${index}`,
    icon: __jsx("i", {
      className: feature.icon
    }),
    iconPosition: "left",
    title: __jsx(Heading["a" /* default */], _extends({
      content: feature.title
    }, featureTitle))
  })), __jsx(Button["a" /* default */], _extends({
    title: "DISCOVER ITEM"
  }, btnStyle))))));
};

AboutUsSection.defaultProps = {
  // About us section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap'
  },
  // About us section col default style
  col: {
    width: [1, '100%', '50%']
  },
  // About us section text area default style
  textArea: {
    maxWidth: '490px',
    pl: '40px'
  },
  // About us section title default style
  title: {
    fontSize: ['26px', '26px', '30px', '40px'],
    lineHeight: '1.5',
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '30px'
  },
  // About us section description default style
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px'
  },
  // feature title default style
  featureTitle: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#343d48',
    lineHeight: '1.5',
    mb: '8px',
    letterSpacing: '-0.020em'
  },
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500'
  }
};
/* harmony default export */ var Agency_AboutUsSection = __webpack_exports__["a"] = (AboutUsSection);

/***/ }),

/***/ "ik7d":
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "isz7":
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "iynF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/useToggle/index.js
var useToggle = __webpack_require__("sZWo");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/base.js
var base = __webpack_require__("/Q04");

// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Checkbox/checkbox.style.js



const CheckBoxStyle = external_styled_components_default.a.div.withConfig({
  displayName: "checkboxstyle__CheckBoxStyle",
  componentId: "sc-19b553d-0"
})(["display:inline-flex;.reusecore__field-label{color:", ";font-size:", "px;font-weight:", ";}&.label_left{label{display:flex;align-items:center;.reusecore__field-label{margin-right:", "px;}}}&.label_right{label{display:flex;flex-direction:row-reverse;align-items:center;.reusecore__field-label{margin-left:", "px;}}}input[type='checkbox']{&.checkbox{opacity:0;position:absolute;margin:0;z-index:-1;width:0;height:0;overflow:hidden;pointer-events:none;&:checked + div{border-color:", ";background-color:", ";&::after{opacity:1;visibility:visible;transform:rotate(45deg) scale(1);}}}+ div{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;border-radius:3px;border:1px solid ", ";position:relative;transition:all 0.3s ease;&::after{content:'';width:4px;height:10px;transform:rotate(45deg) scale(0.8);border-bottom:2px solid ", ";border-right:2px solid ", ";position:absolute;top:0;opacity:0;visibility:hidden;transition-property:opacity,visibility;transition-duration:0.3s;}}}", ""], Object(external_styled_system_["themeGet"])('colors.textColor', '#484848'), Object(external_styled_system_["themeGet"])('fontSizes.4', '16'), Object(external_styled_system_["themeGet"])('fontWeights.4', '500'), Object(external_styled_system_["themeGet"])('space.3', '10'), Object(external_styled_system_["themeGet"])('space.3', '10'), Object(external_styled_system_["themeGet"])('colors.primary', '#028489'), Object(external_styled_system_["themeGet"])('colors.primary', '#028489'), Object(external_styled_system_["themeGet"])('colors.borderColor', '#dadada'), Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'), Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'), base["a" /* base */]); // prop types can also be added from the style functions

CheckBoxStyle.propTypes = {};
CheckBoxStyle.displayName = 'CheckBoxStyle';
/* harmony default export */ var checkbox_style = (CheckBoxStyle);
// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Checkbox/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const CheckBox = (_ref) => {
  let {
    className,
    isChecked,
    labelText,
    value,
    id,
    htmlFor,
    labelPosition,
    isMaterial,
    disabled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "isChecked", "labelText", "value", "id", "htmlFor", "labelPosition", "isMaterial", "disabled"]);

  // use toggle hooks
  const [toggleValue, toggleHandler] = Object(useToggle["a" /* default */])(isChecked); // Add all classs to an array

  const addAllClasses = ['reusecore__checkbox']; // Add label position class

  if (labelPosition) {
    addAllClasses.push(`label_${labelPosition}`);
  } // isMaterial prop checking


  if (isMaterial) {
    addAllClasses.push('is-material');
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // label control


  const LabelField = labelText && __jsx("span", {
    className: "reusecore__field-label"
  }, labelText);

  const position = labelPosition || 'right';
  return __jsx(checkbox_style, _extends({
    className: addAllClasses.join(' ')
  }, props), __jsx("label", {
    htmlFor: htmlFor
  }, position === 'left' || position === 'right' ? LabelField : '', __jsx("input", _extends({
    type: "checkbox",
    className: "checkbox",
    id: id,
    value: value,
    checked: toggleValue,
    onChange: toggleHandler,
    disabled: disabled
  }, props)), __jsx("div", null)));
};

/** Checkbox default proptype */
CheckBox.defaultProps = {
  isChecked: false,
  labelText: 'Checkbox label',
  labelPosition: 'right',
  disabled: false
};
/* harmony default export */ var Checkbox = __webpack_exports__["a"] = (CheckBox);

/***/ }),

/***/ "jYDh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Box/index.js
var Box = __webpack_require__("l54f");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Text/index.js
var Text = __webpack_require__("4Af6");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Heading/index.js
var Heading = __webpack_require__("bHe8");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("H3JQ");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Accordion/index.js + 1 modules
var Accordion = __webpack_require__("aVK5");

// EXTERNAL MODULE: external "react-icons-kit"
var external_react_icons_kit_ = __webpack_require__("Oi65");

// EXTERNAL MODULE: external "react-icons-kit/entypo/plus"
var plus_ = __webpack_require__("Av/8");

// EXTERNAL MODULE: external "react-icons-kit/entypo/minus"
var minus_ = __webpack_require__("8N94");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./containers/Agency/FaqSection/faqSection.style.js


const FaqSectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "faqSectionstyle__FaqSectionWrapper",
  componentId: "sc-901h8h-0"
})(["padding:80px 0;overflow:hidden;@media (max-width:990px){padding:40px 0 60px 0;}@media (max-width:767px){padding:20px 0 40px 0;}.reusecore__accordion{max-width:820px;margin:0 auto;border:1px solid ", ";border-radius:5px;box-shadow:0px 0px 30px 0px rgba(25,61,101,0.05);.accordion__item{border-top:0;border-bottom:1px solid ", ";&:last-child{border-bottom:0;}.accordion__header{padding:20px 30px;}.accordion__body{padding:5px 30px 20px;}}}"], Object(external_styled_system_["themeGet"])('colors.inactiveIcon', '#ebebeb'), Object(external_styled_system_["themeGet"])('colors.inactiveIcon', '#ebebeb'));
/* harmony default export */ var faqSection_style = (FaqSectionWrapper);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/data/Agency/index.js
var Agency = __webpack_require__("sOBS");

// CONCATENATED MODULE: ./containers/Agency/FaqSection/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













const FaqSection = ({
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  titleStyle,
  descriptionStyle
}) => {
  return __jsx(faqSection_style, {
    id: "faqSection"
  }, __jsx(Container["a" /* default */], null, __jsx(Box["a" /* default */], sectionHeader, __jsx(Text["a" /* default */], _extends({
    content: "FAQ"
  }, sectionSubTitle)), __jsx(Heading["a" /* default */], _extends({
    content: "Frequently Ask Question"
  }, sectionTitle))), __jsx(Box["a" /* default */], {
    className: "row"
  }, __jsx(Accordion["a" /* Accordion */], null, __jsx(external_react_["Fragment"], null, Agency["a" /* default */].faq.map((faqItem, index) => __jsx(Accordion["c" /* AccordionItem */], {
    key: `accordion_key-${index}`
  }, __jsx(external_react_["Fragment"], null, __jsx(Accordion["d" /* AccordionTitle */], null, __jsx(external_react_["Fragment"], null, __jsx(Heading["a" /* default */], _extends({
    content: faqItem.title
  }, titleStyle)), __jsx(Accordion["f" /* IconWrapper */], null, __jsx(Accordion["g" /* OpenIcon */], null, __jsx(external_react_icons_kit_["Icon"], {
    icon: minus_["minus"],
    size: 18
  })), __jsx(Accordion["e" /* CloseIcon */], null, __jsx(external_react_icons_kit_["Icon"], {
    icon: plus_["plus"],
    size: 18
  }))))), __jsx(Accordion["b" /* AccordionBody */], null, __jsx(Text["a" /* default */], _extends({
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
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#10ac84',
    mb: '10px'
  },
  // section title default style
  sectionTitle: {
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
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '0'
  }
};
/* harmony default export */ var Agency_FaqSection = __webpack_exports__["a"] = (FaqSection);

/***/ }),

/***/ "jpsa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Box/index.js
var Box = __webpack_require__("l54f");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Text/index.js
var Text = __webpack_require__("4Af6");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Heading/index.js
var Heading = __webpack_require__("bHe8");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/FeatureBlock/index.js + 1 modules
var FeatureBlock = __webpack_require__("b4OD");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/data/Agency/index.js
var Agency = __webpack_require__("sOBS");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("H3JQ");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./containers/Agency/FeatureSection/featureSection.style.js


const FeatureSectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "featureSectionstyle__FeatureSectionWrapper",
  componentId: "sc-13s4iqj-0"
})(["padding:80px 0;overflow:hidden;@media (max-width:990px){padding:60px 0 30px 0;}@media (max-width:767px){padding:40px 0 30px 0;}.feature__block{position:relative;height:100%;transition:box-shadow 0.3s ease;.icon__wrapper{position:relative;background:linear-gradient( -60deg,rgba(241,39,17,0.7),rgba(245,175,25,0.7) );.flaticon-flask{&:before{margin-left:8px;}}&:before,&:after{content:'';width:28px;height:100%;position:absolute;}&:before{transform:rotate(45deg);background-color:rgba(255,255,255,0.15);}&:after{transform:rotate(-45deg);background-color:rgba(0,0,0,0.05);}}&:hover{box-shadow:0 40px 90px -30px rgba(39,79,117,0.2);}}.row{> .col{&:nth-child(-n + 3){border-top:1px solid ", ";}&:nth-child(3n + 3),&:last-child{border-right:1px solid ", ";}@media only screen and (max-width:991px){&:nth-child(-n + 3){border-top:0;}&:nth-child(3n + 3){border-right:0;}&:nth-child(-n + 2){border-top:1px solid ", ";}&:nth-child(2n + 2){border-right:1px solid ", ";}}@media only screen and (max-width:480px){&:nth-child(-n + 2){border-top:0;}&:nth-child(2n + 2){border-right:0;}&:nth-child(-n + 1){border-top:1px solid ", ";}&:nth-child(1n + 1){border-right:1px solid ", ";}}&:nth-child(2){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(50,207,167,0.75),rgba(150,201,61,0.75) );}}}&:nth-child(3){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(236,0,140,0.75),rgba(255,103,103,0.75) );}}}&:nth-child(4){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(47,128,237,0.75),rgba(86,204,242,0.75) );}}}&:nth-child(5){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(110,72,170,0.75),rgba(192,91,210,0.75) );}}}&:last-child{.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(0,57,115,0.75),rgba(299,299,199,0.75) );}}}}}"], Object(external_styled_system_["themeGet"])('colors.lightBorder', '#f1f4f6'), Object(external_styled_system_["themeGet"])('colors.lightBorder', '#f1f4f6'), Object(external_styled_system_["themeGet"])('colors.lightBorder', '#f1f4f6'), Object(external_styled_system_["themeGet"])('colors.lightBorder', '#f1f4f6'), Object(external_styled_system_["themeGet"])('colors.lightBorder', '#f1f4f6'), Object(external_styled_system_["themeGet"])('colors.lightBorder', '#f1f4f6'));
/* harmony default export */ var featureSection_style = (FeatureSectionWrapper);
// CONCATENATED MODULE: ./containers/Agency/FeatureSection/index.js
var __jsx = external_react_default.a.createElement;

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
  return __jsx(featureSection_style, {
    id: "featureSection"
  }, __jsx(Container["a" /* default */], null, __jsx(Box["a" /* default */], sectionHeader, __jsx(Text["a" /* default */], _extends({
    content: "OUR SERVICES"
  }, sectionSubTitle)), __jsx(Heading["a" /* default */], _extends({
    content: "Featured Service that We Provide"
  }, sectionTitle))), __jsx(Box["a" /* default */], _extends({
    className: "row"
  }, row), Agency["a" /* default */].features.map((feature, index) => __jsx(Box["a" /* default */], _extends({
    className: "col"
  }, col, {
    key: `feature-${index}`
  }), __jsx(FeatureBlock["a" /* default */], {
    icon: __jsx("i", {
      className: feature.icon
    }),
    wrapperStyle: blockWrapperStyle,
    iconStyle: iconStyle,
    contentStyle: contentStyle,
    title: __jsx(Heading["a" /* default */], _extends({
      content: feature.title
    }, featureTitle)),
    description: __jsx(Text["a" /* default */], _extends({
      content: feature.description
    }, featureDescription))
  }))))));
}; // FeatureSection style props


// FeatureSection default style
FeatureSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '56px']
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#10ac84',
    mb: '10px'
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
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
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    borderLeft: '1px solid #f1f4f6',
    borderBottom: '1px solid #f1f4f6'
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '30px', '40px']
  },
  // feature icon default style
  iconStyle: {
    width: '84px',
    height: '84px',
    m: '0 auto',
    borderRadius: '50%',
    bg: '#93d26e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '36px',
    color: '#ffffff',
    overflow: 'hidden',
    mb: '30px'
  },
  // feature content default style
  contentStyle: {
    textAlign: 'center'
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
    color: '#343d48cc'
  }
};
/* harmony default export */ var Agency_FeatureSection = __webpack_exports__["a"] = (FeatureSection);

/***/ }),

/***/ "jvFD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KeDb")


/***/ }),

/***/ "k094":
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "kO2b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("INZR");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_src_assets_image_agency_particles_particle_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("HZTQ");
/* harmony import */ var common_src_assets_image_agency_particles_particle_1_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_agency_particles_particle_1_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_src_assets_image_agency_particles_particle_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("pVBZ");
/* harmony import */ var common_src_assets_image_agency_particles_particle_2_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_agency_particles_particle_2_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_src_assets_image_agency_particles_particle_3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9Zkp");
/* harmony import */ var common_src_assets_image_agency_particles_particle_3_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_agency_particles_particle_3_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var common_src_assets_image_agency_particles_particle_4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("oWDX");
/* harmony import */ var common_src_assets_image_agency_particles_particle_4_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_agency_particles_particle_4_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var common_src_assets_image_agency_particles_particle_5_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("MvUT");
/* harmony import */ var common_src_assets_image_agency_particles_particle_5_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_agency_particles_particle_5_png__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const ParticlesComponent = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "particle",
    params: {
      particles: {
        number: {
          value: 7,
          density: {
            enable: true,
            value_area: 800
          }
        },
        shape: {
          type: ['images'],
          images: [{
            src: `${common_src_assets_image_agency_particles_particle_1_png__WEBPACK_IMPORTED_MODULE_2___default.a}`,
            width: 25,
            height: 25
          }, {
            src: `${common_src_assets_image_agency_particles_particle_2_png__WEBPACK_IMPORTED_MODULE_3___default.a}`,
            width: 18,
            height: 18
          }, {
            src: `${common_src_assets_image_agency_particles_particle_3_png__WEBPACK_IMPORTED_MODULE_4___default.a}`,
            width: 32,
            height: 32
          }, {
            src: `${common_src_assets_image_agency_particles_particle_4_png__WEBPACK_IMPORTED_MODULE_5___default.a}`,
            width: 41,
            height: 41
          }, {
            src: `${common_src_assets_image_agency_particles_particle_5_png__WEBPACK_IMPORTED_MODULE_6___default.a}`,
            width: 22,
            height: 22
          }, {
            src: `${common_src_assets_image_agency_particles_particle_2_png__WEBPACK_IMPORTED_MODULE_3___default.a}`,
            width: 22,
            height: 22
          }, {
            src: `${common_src_assets_image_agency_particles_particle_4_png__WEBPACK_IMPORTED_MODULE_5___default.a}`,
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

/* harmony default export */ __webpack_exports__["a"] = (ParticlesComponent);

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

/***/ "lAGf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Box/index.js
var Box = __webpack_require__("l54f");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Heading/index.js
var Heading = __webpack_require__("bHe8");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Input/index.js + 1 modules
var Input = __webpack_require__("olOc");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Button/index.js + 4 modules
var Button = __webpack_require__("D7Vo");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("H3JQ");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./containers/Agency/NewsletterSection/newsletterSection.style.js

const NewsletterSectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "newsletterSectionstyle__NewsletterSectionWrapper",
  componentId: "sc-3lt5xm-0"
})(["padding:80px 0;overflow:hidden;@media (max-width:990px){padding:40px 0 60px 0;}"]);
const NewsletterForm = external_styled_components_default.a.div.withConfig({
  displayName: "newsletterSectionstyle__NewsletterForm",
  componentId: "sc-3lt5xm-1"
})(["display:flex;align-items:center;justify-content:space-between;max-width:488px;margin:0 auto;@media (max-width:575px){flex-direction:column;max-width:100%;}.reusecore__input{flex:1;margin-right:20px;@media (max-width:575px){margin:0 0 20px 0;width:100%;}.field-wrapper{input{min-height:45px;}}&.is-material{label{font-size:14px;top:14px;font-weight:500;color:rgba(51,61,72,0.4);}&.is-focus{label{top:-12px;}}}}.reusecore__button{flex-shrink:0;transition:all 0.3s ease;@media (max-width:575px){width:100%;}&:hover{box-shadow:0px 9px 20px -5px rgba(16,172,132,0.57);}}"]);

/* harmony default export */ var newsletterSection_style = (NewsletterSectionWrapper);
// CONCATENATED MODULE: ./containers/Agency/NewsletterSection/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const NewsletterSection = ({
  sectionHeader,
  sectionTitle,
  btnStyle
}) => {
  return __jsx(newsletterSection_style, {
    id: "newsletterSection"
  }, __jsx(Container["a" /* default */], null, __jsx(Box["a" /* default */], sectionHeader, __jsx(Heading["a" /* default */], _extends({
    content: "Subscribe Newsletter"
  }, sectionTitle))), __jsx(Box["a" /* default */], null, __jsx(NewsletterForm, null, __jsx(Input["a" /* default */], {
    inputType: "email",
    isMaterial: false,
    placeholder: "Email Address",
    "aria-label": "email"
  }), __jsx(Button["a" /* default */], _extends({
    type: "button",
    title: "SEND MESSAGE"
  }, btnStyle))))));
}; // NewsletterSection style props


// NewsletterSection default style
NewsletterSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: '56px'
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  // button default style
  btnStyle: {
    minWidth: '152px',
    minHeight: '45px',
    fontSize: '14px',
    fontWeight: '500'
  }
};
/* harmony default export */ var Agency_NewsletterSection = __webpack_exports__["a"] = (NewsletterSection);

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

/***/ "m/a5":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

/***/ "oHnV":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/agency-banner-786e83ef0f7f5cd78b599e53dd9b0a0f.png";

/***/ }),

/***/ "oWDX":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAllBMVEUwfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv9w6jhqAAAAMnRSTlMAAgMEBQoLDxASExcYHR8gISIjJSsyMz0+Q0RGTFJbX3t8fX5/gIaHioyOj5CRk5SVmV23O/AAAADkSURBVCjPfZLdWoJQEEU3P5UVppiYIEmBgacO6nr/l+tCKBB0X5515puZvUc6y1tuc4vNt0tPXTlve1qZpMOec7rKgxbMvoEyXUy8yet7CfzMzyCwcEzc5pubHMEGkuTmYKadplMDhStpA6ewN094go3kG0jUVwLGVwSVe0GcClbKINWlUshUwGJAQtjJwsOA3IMV4A2IANVXamrtrvT5ujHbCipndJ8xD2Iw/phv87NvN7xWYOEQ/+UTH9p8pBcDlGl45zSZmllb//jRu4PPp86Y6//b2a/7S/hRVtTURRb5zcsvDoEoKiBacYsAAAAASUVORK5CYII="

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

/***/ "pVBZ":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAABTElEQVQ4ja3TPUscURTG8V/GVUujWGgKG8EE7GwsFLSSWE9nl88xrZ/FylqLRf0AorAkTWwUERGbgYCLbLGbwjN4HfbFhT3Vc87z3D+Xe2a+fD0+PMCaydXfDEsTBMJyhvMJQ88baGEDKzG8wdEYkPT57tHK0MMJumGs+fwbf0+yXZyUedHLYvCEqyT8E40RwEbkqroq8+IJsmR4gXboBWyNgG5hPnQ7zqtD2zhL+m3MDQDOhV/VWZkX1YU+QOEaj6GnsTcAuh++yF+nZh1aLa0X/TpWa5lV/EjzZV700kAdCg/ePrP0VlOhp6KvqlXmxUMd0A8KTbyGXsRm6M3ohd/sd3gQ9EWyTezgG3aT2UXkPg2FSzyHnsUvzET/HH7fGgbt+ri06cQ79f4HjgWFO/ypzX7jdtihUVDeltEJ3TFgOeNC/3n/GprRD63/4qlNWYiwMj4AAAAASUVORK5CYII="

/***/ }),

/***/ "qbum":
/***/ (function(module, exports) {

module.exports = require("@redq/reuse-modal");

/***/ }),

/***/ "rGol":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Box/index.js
var Box = __webpack_require__("l54f");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Text/index.js
var Text = __webpack_require__("4Af6");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Heading/index.js
var Heading = __webpack_require__("bHe8");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/UIElements/Logo/index.js
var Logo = __webpack_require__("cIfr");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("H3JQ");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/agency/footer-bg.png
var footer_bg = __webpack_require__("OdzX");
var footer_bg_default = /*#__PURE__*/__webpack_require__.n(footer_bg);

// CONCATENATED MODULE: ./containers/Agency/Footer/footer.style.js



const FooterWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "footerstyle__FooterWrapper",
  componentId: "sc-1cbe9r-0"
})(["padding:80px 0;margin-top:40px;background-image:url(", ");background-repeat:no-repeat;background-position:center 50px;border-top:1px solid #efefef;overflow:hidden;@media (max-width:990px){padding-bottom:30px;}@media (max-width:767px){padding-bottom:10px;}"], footer_bg_default.a);
const List = external_styled_components_default.a.ul.withConfig({
  displayName: "footerstyle__List",
  componentId: "sc-1cbe9r-1"
})([""]);
const ListItem = external_styled_components_default.a.li.withConfig({
  displayName: "footerstyle__ListItem",
  componentId: "sc-1cbe9r-2"
})(["a{color:", ";font-size:14px;line-height:36px;transition:all 0.2s ease;&:hover,&:focus{outline:0;text-decoration:none;color:", ";}}"], Object(external_styled_system_["themeGet"])('colors.textColor', 'rgba(52, 61, 72, 0.8)'), Object(external_styled_system_["themeGet"])('colors.quoteText', '#343d48'));

/* harmony default export */ var footer_style = (FooterWrapper);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/agency/logo.png
var logo = __webpack_require__("DEAh");
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/data/Agency/index.js
var Agency = __webpack_require__("sOBS");

// CONCATENATED MODULE: ./containers/Agency/Footer/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  titleStyle,
  logoStyle,
  textStyle
}) => {
  return __jsx(footer_style, {
    id: "footerSection"
  }, __jsx(Container["a" /* default */], null, __jsx(Box["a" /* default */], _extends({
    className: "row"
  }, row), __jsx(Box["a" /* default */], colOne, __jsx(Logo["a" /* default */], {
    href: "#",
    logoSrc: logo_default.a,
    title: "Agency",
    logoStyle: logoStyle
  }), __jsx(Text["a" /* default */], _extends({
    content: "hello@redq.io"
  }, textStyle)), __jsx(Text["a" /* default */], _extends({
    content: "+479-443-9334"
  }, textStyle))), __jsx(Box["a" /* default */], colTwo, Agency["a" /* default */].menuWidget.map(widget => __jsx(Box["a" /* default */], _extends({
    className: "col"
  }, col, {
    key: widget.id
  }), __jsx(Heading["a" /* default */], _extends({
    content: widget.title
  }, titleStyle)), __jsx(List, null, widget.menuItems.map(item => __jsx(ListItem, {
    key: `list__item-${item.id}`
  }, __jsx(link_default.a, {
    href: item.url
  }, __jsx("a", {
    className: "ListItem"
  }, item.text)))))))))));
}; // Footer style props


// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-4px',
    mr: '-4px'
  },
  // Footer col one style
  colOne: {
    width: ['100%', '30%', '35%', '23%'],
    mt: [0, '13px'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0]
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '70%', '65%', '77%'],
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
    fontWeight: '700'
  },
  // Default logo size
  logoStyle: {
    width: '128px',
    mb: '15px'
  },
  // widget text default style
  textStyle: {
    color: '#0f2137',
    fontSize: '16px',
    mb: '10px'
  }
};
/* harmony default export */ var Agency_Footer = __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "rNYl":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/iosSearchStrong");

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

/***/ "sOBS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _assets_image_agency_blog_blog_img1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wFEO");
/* harmony import */ var _assets_image_agency_blog_blog_img1_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_blog_blog_img1_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_image_agency_blog_blog_img2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("SbaX");
/* harmony import */ var _assets_image_agency_blog_blog_img2_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_blog_blog_img2_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_agency_blog_blog_img3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Aw9B");
/* harmony import */ var _assets_image_agency_blog_blog_img3_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_blog_blog_img3_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_image_agency_team_member_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("svf+");
/* harmony import */ var _assets_image_agency_team_member_1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_team_member_1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_image_agency_team_member_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Vi/G");
/* harmony import */ var _assets_image_agency_team_member_2_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_team_member_2_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_image_agency_team_member_3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("w3+i");
/* harmony import */ var _assets_image_agency_team_member_3_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_team_member_3_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("GFhP");
/* harmony import */ var _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_image_agency_client_menny_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("CzWp");
/* harmony import */ var _assets_image_agency_client_menny_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_client_menny_png__WEBPACK_IMPORTED_MODULE_7__);








const data = {
  menuItems: [{
    label: 'Feature',
    path: '#featureSection',
    offset: '80'
  }, {
    label: 'Work History',
    path: '#workHistorySection',
    offset: '67'
  }, {
    label: 'Portfolio',
    path: '#blogSection',
    offset: '67'
  }, {
    label: 'Quality feature',
    path: '#qualitySection',
    offset: '67'
  }, {
    label: 'Testimonial',
    path: '#testimonialSection',
    offset: '100'
  }, {
    label: 'Team Member',
    path: '#teamSection',
    offset: '67'
  }, {
    label: 'FAQ',
    path: '#faqSection',
    offset: '67'
  }],
  aboutus: [{
    id: 1,
    title: 'Amazing communication experience.',
    icon: 'flaticon-next'
  }, {
    id: 2,
    title: 'Best designing experience with trending tools and sizes.',
    icon: 'flaticon-next'
  }, {
    id: 3,
    title: 'Training and communication method remotely.',
    icon: 'flaticon-next'
  }, {
    id: 4,
    title: '24/7 Hour onine supports.',
    icon: 'flaticon-next'
  }],
  features: [{
    id: 1,
    icon: 'flaticon-flask',
    title: 'Search Optimization',
    description: 'By using Search Engine Optimization, You will get more Clients'
  }, {
    id: 2,
    icon: 'flaticon-pencil-case',
    title: 'Ui/UX Design',
    description: 'We provide the best UI/UX Design by following the latest trends of the market .'
  }, {
    id: 3,
    icon: 'flaticon-ruler',
    title: 'Wireframing Task',
    description: 'We respect our customer opinions and deals with them with perfect wireframing '
  }, {
    id: 4,
    icon: 'flaticon-startup',
    title: 'Business Solutions',
    description: 'We are commited to provide proper business solutions with reasonable pricing'
  }, {
    id: 5,
    icon: 'flaticon-briefing',
    title: 'Business Analysis',
    description: 'A day to day report about your ongoing business for proper understanding'
  }, {
    id: 6,
    icon: 'flaticon-creative',
    title: 'Content Management',
    description: 'Proper Content Management is important to find out the real clients for your agencies'
  }],
  qualityFeature: [{
    id: 1,
    icon: 'flaticon-flask',
    title: 'Search Optimization',
    description: 'By using Search Engine Optimization, You will get more Clients.'
  }, {
    id: 2,
    icon: 'flaticon-pencil-case',
    title: 'Wireframing Task',
    description: 'We respect our customer opinions and deals with them with perfect wireframing.'
  }, {
    id: 3,
    icon: 'flaticon-ruler',
    title: 'Ui/Ux Design',
    description: 'We provide the best UI/UX Design by following the latest trends of the market .'
  }, {
    id: 4,
    icon: 'flaticon-briefing',
    title: 'Content Writting',
    description: 'Proper Content Management is important to find out the real clients for your agencies .'
  }],
  blog: [{
    id: 1,
    title: 'Real home corporation',
    thumbnail_url: _assets_image_agency_blog_blog_img1_png__WEBPACK_IMPORTED_MODULE_0___default.a,
    date: 'November 02, 2018',
    postLink: '#1'
  }, {
    id: 2,
    title: 'Sheltech developer ltd.',
    thumbnail_url: _assets_image_agency_blog_blog_img2_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    date: 'November 12, 2018',
    postLink: '#2'
  }, {
    id: 3,
    title: 'Alt architecture co.',
    thumbnail_url: _assets_image_agency_blog_blog_img3_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    date: 'December 09, 2018',
    postLink: '#3'
  }],
  teamMember: [{
    id: 1,
    name: 'Jessica Fanddy',
    thumbnail_url: _assets_image_agency_team_member_1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    designation: 'Co Founder',
    social_links: [{
      id: 1,
      icon: 'flaticon-facebook-logo',
      url: '#'
    }, {
      id: 1,
      icon: 'flaticon-twitter-logo-silhouette',
      url: '#'
    }, {
      id: 1,
      icon: 'flaticon-instagram',
      url: '#'
    }, {
      id: 1,
      icon: 'flaticon-dribble-logo',
      url: '#'
    }]
  }, {
    id: 2,
    name: 'Devid Justingul',
    thumbnail_url: _assets_image_agency_team_member_2_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    designation: 'Senior Ui/UX Designer',
    social_links: [{
      id: 1,
      icon: 'flaticon-facebook-logo',
      url: '#'
    }, {
      id: 1,
      icon: 'flaticon-twitter-logo-silhouette',
      url: '#'
    }, {
      id: 1,
      icon: 'flaticon-instagram',
      url: '#'
    }, {
      id: 1,
      icon: 'flaticon-dribble-logo',
      url: '#'
    }]
  }, {
    id: 3,
    name: 'Handdy Albuzz',
    thumbnail_url: _assets_image_agency_team_member_3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    designation: 'Article Writer',
    social_links: [{
      id: 1,
      icon: 'flaticon-facebook-logo',
      url: '#'
    }, {
      id: 1,
      icon: 'flaticon-twitter-logo-silhouette',
      url: '#'
    }, {
      id: 1,
      icon: 'flaticon-instagram',
      url: '#'
    }, {
      id: 1,
      icon: 'flaticon-dribble-logo',
      url: '#'
    }]
  }],
  testimonial: [{
    id: 1,
    name: 'Jon Doe',
    designation: 'CEO of Denish Co.',
    comment: 'Best working experience  with this amazing team & in future, we want to work together',
    avatar_url: _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6___default.a
  }, {
    id: 2,
    name: 'Roman Ul Oman',
    designation: 'Co-founder of QatarDiaries',
    comment: 'Impressed with master class support of the team and really look forward for the future.',
    avatar_url: _assets_image_agency_client_menny_png__WEBPACK_IMPORTED_MODULE_7___default.a
  }, {
    id: 3,
    name: 'Jone Doe',
    designation: 'Director of Beauty-queen',
    comment: 'I have bought more than 10 themes on ThemeForest, and this is the first one I review. Wow! Amazing React Theme',
    avatar_url: _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6___default.a
  }, {
    id: 4,
    name: 'Roman Ul Oman',
    designation: 'Co-founder of QatarDiaries',
    comment: 'Impressed with master class support of the team and really look forward for the future.',
    avatar_url: _assets_image_agency_client_menny_png__WEBPACK_IMPORTED_MODULE_7___default.a
  }],
  faq: [{
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
  }],
  menuWidget: [{
    id: 1,
    title: 'About Us',
    menuItems: [{
      id: 1,
      url: '#1',
      text: 'Support Center'
    }, {
      id: 2,
      url: '#2',
      text: 'Customer Support'
    }, {
      id: 3,
      url: '#3',
      text: 'About Us'
    }, {
      id: 4,
      url: '#4',
      text: 'Copyright'
    }, {
      id: 5,
      url: '#5',
      text: 'Popular Campaign'
    }]
  }, {
    id: 2,
    title: 'Our Information',
    menuItems: [{
      id: 1,
      url: '#1',
      text: 'Return Policy'
    }, {
      id: 2,
      url: '#2',
      text: 'Privacy Policy'
    }, {
      id: 3,
      url: '#2',
      text: 'Terms & Conditions'
    }, {
      id: 4,
      url: '#4',
      text: 'Site Map'
    }, {
      id: 5,
      url: '#5',
      text: 'Store Hours'
    }]
  }, {
    id: 3,
    title: 'My Account',
    menuItems: [{
      id: 1,
      url: '#1',
      text: 'Press inquiries'
    }, {
      id: 2,
      url: '#2',
      text: 'Social media directories'
    }, {
      id: 3,
      url: '#3',
      text: 'Images & B-roll'
    }, {
      id: 4,
      url: '#4',
      text: 'Permissions'
    }, {
      id: 5,
      url: '#5',
      text: 'Speaker requests'
    }]
  }, {
    id: 4,
    title: 'Policy',
    menuItems: [{
      id: 1,
      url: '#1',
      text: 'Application security'
    }, {
      id: 2,
      url: '#2',
      text: 'Software principles'
    }, {
      id: 3,
      url: '#3',
      text: 'Unwanted software policy'
    }, {
      id: 4,
      url: '#4',
      text: 'Responsible supply chain'
    }]
  }],
  social_profile: [{
    id: 1,
    icon: 'flaticon-facebook-logo',
    link: '#1'
  }, {
    id: 2,
    icon: 'flaticon-twitter-logo-silhouette',
    link: '#2'
  }, {
    id: 3,
    icon: 'flaticon-instagram',
    link: '#3'
  }, {
    id: 4,
    icon: 'flaticon-tumblr-logo',
    link: '#4'
  }, {
    id: 5,
    icon: 'flaticon-dribble-logo',
    link: '#5'
  }]
};
/* harmony default export */ __webpack_exports__["a"] = (data);

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

/***/ "svf+":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "tdLR":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/login-bg-25b875359c37ca5e181d43ae492612d8.jpg";

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

/***/ "vSXM":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/preview-image-ba0775077f0f6015b4813d992d79aa0b.jpg";

/***/ }),

/***/ "vejf":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "w3+i":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "wFEO":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "wXAh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("isz7");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_src_theme_agency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("yxf+");
/* harmony import */ var common_src_assets_css_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("H4oa");
/* harmony import */ var _containers_Agency_agency_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4gB6");
/* harmony import */ var _containers_Agency_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("WCjH");
/* harmony import */ var _containers_Agency_BannerSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("9rnr");
/* harmony import */ var _containers_Agency_FeatureSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("jpsa");
/* harmony import */ var _containers_Agency_AboutUsSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("iiux");
/* harmony import */ var _containers_Agency_WorkHistory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("PvyY");
/* harmony import */ var _containers_Agency_BlogSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("EeN0");
/* harmony import */ var _containers_Agency_TestimonialSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("Bsug");
/* harmony import */ var _containers_Agency_TeamSection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("4VqO");
/* harmony import */ var _containers_Agency_VideoSection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("M5Cx");
/* harmony import */ var _containers_Agency_NewsletterSection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("lAGf");
/* harmony import */ var _containers_Agency_QualitySection__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("Jcsy");
/* harmony import */ var _containers_Agency_Footer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("rGol");
/* harmony import */ var common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("8qGZ");
/* harmony import */ var _containers_Agency_FaqSection__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("jYDh");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





















/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: common_src_theme_agency__WEBPACK_IMPORTED_MODULE_4__[/* agencyTheme */ "a"]
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Agency | A react next landing page"), __jsx("meta", {
    name: "Description",
    content: "React next landing page"
  }), __jsx("meta", {
    name: "theme-color",
    content: "#10ac84"
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i",
    rel: "stylesheet"
  })), __jsx(common_src_assets_css_style__WEBPACK_IMPORTED_MODULE_5__[/* ResetCSS */ "a"], null), __jsx(_containers_Agency_agency_style__WEBPACK_IMPORTED_MODULE_6__[/* GlobalStyle */ "b"], null), __jsx(_containers_Agency_agency_style__WEBPACK_IMPORTED_MODULE_6__[/* AgencyWrapper */ "a"], null, __jsx(react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a, {
    top: 0,
    innerZ: 9999,
    activeClass: "sticky-nav-active"
  }, __jsx(common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_19__[/* DrawerProvider */ "b"], null, __jsx(_containers_Agency_Navbar__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null))), __jsx(_containers_Agency_BannerSection__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null), __jsx(_containers_Agency_FeatureSection__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null), __jsx(_containers_Agency_AboutUsSection__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null), __jsx(_containers_Agency_WorkHistory__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], null), __jsx(_containers_Agency_BlogSection__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], null), __jsx(_containers_Agency_QualitySection__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], null), __jsx(_containers_Agency_VideoSection__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], null), __jsx(_containers_Agency_TestimonialSection__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], null), __jsx(_containers_Agency_TeamSection__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], null), __jsx(_containers_Agency_FaqSection__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], null), __jsx(_containers_Agency_NewsletterSection__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], null), __jsx(_containers_Agency_Footer__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], null))));
});

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