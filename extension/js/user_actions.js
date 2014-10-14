//Content Script

$(document).ready(function() {
  chrome.runtime.sendMessage({
    action: "GainXP",
    value: 1
  });


  var session_init = 0;

  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      chrome.runtime.sendMessage({
        action: "Nuke"
      });
    }
  });

  //Tweet
  $('.tweet-btn').click(function() {
    chrome.runtime.sendMessage({
      action: "GainXP",
      value: 8
    });
  });

  //Twitter follow
  $(".follow-text").click(function() {
    chrome.runtime.sendMessage({
      action: "GainXP",
      value: 4
    });
  });

  //
  $("#sharelink_").submit(function() {
    chrome.runtime.sendMessage({
      action: "GainXP",
      value: 25
    });
  });

  //Youtube like
  $("#watch-like").click(function() {
    chrome.runtime.sendMessage({
      action: "GainXP",
      value: 2
    });
  });

  //Youtube comment
  $(".d-k-l").click(function() {
    chrome.runtime.sendMessage({
      action: "GainXP",
      value: 6
    });
  });

  //Facebook status
  $("._42ft").click(function() {
    if ($(".mentionsHidden").value().length > 0) {
      chrome.runtime.sendMessage({
        action: "GainXP",
        value: 14
      });
    }
  });

  //Tumblr post
  $(".create_post_button").click(function() {
    chrome.runtime.sendMessage({
      action: "GainXP",
      value: 20
    });
  });

  //Pinterest repin
  $(".repinSmall").click(function() {
    chrome.runtime.sendMessage({
      action: "GainXP",
      value: 5
    });
  });

  //Once the user moves the mouse, it initializes the game session if unitialized
  $("body").mousemove(function() {
    if (session_init == 0) {
      session_init = 1;
      chrome.runtime.sendMessage({
        action: "Load"
      });
    }
  });

});
