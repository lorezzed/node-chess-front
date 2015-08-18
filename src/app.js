'use strict';
var angular = require("angular");
var unique = require('uniq');
var chess = require("node-chess");



var data = [1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2];
console.log(unique(data));

//setupDivs(); //built for chess.html

angular
    .module('app', [])
    .controller('myController', require('./test/test.controller'));




var debugInput = document.querySelector('input');
debugInput.addEventListener('click', updateDebugState);
updateDebugState();

function setupDivs() {
    addDebug();
    addParallax();
    addGroup1();
    addGroup2();
    addGroup3();
}

function updateDebugState() {
    console.log('updating');
    document.body.classList.toggle('debug-on', debugInput.checked);
};

function addDebug() {
    var debugDiv = document.createElement('div');
    debugDiv.className = 'debug';
    document.getElementsByTagName('body')[0].appendChild(debugDiv);

    var labelElement = document.createElement('label')
    debugDiv.appendChild(labelElement);

    var checkboxElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    labelElement.appendChild(checkboxElement);

    var textNode = document.createTextNode(' Debug');
    labelElement.appendChild(textNode);
}

function addParallax() {
    var parallaxDiv = document.createElement('div');
    parallaxDiv.className = 'parallax';
    document.getElementsByTagName('body')[0].appendChild(parallaxDiv);
}

function addGroup1() {
    var group1Div = document.createElement('div');
    group1Div.id = 'group1';
    group1Div.className = 'parallax__group';
    document.getElementsByClassName('parallax')[0].appendChild(group1Div);

    var baseDiv = document.createElement('div');
    baseDiv.className = 'parallax__layer parallax__layer--base';
    group1Div.appendChild(baseDiv);

    var baseTitleDiv = document.createElement('div');
    baseTitleDiv.className = 'title';
    baseTitleDiv.innerHTML = 'Base Layer';
    baseDiv.appendChild(baseTitleDiv);
}

function addGroup2() {
    var group2Div = document.createElement('div');
    group2Div.id = 'group2';
    group2Div.className = 'parallax__group';
    document.getElementsByClassName('parallax')[0].appendChild(group2Div);

    var baseDiv = document.createElement('div');
    baseDiv.className = 'parallax__layer parallax__layer--base';
    group2Div.appendChild(baseDiv);

    var baseTitleDiv = document.createElement('div');
    baseTitleDiv.className = 'title';
    baseTitleDiv.innerHTML = 'Base Layer';
    baseDiv.appendChild(baseTitleDiv);

    var backDiv = document.createElement('div');
    backDiv.className = 'parallax__layer parallax__layer--back';
    group2Div.appendChild(backDiv);

    var backTitleDiv = document.createElement('div');
    backTitleDiv.className = 'title';
    backTitleDiv.innerHTML = 'Back Layer';
    backDiv.appendChild(backTitleDiv);
}

function addGroup3() {
    var group3Div = document.createElement('div');
    group3Div.id = 'group3';
    group3Div.className = 'parallax__group';
    document.getElementsByClassName('parallax')[0].appendChild(group3Div);

    var foreDiv = document.createElement('div');
    foreDiv.className = 'parallax__layer parallax__layer--fore';
    group3Div.appendChild(foreDiv);

    var foreTitleDiv = document.createElement('div');
    foreTitleDiv.className = 'title';
    foreTitleDiv.innerHTML = 'Foreground Layer';
    foreDiv.appendChild(foreTitleDiv);

    var baseDiv = document.createElement('div');
    baseDiv.className = 'parallax__layer parallax__layer--base';
    group3Div.appendChild(baseDiv);

    var baseTitleDiv = document.createElement('div');
    baseTitleDiv.className = 'title';
    baseTitleDiv.innerHTML = 'Base Layer';
    baseDiv.appendChild(baseTitleDiv);
}
