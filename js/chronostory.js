$(document).ready(function(){
var you = prompt("What is your name?");

$('.all-secs').hide();
$('.triggers').hide();

$('#exposition').show();

setTimeout(function() {
  $("#trigger1").fadeIn();
}, 2000);

setTimeout(function() {
  $("#trigger2").fadeIn();
}, 3000);

setTimeout(function() {
  $("#trigger3").fadeIn();
}, 5000);

$("#next").click(function(){
    $("#exposition").hide();
    $("#choice").show();
});

$("#next2").click(function(){
    $("#exposition2").hide();
    $("#choice2").show();
});

$(".door1").click(function(){
    $("#choice").hide();
    $("#choice2").hide();
    $("#cipher").show();
});

$(".door2").click(function(){
    $("#choice").hide();
    $("#choice2").hide();
    $("#source").show();
});

$("#door3").click(function(){
    $("#choice2").hide();
    $("#check1").show();
});

$("#access").click(function(){
  var password = document.getElementById('password').value;
  if (password == "RED") {
    $("#cipher").hide();
    $("#map1").show();
  }
});

$("#access2").click(function(){
  var password = document.getElementById('password2').value;
  if (password == "WARP") {
    $("#source").hide();
    $("#map2").show();
  }
});

$("#mapaccess1").click(function(){
  var password = document.getElementById('mapword1').value;
  if (password == "TIMAEUS") {
    $("#map1").hide();
    $("#finale1").show();
  }
});

$("#mapaccess2").click(function(){
  var password = document.getElementById('mapword2').value;
  if (password == "AWAKE") {
    $("#map2").hide();
    $("#finale2").show();
  }
});

$(function() {
    $("#o")
        .mouseover(function() {
            $(this).attr("src", "images/rebel.png");
        })
        .mouseout(function() {
           $(this).attr("src", "images/o.png");
        });
});

$("#o").click(function() {
  $("#finale1").hide();
  $("#exposition2").show();
});

$("#hiddentower").click(function() {
  $("#finale2").hide();
  $("#exposition2").show();
});

$("#checkaccess1").click(function(){
  var password = document.getElementById('checkup1').value;
  if (password == "IMPRISON") {
    $("#check1").hide();
    $("#check2").show();
  }
});

$("#checkaccess2").click(function(){
  var password = document.getElementById('checkup2').value;
  if (password == "LIFETIMES") {
    $("#check2").hide();
    $("#finalquestion").show();
  }
});

$("#theanswer").click(function(){
  var password = document.getElementById('last').value;
  if (password == "NO ONE") {
    $("#finalquestion").hide();
    $("#ending1").show();
  }
  else if (password == you) {
    $("#finalquestion").hide();
    $("#ending2").show();
  }
});

});
