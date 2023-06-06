"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useModal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("react");
var context_1 = require("../context");
var events_1 = require("../events");
var useModal = function (options) {
    var _a = (0, react_1.useState)(false), isOpen = _a[0], setOpen = _a[1];
    var _b = (0, react_1.useState)(), content = _b[0], setContent = _b[1];
    var close = (0, react_2.useCallback)(function () {
        setOpen(false);
        if (options && options.closeDelay) {
            setTimeout(function () {
                setContent(null);
            }, options.closeDelay);
        }
        else {
            setContent(null);
        }
    }, []);
    var __setState = (0, react_2.useCallback)(function (options) {
        var _a = Array.isArray(options) && typeof options[1] === 'boolean' ? options : [options, true], newContent = _a[0], newOpen = _a[1];
        setContent(newContent);
        setOpen(newOpen);
    }, []);
    var set = (0, react_2.useCallback)(function (contentNode) { return __setState(typeof contentNode === 'function' ? contentNode(content, isOpen) : contentNode); }, [isOpen, content, __setState]);
    (0, react_2.useEffect)(function () {
        var listener = function (event) {
            switch (event.code) {
                case 'Escape':
                    close();
                    break;
            }
        };
        var handleOpen = (function (event) { return setOpen(event.detail.open); });
        document.addEventListener('keydown', listener);
        document.addEventListener(events_1.names.open, handleOpen);
        return function () {
            document.removeEventListener('keydown', listener);
            document.removeEventListener(events_1.names.open, handleOpen);
        };
    }, []);
    var Modal = (0, react_2.useMemo)(function () { return (0, jsx_runtime_1.jsx)(context_1.Provider, { modal: { close: close, isOpen: isOpen, open: setOpen, set: set, styles: options }, children: content }); }, [isOpen, content]);
    return [Modal, { set: set, open: setOpen, close: close, isOpen: isOpen }];
};
exports.useModal = useModal;
