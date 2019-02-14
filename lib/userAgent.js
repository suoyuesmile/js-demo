var browser = {}
var getUA = function(ua) {
  ua.name = navigator.appName
  ua.version = navigator.appVersion
  ua.code = navigator.appCodeName
  ua.useragent = navigator.userAgent
}

getUA(browser)
console.log(browser)
