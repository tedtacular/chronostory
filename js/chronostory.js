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

$("#next2").click(function(){
    $("#exposition2").hide();
    $("#choice2").show();
});

$(".door1").click(function(){
    $("#choice").hide();
    $("#cipher").show();
});

$(".door2").click(function(){
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

$(function() {
    $("#city1")
        .mouseover(function() {
            $(this).attr("src", "images/city2.jpg");
        })
        .mouseout(function() {
           $(this).attr("src", "images/city1.jpg");
        });
});

$("#city1").click(function() {
  $("#finale1").hide();
  $("#exposition2").show();
});

});
