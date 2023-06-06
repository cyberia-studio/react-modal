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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var context_1 = require("../context");
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
exports.Modal = react_1.default.forwardRef(function (_a, ref) {
    var _b;
    var children = _a.children;
    var _c = (0, context_1.useModalContext)(), close = _c.close, isOpen = _c.isOpen;
    var handleClose = (0, react_1.useCallback)(function () { return close(); }, [close]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(styles_module_css_1.default.block, (_b = {}, _b[styles_module_css_1.default.open] = isOpen, _b), 'modal', { modal_open: isOpen }), ref: ref, children: [(0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(styles_module_css_1.default.overlay, 'modal__overlay'), onClick: handleClose }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(styles_module_css_1.default.window, 'modal__window'), children: children })] }));
});
