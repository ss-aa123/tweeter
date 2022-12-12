$(document).ready(function() {
  
  $("#tweet-text").on("input", function () {
    const len = $(this).val().length;
    let remainingValues = 140 - len;
    
    let counter = $(this).parent().children().find(".counter");
    counter.text(remainingValues);

    if (remainingValues < 0) {
      counter.addClass('counterOutOfBounds');
    } else {
      counter.removeClass('counterOutOfBounds');
    }
  });


});

