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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./auth/apis-auth.js":
/*!***************************!*\
  !*** ./auth/apis-auth.js ***!
  \***************************/
/*! exports provided: login, assignCheckSession, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignCheckSession", function() { return assignCheckSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/db */ "./lib/db.js");



 // ******************* Login ***************************

const login = async (email, password) => {
  const loginAsAdmin = _lib_db__WEBPACK_IMPORTED_MODULE_3__["functions"].httpsCallable('loginAsAdmin');
  const snapshot = await loginAsAdmin({
    email: email
  });
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(async (resolve, reject) => {
    try {
      if (snapshot.data) {
        try {
          const response = await _lib_db__WEBPACK_IMPORTED_MODULE_3__["firebase"].auth().signInWithEmailAndPassword(email, password);
          js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('token_id', response.user.refreshToken);
          resolve({
            message: 'successful login'
          });
        } catch (error) {
          reject({
            message: error.message
          });
        }
      }
    } catch (error) {
      reject({
        message: error.message
      });
    }
  });
}; // ******************* Assign & check session ***************************

const assignCheckSession = () => _lib_db__WEBPACK_IMPORTED_MODULE_3__["firebase"].auth().onAuthStateChanged(user => {
  if (user) {
    return _lib_db__WEBPACK_IMPORTED_MODULE_3__["firebase"].auth().currentUser.getIdToken(
    /* forceRefresh */
    true).then(idToken => {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/login', {
        token: idToken,
        authUser: user
      });
    });
  }

  return;
}); // ******************* Logout ***************************

const logout = () => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(async (resolve, reject) => {
    try {
      await _lib_db__WEBPACK_IMPORTED_MODULE_3__["firebase"].auth().signOut();
      await js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('token_id');
      await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/logout');
      resolve({
        message: 'Successful logout'
      });
    } catch (error) {
      reject({
        message: 'Failed logout'
      });
    }
  });
};

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stylesheet_variables_color_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stylesheet/variables/color.css */ "./stylesheet/variables/color.css");
/* harmony import */ var _stylesheet_variables_color_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stylesheet_variables_color_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stylesheet_base_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stylesheet/base/index.css */ "./stylesheet/base/index.css");
/* harmony import */ var _stylesheet_base_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stylesheet_base_index_css__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = props => {
  return __jsx("div", {
    className: _stylesheet_base_index_css__WEBPACK_IMPORTED_MODULE_3___default.a.html
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Administrator"), __jsx("meta", {
    charSet: "utf-8"
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  })), __jsx("div", {
    className: _stylesheet_base_index_css__WEBPACK_IMPORTED_MODULE_3___default.a.body
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./containers/landingPage/api-landingPage.js":
/*!***************************************************!*\
  !*** ./containers/landingPage/api-landingPage.js ***!
  \***************************************************/
/*! exports provided: edit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit", function() { return edit; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/db */ "./lib/db.js");


const edit = (section, value) => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
    try {
      _lib_db__WEBPACK_IMPORTED_MODULE_1__["database"].ref(section().ref).set({
        [section().value]: value
      });
      resolve({
        message: 'successfully changed'
      });
    } catch (error) {
      reject({
        error: error.message
      });
    }
  });
};

/***/ }),

/***/ "./containers/landingPage/section1/sec1-api.js":
/*!*****************************************************!*\
  !*** ./containers/landingPage/section1/sec1-api.js ***!
  \*****************************************************/
/*! exports provided: changeTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTitle", function() { return changeTitle; });
const changeTitle = () => {
  return {
    ref: 'landingPage/section1',
    value: 'title'
  };
};

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! exports provided: firebase, firestore, auth, functions, database, storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return firebase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firestore", function() { return firestore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "functions", function() { return functions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "database", function() { return database; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ "firebase/database");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/functions */ "firebase/functions");
/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_functions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_5__);






const firebaseConfig = {
  apiKey: "AIzaSyDVMi7NlxqkkjZlekhLIVusNroPUQ75zq8",
  authDomain: "digital-proton-255319.firebaseapp.com",
  databaseURL: "https://digital-proton-255319.firebaseio.com",
  projectId: "digital-proton-255319",
  storageBucket: "digital-proton-255319.appspot.com",
  messagingSenderId: "1069152850600",
  appId: "1:1069152850600:web:e21d3819e0d87b9c48289d",
  measurementId: "G-1T2YHP7HWX"
};
const firebase = firebase_app__WEBPACK_IMPORTED_MODULE_0__["apps"].length ? firebase_app__WEBPACK_IMPORTED_MODULE_0__["app"]() : firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"](firebaseConfig);
const firestore = firebase_app__WEBPACK_IMPORTED_MODULE_0__["firestore"]();
const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"]();
const functions = firebase_app__WEBPACK_IMPORTED_MODULE_0__["functions"]();
const database = firebase.database();
const storage = firebase.storage();

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
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
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


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

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      Component,
      ctx
    } = _ref;
    var pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/index */ "./store/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _auth_apis_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/apis-auth */ "./auth/apis-auth.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_3___default.a {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "unsubscribe", null);
  }

  static async getInitialProps({
    Component,
    ctx
  }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return {
      pageProps
    };
  }

  componentDidMount() {
    this.unsubscribe = Object(_auth_apis_auth__WEBPACK_IMPORTED_MODULE_7__["assignCheckSession"])();
  }

  componentDidUpdate() {
    this.unsubscribe = Object(_auth_apis_auth__WEBPACK_IMPORTED_MODULE_7__["assignCheckSession"])();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
      store: store
    }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx(Component, pageProps)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default()(_store_index__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp));

