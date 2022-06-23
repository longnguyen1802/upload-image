"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/upload";
exports.ids = ["pages/api/upload"];
exports.modules = {

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ "mv":
/*!*********************!*\
  !*** external "mv" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("mv");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "./pages/api/upload/index.js":
/*!***********************************!*\
  !*** ./pages/api/upload/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar mv = __webpack_require__(/*! mv */ \"mv\");\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const data = await new Promise((resolve, reject)=>{\n        const form = new formidable__WEBPACK_IMPORTED_MODULE_0__.IncomingForm();\n        form.parse(req, (err, fields, files)=>{\n            if (err) return reject(err);\n            console.log(fields, files);\n            console.log(files.file.filepath);\n            var oldPath = files.file.filepath;\n            var newPath = `./public/images/uploads/${files.file.originalFilename}`;\n            mv(oldPath, newPath, function(err) {\n            });\n            res.status(200).json({\n                fields,\n                files\n            });\n        });\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXBsb2FkL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5QztBQUNOO0FBRW5DLEdBQUcsQ0FBQ0csRUFBRSxHQUFHQyxtQkFBTyxDQUFDLGNBQUk7QUFHZCxLQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ25CQyxHQUFHLEVBQUUsQ0FBQztRQUNIQyxVQUFVLEVBQUUsS0FBSztJQUNwQixDQUFDO0FBQ0wsQ0FBQztBQUVELGlFQUFNLE9BQWdCQyxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBRWhDLEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUNDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEdBQUssQ0FBQztRQUNsRCxLQUFLLENBQUNDLElBQUksR0FBRyxHQUFHLENBQUNkLG9EQUFZO1FBRTVCYyxJQUFJLENBQUNDLEtBQUssQ0FBQ1AsR0FBRyxHQUFHUSxHQUFHLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxHQUFLLENBQUM7WUFDckMsRUFBRSxFQUFFRixHQUFHLEVBQUUsTUFBTSxDQUFDSCxNQUFNLENBQUNHLEdBQUc7WUFDMUJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxNQUFNLEVBQUVDLEtBQUs7WUFDekJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUNHLElBQUksQ0FBQ0MsUUFBUTtZQUMvQixHQUFHLENBQUNDLE9BQU8sR0FBR0wsS0FBSyxDQUFDRyxJQUFJLENBQUNDLFFBQVE7WUFDakMsR0FBRyxDQUFDRSxPQUFPLElBQUksd0JBQXdCLEVBQUVOLEtBQUssQ0FBQ0csSUFBSSxDQUFDSSxnQkFBZ0I7WUFDcEV0QixFQUFFLENBQUNvQixPQUFPLEVBQUVDLE9BQU8sRUFBRSxRQUFRLENBQUNSLEdBQUcsRUFBRSxDQUFDO1lBQ3BDLENBQUM7WUFDRFAsR0FBRyxDQUFDaUIsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7Z0JBQUNWLE1BQU07Z0JBQUVDLEtBQUs7WUFBQyxDQUFDO1FBQzFDLENBQUM7SUFDTCxDQUFDO0FBRUwsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL3BhZ2VzL2FwaS91cGxvYWQvaW5kZXguanM/Yjc5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmNvbWluZ0Zvcm0gfSBmcm9tICdmb3JtaWRhYmxlJ1xuaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tICdmcydcblxudmFyIG12ID0gcmVxdWlyZSgnbXYnKTtcblxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAgIGFwaToge1xuICAgICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxuICAgIH1cbn07XG4gXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgIGNvbnN0IGZvcm0gPSBuZXcgSW5jb21pbmdGb3JtKClcbiAgICAgICBcbiAgICAgICAgZm9ybS5wYXJzZShyZXEsIChlcnIsIGZpZWxkcywgZmlsZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiByZWplY3QoZXJyKVxuICAgICAgICAgICAgY29uc29sZS5sb2coZmllbGRzLCBmaWxlcylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbGVzLmZpbGUuZmlsZXBhdGgpXG4gICAgICAgICAgICB2YXIgb2xkUGF0aCA9IGZpbGVzLmZpbGUuZmlsZXBhdGg7XG4gICAgICAgICAgICB2YXIgbmV3UGF0aCA9IGAuL3B1YmxpYy9pbWFnZXMvdXBsb2Fkcy8ke2ZpbGVzLmZpbGUub3JpZ2luYWxGaWxlbmFtZX1gO1xuICAgICAgICAgICAgbXYob2xkUGF0aCwgbmV3UGF0aCwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZmllbGRzLCBmaWxlcyB9KVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgXG59Il0sIm5hbWVzIjpbIkluY29taW5nRm9ybSIsInByb21pc2VzIiwiZnMiLCJtdiIsInJlcXVpcmUiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIiwicmVxIiwicmVzIiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZm9ybSIsInBhcnNlIiwiZXJyIiwiZmllbGRzIiwiZmlsZXMiLCJjb25zb2xlIiwibG9nIiwiZmlsZSIsImZpbGVwYXRoIiwib2xkUGF0aCIsIm5ld1BhdGgiLCJvcmlnaW5hbEZpbGVuYW1lIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/upload/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/upload/index.js"));
module.exports = __webpack_exports__;

})();