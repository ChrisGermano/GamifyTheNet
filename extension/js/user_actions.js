//Content Script

$(document).ready(function() {

  var docDomain = document.domain.split('.');
  var domain;

  if (typeof(docDomain.length -2) != 'undefined') {
    domain = docDomain[docDomain.length -2] + '.';
  }

  var dom = domain + docDomain[docDomain.length -1];
  dom = dom.substring(0, dom.indexOf('.'));

  chrome.runtime.sendMessage({
    action: 'Load',
  });

  var sites = [];

  sites['twitter'] = function() {
    chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Social',
        value: 1
    });
    //Tweet
    $('.tweet-button .primary-btn').click(function() {
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
    //Twitter load new tweets
    $('.js-new-items-bar-container').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Social',
        value: 2
      });
    });
  };

  sites['youtube'] = function() {
    chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Lurk',
        value: 1
    });
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
  };

  sites['facebook'] = function() {
    chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Social',
        value: 1
    });
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
  };

  sites['tumblr'] = function() {
    chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Lurk',
        value: 1
    });
    //Tumblr post
    $('.create_post_button').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Create',
        value: 20
      });
    });
  };

  sites['pinterest'] = function() {
    chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Lurk',
        value: 1
    });
    //Pinterest repin
    $('.repinSmall').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Lurk',
        value: 5
      });
    });
  };

  sites['twitch'] = function() {
    chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Social',
        value: 1
    });
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
  };

  sites['google'] = function() {
    chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Know',
        value: 1
    });
    //Google feel lucky
    $('.gbqfba').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Lurk',
        value: 16
      });
    });
  };

  sites['codecademy'] = function() {
    chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Know',
        value: 1
    });
    //Codecademy new user
    $('.new_user').submit(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Know',
        value: 20
      });
    });
  };

  sites['gamejolt'] = function() {
    chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Lurk',
        value: 1
    });
    //Gamejolt rate game
    $('.rating-control a').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Lurk',
        value: 5
      });
    });
  };

  sites['gamasutra'] = function() {
    chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Know',
        value: 1
    });
    //Gamasutra article
    $('.story-title a').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Know',
        value: 6
      });
    });
  };

  sites['glassknuckle'] = function() {
    chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Lurk',
        value: 1
    });
    //Glassknuckle subscribe
    $('#mc-embedded-subscribe').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Social',
        value: 12
      });
    });
  };

  sites['grapplehookgames'] = function() {
    chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Lurk',
        value: 1
    });
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
  };

  sites['chris-germano'] = function() {
    chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Lurk',
        value: 1
    });
    //Squarespace headers
    $('.folder, .folder-parent').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Lurk',
        value: 2
      });
    });
  };

  sites['wikipedia'] = function() {
    chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Know',
        value: 1
    });
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
  };

  sites['4chan'] = function() {
    chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Social',
        value: 1
    });
    //New thread or post
    $('.yotsuba_new form').submit(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Create',
        value: '6'
      });
    });
  };

  sites['kickstarter'] = function() {
    chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Lurk',
        value: 1
    });
    //Browse category
    $('.bg-white').click(function() {
      chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Lurk',
        value: '4'
      });
    });
  };

  if (typeof sites[dom] == 'function') {
    sites[dom]();
  } else {
    chrome.runtime.sendMessage({
        action: 'GainXP',
        type: 'Lurk',
        value: 1
    });
  }

});
