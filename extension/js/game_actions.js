//Popup script

$(document).ready(function() {
  chrome.storage.local.get('title', function(result) {
    $('.pt').text(result.title);
  });
  chrome.storage.local.get('level', function(result) {
    $('.pl').text(result.level);
    setBadge(result.level);
    var mxp = 2 * Math.pow(parseInt(result.level), 3);
    $('.mxp').text(mxp);
  });
  chrome.storage.local.get('xp', function(result) {
    $('.cxp').text(result.xp);
  });

});

function setBadge(level) {
  var iconL = parseInt(level)%6;
  $('.icon_container img').attr('src', 'icons/ranks/Tier' + parseInt(level) + '.png');
}
