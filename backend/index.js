var likes = Math.floor(Math.random()*10000);

$(document).ready(function() {
    $('.likes').append(likes);
});



$.getJSON("http://numbersapi.com/random/trivia?json", function(data){
    var text = data.text;
    var number = data.number;

    $(".text").append(text);
    $('.number').append(number);

});

$(document).ready(function(){
    $("#likesButton").click(function(){
      likes++;
      $("#likesButton").hide();
      $('.likes').empty();
      $('.likes').append(likes);
    });
});
