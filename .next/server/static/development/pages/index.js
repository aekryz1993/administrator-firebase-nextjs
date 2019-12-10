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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Login = ({
  message,
  redirect,
  onSubmit,
  handleSubmit,
  loginRequestEnded
}) => {
  // const Login = ({ message, redirect, loginRequest, loginRequestEnded }) => {
  // const [values, setValues] = useState({
  //   email: '',
  //   password: ''
  // }) 
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (message) console.log(message);
    return () => {
      loginRequestEnded();
    };
  }, []); // const onSubmit = (event) => {
  //   event.preventDefault()
  //   const { email, password } = values
  //   loginRequest(email, password)
  // }
  // const onChange = (event) => {
  //   setValues({ ...values, [event.target.name]: event.target.value })
  // }
  // const isInvalid =
  //   values.password === '' ||
  //   values.email === ''

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", {
    onSubmit: handleSubmit(onSubmit)
  }, __jsx(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "email",
    component: "input",
    placeholder: "email",
    type: "text",
    required: true
  }), __jsx(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
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

/***/ "./auth/Logout.js":
/*!************************!*\
  !*** ./auth/Logout.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Logout = ({
  message,
  redirect,
  logoutRequest,
  logoutRequestEnded,
  loginRequest
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (message) console.log(message);
    return () => {
      logoutRequestEnded();
    };
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("button", {
    onClick: logoutRequest
  }, "Logout"), __jsx("button", {
    onClick: loginRequest
  }, "Login"));
};

/* harmony default export */ __webpack_exports__["default"] = (Logout);

/***/ }),

/***/ "./auth/LogoutContainer.js":
/*!*********************************!*\
  !*** ./auth/LogoutContainer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logout */ "./auth/Logout.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/auth */ "./store/actions/auth.js");




const mapStateToProps = (state, ownProps) => {
  const {
    message,
    redirect
  } = state.logoutReducer;
  return {
    message,
    redirect
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logoutRequest: () => dispatch(Object(_store_actions_auth__WEBPACK_IMPORTED_MODULE_2__["logoutRequest"])()),
  loginRequest: () => dispatch(Object(_store_actions_auth__WEBPACK_IMPORTED_MODULE_2__["loginRequest"])()),
  logoutRequestEnded: () => dispatch(Object(_store_actions_auth__WEBPACK_IMPORTED_MODULE_2__["logoutRequestEnded"])())
});

const LogoutContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_Logout__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (LogoutContainer);

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! exports provided: firebase, firestore, auth, functions, database, storage, ProvideAuth, useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return firebase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firestore", function() { return firestore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "functions", function() { return functions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "database", function() { return database; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvideAuth", function() { return ProvideAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! firebase/database */ "firebase/database");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! firebase/functions */ "firebase/functions");
/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(firebase_functions__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }









 // import 'isomorphic-unfetch'


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
const firebase = firebase_app__WEBPACK_IMPORTED_MODULE_9__["apps"].length ? firebase_app__WEBPACK_IMPORTED_MODULE_9__["app"]() : firebase_app__WEBPACK_IMPORTED_MODULE_9__["initializeApp"](firebaseConfig);
const firestore = firebase_app__WEBPACK_IMPORTED_MODULE_9__["firestore"]();
const auth = firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]();
const functions = firebase_app__WEBPACK_IMPORTED_MODULE_9__["functions"]();
const database = firebase.database();
const storage = firebase.storage();
const authContext = Object(react__WEBPACK_IMPORTED_MODULE_8__["createContext"])();
function ProvideAuth({
  children
}) {
  const auth = useProvideAuth();
  return __jsx(authContext.Provider, {
    value: auth
  }, children);
}
const useAuth = () => {
  return Object(react__WEBPACK_IMPORTED_MODULE_8__["useContext"])(authContext);
};

