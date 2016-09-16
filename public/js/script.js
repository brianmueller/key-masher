var started = false;
var timerInterval;
var seconds = 1;
// var num;
var seconds_left = 3.0;
var score = {};
score.num = 0;

Object.defineProperty(score, "num", {
  configurable: true,
  writable: false
});

function timer() {
  Object.defineProperty(score, "num", {
    value: 0,
    configurable: true,
    writable: true
  });
  setTimeout(function() {
    // $("#wpm").html("That's " + num*60/5 + " words per minute.");
    Object.defineProperty(score, "num", {
      configurable: true,
      writable: false
    });
  }, seconds * 3000);

}


function countdown() {
  if (!started) {
    seconds_left = 3.0;
    var interval = setInterval(function() {
      seconds_left -= 0.1
      $('#countdown').html(parseFloat(Math.round(seconds_left * 10) / 10).toFixed(1));

      if (seconds_left <= 0) {
        $('#countdown').html("Time is up!");
        $("#text").prop('disabled', true).blur().css({
          'background-color': '#FFAEAE' // red
        });
        $("#info").css('visibility', 'visible');
        clearInterval(interval);
      }
    }, 100);
  }
  started = true;
}


$('#text').focus(
  function() {
    $(this).css({
      'background-color': '#B0E57C' // green
    });
  });
$('#text').focusout(
  function() {
    $(this).css({
      'background-color': 'white'
    });
  });


$("#text").keydown(function() {
  timer();
  countdown();
  $("#text").css({
    'background-color': '#feea82' // yellow
  });
});

$("#text").keyup(function() {
  score.num = $("#num").html();
  score.num++;
  $("#num").html(score.num);
});

$("#reset").click(function() {
  $('#countdown').html("When you begin typing, you will have 3 seconds to type as much text as you can.");
  $("#num").html(0);
  $("#wpm").html("");
  $("#text").val("");
  $("#info").css('visibility', 'hidden');
  clearInterval(timerInterval);
  started = false;
  $("#text").prop('disabled', false).css({
    'background-color': 'white'
  });
  $('#text').focus();
});

$("#submit").click(function() {
  var d = new Date();
  var month = d.getMonth() + 1;
  month = month < 10 ? "0" + month : "" + month;
  var hours = d.getHours();
  hours = hours < 10 ? "0" + hours : "" + hours;
  var minutes = d.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : "" + minutes;
  var seconds = d.getSeconds();
  seconds = seconds < 10 ? "0" + seconds : "" + seconds;
  var date = "" + d.getFullYear() + month + d.getDate() + hours + minutes + seconds;
  $('#date').val(date);
  $('#score').val(score.num);
  return true;
});

function insertNum() {

}