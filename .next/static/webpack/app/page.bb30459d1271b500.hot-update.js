"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/componentsHome/useObserver.js":
/*!******************************************************!*\
  !*** ./app/components/componentsHome/useObserver.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useObserver; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nfunction useObserver(options) {\n    _s();\n    const [elements, setElements] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const [entries, setEntries] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const observer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new IntersectionObserver((observerEntries)=>{\n        console.log(observerEntries);\n        setEntries(observerEntries);\n    }, options));\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function() {\n        const currentObserver = observer.current;\n        currentObserver.disconnect();\n        if (elements.length > 0) {\n            elements.forEach((element)=>{\n                currentObserver.observe(element);\n            });\n        }\n        return function cleanUp() {\n            if (currentObserver) {\n                currentObserver.disconnect();\n            }\n        };\n    })[elements]);\n    return [\n        observer.current,\n        setElements,\n        entries\n    ];\n}\n_s(useObserver, \"EkPyiYnBTDsFb+U4Y/M/gYRdRkQ=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2NvbXBvbmVudHNIb21lL3VzZU9ic2VydmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBb0Q7QUFFckMsU0FBU0csWUFBWUMsT0FBTzs7SUFDekMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDekMsTUFBTVEsV0FBV1AsNkNBQU1BLENBQ3JCLElBQUlRLHFCQUFxQixDQUFDQztRQUN4QkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaSCxXQUFXRztJQUNiLEdBQUdQO0lBR0xKLGdEQUFTQSxDQUNQO1FBQ0UsTUFBTWMsa0JBQWtCTCxTQUFTTSxPQUFPO1FBQ3hDRCxnQkFBZ0JFLFVBQVU7UUFDMUIsSUFBSVgsU0FBU1ksTUFBTSxHQUFHLEdBQUc7WUFDdkJaLFNBQVNhLE9BQU8sQ0FBQyxDQUFDQztnQkFDaEJMLGdCQUFnQk0sT0FBTyxDQUFDRDtZQUMxQjtRQUNGO1FBQ0EsT0FBTyxTQUFTRTtZQUNkLElBQUlQLGlCQUFpQjtnQkFDbkJBLGdCQUFnQkUsVUFBVTtZQUM1QjtRQUNGO0lBQ0YsRUFBQyxDQUFDWCxTQUFTO0lBR2IsT0FBTztRQUFDSSxTQUFTTSxPQUFPO1FBQUVUO1FBQWFDO0tBQVE7QUFDakQ7R0E1QndCSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9jb21wb25lbnRzSG9tZS91c2VPYnNlcnZlci5qcz84ZDliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlT2JzZXJ2ZXIob3B0aW9ucykge1xyXG4gIGNvbnN0IFtlbGVtZW50cywgc2V0RWxlbWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtlbnRyaWVzLCBzZXRFbnRyaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBvYnNlcnZlciA9IHVzZVJlZihcclxuICAgIG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigob2JzZXJ2ZXJFbnRyaWVzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKG9ic2VydmVyRW50cmllcyk7XHJcbiAgICAgIHNldEVudHJpZXMob2JzZXJ2ZXJFbnRyaWVzKTtcclxuICAgIH0sIG9wdGlvbnMpXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KFxyXG4gICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBjdXJyZW50T2JzZXJ2ZXIgPSBvYnNlcnZlci5jdXJyZW50O1xyXG4gICAgICBjdXJyZW50T2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIGN1cnJlbnRPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmdW5jdGlvbiBjbGVhblVwKCkge1xyXG4gICAgICAgIGlmIChjdXJyZW50T2JzZXJ2ZXIpIHtcclxuICAgICAgICAgIGN1cnJlbnRPYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVtlbGVtZW50c11cclxuICApO1xyXG5cclxuICByZXR1cm4gW29ic2VydmVyLmN1cnJlbnQsIHNldEVsZW1lbnRzLCBlbnRyaWVzXTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VPYnNlcnZlciIsIm9wdGlvbnMiLCJlbGVtZW50cyIsInNldEVsZW1lbnRzIiwiZW50cmllcyIsInNldEVudHJpZXMiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZXJFbnRyaWVzIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRPYnNlcnZlciIsImN1cnJlbnQiLCJkaXNjb25uZWN0IiwibGVuZ3RoIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJvYnNlcnZlIiwiY2xlYW5VcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/componentsHome/useObserver.js\n"));

/***/ })

});