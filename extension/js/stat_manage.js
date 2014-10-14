//Background script
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action == 'Load') {
      chrome.storage.local.get('data_init', function(result) {
        if (parseInt(result.data_init) != 1) {
          chrome.storage.local.set({'xp': '0'}, function() {});
          chrome.storage.local.set({'level': '1'}, function() {});
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
      var title;

      chrome.storage.local.get('xp', function(result) {
        current_xp = parseInt(result.xp);

        chrome.storage.local.get('level', function(result) {
          level = parseInt(result.level);

          max_xp = 2 * Math.pow(parseInt(level), 3);

          while (current_xp >= max_xp) {
            level = level + 1;
            level = Math.Min(level,5);
            current_xp = current_xp - max_xp;
            max_xp = 2 * Math.pow(level, 3);
            UpdateTitle(level);
          }

          chrome.storage.local.set({'xp': current_xp}, function() {});
          chrome.storage.local.set({'level': level}, function() {});
          chrome.storage.local.set({'title': title}, function() {});

        });
      });
    }
  }
);

function UpdateTitle(level) {
  var rank = level%5;
  var rankTitle = Math.floor(level/5);
  switch (rankTitle) {
    case 0:
      rankTitle = 'Newbie';
      break;
    case 1:
      rankTitle = 'Surfer';
      break;
    case 2:
      rankTitle = 'Millenial';
      break;
    case 3:
      rankTitle = 'Troll';
      break;
    case 4:
      rankTitle = 'Global Moderator';
      break;
    default:
      rankTitle = 'Supreme Creator';
      break;
  }

  switch (rank) {
    case 0:
      rank = 'V';
      break;
    case 1:
      rank = 'I';
      break;
    case 2:
      rank = 'II';
      break;
    case 3:
      rank = 'III';
      break;
    case 4:
      rank = 'IV';
      break;
    default:
      rank = '';
      break;
  }

  chrome.storage.local.set({'title': (rankTitle + ' ' + rank)}, function() {});
}
