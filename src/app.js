'use strict';
var angular = require("angular");
var unique = require('uniq');
var chess = require("node-chess");



var data = [1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2];
console.log(unique(data));

angular
    .module('app', [])
    .controller('myController', require('./test/test.controller'));



var debugInput = document.querySelector('input');
debugInput.addEventListener('click', updateDebugState);
updateDebugState();
function updateDebugState() {
    document.body.classList.toggle('debug-on', debugInput.checked);
};