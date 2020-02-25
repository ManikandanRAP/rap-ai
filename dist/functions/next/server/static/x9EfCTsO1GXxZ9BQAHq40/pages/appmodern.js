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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+/Rj":
/***/ (function(module, exports) {

module.exports = require("react-id-swiper");

/***/ }),

/***/ "+9uC":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACCCAAAAAAItfnaAAADwElEQVR42u3Y+UsUUQAH8O/U1uaaGwXafZiQ1Za2UnRoB1IR0VZ0EQqdlgmWoEVh13bYndGBYElq4FqSbAnGru/9cc3xXKt5s23BjhHf+WXed+A77Id582Z2IP/jDcQRRxxxxBFHHHHEEUccccQRRxxxxBFHHHHEEUccccQRRxxxxBFHHHHEEUccccQRRxxxxBFHHHHE/fu4F7UlUwIL9vV55cSBeUZhVVx4nuDb+mOZcaqlotAIRZpGc27nEycOwdkCV7VZPg45edeY1yniiI4PkytVe3Ei13Y+ceeB+W09XadDMJ7q8kABwhe7OqLAaY8zpFZM4LYBNQ97n+0EVonc2vnEjRRg2Rdr8D6EUuHOcjcC3eYuHUVwWHuCjggyuF7gkI06DDyXObTzi7sNdDijk0CvO3+dhpgd3wJN7vpgsT3pxnGNmJK0B0PACfnbdr5xJ2Coe78TuOvOd4BOJy9FlXmd5mKdfWlSpVht3kYfZpibkcHtwUI1CmG/dLX9xh0PL1ajJ8ADd67LYPeiyGQ9BVqd6xrsHz9HNINrPXBe3YdTUSfd7Ul7zh0EPrnzdpSo3ABYUy6G0EcpewJolm5cZrsKPJOa9iThnk/FRk2uRLk6cMW+B62JuVmMrUJUeOGSg6/rA9gmdO1JwYnWIAr7NbkclerQTaDL2psT83oTQgPSC1dmrjBGfUpq25OAe1kOFL3S5YlnWBx4bQ9iCAdxWWbFYV7co+03bqjW/DUbEtocwRp1tB3odp5sc4FNwhsnRfL+CqBd3/YZ126+IZU9Evq8EaXqcAugpuJxtWJmWVBGF6FE6Nu+vlvWAXOuCa8cQ5Ea1cNIOa8h04Hw5+w4a3VMaNu+4pqBLUnvfCnzgKjGEnufXonobGzX4b5GInfVsWvAO13bV9xQEFvHsuQewPl3kA6rN6kzKEjcAuIanCjA0YkrN6Rr+4prQGA4WxZLEbHn6A31JtUdwCUptmB2UjMt16P4m4NZjgVC0/YXtw7FzZlt2J2t+XXO/H39c5yfmVqOteZ+MITdGpy54Fdb6KS53jZLd9tn3Cz8sHW7sxTVQORIbRAze52FYVqfuhcfuHFiBzC9oqbCXHJq7Mn9S9tfXBo/Y37N1keEmGGNS99Z4Y2BBocRQfGIe7VM1Qft5syzafUJ4sf2v/iBKNF26kJnrrNq5F7jyaZHo3/Z5tcv4ogjjjjiiCOOOOKII4444ogjjjjiiCOOOOKII4444ogjjjjiiCOOOOKII4444ogjjjjiiCOOOOKI+/PtO7WtFyYpM6jRAAAAAElFTkSuQmCC"

/***/ }),

/***/ "+Q8Q":
/***/ (function(module, exports) {

module.exports = require("react-scrollspy");

/***/ }),

/***/ "+XTa":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxMiI+PHBhdGggZGF0YS1uYW1lPSJGb3JtYSAxIiBkPSJNMTcuMjkyIDMuNzczYS40OTIuNDkyIDAgMDEtLjAxMy4xNDhsLTEuMTEgNC40YS41LjUgMCAwMS0uNDg3LjM3OGwtNi42NjIuMDM0SDIuMzU2YS41LjUgMCAwMS0uNDktLjM3OUwuNzU2IDMuOTM3YS40OTMuNDkzIDAgMDEtLjAxMy0uMTUzIDEuMDU4IDEuMDU4IDAgMTEuOTkxLS4xOTFsMS4zOSAxLjM4OGExLjkgMS45IDAgMDAyLjg0NC0uMTkxbDIuMjg0LTNhMS4wNDIgMS4wNDIgMCAwMS0uMzExLS43NDIgMS4wNiAxLjA2IDAgMDEyLjEyIDAgMS4wNDEgMS4wNDEgMCAwMS0uMjk0LjcyNWwyLjI2OCAzLjAwN2ExLjkgMS45IDAgMDAxLjUxLjc1IDEuODgyIDEuODgyIDAgMDAxLjMzMy0uNTQ3bDEuNC0xLjM4NWExLjA0NSAxLjA0NSAwIDAxLS40LS44MTcgMS4wNiAxLjA2IDAgMTExLjQxMS45ODl6TTE2LjA2IDEwLjNhLjUuNSAwIDAwLS41LS41SDIuNWEuNS41IDAgMDAtLjUuNXYxLjJhLjUuNSAwIDAwLjUuNWgxMy4wNTRhLjUuNSAwIDAwLjUtLjV6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"

/***/ }),

/***/ "+tI/":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iOTQiIGhlaWdodD0iMTAzIj48ZGVmcz48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSI5IiB3aWR0aD0iOTQiIGhlaWdodD0iOTQiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGZlT2Zmc2V0IHJlc3VsdD0ib2Zmc2V0IiBkeT0iMTMiIGluPSJTb3VyY2VBbHBoYSIvPjxmZUdhdXNzaWFuQmx1ciByZXN1bHQ9ImJsdXIiIHN0ZERldmlhdGlvbj0iNC41ODMiLz48ZmVGbG9vZCByZXN1bHQ9ImZsb29kIiBmbG9vZC1jb2xvcj0iI2ZmNDQ1NyIgZmxvb2Qtb3BhY2l0eT0iLjMiLz48ZmVDb21wb3NpdGUgcmVzdWx0PSJjb21wb3NpdGUiIG9wZXJhdG9yPSJpbiIgaW4yPSJibHVyIi8+PGZlQmxlbmQgcmVzdWx0PSJibGVuZCIgaW49IlNvdXJjZUdyYXBoaWMiLz48ZmVJbWFnZSBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4PSIyMCIgeT0iMTYiIHdpZHRoPSI1MyIgaGVpZ2h0PSI1MyIgcmVzdWx0PSJpbWFnZSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUIzYVdSMGFEMGlOVE1pSUdobGFXZG9kRDBpTlRNaUlIWnBaWGRDYjNnOUlqQWdNQ0ExTXlBMU15SStDaUFnUEdSbFpuTStDaUFnSUNBOGMzUjViR1UrQ2lBZ0lDQWdJQzVqYkhNdE1TQjdDaUFnSUNBZ0lDQWdabWxzYkRvZ2RYSnNLQ05zYVc1bFlYSXRaM0poWkdsbGJuUXBPd29nSUNBZ0lDQjlDaUFnSUNBOEwzTjBlV3hsUGdvZ0lDQWdQR3hwYm1WaGNrZHlZV1JwWlc1MElHbGtQU0pzYVc1bFlYSXRaM0poWkdsbGJuUWlJSGt4UFNJekxqUTJOQ0lnZURJOUlqVXpJaUI1TWowaU5Ea3VOVE0ySWlCbmNtRmthV1Z1ZEZWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSStDaUFnSUNBZ0lEeHpkRzl3SUc5bVpuTmxkRDBpTFRBdU1qVWlJSE4wYjNBdFkyOXNiM0k5SWlObU9EQTNOVGtpTHo0S0lDQWdJQ0FnUEhOMGIzQWdiMlptYzJWMFBTSXhMakkxSWlCemRHOXdMV052Ykc5eVBTSWpZbU0wWlRsaklpOCtDaUFnSUNBOEwyeHBibVZoY2tkeVlXUnBaVzUwUGdvZ0lEd3ZaR1ZtY3o0S0lDQThjbVZqZENCamJHRnpjejBpWTJ4ekxURWlJSGRwWkhSb1BTSTFNeUlnYUdWcFoyaDBQU0kxTXlJdlBnbzhMM04yWno0SyIvPjxmZUNvbXBvc2l0ZSByZXN1bHQ9ImNvbXBvc2l0ZS0yIiBvcGVyYXRvcj0iaW4iIGluMj0iU291cmNlR3JhcGhpYyIvPjxmZUJsZW5kIHJlc3VsdD0iYmxlbmQtMiIgaW4yPSJibGVuZCIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9ImIiIHg9IjExIiB5PSIwIiB3aWR0aD0iNzAiIGhlaWdodD0iNzAiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGZlSW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgeD0iMTEiIHdpZHRoPSI3MCIgaGVpZ2h0PSI3MCIgcmVzdWx0PSJpbWFnZSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUIzYVdSMGFEMGlOekFpSUdobGFXZG9kRDBpTnpBaUlIWnBaWGRDYjNnOUlqQWdNQ0EzTUNBM01DSStDaUFnUEdSbFpuTStDaUFnSUNBOGMzUjViR1UrQ2lBZ0lDQWdJQzVqYkhNdE1TQjdDaUFnSUNBZ0lDQWdabWxzYkRvZ2RYSnNLQ05zYVc1bFlYSXRaM0poWkdsbGJuUXBPd29nSUNBZ0lDQjlDaUFnSUNBOEwzTjBlV3hsUGdvZ0lDQWdQR3hwYm1WaGNrZHlZV1JwWlc1MElHbGtQU0pzYVc1bFlYSXRaM0poWkdsbGJuUWlJSGt4UFNJMExqVTNOU0lnZURJOUlqY3dJaUI1TWowaU5qVXVOREkxSWlCbmNtRmthV1Z1ZEZWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSStDaUFnSUNBZ0lEeHpkRzl3SUc5bVpuTmxkRDBpTFRBdU1qVWlJSE4wYjNBdFkyOXNiM0k5SWlObVpqUXhObU1pTHo0S0lDQWdJQ0FnUEhOMGIzQWdiMlptYzJWMFBTSXhMakkxSWlCemRHOXdMV052Ykc5eVBTSWpabVkwWWpKaUlpOCtDaUFnSUNBOEwyeHBibVZoY2tkeVlXUnBaVzUwUGdvZ0lEd3ZaR1ZtY3o0S0lDQThjbVZqZENCamJHRnpjejBpWTJ4ekxURWlJSGRwWkhSb1BTSTNNQ0lnYUdWcFoyaDBQU0kzTUNJdlBnbzhMM04yWno0SyIvPjxmZUNvbXBvc2l0ZSByZXN1bHQ9ImNvbXBvc2l0ZSIgb3BlcmF0b3I9ImluIiBpbjI9IlNvdXJjZUdyYXBoaWMiLz48ZmVCbGVuZCByZXN1bHQ9ImJsZW5kIiBpbjI9IlNvdXJjZUdyYXBoaWMiLz48L2ZpbHRlcj48L2RlZnM+PHJlY3QgZGF0YS1uYW1lPSJSb3VuZGVkIFJlY3RhbmdsZSA1MjgiIHg9IjIwIiB5PSIxNiIgd2lkdGg9IjUzIiBoZWlnaHQ9IjUzIiByeD0iMjYuNSIgcnk9IjI2LjUiIGZpbHRlcj0idXJsKCNhKSIgZmlsbD0iI2ZmNDM2MSIvPjxyZWN0IGRhdGEtbmFtZT0iUm91bmRlZCBSZWN0YW5nbGUgNTI4IGNvcHkiIHg9IjExIiB3aWR0aD0iNzAiIGhlaWdodD0iNzAiIHJ4PSIzMCIgcnk9IjMwIiBmaWx0ZXI9InVybCgjYikiIGZpbGw9IiNmZjQzNjEiLz48cGF0aCBkYXRhLW5hbWU9IkZvcm1hIDEiIGQ9Ik00OS43NSAzOS44N2ExLjA2NCAxLjA2NCAwIDAxLS4zMTguNzcgMS4wMzkgMS4wMzkgMCAwMS0uNzUzLjMyaC01LjM1N2ExLjA0IDEuMDQgMCAwMS0uNzU0LS4zMiAxLjA2NCAxLjA2NCAwIDAxLS4zMTgtLjc3di0yLjdIMzF2OC4xMmEyLjYwNiAyLjYwNiAwIDAwLjc4NyAxLjkxIDIuNTMzIDIuNTMzIDAgMDAxLjg5Mi44aDI0LjY0M2EyLjUzMiAyLjUzMiAwIDAwMS44OTEtLjhBMi42MDYgMi42MDYgMCAwMDYxIDQ1LjI5di04LjEySDQ5Ljc1djIuN3ptLTUuODkzLTIuN2g0LjI4NnYyLjE2aC00LjI4NnYtMi4xNnptMTYuMzU2LTEwLjA0YTIuNTY5IDIuNTY5IDAgMDAtMS44OTEtLjhoLTUuODk0di0yLjcxYTEuNTg0IDEuNTg0IDAgMDAtLjQ2OC0xLjE1IDEuNTYxIDEuNTYxIDAgMDAtMS4xMzgtLjQ3aC05LjY0M2ExLjU2MiAxLjU2MiAwIDAwLTEuMTM5LjQ3IDEuNTg0IDEuNTg0IDAgMDAtLjQ2OCAxLjE1djIuNzFoLTUuODkzYTIuNTcgMi41NyAwIDAwLTEuODkyLjhBMi42MDYgMi42MDYgMCAwMDMxIDI5LjA0djYuNWgzMHYtNi41YTIuNjA2IDIuNjA2IDAgMDAtLjc4Ny0xLjkxem0tOS45MjctLjhoLTguNTcydi0yLjE3aDguNTcydjIuMTd6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="

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

/***/ "0FjH":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iOTQiIGhlaWdodD0iMTAzIj48ZGVmcz48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSI5IiB3aWR0aD0iOTQiIGhlaWdodD0iOTQiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGZlT2Zmc2V0IHJlc3VsdD0ib2Zmc2V0IiBkeT0iMTMiIGluPSJTb3VyY2VBbHBoYSIvPjxmZUdhdXNzaWFuQmx1ciByZXN1bHQ9ImJsdXIiIHN0ZERldmlhdGlvbj0iNC41ODMiLz48ZmVGbG9vZCByZXN1bHQ9ImZsb29kIiBmbG9vZC1jb2xvcj0iI2ZkNTg3MiIgZmxvb2Qtb3BhY2l0eT0iLjMiLz48ZmVDb21wb3NpdGUgcmVzdWx0PSJjb21wb3NpdGUiIG9wZXJhdG9yPSJpbiIgaW4yPSJibHVyIi8+PGZlQmxlbmQgcmVzdWx0PSJibGVuZCIgaW49IlNvdXJjZUdyYXBoaWMiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJiIiB4PSIxMSIgeT0iMCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjcwIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiPjxmZUltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHg9IjExIiB3aWR0aD0iNzAiIGhlaWdodD0iNzAiIHJlc3VsdD0iaW1hZ2UiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCM2FXUjBhRDBpTnpBaUlHaGxhV2RvZEQwaU56QWlJSFpwWlhkQ2IzZzlJakFnTUNBM01DQTNNQ0krQ2lBZ1BHUmxabk0rQ2lBZ0lDQThjM1I1YkdVK0NpQWdJQ0FnSUM1amJITXRNU0I3Q2lBZ0lDQWdJQ0FnWm1sc2JEb2dkWEpzS0NOc2FXNWxZWEl0WjNKaFpHbGxiblFwT3dvZ0lDQWdJQ0I5Q2lBZ0lDQThMM04wZVd4bFBnb2dJQ0FnUEd4cGJtVmhja2R5WVdScFpXNTBJR2xrUFNKc2FXNWxZWEl0WjNKaFpHbGxiblFpSUhreFBTSTBMalUzTlNJZ2VESTlJamN3SWlCNU1qMGlOalV1TkRJMUlpQm5jbUZrYVdWdWRGVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0krQ2lBZ0lDQWdJRHh6ZEc5d0lHOW1abk5sZEQwaUxUQXVNalVpSUhOMGIzQXRZMjlzYjNJOUlpTm1aalU0TlRnaUx6NEtJQ0FnSUNBZ1BITjBiM0FnYjJabWMyVjBQU0l4TGpJMUlpQnpkRzl3TFdOdmJHOXlQU0lqWmpnMU4yRTJJaTgrQ2lBZ0lDQThMMnhwYm1WaGNrZHlZV1JwWlc1MFBnb2dJRHd2WkdWbWN6NEtJQ0E4Y21WamRDQmpiR0Z6Y3owaVkyeHpMVEVpSUhkcFpIUm9QU0kzTUNJZ2FHVnBaMmgwUFNJM01DSXZQZ284TDNOMlp6NEsiLz48ZmVDb21wb3NpdGUgcmVzdWx0PSJjb21wb3NpdGUiIG9wZXJhdG9yPSJpbiIgaW4yPSJTb3VyY2VHcmFwaGljIi8+PGZlQmxlbmQgcmVzdWx0PSJibGVuZCIgaW4yPSJTb3VyY2VHcmFwaGljIi8+PC9maWx0ZXI+PC9kZWZzPjxyZWN0IGRhdGEtbmFtZT0iUm91bmRlZCBSZWN0YW5nbGUgNTI4IiB4PSIyMCIgeT0iMTYiIHdpZHRoPSI1MyIgaGVpZ2h0PSI1MyIgcng9IjI2LjUiIHJ5PSIyNi41IiBmaWx0ZXI9InVybCgjYSkiIGZpbGw9IiNmZjQzNjEiLz48cmVjdCBkYXRhLW5hbWU9IlJvdW5kZWQgUmVjdGFuZ2xlIDUyOCBjb3B5IiB4PSIxMSIgd2lkdGg9IjcwIiBoZWlnaHQ9IjcwIiByeD0iMzAiIHJ5PSIzMCIgZmlsdGVyPSJ1cmwoI2IpIiBmaWxsPSIjZmY0MzYxIi8+PHBhdGggZGF0YS1uYW1lPSJGb3JtYSAxIiBkPSJNNjMuNTQgMzAuODZhMS4xIDEuMSAwIDAxLS4wMi4zMWwtMi4yOSA5LjE2YTEuMDE3IDEuMDE3IDAgMDEtMSAuNzlsLTEzLjY5LjA3aC0xMy43YTEuMDM3IDEuMDM3IDAgMDEtMS4wMS0uNzlsLTIuMjgtOS4yYTEuMTI2IDEuMTI2IDAgMDEtLjAyLS4zMiAyLjE3NiAyLjE3NiAwIDExMi4wMy0uMzlsMi44NiAyLjg5YTMuODU5IDMuODU5IDAgMDA1Ljg0LS40bDQuNy02LjI1YTIuMTggMi4xOCAwIDExMy4xMS0uMDNoLjAxbDQuNjYgNi4yNmEzLjg5MyAzLjg5MyAwIDAwMy4xIDEuNTcgMy44NSAzLjg1IDAgMDAyLjc0LTEuMTRsMi44OC0yLjg5YTIuMTc2IDIuMTc2IDAgMTEyLjA4LjM2em0tMi41MyAxMy42YTEuMDMzIDEuMDMzIDAgMDAtMS4wNC0xLjA0SDMzLjE0YTEuMDM5IDEuMDM5IDAgMDAtMS4wNCAxLjA0djIuNUExLjA0NiAxLjA0NiAwIDAwMzMuMTQgNDhoMjYuODNhMS4wMzkgMS4wMzkgMCAwMDEuMDQtMS4wNHYtMi41eiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"

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

/***/ "3W7+":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAAAeCAAAAAA9LGLuAAABNElEQVRYw2PYM1gAw6hLRl0y6pJRl4y6ZM+eak8gkSnGKBC8s4gBBARhMhDBPfP1mCVqae+SOdmCQJdM5Zi4YzZ/9aYlQGAfB5WCCu6WDdrSxDqf5i4p81cCumRp157dC0VbQQIdWruahDfsKZfdChWczLplzx6zaDrEThAodvZsYGJw2g2kt0jN2bPH1WOVwDSYYIkCkBVhQzeX7Nk9WzQfSMV5gVwgqpQIF8zVAjISjenkkoWgZBBltWfPRu6FILEE5rVwwXJFUJhY08kliWZARrDTnj25BiChZYLG7nDBaWxb9+wxp1c6mcPasLWPt3nPHp0cUJwYpqwTbIUJ7laI3tXDNp9e6aRKilGiEBg5jDNB5Yjqzj11Ihtgggt02MVqRkv7UZeMumTUJaMuGXUJFgAA3C52xqujJeYAAAAASUVORK5CYII="

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

/***/ "5NCh":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logoWhite-512a641e90600644922a2327e20c5067.png";

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

/***/ "5UcI":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAAAAADHSPpUAAABlUlEQVRo3u3Vv0sbcRzG8c/VM7YSKwqhQRRBR8WpQwuCYCmR4KAoGjkTKMqN2dJEClEDom0gEBAnIfijtIsIiub03n+cg/uFhINSeJ7tC294DZ/ha/zTmXjx4sWLFy9evHjx4sWLFy9evHjx4sWLFy9evHjx4v9Lfs0DeCqknNROCDRn3JH8c7dJr/zlkAew4eRqq04eztwvVc/Z7TLpkW/MueYBj4kNYOVdwMdPIRQWu0p65s99P+kB51YH9u3P3ZsD2iHw0xpQ6W9FJLHc/oMHPF60gdxA+9RKU5b0nuHrZHA7vBOZxMYDUHU3ObKB7XrBycPN+93l6SAyiZP/PW+ZgJptASuDT1BO9J11SOLjy28njoFf1gQO7QqCoemwQxIbX7KtAODK6kDV/sK30b5KhyQu/iGZe32FY0vAQjqk5dY2h28jk9j4E1v3fd/3A75b9kfG9ghnP3OfykYl8fFFe909YTHtjO9BMXENB9aMSPTjiRcvXrx48eLFixcvXrx48eLFixcvXrx48eLFixcvvtu9AN536flgFP9aAAAAAElFTkSuQmCC"

/***/ }),

/***/ "5uKz":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("sOxF");


/***/ }),

/***/ "6MyC":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAABS0lEQVQ4ja3Tv0pcURDH8U+uq5ZiuIWxSSEYIVWqLTaglSjiC9jl5XyAy8UUa9YHCCYs2sRGERExneAiFrsWO4vHy/5xYae5v5n5zZfDmXM//N/fO8C62cW/DCszBMKnDK0ZQ1s1tPENn6N4gcMpIOn1XaOdoYef6EZj3fvv+Evi7eIoL8peFoU7nCbmHdQmAGvhG8RpXpR3kCXFE3RCf0RjArSB5dCdmFeFdnCc5N+xNAK4FP1B/MqLcnCgN1D4i9vQ89geAd2NvvD/SZtVaA9H8YWvWKt41rCR+vOi7KWGKhRu9J9Zeqq50HORD6KdF+VNFTAMCk08hc5RD12PXPSbw4ZHQR8l28QmVrGV1E7C924o/MZ96EX8wELk99EfGuOgXW+XNp/00j9wKihc4bxSO8PluKFJUPrLeA79bMRypoU+eH0NzcjHxgsLtUxOm5qSqgAAAABJRU5ErkJggg=="

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

/***/ "7t0J":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAllBMVEUwfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv9w6jhqAAAAMnRSTlMAAgMEBQoLDxASExcYHR8gISIjJSsyMz0+Q0RGTFJbX3t8fX5/gIaHioyOj5CRk5SVmV23O/AAAADkSURBVCjPfZLdWoJQEEU3P5UVppiYIEmBgacO6nr/l+tCKBB0X5515puZvUc6y1tuc4vNt0tPXTlve1qZpMOec7rKgxbMvoEyXUy8yet7CfzMzyCwcEzc5pubHMEGkuTmYKadplMDhStpA6ewN094go3kG0jUVwLGVwSVe0GcClbKINWlUshUwGJAQtjJwsOA3IMV4A2IANVXamrtrvT5ujHbCipndJ8xD2Iw/phv87NvN7xWYOEQ/+UTH9p8pBcDlGl45zSZmllb//jRu4PPp86Y6//b2a/7S/hRVtTURRb5zcsvDoEoKiBacYsAAAAASUVORK5CYII="

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

/***/ "9BRq":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAASCAAAAACSzsTaAAAAwklEQVQ4y2PYQyfAMGrRsLHIbs+ebVbacUBWVxBCaJOpXghVLVprxLRnT1nGbpMVe3ZpBCGECvL3WC+lpkW7t2nt2RMwbU9iy56SsKA9qdVL7MBCJWm7TZdTN+i09+xxX7Anq2qLxfSgPTtMbJeAhdaLalnuprpFgdOBPorrngkMuhxbiFBAx56QVqpbVJGzx3Klo4mWWM1mE6dZYCGPyXsSa6lu0XYbkwQgC+ij0K7lprtBQgv19B23j2bYUYsGq0UAGVs1o2YtOWkAAAAASUVORK5CYII="

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

/***/ "Cgac":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/star");

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

/***/ "DiAb":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dashboard-0ba91ed1acd48b613edc553cdeede5cc.png";

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "DvHE":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iOTQiIGhlaWdodD0iMTAzIj48ZGVmcz48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSI5IiB3aWR0aD0iOTQiIGhlaWdodD0iOTQiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGZlT2Zmc2V0IHJlc3VsdD0ib2Zmc2V0IiBkeT0iMTMiIGluPSJTb3VyY2VBbHBoYSIvPjxmZUdhdXNzaWFuQmx1ciByZXN1bHQ9ImJsdXIiIHN0ZERldmlhdGlvbj0iNC41ODMiLz48ZmVGbG9vZCByZXN1bHQ9ImZsb29kIiBmbG9vZC1jb2xvcj0iI2U1MWU2ZiIgZmxvb2Qtb3BhY2l0eT0iLjMiLz48ZmVDb21wb3NpdGUgcmVzdWx0PSJjb21wb3NpdGUiIG9wZXJhdG9yPSJpbiIgaW4yPSJibHVyIi8+PGZlQmxlbmQgcmVzdWx0PSJibGVuZCIgaW49IlNvdXJjZUdyYXBoaWMiLz48ZmVJbWFnZSBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4PSIyMCIgeT0iMTYiIHdpZHRoPSI1MyIgaGVpZ2h0PSI1MyIgcmVzdWx0PSJpbWFnZSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUIzYVdSMGFEMGlOVE1pSUdobGFXZG9kRDBpTlRNaUlIWnBaWGRDYjNnOUlqQWdNQ0ExTXlBMU15SStDaUFnUEdSbFpuTStDaUFnSUNBOGMzUjViR1UrQ2lBZ0lDQWdJQzVqYkhNdE1TQjdDaUFnSUNBZ0lDQWdabWxzYkRvZ2RYSnNLQ05zYVc1bFlYSXRaM0poWkdsbGJuUXBPd29nSUNBZ0lDQjlDaUFnSUNBOEwzTjBlV3hsUGdvZ0lDQWdQR3hwYm1WaGNrZHlZV1JwWlc1MElHbGtQU0pzYVc1bFlYSXRaM0poWkdsbGJuUWlJSGt4UFNJekxqUTJOQ0lnZURJOUlqVXpJaUI1TWowaU5Ea3VOVE0ySWlCbmNtRmthV1Z1ZEZWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSStDaUFnSUNBZ0lEeHpkRzl3SUc5bVpuTmxkRDBpTFRBdU1qVWlJSE4wYjNBdFkyOXNiM0k5SWlObU9EQTNOVGtpTHo0S0lDQWdJQ0FnUEhOMGIzQWdiMlptYzJWMFBTSXhMakkxSWlCemRHOXdMV052Ykc5eVBTSWpZbU0wWlRsaklpOCtDaUFnSUNBOEwyeHBibVZoY2tkeVlXUnBaVzUwUGdvZ0lEd3ZaR1ZtY3o0S0lDQThjbVZqZENCamJHRnpjejBpWTJ4ekxURWlJSGRwWkhSb1BTSTFNeUlnYUdWcFoyaDBQU0kxTXlJdlBnbzhMM04yWno0SyIvPjxmZUNvbXBvc2l0ZSByZXN1bHQ9ImNvbXBvc2l0ZS0yIiBvcGVyYXRvcj0iaW4iIGluMj0iU291cmNlR3JhcGhpYyIvPjxmZUJsZW5kIHJlc3VsdD0iYmxlbmQtMiIgaW4yPSJibGVuZCIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9ImIiIHg9IjExIiB5PSIwIiB3aWR0aD0iNzAiIGhlaWdodD0iNzAiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGZlSW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgeD0iMTEiIHdpZHRoPSI3MCIgaGVpZ2h0PSI3MCIgcmVzdWx0PSJpbWFnZSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUIzYVdSMGFEMGlOekFpSUdobGFXZG9kRDBpTnpBaUlIWnBaWGRDYjNnOUlqQWdNQ0EzTUNBM01DSStDaUFnUEdSbFpuTStDaUFnSUNBOGMzUjViR1UrQ2lBZ0lDQWdJQzVqYkhNdE1TQjdDaUFnSUNBZ0lDQWdabWxzYkRvZ2RYSnNLQ05zYVc1bFlYSXRaM0poWkdsbGJuUXBPd29nSUNBZ0lDQjlDaUFnSUNBOEwzTjBlV3hsUGdvZ0lDQWdQR3hwYm1WaGNrZHlZV1JwWlc1MElHbGtQU0pzYVc1bFlYSXRaM0poWkdsbGJuUWlJSGt4UFNJMExqVTNOU0lnZURJOUlqY3dJaUI1TWowaU5qVXVOREkxSWlCbmNtRmthV1Z1ZEZWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSStDaUFnSUNBZ0lEeHpkRzl3SUc5bVpuTmxkRDBpTFRBdU1qVWlJSE4wYjNBdFkyOXNiM0k5SWlObU9EQTNOVGtpTHo0S0lDQWdJQ0FnUEhOMGIzQWdiMlptYzJWMFBTSXhMakkxSWlCemRHOXdMV052Ykc5eVBTSWpZbU0wWlRsaklpOCtDaUFnSUNBOEwyeHBibVZoY2tkeVlXUnBaVzUwUGdvZ0lEd3ZaR1ZtY3o0S0lDQThjbVZqZENCamJHRnpjejBpWTJ4ekxURWlJSGRwWkhSb1BTSTNNQ0lnYUdWcFoyaDBQU0kzTUNJdlBnbzhMM04yWno0SyIvPjxmZUNvbXBvc2l0ZSByZXN1bHQ9ImNvbXBvc2l0ZSIgb3BlcmF0b3I9ImluIiBpbjI9IlNvdXJjZUdyYXBoaWMiLz48ZmVCbGVuZCByZXN1bHQ9ImJsZW5kIiBpbjI9IlNvdXJjZUdyYXBoaWMiLz48L2ZpbHRlcj48L2RlZnM+PHJlY3QgZGF0YS1uYW1lPSJSb3VuZGVkIFJlY3RhbmdsZSA1MjgiIHg9IjIwIiB5PSIxNiIgd2lkdGg9IjUzIiBoZWlnaHQ9IjUzIiByeD0iMjYuNSIgcnk9IjI2LjUiIGZpbHRlcj0idXJsKCNhKSIgZmlsbD0iI2ZmNDM2MSIvPjxyZWN0IGRhdGEtbmFtZT0iUm91bmRlZCBSZWN0YW5nbGUgNTI4IGNvcHkiIHg9IjExIiB3aWR0aD0iNzAiIGhlaWdodD0iNzAiIHJ4PSIzMCIgcnk9IjMwIiBmaWx0ZXI9InVybCgjYikiIGZpbGw9IiNmZjQzNjEiLz48cGF0aCBkPSJNNTQuOTQ5IDMwYS41NTkuNTU5IDAgMDAtLjUwNi0uMzNoLTYuNjIybDYuNTM1LTEwLjc4YS42LjYgMCAwMC4wMTgtLjU5LjU0OS41NDkgMCAwMC0uNDktLjNoLTguOTQxYS41NTEuNTUxIDAgMDAtLjUuMzJsLTguMzgyIDE3LjVhLjYwOS42MDkgMCAwMC4wMjQuNTcuNTUzLjU1MyAwIDAwLjQ3Ni4yN2g1Ljc0NmwtNi4yNjIgMTUuNTNhLjYuNiAwIDAwLjIyNC43Mi41MjQuNTI0IDAgMDAuMjkxLjA5LjUzOS41MzkgMCAwMC40MjgtLjIxTDU0Ljg3IDMwLjYzYS42MTYuNjE2IDAgMDAuMDc5LS42M3oiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=="

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

/***/ "ELyV":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

/***/ "IJYO":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAAAAADCy4aMAAAB8klEQVR42u3Wz0tUYRSH8XOnkQmjX+KgJVMjQWXCJJRF4Goq4toio1qFk4ItpMCYRYIRiRSV1sKkRRAMESFcaIR7mcm6zx/XIrOZe2c3r7T5nvWz+Bw4L7zG/x6TQAIJJJBAAgkkkEACCSSQQAIJJJBAAgkkkEACCSSQQAIJJNhDwaZFAG/P9eQu1wBen9l35G6jc5XMnAimLQJWvcHKvQMHv8GKNzxbtomOVSrrXhA+u+FZBIwc/Q6fMjf5NVBswIx96FSlsu4FG2ZmETS82wClIT7aEyDK3ulQpbPuBXGzOW0RBMVFgIt5nts7gMIY6/YI4pHh7d0qnTm5g1nb3STIXeGVrQD0nYDJ3oCqt5GsWjPHgs3T9p7AmwTWbRC2Dpfrh6ZSztbMqSCu9to8cNWbqy33e0PAoo3mw4SgPXMpqI/bsTcA4SUzuz56FojHbDnhTGQOBVsnvfvNnS0/v6xxvAz8KFilXZDMHAr8zM5l/Vz9CgS2ADzIXev50iZIZu4EYfbW3/fZX4phan8datmHYd943CJIZe4Ea3be933fr8BjuzA3YQsQlwrbLNmLFkEqcyd4an/mFMTzA5niElC1NYhL+eifoFOm/4EEEkgggQQSSCCBBBJIIIEEEkgggQQSSCCBBBJIIIEEEkggwV7Nb796/GVxiDSQAAAAAElFTkSuQmCC"

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

/***/ "J0TH":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAMAAADX9CSSAAAAllBMVEX7Lo/////7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo8jNrCFAAAAMnRSTlMAAAIEBQYKDQ4PEBIXGBogISIjKissNTdASUpLUlVbXF5fZ2hub3FydHV2eHp7fH5/gGx6LbwAAAD0SURBVCjPVdHNQoJQGITh+YhMxaA0/hQMTSXROrz3f3MtkPTM8tnNjCRJSna/7SaSJBsy8MoB9HXse3jmlmb56BmcXpJtD/CVBqMHB8glLSoHcMzCwVPoQknSvLwCnD9MkvZQ6JZJ0QEukbSE62R0WZifoJHUQKm7m03hIsXgZp4n0Eo1VPJ8C2tFPf3C80VPH2kDW3leQW1qIfF85iA2XWDqeQmNmRpo8+e7T66wNFPigK74L1bA3syk1TfATzkfJu8gHfZ8yo4ArnqVlMMhGPcP0j1A//k2PUF2/1F6b8bLzuGjS3HtANzKfJeidXvZJcO/f6XAIuVCvM/gAAAAAElFTkSuQmCC"

/***/ }),

/***/ "JruR":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDYiIGhlaWdodD0iNjA2Ij48Y2lyY2xlIGN4PSIzMDMiIGN5PSIzMDMiIHI9IjMwMyIgZmlsbD0iI2ViZjFmZiIgb3BhY2l0eT0iLjUwMiIvPjwvc3ZnPg=="

/***/ }),

/***/ "Ju3u":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMTkiIGhlaWdodD0iMjkzLjA5NCI+PHBhdGggZD0iTTAgMjkzYy4xNy0uMTMxIDEyOC43NCA3IDIyMy04MCA5OS40OC05MS44MjIgOTYtMjEzIDk2LTIxM3YyOTNIMHoiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=="

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

/***/ "KdHT":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAAbCAAAAADuJcpmAAABXklEQVRYw+3VzyuDcQDH8a8ReVh+1H44KJkk0yKuy2lWK5ZJ5LmQhfxoNdqWgzQUPS4IIWr2UGsztR9a+77/OBc5OTo89P1cP5fX4VMfwZ+NUHRFV3RFV3RF/zk7OrDfa3NEJQV/c0f0uzE8tq5lGRNCCOG1Hv1+w65DriFdvdbOpW/6/cZufFVvrdsfVx2Jkmma5kjSevR4uFeHfIshn+yXD9oHZPMHrjLrPnnkBuYCAAm/JQczpQNJ0SSWSAzOu/v3YDKS6TSp5KDuXQGKrpxl6RntUF7YjU2xkD3WTih09sUBeBwfLgOzOpalr04A4WDMKWEmCPNaFahGujdrQF4rWJe+NgbMhAynhHCITJdvEeqjgRIA0V9c+u8PpiVVOdOMmnu5dN52Vvduv7bfknY8m6ZZhIGUhemc9jf2JOBuyObaZcMr2fLUdCGEEGEK4kW9qaIruqIruqL/Q/onqR8Q/idoRHkAAAAASUVORK5CYII="

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

/***/ "NGog":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/checkmarkCircled");

/***/ }),

/***/ "Nwfa":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/typicons/plus");

/***/ }),

/***/ "Oi65":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "OmJo":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner2-7762ea870219837898824f9e97bbdc86.png";

/***/ }),

