"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiply = exports["default"] = exports.add = void 0;
var base = 100;
var add = exports.add = function add(x) {
  return base + x;
};
var multiply = exports.multiply = function multiply(x) {
  return base * x;
};
var getBase = function getBase() {
  return base;
};
var _default = exports["default"] = getBase;