/***/ }),

/***/ "./store/actionTypes/auth.js":
/*!***********************************!*\
  !*** ./store/actionTypes/auth.js ***!
  \***********************************/
/*! exports provided: LOGIN_REQUEST, LOGIN_SUCCEED, LOGIN_FAILED, LOGIN_REQUEST_ENDED, LOGOUT_REQUEST, LOGOUT_REQUEST_SUCCED, LOGOUT_REQUEST_FAILED, LOGOUT_REQUEST_ENDED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_REQUEST", function() { return LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCEED", function() { return LOGIN_SUCCEED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAILED", function() { return LOGIN_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_REQUEST_ENDED", function() { return LOGIN_REQUEST_ENDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_REQUEST", function() { return LOGOUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_REQUEST_SUCCED", function() { return LOGOUT_REQUEST_SUCCED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_REQUEST_FAILED", function() { return LOGOUT_REQUEST_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_REQUEST_ENDED", function() { return LOGOUT_REQUEST_ENDED; });
// Login
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCEED = 'LOGIN_SUCCEED';
const LOGIN_FAILED = 'LOGIN_FAILED';
const LOGIN_REQUEST_ENDED = 'LOGIN_REQUEST_ENDED'; // Logout

const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
const LOGOUT_REQUEST_SUCCED = 'LOGOUT_REQUEST_SUCCED';
const LOGOUT_REQUEST_FAILED = 'LOGOUT_REQUEST_FAILED';
const LOGOUT_REQUEST_ENDED = 'LOGOUT_REQUEST_ENDED';

/***/ }),

/***/ "./store/actionTypes/landingPage.js":
/*!******************************************!*\
  !*** ./store/actionTypes/landingPage.js ***!
  \******************************************/
/*! exports provided: FETCH_REQUEST, FETCH_REQUEST_SUCCED, FETCH_REQUEST_FAILED, FETCH_REQUEST_ENDED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_REQUEST", function() { return FETCH_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_REQUEST_SUCCED", function() { return FETCH_REQUEST_SUCCED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_REQUEST_FAILED", function() { return FETCH_REQUEST_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_REQUEST_ENDED", function() { return FETCH_REQUEST_ENDED; });
// Fetch from database
const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_REQUEST_SUCCED = 'FETCH_REQUEST_SUCCED';
const FETCH_REQUEST_FAILED = 'FETCH_REQUEST_FAILED';
const FETCH_REQUEST_ENDED = 'FETCH_REQUEST_ENDED';

/***/ }),

/***/ "./store/actionTypes/userSession.js":
/*!******************************************!*\
  !*** ./store/actionTypes/userSession.js ***!
  \******************************************/
