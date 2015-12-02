var started = false;
var timerInterval;
var seconds = 1;
var num;

function timer() {
  setTimeout(function(){
    $("#text").prop('disabled', true).css({'background-color' : '#FFAEAE'});
    // $("#wpm").html("That's " + num*60/5 + " words per minute.");
    $("#info").css('visibility', 'visible');
  }, seconds*3000);

}

$('#text').focus(
    function(){
        $(this).css({'background-color' : '#B0E57C'});
    });
$('#text').focusout(
    function(){
        $(this).css({'background-color' : 'white'});
    });


$("#text").keydown(function() {
  timer();
  $("#text").css({'background-color' : '#feea82'});
});

$("#text").keyup(function() {
  num = $("#num").html();
  num++;
  $("#num").html(num);
});

$("#reset").click(function(){
  $("#num").html(0);
  $("#wpm").html("");
  $("#text").val("");
  $("#info").css('visibility', 'hidden');
  clearInterval(timerInterval);
  $("#text").prop('disabled', false).css({'background-color' : 'white'});
  $("#name").val("");
  $('#text').focus();
});