/***/ "QHNA":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NyIgaGVpZ2h0PSI0MyI+PGcgZGF0YS1uYW1lPSJWZWN0b3IgU21hcnQgT2JqZWN0Ij48ZyBkYXRhLW5hbWU9Ikdyb3VwIDMiPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCA1MTQxIiBkPSJNMzUuNjU2IDEyLjkwNXYxNy4xM2EzLjk5MyAzLjk5MyAwIDAxLTMuOTkyIDMuOTkybC0xMy44MzYuMDU5TDkuNzI4IDQzdi04LjkxNEgzLjk5M2EzLjk5NCAzLjk5NCAwIDAxLTMuOTkyLTRWMTIuOTY1YTQgNCAwIDAxMy45OTItNGwyNy42NzEtLjA1NWEzLjk5MiAzLjk5MiAwIDAxMy45OTIgMy45OTF6bTAgMCIgZmlsbD0iI2ZmZiIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCA1MTQyIiBkPSJNMTcuODI4IDE3LjgyN0g3LjI5M2EuODExLjgxMSAwIDExMC0xLjYyMmgxMC41MzVhLjgxMS44MTEgMCAwMTAgMS42MjJ6bTAgMCIgZmlsbD0iIzE0MTQxNCIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCA1MTQzIiBkPSJNMjguMzY0IDIyLjY4NEg3LjI5M2EuODA5LjgwOSAwIDExMC0xLjYxN2gyMS4wNzFhLjgwOS44MDkgMCAxMTAgMS42MTd6bTAgMCIgZmlsbD0iIzE0MTQxNCIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCA1MTQ0IiBkPSJNMjguMzY0IDI3LjU0N0g3LjI5M2EuODA5LjgwOSAwIDExMC0xLjYxN2gyMS4wNzFhLjgwOS44MDkgMCAxMTAgMS42MTd6bTAgMCIgZmlsbD0iIzE0MTQxNCIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCA1MTQ1IiBkPSJNNDMuMDA4LjA1NkwxNS4zNDIgMGE0IDQgMCAwMC00IDMuOTkxdjQuOTYybDIwLjMxOS0uMDRhMy45OTIgMy45OTIgMCAwMTMuOTkyIDMuOTkxdjE0Ljk0NGw1LjY3NSA2LjIzOHYtOC45MTNoMS42OEEzLjk5MiAzLjk5MiAwIDAwNDcgMjEuMTgyVjQuMDUxYTMuOTkzIDMuOTkzIDAgMDAtMy45OTItNHptMCAwIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIuNSIvPjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ "Rhn3":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0My4wMDciIGhlaWdodD0iNDMuMDA3Ij48cGF0aCBkYXRhLW5hbWU9IkZvcm1hIDEiIGQ9Ik00MC4xMjMgMTAuOTc5YTIxLjY4MiAyMS42ODIgMCAwMC03LjgyNS04LjAyMiAyMS4xODEgMjEuMTgxIDAgMDAtMjEuNTg3IDAgMjEuNjgxIDIxLjY4MSAwIDAwLTcuODI2IDguMDIyIDIyLjU4NSAyMi41ODUgMCAwMDEuMjE5IDI0LjAyNSAyMS4xIDIxLjEgMCAwMDEwLjYgNy45NjQgMS4yMyAxLjIzIDAgMDAxLjEyLS4yIDEuMTM3IDEuMTM3IDAgMDAuMzY0LS44NjFsLS4wMTQtMS41NXEtLjAxNC0xLjQ2NC0uMDE0LTIuNTU0bC0uNjQ0LjExNWE4LjAxNyA4LjAxNyAwIDAxLTEuNTU0LjEgMTEuNTggMTEuNTggMCAwMS0xLjk0Ni0uMiA0LjMgNC4zIDAgMDEtMS44NzYtLjg2IDMuNjM5IDMuNjM5IDAgMDEtMS4yMzItMS43NjZsLS4yOC0uNjZhNy4xOSA3LjE5IDAgMDAtLjg4Mi0xLjQ2MyAzLjQgMy40IDAgMDAtMS4yMTgtMS4wOTFsLS4yLS4xNDRhMi4wNyAyLjA3IDAgMDEtLjM2NC0uMzQ1IDEuNTg0IDEuNTg0IDAgMDEtLjI1Mi0uNHEtLjA4NC0uMi4xNC0uMzMxYTEuNzc0IDEuNzc0IDAgMDEuODEyLS4xMjlsLjU2LjA4NmE0LjA0NCA0LjA0NCAwIDAxMS4zODYuNjg4IDQuNTg3IDQuNTg3IDAgMDExLjM1OCAxLjQ5MiA1LjAyNCA1LjAyNCAwIDAwMS41NTQgMS43OTQgMy4yNDcgMy4yNDcgMCAwMDEuODM0LjYxNiA3LjczOCA3LjczOCAwIDAwMS42LS4xNDMgNS40ODcgNS40ODcgMCAwMDEuMjYtLjQzIDQuNyA0LjcgMCAwMTEuMzcyLTIuOTU3IDE4LjgyNyAxOC44MjcgMCAwMS0yLjg3LS41MTcgMTEuMjQ1IDExLjI0NSAwIDAxLTIuNjMyLTEuMTIxIDcuNTgyIDcuNTgyIDAgMDEtMi4yNTQtMS45MjIgOS4zMzEgOS4zMzEgMCAwMS0xLjQ3LTMuMDE0IDE0LjY2MiAxNC42NjIgMCAwMS0uNTc0LTQuMzA1QTguNDkgOC40OSAwIDAxMTAgMTQuOTgzYTcuODkzIDcuODkzIDAgMDEuMi01Ljg1NCAzLjg0MyAzLjg0MyAwIDAxMi40MDguMzg4IDE2LjU3MyAxNi41NzMgMCAwMTIuMzM4IDEuMTA1cS43NDIuNDU4IDEuMTkuNzc0YTE5Ljc0MyAxOS43NDMgMCAwMTEwLjc1MiAwbDEuMDY0LS42ODlhMTQuOTQ3IDE0Ljk0NyAwIDAxMi41NzUtMS4yNjMgMy41ODkgMy41ODkgMCAwMTIuMjY4LS4zMTYgNy44MTkgNy44MTkgMCAwMS4yMjQgNS44NTUgOC40OTIgOC40OTIgMCAwMTIuMjEyIDUuOTEzIDE0LjgyMiAxNC44MjIgMCAwMS0uNTc0IDQuMzE5IDguOTcgOC45NyAwIDAxLTEuNDg0IDMuMDE0IDcuODcyIDcuODcyIDAgMDEtMi4yNjggMS45MDkgMTEuMjgyIDExLjI4MiAwIDAxLTIuNjMyIDEuMTIgMTguNyAxOC43IDAgMDEtMi44Ny41MTcgNS4xODQgNS4xODQgMCAwMTEuNDU2IDQuMDc2djYuMDU2YTEuMTU2IDEuMTU2IDAgMDAuMzUuODYgMS4xOTEgMS4xOTEgMCAwMDEuMTA2LjIgMjEuMSAyMS4xIDAgMDAxMC42LTcuOTY1IDIyLjU4IDIyLjU4IDAgMDAxLjIxNy0yNC4wMjF6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"

/***/ }),

/***/ "SNFX":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-bfece249803f3d440ef27a70c60f54f1.png";

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

/***/ "U6Lx":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/page1-134f5a5d350730ca1684cc387efae8d6.png";

/***/ }),

/***/ "U9T1":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/playCircle");

/***/ }),

/***/ "UbIB":
/***/ (function(module, exports) {

module.exports = require("@glidejs/glide");

/***/ }),

/***/ "VKZn":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACVCAAAAACbC4ytAAACXElEQVR42u3W3UtTcRzH8e9pU4ZiOkOSpfRgqUVIiV2URGKm1IVWJGWSDA0xiCTDBMERzUAchSDYk5gnFlQXbYXOzb3/uC7mw40Hu9iRLj6/q3Pxhs+Lw++MGf/hMaGEEkoooYQSSiihhBJKKKGEEkoooYQSSiihhBJKKKGEEkoooYQSSiihhBJKKKGEKhLqSt/OY/5yBICVqxWBkxP5fyiX28uCza+LjnKDu1MzFgFYLSu7N9Jsj/Yv34cqHkQjNl1UVC4+WGU7U6lwYarbFiHXGEzvWzaFXPhdV5UpJiptZrtTNytqIgANYYAhW9yvTNotgBc2W0xUPpNJ7ky9tcmGCMDFYBrotq98Dl4HEja4dzlvTwCWbKjId+rn9lTm2IV8AZUItC4lx5wOYNjirNWezu5dLhTu3XzhhfmBeljiUkDxzMysaQPINVWn7pYse5R/Sk9tAjesyyfUp8AwW6jpwNnJV3cOXcoCKyUtzphned86lj7edqzHH9Rm84ns1lQ6dCYLjNtTgFE7l/cqyfU6ZpXj1u8P6qVNua5bX+N+Y95GAdasHaDXwimvEvjxJrG+YM/9QT22rVPPO4sCpOwaMGd9wS6vksSHwo+H6w/qSywWi8WOhmNzrJXXpoABm4DUkfP5IYt7lDQe/gXfK9vw6+uD7ZsyZTUDI23WkoXO0lU2jlenPMpZJxIdqK50DwBFojXk1EXXYcZGgUWnx6uMNwbLO5P6PyWUUEIJJZRQQgkllFBCCSWUUEIJJZRQQgkllFBCCSWUUEIJJZRQQgkllFBCCSWUUAd7/gIE+GoYRZDAWQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "VQfi":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACCCAAAAAAItfnaAAADwElEQVR42u3Y+UsUUQAH8O/U1uaaGwXafZiQ1Za2UnRoB1IR0VZ0EQqdlgmWoEVh13bYndGBYElq4FqSbAnGru/9cc3xXKt5s23BjhHf+WXed+A77Id582Z2IP/jDcQRRxxxxBFHHHHEEUccccQRRxxxxBFHHHHEEUccccQRRxxxxBFHHHHEEUccccQRRxxxxBFHHHHE/fu4F7UlUwIL9vV55cSBeUZhVVx4nuDb+mOZcaqlotAIRZpGc27nEycOwdkCV7VZPg45edeY1yniiI4PkytVe3Ei13Y+ceeB+W09XadDMJ7q8kABwhe7OqLAaY8zpFZM4LYBNQ97n+0EVonc2vnEjRRg2Rdr8D6EUuHOcjcC3eYuHUVwWHuCjggyuF7gkI06DDyXObTzi7sNdDijk0CvO3+dhpgd3wJN7vpgsT3pxnGNmJK0B0PACfnbdr5xJ2Coe78TuOvOd4BOJy9FlXmd5mKdfWlSpVht3kYfZpibkcHtwUI1CmG/dLX9xh0PL1ajJ8ADd67LYPeiyGQ9BVqd6xrsHz9HNINrPXBe3YdTUSfd7Ul7zh0EPrnzdpSo3ABYUy6G0EcpewJolm5cZrsKPJOa9iThnk/FRk2uRLk6cMW+B62JuVmMrUJUeOGSg6/rA9gmdO1JwYnWIAr7NbkclerQTaDL2psT83oTQgPSC1dmrjBGfUpq25OAe1kOFL3S5YlnWBx4bQ9iCAdxWWbFYV7co+03bqjW/DUbEtocwRp1tB3odp5sc4FNwhsnRfL+CqBd3/YZ126+IZU9Evq8EaXqcAugpuJxtWJmWVBGF6FE6Nu+vlvWAXOuCa8cQ5Ea1cNIOa8h04Hw5+w4a3VMaNu+4pqBLUnvfCnzgKjGEnufXonobGzX4b5GInfVsWvAO13bV9xQEFvHsuQewPl3kA6rN6kzKEjcAuIanCjA0YkrN6Rr+4prQGA4WxZLEbHn6A31JtUdwCUptmB2UjMt16P4m4NZjgVC0/YXtw7FzZlt2J2t+XXO/H39c5yfmVqOteZ+MITdGpy54Fdb6KS53jZLd9tn3Cz8sHW7sxTVQORIbRAze52FYVqfuhcfuHFiBzC9oqbCXHJq7Mn9S9tfXBo/Y37N1keEmGGNS99Z4Y2BBocRQfGIe7VM1Qft5syzafUJ4sf2v/iBKNF26kJnrrNq5F7jyaZHo3/Z5tcv4ogjjjjiiCOOOOKII4444ogjjjjiiCOOOOKII4444ogjjjjiiCOOOOKII4444ogjjjjiiCOOOOKI+/PtO7WtFyYpM6jRAAAAAElFTkSuQmCC"

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

/***/ "YN2c":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NyIgaGVpZ2h0PSI0MSI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSguODI5IDMuODY4KSIgZmlsbD0ibm9uZSIgZD0iTTAgMGg0N3Y0MUgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjxnIGRhdGEtbmFtZT0iVmVjdG9yIFNtYXJ0IE9iamVjdCI+PGcgZGF0YS1uYW1lPSJHcm91cCA2Ij48ZyBkYXRhLW5hbWU9Ikdyb3VwIDUiPjxnIGRhdGEtbmFtZT0iR3JvdXAgNCIgY2xpcC1wYXRoPSJ1cmwoI2EpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtLjgyOSAtMy44NjgpIj48cGF0aCBkYXRhLW5hbWU9IlBhdGggNTE0NiIgZD0iTTE5LjI3MyAzLjg3OFM2LjkgMy4wNTkgNi45IDE2LjE1N0M2LjkgMjQuODc5IDQuNjMzIDI3LjkzIDMuMTE5IDI5YS45MzYuOTM2IDAgMDAuMSAxLjU2NSAxMy4zIDEzLjMgMCAwMDguNCAxLjg0NS4yMjUuMjI1IDAgMDEuMTU1LjQxMkwzLjEyNSAzNy43N2E0LjU0MyA0LjU0MyAwIDAwLTIuMyAzLjk0djEuMDI3QTIuMDY3IDIuMDY3IDAgMDAyLjkwNyA0NC44aDEyLjMxbDEzLjE2NC01LjYxNy0zLjEyLTM0LjE1OWExNC4yNDQgMTQuMjQ0IDAgMDAtNS45ODgtMS4xNDZ6bTAgMCIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjUiLz48L2c+PC9nPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCA1MTQ3IiBkPSJNNDMuNzI2IDEzLjI4NWExLjYgMS42IDAgMDEtLjY4MS0xLjI1NUM0My4wMiA5LjE3NSA0Mi4wODUuMDA5IDMxLjEyNi4wMDljLS4xNDggMC0uMjg4LjAwOC0uNDMzLjAxMXMtLjI4NC0uMDExLS40MzItLjAxMWMtMTAuOTUzIDAtMTEuODkzIDkuMTU3LTExLjkxOSAxMi4wMTZhMS41NTYgMS41NTYgMCAwMS0uNjU3IDEuMjQxIDMuMDgxIDMuMDgxIDAgMDAtMS4yMTQgMy42MjcgMTMuNyAxMy43IDAgMDAzLjM0NCA0LjQ2NCAxLjU0MiAxLjU0MiAwIDAxLjQ4OSAxLjA5MmMuMTczIDQuNjI2IDIuMTA3IDYuMjkzIDMuMzI5IDYuOWEyLjAyNiAyLjAyNiAwIDAxMS4yMTggMS43NzdjMCAuOTUzLTEuMDI0IDEuNjc3LTEuODMyIDIuMTkybC01LjAzMiAxLjExYTQuNTY3IDQuNTY3IDAgMDAtMy42IDQuNDQ4djIuMDU2aDIzLjdsMi44ODQtMTcuMTc3Yy4wNTEtLjQwOS4wOTEtLjgzOC4xMDctMS4zMDVhMS41NDEgMS41NDEgMCAwMS40ODktMS4wOTIgMTMuNjQ0IDEzLjY0NCAwIDAwMy4zNi00LjUgMy4wNTMgMy4wNTMgMCAwMC0xLjIwNi0zLjU3MXptMCAwIiBmaWxsPSIjZmZmIi8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDUxNDgiIGQ9Ik00NyAzMi4xYTguOTE0IDguOTE0IDAgMTEtOC45MTMtOC44MjhBOC44NzEgOC44NzEgMCAwMTQ3IDMyLjF6bTAgMCIgZmlsbD0iIzA5MTQyZSIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCA1MTQ5IiBkPSJNMzguMDg3IDM3LjcxOGEuODA2LjgwNiAwIDAxLS44MTEtLjh2LTkuNjNhLjgxLjgxIDAgMDExLjYyMSAwdjkuNjNhLjgwNy44MDcgMCAwMS0uODEuOHptMCAwIiBmaWxsPSIjZmZmIi8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDUxNTAiIGQ9Ik00Mi45NDkgMzIuOTAyaC05LjcyNWEuOC44IDAgMTEwLTEuNmg5LjcyNWEuOC44IDAgMTEwIDEuNnptMCAwIiBmaWxsPSIjZmZmIi8+PC9nPjwvZz48L3N2Zz4="

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aeT3":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAAAAADCLb1kAAABm0lEQVR42u3WsUsCYRjH8UfStiANKS6koKCIiNYaK4iWhMaEBgnpH6gmb3ERoqmtojqopeUawrR7/riGTn0vX3W4O2n4vtNv+PK+n+EERf/ZEUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEad3bL3RXsOJZpCceVsUBetvdOXRzLtIRjyhigTqMyK913/HzvbmNawpFlPNCHiPTeOZopOoPTEo4s44GCVuu1+86tXK440fmQ3VfVG6lEQluZ4Df0Hr7TWtwOwrv7syoN/VxYbZuhvUwedJrzNLy7PztrBf8k9xgJ7WXioPupqoZ3G1OfcluZi6h8SJkw6Ht9uR3ebUxVrclGEAENLZMFXcm153mlovdmTlU9lrwfAdnKFEDnEp6SOVWbUs4eREC2MgXQs+u6rjufd5vmVH9uMziThgmylan8ylQjn8Pv3Jt+0a+lgv83HCwnA6pLTVXvMoeTBPF/CBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKmfH+zos704GVCtAAAAAElFTkSuQmCC"

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

/***/ "bgpB":
/***/ (function(module, exports) {



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

/***/ "cQSb":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAAAAADji6uXAAABHklEQVRo3u3UsUtCURSA8VO+kDfoFBFYS0OLiFNTQ9BYW7pFBhVOQRDiICQRSeAgJNEURBEJDyEw1PKdPy615TlceerFGr6zHC7f8ONy4YrOeQQQEBAQEBAQEBAQEBAQEBAQEBAQEPB/gu1ocHs77tLWW/g8OdjJSGD7yY1aPbX2FTZPDuYdkcB+kcf+NaQaMk8Bek+XEtgPm9+qPeeq4ja0tXxhyjO9YVVGt2ph4V13t/Ug7RuzTbCTWzxWbcaO3FdztgjeJ+LFwc2Kkh+XrYE3kf2P4fFU9sZlW2ArdvZ7eo6WnJo5WwPLkevb/jT9ZFYP17umbA88keHcna98ans1Z8p83oCAgICAgICAgICAgICAgICAgICAgH8B/gCoGpDICC+VfgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "d2eo":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bottom-883fe3967f6c66e99e8ee1aa11e0e5f4.png";

/***/ }),

/***/ "dH4A":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/screen-5849b2af715ae5ea1629f113b785d239.png";

/***/ }),

/***/ "dzJf":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "eSFL":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-white-512a641e90600644922a2327e20c5067.png";

/***/ }),

/***/ "etRp":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

/***/ "gKap":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAAAbCAAAAAAy8HwUAAABQ0lEQVRIx2PYQyvAMGryqMkjxeRaeSbBsJ17ahWYJMrgghPUmHmDdxQxgIAgmSavZqrdMV+4ZApb045JQpOhghu4U7bOlorbtAQI7OPINHktR8vuJWK1SYZAdrBfk/CGPeWyW9v4d+/Zk64Lku/Q2kVuaNQwsDC472nknrNnmazRHlePVQLT9mxZsWfPbjsvoOwWqTnkhvNCrspds8VKdkdz8Erb6e7ZIKqUCBZfbCO3CkjFeZEdg8kgP6fp7NmzY+3uAKs9exKY1wIFtkfwJ24F0hu5F5Jtcro2kEg1WOC5e89uhcQ9ywSN3YEhYWKzDiyba0B+qlvMXrRlsnDRVv7MzSlcq3YbpqwTbN3TKrAQmCpW79mjk0NBeu5RZRZN271ngiyT2qQ9mao799SJbIgDJ2STPRsZZ46WG6Mmj5pMOQAA3tSU2DUtq40AAAAASUVORK5CYII="

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