/*! exports provided: FETCH_USERSESSION, FETCH_USERSESSION_SUCCED, FETCH_USERSESSION_FAILED, FETCH_USERSESSION_ENDED, UPDATE_USERSESSION, UPDATE_USERSESSION_SUCCED, UPDATE_USERSESSION_FAILED, UPDATE_USERSESSION_ENDED, UPLOAD_PROFILE_PICTURE, UPLOAD_PROFILE_PICTURE_SUCCED, UPLOAD_PROFILE_PICTURE_FAILED, UPLOAD_PROFILE_PICTURE_ENDED, START_LISTEN_PICTURE_CHANGE, LISTENING_PICTURE_CHANGE, STOP_LISTEN_PICTURE_CHANGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERSESSION", function() { return FETCH_USERSESSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERSESSION_SUCCED", function() { return FETCH_USERSESSION_SUCCED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERSESSION_FAILED", function() { return FETCH_USERSESSION_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERSESSION_ENDED", function() { return FETCH_USERSESSION_ENDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USERSESSION", function() { return UPDATE_USERSESSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USERSESSION_SUCCED", function() { return UPDATE_USERSESSION_SUCCED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USERSESSION_FAILED", function() { return UPDATE_USERSESSION_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USERSESSION_ENDED", function() { return UPDATE_USERSESSION_ENDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_PROFILE_PICTURE", function() { return UPLOAD_PROFILE_PICTURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_PROFILE_PICTURE_SUCCED", function() { return UPLOAD_PROFILE_PICTURE_SUCCED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_PROFILE_PICTURE_FAILED", function() { return UPLOAD_PROFILE_PICTURE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_PROFILE_PICTURE_ENDED", function() { return UPLOAD_PROFILE_PICTURE_ENDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_LISTEN_PICTURE_CHANGE", function() { return START_LISTEN_PICTURE_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LISTENING_PICTURE_CHANGE", function() { return LISTENING_PICTURE_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_LISTEN_PICTURE_CHANGE", function() { return STOP_LISTEN_PICTURE_CHANGE; });
// fetch userSession
const FETCH_USERSESSION = 'FETCH_USERSESSION';
const FETCH_USERSESSION_SUCCED = 'FETCH_USERSESSION_SUCCED';
const FETCH_USERSESSION_FAILED = 'FETCH_USERSESSION_FAILED';
const FETCH_USERSESSION_ENDED = 'FETCH_USERSESSION_ENDED'; // update userSession

const UPDATE_USERSESSION = 'UPDATE_USERSESSION';
const UPDATE_USERSESSION_SUCCED = 'UPDATE_USERSESSION_SUCCED';
const UPDATE_USERSESSION_FAILED = 'UPDATE_USERSESSION_FAILED';
const UPDATE_USERSESSION_ENDED = 'UPDATE_USERSESSION_ENDED'; // Upload profile picture

const UPLOAD_PROFILE_PICTURE = 'UPLOAD_PROFILE_PICTURE';
const UPLOAD_PROFILE_PICTURE_SUCCED = 'UPLOAD_PROFILE_PICTURE_SUCCED';
const UPLOAD_PROFILE_PICTURE_FAILED = 'UPLOAD_PROFILE_PICTURE_FAILED';
const UPLOAD_PROFILE_PICTURE_ENDED = 'UPLOAD_PROFILE_PICTURE_ENDED'; // Listen picture change

const START_LISTEN_PICTURE_CHANGE = 'START_LISTEN_PICTURE_CHANGE';
const LISTENING_PICTURE_CHANGE = 'LISTENING_PICTURE_CHANGE';
const STOP_LISTEN_PICTURE_CHANGE = 'STOP_LISTEN_PICTURE_CHANGE';

/***/ }),

/***/ "./store/actions/auth.js":
/*!*******************************!*\
  !*** ./store/actions/auth.js ***!
  \*******************************/
/*! exports provided: loginRequest, loginSucced, loginFailed, loginRequestEnded, logoutRequest, succedLogout, failedLogout, logoutRequestEnded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequest", function() { return loginRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSucced", function() { return loginSucced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFailed", function() { return loginFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestEnded", function() { return loginRequestEnded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequest", function() { return logoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "succedLogout", function() { return succedLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failedLogout", function() { return failedLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestEnded", function() { return logoutRequestEnded; });
/* harmony import */ var _actionTypes_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/auth */ "./store/actionTypes/auth.js");

 // *************** Login **********************

const loginRequest = (email, password) => {
  return {
    type: _actionTypes_auth__WEBPACK_IMPORTED_MODULE_0__["LOGIN_REQUEST"],
    payload: {
      email: email,
      password: password
    }
  };
};
const loginSucced = response => {
  return {
    type: _actionTypes_auth__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCEED"],
    payload: {
      message: response.message,
      error: null
    }
  };
};
const loginFailed = error => {
  return {
    type: _actionTypes_auth__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FAILED"],
    payload: {
      message: null,
      error: error.message
    }
  };
};
const loginRequestEnded = () => ({
  type: _actionTypes_auth__WEBPACK_IMPORTED_MODULE_0__["LOGIN_REQUEST_ENDED"]
}); // *************** Logout **********************

const logoutRequest = () => ({
  type: _actionTypes_auth__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_REQUEST"]
});
const succedLogout = payload => ({
  type: _actionTypes_auth__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_REQUEST_SUCCED"],
  payload: {
    message: payload.message
  }
});
const failedLogout = payload => ({
  type: _actionTypes_auth__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_REQUEST_FAILED"],
  payload: {
    error: payload.message
  }
});
const logoutRequestEnded = () => ({
  type: _actionTypes_auth__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_REQUEST_ENDED"]
});

/***/ }),

/***/ "./store/actions/landingPage.js":
/*!**************************************!*\
  !*** ./store/actions/landingPage.js ***!
  \**************************************/
/*! exports provided: startFetchRequest, successedFetchRequest, failedFetchRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startFetchRequest", function() { return startFetchRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successedFetchRequest", function() { return successedFetchRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failedFetchRequest", function() { return failedFetchRequest; });
/* harmony import */ var _actionTypes_landingPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/landingPage */ "./store/actionTypes/landingPage.js");

