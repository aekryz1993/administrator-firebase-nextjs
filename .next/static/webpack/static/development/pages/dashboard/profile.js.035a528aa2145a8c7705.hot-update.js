webpackHotUpdate("static/development/pages/dashboard/profile.js",{

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
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


function notLoggedin(ctx) {
  var _nextCookie = next_cookies__WEBPACK_IMPORTED_MODULE_0___default()(ctx),
      token = _nextCookie.token;

  if (ctx.req) console.log(ctx.req.body);

  if (!token) {
    if (false) {} else {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
    }
  }

  return {
    token: token
  };
}
function Loggedin(ctx) {
  var _nextCookie2 = next_cookies__WEBPACK_IMPORTED_MODULE_0___default()(ctx),
      token = _nextCookie2.token;

  if (ctx.req) console.log(ctx.req);

  if (token) {
    if (false) {} else {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/dashboard/profile');
    }
  }

  return {
    token: token
  };
}

/***/ })

})
//# sourceMappingURL=profile.js.035a528aa2145a8c7705.hot-update.js.map