function useProvideAuth() {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(null);
  const {
    0: uploadInfo,
    1: setUploadInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({
    progress: 0,
    url: ""
  }); // useEffect(() => {
  //   return () => {
  //     cleanup
  //   };
  // }, [input]);

  const signin = async (email, password) => {
    const loginAsAdmin = functions.httpsCallable('loginAsAdmin');
    const snapshot = await loginAsAdmin({
      email: email
    });
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default.a(async (resolve, reject) => {
      if (snapshot.data) {
        try {
          const response = await firebase.auth().signInWithEmailAndPassword(email, password);
          setUser(response.user); // const userApi = await axios.post('/api/login', {
          //   token: response.user.refreshToken
          //   // method: 'POST',
          //   // headers: new Headers({ 'Content-Type': 'application/json' }),
          //   // credentials: 'same-origin',
          //   // body: JSON.stringify({ token: response.user.refreshToken }),
          // })
          // console.log(userApi)

          js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.set('token', response.user.refreshToken);
          resolve('successful login');
        } catch (error) {
          reject('failed login');
        }
      } else {
        reject('failed login');
      }
    }); // loginAsAdmin({ email: email }).then(snapshot => {
    //   if (snapshot.data.admin) {
    //     return firebase
    //       .auth()
    //       .signInWithEmailAndPassword(email, password)
    //       .then(response => {
    //         setUser(response.user);
    //         Router.push('/dashboard/profile')
    //         cookie.set('token', response.user.refreshToken)
    //       })
    //       // .then(() => Router.push('/dashboard/profile'))
    //       // .then(() => console.log('rrrrrrrr'))
    //       // Router.push('/dashboard/profile')
    //       .catch((error) => error.message)
    //   } else {
    //     return 'Somthing went wrong'
    //   }
    // })
  };

  const signout = () => {
    return firebase.auth().signOut().then(() => js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.remove('token')).then(() => axios__WEBPACK_IMPORTED_MODULE_17___default.a.post('/api/logout')).then(() => next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/')).then(() => {
      setUser(false);
    });
  };

  const uploadImage = (userId, image) => {
    if (!image || !userId) return;
    const uploadTask = storage.ref(`images/profile/${userId}/${image.name}`).put(image);
    return uploadTask.on('state_changed', snapshot => {
      const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
      setUploadInfo(_objectSpread({}, uploadInfo, {
        progress
      }));
      console.log('Upload is ' + progress + '% done'); // switch (snapshot.state) {
      //   case firebase.storage.TaskState.PAUSED: // or 'paused'
      //     console.log('Upload is paused');
      //     break;
      //   case firebase.storage.TaskState.RUNNING: // or 'running'
      //     console.log('Upload is running');
      //     break;
      // }
      // resolve(progress)
    }, error => {
      // reject(error)
      console.log(error);
    } // () => {
    //   setTimeout(async () => {
    //     const thumbnail = await getPicProfileUrl(userId)
    //     // console.log(thumbnail)
    //     return thumbnail
    //   }, 5000)
    //   const url = await uploadTask.snapshot.ref.getDownloadURL()
    //   console.log(url)
    // }
    );
  };

  const updateProfile = uid => async (displayName, photoURL) => {
    const updateUserProfile = functions.httpsCallable('updateUserProfile');
    const snapshot = await updateUserProfile({
      uid: uid,
      displayName: displayName,
      photoURL: photoURL
    });
    console.log(snapshot);
    return snapshot;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase.auth().currentUser.getIdToken(
        /* forceRefresh */
        true).then(idToken => {
          axios__WEBPACK_IMPORTED_MODULE_17___default.a.post('/api/login', {
            token: idToken
          });
        });
        setUser(user);
      } else {
        setUser(false);
      }
    }); // Cleanup subscription on unmount

    return () => unsubscribe();
  }, []);
  return {
    firestore,
    user,
    signin,
    // signup,
    signout,
    uploadImage,
    updateProfile
  };
}

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
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/db */ "./lib/db.js");
/* harmony import */ var _auth_LoginContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/LoginContainer */ "./auth/LoginContainer.js");
/* harmony import */ var _auth_LogoutContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/LogoutContainer */ "./auth/LogoutContainer.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import Router from "next/router";
// import nextCookie from 'next-cookies'

 // import { Loggedin } from "../utils/auth";
// import Login from "../components/Login";
// import Profile from "../components/Profile";
// import { Router } from "next/router";


 // const index = ({token}) => {
//   const auth = useAuth();
//   const [Loggedin, setLoggedin] = useState(false)
//   useEffect(() => {
//     if (auth.user) {
//       setLoggedin(true)
//       Router.replace('/', '/dashboard/profile')
//     } else {
//       setLoggedin(false)
//       // Router.replace('/', '/login')
//     }
//   }, [Loggedin]);
//   if (auth.user || token) {
//     return (
//       <Profile />
//     )
//   } else if (!auth.user || !token) {
//     return (
//       <Login />
//     )
//   }
// }

const login = ({
  token,
  user
}) => {
  // const auth = useAuth()
  // if(token && auth.user) {
  // // if(token && token === auth.user.refreshToken) {
  //   return (
  //     <Profile/>
  //   )
  // }
  // return <Login user={user}/>
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_auth_LoginContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_auth_LogoutContainer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}; // login.getInitialProps = async (ctx) => {
//   return Loggedin(ctx)
// }


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

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/aekryzprobook/Desktop/next.js/administrator/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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