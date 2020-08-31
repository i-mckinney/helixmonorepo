"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SampleHelixButton = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("."));

var _addonKnobs = require("@storybook/addon-knobs");

var _ThemeSelector = _interopRequireDefault(require("../../themes/ThemeSelector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "Helix Button",
  decorators: [_addonKnobs.withKnobs],
  component: _["default"],
  argTypes: {
    onClick: {
      action: 'clicked'
    }
  }
};
/**
 * 
 * HelixButton.stories.js contains this code. 
 * the index.js file that is in the same folder HelixButton is straight from our repo
 * this file is loading that code.
 * @title is the name of the component "Story" folder
 * @component needs to be set to the import component for the cool controls to populate
 * @ThemeSelector is this goofy way I figured out how to change themes on the components 
 * @decorator You have to add the decorator withKnobs for it to work.
 * 
 */

exports["default"] = _default;

var SampleHelixButton = function SampleHelixButton(args) {
  return /*#__PURE__*/_react["default"].createElement(_ThemeSelector["default"], null, /*#__PURE__*/_react["default"].createElement(_["default"], args));
};

exports.SampleHelixButton = SampleHelixButton;
SampleHelixButton.args = {
  variant: 'contained',
  size: 'medium',
  color: 'primary',
  text: 'Change Me'
};