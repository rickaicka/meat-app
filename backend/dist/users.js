"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email === this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "ricardo@gmail.com": new User("ricardo@gmail.com", "Ricardo Salim", '123456'),
    "rafael@gmail.com": new User("rafael@gmail.com", "Rafael Salim", '123456')
};
