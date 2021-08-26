"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecondaryDark = exports.Secondary = exports.PrimaryDark = exports.Primary = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("./Button");

var _default = {
  title: 'components/Button',
  component: _Button.Button,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};
exports["default"] = _default;

var TemplateLight = function TemplateLight(args) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "theme--default"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, args));
};

var TemplateDark = function TemplateDark(args) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "theme--dark"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, args));
};

var Primary = TemplateLight.bind({});
exports.Primary = Primary;
Primary.args = {
  state: 'primary'
};
var PrimaryDark = TemplateDark.bind({});
exports.PrimaryDark = PrimaryDark;
PrimaryDark.args = {
  state: 'primary'
};
var Secondary = TemplateLight.bind({});
exports.Secondary = Secondary;
Secondary.args = {
  state: 'secondary'
};
var SecondaryDark = TemplateDark.bind({});
exports.SecondaryDark = SecondaryDark;
SecondaryDark.args = {
  state: 'secondary'
};