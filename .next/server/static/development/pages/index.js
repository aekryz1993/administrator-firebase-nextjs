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

/***/ "./auth/Login.js":
/*!***********************!*\
  !*** ./auth/Login.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Login = ({
  message,
  redirect,
  onSubmit,
  handleSubmit,
  loginRequestEnded
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    return () => {
      loginRequestEnded();
    };
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", {
    onSubmit: handleSubmit(onSubmit)
  }, __jsx(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "email",
    component: "input",
    placeholder: "email",
    type: "text",
    required: true
  }), __jsx(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "password",
    component: "input",
    placeholder: "Password",
    type: "password",
    required: true
  }), __jsx("input", {
    type: "submit",
    value: "Login"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./auth/LoginContainer.js":
/*!********************************!*\
  !*** ./auth/LoginContainer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login */ "./auth/Login.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/auth */ "./store/actions/auth.js");





const mapStateToProps = (state, ownProps) => {
  const {
    message,
    redirect
  } = state.loginReducer;
  return {
    message,
    redirect
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  loginRequestEnded: () => dispatch(Object(_store_actions_auth__WEBPACK_IMPORTED_MODULE_3__["loginRequestEnded"])()),
  loginRequest: (email, password) => dispatch(Object(_store_actions_auth__WEBPACK_IMPORTED_MODULE_3__["loginRequest"])(email, password))
});

const LoginContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
  form: 'login',
  onSubmit: (values, dispatch) => dispatch(Object(_store_actions_auth__WEBPACK_IMPORTED_MODULE_3__["loginRequest"])(values.email, values.password))
})(_Login__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (LoginContainer);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");
/* harmony import */ var _auth_LoginContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/LoginContainer */ "./auth/LoginContainer.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const login = ({
  user
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_auth_LoginContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    user: user
  }));
};

login.getInitialProps = async ctx => {
  return Object(_utils_auth__WEBPACK_IMPORTED_MODULE_1__["Loggedin"])(ctx);
};

/* harmony default export */ __webpack_exports__["default"] = (login);

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

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/*! exports provided: notLoggedin, Loggedin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notLoggedin", function() { return notLoggedin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loggedin", function() { return Loggedin; });
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


function notLoggedin(ctx) {
  const {
    token_id
  } = next_cookies__WEBPACK_IMPORTED_MODULE_0___default()(ctx);
  const user = ctx.req && ctx.req.session ? ctx.req.session.decodedToken : null;

  if (!user) {
    if (true) {
      ctx.res.writeHead(302, {
        Location: '/'
      });
      ctx.res.end();
    } else {}
  }

  return {
    user,
    token_id
  };
}
function Loggedin(ctx) {
  const {
    token_id
  } = next_cookies__WEBPACK_IMPORTED_MODULE_0___default()(ctx);
  const user = ctx.req && ctx.req.session ? ctx.req.session.decodedToken : null;

  if (user) {
    if (true) {
      // if(ctx.req && ctx.req.session) console.log(ctx.req.session.decodedToken.user)
      ctx.res.writeHead(302, {
        Location: '/dashboard/profile'
      });
      ctx.res.end();
    } else {}
  }

  return {
    user,
    token_id
  };
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/aekryzprobook/Desktop/next.js/administrator/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

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

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map