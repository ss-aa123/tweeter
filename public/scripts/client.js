/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  $('#error').slideUp('fast');

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const renderTweets = function(tweets) {
    $('#tweets-container').empty();
    tweets.forEach(function(tweet) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').prepend($tweet);
    });
  };

  const createTweetElement = function(tweet) {
    let $tweet = $(`
    <article class="tweet">
        <header>
          <div class="icon-and-name">
            <img src="${escape(tweet.user.avatars)}"></img> 
            <h4 class="userName">${escape(tweet.user.name)}</h4>
          </div>
          <div class="handle">
            <h4>${escape(tweet.user.handle)}</h4>
          </div>
        </header>
        <p>${escape(tweet.content.text)}</p>
        <footer>
          <span>${escape(timeago.format(tweet.created_at))}</span>
          <div class="icons">
            <i class="fa-solid fa-flag"></i>              
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-sharp fa-solid fa-heart"></i>
          </div>
        </footer>
      </article>
      `);

    return $tweet;
  
  };


  const loadTweets = function() {
    $.get("/tweets/")
      .then(data => {
        renderTweets(data);
      });
  };

  loadTweets();


  //$(".submittweet").validate(); //to automatically displya errors
  $(".submittweet").on("submit", function(e) {

    e.preventDefault();
  
    $('#error').slideUp('fast');
  
    if ($('#tweet-text').val().length > 140) {
      $('#error h3').text('Your message is too long! Please make sure your tweet is under 140 characters!');
      $('#error').slideDown('fast');
      return false;
    }
    if ($('#tweet-text').val().length <= 0) {
      $('#error h3').text('Please make sure to enter a message before submitting!');
      $('#error').slideDown('fast');
      return false;
    }

    let data = $(this).serialize();

    $.ajax('/tweets', {
      type: "POST",
      data: data,
      success: function() {
        $("textarea").val("");
        $(".counter").html(140);
        loadTweets();
      }
    });

  });


});