const startFetchRequest = title => ({
  type: _actionTypes_landingPage__WEBPACK_IMPORTED_MODULE_0__["FETCH_REQUEST"],
  payload: {
    title: title
  }
});
const successedFetchRequest = response => ({
  type: _actionTypes_landingPage__WEBPACK_IMPORTED_MODULE_0__["FETCH_REQUEST_SUCCED"],
  payload: {
    message: response.message
  }
});
const failedFetchRequest = response => ({
  type: _actionTypes_landingPage__WEBPACK_IMPORTED_MODULE_0__["FETCH_REQUEST_FAILED"],
  payload: {
    message: response.error
  }
});

/***/ }),

/***/ "./store/actions/userSession.js":
/*!**************************************!*\
  !*** ./store/actions/userSession.js ***!
  \**************************************/
/*! exports provided: startFetchCurrentUser, succedFetch, failedFetch, fetchUserFinished, startUpdateCurrentUser, succedUpdate, failedUpdate, updateFinished, startListenPictureChange, listeningPictureChange, stopListenPictureChange, uploadProfilePicture, successedUploadProfilePicture, failedUploadProfilePicture, uploadProfilePictureFinished */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startFetchCurrentUser", function() { return startFetchCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "succedFetch", function() { return succedFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failedFetch", function() { return failedFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserFinished", function() { return fetchUserFinished; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startUpdateCurrentUser", function() { return startUpdateCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "succedUpdate", function() { return succedUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failedUpdate", function() { return failedUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFinished", function() { return updateFinished; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startListenPictureChange", function() { return startListenPictureChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listeningPictureChange", function() { return listeningPictureChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopListenPictureChange", function() { return stopListenPictureChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadProfilePicture", function() { return uploadProfilePicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successedUploadProfilePicture", function() { return successedUploadProfilePicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failedUploadProfilePicture", function() { return failedUploadProfilePicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadProfilePictureFinished", function() { return uploadProfilePictureFinished; });
/* harmony import */ var _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes/userSession */ "./store/actionTypes/userSession.js");
 // *************** Fetch **********************

const startFetchCurrentUser = () => ({
  type: _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_0__["FETCH_USERSESSION"]
});
const succedFetch = response => ({
  type: _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_0__["FETCH_USERSESSION_SUCCED"],
  payload: {
    authUser: response.authUser,
    message: response.message
  }
});
const failedFetch = response => ({
  type: _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_0__["FETCH_USERSESSION_FAILED"],
  payload: {
    error: response.error
  }
});
const fetchUserFinished = () => ({
  type: _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_0__["FETCH_USERSESSION_ENDED"]
}); // *************** Update **********************

const startUpdateCurrentUser = uid => (displayName, photoURL) => ({
  type: _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_0__["UPDATE_USERSESSION"],
  payload: {
    uid: uid,
    displayName: displayName,
    photoURL: photoURL
  }
});
const succedUpdate = response => ({
  type: _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_0__["UPDATE_USERSESSION_SUCCED"],
  payload: {
    message: response.message
  }
});
const failedUpdate = response => ({
  type: _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_0__["UPDATE_USERSESSION_FAILED"],
  payload: {
    error: response.error
  }
});
const updateFinished = () => ({
  type: _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_0__["UPDATE_USERSESSION_ENDED"]
}); // listen to picture change

const startListenPictureChange = uid => (fields, setFields, setPictureURL) => ({
  type: _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_0__["START_LISTEN_PICTURE_CHANGE"],
  payload: {
    uid: uid,
    fields: fields,
    setFields: setFields,
    setPictureURL: setPictureURL
  }
});
const listeningPictureChange = () => ({
  type: _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_0__["LISTENING_PICTURE_CHANGE"],
  payload: {
    message: 'Start listening'
  }
});
const stopListenPictureChange = () => ({
  type: _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_0__["STOP_LISTEN_PICTURE_CHANGE"],
  payload: {
    message: 'Stop listening'
  }
}); // Upload profile picture

const uploadProfilePicture = (uid, picture) => (fields, setFields) => ({
  type: _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_0__["UPLOAD_PROFILE_PICTURE"],
  payload: {
    uid: uid,
    picture: picture,
    fields: fields,
    setFields: setFields
  }
});
const successedUploadProfilePicture = payload => ({
  type: _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_0__["UPLOAD_PROFILE_PICTURE_SUCCED"],
  payload: {
    message: payload.message,
    uid: payload.uid,
    fields: payload.fields,
    setFields: payload.setFields
  }
});
const failedUploadProfilePicture = payload => ({
  type: _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_0__["UPLOAD_PROFILE_PICTURE_FAILED"],
  payload: {
    message: payload.error
  }
});
const uploadProfilePictureFinished = payload => ({
  type: _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_0__["UPLOAD_PROFILE_PICTURE_ENDED"]
});

/***/ }),

/***/ "./store/epics/auth.js":
/*!*****************************!*\
  !*** ./store/epics/auth.js ***!
  \*****************************/
/*! exports provided: loginEpic, logoutEpic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginEpic", function() { return loginEpic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutEpic", function() { return logoutEpic; });
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-observable */ "redux-observable");
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/auth */ "./store/actions/auth.js");
/* harmony import */ var _actionTypes_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actionTypes/auth */ "./store/actionTypes/auth.js");
/* harmony import */ var _auth_apis_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/apis-auth */ "./auth/apis-auth.js");






 // ******************* Login ****************************

