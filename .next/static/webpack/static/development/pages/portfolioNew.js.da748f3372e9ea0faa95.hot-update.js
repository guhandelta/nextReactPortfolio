webpackHotUpdate("static\\development\\pages\\portfolioNew.js",{

/***/ "./components/portfolios/PortfolioCreateForm.js":
/*!******************************************************!*\
  !*** ./components/portfolios/PortfolioCreateForm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
// Render Prop



var validateInputs = function validateInputs(validate) {
  var errors = {}; // if (!values.email) {
  //   errors.email = 'Required';
  // } else if (
  //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  // ) {
  //   errors.email = 'Invalid email address';
  // }

  return errors;
};

var INITIAL_VALUES = {
  title: '',
  company: '',
  location: '',
  position: '',
  descripition: '',
  startDate: '',
  endDate: ''
};

var PortfolioCreateForm = function PortfolioCreateForm() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: {
      email: '',
      password: ''
    },
    validate: validateInputs,
    onSubmit: function onSubmit(values, _ref) {
      var setSubmitting = _ref.setSubmitting;
      setTimeout(function () {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }
  }, function (_ref2) {
    var isSubmitting = _ref2.isSubmitting;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: ""
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Title: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      type: "text",
      name: "title"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
      name: "email",
      component: "div"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: ""
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Company: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      type: "text",
      name: "company"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
      name: "company",
      component: "div"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: ""
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Location: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      type: "text",
      name: "location"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
      name: "location",
      component: "div"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: ""
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Position: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      type: "text",
      name: "position"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
      name: "position",
      component: "div"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: ""
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Description: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      type: "textarea",
      name: "descripition"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
      name: "descripition",
      component: "div"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: ""
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Start Date: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      type: "date",
      name: "startDate"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
      name: "startDate",
      component: "div"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: ""
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "End Date: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      type: "date",
      name: "endDate"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
      name: "endDate",
      component: "div"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      disabled: isSubmitting
    }, "Create"));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PortfolioCreateForm);

/***/ })

})
//# sourceMappingURL=portfolioNew.js.da748f3372e9ea0faa95.hot-update.js.map