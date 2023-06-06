"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.events = exports.names = void 0;
var fire = function (name, value) { return document.dispatchEvent(new CustomEvent(name, { detail: { open: value } })); };
var name = 'f-modal-event:';
exports.names = {
    open: "".concat(name).concat(close),
};
exports.events = {
    close: function () { return fire(exports.names.open, false); },
    open: function (value) {
        if (value === void 0) { value = true; }
        return fire(exports.names.open, value);
    },
};
