"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

/**
 * Primary UI component for user interaction
 */
var Button = function Button(_ref) {
  var state = _ref.state,
      children = _ref.children,
      onClick = _ref.onClick,
      classes = _ref.classes;
  var classesToRender;

  switch (state) {
    case "primary":
      classesToRender = 'es--btn es--btn--primary';
      break;

    case "secondary":
      classesToRender = 'button-secondary';
      break;

    default:
      classesToRender = '';
  }

  classesToRender = "".concat(classesToRender, " ").concat(classes);
  return /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: classesToRender,
    onClick: onClick
  }, children || "Button");
};

exports.Button = Button;
Button.defaultProps = {
  classes: '',
  state: 'primary',
  onClick: function onClick() {
    return true;
  }
};