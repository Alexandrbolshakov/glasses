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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nconst isMobile = {\r\n    Android: function(){\r\n        return navigator.userAgent.match(/Android/i);\r\n    },\r\n    BlackBerry: function(){\r\n        return navigator.userAgent.match(/BlackBerry/i);\r\n    },\r\n    iOS: function(){\r\n        return navigator.userAgent.match(/iPhone|iPad|iPod/i);\r\n    },\r\n    Opera: function(){\r\n        return navigator.userAgent.match(/Opera Mini/i);\r\n    },\r\n    Windows: function(){\r\n        return navigator.userAgent.match(/IEMobile/i);\r\n    },\r\n    any: function(){\r\n        return(\r\n            isMobile.Android() ||\r\n            isMobile.BlackBerry() ||\r\n            isMobile.iOS() ||\r\n            isMobile.Opera() ||\r\n            isMobile.Windows()\r\n        );\r\n    }\r\n}\r\n\r\nconst menuBody = document.querySelector(\".menu__body\");\r\n\r\nif(isMobile.any()){\r\n    document.body.classList.add(\"_touch\");\r\n\r\n    const menuArrows = document.querySelectorAll(\".menu__arrow\");\r\n    if(menuArrows.length>0){\r\n        menuArrows.forEach(arrow=>{\r\n            arrow.addEventListener(\"click\", (e)=>{\r\n                arrow.parentElement.classList.toggle(\"_active\");\r\n            });\r\n        });\r\n    }\r\n}else{\r\n    document.body.classList.add(\"_pc\");\r\n}\r\n\r\n// прокрутка\r\n\r\nconst menuLinks = document.querySelectorAll(\".menu__link[data-goto]\");\r\n\r\nif(menuLinks.length>0){\r\n    menuLinks.forEach(link=>{\r\n        link.addEventListener('click', onMenuLinkClick);\r\n    });\r\n\r\n    function onMenuLinkClick(e){\r\n        const menuLink = e.target;\r\n        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){\r\n            const gotoBlock = document.querySelector(menuLink.dataset.goto);\r\n            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector(\"header\").offsetHeight;\r\n        \r\n            if(iconMenu.classList.contains(\"_active\")){\r\n                document.body.classList.remove(\"_lock\")\r\n                iconMenu.classList.remove(\"_active\");\r\n                menuBody.classList.remove(\"_active\");\r\n            }\r\n\r\n            window.scrollTo({\r\n                top: gotoBlockValue,\r\n                behavior: \"smooth\"\r\n            });\r\n            e.preventDefault();\r\n        }\r\n    }\r\n}\r\n\r\n// menu burger\r\n\r\nconst iconMenu = document.querySelector(\".menu__icon\");\r\n// if(iconMenu){\r\n//     iconMenu.addEventListener(\"click\", (e)=>{\r\n//         document.body.classList.toggle(\"_lock\")\r\n//         iconMenu.classList.toggle(\"_active\");\r\n//         menuBody.classList.toggle(\"_active\");\r\n//     });\r\n// }\r\n\r\nfunction burgerToggle(menu, mBody){\r\n    if(menu){\r\n        menu.addEventListener(\"click\", (e)=>{\r\n            document.body.classList.toggle(\"_lock\")\r\n            menu.classList.toggle(\"_active\");\r\n            mBody.classList.toggle(\"_active\");\r\n        });\r\n    }\r\n}\r\n\r\nconst subIconMenu = document.querySelector(\".menu__icon-sub\");\r\nconst subMenuBody = document.querySelector(\".menu__body-sub\");\r\nburgerToggle(subIconMenu, subMenuBody);\r\nburgerToggle(iconMenu, menuBody);\r\n\r\nconst swiper = new Swiper('.swiper-container', {\r\n    // Optional parameters\r\n    direction: 'horizontal',\r\n    loop: true,\r\n  \r\n  \r\n    // Navigation arrows\r\n    navigation: {\r\n      nextEl: '.swiper-button-next',\r\n      prevEl: '.swiper-button-prev',\r\n    },\r\n  \r\n   \r\n  });\r\n\r\nconst asideSlides = document.querySelectorAll(\".aside__slide\");\r\nconst dots = document.querySelectorAll(\".aside__dot\");\r\n\r\nfunction clearAll(){\r\n    asideSlides.forEach(slide=>{\r\n        slide.classList.remove(\"active\");\r\n    });\r\n    dots.forEach(dot=>{\r\n        dot.classList.remove(\"active\");\r\n    });\r\n}\r\n\r\nfunction showAll(i){\r\n    asideSlides[i].classList.add(\"active\");\r\n    dots[i].classList.add(\"active\");\r\n}\r\n\r\nclearAll();\r\nshowAll(0);\r\n\r\ndots.forEach((dot, i)=>{\r\n    dot.addEventListener(\"click\", ()=>{\r\n        clearAll();\r\n        showAll(i);\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });