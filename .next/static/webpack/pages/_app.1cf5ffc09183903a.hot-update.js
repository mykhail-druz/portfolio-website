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

/***/ "./components/voxel-city.js":
/*!**********************************!*\
  !*** ./components/voxel-city.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nconst VoxelCity = ()=>{\n    _s();\n    const refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [renderer, setRenderer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [camera, setCamera] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [target] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(-0.5, 1.2, 0));\n    const [initialCameraPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI)));\n    const [scene] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Scene());\n    const [_controls, setControls] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    /* eslint-disable react-hooks/exhaustive-deps*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { current: container  } = refContainer;\n        if (container && !renderer) {\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            const renderer = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer.setPixelRatio(window.devicePixelRatio);\n            renderer.serSize(sxW, scH);\n            renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_3__.sRGBEncoding;\n            container.appendChild(renderer.domElement);\n            setRenderer(renderer);\n            //640 ->240\n            //8 -> 6\n            const scale = scH * 0.005 + 4.8;\n            const camera = new three__WEBPACK_IMPORTED_MODULE_3__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            const ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0xcccccc, 1);\n            scene.add(ambientLight);\n            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__.OrbitControls(camera, renderer.domElement);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refContainer,\n        className: \"voxel-city\",\n        m: \"auto\",\n        at: [\n            \"-20px\",\n            \"-60px\",\n            \"-120px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-200px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n                size: \"xl\",\n                position: \"absolute\",\n                left: \"50%\",\n                top: \"50%\",\n                ml: \"calc(0px - var(--spinner-size) / 2)\",\n                mt: \"calc(opx - var(--spinner-size))\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Михаил\\\\Documents\\\\GitHub\\\\portfolio-website\\\\components\\\\voxel-city.js\",\n                lineNumber: 77,\n                columnNumber: 17\n            }, undefined),\n            \"City!!!\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Михаил\\\\Documents\\\\GitHub\\\\portfolio-website\\\\components\\\\voxel-city.js\",\n        lineNumber: 67,\n        columnNumber: 9\n    }, undefined);\n};\n_s(VoxelCity, \"WPPHHiBknGbulXSS1rYWkQS7cGI=\");\n_c = VoxelCity;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelCity);\nvar _c;\n$RefreshReg$(_c, \"VoxelCity\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWVBLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92b3hlbC1jaXR5LmpzP2IwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3gsIFNwaW5uZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scydcclxuaW1wb3J0IHsgbG9hZEdMVEZNb2RlbCB9IGZyb20gXCIuLi9saWIvbW9kZWxcIjtcclxuXHJcbmZ1bmN0aW9uIGVhc2VPdXRDaXJjKHgpIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCA0KSlcclxufVxyXG5cclxuY29uc3QgVm94ZWxDaXR5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVmQ29udGFpbmVyID0gdXNlUmVmKClcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbcmVuZGVyZXIsIHNldFJlbmRlcmVyXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFtjYW1lcmEsIHNldENhbWVyYV0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbdGFyZ2V0XSA9IHVzZVN0YXRlKCBuZXcgVEhSRUUuVmVjdG9yMygtMC41LCAxLjIsIDApKVxyXG4gICAgY29uc3QgW2luaXRpYWxDYW1lcmFQb3NpdGlvbl0gPSB1c2VTdGF0ZShcclxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhcclxuICAgICAgICAgICAgMjAgKiBNYXRoLnNpbigwLjIgKiBNYXRoLlBJKSxcclxuICAgICAgICAgICAgMTAsXHJcbiAgICAgICAgICAgIDIwICogTWF0aC5jb3MoMC4yICogTWF0aC5QSSlcclxuICAgICAgICApXHJcbiAgICApXHJcbiAgICBjb25zdCBbc2NlbmVdID0gdXNlU3RhdGUobmV3IFRIUkVFLlNjZW5lKCkpXHJcbiAgICBjb25zdFtfY29udHJvbHMsIHNldENvbnRyb2xzXSA9IHVzZVN0YXRlKClcclxuXHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMqL1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lcn0gPSByZWZDb250YWluZXJcclxuICAgICAgICBpZiAoY29udGFpbmVyICYmICFyZW5kZXJlcikge1xyXG4gICAgICAgICAgICBjb25zdCBzY1cgPSBjb250YWluZXIuY2xpZW50V2lkdGhcclxuICAgICAgICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodFxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XHJcbiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhbHBoYTogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxyXG4gICAgICAgICAgICByZW5kZXJlci5zZXJTaXplKHN4Vywgc2NIKVxyXG4gICAgICAgICAgICByZW5kZXJlci5vdXRwdXRFbmNvZGluZyA9IFRIUkVFLnNSR0JFbmNvZGluZ1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudClcclxuICAgICAgICAgICAgc2V0UmVuZGVyZXIocmVuZGVyZXIpXHJcblxyXG4gICAgICAgICAgICAvLzY0MCAtPjI0MFxyXG4gICAgICAgICAgICAvLzggLT4gNlxyXG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IHNjSCAqIDAuMDA1ICsgNC44XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoXHJcbiAgICAgICAgICAgICAgICAtc2NhbGUsXHJcbiAgICAgICAgICAgICAgICBzY2FsZSxcclxuICAgICAgICAgICAgICAgIHNjYWxlLFxyXG4gICAgICAgICAgICAgICAgLXNjYWxlLFxyXG4gICAgICAgICAgICAgICAgMC4wMSxcclxuICAgICAgICAgICAgICAgIDUwMDAwXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkoaW5pdGlhbENhbWVyYVBvc2l0aW9uKVxyXG4gICAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcclxuICAgICAgICAgICAgc2V0Q2FtZXJhKGNhbWVyYSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhjY2NjY2MsIDEpXHJcbiAgICAgICAgICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzIChjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IHJlZj17cmVmQ29udGFpbmVyfVxyXG4gICAgICAgIGNsYXNzTmFtZT0ndm94ZWwtY2l0eSdcclxuICAgICAgICBtPVwiYXV0b1wiXHJcbiAgICAgICAgYXQ9e1snLTIwcHgnLCAnLTYwcHgnLCAnLTEyMHB4J119XHJcbiAgICAgICAgbWI9e1snLTQwcHgnLCAnLTE0MHB4JywgJy0yMDBweCddfVxyXG4gICAgICAgIHc9e1syODAsIDQ4MCwgNjQwXX1cclxuICAgICAgICBoPXtbMjgwLCA0ODAsIDY0MF19XHJcbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7bG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8U3Bpbm5lciBzaXplPVwieGxcIlxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgICAgICAgICBsZWZ0PVwiNTAlXCIgdG9wPVwiNTAlXCJcclxuICAgICAgICAgICAgICAgIG1sPVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpIC8gMilcIlxyXG4gICAgICAgICAgICAgICAgbXQ9XCJjYWxjKG9weCAtIHZhcigtLXNwaW5uZXItc2l6ZSkpXCIgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgQ2l0eSEhIVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWb3hlbENpdHkiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VDYWxsYmFjayIsIkJveCIsIlNwaW5uZXIiLCJUSFJFRSIsIk9yYml0Q29udHJvbHMiLCJsb2FkR0xURk1vZGVsIiwiZWFzZU91dENpcmMiLCJ4IiwiTWF0aCIsInNxcnQiLCJwb3ciLCJWb3hlbENpdHkiLCJyZWZDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlbmRlcmVyIiwic2V0UmVuZGVyZXIiLCJjYW1lcmEiLCJzZXRDYW1lcmEiLCJ0YXJnZXQiLCJWZWN0b3IzIiwiaW5pdGlhbENhbWVyYVBvc2l0aW9uIiwic2luIiwiUEkiLCJjb3MiLCJzY2VuZSIsIlNjZW5lIiwiX2NvbnRyb2xzIiwic2V0Q29udHJvbHMiLCJjdXJyZW50IiwiY29udGFpbmVyIiwic2NXIiwiY2xpZW50V2lkdGgiLCJzY0giLCJjbGllbnRIZWlnaHQiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRQaXhlbFJhdGlvIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNlclNpemUiLCJzeFciLCJvdXRwdXRFbmNvZGluZyIsInNSR0JFbmNvZGluZyIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsInNjYWxlIiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwicG9zaXRpb24iLCJjb3B5IiwibG9va0F0IiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwiYWRkIiwiY29udHJvbHMiLCJyZWYiLCJjbGFzc05hbWUiLCJtIiwiYXQiLCJtYiIsInciLCJoIiwic2l6ZSIsImxlZnQiLCJ0b3AiLCJtbCIsIm10Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/voxel-city.js\n"));

/***/ })

});