
/*
$(document).ready(function() {



  $('.submittweet').on('submit', function(event) {
    event.preventDefault();

    const $form = $(this);

    $.ajax({
        url: "/tweets",
        type: "posts",
        data: $form.serialize()
    })
      .then(function($form.serialize()) {
        $('text').val('')
      }
      .catch((err) => {
        console.log('error')
      })
    });




    const $input = $form.find('text');

  if(!isTweetValid($input)) {
    return false;
  }

  let data = $form.serialize() {
    $.post('/tweets', data)
      .then(() => {
        $input.val("").trigger('input');
        $input.trigger('bruno');
        loadTweets();
      })
  }

  
  }).done(function(data) {
    $input.val("");
    $('.counter').html(140);
    loadTweets();
  });
  
  return true;
  });


  function isTweetValid(inputElement) {

    let $error = $('.error-container h4');
    let $errorContainer = $('.error-container');

    if (inputElement.val().length > 140) {
      $error.text('Your message was too long');
      $errorContainer.slideDown('fast');
      return false;
    }

    if (inputElement.val().length === 0) {
      $error.text('Your post has nothing in it');
      $errorContainer.slideDown('fast');
      return false;
    }

    if ($errorContainer.is(':visible')) {
      $errorContainer.slideUp('fast');

    }

    return true;

  }
})

*/