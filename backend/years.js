$.getJSON("http://numbersapi.com/random/year?json", function(data){
    var text = data.text;
    var number = data.number;

    $(".text").append(text);
    $('.number').append(number);

});
