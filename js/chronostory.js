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
    $("#exposition2").show();
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
  if (password == "red") {
    $("#cipher").hide();
    $("#source").show();
  }
});

$("#access2").click(function(){
  var password = document.getElementById('password2').value;
  if (password == "rawr") {
    $("#source").hide();
    $("#exposition").show();
  }
});



});
