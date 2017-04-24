webpackHotUpdate(5,{

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(201);

var _head2 = _interopRequireDefault(_head);

var _axios = __webpack_require__(571);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/M5/next-projects/project-nextjs-1/pages/index.js?entry';


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, 'League Table'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/purecss@0.6.1/build/pure-min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            })), _react2.default.createElement('div', { className: 'pure-g', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, _react2.default.createElement('div', { className: 'pure-u-1-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }), _react2.default.createElement('div', { className: 'pure-u-1-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, 'Barclays Premier League'), _react2.default.createElement('table', { className: 'pure-table', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement('thead', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement('tr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, 'Position'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, 'Team'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, 'P'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, 'GL'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, 'W'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, 'D'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, 'L'))), _react2.default.createElement('tbody', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, this.props.data.standing.map(function (standing, i) {
                var oddOrNot = i % 2 == 1 ? "pure-table-odd" : "";
                return _react2.default.createElement('tr', { key: i, className: oddOrNot, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    }
                }, _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                    }
                }, standing.position), _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                    }
                }, _react2.default.createElement('img', { className: 'pure-img logo', src: standing.crestURI, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                    }
                })), _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
                    }
                }, standing.points), _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                    }
                }, standing.goals), _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                    }
                }, standing.wins), _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48
                    }
                }, standing.draws), _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                    }
                }, standing.losses));
            })))), _react2.default.createElement('div', { className: 'pure-u-1-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            })));
        }
    }], [{
        key: 'getInitialProps',

        // Async operations with getInitialProps
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                var res;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _axios2.default.get('http://api.football-data.org/v1/competitions/426/leagueTable');

                            case 2:
                                res = _context.sent;
                                return _context.abrupt('return', { data: res.data });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/M5/next-projects/project-nextjs-1/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/M5/next-projects/project-nextjs-1/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9mMjM5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTzs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQVlDO21DQUNJOzs4QkFBQTtnQ0FDSTtBQURKO0FBQUEsK0JBQ0s7OzhCQUFEO2dDQUNJO0FBREo7QUFBQSwrQkFDSTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQ0EseURBQU0sTUFBSyxZQUFXLFNBQVE7OEJBQTlCO2dDQUNBO0FBREE7d0RBQ00sS0FBSSxjQUFhLE1BQUs7OEJBQTVCO2dDQUVKO0FBRkk7aUNBRUosdUJBQUssV0FBVTs4QkFBZjtnQ0FDSTtBQURKO3NEQUNTLFdBQVU7OEJBQWY7Z0NBQ0E7QUFEQTtnQ0FDQSx1QkFBSyxXQUFVOzhCQUFmO2dDQUNJO0FBREo7K0JBQ0k7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUNBLHFFQUFPLFdBQVU7OEJBQWpCO2dDQUNJO0FBREo7K0JBQ0k7OzhCQUFBO2dDQUNFO0FBREY7QUFBQSwrQkFDRTs7OEJBQUE7Z0NBQ0k7QUFESjtBQUFBLCtCQUNJOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFDQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQ0E7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUNBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFDQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQ0E7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUNBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFHTjs7OEJBQUE7Z0NBQ0M7QUFERDtBQUFBLG9CQUNNLE1BQU0sS0FBSyxTQUFTLElBQUksVUFBQyxVQUFVLEdBQ3JDO29CQUFNLFdBQVcsSUFBSSxLQUFLLElBQUksbUJBQzlCO3VDQUNJLHNCQUFJLEtBQUssR0FBRyxXQUFXO2tDQUF2QjtvQ0FDSTtBQURKO2lCQUFBLGtCQUNJOztrQ0FBQTtvQ0FBSztBQUFMO0FBQUEsNEJBQ0E7O2tDQUFBO29DQUFJO0FBQUo7QUFBQSwwREFBUyxXQUFVLGlCQUFnQixLQUFLLFNBQVM7a0NBQTdDO29DQUNKO0FBREk7cUNBQ0o7O2tDQUFBO29DQUFLO0FBQUw7QUFBQSw0QkFDQTs7a0NBQUE7b0NBQUs7QUFBTDtBQUFBLDRCQUNBOztrQ0FBQTtvQ0FBSztBQUFMO0FBQUEsNEJBQ0E7O2tDQUFBO29DQUFLO0FBQUw7QUFBQSw0QkFDQTs7a0NBQUE7b0NBQUs7QUFBTDtBQUFBLDRCQUdYO0FBSVQsMERBQUssV0FBVTs4QkFBZjtnQ0FLZjtBQUxlOzs7O2FBbERoQjs7Ozs7Ozs7Ozs7dUNBSXNCLGdCQUFNLElBQUk7O2lDQUF0Qjs7aUVBRUMsRUFBQyxNQUFNLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFQRyxnQkFBTSIsImZpbGUiOiI1LmM1MTliNzk5NDhiOWQ5OGE1MzM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgLy8gQXN5bmMgb3BlcmF0aW9ucyB3aXRoIGdldEluaXRpYWxQcm9wc1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKXtcbiAgICAgICAgLy8gcmVzIGlzIGFzc2lnbmVkIHRoZSByZXNwb25zZSBvbmNlIHRoZSBheGlvc1xuICAgICAgICAvLyBhc3luYyBnZXQgaXMgY29tcGxldGVkXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2FwaS5mb290YmFsbC1kYXRhLm9yZy92MS9jb21wZXRpdGlvbnMvNDI2L2xlYWd1ZVRhYmxlJyk7XG4gICAgICAgIC8vIHJldHVybiBwcm9wZXJ0aWVzXG4gICAgICAgIHJldHVybiB7ZGF0YTogcmVzLmRhdGF9XG4gICAgfVxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+TGVhZ3VlIFRhYmxlPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3B1cmVjc3NAMC42LjEvYnVpbGQvcHVyZS1taW4uY3NzXCIgLz5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkJhcmNsYXlzIFByZW1pZXIgTGVhZ3VlPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwdXJlLXRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Qb3NpdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRlYW08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+R0w8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5XPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkw8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhLnN0YW5kaW5nLm1hcCgoc3RhbmRpbmcsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2RkT3JOb3QgPSBpICUgMiA9PSAxID8gXCJwdXJlLXRhYmxlLW9kZFwiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9IGNsYXNzTmFtZT17b2RkT3JOb3R9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57c3RhbmRpbmcucG9zaXRpb259PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGltZyBjbGFzc05hbWU9XCJwdXJlLWltZyBsb2dvXCIgc3JjPXtzdGFuZGluZy5jcmVzdFVSSX0vPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzdGFuZGluZy5wb2ludHN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3N0YW5kaW5nLmdvYWxzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzdGFuZGluZy53aW5zfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzdGFuZGluZy5kcmF3c308L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57c3RhbmRpbmcubG9zc2VzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKVxuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9