$(document).ready(function() {
	"use strict";
   $(".botton-left").on("click", function() {
      $(".input-box").val(parseInt($(".input-box").val())-1);
   }); 
   $(".botton-right").on("click", function() {
      $(".input-box").val(parseInt($(".input-box").val())+1);
   }); 
}); // JavaScript Document