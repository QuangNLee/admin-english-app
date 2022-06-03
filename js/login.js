document.addEventListener('DOMContentLoaded', function () {
    var btnLogin = document.getElementById('btnLogin');
    var txtUsername = document.forms['login-form']['username'];
    var txtPassword = document.forms['login-form']['password'];

    btnLogin.onclick = function () {
        var username = txtUsername.value;
        var password = txtPassword.value;

        var dataToSend = {
            username: username,
            password: password
        }
        var method = 'get';
        var url = 'http://localhost:8080/api/v1/users/login';
        var successStatus = 200;

        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onreadystatechange = function () {
            if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == successStatus) {
                // alert('success');
                window.location.href = '/index.html';
            }
        };
        xmlHttpRequest.open(method, url, false);
        xmlHttpRequest.setRequestHeader('Content-Type', 'application/json');
        xmlHttpRequest.send(JSON.stringify(dataToSend));
    }
})