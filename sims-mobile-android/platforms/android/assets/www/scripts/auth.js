/* global*/
var text;
var icon;

function initAuth() {
    document.querySelector('.auth-send')
        .addEventListener('click', function () {
            var unameValue = document.querySelector('.auth-username').value;
            var pwdValue = document.querySelector('.auth-password').value;

            text = document.querySelector('.auth-result .text');
            icon = document.querySelector('.auth-result .fa');

            authenticate(unameValue, pwdValue);
        });
};

function authenticate(x, y) {  
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "http://dev-sims.oztaxa.com/oAuth20/oAuth2API/token",
        "method": "POST",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache"
        },
        "data": {
            "grant_type": "password",
            "username": x,
            "password": y
        }
    }

    $.ajax(settings).done(function (response) {
        //alert(JSON.stringify(response));
        icon.classList.add('fa-check');
        icon.classList.remove('fa-times');
        text.innerHTML = 'Login success!';
        $('#modalAuth').modal('hide');
    }).fail(function (response) {
        icon.classList.add('fa-times');
        icon.classList.remove('fa-check');
        text.innerHTML = 'Login Failed!';
    });

}