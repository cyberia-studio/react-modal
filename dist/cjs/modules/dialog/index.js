"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dialog = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var context_1 = require("../context");
var Dialog = function (_a) {
    var children = _a.children;
    var modal = (0, context_1.useModalContext)();
    var content = (0, react_1.useMemo)(function () {
        if (typeof children === 'function')
            return children(modal);
        return children;
    }, [children]);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: content });
};
exports.Dialog = Dialog;
