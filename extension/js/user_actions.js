//Content Script

$(document).ready(function() {

  var session_init = 0;
  var curr_url = window.location.href;

  chrome.runtime.sendMessage({
      action: 'GainXP',
      type: 'Lurk',
      value: 1
  });

  if (curr_url.indexOf('twitter') > -1) {
    //Tweet
    $('.tweet-btn').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Create',
        value: 8
      });
    });
    //Twitter follow
    $('.follow-btn, .follow-button').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Social',
        value: 4
      });
    });
  } else if (curr_url.indexOf('youtube') > -1) {
    //Youtube like
    $('#watch-like').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Lurk',
        value: 2
      });
    });
    //Youtube dislike
    $('#watch-dislike').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Lurk',
        value: 1
      });
    });
    //Youtube comment
    $('.d-k-l').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Social',
        value: 6
      });
    });
  } else if (curr_url.indexOf('facebook') > -1) {
    //Facebook status
    $('._42ft').click(function() {
      if ($('.mentionsHidden').value().length > 0) {
        chrome.runtime.sendMessage({
          action: 'GainXP',
          type: 'Social',
          value: 14
        });
      }
    });
  } else if (curr_url.indexOf('tumblr') > -1) {
    //Tumblr post
    $('.create_post_button').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Create',
        value: 20
      });
    });
  } else if (curr_url.indexOf('pinterest') > -1) {
    //Pinterest repin
    $('.repinSmall').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Lurk',
        value: 5
      });
    });
  } else if (curr_url.indexOf('twitch') > -1) {
    //Twitch follow
    $('.js-follow').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Social',
        value: 10
      });
    });
    //Twitch chat
    $('.send-chat-button').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Social',
        value: 4
      });
    });
    //Twitch open stream
    $('.cap').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Lurk',
        value: 6
      });
    });
  } else if (curr_url.indexOf('google') > -1) {
    //Google feel lucky
    $('.gbqfba').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Lurk',
        value: 16
      });
    });
  } else if (curr_url.indexOf('codecademy') > -1) {
    //Codecademy new user
    $('.new_user').submit(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Know',
        value: 20
      });
    });
  } else if (curr_url.indexOf('gamejolt') > -1) {
    //Gamejolt rate game
    $('.rating-control a').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Lurk',
        value: 5
      });
    });
  } else if (curr_url.indexOf('gamasutra') > -1) {
    //Gamasutra article
    $('.story-title a').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Know',
        value: 6
      });
    });
  } else if (curr_url.indexOf('glassknuckle') > -1) {
    //Glassknuckle subscribe
    $('#mc-embedded-subscribe').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Social',
        value: 18
      });
    });
  } else if (curr_url.indexOf('grapplehook') > -1) {
    //Grapplehook subscribe
    $('#follow-button').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Social',
        value: 12
      });
    });
    //Grapplehook about
    $('.last a').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Lurk',
        value: 4
      });
    });
  } else if (curr_url.indexOf('germano') > -1) {
    //Squarespace headers
    $('.folder, .folder-parent').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Lurk',
        value: 2
      });
    });
  } else if (curr_url.indexOf('wikipedia') > -1) {
    //Wikipedia random page, current events, and donate
    $('#n-randompage, #n-currentevents, #n-sitesupport').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Know',
        value: 8
      })
    });
    //Wikipedia search
    $('#searchform').submit(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Know',
        value: 6
      });
    });
  }


  //Once the user moves the mouse, it initializes the game session if unitialized
  $('body').mousemove(function() {
    if (session_init != 1) {
      session_init = 1;
      chrome.runtime.sendMessage({
        action: 'Load'
      });
    }
  });

});