/***/ "hNaq":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABlCAAAAABxF3ITAAAA/ElEQVRo3u3UPWvCUACFYXFwqEpoJz+Q0kWKgS5O0rp1d1UEaWnQRRAdOhQK/gLF0RYUOjpHiN7z47pEB0lo7RWXvnc7vHCfkEASOsdJoKCgoKCgoKCgoKCgoKCgoKD8H6XrSZrfJm9m+/WLdJwy7154UpDrrPuOH66f07HKsJH3pEkmkMmPw/VeWKtdM1Hpz2+s7kkDV9L9c7jMQ/PzchWZrJReVdJja3fVyim9xSQbZXjwwA0niEsWyjS7kSmOd1ctr9ynmGSjbAo98+r44dpWRl/pRWSyUvRRTl3P9p/izujFNVGJPwwKCgoKCgoKCgoKCgoKCgoKyunON0oJ83OfVDBVAAAAAElFTkSuQmCC"

/***/ }),

/***/ "hxt5":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAACvCAAAAACu+dGpAAACM0lEQVR42u3Xy2sTURiG8ReTammIYEygpRaEgiJZaEBw0yLUC0k34kYKgoIN3aQUhXgBiXghUqEbQSKCUioRdCEJAcM08/5xLiaBZjfSdER8vtWZM8/ix3AYZuR/a4QXL168ePHixYsXL168ePHixYsXL168ePHixYsXL168ePHixYsXL168ePHixYsXL168ePHixYsXL168eBPzLt60bR/TaDbtleFy49D5xL0tRYBsJpq06vZ5RRebh80n7e0354aA4XRPnwvsbGEi+cS9V1PSOKCc/mJ3dXES+eS91UqlNAbY0T3bLa2ONtonsj9t7x3Pd+PkR39+Xx0EBAuzfdsN3d9aunzrvW3XdM0OS3obL0/WW9Nz217XlCTpdmgPitr2Y5Vj5ol6eyfPhrZdVqH5q/NoWlu2d6dm29l8N26epLeqZ7bt+tqebTeUD22vK6tm/Dw5b5A7FRy8Fea0aztY1Mof5Ml5G7ozfq+kHdudnBb68fPkvFf0MXpQ+4No45I+2L6uou7GzxPzdlOF6Py1NRfadpBN9ew3Wu4VUp/j5sl5G6OXVnhGT217Q8t2Jzfzw691YRAvT9BbUX24eqn02rvmqjJf7Rt6aHtJtXh5gt55fRptPslI0nzLbqoY2v4+M/0tTv63vtd7Lx5Ut/ePKud/CC9evHjx4sWLFy9evHjx4sWLFy9evHjx4sWLFy9evHjx4sWLFy9evHjx4sWLFy9evHjx4sWLFy9evHj/M+9v4a3au1Vz/D8AAAAASUVORK5CYII="

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

/***/ "olJT":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/typicons/mediaRecordOutline");

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

/***/ "osbr":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iOTQiIGhlaWdodD0iMTAzIj48ZGVmcz48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSI5IiB3aWR0aD0iOTQiIGhlaWdodD0iOTQiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGZlT2Zmc2V0IHJlc3VsdD0ib2Zmc2V0IiBkeT0iMTMiIGluPSJTb3VyY2VBbHBoYSIvPjxmZUdhdXNzaWFuQmx1ciByZXN1bHQ9ImJsdXIiIHN0ZERldmlhdGlvbj0iNC41ODMiLz48ZmVGbG9vZCByZXN1bHQ9ImZsb29kIiBmbG9vZC1jb2xvcj0iI2YyODA0NiIgZmxvb2Qtb3BhY2l0eT0iLjMiLz48ZmVDb21wb3NpdGUgcmVzdWx0PSJjb21wb3NpdGUiIG9wZXJhdG9yPSJpbiIgaW4yPSJibHVyIi8+PGZlQmxlbmQgcmVzdWx0PSJibGVuZCIgaW49IlNvdXJjZUdyYXBoaWMiLz48ZmVJbWFnZSBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4PSIyMCIgeT0iMTYiIHdpZHRoPSI1MyIgaGVpZ2h0PSI1MyIgcmVzdWx0PSJpbWFnZSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUIzYVdSMGFEMGlOVE1pSUdobGFXZG9kRDBpTlRNaUlIWnBaWGRDYjNnOUlqQWdNQ0ExTXlBMU15SStDaUFnUEdSbFpuTStDaUFnSUNBOGMzUjViR1UrQ2lBZ0lDQWdJQzVqYkhNdE1TQjdDaUFnSUNBZ0lDQWdabWxzYkRvZ2RYSnNLQ05zYVc1bFlYSXRaM0poWkdsbGJuUXBPd29nSUNBZ0lDQjlDaUFnSUNBOEwzTjBlV3hsUGdvZ0lDQWdQR3hwYm1WaGNrZHlZV1JwWlc1MElHbGtQU0pzYVc1bFlYSXRaM0poWkdsbGJuUWlJSGt4UFNJekxqUTJOQ0lnZURJOUlqVXpJaUI1TWowaU5Ea3VOVE0ySWlCbmNtRmthV1Z1ZEZWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSStDaUFnSUNBZ0lEeHpkRzl3SUc5bVpuTmxkRDBpTFRBdU1qVWlJSE4wYjNBdFkyOXNiM0k5SWlObU9EQTNOVGtpTHo0S0lDQWdJQ0FnUEhOMGIzQWdiMlptYzJWMFBTSXhMakkxSWlCemRHOXdMV052Ykc5eVBTSWpZbU0wWlRsaklpOCtDaUFnSUNBOEwyeHBibVZoY2tkeVlXUnBaVzUwUGdvZ0lEd3ZaR1ZtY3o0S0lDQThjbVZqZENCamJHRnpjejBpWTJ4ekxURWlJSGRwWkhSb1BTSTFNeUlnYUdWcFoyaDBQU0kxTXlJdlBnbzhMM04yWno0SyIvPjxmZUNvbXBvc2l0ZSByZXN1bHQ9ImNvbXBvc2l0ZS0yIiBvcGVyYXRvcj0iaW4iIGluMj0iU291cmNlR3JhcGhpYyIvPjxmZUJsZW5kIHJlc3VsdD0iYmxlbmQtMiIgaW4yPSJibGVuZCIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9ImIiIHg9IjExIiB5PSIwIiB3aWR0aD0iNzAiIGhlaWdodD0iNzAiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGZlSW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgeD0iMTEiIHdpZHRoPSI3MCIgaGVpZ2h0PSI3MCIgcmVzdWx0PSJpbWFnZSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUIzYVdSMGFEMGlOekFpSUdobGFXZG9kRDBpTnpBaUlIWnBaWGRDYjNnOUlqQWdNQ0EzTUNBM01DSStDaUFnUEdSbFpuTStDaUFnSUNBOGMzUjViR1UrQ2lBZ0lDQWdJQzVqYkhNdE1TQjdDaUFnSUNBZ0lDQWdabWxzYkRvZ2RYSnNLQ05zYVc1bFlYSXRaM0poWkdsbGJuUXBPd29nSUNBZ0lDQjlDaUFnSUNBOEwzTjBlV3hsUGdvZ0lDQWdQR3hwYm1WaGNrZHlZV1JwWlc1MElHbGtQU0pzYVc1bFlYSXRaM0poWkdsbGJuUWlJSGt4UFNJMExqVTNOU0lnZURJOUlqY3dJaUI1TWowaU5qVXVOREkxSWlCbmNtRmthV1Z1ZEZWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSStDaUFnSUNBZ0lEeHpkRzl3SUc5bVpuTmxkRDBpTFRBdU1qVWlJSE4wYjNBdFkyOXNiM0k5SWlObU5EWmlORFVpTHo0S0lDQWdJQ0FnUEhOMGIzQWdiMlptYzJWMFBTSXhMakkxSWlCemRHOXdMV052Ykc5eVBTSWpaV1ZoT0RRNUlpOCtDaUFnSUNBOEwyeHBibVZoY2tkeVlXUnBaVzUwUGdvZ0lEd3ZaR1ZtY3o0S0lDQThjbVZqZENCamJHRnpjejBpWTJ4ekxURWlJSGRwWkhSb1BTSTNNQ0lnYUdWcFoyaDBQU0kzTUNJdlBnbzhMM04yWno0SyIvPjxmZUNvbXBvc2l0ZSByZXN1bHQ9ImNvbXBvc2l0ZSIgb3BlcmF0b3I9ImluIiBpbjI9IlNvdXJjZUdyYXBoaWMiLz48ZmVCbGVuZCByZXN1bHQ9ImJsZW5kIiBpbjI9IlNvdXJjZUdyYXBoaWMiLz48L2ZpbHRlcj48L2RlZnM+PHJlY3QgZGF0YS1uYW1lPSJSb3VuZGVkIFJlY3RhbmdsZSA1MjgiIHg9IjIwIiB5PSIxNiIgd2lkdGg9IjUzIiBoZWlnaHQ9IjUzIiByeD0iMjYuNSIgcnk9IjI2LjUiIGZpbHRlcj0idXJsKCNhKSIgZmlsbD0iI2ZmNDM2MSIvPjxyZWN0IGRhdGEtbmFtZT0iUm91bmRlZCBSZWN0YW5nbGUgNTI4IGNvcHkiIHg9IjExIiB3aWR0aD0iNzAiIGhlaWdodD0iNzAiIHJ4PSIzMCIgcnk9IjMwIiBmaWx0ZXI9InVybCgjYikiIGZpbGw9IiNmZjQzNjEiLz48cGF0aCBkYXRhLW5hbWU9IkZvcm1hIDEiIGQ9Ik01OS4xIDIySDM1LjlhMi45IDIuOSAwIDAwLTIuOSAyLjlWNTFsNS44LTUuOGgyMC4zYTIuOTE1IDIuOTE1IDAgMDAyLjktMi45VjI0LjlhMi45MDkgMi45MDkgMCAwMC0yLjktMi45eiIgZmlsbD0iI2ZlZmFmYyIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"

/***/ }),

/***/ "q6ez":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAeFBMVEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEUjQUZpAAAAJ3RSTlMAAQ8RKCk/QkNERkddiYqNjpmaoq+xs7/H19jb3N3w8vP09vn6/f6Z4ZSSAAAAlUlEQVQY022Q2xLBQABDz9Yqil6pojetyv//oQeWquYxMzmTBABWybXvr8kaJ3vSWyf7cvxGag9xfGilxgewtYbQA/DCQbUFU+ixc4jdQ4VhI0UfKqG0IVW3+Fpep5RSOSPlKunHOYjU0/xbl9/gURXZFJ+xnZYI5qpiaw3716D9oHo5Pxts4c4prEOYIK3ut3MaGIAnH5MQr/fEE/gAAAAASUVORK5CYII="

/***/ }),

/***/ "qbum":
/***/ (function(module, exports) {

module.exports = require("@redq/reuse-modal");

/***/ }),

/***/ "s5S1":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "sOxF":
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

// CONCATENATED MODULE: ./containers/AppModern/Navbar/navbar.style.js



const NavbarWrapper = external_styled_components_default.a.nav.withConfig({
  displayName: "navbarstyle__NavbarWrapper",
  componentId: "sc-18mumv3-0"
})(["width:100%;padding:25px 0 26px;border-bottom:1px solid rgba(255,255,255,0.102);position:fixed;z-index:9999;transition:all 0.3s ease;@media only screen and (max-width:1366px){padding:20px 0 21px;}> div.container{width:100%;display:flex;align-items:center;justify-content:space-between;.main-logo{img{width:128px;height:auto;}}.logo-alt{width:128px;height:auto;display:none;}}ul{li{a{color:", ";font-size:16px;font-weight:400;transition:all 0.3s ease;&:hover{font-weight:700;}}&.is-current{a{font-weight:700;}}}}"], Object(external_styled_system_["themeGet"])('colors.menu', '#fff'));
const MenuArea = external_styled_components_default.a.div.withConfig({
  displayName: "navbarstyle__MenuArea",
  componentId: "sc-18mumv3-1"
})(["display:flex;align-items:center;.menu{display:flex;align-items:center;margin-right:11px;opacity:1;visibility:visible;transition:all 0.3s ease;@media only screen and (max-width:1366px){margin-right:13px;}@media only screen and (max-width:991px){display:none;}li{margin:0 19px;@media only screen and (max-width:1366px){margin:0 17px;}&:first-child{margin-left:0;}&:last-child{margin-right:0;}}}&.active{.menu{opacity:0;visibility:hidden;}.search{form{opacity:1;visibility:visible;}input{width:320px;@media only screen and (min-width:1367px){width:350px;}@media only screen and (max-width:480px){width:calc(100vw - 122px);}}}}.reusecore__button{border-radius:5px;font-weight:500;text-transform:inherit;padding-left:13px;padding-right:13px;min-height:42px;&.text{padding:0;margin-right:28px;cursor:pointer;.btn-icon{svg{width:22px;height:auto;stroke:", ";@media only screen and (max-width:991px){width:24px;}}}@media only screen and (max-width:1366px){margin-right:20px;}@media only screen and (max-width:991px){margin-right:0;}}&.trail{&:hover{box-shadow:#d1397c 0px 12px 24px -10px;}@media only screen and (max-width:991px){display:none;}}&.menubar{display:none;@media only screen and (max-width:991px){display:inline-flex;padding:0;justify-content:flex-end;min-width:35px;color:#fff;svg{width:27px;height:auto;}}}}"], Object(external_styled_system_["themeGet"])('colors.menu', '0D233E'));
const Search = external_styled_components_default.a.div.withConfig({
  displayName: "navbarstyle__Search",
  componentId: "sc-18mumv3-2"
})(["position:relative;display:flex;align-items:center;form{opacity:0;visibility:hidden;position:absolute;right:100%;}input{width:0px;height:46px;padding:0 15px;border-radius:5px;border:1px solid rgba(0,0,0,0.05);font-size:15px;color:", ";background-color:", ";background-image:url(", ");background-repeat:no-repeat;background-position:calc(100% - 15px) center;background-size:16px;z-index:1;transition:all 0.3s ease 0.1s;&::placeholder{color:", ";}&:focus{border-color:", ";}}"], Object(external_styled_system_["themeGet"])('colors.menu', '0D233E'), Object(external_styled_system_["themeGet"])('colors.light', '#FAFBFF'), appClassic_search_default.a, Object(external_styled_system_["themeGet"])('colors.textColor', 'rgba(52, 61, 72, 0.8)'), Object(external_styled_system_["themeGet"])('colors.primary', '#2563FF'));
const MobileMenu = external_styled_components_default.a.div.withConfig({
  displayName: "navbarstyle__MobileMenu",
  componentId: "sc-18mumv3-3"
})(["display:none;@media only screen and (max-width:991px){display:flex;width:100%;height:calc(100vh - 70px);padding:27px 0 40px;opacity:0;visibility:hidden;position:absolute;top:82px;flex-direction:column;background-color:", ";transition:all 0.3s ease;color:", ";&.active{opacity:1;visibility:visible;box-shadow:0 3px 12px ", ";}.container{width:100%;height:100%;display:flex;flex-direction:column;justify-content:space-between;}ul{padding-bottom:20px;li{a{display:block;padding:13px 0;border-radius:5px;transition:all 0.3s ease;color:", ";}&:hover{a{padding:13px 15px;color:", ";}}}}.reusecore__button{width:100%;border-radius:5px;@media only screen and (max-width:480px){margin-top:20px;}}}"], Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'), Object(external_styled_system_["themeGet"])('colors.secondary', '#000'), Object(external_styled_system_["themeGet"])('colors.shadow', 'rgba(38, 78, 118, 0.1)'), Object(external_styled_system_["themeGet"])('colors.secondary', '#000'), Object(external_styled_system_["themeGet"])('colors.primary'));
/* harmony default export */ var navbar_style = (NavbarWrapper);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/logo-white.png
var logo_white = __webpack_require__("eSFL");
var logo_white_default = /*#__PURE__*/__webpack_require__.n(logo_white);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/logo.png
var appModern_logo = __webpack_require__("SNFX");
var logo_default = /*#__PURE__*/__webpack_require__.n(appModern_logo);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/company1.png
var company1 = __webpack_require__("KdHT");
var company1_default = /*#__PURE__*/__webpack_require__.n(company1);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/company2.png
var company2 = __webpack_require__("gKap");
var company2_default = /*#__PURE__*/__webpack_require__.n(company2);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/company3.png
var company3 = __webpack_require__("3W7+");
var company3_default = /*#__PURE__*/__webpack_require__.n(company3);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/company4.png
var company4 = __webpack_require__("9BRq");
var company4_default = /*#__PURE__*/__webpack_require__.n(company4);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/icon1.svg
var icon1 = __webpack_require__("DvHE");
var icon1_default = /*#__PURE__*/__webpack_require__.n(icon1);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/icon2.svg
var icon2 = __webpack_require__("+tI/");
var icon2_default = /*#__PURE__*/__webpack_require__.n(icon2);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/icon3.svg
var icon3 = __webpack_require__("0FjH");
var icon3_default = /*#__PURE__*/__webpack_require__.n(icon3);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/icon4.svg
var icon4 = __webpack_require__("osbr");
var icon4_default = /*#__PURE__*/__webpack_require__.n(icon4);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/appSlider1.png
var appSlider1 = __webpack_require__("etRp");
var appSlider1_default = /*#__PURE__*/__webpack_require__.n(appSlider1);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/appSlider2.png
var appSlider2 = __webpack_require__("uWPk");
var appSlider2_default = /*#__PURE__*/__webpack_require__.n(appSlider2);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/appSlider3.png
var appSlider3 = __webpack_require__("5uKz");
var appSlider3_default = /*#__PURE__*/__webpack_require__.n(appSlider3);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/code.png
var code = __webpack_require__("dzJf");
var code_default = /*#__PURE__*/__webpack_require__.n(code);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/page1.png
var page1 = __webpack_require__("U6Lx");
var page1_default = /*#__PURE__*/__webpack_require__.n(page1);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/page2.png
var page2 = __webpack_require__("s5S1");
var page2_default = /*#__PURE__*/__webpack_require__.n(page2);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/page3.png
var page3 = __webpack_require__("ELyV");
var page3_default = /*#__PURE__*/__webpack_require__.n(page3);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/1.png
var _1 = __webpack_require__("hxt5");
var _1_default = /*#__PURE__*/__webpack_require__.n(_1);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/2.png
var _2 = __webpack_require__("IJYO");
var _2_default = /*#__PURE__*/__webpack_require__.n(_2);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/3.png
var _3 = __webpack_require__("cQSb");
var _3_default = /*#__PURE__*/__webpack_require__.n(_3);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/4.png
var _4 = __webpack_require__("VKZn");
var _4_default = /*#__PURE__*/__webpack_require__.n(_4);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/5.png
var _5 = __webpack_require__("hNaq");
var _5_default = /*#__PURE__*/__webpack_require__.n(_5);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/6.png
var _6 = __webpack_require__("5UcI");
var _6_default = /*#__PURE__*/__webpack_require__.n(_6);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/7.png
var _7 = __webpack_require__("aeT3");
var _7_default = /*#__PURE__*/__webpack_require__.n(_7);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/chat.svg
var chat = __webpack_require__("QHNA");
var chat_default = /*#__PURE__*/__webpack_require__.n(chat);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/group.svg
var group = __webpack_require__("YN2c");
var group_default = /*#__PURE__*/__webpack_require__.n(group);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/github.svg
var github = __webpack_require__("Rhn3");
var github_default = /*#__PURE__*/__webpack_require__.n(github);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/logoWhite.png
var logoWhite = __webpack_require__("5NCh");
var logoWhite_default = /*#__PURE__*/__webpack_require__.n(logoWhite);

// CONCATENATED MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/data/AppModern/index.js
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
    path: '#features',
    offset: '81'
  }, {
    id: 3,
    label: 'Testimonial',
    path: '#testimonial',
    offset: '81'
  }, {
    id: 4,
    label: 'Pricing',
    path: '#pricing',
    offset: '81'
  }, {
    id: 5,
    label: 'Team Members',
    path: '#team',
    offset: '81'
  }]
};
/* ------------------------------------ */
// client data section

