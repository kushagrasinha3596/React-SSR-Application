/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USERS = exports.FETCH_USERS = 'fetch-users';
var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch-current-users';
var FETCH_ADMINS = exports.FETCH_ADMINS = 'fetch-admins';

var fetchUsers = exports.fetchUsers = function fetchUsers() {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, axiosInstance) {
            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return axiosInstance.get('/users');

                        case 2:
                            data = _context.sent;

                            dispatch({
                                type: FETCH_USERS,
                                payload: data
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }();
};

var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, axiosInstance) {
            var data;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return axiosInstance.get('/current_user');

                        case 2:
                            data = _context2.sent;

                            dispatch({
                                type: FETCH_CURRENT_USER,
                                payload: data
                            });

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function (_x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
        };
    }();
};

var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
    return function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, axiosInstance) {
            var data;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            data = [];
                            _context3.prev = 1;
                            _context3.next = 4;
                            return axiosInstance.get('/admins');

                        case 4:
                            data = _context3.sent;
                            _context3.next = 10;
                            break;

                        case 7:
                            _context3.prev = 7;
                            _context3.t0 = _context3['catch'](1);

                            console.log("Unable to fetch admins list, seems user is not logged in");

                        case 10:
                            dispatch({
                                type: FETCH_ADMINS,
                                payload: data
                            });

                        case 11:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined, [[1, 7]]);
        }));

        return function (_x7, _x8, _x9) {
            return _ref3.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _home = __webpack_require__(12);

var _home2 = _interopRequireDefault(_home);

var _usersList = __webpack_require__(13);

var _usersList2 = _interopRequireDefault(_usersList);

var _app = __webpack_require__(14);

var _app2 = _interopRequireDefault(_app);

var _AdminList = __webpack_require__(16);

var _AdminList2 = _interopRequireDefault(_AdminList);

var _NotFoundPage = __webpack_require__(17);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _app2.default, {
    routes: [_extends({}, _home2.default, {
        path: '/',
        exact: true
    }), _extends({}, _usersList2.default, {
        path: '/users'
    }), _extends({}, _AdminList2.default, {
        path: '/admins'
    }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(10);

var _createStore = __webpack_require__(19);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(3);

var _Route = __webpack_require__(4);

var _Route2 = _interopRequireDefault(_Route);

var _expressHttpProxy = __webpack_require__(26);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/api', (0, _expressHttpProxy2.default)('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}));

app.use(_express2.default.static('public')); //can be accessed from browser as 'localhost:3000/bundle.js'

app.get('*', function (req, res) {
    var store = (0, _createStore2.default)(req);
    var matchedRoutes = (0, _reactRouterConfig.matchRoutes)(_Route2.default, req.path);
    //'matchedRoutes' - not used to routing purpose. For that we use 'renderRoutes'
    //'matchedRoutes' is used for getting objects configured for matched routes, so that we can check for any function to load data, or any configured data in tha object
    var promises = matchedRoutes.map(function (_ref) {
        var route = _ref.route;

        var loadData = route.loadData;
        if (loadData) {
            return loadData(store);
        }
    });
    var alwaysResolvedPromises = promises.map(function (promise) {
        if (promise) {
            return new Promise(function (res, rej) {
                promise.then(function (data) {
                    return res(data);
                }).catch(function (err) {
                    return res(err);
                });
            });
        }
    });

    Promise.all(alwaysResolvedPromises).then(function () {
        var context = {};
        var content = (0, _renderer.rendererHelper)(req, store, context);
        if (context.notFound) {
            res.status(404);
        }
        res.send(content);
    });
});

app.listen(3000, function () {
    console.log("App listening to port 3000");
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rendererHelper = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(11);

var _server2 = _interopRequireDefault(_server);

var _Route = __webpack_require__(4);

var _Route2 = _interopRequireDefault(_Route);

var _reactRouterDom = __webpack_require__(5);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(3);

var _serializeJavascript = __webpack_require__(18);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rendererHelper = exports.rendererHelper = function rendererHelper(req, store, context) {
    var content = _server2.default.renderToString(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.path, context: context },
            _react2.default.createElement(
                'div',
                null,
                (0, _reactRouterConfig.renderRoutes)(_Route2.default)
            )
        )
    ));

    return '\n    <html>\n    <head></head>\n    <body>\n        <div id="root">' + content + '</div>\n        <script>\n            window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n        </script>\n        <script src="bundle.js"></script>\n    </body>\n    </html>\n';
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home(props) {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "div",
            null,
            "I'm best home component"
        ),
        _react2.default.createElement(
            "button",
            { onClick: function onClick() {
                    return console.log("Hii There");
                } },
            "Press Me!"
        )
    );
};

