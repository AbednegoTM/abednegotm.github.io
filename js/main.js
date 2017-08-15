$(document).ready(function () {
var path = 'assets/';
var image = ['bag.jpg','chair.jpg','google-home-voice.jpg','spoons.jpg'];


$("#prod1").click(function() {
  $("#details").attr("class","imageBgSize");
  $("#details").css("background-image","url("+path+image[0]+")");
});

$("#prod2").click(function() {
  $("#imgView").attr("src",path+image[1]);
  $("#details").attr("class","imageBgSize");
  $("#details").css("background-image","url("+path+image[1]+")");
});
$("#prod3").click(function() {
  $("#imgView").attr("src",path+image[2]);
  $("#details").attr("class","imageBgSize");
  $("#details").css("background-image","url("+path+image[2]+")");
});
$("#prod4").click(function() {
  $("#imgView").attr("src",path+image[3]);
  $("#details").attr("class","imageBgSize");
  $("#details").css("background-image","url("+path+image[3]+")");
});

$("#relatDiv").mouseover(function() {
  $("#btnBuy").css("visibility","visible");
  $("#details").css("opacity","0.5");
  $("#alertMsg").css("visibility","hidden");

});
$("#mainView").mouseout(function() {
  $("#btnBuy").css("visibility","hidden");
  $("#details").css("opacity","1");
});

$("#btnBuy").click(function() {
  $("#alertMsg").css("visibility","visible");
  $("#btnBuy").css("visibility","hidden");
});


});
