
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, __resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _stringify = __webpack_require__(594);

var _stringify2 = _interopRequireDefault(_stringify);

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

var _link = __webpack_require__(596);

var _link2 = _interopRequireDefault(_link);

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
        key: 'componentDidMount',
        value: function componentDidMount() {

            if (!sessionStorage.getItem('bpl')) sessionStorage.setItem('bpl', (0, _stringify2.default)(this.props.data));
        }
    }, {
        key: 'render',
        value: function render() {
            var logoStyle = {
                width: '30px'
            };
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, 'League Table'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/purecss@0.6.1/build/pure-min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            })), _react2.default.createElement('div', { className: 'pure-g', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('div', { className: 'pure-u-1-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }), _react2.default.createElement('div', { className: 'pure-u-1-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, 'Barclays Premier League'), _react2.default.createElement('table', { className: 'pure-table', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('thead', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('tr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, 'Position'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, 'Team'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'P'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, 'GL'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'W'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, 'D'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, 'L'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }))), _react2.default.createElement('tbody', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, this.props.data.standing.map(function (standing, i) {
                var oddOrNot = i % 2 == 1 ? "pure-table-odd" : "";
                return _react2.default.createElement('tr', { key: i, className: oddOrNot, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                    }
                }, _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                    }
                }, standing.position), _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    }
                }, _react2.default.createElement('img', { className: 'pure-img logo', src: standing.crestURI, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    }
                })), _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 55
                    }
                }, standing.points), _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                    }
                }, standing.goals), _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 57
                    }
                }, standing.wins), _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58
                    }
                }, standing.draws), _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                    }
                }, standing.losses), _react2.default.createElement('td', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
                    }
                }, _react2.default.createElement(_link2.default, { href: '/details?id=' + standing.position, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
                    }
                }, 'More...')));
            })))), _react2.default.createElement('div', { className: 'pure-u-1-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            })));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                var res;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (process.browser) {
                                    _context.next = 7;
                                    break;
                                }

                                _context.next = 3;
                                return _axios2.default.get('http://api.football-data.org/v1/competitions/426/leagueTable');

                            case 3:
                                res = _context.sent;
                                return _context.abrupt('return', { data: res.data });

                            case 7:
                                return _context.abrupt('return', { data: JSON.parse(sessionStorage.getItem('bpl')) });

                            case 8:
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
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42), "?entry"))

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(562);


