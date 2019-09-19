webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./services/auth0.js":
/*!***************************!*\
  !*** ./services/auth0.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Auth0 =
/*#__PURE__*/
function () {
  function Auth0() {
    _classCallCheck(this, Auth0);

    this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_1__["default"].WebAuth({
      domain: 'guhaprasaanth.auth0.com',
      clientID: 'pcZ8trYSuvn2qMqE720lSdIPaBQPSHLE',
      // ClienID from Auth0
      redirectUri: 'http://localhost:4000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });
    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.logout = this.logout.bind(this);
  }

  _createClass(Auth0, [{
    key: "handleAuthentication",
    value: function handleAuthentication() {
      var _this = this;

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
      // Set the Token expiration time
      var expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime()); // localStorage.setItem('access_token', authResult.accessToken);

      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('user', authResult.idTokenPayload);
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('jwt', authResult.idToken);
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('expiresAt', expiresAt);
    }
  }, {
    key: "logout",
    value: function logout() {
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('user');
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('jwt');
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('expiresAt');
      this.auth0.logout({
        returnTo: '',
        clientID: 'pcZ8trYSuvn2qMqE720lSdIPaBQPSHLE'
      });
    }
  }, {
    key: "login",
    value: function login() {
      this.auth0.authorize();
    }
  }, {
    key: "getJWKS",
    value: function () {
      var _getJWKS = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, jwks;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('https://guhaprasaanth.auth0.com/.well-known/jwks.json');

              case 2:
                res = _context.sent;
                // get req to this endpoint to get JWKS
                jwks = res.data;
                return _context.abrupt("return", jwks);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getJWKS() {
        return _getJWKS.apply(this, arguments);
      }

      return getJWKS;
    }()
  }, {
    key: "verifyToken",
    value: function () {
      var _verifyToken = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(token) {
        var decodedToken, jwks, jwk, cert, verifiedToken, expiresAt;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!token) {
                  _context2.next = 21;
                  break;
                }

                // JWKS => JSON Web Key -> set of public keys that are used to verify JWT, 
                //- issued by authorization server(Auth0 in this application) and signed using the RS256 
                decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.decode(token, {
                  complete: true
                }); // The property, complete should be specified to access the header of the token

                _context2.next = 4;
                return this.getJWKS();

              case 4:
                jwks = _context2.sent;
                // returns array(object)) of keys
                console.log(jwks);
                jwk = jwks.keys[0];
                console.log(jwk); // Build Certificate

                cert = jwk.x5c[0]; // Extracting the certificate

                cert = cert.match(/.{1,64}/g).join('\n'); // THe RegEx will create an array of strings, 64char long, 
                // which is later joined with a new line

                cert = "-----BEGIN CERTIFICATE-----\n".concat(cert, "\n-----END CERTIFICATE-----\n"); // Compare the kid(Key ID) property of the token and the public key

                if (!(jwk.kid === decodedToken.header.kid)) {
                  _context2.next = 21;
                  break;
                }

                _context2.prev = 12;
                verifiedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.verify(token, cert);
                expiresAt = verifiedToken.exp * 1000; // If a decoded token exists && current time is < expiresAt

                return _context2.abrupt("return", verifiedToken && new Date().getTime() < expiresAt ? verifiedToken : undefined);

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](12);
                return _context2.abrupt("return", undefined);

              case 21:
                return _context2.abrupt("return", undefined);

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[12, 18]]);
      }));

      function verifyToken(_x) {
        return _verifyToken.apply(this, arguments);
      }

      return verifyToken;
    }()
  }, {
    key: "clientAuth",
    value: function () {
      var _clientAuth = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var token, verifiedToken;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                debugger;
                token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.getJSON('jwt');
                _context3.next = 4;
                return this.verifyToken(token);

              case 4:
                verifiedToken = _context3.sent;
                return _context3.abrupt("return", verifiedToken);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function clientAuth() {
        return _clientAuth.apply(this, arguments);
      }

      return clientAuth;
    }()
  }, {
    key: "serverAuth",
    value: function () {
      var _serverAuth = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(req) {
        var tokenCookie, token, verifiedToken;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!req.headers.cookie) {
                  _context4.next = 10;
                  break;
                }

                tokenCookie = req.headers.cookie.split(';').find(function (c) {
                  return c.trim().startsWith('jwt');
                });

                if (tokenCookie) {
                  _context4.next = 4;
                  break;
                }

                return _context4.abrupt("return", undefined);

              case 4:
                ; // Return undefined if the expiresAtCookie is not available

                token = tokenCookie.split('=')[1]; // split() => returns array of expiresAt text, where 2nd value'[1]' is date

                _context4.next = 8;
                return this.verifyToken(token);

              case 8:
                verifiedToken = _context4.sent;
                return _context4.abrupt("return", verifiedToken);

              case 10:
                return _context4.abrupt("return", undefined);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function serverAuth(_x2) {
        return _serverAuth.apply(this, arguments);
      }

      return serverAuth;
    }()
  }]);

  return Auth0;
}();

var auth0Client = new Auth0();
/* harmony default export */ __webpack_exports__["default"] = (auth0Client);

/***/ })

})
//# sourceMappingURL=index.js.db1b5fe2a3efbec6af86.hot-update.js.map