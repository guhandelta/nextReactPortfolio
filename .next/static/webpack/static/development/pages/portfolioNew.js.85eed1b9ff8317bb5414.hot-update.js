webpackHotUpdate("static\\development\\pages\\portfolioNew.js",{

/***/ "./components/form/PortDate.js":
/*!*************************************!*\
  !*** ./components/form/PortDate.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PortDate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var PortDate =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PortDate, _React$Component);

  function PortDate(props) {
    var _this;

    _classCallCheck(this, PortDate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PortDate).call(this, props));
    _this.state = {
      dateValue: moment__WEBPACK_IMPORTED_MODULE_2___default()(),
      // Moment()=> current date
      isHidden: false
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PortDate, [{
    key: "handleChange",
    value: function handleChange(date) {
      var _this$props$form = this.props.form,
          setFieldValue = _this$props$form.setFieldValue,
          setFieldTouched = _this$props$form.setFieldTouched;
      var name = this.props.field.name;
      var formattedDate = date.format();
      this.setState({
        dateValue: date
      });
      setFieldValue(name, date, true);
      setFieldTouched(name, true, true);
    }
  }, {
    key: "toggleData",
    value: function toggleData(date) {
      var _this$props$form2 = this.props.form,
          setFieldValue = _this$props$form2.setFieldValue,
          setFieldTouched = _this$props$form2.setFieldTouched;
      var name = this.props.field.name;
      this.setState({
        isHidden: !this.state.isHidden
      });
      setFieldValue(name, date, true);
      setFieldTouched(name, true, true);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          canBeDisabled = _this$props.canBeDisabled,
          label = _this$props.label,
          field = _this$props.field,
          _this$props$form3 = _this$props.form,
          touched = _this$props$form3.touched,
          errors = _this$props$form3.errors;
      var _this$state = this.state,
          isHidden = _this$state.isHidden,
          dateValue = _this$state.dateValue;
      return (// The Moment Object will be assigned to the DatePicker, whenever some date is clicked => DatePicker will provide that object
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], null, label), !isHidden && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "input-control"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
          selected: dateValue,
          onChange: this.handleChange,
          peekNextMonth: true,
          showMonthDropdown: true,
          showYearDropdown: true,
          maxDate: moment__WEBPACK_IMPORTED_MODULE_2___default()(),
          dropdownMode: "select"
        })), canBeDisabled && !isHidden && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          onClick: function onClick() {
            return _this2.toggleData();
          }
        }, " Still Working Here..... ") //
        // Send undefined(empty params), to toggleData(), if the End Date is Hidden
        , canBeDisabled && isHidden && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " Still Working Here... "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          onClick: function onClick() {
            return _this2.toggleData(dateValue);
          }
        }, " Set End Date ")) // Send the Date specified in DatePicker, to toggleData(), if a date is specified
        , touched[field.name] && errors[field.name] && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "error"
        }, errors[field.name]))
      );
    }
  }]);

  return PortDate;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

})
//# sourceMappingURL=portfolioNew.js.85eed1b9ff8317bb5414.hot-update.js.map