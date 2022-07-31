module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Divider.tsx":
/*!********************************!*\
  !*** ./components/Divider.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Lucas\\Documents\\Programa\xE7\xE3o\\Clone-do-site-Rocketseat\\components\\Divider.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Divider = () => {
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    gridTemplateColumns: "1fr 1fr",
    columnGap: 12,
    opacity: 0.4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    marginTop: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    marginTop: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Divider);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Divider */ "./components/Divider.tsx");
var _jsxFileName = "C:\\Users\\Lucas\\Documents\\Programa\xE7\xE3o\\Clone-do-site-Rocketseat\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//import Head from 'next/head';


function Home() {
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    as: "main",
    height: "100vh",
    templateColumns: "1fr 480px 480px 1fr",
    templateRows: "1fr 480px 1fr",
    templateAreas: "\r '. . . .'\r '. logo form .'\r '. . . .'\r ",
    justifyContent: "center",
    alignItems: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    gridArea: "logo",
    flexDir: "column",
    alignItems: "flex-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/rocketseat.svg",
    alt: "Rocketseat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    size: "2xl",
    lineHeight: "shorter",
    marginTop: 16,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "Fa\xE7a seu login na plataforma")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    gridArea: "form",
    height: "100%",
    backgroundColor: "gray.700",
    borderRadius: "md",
    flexDir: "column",
    alignItems: "stretch",
    padding: 16,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    height: "50px",
    backgroundColor: "gray.800",
    focusBorderColor: "purple.500",
    borderRadius: "sm",
    placeholder: "E-mail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    height: "50px",
    backgroundColor: "gray.800",
    focusBorderColor: "purple.500",
    borderRadius: "sm",
    placeholder: "Senha",
    marginTop: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    alignSelf: "flex-start",
    marginTop: 2,
    fontSize: "sm",
    color: "purple.600",
    fontWeight: "bold",
    _hover: {
      color: 'purple.500'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Esqueci minha senha"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    marginTop: 6,
    backgroundColor: "purple.500",
    height: "50px",
    borderRadius: "sm",
    _hover: {
      backgroundColor: 'purple.600'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, "ENTRAR"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    textAlign: "center",
    fontSize: "sm",
    color: "gray.300",
    marginTop: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, "N\xE3o tem uma conta? ", "  ", __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    color: "purple.600",
    fontWeight: "bold",
    _hover: {
      color: 'purple.500'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, "Registre-se")), __jsx(_components_Divider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    alignItems: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, "Ou entre com"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    height: "50px",
    flex: "1",
    backgroundColor: "gray.600",
    marginLeft: 6,
    borderRadius: "sm",
    _hover: {
      backgroundColor: 'purple.500'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, "GITHUB"))));
}

/***/ }),

