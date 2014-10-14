//Popup script

$(document).ready(function() {
  var cxp,fxp;

  chrome.storage.local.get('title', function(result) {
    $('.pt').text(result.title);
  });
  chrome.storage.local.get('level', function(result) {
    var lvl = parseInt(result.level);
    $('.pl').text(result.level);
    setBadge(result.level);
    chrome.storage.local.get('rank', function(result) {
      var mxp = Math.pow(lvl+1, result.rank);
      fxp = parseInt(mxp);
      $('.mxp').text(mxp);
      chrome.storage.local.get('xp', function(result) {
        $('.cxp').text(result.xp);
        cxp = parseInt(result.xp);
        $('.xp_bar').attr('style', 'width: ' + 100*(parseFloat(cxp)/parseFloat(fxp)) + '%');
      });
    });
  });

});

function setBadge(level) {
  var iconL = parseInt(level)%6;
  $('.icon_container img').attr('src', 'icons/ranks/Tier' + parseInt(level) + '.png');
}
