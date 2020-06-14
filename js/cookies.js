function createCookie(cookieValue, days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    document.cookie = "darkMode=" + cookieValue + "; expires=" + date.toGMTString();
    console.log("darkMode=" + cookieValue + "; expires=" + date.toGMTString());
}

function readCookie() {
    var mode = "darkMode=";
    var allCookieArray = document.cookie.split(';');
    for (var i = 0; i < allCookieArray.length; i++) {
        var temp = allCookieArray[i].trim();
        if (temp.indexOf(mode) == 0)
            return temp.substring(mode.length, temp.length);
    }
    return "";
}

function checkCookie(){
    var mode = readCookie();

    if (mode == "true"){
        $("body").addClass("dark")
        $(".lights-btn").attr("title", "Turn On the lights");
    }
}