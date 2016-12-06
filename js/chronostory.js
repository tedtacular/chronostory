$(document).ready(function(){
/*var you = prompt("What's your name?");*/

$('.all-secs').hide();

$('#exposition').show();

/* - EXPOSITION TRIGGERS - */

/* setTimeout(function() {
  $("#trigger").fadeOut().empty();
}, 5000);
*/

$("#next").click(function(){
    $("#exposition").hide();
    $("#choice").show();
});

$("#door1").click(function(){
    $("#choice").hide();
    $("#cipher").show();
});

$("#door2").click(function(){
    $("#choice").hide();
    $("#source").show();
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



});
