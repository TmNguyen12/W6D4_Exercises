/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

let DOMNodeCollection = __webpack_require__(1);

let elementList = document.querySelectorAll('ul');
let sections = document.querySelectorAll('div');

let elementArrList = Array.from(elementList);
let sectionsArr = Array.from(sections);

window.$l = function $l (selector) {
  if (selector instanceof HTMLElement) {
    let elArr = Array.from(selector);
    return new DOMNodeCollection(elArr);   // might need to return new class
  } else {
    let cssArr = Array.from(document.querySelectorAll(selector));
    return new DOMNodeCollection(cssArr);
  }
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
  }

  html(string) {
    if (string) {
      this.nodes.forEach(function(el) {
        el.innerHTML = string;
      });
    } else {
      return this.nodes[0].innerHTML;
    }
  }

  empty() {
    this.html(new String(""));
  }

  append(argument) {

  if (typeof argument === "string") {
    this.nodes.forEach(el => {
      el.innerHTML += argument;
    });
  } else if (argument.nodes[0]) {
      this.nodes.forEach( el => {
        argument.nodes.forEach( arg => {
          console.log(arg.outerHTML);
          console.log(el.innerHTML);
          el.innerHTML += (arg.outerHTML);
        });
      });
    } else {
      let newDOM = new DOMNodeCollection(argument);
      this.nodes.forEach( el => {
        newDOM.forEach( arg => {
          el.innerHTML += (arg.outerHTML);
        });
      });
    }
  }

}

module.exports = DOMNodeCollection;


/***/ })
/******/ ]);