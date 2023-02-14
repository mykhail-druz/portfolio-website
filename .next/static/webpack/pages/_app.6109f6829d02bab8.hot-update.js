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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nconst VoxelCity = ()=>{\n    _s();\n    const refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [renderer, setRenderer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [camera, setCamera] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [target] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(-0.5, 1.2, 0));\n    const [initialCameraPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI)));\n    const [scene] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Scene());\n    const [_controls, setControls] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    /* eslint-disable react-hooks/exhaustive-deps*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { current: container  } = refContainer;\n        if (container && !renderer) {\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            const renderer = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer.setPixelRatio(window.devicePixelRatio);\n            renderer.serSize(sxW, scH);\n            renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_3__.sRGBEncoding;\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        ref: refContainer,\n        className: \"voxel-city\",\n        m: \"auto\",\n        at: [\n            \"-20px\",\n            \"-60px\",\n            \"-120px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-200px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Spinner, {\n                size: \"xl\",\n                position: \"absolute\",\n                left: \"50%\",\n                top: \"50%\",\n                ml: \"calc(0px - var(--spinner-size) / 2)\",\n                mt: \"calc(opx - var(--spinner-size))\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Михаил\\\\Documents\\\\GitHub\\\\portfolio-website\\\\components\\\\voxel-city.js\",\n                lineNumber: 55,\n                columnNumber: 17\n            }, undefined),\n            \"City!!!\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Михаил\\\\Documents\\\\GitHub\\\\portfolio-website\\\\components\\\\voxel-city.js\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, undefined);\n};\n_s(VoxelCity, \"WPPHHiBknGbulXSS1rYWkQS7cGI=\");\n_c = VoxelCity;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelCity);\nvar _c;\n$RefreshReg$(_c, \"VoxelCity\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3ZveGVsLWNpdHkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpRTtBQUNqQjtBQUNqQjtBQUMwQztBQUM1QjtBQUU3QyxTQUFTUyxZQUFZQyxDQUFDLEVBQUU7SUFDcEIsT0FBT0MsS0FBS0MsSUFBSSxDQUFDLElBQUlELEtBQUtFLEdBQUcsQ0FBQ0gsSUFBSSxHQUFHO0FBQ3pDO0FBRUEsTUFBTUksWUFBWSxJQUFNOztJQUNwQixNQUFNQyxlQUFlYiw2Q0FBTUE7SUFDM0IsTUFBTSxDQUFDYyxTQUFTQyxXQUFXLEdBQUdqQiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQzNDLE1BQU0sQ0FBQ2tCLFVBQVVDLFlBQVksR0FBR25CLCtDQUFRQTtJQUN4QyxNQUFNLENBQUNvQixRQUFRQyxVQUFVLEdBQUdyQiwrQ0FBUUE7SUFDcEMsTUFBTSxDQUFDc0IsT0FBTyxHQUFHdEIsK0NBQVFBLENBQUUsSUFBSU0sMENBQWEsQ0FBQyxDQUFDLEtBQUssS0FBSztJQUN4RCxNQUFNLENBQUNrQixzQkFBc0IsR0FBR3hCLCtDQUFRQSxDQUNwQyxJQUFJTSwwQ0FBYSxDQUNiLEtBQUtLLEtBQUtjLEdBQUcsQ0FBQyxNQUFNZCxLQUFLZSxFQUFFLEdBQzNCLElBQ0EsS0FBS2YsS0FBS2dCLEdBQUcsQ0FBQyxNQUFNaEIsS0FBS2UsRUFBRTtJQUduQyxNQUFNLENBQUNFLE1BQU0sR0FBRzVCLCtDQUFRQSxDQUFDLElBQUlNLHdDQUFXO0lBQ3hDLE1BQUssQ0FBQ3dCLFdBQVdDLFlBQVksR0FBRy9CLCtDQUFRQTtJQUV4Qyw2Q0FBNkMsR0FDN0NDLGdEQUFTQSxDQUFDLElBQU07UUFDWixNQUFNLEVBQUUrQixTQUFTQyxVQUFTLEVBQUMsR0FBR2xCO1FBQzlCLElBQUlrQixhQUFhLENBQUNmLFVBQVU7WUFDeEIsTUFBTWdCLE1BQU1ELFVBQVVFLFdBQVc7WUFDakMsTUFBTUMsTUFBTUgsVUFBVUksWUFBWTtZQUVsQyxNQUFNbkIsV0FBVyxJQUFJWixnREFBbUIsQ0FBQztnQkFDckNpQyxXQUFXLElBQUk7Z0JBQ2ZDLE9BQU8sSUFBSTtZQUNmO1lBQ0F0QixTQUFTdUIsYUFBYSxDQUFDQyxPQUFPQyxnQkFBZ0I7WUFDOUN6QixTQUFTMEIsT0FBTyxDQUFDQyxLQUFLVDtZQUN0QmxCLFNBQVM0QixjQUFjLEdBQUd4QywrQ0FBa0I7UUFDaEQsQ0FBQztJQUNMLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDRixpREFBR0E7UUFBQzRDLEtBQUtqQztRQUNWa0MsV0FBVTtRQUNWQyxHQUFFO1FBQ0ZDLElBQUk7WUFBQztZQUFTO1lBQVM7U0FBUztRQUNoQ0MsSUFBSTtZQUFDO1lBQVM7WUFBVTtTQUFTO1FBQ2pDQyxHQUFHO1lBQUM7WUFBSztZQUFLO1NBQUk7UUFDbEJDLEdBQUc7WUFBQztZQUFLO1lBQUs7U0FBSTtRQUNsQkMsVUFBUzs7WUFFSnZDLHlCQUNHLDhEQUFDWCxxREFBT0E7Z0JBQUNtRCxNQUFLO2dCQUNkRCxVQUFTO2dCQUNURSxNQUFLO2dCQUFNQyxLQUFJO2dCQUNmQyxJQUFHO2dCQUNIQyxJQUFHOzs7Ozs7WUFDTDs7Ozs7OztBQUlkO0dBckRNOUM7S0FBQUE7QUF1RE4sK0RBQWVBLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92b3hlbC1jaXR5LmpzP2IwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3gsIFNwaW5uZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scydcclxuaW1wb3J0IHsgbG9hZEdMVEZNb2RlbCB9IGZyb20gXCIuLi9saWIvbW9kZWxcIjtcclxuXHJcbmZ1bmN0aW9uIGVhc2VPdXRDaXJjKHgpIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCA0KSlcclxufVxyXG5cclxuY29uc3QgVm94ZWxDaXR5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVmQ29udGFpbmVyID0gdXNlUmVmKClcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbcmVuZGVyZXIsIHNldFJlbmRlcmVyXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFtjYW1lcmEsIHNldENhbWVyYV0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbdGFyZ2V0XSA9IHVzZVN0YXRlKCBuZXcgVEhSRUUuVmVjdG9yMygtMC41LCAxLjIsIDApKVxyXG4gICAgY29uc3QgW2luaXRpYWxDYW1lcmFQb3NpdGlvbl0gPSB1c2VTdGF0ZShcclxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhcclxuICAgICAgICAgICAgMjAgKiBNYXRoLnNpbigwLjIgKiBNYXRoLlBJKSxcclxuICAgICAgICAgICAgMTAsXHJcbiAgICAgICAgICAgIDIwICogTWF0aC5jb3MoMC4yICogTWF0aC5QSSlcclxuICAgICAgICApXHJcbiAgICApXHJcbiAgICBjb25zdCBbc2NlbmVdID0gdXNlU3RhdGUobmV3IFRIUkVFLlNjZW5lKCkpXHJcbiAgICBjb25zdFtfY29udHJvbHMsIHNldENvbnRyb2xzXSA9IHVzZVN0YXRlKClcclxuXHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMqL1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lcn0gPSByZWZDb250YWluZXJcclxuICAgICAgICBpZiAoY29udGFpbmVyICYmICFyZW5kZXJlcikge1xyXG4gICAgICAgICAgICBjb25zdCBzY1cgPSBjb250YWluZXIuY2xpZW50V2lkdGhcclxuICAgICAgICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodFxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XHJcbiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhbHBoYTogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxyXG4gICAgICAgICAgICByZW5kZXJlci5zZXJTaXplKHN4Vywgc2NIKVxyXG4gICAgICAgICAgICByZW5kZXJlci5vdXRwdXRFbmNvZGluZyA9IFRIUkVFLnNSR0JFbmNvZGluZ1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCByZWY9e3JlZkNvbnRhaW5lcn1cclxuICAgICAgICBjbGFzc05hbWU9J3ZveGVsLWNpdHknXHJcbiAgICAgICAgbT1cImF1dG9cIlxyXG4gICAgICAgIGF0PXtbJy0yMHB4JywgJy02MHB4JywgJy0xMjBweCddfVxyXG4gICAgICAgIG1iPXtbJy00MHB4JywgJy0xNDBweCcsICctMjAwcHgnXX1cclxuICAgICAgICB3PXtbMjgwLCA0ODAsIDY0MF19XHJcbiAgICAgICAgaD17WzI4MCwgNDgwLCA2NDBdfVxyXG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2xvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFNwaW5uZXIgc2l6ZT1cInhsXCJcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxyXG4gICAgICAgICAgICAgICAgbGVmdD1cIjUwJVwiIHRvcD1cIjUwJVwiXHJcbiAgICAgICAgICAgICAgICBtbD1cImNhbGMoMHB4IC0gdmFyKC0tc3Bpbm5lci1zaXplKSAvIDIpXCJcclxuICAgICAgICAgICAgICAgIG10PVwiY2FsYyhvcHggLSB2YXIoLS1zcGlubmVyLXNpemUpKVwiIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIENpdHkhISFcclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVm94ZWxDaXR5Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlQ2FsbGJhY2siLCJCb3giLCJTcGlubmVyIiwiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwibG9hZEdMVEZNb2RlbCIsImVhc2VPdXRDaXJjIiwieCIsIk1hdGgiLCJzcXJ0IiwicG93IiwiVm94ZWxDaXR5IiwicmVmQ29udGFpbmVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZW5kZXJlciIsInNldFJlbmRlcmVyIiwiY2FtZXJhIiwic2V0Q2FtZXJhIiwidGFyZ2V0IiwiVmVjdG9yMyIsImluaXRpYWxDYW1lcmFQb3NpdGlvbiIsInNpbiIsIlBJIiwiY29zIiwic2NlbmUiLCJTY2VuZSIsIl9jb250cm9scyIsInNldENvbnRyb2xzIiwiY3VycmVudCIsImNvbnRhaW5lciIsInNjVyIsImNsaWVudFdpZHRoIiwic2NIIiwiY2xpZW50SGVpZ2h0IiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsImFscGhhIiwic2V0UGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJzZXJTaXplIiwic3hXIiwib3V0cHV0RW5jb2RpbmciLCJzUkdCRW5jb2RpbmciLCJyZWYiLCJjbGFzc05hbWUiLCJtIiwiYXQiLCJtYiIsInciLCJoIiwicG9zaXRpb24iLCJzaXplIiwibGVmdCIsInRvcCIsIm1sIiwibXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/voxel-city.js\n"));

/***/ })

});