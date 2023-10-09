/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/component/scroll/index.js":
/*!***************************************!*\
  !*** ./src/component/scroll/index.js ***!
  \***************************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  window.buttonScroll = document.querySelector(\"#buttonScroll\");\n  if (window.buttonScroll) {\n    window.buttonScroll.onclick = () => {\n      window.scrollTo({\n        top: 0,\n        left: 0,\n        behavior: \"smooth\"\n      });\n    };\n    let isDisplay = false;\n    setInterval(() => {\n      if (window.scrollY > window.innerHeight && isDisplay === false) {\n        isDisplay = true;\n        window.buttonScroll.style.display = \"flex\";\n      }\n      if (window.scrollY <= window.innerHeight && isDisplay === true) {\n        isDisplay = false;\n        window.buttonScroll.style.display = \"none\";\n      }\n    }, 500);\n  }\n});\n\n//# sourceURL=webpack://sass/./src/component/scroll/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/component/scroll/index.js"]();
/******/ 	
/******/ })()
;