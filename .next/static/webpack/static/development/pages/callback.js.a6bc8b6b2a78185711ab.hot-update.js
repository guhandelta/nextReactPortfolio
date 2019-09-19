webpackHotUpdate("static\\development\\pages\\callback.js",{

/***/ "./services/auth0.js":
/*!***************************!*\
  !*** ./services/auth0.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Auth0 =
/*#__PURE__*/
function () {
  function Auth0() {
    _classCallCheck(this, Auth0);

    this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_0__["default"].WebAuth({
      domain: 'guhaprasaanth.auth0.com',
      clientID: 'pcZ8trYSuvn2qMqE720lSdIPaBQPSHLE',
      // ClienID from Auth0
      redirectUri: 'http://localhost:4000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });
    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  _createClass(Auth0, [{
    key: "handleAuthentication",
    value: function handleAuthentication() {
      var _this = this;

      debugger;
      return new Promise(function (resolve, reject) {
        _this.auth0.parseHash(function (err, authResult) {
          //parseHash() will parse the hash in the url and returns authResult
          // using the authResult returned by parseHash, it can be determined if the user is logged in or not
          if (authResult && authResult.accessToken && authResult.idToken) {
            _this.setSession(authResult);

            resolve();
          } else if (err) {
            reject(err);
            console.log(err);
          }
        });
      });
    }
  }, {
    key: "setSession",
    value: function setSession(authResult) {
      debugger; // Set the Token expiration time

      var expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime()); // localStorage.setItem('access_token', authResult.accessToken);

      Cookies.set('user', authResult.idTokenPayload);
      Cookies.set('jwt', authResult.idToken);
      Cookies.set('expiresAt', expiresAt);
    }
  }, {
    key: "login",
    value: function login() {
      this.auth0.authorize();
    }
  }]);

  return Auth0;
}();

var auth0Client = new Auth0();
/* harmony default export */ __webpack_exports__["default"] = (auth0Client);

/***/ })

})
//# sourceMappingURL=callback.js.a6bc8b6b2a78185711ab.hot-update.js.map