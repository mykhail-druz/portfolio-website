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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nconst VoxelCity = ()=>{\n    _s();\n    const refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [renderer, setRenderer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [camera, setCamera] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [target] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(-0.5, 1.2, 0));\n    const [initialCameraPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI)));\n    const [scene] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Scene());\n    const [_controls, setControls] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    /* eslint-disable react-hooks/exhaustive-deps*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { current: container  } = refContainer;\n        if (container && !renderer) {\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            const renderer = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer.setPixelRatio(window.devicePixelRatio);\n            renderer.serSize(sxW, scH);\n            renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_3__.sRGBEncoding;\n            container.appendChild(renderer.domElement);\n            setRenderer(renderer);\n            //640 ->240\n            //8 -> 6\n            const scale = scH * 0.005 + 4.8;\n            const camera = new three__WEBPACK_IMPORTED_MODULE_3__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            const ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0xcccccc, 1);\n            scene.add(ambientLight);\n            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__.OrbitControls(camera, renderer.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_2__.loadGLTFModel)(scene, \"/city.glb\", {\n                receiveShadow: false,\n                castShadow: false\n            }).then;\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refContainer,\n        className: \"voxel-city\",\n        m: \"auto\",\n        at: [\n            \"-20px\",\n            \"-60px\",\n            \"-120px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-200px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n                size: \"xl\",\n                position: \"absolute\",\n                left: \"50%\",\n                top: \"50%\",\n                ml: \"calc(0px - var(--spinner-size) / 2)\",\n                mt: \"calc(opx - var(--spinner-size))\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Михаил\\\\Documents\\\\GitHub\\\\portfolio-website\\\\components\\\\voxel-city.js\",\n                lineNumber: 85,\n                columnNumber: 17\n            }, undefined),\n            \"City!!!\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Михаил\\\\Documents\\\\GitHub\\\\portfolio-website\\\\components\\\\voxel-city.js\",\n        lineNumber: 75,\n        columnNumber: 9\n    }, undefined);\n};\n_s(VoxelCity, \"WPPHHiBknGbulXSS1rYWkQS7cGI=\");\n_c = VoxelCity;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelCity);\nvar _c;\n$RefreshReg$(_c, \"VoxelCity\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixVQUFTOztZQUVKcEMseUJBQ0csOERBQUNYLHFEQUFPQTtnQkFBQ2lFLE1BQUs7Z0JBQ2RsQixVQUFTO2dCQUNUbUIsTUFBSztnQkFBTUMsS0FBSTtnQkFDZkMsSUFBRztnQkFDSEMsSUFBRzs7Ozs7O1lBQ0w7Ozs7Ozs7QUFJZDtHQW5GTTVEO0tBQUFBO0FBcUZOLCtEQUFlQSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdm94ZWwtY2l0eS5qcz9iMDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm94LCBTcGlubmVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMnXHJcbmltcG9ydCB7IGxvYWRHTFRGTW9kZWwgfSBmcm9tIFwiLi4vbGliL21vZGVsXCI7XHJcblxyXG5mdW5jdGlvbiBlYXNlT3V0Q2lyYyh4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdyh4IC0gMSwgNCkpXHJcbn1cclxuXHJcbmNvbnN0IFZveGVsQ2l0eSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlZkNvbnRhaW5lciA9IHVzZVJlZigpXHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgW3JlbmRlcmVyLCBzZXRSZW5kZXJlcl0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbY2FtZXJhLCBzZXRDYW1lcmFdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW3RhcmdldF0gPSB1c2VTdGF0ZSggbmV3IFRIUkVFLlZlY3RvcjMoLTAuNSwgMS4yLCAwKSlcclxuICAgIGNvbnN0IFtpbml0aWFsQ2FtZXJhUG9zaXRpb25dID0gdXNlU3RhdGUoXHJcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoXHJcbiAgICAgICAgICAgIDIwICogTWF0aC5zaW4oMC4yICogTWF0aC5QSSksXHJcbiAgICAgICAgICAgIDEwLFxyXG4gICAgICAgICAgICAyMCAqIE1hdGguY29zKDAuMiAqIE1hdGguUEkpXHJcbiAgICAgICAgKVxyXG4gICAgKVxyXG4gICAgY29uc3QgW3NjZW5lXSA9IHVzZVN0YXRlKG5ldyBUSFJFRS5TY2VuZSgpKVxyXG4gICAgY29uc3RbX2NvbnRyb2xzLCBzZXRDb250cm9sc10gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzKi9cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXJ9ID0gcmVmQ29udGFpbmVyXHJcbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiAhcmVuZGVyZXIpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoXHJcbiAgICAgICAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xyXG4gICAgICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYWxwaGE6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbylcclxuICAgICAgICAgICAgcmVuZGVyZXIuc2VyU2l6ZShzeFcsIHNjSClcclxuICAgICAgICAgICAgcmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2RpbmdcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpXHJcbiAgICAgICAgICAgIHNldFJlbmRlcmVyKHJlbmRlcmVyKVxyXG5cclxuICAgICAgICAgICAgLy82NDAgLT4yNDBcclxuICAgICAgICAgICAgLy84IC0+IDZcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBzY0ggKiAwLjAwNSArIDQuOFxyXG4gICAgICAgICAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKFxyXG4gICAgICAgICAgICAgICAgLXNjYWxlLFxyXG4gICAgICAgICAgICAgICAgc2NhbGUsXHJcbiAgICAgICAgICAgICAgICBzY2FsZSxcclxuICAgICAgICAgICAgICAgIC1zY2FsZSxcclxuICAgICAgICAgICAgICAgIDAuMDEsXHJcbiAgICAgICAgICAgICAgICA1MDAwMFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGluaXRpYWxDYW1lcmFQb3NpdGlvbilcclxuICAgICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXHJcbiAgICAgICAgICAgIHNldENhbWVyYShjYW1lcmEpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4Y2NjY2NjLCAxKVxyXG4gICAgICAgICAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KVxyXG5cclxuICAgICAgICAgICAgY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyAoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KVxyXG4gICAgICAgICAgICBjb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZVxyXG4gICAgICAgICAgICBjb250cm9scy50YXJnZXQgPSB0YXJnZXRcclxuICAgICAgICAgICAgc2V0Q29udHJvbHMoY29udHJvbHMpXHJcblxyXG4gICAgICAgICAgICBsb2FkR0xURk1vZGVsKHNjZW5lLCAnL2NpdHkuZ2xiJywge1xyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZVNoYWRvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjYXN0U2hhZG93OiBmYWxzZVxyXG4gICAgICAgICAgICB9KS50aGVuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IHJlZj17cmVmQ29udGFpbmVyfVxyXG4gICAgICAgIGNsYXNzTmFtZT0ndm94ZWwtY2l0eSdcclxuICAgICAgICBtPVwiYXV0b1wiXHJcbiAgICAgICAgYXQ9e1snLTIwcHgnLCAnLTYwcHgnLCAnLTEyMHB4J119XHJcbiAgICAgICAgbWI9e1snLTQwcHgnLCAnLTE0MHB4JywgJy0yMDBweCddfVxyXG4gICAgICAgIHc9e1syODAsIDQ4MCwgNjQwXX1cclxuICAgICAgICBoPXtbMjgwLCA0ODAsIDY0MF19XHJcbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7bG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8U3Bpbm5lciBzaXplPVwieGxcIlxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgICAgICAgICBsZWZ0PVwiNTAlXCIgdG9wPVwiNTAlXCJcclxuICAgICAgICAgICAgICAgIG1sPVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpIC8gMilcIlxyXG4gICAgICAgICAgICAgICAgbXQ9XCJjYWxjKG9weCAtIHZhcigtLXNwaW5uZXItc2l6ZSkpXCIgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgQ2l0eSEhIVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWb3hlbENpdHkiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VDYWxsYmFjayIsIkJveCIsIlNwaW5uZXIiLCJUSFJFRSIsIk9yYml0Q29udHJvbHMiLCJsb2FkR0xURk1vZGVsIiwiZWFzZU91dENpcmMiLCJ4IiwiTWF0aCIsInNxcnQiLCJwb3ciLCJWb3hlbENpdHkiLCJyZWZDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlbmRlcmVyIiwic2V0UmVuZGVyZXIiLCJjYW1lcmEiLCJzZXRDYW1lcmEiLCJ0YXJnZXQiLCJWZWN0b3IzIiwiaW5pdGlhbENhbWVyYVBvc2l0aW9uIiwic2luIiwiUEkiLCJjb3MiLCJzY2VuZSIsIlNjZW5lIiwiX2NvbnRyb2xzIiwic2V0Q29udHJvbHMiLCJjdXJyZW50IiwiY29udGFpbmVyIiwic2NXIiwiY2xpZW50V2lkdGgiLCJzY0giLCJjbGllbnRIZWlnaHQiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRQaXhlbFJhdGlvIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNlclNpemUiLCJzeFciLCJvdXRwdXRFbmNvZGluZyIsInNSR0JFbmNvZGluZyIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsInNjYWxlIiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwicG9zaXRpb24iLCJjb3B5IiwibG9va0F0IiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwiYWRkIiwiY29udHJvbHMiLCJhdXRvUm90YXRlIiwicmVjZWl2ZVNoYWRvdyIsImNhc3RTaGFkb3ciLCJ0aGVuIiwicmVmIiwiY2xhc3NOYW1lIiwibSIsImF0IiwibWIiLCJ3IiwiaCIsInNpemUiLCJsZWZ0IiwidG9wIiwibWwiLCJtdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/voxel-city.js\n"));

/***/ })

});