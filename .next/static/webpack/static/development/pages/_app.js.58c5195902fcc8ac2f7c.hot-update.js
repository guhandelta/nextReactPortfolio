webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./helper/utils.js":
/*!*************************!*\
  !*** ./helper/utils.js ***!
  \*************************/
/*! exports provided: getCookieFromReq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookieFromReq", function() { return getCookieFromReq; });
var getCookieFromReq = function getCookieFromReq(req, cookieKey) {
  var cookie = req.headers.cookie.split(';').find(function (c) {
    return c.trim().startsWith("".concat(cookieKey, "="));
  });

  if (!cookie) {
    return undefined;
  }

  ; // Return undefined if the expiresAtCookie is not available

  return cookie.split('=')[1]; // split() => returns array of expiresAt text, where 2nd value'[1]' is date
};

/***/ })

})
//# sourceMappingURL=_app.js.58c5195902fcc8ac2f7c.hot-update.js.map