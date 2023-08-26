"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.Group = exports.Ellipse = exports.Circle = exports.Rect = exports.Polygon = exports.Line = exports.Move = exports.Path = exports.SVG = void 0;
var SVG_1 = require("./SVG");
__createBinding(exports, SVG_1, "SVG");
var Path_1 = require("./Path");
__createBinding(exports, Path_1, "Path");
__createBinding(exports, Path_1, "Move");
__createBinding(exports, Path_1, "Line");
var Polygon_1 = require("./Polygon");
__createBinding(exports, Polygon_1, "Polygon");
var Rect_1 = require("./Rect");
__createBinding(exports, Rect_1, "Rect");
var Circle_1 = require("./Circle");
__createBinding(exports, Circle_1, "Circle");
__createBinding(exports, Circle_1, "Ellipse");
var Group_1 = require("./Group");
__createBinding(exports, Group_1, "Group");
