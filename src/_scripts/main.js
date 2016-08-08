// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Link = require('../_modules/link/link');

$(function() {
  // new Link(); // Activate Link modules logic
  console.log('ok!');
  
});

$(function() {
$('a[href*="#"]:not([href="#"])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
var target = $(this.hash);
target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
if (target.length) {
$('html, body').animate({
scrollTop: target.offset().top
}, 800);
return false;
}
}
});
});