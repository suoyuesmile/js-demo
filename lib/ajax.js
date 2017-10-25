// 1.create
var xhr = new XMLHttpRequest();

// 2.onreadystatechange
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
            console.log("ok");
        } else {
            console.log("fail");
        }
    }
}

// 3.open
xhr.open("post", "http://101.132.34.184/demo/demo1.php", true);

// 4.send
xhr.send({
    "username": "shaosuo"
});
