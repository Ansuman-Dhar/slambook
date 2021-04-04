function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

async function checkCookie() {
    let id = getCookie("id");
    if (id != "") {
        cookieAllowed_Global = true;
        id_Global = id;
        allowCookies();
    } else {
        if (cookieAllowed_Global == true){
            getRandomId();
            await sleep(750);
            id = id_Global;
            await sleep(250);
            if (id != "" && id != null) {
                setCookie("id", id, 365);
            }
            location.reload();
        }
    }
}

window.addEventListener('load', function(){
    checkCookie();
    if (document.cookie == "" || getCookie('id') == "" || getCookie('id') == null){
        document.getElementById('cookieAlert').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
})

function allowCookies(clicked){
    document.getElementById('cookieAlert').style.display = 'none';
    document.body.style.overflow = 'visible';
    cookieAllowed_Global = true;
    if (clicked)
        checkCookie();
}