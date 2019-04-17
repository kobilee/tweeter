/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
function renderTweets(tweets) {
  // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    for (tweet of tweets){
      const $newTweet = createTweetElement(tweet);
      $('#tweets-container').append($newTweet);
    }
}

function createTweetElement(tweetObj){
  let $article = $("<article>").addClass("tweet");
  let $header = $("<header>");
  let $avatar = $("<img>");
  let $h1 = $("<h2>");
  let $body = $("<div>");
  let $handle = $("<a>");
  let $content = $("<p>");
  let $footer = $("<footer>");
  let $date = $("<label>");
  let $icon = $("<div>").addClass("icon");
  //header!
  //Add avatar image
  $avatar.attr("src", tweetObj.user.avatars.small);
  $header.append($avatar);

   //Add User Name
  $h1.text(tweetObj.user.name);
  $header.append($h1);

   //Add User Handle
  $handle.attr("href", "#");
  $handle.text(tweetObj.user.handle);
  $header.append($handle);

  //body
  $content.text(tweetObj.content.text);
  $body.append($content);

  //footer
  $date.text(new Date(tweetObj.created_at));
  $footer.append($date);
  const $heart = $('<i class="fas fa-heart"></i>');
  const $retweet = $('<i class="fas fa-retweet"></i>');
  const $flag = $('<i class="fas fa-flag"></i>');
  $icon.append($heart);
  $icon.append($retweet);
  $icon.append($flag);
  $footer.append($icon);

  //article
  $article.append($header);
  $article.append($body);
  $article.append($footer);

  return $article;
}

$(document).ready(function() {
  const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
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
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];
  renderTweets(data);

});

