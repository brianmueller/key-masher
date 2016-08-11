var started = false;
var timerInterval;
var seconds = 1;
var num;

function timer() {
  setTimeout(function() {
    $("#text").prop('disabled', true).blur().css({
      'background-color': '#FFAEAE'
    });
    // $("#wpm").html("That's " + num*60/5 + " words per minute.");
    $("#info").css('visibility', 'visible');

    $('#score').val(num);

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

  }, seconds * 3000);
}


function countdown() {
  if (!started) {
    var seconds_left = 3.0;
    var interval = setInterval(function() {
      seconds_left -= 0.1
      $('#countdown').html(parseFloat(Math.round(seconds_left * 10) / 10).toFixed(1));

      if (seconds_left <= 0) {
        $('#countdown').html("Time is up!");
        clearInterval(interval);
      }
    }, 100);
  }
  started = true;
}


$('#text').focus(
  function() {
    $(this).css({
      'background-color': '#B0E57C'
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
    'background-color': '#feea82'
  });
});

$("#text").keyup(function() {
  num = $("#num").html();
  num++;
  $("#num").html(num);
});

$("#reset").click(function() {
  $("#num").html(0);
  $("#wpm").html("");
  $("#text").val("");
  $("#info").css('visibility', 'hidden');
  clearInterval(timerInterval);
  started = false;
  $("#text").prop('disabled', false).css({
    'background-color': 'white'
  });
  $("#name").val("");
  $('#text').focus();
});

// $("#submit").click(function(){
//   alert("Coming soon!")
// });