exports.default = {
    component: Home
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadData = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _index = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersList = function (_Component) {
    _inherits(UsersList, _Component);

    function UsersList() {
        _classCallCheck(this, UsersList);

        return _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).apply(this, arguments));
    }

    _createClass(UsersList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.getUsersList) {
                this.props.getUsersList();
            }
        }
    }, {
        key: 'renderUsers',
        value: function renderUsers() {
            return _react2.default.createElement(
                'ul',
                null,
                this.props.usersList && this.props.usersList.map(function (userObj) {
                    return _react2.default.createElement(
                        'li',
                        { key: userObj.id },
                        userObj.name
                    );
                })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.renderUsers()
            );
        }
    }]);

    return UsersList;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        usersList: state.users
    };
};

var mapDispathToProps = function mapDispathToProps(dispatch) {
    return {
        getUsersList: function getUsersList() {
            return dispatch((0, _index.fetchUsers)());
        }
    };
};

var loadData = exports.loadData = function loadData(store) {
    return store.dispatch((0, _index.fetchUsers)());
};

exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps, mapDispathToProps)(UsersList),
    loadData: loadData
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadData = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(3);

var _Header = __webpack_require__(15);

var _Header2 = _interopRequireDefault(_Header);

var _index = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
    var route = _ref.route;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        (0, _reactRouterConfig.renderRoutes)(route.routes)
    );
};

var loadData = exports.loadData = function loadData(store) {
    return store.dispatch((0, _index.fetchCurrentUser)());
};

exports.default = {
    component: App,
    loadData: loadData
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            'React SSR'
        ),
        _react2.default.createElement(
            'div',
            { style: {
                    display: 'flex',
                    justifyContent: 'space-around'
                } },
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/users' },
                'Users'
            ),
            _react2.default.createElement(
                'a',
                { href: '/admins' },
                'Admins'
            ),
            props.auth ? _react2.default.createElement(
                'a',
                { href: '/api/logout' },
                'Logout'
            ) : _react2.default.createElement(
                'a',
                { href: '/api/auth/google' },
                'Login'
            )
        )
    );
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        auth: state.auth
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadData = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _index = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminList = function (_Component) {
    _inherits(AdminList, _Component);

    function AdminList() {
        _classCallCheck(this, AdminList);

        return _possibleConstructorReturn(this, (AdminList.__proto__ || Object.getPrototypeOf(AdminList)).apply(this, arguments));
    }

    _createClass(AdminList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.fetchAdmins) {
                this.props.fetchAdmins();
            }
        }
    }, {
        key: 'getAdminsList',
        value: function getAdminsList() {
            return _react2.default.createElement(
                'ul',
                null,
                this.props.adminsList && this.props.adminsList.map(function (adminObj) {
                    return _react2.default.createElement(
                        'li',
                        { key: adminObj.id },
                        adminObj.name
                    );
                })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this.props.adminsList && this.props.adminsList.length > 0 ? this.getAdminsList() : _react2.default.createElement(
                'h1',
                null,
                'Login First Please!!!'
            );
        }
    }]);

    return AdminList;
}(_react.Component);

var loadData = exports.loadData = function loadData(store) {
    return store.dispatch((0, _index.fetchAdmins)());
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        adminsList: state.admins
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        fetchAdmins: function fetchAdmins() {
            return dispatch((0, _index.fetchAdmins)());
        }
    };
};

exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AdminList),
    loadData: loadData
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
    var staticContext = _ref.staticContext;

    staticContext.notFound = true;
    return _react2.default.createElement(
        'h1',
        null,
        'Oops, not found page'
    );
};

exports.default = {
    component: NotFoundPage
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(6);

var _reduxThunk = __webpack_require__(20);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(21);

var _axios2 = _interopRequireDefault(_axios);

var _index = __webpack_require__(22);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
    var cookie = req.get('cookie');
    var axiosInstance = _axios2.default.create({
        baseURL: 'http://react-ssr-api.herokuapp.com',
        headers: {
            cookie: cookie || ''
        }
    });
    var store = (0, _redux.createStore)(_index2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));
    return store;
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(6);

var _usersReducer = __webpack_require__(23);

var _authReducer = __webpack_require__(24);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _adminsReducer = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    users: _usersReducer.userReducers,
    auth: _authReducer2.default,
    admins: _adminsReducer.adminsReducer
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.userReducers = undefined;

var _index = __webpack_require__(1);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = [];

var userReducers = exports.userReducers = function userReducers() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _index.FETCH_USERS:
            var actionData = [];
            if (action.payload && action.payload.data) {
                actionData = action.payload.data;
            }
            return [].concat(initialState, _toConsumableArray(actionData));

        default:
            return state;
    }
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(1);

var authReducer = function authReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case _index.FETCH_CURRENT_USER:
            return action.payload.data || false;
        default:
            return state;
    }
};

exports.default = authReducer;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.adminsReducer = undefined;

var _index = __webpack_require__(1);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = [];

var adminsReducer = exports.adminsReducer = function adminsReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _index.FETCH_ADMINS:
            var actionData = [];
            if (action.payload && action.payload.data) {
                actionData = action.payload.data;
            }
            return [].concat(initialState, _toConsumableArray(actionData));

        default:
            return state;
    }
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ })
/******/ ]);