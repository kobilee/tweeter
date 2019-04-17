/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
function  loadTweets(){
    $.ajax("/tweets", { method: 'GET' })
    .then(function (tweet) {
      renderTweets(tweet);
    });
}

function renderTweets(tweets) {
  // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    const tweetArr = [];
    for (tweet of tweets){
      const $newTweet = createTweetElement(tweet);
      tweetArr.push($newTweet);
    }
    $('#tweets-container').append(tweetArr.reverse());
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
  loadTweets();
  $(".new-tweet form").submit(function(e) {
      e.preventDefault();
      //const check = $(this).serialize().split("=");
      if ($("textarea", this).val() === "" || $("textarea", this).val() === null) {
        alert("Not a vaild tweet!");
        return;
      }
      else if ($("textarea", this).val().length > 140) {
        alert("Your text cannot exceed 140 characters!");
        return;
      }

      $.post("/tweets", $(this).serialize()).done(function() {
          $('#tweets-container').empty();
          loadTweets();
          $(".new-tweet .counter").text(140);
          $(".new-tweet textarea").val("");
      });
   });
});
