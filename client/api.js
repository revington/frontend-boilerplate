'use strict';

var api = {
    login: function (email, password, callback) {
        console.log('login attempt', email, password);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/login');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function () {
            if (xhr.status === 200) {
                return callback();
            }
            return callback(xhr);
        };
        xhr.send(JSON.stringify({
            email: email,
            password: password
        }));
    }
};

export default api;