const loginEpic = action$ => action$.pipe(Object(redux_observable__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actionTypes_auth__WEBPACK_IMPORTED_MODULE_5__["LOGIN_REQUEST"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(action => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(Object(_auth_apis_auth__WEBPACK_IMPORTED_MODULE_6__["login"])(action.payload.email, action.payload.password)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => Object(_actions_auth__WEBPACK_IMPORTED_MODULE_4__["loginSucced"])(response)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/dashboard/profile')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_4__["loginFailed"])(error)))))); // ******************* Logout ****************************

const logoutEpic = action$ => action$.pipe(Object(redux_observable__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actionTypes_auth__WEBPACK_IMPORTED_MODULE_5__["LOGOUT_REQUEST"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(Object(_auth_apis_auth__WEBPACK_IMPORTED_MODULE_6__["logout"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => Object(_actions_auth__WEBPACK_IMPORTED_MODULE_4__["succedLogout"])(response)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => Object(_actions_auth__WEBPACK_IMPORTED_MODULE_4__["failedLogout"])(error)))));

/***/ }),

/***/ "./store/epics/index.js":
/*!******************************!*\
  !*** ./store/epics/index.js ***!
  \******************************/
/*! exports provided: rootEpic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootEpic", function() { return rootEpic; });
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-observable */ "redux-observable");
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./store/epics/auth.js");
/* harmony import */ var _userSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userSession */ "./store/epics/userSession.js");
/* harmony import */ var _landingPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landingPage */ "./store/epics/landingPage.js");




const rootEpic = Object(redux_observable__WEBPACK_IMPORTED_MODULE_0__["combineEpics"])(_auth__WEBPACK_IMPORTED_MODULE_1__["loginEpic"], _auth__WEBPACK_IMPORTED_MODULE_1__["logoutEpic"], _userSession__WEBPACK_IMPORTED_MODULE_2__["uploadPictureProfileEpic"], _userSession__WEBPACK_IMPORTED_MODULE_2__["listenPictureChangeEpic"], _userSession__WEBPACK_IMPORTED_MODULE_2__["updateUserSessionEpic"], _userSession__WEBPACK_IMPORTED_MODULE_2__["fetchUserSessionEpic"], _landingPage__WEBPACK_IMPORTED_MODULE_3__["editLandingPageEpic"]);

/***/ }),

/***/ "./store/epics/landingPage.js":
/*!************************************!*\
  !*** ./store/epics/landingPage.js ***!
  \************************************/
/*! exports provided: editLandingPageEpic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editLandingPageEpic", function() { return editLandingPageEpic; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-observable */ "redux-observable");
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_observable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actionTypes_landingPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actionTypes/landingPage */ "./store/actionTypes/landingPage.js");
/* harmony import */ var _containers_landingPage_section1_sec1_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../containers/landingPage/section1/sec1-api */ "./containers/landingPage/section1/sec1-api.js");
/* harmony import */ var _actions_landingPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/landingPage */ "./store/actions/landingPage.js");
/* harmony import */ var _containers_landingPage_api_landingPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../containers/landingPage/api-landingPage */ "./containers/landingPage/api-landingPage.js");






 // ************** fetch userSession **************************

const editLandingPageEpic = action$ => action$.pipe(Object(redux_observable__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actionTypes_landingPage__WEBPACK_IMPORTED_MODULE_3__["FETCH_REQUEST"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(action => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(Object(_containers_landingPage_api_landingPage__WEBPACK_IMPORTED_MODULE_6__["edit"])(_containers_landingPage_section1_sec1_api__WEBPACK_IMPORTED_MODULE_4__["changeTitle"], action.payload.title)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => Object(_actions_landingPage__WEBPACK_IMPORTED_MODULE_5__["successedFetchRequest"])(response)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(response => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(_actions_landingPage__WEBPACK_IMPORTED_MODULE_5__["failedFetchRequest"])(response))))));

/***/ }),

/***/ "./store/epics/userSession.js":
/*!************************************!*\
  !*** ./store/epics/userSession.js ***!
  \************************************/
