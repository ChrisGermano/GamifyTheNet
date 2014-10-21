//Popup script

$(document).ready(function() {
  var cxp,fxp;
  var nuker = new Konami(function() { chrome.runtime.sendMessage({action: 'Nuke'}); });

  chrome.storage.sync.get('title', function(result) {
    $('.pt').text(result.title);
  });
  chrome.storage.sync.get('level', function(result) {
    var lvl = parseInt(result.level);
    $('.pl').text(result.level);
    setBadge(result.level);
    chrome.storage.sync.get('rank', function(result) {
      var mxp = Math.pow(lvl+1, result.rank);
      fxp = parseInt(mxp);
      $('.mxp').text(mxp);
      chrome.storage.sync.get('xp', function(result) {
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

  chrome.storage.sync.get('lurkNum', function(result) {
    lurks = parseFloat(result.lurkNum);
    chrome.storage.sync.get('creNum', function(result) {
      cres = parseFloat(result.creNum);
      chrome.storage.sync.get('knoNum', function(result) {
        knows = parseFloat(result.knoNum);
        chrome.storage.sync.get('socNum', function(result) {
          socs = parseFloat(result.socNum);
          chrome.storage.sync.get('totalActs', function(result) {
            totalActVal = parseFloat(result.totalActs);
            $('.lurkbar').width((lurks/totalActVal) * $('.lurkbar-bg').width());
            $('.crebar').width((cres/totalActVal) * $('.crebar-bg').width());
            $('.knobar').width((knows/totalActVal) * $('.knobar-bg').width());
            $('.socbar').width((socs/totalActVal) * $('.socbar-bg').width());
          });
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