/***/ "@chakra-ui/core":
/*!**********************************!*\
  !*** external "@chakra-ui/core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/core");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EaXZpZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJEaXZpZGVyIiwiSG9tZSIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBOztBQUVBLE1BQU1BLE9BQWlCLEdBQUcsTUFBTTtFQUM5QixPQUNJLE1BQUMsb0RBQUQ7SUFDRSxtQkFBbUIsRUFBQyxTQUR0QjtJQUVFLFNBQVMsRUFBRSxFQUZi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SUFHRSxLQUFLLEVBQUMsVUFIUjtJQUlFLFNBQVMsRUFBRSxDQUpiO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsNkJBTXNCLElBTnRCLEVBT0UsTUFBQyxvREFBRDtJQUNFLEtBQUssRUFBQyxZQURSO0lBRUUsVUFBVSxFQUFDLE1BRmI7SUFHRSxNQUFNLEVBQUU7TUFBQ0QsS0FBSyxFQUFFO0lBQVIsQ0FIVjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGlCQVBGLENBM0NGLEVBMERFLE1BQUMsMkRBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQTFERixFQTJERSxNQUFDLG9EQUFEO0lBQ0UsVUFBVSxFQUFDLFFBRGI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUdFLE1BQUMsb0RBQUQ7SUFBTSxRQUFRLEVBQUMsSUFBZjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGtCQUhGLEVBSUUsTUFBQyxzREFBRDtJQUNFLE1BQU0sRUFBQyxNQURUO0lBRUUsSUFBSSxFQUFDLEdBRlA7SUFHRSxlQUFlLEVBQUMsVUFIbEI7SUFJRSxVQUFVLEVBQUUsQ0FKZDtJQUtFLFlBQVksRUFBQyxJQUxmO0lBTUUsTUFBTSxFQUFFO01BQUNDLGVBQWUsRUFBRTtJQUFsQixDQU5WO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsWUFKRixDQTNERixDQXRCRixDQURGO0FBb0dELEM7Ozs7Ozs7Ozs7O0FDekdELDRDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEaXZpZGVyIGFzIENoYWtyYURpdmlkZXIsIEdyaWQgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgRGl2aWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPEdyaWRcclxuICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zPVwiMWZyIDFmclwiXHJcbiAgICAgICAgY29sdW1uR2FwPXsxMn1cclxuICAgICAgICBvcGFjaXR5PXswLjR9XHJcbiAgICAgID5cclxuICAgICAgICAgIDxDaGFrcmFEaXZpZGVyIG1hcmdpblRvcD17Nn0gLz5cclxuICAgICAgICAgIDxDaGFrcmFEaXZpZGVyIG1hcmdpblRvcD17Nn0gLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpdmlkZXI7IiwiLy9pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBCdXR0b24sIEZsZXgsIEdyaWQsIEhlYWRpbmcsIElucHV0LCBMaW5rLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9EaXZpZGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkXHJcbiAgICAgIGFzPSBcIm1haW5cIlxyXG4gICAgICBoZWlnaHQ9IFwiMTAwdmhcIlxyXG4gICAgICB0ZW1wbGF0ZUNvbHVtbnM9IFwiMWZyIDQ4MHB4IDQ4MHB4IDFmclwiXHJcbiAgICAgIHRlbXBsYXRlUm93cz0gXCIxZnIgNDgwcHggMWZyXCJcclxuICAgICAgdGVtcGxhdGVBcmVhcz1cIlxyXG4gICAgICAgICcuIC4gLiAuJ1xyXG4gICAgICAgICcuIGxvZ28gZm9ybSAuJ1xyXG4gICAgICAgICcuIC4gLiAuJ1xyXG4gICAgICBcIlxyXG4gICAgICBqdXN0aWZ5Q29udGVudD0gXCJjZW50ZXJcIlxyXG4gICAgICBhbGlnbkl0ZW1zPSBcImNlbnRlclwiXHJcblxyXG4gICAgPlxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIGdyaWRBcmVhPVwibG9nb1wiXHJcbiAgICAgICAgZmxleERpcj1cImNvbHVtblwiXHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvcm9ja2V0c2VhdC5zdmdcIiBhbHQ9XCJSb2NrZXRzZWF0XCIvPlxyXG4gICAgICAgIDxIZWFkaW5nIHNpemU9XCIyeGxcIiBsaW5lSGVpZ2h0PVwic2hvcnRlclwiIG1hcmdpblRvcD17MTZ9PkZhw6dhIHNldSBsb2dpbiBuYSBwbGF0YWZvcm1hPC9IZWFkaW5nPlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICAgIDxGbGV4IFxyXG4gICAgICAgIGdyaWRBcmVhPVwiZm9ybVwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiZ3JheS43MDBcIlxyXG4gICAgICAgIGJvcmRlclJhZGl1cz1cIm1kXCJcclxuICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcclxuICAgICAgICBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiXHJcbiAgICAgICAgcGFkZGluZz17MTZ9XHJcbiAgICAgID5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiZ3JheS44MDBcIlxyXG4gICAgICAgICAgZm9jdXNCb3JkZXJDb2xvcj1cInB1cnBsZS41MDBcIlxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzPVwic21cIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFLW1haWxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cImdyYXkuODAwXCJcclxuICAgICAgICAgIGZvY3VzQm9yZGVyQ29sb3I9XCJwdXJwbGUuNTAwXCJcclxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cInNtXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VuaGFcIlxyXG4gICAgICAgICAgbWFyZ2luVG9wPXsyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgIGFsaWduU2VsZj1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgbWFyZ2luVG9wPXsyfVxyXG4gICAgICAgICAgZm9udFNpemU9XCJzbVwiXHJcbiAgICAgICAgICBjb2xvcj1cInB1cnBsZS42MDBcIlxyXG4gICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxyXG4gICAgICAgICAgX2hvdmVyPXt7Y29sb3I6ICdwdXJwbGUuNTAwJ319XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgRXNxdWVjaSBtaW5oYSBzZW5oYVxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBtYXJnaW5Ub3A9ezZ9XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJwdXJwbGUuNTAwXCJcclxuICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzPVwic21cIlxyXG4gICAgICAgICAgX2hvdmVyPXt7YmFja2dyb3VuZENvbG9yOiAncHVycGxlLjYwMCd9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEVOVFJBUlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxUZXh0XHJcbiAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgZm9udFNpemU9XCJzbVwiXHJcbiAgICAgICAgICBjb2xvcj1cImdyYXkuMzAwXCJcclxuICAgICAgICAgIG1hcmdpblRvcD17Nn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBOw6NvIHRlbSB1bWEgY29udGE/IHtcIiAgXCJ9XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBjb2xvcj1cInB1cnBsZS42MDBcIlxyXG4gICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXHJcbiAgICAgICAgICAgIF9ob3Zlcj17e2NvbG9yOiAncHVycGxlLjUwMCd9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBSZWdpc3RyZS1zZVxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8RGl2aWRlci8+XHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwic21cIj5PdSBlbnRyZSBjb208L1RleHQ+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxyXG4gICAgICAgICAgICBmbGV4PVwiMVwiXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cImdyYXkuNjAwXCJcclxuICAgICAgICAgICAgbWFyZ2luTGVmdD17Nn1cclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwic21cIlxyXG4gICAgICAgICAgICBfaG92ZXI9e3tiYWNrZ3JvdW5kQ29sb3I6ICdwdXJwbGUuNTAwJ319XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEdJVEhVQlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9