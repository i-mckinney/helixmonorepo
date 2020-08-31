"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disabledButton = exports.coloredButton = exports.basicButton = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("."));

var _ThemeSelector = _interopRequireDefault(require("../../themes/ThemeSelector"));

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "MUIButton",
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var basicButton = function basicButton() {
  return /*#__PURE__*/_react["default"].createElement(_ThemeSelector["default"], null, /*#__PURE__*/_react["default"].createElement(_["default"], null, " Basic Button"));
};

exports.basicButton = basicButton;

var coloredButton = function coloredButton() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ThemeSelector["default"], null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    type: "primary"
  }, " Primary Button"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_["default"], {
    type: "secondary"
  }, " Secondary Button")));
};

exports.coloredButton = coloredButton;

var disabledButton = function disabledButton() {
  return /*#__PURE__*/_react["default"].createElement(_ThemeSelector["default"], null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    disabled: true
  }, " Primary Button"));
};

exports.disabledButton = disabledButton;