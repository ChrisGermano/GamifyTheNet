//Background script
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action == 'Load') {
      chrome.storage.local.get('data_init', function(result) {
        if (parseInt(result.data_init) != 1) {
          chrome.storage.local.set({'xp': '0'}, function() {});
          chrome.storage.local.set({'level': '1'}, function() {});
          chrome.storage.local.set({'rank': '1'}, function() {});
          chrome.storage.local.set({'title': 'Newbie'}, function() {});
          chrome.storage.local.set({'data_init':'1'}, function() {});
        }
    });
  } else if (request.action == 'GainXP') {
    chrome.storage.local.get('xp', function(result) {
      var cxp = parseInt(result.xp);
      cxp += parseInt(request.value);
      chrome.storage.local.set({'xp': cxp}, function() {
        chrome.runtime.sendMessage({
          action: 'CheckXP'
        });
      });
    });
  } else if (request.action == 'Nuke') {
    alert('Nuking...');
    chrome.storage.local.clear(function() {
      chrome.sotrage.local.set({'data_init':'0'}, function() {});
    });
  } else if (request.action == 'CheckXP') {

      var current_xp;
      var max_xp;
      var level;
      var rank;
      var title;

      chrome.storage.local.get('xp', function(result) {
        current_xp = parseInt(result.xp);

        chrome.storage.local.get('level', function(result) {
          level = parseInt(result.level);

          chrome.storage.local.get('rank', function(result) {
            rank = parseInt(result.rank);

            max_xp = Math.pow(level+1,rank);

            if (current_xp >= max_xp) {
              rank = rank + 1;
              if (rank>5) {
                level = level + 1;
                rank = 1;
              }
              if (level>5) {
                level = 5;
              }

              current_xp = current_xp - max_xp;
              max_xp = Math.pow(level+1,rank);
              UpdateTitle(level, rank);
            }

            chrome.storage.local.set({'xp': current_xp}, function() {});
            chrome.storage.local.set({'level': level}, function() {});
            chrome.storage.local.set({'rank': rank}, function() {});
            chrome.storage.local.set({'title': title}, function() {});

          });

        });
      });
    }
  }
);

function UpdateTitle(level, rank) {
  var rankT, levelT;

  switch (level) {
    case 1:
      levelT = 'Newbie';
      break;
    case 2:
      levelT = 'Surfer';
      break;
    case 3:
      levelT = 'Millenial';
      break;
    case 4:
      levelT = 'Global Moderator';
      break;
    case 5:
      levelT = 'Supreme Creator';
      break;
    default:
      levelT = 'Extension Hacker';
      break;
  }

  switch (rank) {
    case 1:
      rankT = 'I';
      break;
    case 2:
      rankT = 'II';
      break;
    case 3:
      rankT = 'III';
      break;
    case 4:
      rankT = 'IV';
      break;
    case 5:
      rankT = 'V';
      break;
    default:
      rankT = '';
      break;
  }

  chrome.storage.local.set({'title': (levelT + ' ' + rankT)}, function() {});
}