/*! exports provided: fetchUserSessionEpic, uploadPictureProfileEpic, listenPictureChangeEpic, updateUserSessionEpic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserSessionEpic", function() { return fetchUserSessionEpic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadPictureProfileEpic", function() { return uploadPictureProfileEpic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenPictureChangeEpic", function() { return listenPictureChangeEpic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserSessionEpic", function() { return updateUserSessionEpic; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-observable */ "redux-observable");
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_observable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actionTypes/userSession */ "./store/actionTypes/userSession.js");
/* harmony import */ var _userSession_apis_userSession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../userSession/apis-userSession */ "./userSession/apis-userSession.js");
/* harmony import */ var _actions_userSession__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/userSession */ "./store/actions/userSession.js");





 // ************** fetch userSession **************************

const fetchUserSessionEpic = action$ => action$.pipe(Object(redux_observable__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actionTypes_userSession__WEBPACK_IMPORTED_MODULE_3__["FETCH_USERSESSION"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(Object(_userSession_apis_userSession__WEBPACK_IMPORTED_MODULE_4__["fetchUserSession"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => Object(_actions_userSession__WEBPACK_IMPORTED_MODULE_5__["succedFetch"])(response)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(response => Object(_actions_userSession__WEBPACK_IMPORTED_MODULE_5__["failedFetch"])(response))))); // ************** Upload picture profile *********************

const uploadPictureProfileEpic = action$ => action$.pipe(Object(redux_observable__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actionTypes_userSession__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_PROFILE_PICTURE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(action => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(Object(_userSession_apis_userSession__WEBPACK_IMPORTED_MODULE_4__["uploadPicture"])(action.payload.uid, action.payload.picture)(action.payload.fields, action.payload.setFields)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => Object(_actions_userSession__WEBPACK_IMPORTED_MODULE_5__["successedUploadProfilePicture"])(response)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(_actions_userSession__WEBPACK_IMPORTED_MODULE_5__["failedUploadProfilePicture"])(error)))))); // ************** listen to picture profile change *********************

const listenPictureChangeEpic = action$ => action$.pipe(Object(redux_observable__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actionTypes_userSession__WEBPACK_IMPORTED_MODULE_3__["START_LISTEN_PICTURE_CHANGE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(action => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(_userSession_apis_userSession__WEBPACK_IMPORTED_MODULE_4__["listenPictureChange"])(action.payload.uid)(action.payload.fields, action.payload.setFields, action.payload.setPictureURL)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(() => Object(_actions_userSession__WEBPACK_IMPORTED_MODULE_5__["stopListenPictureChange"])())))); // ************** Update profile userSession *********************

const updateUserSessionEpic = action$ => action$.pipe(Object(redux_observable__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actionTypes_userSession__WEBPACK_IMPORTED_MODULE_3__["UPDATE_USERSESSION"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(action => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(Object(_userSession_apis_userSession__WEBPACK_IMPORTED_MODULE_4__["updateProfile"])(action.payload.uid)(action.payload.displayName, action.payload.photoURL)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => Object(_actions_userSession__WEBPACK_IMPORTED_MODULE_5__["succedUpdate"])(response)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(response => Object(_actions_userSession__WEBPACK_IMPORTED_MODULE_5__["failedUpdate"])(response)))));

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-observable */ "redux-observable");
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_observable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/index */ "./store/reducers/index.js");
/* harmony import */ var _epics_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./epics/index */ "./store/epics/index.js");







function initStore(initialState) {
  const epicMiddleware = Object(redux_observable__WEBPACK_IMPORTED_MODULE_2__["createEpicMiddleware"])();
  const logger = Object(redux_logger__WEBPACK_IMPORTED_MODULE_1__["createLogger"])({
    collapsed: true
  }); // log every action to see what's happening behind the scenes.

  const reduxMiddleware = Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(epicMiddleware, logger);
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_5__["default"], initialState, reduxMiddleware);
  const epic$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](_epics_index__WEBPACK_IMPORTED_MODULE_6__["rootEpic"]);

  const hotReloadingEpic = (...args) => epic$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(epic => epic(...args)));

  epicMiddleware.run(hotReloadingEpic);

  if (false) {}

  return store;
}

/***/ }),

/***/ "./store/reducers/auth.js":
/*!********************************!*\
  !*** ./store/reducers/auth.js ***!
  \********************************/
/*! exports provided: loginReducer, logoutReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginReducer", function() { return loginReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutReducer", function() { return logoutReducer; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _actionTypes_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actionTypes/auth */ "./store/actionTypes/auth.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



