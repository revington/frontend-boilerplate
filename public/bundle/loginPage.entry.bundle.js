webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _header = __webpack_require__(2);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _riot = __webpack_require__(3);
	
	var _riot2 = _interopRequireDefault(_riot);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {
	riot.tag2('header', '<div id="header"><span>Logo</span></div>', '', '', function(opts) {
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _login = __webpack_require__(6);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _riot = __webpack_require__(3);
	
	var _riot2 = _interopRequireDefault(_riot);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {
	riot.tag2('login', '<form onsubmit="{doLogin}"> <label>email <input name="email" placeholder="email" type="email"> </label> <label>password <input type="password" name="password"> </label> <input type="submit"> </form>', '', '', function(opts) {
	'use strict';
	
	var _api = __webpack_require__(7);
	
	var _api2 = _interopRequireDefault(_api);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var tag = this;
	
	tag.doLogin = function (e) {
	    var email = tag.email.value;
	    var password = tag.password.value;
	    _api2.default.login(email, password, function (err) {
	        if (err) {
	            console.error(err);
	        } else {
	            console.log('login attempt');
	        }
	    });
	};
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var api = {
	    login: function login(email, password, callback) {
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
	
	exports.default = api;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _riot = __webpack_require__(3);
	
	var _riot2 = _interopRequireDefault(_riot);
	
	var _login = __webpack_require__(5);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _header = __webpack_require__(1);
	
	var _header2 = _interopRequireDefault(_header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_riot2.default.mount('*');

/***/ }
]);
//# sourceMappingURL=loginPage.entry.bundle.js.map