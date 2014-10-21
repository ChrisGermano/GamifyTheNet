//Popup script

$(document).ready(function() {
  var cxp,fxp;
  var nuker = new Konami(function() { chrome.runtime.sendMessage({action: 'Nuke'}); });

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

  var totalActVal;
  var lurks;
  var cres;
  var knows;
  var socs;

  chrome.storage.local.get('lurkNum', function(result) {
    lurks = result.lurkNum;
    chrome.storage.local.get('creNum', function(result) {
      cres = result.creNum;
      chrome.storage.local.get('knoNum', function(result) {
        knows = result.knoNum;
        chrome.storage.local.get('socNum', function(result) {
          socs = result.socNum;
          totalActVal = lurks + cres + knows + socs;
          $('.lurkbar').width((parseFloat(lurks)/parseFloat(totalActVal)) * $('.lurkbar-bg').width() * 100);
          $('.crebar').width((parseFloat(cres)/parseFloat(totalActVal)) * $('.crebar-bg').width() * 100);
          $('.knobar').width((parseFloat(knows)/parseFloat(totalActVal)) * $('.knobar-bg').width() * 100);
          $('.socbar').width((parseFloat(socs)/parseFloat(totalActVal)) * $('.socbar-bg').width() * 100);
        });
      });
    });
  });



});

function setBadge(level) {
  var iconL = parseInt(level)%6;
  if (String(iconL) == 'NaN') {
    iconL = 0;
  }
  $('.icon_container img').attr('src', 'img/ranks/Tier' + parseInt(iconL) + '.png');
}
