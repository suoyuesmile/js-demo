// 获取URL中的对象
var urlToObject = function(url) {
    var result = {},
        paramsString = '',
        params = [],
        param = [],
        i,
        len,
        key,
        value;
    if ( /\?/.test(url) ) {
        end = url.indexOf('#') === -1 ? url.length : url.indexOf('#');
        paramsString = url.substring(url.indexOf('?') + 1, end); 
        params = paramsString.split('&');
        for (i = 0, len = params.length; i < len; i++) {
            param = params[i].split("=");
            key = decodeURIComponent(param[0]);
            value = decodeURIComponent(param[1]);
            result[key] = value;
        }
    }   
    return result;
}

console.log(urlToObject("http://suosmile.cn?name=suoyue&age=22"));
// {name: "suoyue", age: "22"}