/* ------------------------------------ */





const client = [{
  id: 1,
  image: company1_default.a,
  title: 'The new york times'
}, {
  id: 2,
  image: company2_default.a,
  title: 'amazon'
}, {
  id: 3,
  image: company3_default.a,
  title: 'evernote'
}, {
  id: 4,
  image: company4_default.a,
  title: 'the verge'
}];
/* ------------------------------------ */
// Features data section

/* ------------------------------------ */





const AppModern_features = {
  slogan: 'KEY FEATURES',
  title: 'Why you choose our app',
  items: [{
    id: 1,
    color: '#F55767',
    icon: icon1_default.a,
    title: 'App Development',
    description: 'We are specialized at custom Saas Application Development and special features.'
  }, {
    id: 2,
    color: '#ff4742',
    icon: icon2_default.a,
    title: '10 Times Award',
    description: 'We are globally recognised for our services and won a lot of prices around the world .'
  }, {
    id: 3,
    color: '#fb5781',
    icon: icon3_default.a,
    title: 'Cloud Storage',
    description: 'LiteSpeed Web Server known for its high performance and low resource consumption.'
  }, {
    id: 4,
    color: '#f18e47',
    icon: icon4_default.a,
    title: 'Customization',
    description: 'Client Satisfaction is our first priority and We are best at it. Keep In Touch for the best output. '
  }]
};
/* ------------------------------------ */
// App slider data section

/* ------------------------------------ */





const appSlider = {
  carousel: [{
    id: 1,
    image: appSlider1_default.a,
    title: 'App Slide 1'
  }, {
    id: 2,
    image: appSlider2_default.a,
    title: 'App Slide 1'
  }, {
    id: 3,
    image: appSlider3_default.a,
    title: 'App Slide 1'
  }],
  title: 'Smart Jackpots that you may love this anytime & anywhere',
  description: "The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook.",
  features: [{
    id: 1,
    icon: icon1_default.a,
    title: 'Easy Invoicing',
    description: 'Surprice your clients with professional looking invoices.'
  }, {
    id: 2,
    icon: icon1_default.a,
    title: 'UX Planning',
    description: 'UI/UX Design by following and maintaining the latest trends .'
  }, {
    id: 3,
    icon: icon1_default.a,
    title: 'Customer Support',
    description: 'A Dedicated support team will be always ready for you.'
  }]
};
/* ------------------------------------ */
// Design and built data section

/* ------------------------------------ */


const designAndBuilt = {
  image: code_default.a,
  slogan: 'CODE INTEGRATION',
  title: 'Introducing coding features of our apps with Customization',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur.'
};
/* ------------------------------------ */
// Product  Slide  section

/* ------------------------------------ */




const productData = {
  slogan: 'PRODUCT SHOWCASE',
  title: 'Meet Client Satisfaction by using our product',
  carousel: [{
    id: 1,
    thumb_url: page1_default.a,
    link: '#1',
    title: 'slide 1'
  }, {
    id: 2,
    thumb_url: page2_default.a,
    link: '#1',
    title: 'slide 2'
  }, {
    id: 3,
    thumb_url: page3_default.a,
    link: '#1',
    title: 'slide 3'
  }, {
    id: 4,
    thumb_url: page1_default.a,
    link: '#1',
    title: 'slide 4'
  }, {
    id: 5,
    thumb_url: page3_default.a,
    link: '#1',
    title: 'slide 5'
  }, {
    id: 6,
    thumb_url: page2_default.a,
    link: '#1',
    title: 'slide 6'
  }]
};
/* ------------------------------------ */
// Pricing policy data section

/* ------------------------------------ */

const pricing = {
  slogan: 'PRICING PLAN',
  title: 'Choose your pricing policy',
  monthly: [{
    id: 1,
    title: 'Business Class',
    description: 'For Small teams or office',
    suggested: false,
    price: 0,
    features: [{
      id: 1,
      text: 'Drag & Drop Builder'
    }, {
      id: 2,
      text: "1,000's of Templates"
    }, {
      id: 3,
      text: 'Blog Support Tools'
    }, {
      id: 4,
      text: 'eCommerce Store '
    }]
  }, {
    id: 2,
    title: 'Pro Master',
    description: 'For Best opportunities',
    suggested: true,
    price: 99,
    trail: 14,
    trailLink: '#',
    features: [{
      id: 1,
      text: 'Drag & Drop Builder'
    }, {
      id: 2,
      text: "1,000's of Templates"
    }, {
      id: 3,
      text: 'Blog Support Tools'
    }, {
      id: 4,
      text: 'eCommerce Store '
    }]
  }],
  annualy: [{
    id: 1,
    title: 'Pro Master',
    description: 'For Small teams or office',
    suggested: true,
    price: 999,
    trail: 14,
    trailLink: '#',
    features: [{
      id: 1,
      text: 'Drag & Drop Builder'
    }, {
      id: 2,
      text: "1,000's of Templates"
    }, {
      id: 3,
      text: 'Blog Support Tools'
    }, {
      id: 4,
      text: 'eCommerce Store '
    }]
  }, {
    id: 2,
    title: 'Enterprise',
    description: 'For Best opportunities',
    suggested: false,
    price: 1299,
    trail: 30,
    trailLink: '#',
    features: [{
      id: 1,
      text: 'Drag & Drop Builder'
    }, {
      id: 2,
      text: "1,000's of Templates"
    }, {
      id: 3,
      text: 'Blog Support Tools'
    }, {
      id: 4,
      text: 'eCommerce Store '
    }]
  }]
};
/* ------------------------------------ */
// Team Portfolio data section

/* ------------------------------------ */








const teamportfolio = {
  title: 'Meet our awesome team members, work behind the sense',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur.',
  teammember: [{
    id: 1,
    img: _1_default.a,
    text: 'Berlin Corleone'
  }, {
    id: 2,
    img: _2_default.a,
    text: 'Jona White'
  }, {
    id: 3,
    img: _3_default.a,
    text: 'Michael Price'
  }, {
    id: 4,
    img: _4_default.a,
    text: 'Gullyboy Rana'
  }, {
    id: 5,
    img: _5_default.a,
    text: 'Miss Clair'
  }, {
    id: 6,
    img: _6_default.a,
    text: 'Bucky Ali'
  }, {
    id: 7,
    img: _7_default.a,
    text: 'Arthus Doe'
  }]
};
/* ------------------------------------ */
// Testimonial data section

/* ------------------------------------ */

const testimonial = {
  slogan: 'TESTIMONIAL',
  title: 'Meet Client Satisfaction by using product',
  reviews: [{
    id: 1,
    title: 'Modern look & trending design',
    description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: 'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
    name: 'Jon Doe',
    designation: 'CEO of RedQ Inc.',
    review: 4
  }, {
    id: 2,
    title: 'User friendly & Customizable',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Jeny Doe',
    designation: 'Co Founder of RedQ Inc.',
    review: 5
  }, {
    id: 3,
    title: 'User friendly & Customizable',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
    avatar: 'https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg',
    name: 'Jon Doe',
    designation: 'Co Founder of RedQ Inc.',
    review: 5
  }]
};
/* ------------------------------------ */
// Footer data section

/* ------------------------------------ */





const footer = {
  widgets: [{
    id: 1,
    icon: chat_default.a,
    title: 'Join the Community',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.'
  }, {
    id: 2,
    icon: group_default.a,
    title: 'Join in Chat Community',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.'
  }, {
    id: 3,
    icon: github_default.a,
    title: 'Github Access',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.'
  }],
  logo: logoWhite_default.a,
  menu: [{
    id: 1,
    text: 'Home',
    link: '#'
  }, {
    id: 2,
    text: 'Adversite',
    link: '#'
  }, {
    id: 3,
    text: 'Supports',
    link: '#'
  }, {
    id: 4,
    text: 'Marketing',
    link: '#'
  }, {
    id: 5,
    text: 'Contact',
    link: '#'
  }]
};
// CONCATENATED MODULE: ./containers/AppModern/Navbar/index.js
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
    href: "/appmodern",
    logoSrc: logo_white_default.a,
    title: "App Modern",
    className: "main-logo"
  }), __jsx(Logo["a" /* default */], {
    href: "/appmodern",
    logoSrc: logo_default.a,
    title: "App Modern",
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

/* harmony default export */ var AppModern_Navbar = (Navbar);
// EXTERNAL MODULE: external "react-icons-kit/fa/playCircle"
var playCircle_ = __webpack_require__("U9T1");

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Text/index.js
var Text = __webpack_require__("4Af6");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Image/index.js
var Image = __webpack_require__("KFN4");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Heading/index.js
var Heading = __webpack_require__("bHe8");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Rating/index.js
var Rating = __webpack_require__("mU6f");

// CONCATENATED MODULE: ./containers/AppModern/Banner/banner.style.js


const BannerWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__BannerWrapper",
  componentId: "sc-1t20giu-0"
})(["padding-top:100px;min-height:802px;overflow:hidden;position:relative;background-image:-moz-linear-gradient( 139deg,rgb(100,43,115) 0%,rgb(198,66,110) 100% );background-image:-webkit-linear-gradient( 139deg,rgb(100,43,115) 0%,rgb(198,66,110) 100% );background-image:-ms-linear-gradient( 139deg,rgb(100,43,115) 0%,rgb(198,66,110) 100% );@media only screen and (min-width:1201px) and (max-width:1440px){min-height:100vh;}@media only screen and (max-width:1099px){min-height:100%;}@media only screen and (max-width:480px){padding-top:90px;}> div.container{display:flex;align-items:center;justify-content:space-between;min-height:calc(802px - 100px);@media only screen and (min-width:1201px) and (max-width:1440px){min-height:calc(100vh - 100px);margin-top:35px;align-items:flex-start;}@media only screen and (max-width:1099px){min-height:100%;}@media only screen and (max-width:480px){flex-wrap:wrap;}}.bannerBottomShape{position:absolute;right:0;bottom:-2px;@media only screen and (max-width:999px){display:none;}}"]);
const BannerContent = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__BannerContent",
  componentId: "sc-1t20giu-1"
})(["width:40%;flex-shrink:0;@media only screen and (max-width:1199px){flex-shrink:0;width:100%;margin-top:25px;}h1{font-size:46px;line-height:55px;font-weight:700;color:", ";margin-bottom:24px;@media only screen and (max-width:1366px){font-size:32px;line-height:42px;margin-bottom:20px;}}p{color:rgba(255,255,255,0.8);font-size:16px;line-height:29px;}"], Object(external_styled_system_["themeGet"])('colors.menu', '#0D233E'));
const RatingInfo = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__RatingInfo",
  componentId: "sc-1t20giu-2"
})(["display:flex;align-items:center;margin-bottom:22px;color:", ";.rating{margin-right:10px;.star{color:", ";}.star-o{color:#e8e8e8;}}img{margin-left:9px;}"], Object(external_styled_system_["themeGet"])('colors.menu', '#0D233E'), Object(external_styled_system_["themeGet"])('colors.white', '#fff'));
const BannerImage = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__BannerImage",
  componentId: "sc-1t20giu-3"
})(["flex-shrink:0;img{margin-left:-40px;margin-top:50px;@media only screen and (max-width:1440px){margin-top:0px;}}@media only screen and (max-width:1199px){display:none;}"]);
const banner_style_ButtonGroup = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__ButtonGroup",
  componentId: "sc-1t20giu-4"
})(["margin-top:35px;.reusecore__button{text-transform:inherit;border-radius:5px;padding-left:16px;padding-right:16px;&.primary{background-color:", ";color:rgb(15,33,55);font-size:16px;letter-spacing:-0.1px;&:hover{box-shadow:#1e2a4a 0px 12px 24px -10px;}}&.text{font-size:16px;color:", ";letter-spacing:-0.1px;font-weight:500;.btn-icon{i{color:#fff;}svg{width:auto;height:25px;}}}}"], Object(external_styled_system_["themeGet"])('colors.white', '#fff'), Object(external_styled_system_["themeGet"])('colors.white', '#fff'));
const VideoGroup = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__VideoGroup",
  componentId: "sc-1t20giu-5"
})(["display:flex;margin-top:60px;@media only screen and (max-width:768px){margin-top:45px;}@media only screen and (max-width:600px){flex-direction:column;}img{margin-right:10px;max-width:100%;object-fit:cover;cursor:pointer;height:100%;@media only screen and (max-width:600px){margin-right:0;margin-bottom:15px;}}"]);
const VideoWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__VideoWrapper",
  componentId: "sc-1t20giu-6"
})(["max-width:100%;width:900px;position:relative;&:before{content:'';display:block;padding-top:56.25%;}iframe{width:100%;height:100%;position:absolute;top:0;left:0;}"]);
const CustomerWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__CustomerWrapper",
  componentId: "sc-1t20giu-7"
})(["max-width:850px;padding:0px 0 70px;width:100%;margin:0 auto;display:flex;align-items:center;@media only screen and (max-width:1440px){padding:0px 0 55px;}@media only screen and (max-width:1099px){padding:55px 0 55px;max-width:920px;}@media only screen and (max-width:991px){padding:40px 0;}@media only screen and (max-width:600px){padding:25px 0 40px;}p{margin:0 12px 0 0;color:", ";@media only screen and (max-width:991px){display:none;}}"], Object(external_styled_system_["themeGet"])('colors.menu', '#0D233E'));
const ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__ImageWrapper",
  componentId: "sc-1t20giu-8"
})(["display:flex;align-items:center;@media only screen and (max-width:991px){flex-wrap:wrap;justify-content:center;margin:0 auto;}img{margin:0 12px;@media only screen and (max-width:667px){margin:5px 10px;}}"]);
/* harmony default export */ var banner_style = (BannerWrapper);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/envato-icon.png
var envato_icon = __webpack_require__("yrGE");
var envato_icon_default = /*#__PURE__*/__webpack_require__.n(envato_icon);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/banner2.png
var banner2 = __webpack_require__("OmJo");
var banner2_default = /*#__PURE__*/__webpack_require__.n(banner2);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/video-1.png
var video_1 = __webpack_require__("VQfi");
var video_1_default = /*#__PURE__*/__webpack_require__.n(video_1);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/video-2.png
var video_2 = __webpack_require__("+9uC");
var video_2_default = /*#__PURE__*/__webpack_require__.n(video_2);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/shape.svg
var shape = __webpack_require__("Ju3u");
var shape_default = /*#__PURE__*/__webpack_require__.n(shape);

// CONCATENATED MODULE: ./containers/AppModern/Banner/index.js
var Banner_jsx = external_react_default.a.createElement;

















 // close button for modal

const CloseModalButton = () => Banner_jsx(Button["a" /* default */], {
  className: "modalCloseBtn",
  variant: "fab",
  onClick: () => Object(reuse_modal_["closeModal"])(),
  icon: Banner_jsx("i", {
    className: "flaticon-plus-symbol"
  })
});

const ModalContent = () => Banner_jsx(VideoWrapper, null, Banner_jsx("iframe", {
  title: "Video",
  src: "https://www.youtube.com/embed/8ME-QAlW6Ww",
  frameBorder: "0"
}));

const Banner = () => {
  // modal handler
  const handleVideoModal = () => {
    Object(reuse_modal_["openModal"])({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: 'auto',
          height: 'auto',
          x: 0,
          y: 0
        }
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true
    });
  };

  return Banner_jsx(banner_style, {
    id: "home"
  }, Banner_jsx(Container["a" /* default */], null, Banner_jsx(BannerContent, null, Banner_jsx(Fade_default.a, {
    up: true
  }, Banner_jsx(RatingInfo, null, Banner_jsx(Rating["a" /* default */], {
    rating: 4
  }), "4.9 of 5 By ", Banner_jsx("img", {
    src: envato_icon_default.a,
    alt: "Microsoft"
  }))), Banner_jsx(Fade_default.a, {
    up: true,
    delay: 100
  }, Banner_jsx(Heading["a" /* default */], {
    as: "h1",
    content: "The Revolution of Ultimate Platform to monitor your task"
  })), Banner_jsx(Fade_default.a, {
    up: true,
    delay: 200
  }, Banner_jsx(Text["a" /* default */], {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore magna ipsum dolor sit amet consectetur."
  })), Banner_jsx(Fade_default.a, {
    up: true,
    delay: 300
  }, Banner_jsx(banner_style_ButtonGroup, null, Banner_jsx(Button["a" /* default */], {
    className: "primary",
    title: "Start Free trail"
  }), Banner_jsx(Button["a" /* default */], {
    className: "text",
    variant: "textButton",
    icon: Banner_jsx(external_react_icons_kit_["Icon"], {
      icon: playCircle_["playCircle"]
    }),
    iconPosition: "left",
    title: "Watch Video"
  }))), Banner_jsx(VideoGroup, null, Banner_jsx("img", {
    src: video_1_default.a,
    onClick: handleVideoModal,
    alt: "Microsoft"
  }), Banner_jsx("img", {
    src: video_2_default.a,
    onClick: handleVideoModal,
    alt: "Microsoft"
  }))), Banner_jsx(BannerImage, null, Banner_jsx(Fade_default.a, {
    up: true,
    delay: 100
  }, Banner_jsx(Image["a" /* default */], {
    src: banner2_default.a,
    alt: "Banner"
  })))), Banner_jsx(CustomerWrapper, null, Banner_jsx(Text["a" /* default */], {
    content: "Trusted by companies like:"
  }), Banner_jsx(ImageWrapper, null, client.map(item => Banner_jsx(Image["a" /* default */], {
    key: `client-key${item.id}`,
    src: item.image,
    alt: item.title
  })))), Banner_jsx("img", {
    className: "bannerBottomShape",
    src: shape_default.a,
    alt: "Bottom Circle"
  }));
};

/* harmony default export */ var AppModern_Banner = (Banner);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/FeatureBlock/index.js + 1 modules
var FeatureBlock = __webpack_require__("b4OD");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/GlideCarousel/index.js
var GlideCarousel = __webpack_require__("mnHf");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/GlideCarousel/glideSlide.js
var glideSlide = __webpack_require__("9NE4");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appClassic/circle-bg.svg
var circle_bg = __webpack_require__("JruR");
var circle_bg_default = /*#__PURE__*/__webpack_require__.n(circle_bg);

// CONCATENATED MODULE: ./containers/AppModern/AppSlider/appSlider.style.js



const SectionWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "appSliderstyle__SectionWrapper",
  componentId: "dxb5hy-0"
})(["padding:75px 0 145px;@media only screen and (max-width:1440px){padding:50px 0 75px;}@media only screen and (max-width:1024px){padding:30px 0 60px;}@media only screen and (max-width:667px){padding:45px 0;}@media only screen and (max-width:480px){padding:30px 0;}> div.container{display:flex;flex-wrap:wrap;}"]);
const CarouseWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "appSliderstyle__CarouseWrapper",
  componentId: "dxb5hy-1"
})(["width:calc(100% - 428px);background-image:url(", ");background-repeat:no-repeat;background-position:center center;@media only screen and (max-width:1366px){background-size:contain;align-self:center;}@media only screen and (max-width:991px){width:calc(100% - 350px);}@media only screen and (max-width:667px){width:100%;align-self:flex-start;}.glide{width:337px;margin:0 auto;position:relative;@media only screen and (max-width:991px){width:310px;}@media only screen and (max-width:667px){width:260px;}.glide__slide{img{display:inline-block;}}.glide__bullets{display:flex;width:4px;flex-direction:column;position:absolute;top:calc(50% - 50px);left:-21px;> button.glide__bullet{width:4px;height:20px;border-radius:5px;margin-left:0;margin-right:0;background-color:#d8dce9;transition:height 0.3s ease;&.glide__bullet--active{height:35px;background-color:#d1397c;}}}}"], circle_bg_default.a);
const TextWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "appSliderstyle__TextWrapper",
  componentId: "dxb5hy-2"
})(["width:428px;align-self:center;@media only screen and (max-width:1366px){padding-left:30px;}@media only screen and (max-width:991px){width:350px;padding-left:20px;}@media only screen and (max-width:667px){width:100%;padding-left:0;margin-top:40px;}h2{color:", ";font-size:36px;line-height:44px;font-weight:700;margin-bottom:20px;@media only screen and (max-width:1366px){font-size:30px;line-height:42px;margin-bottom:15px;}@media only screen and (max-width:991px){font-size:26px;line-height:38px;margin-bottom:20px;}}p{color:", ";font-size:16px;line-height:28px;margin-bottom:0;}> p{margin-bottom:40px;}.feature__block{padding-top:30px;cursor:pointer;transition:all 0.05s ease;.content__wrapper{margin-left:10px;}h3{color:", ";font-size:18px;line-height:28px;font-weight:500;margin-bottom:9px;@media only screen and (max-width:1366px){line-height:26px;margin-bottom:7px;}}}"], Object(external_styled_system_["themeGet"])('colors.headingColor', '#0F2137'), Object(external_styled_system_["themeGet"])('colors.textColor', 'rgba(52, 61, 72, 0.8)'), Object(external_styled_system_["themeGet"])('colors.headingColor', '#0F2137'));
/* harmony default export */ var appSlider_style = (SectionWrapper);
// CONCATENATED MODULE: ./containers/AppModern/AppSlider/index.js
var AppSlider_jsx = external_react_default.a.createElement;











const AppSlider = () => {
  const {
    title,
    description,
    features,
    carousel
  } = appSlider;
  const glideOptions = {
    type: 'carousel',
    gap: 0,
    autoplay: 5000,
    perView: 1,
    animationDuration: 700
  };
  return AppSlider_jsx(appSlider_style, null, AppSlider_jsx(Container["a" /* default */], null, AppSlider_jsx(CarouseWrapper, null, AppSlider_jsx(GlideCarousel["a" /* default */], {
    bullets: true,
    controls: false,
    numberOfBullets: 3,
    options: glideOptions,
    carouselSelector: "appFeatureSlider"
  }, AppSlider_jsx(external_react_["Fragment"], null, carousel.map(item => AppSlider_jsx(glideSlide["a" /* default */], {
    key: `feature-side--key${item.id}`
  }, AppSlider_jsx(Image["a" /* default */], {
    src: item.image,
    alt: item.title
  })))))), AppSlider_jsx(TextWrapper, null, AppSlider_jsx(Heading["a" /* default */], {
    content: title
  }), AppSlider_jsx(Text["a" /* default */], {
    content: description
  }), features.map(item => AppSlider_jsx(FeatureBlock["a" /* default */], {
    key: `app-feature--key${item.id}`,
    iconPosition: "left",
    icon: AppSlider_jsx("img", {
      src: item.icon,
      alt: item.title
    }),
    title: AppSlider_jsx(Heading["a" /* default */], {
      as: "h3",
      content: item.title
    }),
    description: AppSlider_jsx(Text["a" /* default */], {
      content: item.description
    })
  })))));
};

/* harmony default export */ var AppModern_AppSlider = (AppSlider);
// EXTERNAL MODULE: external "react-icons-kit/typicons/mediaRecordOutline"
var mediaRecordOutline_ = __webpack_require__("olJT");

// EXTERNAL MODULE: external "react-icons-kit/typicons/plus"
var plus_ = __webpack_require__("Nwfa");

// EXTERNAL MODULE: external "react-icons-kit/typicons/starOutline"
var starOutline_ = __webpack_require__("sj/V");

// CONCATENATED MODULE: ./containers/AppModern/appModern.style.js


