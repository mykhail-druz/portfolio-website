"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ \"./src/components/logo.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst LinkItem = (param)=>{\n    let { href , path , children  } = param;\n    _s();\n    const active = path === href;\n    const inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"gray200\", \"whiteAlpha.900\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n            p: 2,\n            bg: active ? \"glassTeal\" : undefined,\n            color: active ? \"#202023\" : inactiveColor,\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Михаил\\\\Documents\\\\GitHub\\\\portfolio-website\\\\src\\\\components\\\\navbar.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Михаил\\\\Documents\\\\GitHub\\\\portfolio-website\\\\src\\\\components\\\\navbar.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LinkItem, \"dl0xx8ZlQuUn9JhHFu16yTlHTaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nconst Navbar = (props)=>{\n    _s1();\n    const { path  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        position: \"fixed\",\n        as: \"nav\",\n        w: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"#ffffff40\", \"#20202380\"),\n        style: {\n            backdropFilter: \"blur(10px\"\n        },\n        zIndex: 1,\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            display: \"flex\",\n            p: 2,\n            maxW: \"container.md\",\n            wrap: \"wrap\",\n            align: \"center\",\n            justify: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                    align: \"center\",\n                    mr: 5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                        as: \"h1\",\n                        size: \"lg\",\n                        letterSpacing: \"tighter\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Михаил\\\\Documents\\\\GitHub\\\\portfolio-website\\\\src\\\\components\\\\navbar.js\",\n                            lineNumber: 57,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Михаил\\\\Documents\\\\GitHub\\\\portfolio-website\\\\src\\\\components\\\\navbar.js\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Михаил\\\\Documents\\\\GitHub\\\\portfolio-website\\\\src\\\\components\\\\navbar.js\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                    direction: {\n                        base: \"column\",\n                        md: \"row\"\n                    },\n                    display: {\n                        base: \"none\",\n                        md: \"flex\"\n                    },\n                    alignItems: \"center\",\n                    flexGrow: 1,\n                    mt: {\n                        base: 4\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Михаил\\\\Documents\\\\GitHub\\\\portfolio-website\\\\src\\\\components\\\\navbar.js\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Михаил\\\\Documents\\\\GitHub\\\\portfolio-website\\\\src\\\\components\\\\navbar.js\",\n            lineNumber: 47,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Михаил\\\\Documents\\\\GitHub\\\\portfolio-website\\\\src\\\\components\\\\navbar.js\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(Navbar, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c1 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBQ087QUFjUDtBQUN1QjtBQUVqRCxNQUFNZSxXQUFXLFNBQThCO1FBQTdCLEVBQUVDLEtBQUksRUFBRUMsS0FBSSxFQUFFQyxTQUFRLEVBQUU7O0lBQ3RDLE1BQU1DLFNBQVNGLFNBQVNEO0lBQ3hCLE1BQU1JLGdCQUFnQlAsbUVBQWlCQSxDQUFDLFdBQVc7SUFDbkQscUJBQ0ksOERBQUNaLGtEQUFRQTtRQUFDZSxNQUFNQTtrQkFDWiw0RUFBQ1osa0RBQUlBO1lBQ0xpQixHQUFHO1lBQ0hDLElBQUlILFNBQVMsY0FBY0ksU0FBUztZQUNwQ0MsT0FBT0wsU0FBUyxZQUFZQyxhQUFhO3NCQUNwQ0Y7Ozs7Ozs7Ozs7O0FBSWpCO0dBYk1IOztRQUVvQkYsK0RBQWlCQTs7O0tBRnJDRTtBQWVOLE1BQU1VLFNBQVNDLENBQUFBLFFBQVM7O0lBQ3BCLE1BQU0sRUFBRVQsS0FBSSxFQUFFLEdBQUdTO0lBRWpCLHFCQUNJLDhEQUFDdkIsaURBQUdBO1FBQ0p3QixVQUFTO1FBQ1RDLElBQUc7UUFDSEMsR0FBRTtRQUNGUCxJQUFJVCxtRUFBaUJBLENBQUMsYUFBYTtRQUNuQ2lCLE9BQU87WUFBQ0MsZ0JBQWdCO1FBQVc7UUFDbkNDLFFBQVE7UUFDUCxHQUFHTixLQUFLO2tCQUVMLDRFQUFDeEIsdURBQVNBO1lBQ1YrQixTQUFRO1lBQ1JaLEdBQUc7WUFDSGEsTUFBSztZQUNMQyxNQUFLO1lBQ0xDLE9BQU07WUFDTkMsU0FBUTs7OEJBRUosOERBQUM5QixrREFBSUE7b0JBQUM2QixPQUFNO29CQUFTRSxJQUFJOzhCQUNyQiw0RUFBQ2hDLHFEQUFPQTt3QkFBQ3NCLElBQUc7d0JBQUtXLE1BQUs7d0JBQUtDLGVBQWU7a0NBQ3RDLDRFQUFDeEMsNkNBQUlBOzs7Ozs7Ozs7Ozs7Ozs7OEJBSWIsOERBQUNLLG1EQUFLQTtvQkFDTm9DLFdBQVc7d0JBQUNDLE1BQU07d0JBQVVDLElBQUk7b0JBQUs7b0JBQ3JDVixTQUFTO3dCQUFDUyxNQUFNO3dCQUFRQyxJQUFJO29CQUFNO29CQUNsQ0MsWUFBVztvQkFDWEMsVUFBVTtvQkFDVkMsSUFBSTt3QkFBRUosTUFBSztvQkFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPOUI7SUF2Q01qQjs7UUFRTVosK0RBQWlCQTs7O01BUnZCWTtBQXlDTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanM/YTU2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28nO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtcclxuICAgIENvbnRhaW5lcixcclxuICAgIEJveCxcclxuICAgIExpbmssXHJcbiAgICBTdGFjayxcclxuICAgIEhlYWRpbmcsXHJcbiAgICBGbGV4LFxyXG4gICAgTWVudSxcclxuICAgIE1lbnVJdGVtLFxyXG4gICAgTWVudUxpc3QsXHJcbiAgICBNZW51Qml0dG9uLFxyXG4gICAgSWNvbkJ1dHRvbixcclxuICAgIHVzZUNvbG9yTW9kZVZhbHVlXHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7IEh1bWJ1cmdlckljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcclxuXHJcbmNvbnN0IExpbmtJdGVtID0gKHsgaHJlZiwgcGF0aCwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgYWN0aXZlID0gcGF0aCA9PT0gaHJlZlxyXG4gICAgY29uc3QgaW5hY3RpdmVDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKCdncmF5MjAwJywgJ3doaXRlQWxwaGEuOTAwJylcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE5leHRMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBwPXsyfVxyXG4gICAgICAgICAgICBiZz17YWN0aXZlID8gJ2dsYXNzVGVhbCcgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgIGNvbG9yPXthY3RpdmUgPyAnIzIwMjAyMycgOiBpbmFjdGl2ZUNvbG9yfT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTmV4dExpbms+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IE5hdmJhciA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IHsgcGF0aCB9ID0gcHJvcHNcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IFxyXG4gICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxyXG4gICAgICAgIGFzPVwibmF2XCJcclxuICAgICAgICB3PVwiMTAwJVwiXHJcbiAgICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKCcjZmZmZmZmNDAnLCAnIzIwMjAyMzgwJyl9XHJcbiAgICAgICAgc3R5bGU9e3tiYWNrZHJvcEZpbHRlcjogJ2JsdXIoMTBweCd9fVxyXG4gICAgICAgIHpJbmRleD17MX1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICAgICAgcD17Mn1cclxuICAgICAgICAgICAgbWF4Vz1cImNvbnRhaW5lci5tZFwiXHJcbiAgICAgICAgICAgIHdyYXA9XCJ3cmFwXCJcclxuICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIgbXI9ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiBzaXplPVwibGdcIiBsZXR0ZXJTcGFjaW5nPXsndGlnaHRlcid9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuXHJcbiAgICAgICAgICAgICAgICA8U3RhY2tcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj17e2Jhc2U6ICdjb2x1bW4nLCBtZDogJ3Jvdyd9fVxyXG4gICAgICAgICAgICAgICAgZGlzcGxheT17e2Jhc2U6ICdub25lJywgbWQ6ICdmbGV4J319XHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIGZsZXhHcm93PXsxfVxyXG4gICAgICAgICAgICAgICAgbXQ9e3sgYmFzZTo0LCB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiXSwibmFtZXMiOlsiTG9nbyIsIk5leHRMaW5rIiwiQ29udGFpbmVyIiwiQm94IiwiTGluayIsIlN0YWNrIiwiSGVhZGluZyIsIkZsZXgiLCJNZW51IiwiTWVudUl0ZW0iLCJNZW51TGlzdCIsIk1lbnVCaXR0b24iLCJJY29uQnV0dG9uIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJIdW1idXJnZXJJY29uIiwiTGlua0l0ZW0iLCJocmVmIiwicGF0aCIsImNoaWxkcmVuIiwiYWN0aXZlIiwiaW5hY3RpdmVDb2xvciIsInAiLCJiZyIsInVuZGVmaW5lZCIsImNvbG9yIiwiTmF2YmFyIiwicHJvcHMiLCJwb3NpdGlvbiIsImFzIiwidyIsInN0eWxlIiwiYmFja2Ryb3BGaWx0ZXIiLCJ6SW5kZXgiLCJkaXNwbGF5IiwibWF4VyIsIndyYXAiLCJhbGlnbiIsImp1c3RpZnkiLCJtciIsInNpemUiLCJsZXR0ZXJTcGFjaW5nIiwiZGlyZWN0aW9uIiwiYmFzZSIsIm1kIiwiYWxpZ25JdGVtcyIsImZsZXhHcm93IiwibXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/navbar.js\n"));

/***/ })

});