/***/ })

},[563]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz84ZGQ4MWZiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0Q0FjQzs7Z0JBQUcsQ0FBQyxlQUFlLFFBQVEsUUFBUSxlQUFlLFFBQVEsT0FBTyx5QkFBZSxLQUFLLE1BQzVGOzs7O2lDQUVPO2dCQUFNO3VCQUdOO0FBRkk7bUNBR0E7OzhCQUFBO2dDQUNJO0FBREo7QUFBQSwrQkFDSzs7OEJBQUQ7Z0NBQ0k7QUFESjtBQUFBLCtCQUNJOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFDQSx5REFBTSxNQUFLLFlBQVcsU0FBUTs4QkFBOUI7Z0NBQ0E7QUFEQTt3REFDTSxLQUFJLGNBQWEsTUFBSzs4QkFBNUI7Z0NBRUo7QUFGSTtpQ0FFSix1QkFBSyxXQUFVOzhCQUFmO2dDQUNJO0FBREo7c0RBQ1MsV0FBVTs4QkFBZjtnQ0FDQTtBQURBO2dDQUNBLHVCQUFLLFdBQVU7OEJBQWY7Z0NBQ0k7QUFESjsrQkFDSTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQ0EscUVBQU8sV0FBVTs4QkFBakI7Z0NBQ0k7QUFESjsrQkFDSTs7OEJBQUE7Z0NBQ0U7QUFERjtBQUFBLCtCQUNFOzs4QkFBQTtnQ0FDSTtBQURKO0FBQUEsK0JBQ0k7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUNBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFDQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQ0E7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUNBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFDQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQ0E7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUNBOzs4QkFBQTtnQ0FHTjtBQUhNO0FBQUEsa0NBR047OzhCQUFBO2dDQUNDO0FBREQ7QUFBQSxvQkFDTSxNQUFNLEtBQUssU0FBUyxJQUFJLFVBQUMsVUFBVSxHQUNyQztvQkFBTSxXQUFXLElBQUksS0FBSyxJQUFJLG1CQUM5Qjt1Q0FDSSxzQkFBSSxLQUFLLEdBQUcsV0FBVztrQ0FBdkI7b0NBQ0k7QUFESjtpQkFBQSxrQkFDSTs7a0NBQUE7b0NBQUs7QUFBTDtBQUFBLDRCQUNBOztrQ0FBQTtvQ0FBSTtBQUFKO0FBQUEsMERBQVMsV0FBVSxpQkFBZ0IsS0FBSyxTQUFTO2tDQUE3QztvQ0FDSjtBQURJO3FDQUNKOztrQ0FBQTtvQ0FBSztBQUFMO0FBQUEsNEJBQ0E7O2tDQUFBO29DQUFLO0FBQUw7QUFBQSw0QkFDQTs7a0NBQUE7b0NBQUs7QUFBTDtBQUFBLDRCQUNBOztrQ0FBQTtvQ0FBSztBQUFMO0FBQUEsNEJBQ0E7O2tDQUFBO29DQUFLO0FBQUw7QUFBQSw0QkFDQTs7a0NBQUE7b0NBQUk7QUFBSjtBQUFBLG1DQUFLLGdDQUFLLHVCQUFxQixTQUFTO2tDQUFwQztvQ0FBQTtBQUFBO21CQUdmO0FBSVQsMERBQUssV0FBVTs4QkFBZjtnQ0FLZjtBQUxlOzs7Ozs7Ozs7Ozs7b0NBMURQLFFBQVE7Ozs7Ozt1Q0FDUyxnQkFBTSxJQUFJOztpQ0FBdEI7O2lFQUNDLEVBQUMsTUFBTSxJQUFJOzs7aUVBRVgsRUFBQyxNQUFNLEtBQUssTUFBTSxlQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFQL0IsZ0JBQU0iLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgICAgIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9hcGkuZm9vdGJhbGwtZGF0YS5vcmcvdjEvY29tcGV0aXRpb25zLzQyNi9sZWFndWVUYWJsZScpO1xuICAgICAgICAgICAgcmV0dXJuIHtkYXRhOiByZXMuZGF0YX1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7ZGF0YTogSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdicGwnKSl9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuXG4gICAgICAgIGlmKCFzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdicGwnKSkgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnYnBsJywgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5kYXRhKSlcbn1cbiAgICByZW5kZXIgKCkge1xuICAgICAgICBjb25zdCBsb2dvU3R5bGUgPSB7XG4gICAgICAgICAgICB3aWR0aDogJzMwcHgnXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5MZWFndWUgVGFibGU8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vcHVyZWNzc0AwLjYuMS9idWlsZC9wdXJlLW1pbi5jc3NcIiAvPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+QmFyY2xheXMgUHJlbWllciBMZWFndWU8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInB1cmUtdGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBvc2l0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGVhbTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5HTDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlc8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGEuc3RhbmRpbmcubWFwKChzdGFuZGluZywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvZGRPck5vdCA9IGkgJSAyID09IDEgPyBcInB1cmUtdGFibGUtb2RkXCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0gY2xhc3NOYW1lPXtvZGRPck5vdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzdGFuZGluZy5wb3NpdGlvbn08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW1nIGNsYXNzTmFtZT1cInB1cmUtaW1nIGxvZ29cIiBzcmM9e3N0YW5kaW5nLmNyZXN0VVJJfS8+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3N0YW5kaW5nLnBvaW50c308L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57c3RhbmRpbmcuZ29hbHN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3N0YW5kaW5nLndpbnN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3N0YW5kaW5nLmRyYXdzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzdGFuZGluZy5sb3NzZXN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PExpbmsgaHJlZj17YC9kZXRhaWxzP2lkPSR7c3RhbmRpbmcucG9zaXRpb259YH0+TW9yZS4uLjwvTGluaz48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIClcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        