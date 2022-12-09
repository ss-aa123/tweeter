/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

const renderTweets = function(tweets) {
    $('#tweets-container').empty();
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);  
    }
  };

const createTweetElement = function(tweet) {
  let $tweet = $(`
    <article class="tweet">
        <header>
          <div class="icon-and-name">
            <img src="${tweet.user.avatars}"></img> 
            <h4 class="userName">${tweet.user.name}</h4>
          </div>
          <div class="handle">
            <h4>${tweet.user.handle}</h4>
          </div>
        </header>
        <p>${tweet.content.text}</p>
        <footer>
          <span>${timeago.format(tweet.created_at)}</span>
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



renderTweets(data);
});

