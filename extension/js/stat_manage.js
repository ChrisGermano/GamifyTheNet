//Background script
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    chrome.storage.sync.set({'lurkNum': request.actType}, function() {});

    if (request.action == 'Load') {
      chrome.storage.sync.get('data_init', function(result) {
        if (parseInt(result.data_init) != 1) {
          chrome.storage.sync.set({'xp': '0'}, function() {});
          chrome.storage.sync.set({'level': '1'}, function() {});
          chrome.storage.sync.set({'rank': '1'}, function() {});
          chrome.storage.sync.set({'title': 'Newbie'}, function() {});
          chrome.storage.sync.set({'totalActs': '0'}, function() {});
          chrome.storage.sync.set({'lurkNum': '0'}, function() {});
          chrome.storage.sync.set({'socNum': '0'}, function() {});
          chrome.storage.sync.set({'knoNum': '0'}, function() {});
          chrome.storage.sync.set({'creNum': '0'}, function() {});
          chrome.storage.sync.set({'data_init':'1'}, function() {});
        }
    });
  } else if (request.action == 'GainXP') {
    chrome.storage.sync.get('xp', function(result) {
      //addActType(request.type);
      var cxp = parseInt(result.xp);
      cxp += parseInt(request.value);
      chrome.storage.sync.set({'xp': cxp}, function() {
        chrome.runtime.sendMessage({
          action: 'CheckXP'
        });
      });
    });
  } else if (request.action == 'Nuke'0) {
    chrome.storage.sync.set({'data_init': '0'}, function(result) {
      chrome.runtime.sendMessage({
        action: 'Load'
      });
    });
  } else if (request.action == 'CheckXP') {

      var current_xp;
      var max_xp;
      var level;
      var rank;
      var title;

      chrome.storage.sync.get('xp', function(result) {
        current_xp = parseInt(result.xp);

        chrome.storage.sync.get('level', function(result) {
          level = parseInt(result.level);

          chrome.storage.sync.get('rank', function(result) {
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

            chrome.storage.sync.set({'xp': current_xp}, function() {});
            chrome.storage.sync.set({'level': level}, function() {});
            chrome.storage.sync.set({'rank': rank}, function() {});
            chrome.storage.sync.set({'title': title}, function() {});

          });

        });
      });
    }
  }
);

function addActType(actType) {
  if (typeof actType === undefined) {
    return;
  } else {
    if (type == "Lurk") {
      chrome.storage.sync.get('lurkNum', function(result) {
        var newLurks = parseInt(result.lurkNum) + 1;
        chrome.storage.sync.set({'lurkNum': newLurks}, function() {});
        return;
      });
    } else if (type == "Create") {
      chrome.storage.sync.get('creNum', function(result) {
        var newLurks = parseInt(result.lurkNum) + 1;
        chrome.storage.sync.set({'creNum': newLurks}, function() {});
        return;
      });
    } else if (type == "Know") {
      chrome.storage.sync.get('knoNum', function(result) {
        var newLurks = parseInt(result.lurkNum) + 1;
        chrome.storage.sync.set({'knoNum': newLurks}, function() {});
        return;
      });
    } else if (type == "Social") {
      chrome.storage.sync.get('socNum', function(result) {
        var newLurks = parseInt(result.lurkNum) + 1;
        chrome.storage.sync.set({'socNum': newLurks}, function() {});
        return;
      });
    }
  }
}


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

  chrome.storage.sync.set({'title': (levelT + ' ' + rankT)}, function() {});
}
