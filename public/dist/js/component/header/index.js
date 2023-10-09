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

/***/ "./src/component/header/index.js":
/*!***************************************!*\
  !*** ./src/component/header/index.js ***!
  \***************************************/
/***/ (() => {

eval("class Header {\n  static #height = null;\n  static #wrapper = null;\n  static #button = null;\n  static #isOpen = false;\n  static init() {\n    this.#wrapper = document.querySelector('.nav__wrapper');\n    this.#button = document.querySelector('#burgerButton');\n    this.#button.addEventListener('click', () => this.#toggle());\n  }\n  static #toggle() {\n    if (this.#isOpen) {\n      this.#button.classList.replace('nav__button--close', 'nav__button--open');\n      this.#wrapper.style.left = '-100%'; // Закриваємо бічне меню, змінюючи left на -100%\n      this.#wrapper.style.height = '100%';\n      document.body.style.overflow = 'auto'; // Дозволити прокручування\n    } else {\n      this.#button.classList.replace('nav__button--open', 'nav__button--close');\n      this.#wrapper.style.left = '0'; // Відкриваємо бічне меню, змінюючи left на 0\n      this.#wrapper.style.height = '100%';\n      this.#wrapper.style.position = 'fixed';\n      document.body.style.overflow = 'hidden'; // Заборонити прокручування\n    }\n\n    this.#isOpen = !this.#isOpen;\n  }\n}\ndocument.addEventListener('DOMContentLoaded', () => {\n  Header.init();\n});\n\n//# sourceURL=webpack://sass/./src/component/header/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/component/header/index.js"]();
/******/ 	
/******/ })()
;