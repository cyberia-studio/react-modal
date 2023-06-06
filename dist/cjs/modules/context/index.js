"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useModalContext = exports.Provider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var component_1 = require("../component");
var dom_1 = require("../dom");
var Context = react_1.default.createContext(null);
var Provider = function (_a) {
    var modal = _a.modal, children = _a.children;
    return react_dom_1.default.createPortal((0, jsx_runtime_1.jsx)(Context.Provider, { value: modal, children: (0, jsx_runtime_1.jsx)(component_1.Modal, { children: children }) }), (0, dom_1.getBlock)());
};
exports.Provider = Provider;
var useModalContext = function () {
    var modal = react_1.default.useContext(Context);
    if (!modal)
        throw new Error('Modal context/dialog usage ouside of modal hook');
    return modal;
};
exports.useModalContext = useModalContext;
