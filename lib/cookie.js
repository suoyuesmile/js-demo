// 操作Cookie 方法
var CookieUtil = {
    set: function(name, value, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        if (expires) {
            var date = new Date();
            date.setDate(date.getDate() + expires);
            cookieText += ";expires=" + date.toUTCString();
        }
        if (path) {
            cookieText += ";path=" + path;
        }
        if (domain) {
            cookieText += ";domain=" + domain;
        }
        if (secure) {
            cookieText += ";secure";
        }
        document.cookie = cookieText;
    }

    get: function(name) {
        var cookieName = encodeURIComponent(name),
            cookieStart = document.cookie.indexOf(cookieName + "="),
            cookieEnd = 0,
            cookieValue = null;
        if (cookieStart > -1) {
            cookieStart += cookieName.length + 1;
            cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd === -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart, cookieEnd));
        }
        return cookieValue;
    }

    del: function(name) {
        if (this.get(name)) {
            var d = new Date();
            document.cookie = encodeURIComponent(name) + "=;expires=" + d.toUTCString();
        } else {
            console.log("dou't hava cookie named:" + name);
        }
    })
    
};