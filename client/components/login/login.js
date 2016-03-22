import api from '../../api';

var tag = this;

tag.doLogin = function (e) {
    var email = tag.email.value;
    var password = tag.password.value;
    api.login(email, password, function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log('login attempt');
        }
    });
};
