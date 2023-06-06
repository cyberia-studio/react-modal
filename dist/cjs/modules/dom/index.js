"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoot = exports.getBlock = void 0;
var getRoot = function () {
    var root = document.getElementById('root');
    if (root)
        return root;
    return document.body;
};
exports.getRoot = getRoot;
var getBlock = function () {
    var root = getRoot();
    var block = document.getElementById('modals');
    if (block)
        return block;
    var newBlock = document.createElement('div');
    newBlock.id = 'modals';
    root.appendChild(newBlock);
    return newBlock;
};
exports.getBlock = getBlock;