const GlobalStyle = external_styled_components_["createGlobalStyle"]`
  body {
    font-family: 'Heebo', sans-serif;
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
  h6 {
    font-family: 'Heebo', sans-serif;
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
const AppWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "appModernstyle__AppWrapper",
  componentId: "sc-3tq9sx-0"
})(["overflow:hidden;display:flex;flex-direction:column;min-height:100vh;.sticky-active{.navbar{padding:20px 0 21px;background-color:", ";box-shadow:0px 3px 8px 0px rgba(43,83,135,0.08);@media only screen and (max-width:1366px){padding:15px 0 16px;}.main-logo{display:none;}.logo-alt{display:block;}.mobile-menu{top:72px;}ul{li{a{color:", ";font-size:16px;font-weight:400;transition:all 0.3s ease;&:hover{color:", ";}}&.is-current{a{color:", ";}}}}.reusecore__button{&.menubar{color:", ";}&.text{color:", ";.btn-icon{svg{stroke:", ";}}@media only screen and (max-width:991px){}}}}}"], Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'), Object(external_styled_system_["themeGet"])('colors.secondary', '#000'), Object(external_styled_system_["themeGet"])('colors.primary', '#d1397c'), Object(external_styled_system_["themeGet"])('colors.primary', '#d1397c'), Object(external_styled_system_["themeGet"])('colors.secondary', '#000'), Object(external_styled_system_["themeGet"])('colors.secondary', '#000'), Object(external_styled_system_["themeGet"])('colors.secondary', '#000'));
const ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "appModernstyle__ContentWrapper",
  componentId: "sc-3tq9sx-1"
})(["flex:1 0 auto;width:100%;overflow:hidden;"]);
const SectionHeader = external_styled_components_default.a.header.withConfig({
  displayName: "appModernstyle__SectionHeader",
  componentId: "sc-3tq9sx-2"
})(["max-width:352px;width:100%;margin:0 auto 58px;text-align:center;@media only screen and (max-width:991px){margin-bottom:50px;}h5{font-size:14px;font-weight:700;line-height:24px;margin-bottom:12px;letter-spacing:1.5px;color:", ";text-transform:uppercase;@media only screen and (max-width:991px){font-size:13px;margin-bottom:10px;}}h2{font-size:30px;line-height:36px;font-weight:700;color:", ";margin:0;letter-spacing:-1px;@media only screen and (max-width:1366px){font-size:28px;letter-spacing:-0.7px;}@media only screen and (max-width:991px){font-size:26px;line-height:38px;letter-spacing:-0.5px;}}"], Object(external_styled_system_["themeGet"])('colors.primary', '#2563FF'), Object(external_styled_system_["themeGet"])('colors.headingColor', '#0F2137'));
/* harmony default export */ var appModern_style = (GlobalStyle);
// CONCATENATED MODULE: ./containers/AppModern/Features/features.style.js


const features_style_SectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "featuresstyle__SectionWrapper",
  componentId: "uvd861-0"
})(["padding:105px 0 75px;overflow:hidden;@media only screen and (max-width:1440px){padding:50px 0;}@media only screen and (max-width:667px){padding:45px 0;}"]);
const FeatureWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "featuresstyle__FeatureWrapper",
  componentId: "uvd861-1"
})(["display:flex;flex-wrap:wrap;justify-content:space-between;margin:-12px 0 -30px;> div{width:calc(100% / 4 - 34px);margin:38px 0 30px;@media only screen and (max-width:1366px){width:calc(100% / 4 - 30px);}@media only screen and (max-width:991px){width:calc(100% / 2 - 30px);}@media only screen and (max-width:767px){width:calc(100% / 2 - 15px);}@media only screen and (max-width:480px){width:100%;margin-top:15px;}}.feature__block{align-items:flex-start;flex-direction:column;@media only screen and (max-width:767px){align-items:center;text-align:center;}.icon__wrapper{position:relative;@media only screen and (max-width:1366px){img{height:72px;}}@media only screen and (max-width:480px){img{height:70px;}}i{opacity:0;visibility:hidden;position:absolute;color:var(--color);transition:all 0.5s cubic-bezier(0.75,-0.5,0,1.75);&.plus{top:0;left:0;transform:translate(20px,20px) scale(0.1) rotate(-180deg);}&.circle{top:0;right:0;transform:translate(-20px,20px) scale(0.1) rotate(-180deg);}&.star{bottom:-5px;left:calc(50% - 8px);transform:translate(0,-20px) scale(0.1) rotate(-180deg);}}}.content__wrapper{padding-left:0;margin-top:-5px;@media only screen and (max-width:1366px){}@media only screen and (max-width:767px){}h3{color:", ";font-size:19px;line-height:30px;font-weight:500;margin-bottom:15px;@media only screen and (max-width:1366px){font-size:18px;margin-bottom:5px;}}p{color:", ";font-size:15px;line-height:28px;margin:0;}}&:hover{.icon__wrapper{cursor:pointer;i{opacity:1;visibility:visible;&.plus{transform:translate(-4px,-4px) scale(1) rotate(180deg);}&.circle{transform:translate(4px,-4px) scale(1) rotate(180deg);}&.star{transform:translate(0,-4px) scale(1) rotate(180deg);}}}}}"], Object(external_styled_system_["themeGet"])('colors.heading'), Object(external_styled_system_["themeGet"])('colors.textColor'));
/* harmony default export */ var features_style = (features_style_SectionWrapper);
// CONCATENATED MODULE: ./containers/AppModern/Features/index.js
var Features_jsx = external_react_default.a.createElement;















const Features = () => {
  const {
    slogan,
    title,
    items
  } = AppModern_features;
  return Features_jsx(features_style, {
    id: "features"
  }, Features_jsx(Container["a" /* default */], null, Features_jsx(SectionHeader, null, Features_jsx(Fade_default.a, {
    up: true
  }, Features_jsx(Heading["a" /* default */], {
    as: "h5",
    content: slogan
  }), Features_jsx(Heading["a" /* default */], {
    content: title
  }))), Features_jsx(FeatureWrapper, null, items.map(item => Features_jsx(Fade_default.a, {
    up: true,
    delay: 100 * item.id,
    key: `feature-key${item.id}`
  }, Features_jsx(FeatureBlock["a" /* default */], {
    style: {
      '--color': `${item.color}`
    },
    icon: Features_jsx(external_react_["Fragment"], null, Features_jsx(external_react_icons_kit_["Icon"], {
      className: "plus",
      icon: plus_["plus"]
    }), Features_jsx(external_react_icons_kit_["Icon"], {
      className: "circle",
      icon: mediaRecordOutline_["mediaRecordOutline"]
    }), Features_jsx(Image["a" /* default */], {
      src: item.icon,
      alt: item.title
    }), Features_jsx(external_react_icons_kit_["Icon"], {
      className: "star",
      icon: starOutline_["starOutline"]
    })),
    iconPosition: "left",
    title: Features_jsx(Heading["a" /* default */], {
      as: "h3",
      content: item.title
    }),
    description: Features_jsx(Text["a" /* default */], {
      content: item.description
    })
  }))))));
};

/* harmony default export */ var AppModern_Features = (Features);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Box/index.js
var Box = __webpack_require__("l54f");

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

// CONCATENATED MODULE: ./containers/AppModern/Particle/index.js
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
// CONCATENATED MODULE: ./containers/AppModern/Dashboard/dashboard.style.js


const DashboardWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "dashboardstyle__DashboardWrapper",
  componentId: "sc-4rurjg-0"
})(["padding-top:120px;padding-bottom:240px;background-size:cover;background-position:center;background-repeat:no-repeat;background-attachment:fixed;min-height:100%;position:relative;background-color:#fff;@media (max-width:1800px){padding-bottom:180px;}@media (max-width:1600px){padding-top:80px;padding-bottom:160px;}@media (max-width:1440px){padding-top:30px;padding-bottom:100px;}@media (max-width:1024px){padding-top:30px;padding-bottom:60px;}@media (max-width:767px){padding-top:20px;padding-bottom:20px;min-height:auto;}@media only screen and (max-width:480px){background:none;}.particle{position:absolute;width:50%;height:100%;top:0;left:0;overflow:hidden;@media (max-width:767px){display:none;}@media only screen and (max-width:480px){width:100%;}}.row{position:relative;z-index:1;}.button__wrapper{margin-top:40px;@media (max-width:1024px){margin-top:25px;}@media (max-width:767px){margin-bottom:30px;}@media (max-width:767px){margin-top:0px;}.reusecore__button{border-radius:5px;font-weight:500;&.outlined{border-color:rgba(82,104,219,0.2);}&:hover{box-shadow:", " 0px 12px 24px -10px;}}}.subtitle{font-size:14px;font-weight:700;line-height:24px;margin-bottom:12px;letter-spacing:1.5px;color:#d1397c;text-transform:uppercase;}"], Object(external_styled_system_["themeGet"])('colors.primary', '#F6C416'));
const DashboardObject = external_styled_components_default.a.div.withConfig({
  displayName: "dashboardstyle__DashboardObject",
  componentId: "sc-4rurjg-1"
})(["position:absolute;width:50%;height:100%;top:20px;right:0;display:flex;align-items:center;@media (max-width:990px){top:50px;}@media (max-width:767px){display:none;}.dashboardWrapper{height:100%;}"]);

/* harmony default export */ var dashboard_style = (DashboardWrapper);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/dashboard.png
var dashboard = __webpack_require__("DiAb");
var dashboard_default = /*#__PURE__*/__webpack_require__.n(dashboard);

// CONCATENATED MODULE: ./containers/AppModern/Dashboard/index.js
var Dashboard_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













const DashboardSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle
}) => {
  const ButtonGroup = () => Dashboard_jsx(external_react_["Fragment"], null, Dashboard_jsx(Button["a" /* default */], _extends({
    title: "FREE TRAIL"
  }, btnStyle)));

  return Dashboard_jsx(dashboard_style, {
    id: "banner_section"
  }, Dashboard_jsx(Particle, null), Dashboard_jsx(Container["a" /* default */], null, Dashboard_jsx(Box["a" /* default */], _extends({
    className: "row"
  }, row), Dashboard_jsx(Box["a" /* default */], _extends({
    className: "col"
  }, col), Dashboard_jsx(Heading["a" /* default */], {
    className: "subtitle",
    as: "h5",
    content: "APP'S DASHBOARD"
  }), Dashboard_jsx(FeatureBlock["a" /* default */], {
    title: Dashboard_jsx(Heading["a" /* default */], _extends({
      content: "Meet the dashboard features of our finalcial management."
    }, title)),
    description: Dashboard_jsx(Text["a" /* default */], _extends({
      content: "We help to create SaaS product that are innovative, differentiated with a superb User Experience, fully accessible through mobile devices. SaaS products are changing the world ."
    }, description)),
    button: Dashboard_jsx(ButtonGroup, null)
  })))), Dashboard_jsx(DashboardObject, null, Dashboard_jsx("div", {
    className: "dashboardWrapper"
  }, Dashboard_jsx(Image["a" /* default */], {
    src: dashboard_default.a,
    alt: "DashboardObject1"
  }))));
};

DashboardSection.defaultProps = {
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
    fontSize: ['22px', '30px', '30px', '30px', '36px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '15px', '15px', '20px', '25px'],
    lineHeight: '1.3',
    maxWidth: ['100%', '400px']
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.85',
    mb: '0'
  },
  btnStyle: {
    minWidth: ['120px', '120px', '120px', '156px'],
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'primaryWithBg'
  }
};
/* harmony default export */ var Dashboard = (DashboardSection);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-id-swiper"
var external_react_id_swiper_ = __webpack_require__("+/Rj");
var external_react_id_swiper_default = /*#__PURE__*/__webpack_require__.n(external_react_id_swiper_);

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/swiper/css/swiper.css
var swiper = __webpack_require__("bgpB");

// CONCATENATED MODULE: ./containers/AppModern/ProductSlide/productSlide.style.js


const rotate = Object(external_styled_components_["keyframes"])(["to{transform:rotate(360deg);}"]);
const grow = Object(external_styled_components_["keyframes"])(["50%{transform:scale(1);}"]);
const ProductSlideWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "productSlidestyle__ProductSlideWrapper",
  componentId: "oku99x-0"
})(["margin-bottom:81px;background-color:", ";padding-top:80px;overflow:hidden;@media only screen and (max-width:1440px){margin-bottom:30px;}@media only screen and (max-width:1440px){padding-top:60px;}@media only screen and (max-width:767px){margin-bottom:42px;padding-top:40px;}"], Object(external_styled_system_["themeGet"])('colors.banner', 'rgb(29, 35, 54)'));
const productSlide_style_Container = external_styled_components_default.a.div.withConfig({
  displayName: "productSlidestyle__Container",
  componentId: "oku99x-1"
})(["width:100%;max-width:1580px;margin:0 auto;padding:0 20px;display:flex;align-items:center;margin-bottom:-65px;flex-direction:column;@media only screen and (max-width:1600px){", "}@media only screen and (max-width:1360px){", "}@media only screen and (max-width:991px){", "}@media only screen and (max-width:767px){flex-direction:column;}"], ''
/* padding: 81px; */
, ''
/* padding: 60px; */
, ''
/* padding: 30px; */
);
const CarouselArea = external_styled_components_default.a.div.withConfig({
  displayName: "productSlidestyle__CarouselArea",
  componentId: "oku99x-2"
})(["width:100%;display:flex;align-items:center;justify-content:center;position:relative;.swiper-container{padding-top:20px;.swiper-slide{&.swiper-slide-active{.item_wrapper{margin-top:-17px;}}}}.swiper-wrapper{.item_wrapper{display:block;max-height:630px;overflow:hidden;position:relative;@media only screen and (max-width:991px){max-height:400px;}@media only screen and (max-width:767px){max-height:380px;}&::after{content:'';display:block;width:100%;height:100%;", " position:absolute;bottom:0;left:0;transition:height 0.3s ease;z-index:1;}img{width:100%;height:100%;object-fit:cover;transition:transform 0.3s ease;}}&.swiper-slide-next{.item_wrapper{&::after{content:'';display:block;width:100%;height:100%;position:absolute;bottom:0;left:0;transition:height 0.3s ease;z-index:1;}}}.swiper-slide{display:block;.item_wrapper{&::after{content:'';display:block;width:100%;height:100%;position:absolute;bottom:0;left:0;transition:height 0.3s ease;z-index:1;background:rgba(0,0,0,0.7);}}&.swiper-slide-next{.item_wrapper{&::after{content:'';display:block;width:100%;height:100%;position:absolute;bottom:0;left:0;transition:height 0.3s ease;z-index:1;background:rgba(0,0,0,0.5);}}}&.swiper-slide-prev{.item_wrapper{&::after{content:'';display:block;width:100%;height:100%;position:absolute;bottom:0;left:0;transition:height 0.3s ease;z-index:1;background:rgba(0,0,0,0.5);}}}&.swiper-slide-active{.item_wrapper{&::after{content:'';display:block;width:100%;height:100%;position:absolute;bottom:0;left:0;transition:height 0.3s ease;z-index:1;background:rgba(0,0,0,0);}}}}}.glide__controls{> div{> span{&.next_arrow{width:45px;background-color:", ";@media only screen and (max-width:667px){width:30px;}&::before{background-color:", ";transform:rotate(42deg);}&::after{background-color:", ";transform:rotate(-42deg);}}}}}"], ''
/* background: rgba(0,0,0,0.8); */
, Object(external_styled_system_["themeGet"])('colors.primary', '#FDEF00'), Object(external_styled_system_["themeGet"])('colors.primary', '#FDEF00'), Object(external_styled_system_["themeGet"])('colors.primary', '#FDEF00'));
const CircleLoader = external_styled_components_default.a.div.withConfig({
  displayName: "productSlidestyle__CircleLoader",
  componentId: "oku99x-3"
})(["animation:", " 3s linear infinite;width:50px;height:50px;flex-shrink:0;transform-origin:bottom center;.circle{animation:", " 1.5s linear infinite;background-color:", ";border-radius:50%;display:inline-block;margin:-9px;height:40px;width:40px;transform:scale(0);&:nth-of-type(2){animation-delay:0.75s;background-color:", ";}}&.alt{.circle{&:nth-of-type(2){background-color:", ";}}}"], rotate, grow, Object(external_styled_system_["themeGet"])('colors.primary', '#FDEF00'), Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'), Object(external_styled_system_["themeGet"])('colors.heading', '#191919'));
const MockupWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "productSlidestyle__MockupWrapper",
  componentId: "oku99x-4"
})(["position:absolute;height:calc(100% + 0px);display:block;top:50%;left:50%;transform:translate(-50%,-50%);z-index:9;pointer-events:none;margin-top:-12px;@media only screen and (max-width:1800px){height:calc(100% + 0px);}@media only screen and (max-width:1440px){height:calc(100% + 0px);}@media only screen and (max-width:1280px){height:calc(100% + 0px);}img{display:block;height:100%;width:auto;}"]);
const productSlide_style_SectionHeader = external_styled_components_default.a.section.withConfig({
  displayName: "productSlidestyle__SectionHeader",
  componentId: "oku99x-5"
})(["padding:0px 0 80px;overflow:hidden;@media only screen and (max-width:1099px){padding:0px 0 60px;}@media only screen and (max-width:667px){padding:0px 0 40px;}h5{text-align:center;color:#c2416e;}h2{max-width:400px;font-size:30px;line-height:1.2;color:#fff;text-align:center;@media only screen and (max-width:667px){font-size:26px;}}"]);
/* harmony default export */ var productSlide_style = (ProductSlideWrapper);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/screen.png
var screen = __webpack_require__("dH4A");
var screen_default = /*#__PURE__*/__webpack_require__.n(screen);

// CONCATENATED MODULE: ./containers/AppModern/ProductSlide/index.js
var ProductSlide_jsx = external_react_default.a.createElement;












const params = {
  slidesPerView: 5,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500
  },
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 20
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 20
    }
  }
};

const ProductSlide = () => {
  const {
    carousel,
    slogan,
    title
  } = productData;
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    setLoading(true);
  }, []);
  return ProductSlide_jsx(productSlide_style, null, ProductSlide_jsx(productSlide_style_Container, null, ProductSlide_jsx(productSlide_style_SectionHeader, null, ProductSlide_jsx(Fade_default.a, {
    up: true
  }, ProductSlide_jsx(Heading["a" /* default */], {
    as: "h5",
    content: slogan
  }), ProductSlide_jsx(Heading["a" /* default */], {
    content: title
  }))), ProductSlide_jsx(CarouselArea, null, loading ? ProductSlide_jsx(external_react_["Fragment"], null, ProductSlide_jsx(MockupWrapper, null, ProductSlide_jsx(Image["a" /* default */], {
    src: screen_default.a,
    alt: "mockup"
  })), ProductSlide_jsx(external_react_id_swiper_default.a, params, carousel.map((item, index) => ProductSlide_jsx("div", {
    key: index
  }, ProductSlide_jsx(link_default.a, {
    href: item.link,
    key: `productSlide--key${item.id}`
  }, ProductSlide_jsx("a", {
    className: "item_wrapper"
  }, ProductSlide_jsx(Image["a" /* default */], {
    src: item.thumb_url,
    alt: item.title
  }))))))) : ProductSlide_jsx(CircleLoader, null, ProductSlide_jsx("div", {
    className: "circle"
  }), ProductSlide_jsx("div", {
    className: "circle"
  })))));
};

/* harmony default export */ var AppModern_ProductSlide = (ProductSlide);
// CONCATENATED MODULE: ./containers/AppModern/DesignedAndBuilt/designedAndBuilt.style.js


const designedAndBuilt_style_SectionWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "designedAndBuiltstyle__SectionWrapper",
  componentId: "sc-1aub4cs-0"
})(["padding:75px 0 25px;overflow:hidden;@media (max-width:1600px){padding:25px 0 0px;}@media only screen and (max-width:1366px){padding:30px 0;}@media only screen and (max-width:667px){padding:30px 0 0;}"]);
const designedAndBuilt_style_ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "designedAndBuiltstyle__ContentWrapper",
  componentId: "sc-1aub4cs-1"
})(["display:flex;flex-wrap:wrap;align-items:center;.image{width:calc(100% - 410px);@media only screen and (max-width:991px){width:calc(100% - 290px);}@media only screen and (max-width:768px){width:100%;margin-bottom:40px;}}.content{width:410px;@media only screen and (max-width:991px){width:290px;}@media only screen and (max-width:768px){width:100%;}h2{color:", ";font-size:36px;line-height:44px;font-weight:700;letter-spacing:-1px;margin-bottom:27px;max-width:400px;@media only screen and (max-width:1366px){font-size:30px;line-height:42px;margin-bottom:20px;}@media only screen and (max-width:991px){font-size:26px;line-height:38px;}@media only screen and (max-width:768px){max-width:100%;}}p{font-size:16px;line-height:28px;color:#6e7379;margin-bottom:36px;@media only screen and (max-width:1366px){margin-bottom:30px;}@media only screen and (max-width:768px){text-align:center;}}h5{font-size:14px;font-weight:700;line-height:24px;margin-bottom:12px;letter-spacing:1.5px;color:", ";text-transform:uppercase;@media only screen and (max-width:768px){text-align:center;}}}.reusecore__button{border-radius:5px;&:hover{background-color:", ";}}"], Object(external_styled_system_["themeGet"])('colors.headingColor', '#0F2137'), Object(external_styled_system_["themeGet"])('colors.primary', '#0F2137'), Object(external_styled_system_["themeGet"])('colors.primaryHover', '#3C74FF'));
/* harmony default export */ var designedAndBuilt_style = (designedAndBuilt_style_SectionWrapper);
// CONCATENATED MODULE: ./containers/AppModern/DesignedAndBuilt/index.js
var DesignedAndBuilt_jsx = external_react_default.a.createElement;








const DesignedAndBuilt = () => {
  const {
    image,
    title,
    slogan,
    description
  } = designAndBuilt;
  return DesignedAndBuilt_jsx(designedAndBuilt_style, null, DesignedAndBuilt_jsx(Container["a" /* default */], null, DesignedAndBuilt_jsx(designedAndBuilt_style_ContentWrapper, null, DesignedAndBuilt_jsx("div", {
    className: "content"
  }, DesignedAndBuilt_jsx(Heading["a" /* default */], {
    as: "h5",
    content: slogan
  }), DesignedAndBuilt_jsx(Heading["a" /* default */], {
    content: title
  }), DesignedAndBuilt_jsx(Text["a" /* default */], {
    content: description
  })), DesignedAndBuilt_jsx("div", {
    className: "image"
  }, DesignedAndBuilt_jsx(Image["a" /* default */], {
    src: image,
    alt: "Built Logo"
  })))));
};

/* harmony default export */ var AppModern_DesignedAndBuilt = (DesignedAndBuilt);
// EXTERNAL MODULE: external "react-icons-kit/ionicons/checkmarkCircled"
var checkmarkCircled_ = __webpack_require__("NGog");

// CONCATENATED MODULE: ./containers/AppModern/PricingPolicy/pricingPolicy.style.js


const pricingPolicy_style_SectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "pricingPolicystyle__SectionWrapper",
  componentId: "sc-5vw615-0"
})(["padding:75px 0 100px;@media only screen and (max-width:1440px){padding:50px 0;}@media only screen and (max-width:768px){padding:0px 0 50px;}@media only screen and (max-width:667px){padding:45px 0;}@media only screen and (max-width:480px){padding:0 0 30px;}"]);
const pricingPolicy_style_ButtonGroup = external_styled_components_default.a.div.withConfig({
  displayName: "pricingPolicystyle__ButtonGroup",
  componentId: "sc-5vw615-1"
})(["display:flex;align-items:center;max-width:320px;padding:6px;margin:0 auto;border-radius:5px;background-color:", ";button{border:0;padding:15px 23px;border-radius:5px;color:rgba(15,33,55,0.5);font-size:16px;line-height:24px;font-weight:700;background-color:transparent;cursor:pointer;width:100%;@media only screen and (max-width:480px){font-size:15px;}&.active{color:", ";background-color:", ";box-shadow:0 3px 4px ", ";}}"], Object(external_styled_system_["themeGet"])('colors.inactiveField', '#f7f8fb'), Object(external_styled_system_["themeGet"])('colors.headingColor', '#0f2137'), Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'), Object(external_styled_system_["themeGet"])('colors.shadow', 'rgba(38, 78, 118, 0.1)'));
const PricingArea = external_styled_components_default.a.div.withConfig({
  displayName: "pricingPolicystyle__PricingArea",
  componentId: "sc-5vw615-2"
})(["max-width:730px;width:100%;margin:0 auto;@media only screen and (max-width:667px){overflow:hidden;margin-bottom:-40px;width:calc(100% + 60px);margin-left:-30px;}@media only screen and (max-width:480px){width:calc(100% + 40px);margin-left:-20px;}"]);
const InnerWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "pricingPolicystyle__InnerWrapper",
  componentId: "sc-5vw615-3"
})(["display:flex;justify-content:space-between;padding-top:51px;@media only screen and (max-width:667px){padding-top:50px;padding-bottom:80px;margin-bottom:-40px;overflow-x:scroll;overflow-y:hidden;}"]);
const PricingCard = external_styled_components_default.a.div.withConfig({
  displayName: "pricingPolicystyle__PricingCard",
  componentId: "sc-5vw615-4"
})(["width:calc(100% / 2 - 25px);max-width:340px;padding:20px;border-radius:15px;box-shadow:0 6px 50px ", ";position:relative;@media only screen and (max-width:1366px){width:calc(100% / 2 - 20px);}@media only screen and (max-width:991px){width:calc(100% / 2 - 15px);}@media only screen and (max-width:667px){width:calc(80% - 30px);flex-shrink:0;margin-right:30px;}@media only screen and (max-width:480px){width:calc(96% - 25px);margin-right:20px;}@media only screen and (max-width:320px){width:100%;margin-right:0;}.tag{display:inline-flex;align-items:center;justify-content:center;min-width:109px;height:30px;position:absolute;top:-10px;left:37px;border-radius:5px;color:", ";font-size:14px;font-weight:700;text-transform:capitalize;background-color:", ";img{margin-right:6px;}}.card-header{padding:17px 20px;margin-bottom:20px;@media only screen and (max-width:480px){padding:15px 10px 10px;}h3{color:", ";font-size:22px;line-height:26px;font-weight:700;margin-bottom:8px;}p{color:", ";font-size:15px;margin:0;}}.card-body{padding:0 20px;margin-bottom:25px;@media only screen and (max-width:480px){padding:0 10px;margin-bottom:30px;}ul{li{color:", ";font-size:16px;margin-bottom:21px;i{color:", ";margin-right:8px;svg{width:20px;height:auto;}}}}}.card-footer{padding:17px 30px;border-top:1px solid #f3f4f5;text-align:center;@media only screen and (max-width:480px){padding:30px 10px 20px;}strong{display:block;color:", ";font-weight:400;font-size:16px;margin-bottom:27px;span{font-weight:700;font-size:36px;color:", ";}}.reusecore__button{border-radius:5px;transition:all 0.3s ease;&:hover{box-shadow:#d1397c 0px 12px 24px -10px;}@media only screen and (max-width:767px){width:100%;}}.trail{margin-top:22px;a{color:rgba(37,99,255,0.9);font-size:15px;font-weight:500;}}}"], Object(external_styled_system_["themeGet"])('colors.shadow', 'rgba(38, 78, 118, 0.1)'), Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'), Object(external_styled_system_["themeGet"])('colors.yellow', '#FFA740'), Object(external_styled_system_["themeGet"])('colors.headingColor', '#0F2137'), Object(external_styled_system_["themeGet"])('colors.textColor', 'rgba(52, 61, 72, 0.8)'), Object(external_styled_system_["themeGet"])('colors.quoteText', '#343D48'), Object(external_styled_system_["themeGet"])('colors.primary', '#2563FF'), Object(external_styled_system_["themeGet"])('colors.textColor', 'rgba(52, 61, 72, 0.8)'), Object(external_styled_system_["themeGet"])('colors.headingColor', '#0F2137'));
/* harmony default export */ var pricingPolicy_style = (pricingPolicy_style_SectionWrapper);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appClassic/crown.svg
var crown = __webpack_require__("+XTa");
var crown_default = /*#__PURE__*/__webpack_require__.n(crown);

// CONCATENATED MODULE: ./containers/AppModern/PricingPolicy/index.js
var PricingPolicy_jsx = external_react_default.a.createElement;

function PricingPolicy_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function PricingPolicy_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { PricingPolicy_ownKeys(Object(source), true).forEach(function (key) { PricingPolicy_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { PricingPolicy_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function PricingPolicy_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const PricingPolicy = () => {
  const {
    slogan,
    title,
    monthly,
    annualy
  } = pricing;
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({
    active: 'monthly',
    pricingPlan: monthly
  });

  const handlePricingPlan = plan => {
    if (plan === 'annualy') {
      setState(PricingPolicy_objectSpread({}, state, {
        active: 'annualy',
        pricingPlan: annualy
      }));
    } else {
      setState(PricingPolicy_objectSpread({}, state, {
        active: 'monthly',
        pricingPlan: monthly
      }));
    }
  };

  return PricingPolicy_jsx(pricingPolicy_style, {
    id: "pricing"
  }, PricingPolicy_jsx(Container["a" /* default */], null, PricingPolicy_jsx(SectionHeader, null, PricingPolicy_jsx(Heading["a" /* default */], {
    as: "h5",
    content: slogan
  }), PricingPolicy_jsx(Heading["a" /* default */], {
    content: title
  })), PricingPolicy_jsx(pricingPolicy_style_ButtonGroup, null, PricingPolicy_jsx("button", {
    className: state.active === 'monthly' ? 'active' : '',
    type: "button",
    onClick: () => handlePricingPlan('monthly')
  }, "Monthly Plan"), PricingPolicy_jsx("button", {
    className: state.active === 'annualy' ? 'active' : '',
    type: "button",
    onClick: () => handlePricingPlan('annualy')
  }, "Annual Plan")), PricingPolicy_jsx(PricingArea, null, PricingPolicy_jsx(InnerWrapper, null, state.pricingPlan.map(item => PricingPolicy_jsx(PricingCard, {
    key: `${state.active}-card--key${item.id}`
  }, item.suggested && PricingPolicy_jsx("span", {
    className: "tag"
  }, PricingPolicy_jsx("img", {
    src: crown_default.a,
    alt: "Crown"
  }), " Suggested"), PricingPolicy_jsx("div", {
    className: "card-header"
  }, PricingPolicy_jsx(Heading["a" /* default */], {
    as: "h3",
    content: item.title
  }), PricingPolicy_jsx(Text["a" /* default */], {
    content: item.description
  })), PricingPolicy_jsx("div", {
    className: "card-body"
  }, PricingPolicy_jsx("ul", {
    className: "feature-list"
  }, item.features.map(item => PricingPolicy_jsx("li", {
    key: `${state.active}-feature--key${item.id}`
  }, PricingPolicy_jsx(external_react_icons_kit_["Icon"], {
    icon: checkmarkCircled_["checkmarkCircled"]
  }), " ", item.text)))), PricingPolicy_jsx("div", {
    className: "card-footer"
  }, PricingPolicy_jsx("strong", null, PricingPolicy_jsx("span", null, "$", item.price), " /", state.active), PricingPolicy_jsx(Button["a" /* default */], {
    title: item.price === 0 ? 'Start Free Trail' : 'Subscribe Now'
  }), item.trail ? PricingPolicy_jsx("div", {
    className: "trail"
  }, PricingPolicy_jsx(link_default.a, {
    href: item.trailLink
  }, PricingPolicy_jsx("a", null, "Or Start ", item.trail, " Days trail"))) : '')))))));
};

/* harmony default export */ var AppModern_PricingPolicy = (PricingPolicy);
// CONCATENATED MODULE: ./containers/AppModern/TeamPortfoilo/teamPortfolio.style.js


const teamPortfolio_style_SectionWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "teamPortfoliostyle__SectionWrapper",
  componentId: "sc-19mqogt-0"
})(["padding:175px 0 175px;overflow:hidden;@media only screen and (max-width:1440px){padding:175px 0 125px;}@media only screen and (max-width:1099px){padding:125px 0 125px;}@media only screen and (max-width:768px){padding:75px 0;}@media only screen and (max-width:480px){padding:75px 0 50px;}"]);
const teamPortfolio_style_ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "teamPortfoliostyle__ContentWrapper",
  componentId: "sc-19mqogt-1"
})(["display:flex;flex-wrap:wrap;align-items:center;@media only screen and (max-width:1099px){flex-direction:column;justify-content:center;}.image{width:calc(100% - 493px);display:flex;flex-wrap:wrap;position:relative;padding-bottom:100px;margin-right:100px;@media only screen and (max-width:1099px){width:100%;justify-content:space-around;margin-right:0;padding-bottom:70px;left:10%;}@media only screen and (max-width:768px){width:100%;margin-bottom:20px;left:8%;}@media only screen and (max-width:480px){left:0%;padding-bottom:20px;}.item_wrapper{position:absolute;cursor:pointer;@media only screen and (max-width:1099px){position:relative;width:33%;height:200px;}@media only screen and (max-width:480px){width:40%;}img{&:hover{box-shadow:0px 20px 57px 0px rgba(57,81,111,0.28);@media only screen and (max-width:1099px){box-shadow:none;}}}&:nth-child(1){top:-80px;right:0px;@media only screen and (max-width:1099px){top:auto;right:auto;}}&:nth-child(2){top:120px;right:150px;@media only screen and (max-width:1099px){top:auto;right:auto;}}&:nth-child(3){left:190px;top:140px;@media only screen and (max-width:1099px){top:auto;left:auto;}}&:nth-child(4){right:205px;top:-35px;@media only screen and (max-width:1099px){top:auto;right:auto;}}&:nth-child(5){top:-170px;right:180px;@media only screen and (max-width:1099px){top:auto;right:auto;}}&:nth-child(6){left:110px;top:-3px;@media only screen and (max-width:1099px){top:auto;left:auto;}}&:nth-child(7){top:-180px;left:155px;@media only screen and (max-width:1099px){top:auto;left:auto;}}.author_name{position:absolute;padding:20px;top:-59px;left:34px;background-color:rgb(209,57,124);box-shadow:0px 16px 57px 0px rgba(57,81,111,0.1);border-radius:28px 28px 28px 0;width:122%;text-align:center;opacity:0;transition:all 0.35s ease;font-size:16px;color:#fff;letter-spacing:-0.25px;font-weight:500;@media only screen and (max-width:1099px){width:auto;}@media only screen and (max-width:768px){padding:15px 30px;}&::before{content:'';width:0;height:0;border-style:solid;border-width:22px 19px 0 0;border-color:rgb(209,57,124) transparent transparent transparent;position:absolute;bottom:-22px;left:0;@media only screen and (max-width:1099px){bottom:-18px;}}}.imageWrapper{border-radius:50%;overflow:hidden;@media only screen and (max-width:1099px){border-radius:0;}}&.active{z-index:1;.author_name{opacity:1;}.imageWrapper{box-shadow:0px 20px 57px 0px rgba(57,81,111,0.18);@media only screen and (max-width:1099px){box-shadow:none;}}}&:hover{}}}.content{width:393px;@media only screen and (max-width:1099px){width:100%;}@media only screen and (max-width:991px){width:100%;}@media only screen and (max-width:768px){width:100%;margin-top:-60px;}h2{color:", ";font-size:36px;line-height:44px;font-weight:700;letter-spacing:-1px;padding-right:42px;margin-bottom:27px;@media only screen and (max-width:1366px){font-size:30px;line-height:42px;margin-bottom:20px;}@media only screen and (max-width:991px){font-size:26px;line-height:38px;}}p{font-size:16px;line-height:28px;color:#6e7379;margin-bottom:36px;@media only screen and (max-width:1366px){margin-bottom:30px;}}}.reusecore__button{border-radius:5px;&:hover{box-shadow:#d1397c 0px 12px 24px -10px;}}"], Object(external_styled_system_["themeGet"])('colors.headingColor', '#0F2137'));
/* harmony default export */ var teamPortfolio_style = (teamPortfolio_style_SectionWrapper);
// CONCATENATED MODULE: ./containers/AppModern/TeamPortfoilo/index.js
var TeamPortfoilo_jsx = external_react_default.a.createElement;










const TeamPortfoiloSection = () => {
  const {
    title,
    description,
    teammember
  } = teamportfolio;
  const {
    0: hover,
    1: setHover
  } = Object(external_react_["useState"])({
    active: 6 // active item when start

  });

  const handleMouseEnter = index => {
    setHover({
      active: index
    });
  };

  return TeamPortfoilo_jsx(teamPortfolio_style, {
    id: "team"
  }, TeamPortfoilo_jsx(Container["a" /* default */], null, TeamPortfoilo_jsx(teamPortfolio_style_ContentWrapper, null, TeamPortfoilo_jsx("div", {
    className: "image"
  }, teammember.map((item, index) => TeamPortfoilo_jsx(Fade_default.a, {
    up: true,
    key: index
  }, TeamPortfoilo_jsx("div", {
    className: `item_wrapper ${hover.active === index ? 'active' : ''}`,
    key: index,
    onMouseEnter: () => {
      setHover({
        active: index
      });
    },
    onMouseLeave: () => {
      setHover({
        active: index
      });
    }
  }, TeamPortfoilo_jsx("div", {
    className: "imageWrapper"
  }, TeamPortfoilo_jsx(Image["a" /* default */], {
    src: item.img,
    alt: item.text
  })), TeamPortfoilo_jsx(Text["a" /* default */], {
    className: "author_name",
    content: item.text
  }))))), TeamPortfoilo_jsx("div", {
    className: "content"
  }, TeamPortfoilo_jsx(Heading["a" /* default */], {
    content: title
  }), TeamPortfoilo_jsx(Text["a" /* default */], {
    content: description
  }), TeamPortfoilo_jsx(Button["a" /* default */], {
    title: "Learn More"
  })))));
};

/* harmony default export */ var TeamPortfoilo = (TeamPortfoiloSection);
// CONCATENATED MODULE: ./containers/AppModern/Testimonial/testimonial.style.js


const testimonial_style_SectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "testimonialstyle__SectionWrapper",
  componentId: "sc-1gk6pbe-0"
})(["padding:75px 0 125px;overflow:hidden;@media only screen and (max-width:1440px){padding:75px 0;}@media (max-width:1024px){padding:20px 0 50px;}@media only screen and (max-width:667px){padding:45px 0;}@media only screen and (max-width:480px){padding:10px 0;}"]);
const CarouselWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "testimonialstyle__CarouselWrapper",
  componentId: "sc-1gk6pbe-1"
})(["margin-top:-30px;margin-right:-33px;margin-bottom:-50px;.glide__slide{padding-top:30px;padding-right:33px;padding-bottom:50px;}.review-card{padding:37px 40px 40px;border-radius:5px;border:1px solid ", ";transition:all 0.3s ease;@media only screen and (max-width:480px){padding:25px 25px 30px;}&:hover{box-shadow:0 10px 50px rgba(38,78,118,0.1);}h3{color:", ";font-size:16px;line-height:33px;font-weight:700;margin-bottom:10px;}p{color:", ";font-size:18px;line-height:32px;font-weight:300;@media only screen and (max-width:667px){font-size:16px;line-height:30px;}}.card-footer{display:flex;align-items:center;margin-top:33px;@media only screen and (max-width:480px){align-items:flex-start;margin-top:30px;}.image{flex-shrink:0;img{width:50px;height:50px;border-radius:50%;object-fit:cover;box-shadow:0 6px 30px rgba(39,79,117,0.2);}}.reviewer-info{width:calc(100% - 50px);display:flex;align-items:center;justify-content:space-between;margin-left:19px;@media only screen and (max-width:480px){flex-direction:column;align-items:flex-start;justify-content:flex-start;}}.content{h4{font-size:16px;font-weight:500;margin:0 0 7px;color:", ";@media only screen and (max-width:480px){margin-bottom:3px;}}p{font-size:14px;line-height:24px;color:rgba(15,33,52,0.6);font-weight:400;margin:0;}}}.rating{flex-shrink:0;@media only screen and (max-width:480px){margin-top:2px;}i{margin-right:2px;&:last-child{margin-right:0;}@media only screen and (max-width:480px){svg{width:14px;height:auto;}}}.star{color:", ";}.star-o{color:", ";}}}.glide__controls{opacity:0;visibility:hidden;transition:all 0.3s ease;> div{position:absolute;top:calc(50% - 70px / 2);&.glide__prev--area{left:-24px;@media only screen and (max-width:480px){left:12px;}}&.glide__next--area{right:8px;@media only screen and (max-width:480px){right:46px;}}.reusecore__button{&:hover{box-shadow:", " 0px 12px 24px -10px;}}}}.glide{&:hover{.glide__controls{opacity:1;visibility:visible;}}}"], Object(external_styled_system_["themeGet"])('colors.lightBorder', '#F2F4F7'), Object(external_styled_system_["themeGet"])('colors.quoteText', '#343D48'), Object(external_styled_system_["themeGet"])('colors.quoteText', '#343D48'), Object(external_styled_system_["themeGet"])('colors.headingColor', '#0F2137'), Object(external_styled_system_["themeGet"])('colors.yellowHover', '#F6C416'), Object(external_styled_system_["themeGet"])('colors.gray', '#E4E4E4'), Object(external_styled_system_["themeGet"])('colors.primary', '#F6C416'));
/* harmony default export */ var testimonial_style = (testimonial_style_SectionWrapper);
// CONCATENATED MODULE: ./containers/AppModern/Testimonial/index.js
var Testimonial_jsx = external_react_default.a.createElement;














const Testimonial = () => {
  const {
    slogan,
    title,
    reviews
  } = testimonial;
  const glideOptions = {
    type: 'carousel',
    gap: 0,
    autoplay: 5000,
    perView: 2,
    animationDuration: 700,
    breakpoints: {
      991: {
        perView: 1
      }
    }
  };
  return Testimonial_jsx(testimonial_style, {
    id: "testimonial"
  }, Testimonial_jsx(Container["a" /* default */], null, Testimonial_jsx(SectionHeader, null, Testimonial_jsx(Fade_default.a, {
    up: true
  }, Testimonial_jsx(Heading["a" /* default */], {
    as: "h5",
    content: slogan
  }), Testimonial_jsx(Heading["a" /* default */], {
    content: title
  }))), Testimonial_jsx(CarouselWrapper, null, Testimonial_jsx(Fade_default.a, {
    up: true,
    delay: 100
  }, Testimonial_jsx(GlideCarousel["a" /* default */], {
    options: glideOptions,
    nextButton: Testimonial_jsx(Button["a" /* default */], {
      icon: Testimonial_jsx("i", {
        className: "flaticon-next"
      }),
      "aria-label": "Next",
      variant: "fab"
    }),
    prevButton: Testimonial_jsx(Button["a" /* default */], {
      icon: Testimonial_jsx("i", {
        className: "flaticon-left-arrow"
      }),
      "aria-label": "Prev",
      variant: "fab"
    })
  }, Testimonial_jsx(external_react_["Fragment"], null, reviews.map(item => Testimonial_jsx(glideSlide["a" /* default */], {
    key: `testimonial--key${item.id}`
  }, Testimonial_jsx("div", {
    className: "review-card"
  }, Testimonial_jsx(Heading["a" /* default */], {
    as: "h3",
    content: item.title
  }), Testimonial_jsx(Text["a" /* default */], {
    content: item.description
  }), Testimonial_jsx("div", {
    className: "card-footer"
  }, Testimonial_jsx("div", {
    className: "image"
  }, Testimonial_jsx(Image["a" /* default */], {
    src: item.avatar,
    alt: "Client Image"
  })), Testimonial_jsx("div", {
    className: "reviewer-info"
  }, Testimonial_jsx("div", {
    className: "content"
  }, Testimonial_jsx(Heading["a" /* default */], {
    as: "h4",
    content: item.name
  }), Testimonial_jsx(Text["a" /* default */], {
    content: item.designation
  })), Testimonial_jsx(Rating["a" /* default */], {
    rating: item.review
  }))))))))))));
};

/* harmony default export */ var AppModern_Testimonial = (Testimonial);
// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/components/Input/index.js + 1 modules
var Input = __webpack_require__("olOc");

// EXTERNAL MODULE: C:/Users/user/Downloads/Cnetric/Development/Dev1/Superprops/node_modules/common/src/assets/image/appModern/bottom.png
var bottom = __webpack_require__("d2eo");
var bottom_default = /*#__PURE__*/__webpack_require__.n(bottom);

// CONCATENATED MODULE: ./containers/AppModern/Newsletter/newsletter.style.js


const NewsletterWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "newsletterstyle__NewsletterWrapper",
  componentId: "srmciv-0"
})(["position:relative;background-image:url(", ");background-size:cover;background-position:center;background-repeat:no-repeat;padding:60px 80px;@media (max-width:1220px){padding:35px 40px;}@media (max-width:575px){padding:35px 20px;}.container{display:flex;align-items:center;justify-content:space-between;@media (max-width:990px){flex-wrap:wrap;justify-content:center;}}"], bottom_default.a);
const ContactFormWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "newsletterstyle__ContactFormWrapper",
  componentId: "srmciv-1"
})(["display:flex;align-items:flex-end;width:470px;max-width:100%;margin-left:auto;margin-right:auto;@media (max-width:1220px){width:420px;}@media (max-width:575px){width:100%;}@media (max-width:575px){flex-direction:column;align-items:center;margin-bottom:25px;button{width:100%;}}.email_input{flex-grow:1;margin-right:20px;@media (max-width:575px){width:100%;margin-right:0;margin-bottom:20px;}&.is-material{&.is-focus{label{font-size:14px;color:#fff;}.highlight{background:#fff;height:1px;}}}.highlight{background:rgba(255,255,255,0.4);}input{background:transparent;font-size:16px;font-weight:400;color:#fff;padding:10px 15px;border-color:#dadada;@media (max-width:575px){height:48px;}}label{font-size:17px;color:#fff;font-weight:400;padding-left:10px;top:5px;pointer-events:none;}}.reusecore__button{background-color:#ffffff;color:rgb(15,33,55);font-size:16px;letter-spacing:-0.1px;border-radius:5px;padding-left:16px;padding-right:16px;text-transform:capitalize;&:hover{box-shadow:#1e2a4a 0px 12px 24px -10px;}}"]);
/* harmony default export */ var newsletter_style = (NewsletterWrapper);
// CONCATENATED MODULE: ./containers/AppModern/Newsletter/index.js
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
  }), Newsletter_jsx(newsletter_style, null, Newsletter_jsx(Container["a" /* default */], null, Newsletter_jsx(Box["a" /* default */], textArea, Newsletter_jsx(Heading["a" /* default */], Newsletter_extends({
    content: "Subscribe our newsletter"
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
    zIndex: 1
  },
  buttonStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '700',
    pl: '30px',
    pr: '30px'
  }
};
/* harmony default export */ var AppModern_Newsletter = (Newsletter);
// CONCATENATED MODULE: ./containers/AppModern/Footer/footer.style.js


const FooterArea = external_styled_components_default.a.footer.withConfig({
  displayName: "footerstyle__FooterArea",
  componentId: "sc-1a7t3z-0"
})(["padding:96px 0 60px;background-color:", ";@media only screen and (max-width:1366px){padding-top:80px;}@media only screen and (max-width:667px){padding-top:80px;padding-bottom:50px;}.logo{img{width:128px;height:auto;}}"], Object(external_styled_system_["themeGet"])('colors.secondary', '#09142E'));
const WidgetArea = external_styled_components_default.a.div.withConfig({
  displayName: "footerstyle__WidgetArea",
  componentId: "sc-1a7t3z-1"
})(["display:flex;flex-wrap:wrap;max-width:1008px;width:100%;margin:0 auto;border-bottom:1px solid rgba(255,255,255,0.1);.col{width:calc(100% / 3);text-align:center;padding:0 21px;margin-bottom:50px;@media only screen and (max-width:991px){padding:0 15px;}@media only screen and (max-width:667px){width:calc(100% / 2);padding:0 20px;}@media only screen and (max-width:480px){width:100%;}img{display:inline-block;height:41px;width:auto;margin-bottom:27px;@media only screen and (max-width:1366px){height:35px;}@media only screen and (max-width:1366px){margin-bottom:20px;}}h3{color:", ";font-size:18px;line-height:24px;font-weight:500;@media only screen and (max-width:1366px){font-size:16px;line-height:20px;}@media only screen and (max-width:480px){font-size:18px;}}p{color:rgba(255,255,255,0.4);font-size:14px;line-height:24px;margin-bottom:0;@media only screen and (max-width:480px){font-size:15px;line-height:26px;}}}"], Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'));
const footer_style_MenuArea = external_styled_components_default.a.div.withConfig({
  displayName: "footerstyle__MenuArea",
  componentId: "sc-1a7t3z-2"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;padding-top:30px;@media only screen and (max-width:1366px){padding-top:50px;}> a{margin-right:0;}"]);
const Menu = external_styled_components_default.a.ul.withConfig({
  displayName: "footerstyle__Menu",
  componentId: "sc-1a7t3z-3"
})(["display:flex;align-items:center;justify-content:center;flex-wrap:wrap;margin-top:37px;margin-bottom:15px;@media only screen and (max-width:667px){margin-top:30px;}"]);
const MenuItem = external_styled_components_default.a.li.withConfig({
  displayName: "footerstyle__MenuItem",
  componentId: "sc-1a7t3z-4"
})(["margin:0 18px;@media only screen and (max-width:667px){margin:5px 15px;}a{color:", ";transition:all 0.3s ease;&:hover{color:rgba(255,255,255,0.7);}}"], Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'));
const CopyrightText = external_styled_components_default.a.p.withConfig({
  displayName: "footerstyle__CopyrightText",
  componentId: "sc-1a7t3z-5"
})(["color:rgba(255,255,255,0.5);margin-bottom:0;font-size:14px;"]);
/* harmony default export */ var footer_style = (FooterArea);
// CONCATENATED MODULE: ./containers/AppModern/Footer/index.js
var Footer_jsx = external_react_default.a.createElement;











const Footer = () => {
  const {
    logo,
    menu,
    widgets
  } = footer;
  const date = new Date();
  const year = date.getFullYear();
  return Footer_jsx(footer_style, null, Footer_jsx(Container["a" /* default */], null, Footer_jsx(WidgetArea, null, widgets.map(item => Footer_jsx(Box["a" /* default */], {
    className: "col",
    key: `footer-widget--key${item.id}`
  }, Footer_jsx(Image["a" /* default */], {
    src: item.icon,
    alt: item.title
  }), Footer_jsx(Heading["a" /* default */], {
    as: "h3",
    content: item.title
  }), Footer_jsx(Text["a" /* default */], {
    content: item.description
  })))), Footer_jsx(footer_style_MenuArea, null, Footer_jsx(Logo["a" /* default */], {
    className: "logo",
    href: "/appclassic",
    logoSrc: logo,
    title: "App Classic"
  }), Footer_jsx(Menu, null, menu.map(item => Footer_jsx(MenuItem, {
    key: `footer-link${item.id}`
  }, Footer_jsx(link_default.a, {
    href: item.link
  }, Footer_jsx("a", null, item.text))))), Footer_jsx(CopyrightText, null, "Copyright ", year, " By RedQ Inc"))));
};

/* harmony default export */ var AppModern_Footer = (Footer);
// CONCATENATED MODULE: ./pages/appmodern.js

var appmodern_jsx = external_react_default.a.createElement;


















/* harmony default export */ var appmodern = __webpack_exports__["default"] = (function () {
  return appmodern_jsx(external_styled_components_["ThemeProvider"], {
    theme: appModern["a" /* theme */]
  }, appmodern_jsx(external_react_default.a.Fragment, null, appmodern_jsx(head_default.a, null, appmodern_jsx("title", null, "App Modern | A next js landing page"), appmodern_jsx("meta", {
    name: "Description",
    content: "React next landing page"
  }), appmodern_jsx("meta", {
    name: "theme-color",
    content: "#2563FF"
  }), appmodern_jsx("meta", {
    name: "keywords",
    content: "React, React js, Next, Next js, Super fast next js landing, Modren landing, Next js landing"
  }), appmodern_jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Heebo:300,400,500,700&display=swap",
    rel: "stylesheet"
  })), appmodern_jsx(style["a" /* ResetCSS */], null), appmodern_jsx(appModern_style, null), appmodern_jsx(AppWrapper, null, appmodern_jsx(external_react_stickynode_default.a, {
    top: 0,
    innerZ: 9999,
    activeClass: "sticky-active"
  }, appmodern_jsx(AppModern_Navbar, null)), appmodern_jsx(ContentWrapper, null, appmodern_jsx(AppModern_Banner, null), appmodern_jsx(AppModern_Features, null), appmodern_jsx(AppModern_AppSlider, null), appmodern_jsx(Dashboard, null), appmodern_jsx(AppModern_Testimonial, null), appmodern_jsx(AppModern_ProductSlide, null), appmodern_jsx(AppModern_DesignedAndBuilt, null), appmodern_jsx(AppModern_PricingPolicy, null), appmodern_jsx(TeamPortfoilo, null), appmodern_jsx(AppModern_Newsletter, null)), appmodern_jsx(AppModern_Footer, null))));
});

/***/ }),

/***/ "sj/V":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/typicons/starOutline");

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

/***/ "uWPk":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yrGE":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })

/******/ });