const loginReducer = (state = {
  redirect: false
}, action) => {
  switch (action.type) {
    case _actionTypes_auth__WEBPACK_IMPORTED_MODULE_7__["LOGIN_SUCCEED"]:
      return _objectSpread({}, state, {
        message: action.payload.message,
        redirect: true
      });

    case _actionTypes_auth__WEBPACK_IMPORTED_MODULE_7__["LOGIN_FAILED"]:
      return _objectSpread({}, state, {
        message: action.payload.error,
        redirect: false
      });

    default:
      return state;
  }
};
const logoutReducer = (state = {
  redirect: false
}, action) => {
  switch (action.type) {
    case _actionTypes_auth__WEBPACK_IMPORTED_MODULE_7__["LOGOUT_REQUEST_SUCCED"]:
      return _objectSpread({}, state, {
        message: action.payload.message,
        redirect: true
      });

    case _actionTypes_auth__WEBPACK_IMPORTED_MODULE_7__["LOGOUT_REQUEST_FAILED"]:
      return _objectSpread({}, state, {
        message: action.payload.error,
        redirect: false
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _userSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userSession */ "./store/reducers/userSession.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth */ "./store/reducers/auth.js");
/* harmony import */ var _actionTypes_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actionTypes/auth */ "./store/actionTypes/auth.js");
/* harmony import */ var _landingPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landingPage */ "./store/reducers/landingPage.js");
/* harmony import */ var _actionTypes_landingPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actionTypes/landingPage */ "./store/actionTypes/landingPage.js");







const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  loginReducer: _auth__WEBPACK_IMPORTED_MODULE_3__["loginReducer"],
  logoutReducer: _auth__WEBPACK_IMPORTED_MODULE_3__["logoutReducer"],
  userSessionReducer: _userSession__WEBPACK_IMPORTED_MODULE_2__["userSessionReducer"],
  updateUserSessionReducer: _userSession__WEBPACK_IMPORTED_MODULE_2__["updateUserSessionReducer"],
  uploadPictureProfileReducer: _userSession__WEBPACK_IMPORTED_MODULE_2__["uploadPictureProfileReducer"],
  listenPictureChangeReducer: _userSession__WEBPACK_IMPORTED_MODULE_2__["listenPictureChangeReducer"],
  editLandingPageReducer: _landingPage__WEBPACK_IMPORTED_MODULE_5__["editLandingPageReducer"],
  form: redux_form__WEBPACK_IMPORTED_MODULE_1__["reducer"].plugin({
    login: (state, action) => {
      switch (action.type) {
        case _actionTypes_auth__WEBPACK_IMPORTED_MODULE_4__["LOGIN_REQUEST"]:
          return undefined;

        default:
          return state;
      }
    },
    editLandingPage: (state, action) => {
      switch (action.type) {
        case _actionTypes_landingPage__WEBPACK_IMPORTED_MODULE_6__["FETCH_REQUEST"]:
          return undefined;

        default:
          return state;
      }
    }
  })
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./store/reducers/landingPage.js":
/*!***************************************!*\
  !*** ./store/reducers/landingPage.js ***!
  \***************************************/
/*! exports provided: editLandingPageReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editLandingPageReducer", function() { return editLandingPageReducer; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _actionTypes_landingPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actionTypes/landingPage */ "./store/actionTypes/landingPage.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

 // ********************* edit *************************

const editLandingPageReducer = (state = {}, action) => {
  switch (action.type) {
    case _actionTypes_landingPage__WEBPACK_IMPORTED_MODULE_7__["FETCH_REQUEST_SUCCED"]:
      return _objectSpread({}, state, {
        authUser: action.payload.authUser,
        message: action.payload.message
      });

    case _actionTypes_landingPage__WEBPACK_IMPORTED_MODULE_7__["FETCH_REQUEST_FAILED"]:
      return _objectSpread({}, state, {
        message: action.payload.error
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./store/reducers/userSession.js":
/*!***************************************!*\
  !*** ./store/reducers/userSession.js ***!
  \***************************************/
/*! exports provided: userSessionReducer, updateUserSessionReducer, listenPictureChangeReducer, uploadPictureProfileReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSessionReducer", function() { return userSessionReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserSessionReducer", function() { return updateUserSessionReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenPictureChangeReducer", function() { return listenPictureChangeReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadPictureProfileReducer", function() { return uploadPictureProfileReducer; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actionTypes/userSession */ "./store/actionTypes/userSession.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

 // ********************* Fetch *************************

const userSessionReducer = (state = {}, action) => {
  switch (action.type) {
    case _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_7__["FETCH_USERSESSION_SUCCED"]:
      return _objectSpread({}, state, {
        authUser: action.payload.authUser,
        message: action.payload.message
      });

    case _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_7__["FETCH_USERSESSION_FAILED"]:
      return _objectSpread({}, state, {
        message: action.payload.error
      });

    default:
      return state;
  }
}; // ********************* Update *************************

const updateUserSessionReducer = (state = {}, action) => {
  switch (action.type) {
    case _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_7__["UPDATE_USERSESSION_SUCCED"]:
      return _objectSpread({}, state, {
        message: action.payload.message
      });

    case _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_7__["UPDATE_USERSESSION_FAILED"]:
      return _objectSpread({}, state, {
        message: action.payload.error
      });

    default:
      return state;
  }
}; // ********************* Listen to picture change *************************

const listenPictureChangeReducer = (state = {
  listen: false
}, action) => {
  switch (action.type) {
    case _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_7__["START_LISTEN_PICTURE_CHANGE"]:
      return _objectSpread({}, state, {
        listen: true
      });

    case _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_7__["STOP_LISTEN_PICTURE_CHANGE"]:
      return _objectSpread({}, state, {
        listen: false
      });

    default:
      return state;
  }
}; // ********************* Upload profile picture *************************

const uploadPictureProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_7__["UPLOAD_PROFILE_PICTURE_SUCCED"]:
      return _objectSpread({}, state, {
        message: action.payload.message
      });

    case _actionTypes_userSession__WEBPACK_IMPORTED_MODULE_7__["UPLOAD_PROFILE_PICTURE_FAILED"]:
      return _objectSpread({}, state, {
        message: action.payload.error
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./stylesheet/base/index.css":
/*!***********************************!*\
  !*** ./stylesheet/base/index.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"html": "html___2Gxku",
	"body": "body___1YN3-"
};

/***/ }),

/***/ "./stylesheet/variables/color.css":
/*!****************************************!*\
  !*** ./stylesheet/variables/color.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./userSession/apis-userSession.js":
/*!*****************************************!*\
  !*** ./userSession/apis-userSession.js ***!
  \*****************************************/
/*! exports provided: fetchUserSession, updateProfile, uploadPicture, listenPictureChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserSession", function() { return fetchUserSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfile", function() { return updateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadPicture", function() { return uploadPicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenPictureChange", function() { return listenPictureChange; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/db */ "./lib/db.js");









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

// import axios from "axios";

 // *************** Fetch userSession **********************

const fetchUserSession = () => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default.a((resolve, reject) => {
    try {
      const authUser = _lib_db__WEBPACK_IMPORTED_MODULE_8__["firebase"].auth().currentUser;

      if (user) {
        resolve({
          authUser: authUser,
          message: 'successful fetch'
        });
      } else {
        reject({
          error: 'there is not user'
        });
      }
    } catch (error) {
      reject({
        error: 'fetch user failed'
      });
    }
  });
}; // *************** updateProfile **************************

const updateProfile = uid => (displayName, photoURL) => {
  if (!uid || !displayName || !photoURL) return;
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default.a(async (resolve, reject) => {
    try {
      const updateUserProfile = _lib_db__WEBPACK_IMPORTED_MODULE_8__["functions"].httpsCallable('updateUserProfile');
      await updateUserProfile({
        uid: uid,
        displayName: displayName,
        photoURL: photoURL
      }); // await axios.post('/api/user', {
      //   uid: uid
      // })

      resolve({
        message: 'Profile has been successfully updated'
      });
    } catch (error) {
      reject({
        error: 'update profile has been failed'
      });
    }
  });
}; // *************** UploadPicture **************************

const uploadPicture = (userId, picture) => (fields, setFields) => {
  if (!picture || !userId) return;
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default.a((resolve, reject) => {
    try {
      const uploadTask = _lib_db__WEBPACK_IMPORTED_MODULE_8__["storage"].ref(`images/profile/${userId}/${picture.name}`).put(picture);
      return uploadTask.on('state_changed', snapshot => {
        const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
        setFields(_objectSpread({}, fields, {
          progress: progress
        }));
        if (progress === 100) setFields(_objectSpread({}, fields, {
          progress: 0
        }));
      }, error => {
        console.log(error);
        reject({
          error: 'Failed to upload'
        });
      }, () => {
        resolve({
          message: 'successfully uploaded',
          uid: userId,
          fields: fields,
          setFields: setFields
        });
        setFields(_objectSpread({}, fields, {
          listenPicChange: true
        }));
      });
    } catch (error) {
      console.log(error);
      reject({
        error: 'Failed to upload'
      });
    }
  });
}; // ****************** listen picture change *************************

const listenPictureChange = userId => (fields, setFields, setPictureURL) => {
  const profilePictures = _lib_db__WEBPACK_IMPORTED_MODULE_8__["database"].ref('profilePictures');
  const photoProfileURLs = profilePictures.child(`'photoProfileURLs'/${userId}`);
  return photoProfileURLs.on('value', snapshot => {
    setFields(_objectSpread({}, fields, {
      listenPicChange: false
    }));
    setPictureURL(snapshot.val().thumbnail);
  });
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/database");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "firebase/functions":
/*!*************************************!*\
  !*** external "firebase/functions" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/functions");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-observable":
/*!***********************************!*\
  !*** external "redux-observable" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-observable");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map