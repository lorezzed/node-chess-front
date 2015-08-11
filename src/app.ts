'use strict';
import angular = require("angular");
var unique = require('uniq');
var chess = require("node-chess");
chess;

var data = [1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2];
console.log(unique(data));

angular
	.module('app', [])
	.controller('myController', myController);
function myController() {
	this.sayHi = 'hiu';
}


