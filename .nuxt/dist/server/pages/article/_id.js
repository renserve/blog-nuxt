exports.ids = [9];
exports.modules = {

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(125);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("10f43ecd", content, true, context)
};

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/article-content/article-content.vue?vue&type=template&id=2000fcaa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{domProps:{"innerHTML":_vm._s(_vm.relContent)}},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/layout/article-content/article-content.vue?vue&type=template&id=2000fcaa&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/article-content/article-content.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var article_contentvue_type_script_lang_js_ = ({
  name: "article-content",
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  computed: {
    relContent() {
      if (this.content) {
        if (/rel="(.*?)"/.test(this.content)) {
          return this.content.replace(/rel="(.*?)"/g, 'target="_blank" rel="external nofollow noopener noreferrer"');
        } else if (/<a/.test(this.content)) {
          return this.content.replace(/<a/g, '<a target="_blank" rel="external nofollow noopener noreferrer"');
        } else {
          return this.content;
        }
      } else {
        return '';
      }
    }

  }
});
// CONCATENATED MODULE: ./components/layout/article-content/article-content.vue?vue&type=script&lang=js&
 /* harmony default export */ var article_content_article_contentvue_type_script_lang_js_ = (article_contentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/layout/article-content/article-content.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  article_content_article_contentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2000fcaa",
  "866d3080"
  
)

/* harmony default export */ var article_content = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_split_line_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_split_line_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_split_line_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_split_line_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_split_line_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".split-wrapper{display:flex;align-items:center}.split-wrapper .icon{font-size:1.4rem}.split-wrapper .desc{font-size:13px;font-weight:700;padding:0 10px 0 5px;letter-spacing:2px;text-transform:uppercase}.split-wrapper .split{flex:1;height:1px;background-color:var(--border-color)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/base/split-line/split-line.vue?vue&type=template&id=1898fbd0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"split-wrapper"},[_vm._ssrNode(((_vm.icon)?("<i"+(_vm._ssrClass("icon",_vm.getIcon(_vm.icon)))+"></i>"):"<!---->")+" "+((_vm.desc)?("<span class=\"desc\">"+_vm._ssrEscape(_vm._s(_vm.desc))+"</span>"):"<!---->")+" <div class=\"split\"></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/base/split-line/split-line.vue?vue&type=template&id=1898fbd0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/split-line/split-line.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var split_linevue_type_script_lang_js_ = ({
  props: {
    icon: String,
    desc: String
  },
  methods: {
    getIcon(icon) {
      return /icon/.test(icon) ? icon : 'icon-' + icon;
    }

  }
});
// CONCATENATED MODULE: ./components/base/split-line/split-line.vue?vue&type=script&lang=js&
 /* harmony default export */ var split_line_split_linevue_type_script_lang_js_ = (split_linevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/base/split-line/split-line.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(124)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  split_line_split_linevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7d6c1e8a"
  
)

/* harmony default export */ var split_line = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(137);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6c8e3ab6", content, true, context)
};

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCursorPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setCursorPosition; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

const isServer = vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$isServer;
const on = function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  }
}();
const off = function () {
  if (!isServer && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.removeEventListener(event, handler, false);
      }
    };
  }
}();
/**
 * ??????????????????
 * @param {DOMElement} element ????????????dom??????
 * @return {Number} ????????????
 */

const getCursorPosition = element => {
  let caretOffset = 0;
  const doc = element.ownerDocument || element.document;
  const win = doc.defaultView || doc.parentWindow;
  const sel = win.getSelection();

  if (sel.rangeCount > 0) {
    const range = win.getSelection().getRangeAt(0);
    const preCaretRange = range.cloneRange();
    preCaretRange.selectNodeContents(element);
    preCaretRange.setEnd(range.endContainer, range.endOffset);
    caretOffset = preCaretRange.toString().length;
  }

  return caretOffset;
};
/**
 * ??????????????????
 * @param {DOMElement} element ????????????dom??????
 * @param {Number} cursorPosition ??????????????????
 */

const setCursorPosition = (element, cursorPosition) => {
  const range = document.createRange();

  if (element.firstChild.length < cursorPosition) {
    return;
  }

  range.setStart(element.firstChild, cursorPosition);
  range.setEnd(element.firstChild, cursorPosition);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
};

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _assets_image_default_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(135);
/* harmony import */ var _assets_image_default_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_image_default_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _plugins_gravatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);



/**
 * gravatar ????????????
 */

/* harmony default export */ __webpack_exports__["a"] = (email => {
  if (!email) {
    return _assets_image_default_png__WEBPACK_IMPORTED_MODULE_0___default.a;
  }

  if (!_utils_util__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].validateEmail(email)) {
    return _assets_image_default_png__WEBPACK_IMPORTED_MODULE_0___default.a;
  }

  return _plugins_gravatar__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].url(email, {
    protocol: 'https'
  });
});

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/default.8d326fe.png";

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_editor_vue_vue_type_style_index_0_id_99c56ad2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_editor_vue_vue_type_style_index_0_id_99c56ad2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_editor_vue_vue_type_style_index_0_id_99c56ad2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_editor_vue_vue_type_style_index_0_id_99c56ad2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_editor_vue_vue_type_style_index_0_id_99c56ad2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fade-transform-enter-active[data-v-99c56ad2],.fade-transform-leave-active[data-v-99c56ad2]{transition:all .5s}.fade-transform-enter[data-v-99c56ad2]{opacity:0;transform:translateX(-30px)}.fade-transform-leave-to[data-v-99c56ad2]{opacity:0;transform:translateX(30px)}.mobile-slide-enter-active[data-v-99c56ad2],.mobile-slide-leave-active[data-v-99c56ad2]{transition:all .2s ease-in-out}.mobile-slide-enter[data-v-99c56ad2],.mobile-slide-leave-to[data-v-99c56ad2]{transform:translateX(100%)}.search-slide-enter-active[data-v-99c56ad2],.search-slide-leave-active[data-v-99c56ad2]{transition:all .35s ease-in-out}@media (max-width:1024px){.search-slide-enter-active[data-v-99c56ad2],.search-slide-leave-active[data-v-99c56ad2]{transition:all .25s ease-in-out}}.search-slide-enter[data-v-99c56ad2],.search-slide-leave-to[data-v-99c56ad2]{transform:translateX(100%)}.fade-enter-active[data-v-99c56ad2],.fade-leave-active[data-v-99c56ad2]{transition:opacity .3s}.fade-enter[data-v-99c56ad2],.fade-leave-active[data-v-99c56ad2]{opacity:0}.fade-move[data-v-99c56ad2]{transition:transform .3s}.fade-leave-active[data-v-99c56ad2]{position:absolute}.list-slide-enter[data-v-99c56ad2],.list-slide-leave-to[data-v-99c56ad2]{opacity:0;transform:translateY(30px)}.list-slide-leave-active[data-v-99c56ad2]{width:100%;position:absolute}.slide-up-enter-active[data-v-99c56ad2]{transition:all .3s ease .1s}.slide-up-leave-active[data-v-99c56ad2]{transition:all .3s ease}.slide-up-enter[data-v-99c56ad2],.slide-up-leave-active[data-v-99c56ad2]{transform:translateY(-20px);opacity:0}.slide-up-move[data-v-99c56ad2]{transition:all .5s}.editor-container[data-v-99c56ad2]{display:flex;justify-content:space-between;align-items:flex-start}.avatar[data-v-99c56ad2]{display:inline-block;width:36px;height:36px;border-radius:50%;background-color:#eee}@media (max-width:480px){.avatar[data-v-99c56ad2]{display:none}}.slide-wrapper[data-v-99c56ad2]{position:relative}.message-container .comment-wrapper[data-v-99c56ad2]{width:100%}.message-container .slide-wrapper[data-v-99c56ad2]{display:flex;flex-direction:column}.message-container .slide-wrapper .user-item[data-v-99c56ad2]{order:1;margin:5px 0 10px}@media (max-width:480px){.message-container .slide-wrapper .user-item .user-input[data-v-99c56ad2]{width:calc(100% - 20px)}}.message-container .slide-wrapper .editor-item[data-v-99c56ad2]{order:2}.message-container .slide-wrapper .tools-item[data-v-99c56ad2]{order:3}.comment-wrapper[data-v-99c56ad2]{width:calc(100% - 50px)}@media (max-width:480px){.comment-wrapper[data-v-99c56ad2]{width:100%}}.comment-wrapper .list-slide-item[data-v-99c56ad2]{transition:all .3s ease-in-out}.comment-wrapper .reply-target[data-v-99c56ad2]{box-sizing:border-box;position:relative;margin-bottom:10px;padding:10px;border:1px solid var(--border-color);border-radius:4px}.comment-wrapper .reply-target .icon-ant-close[data-v-99c56ad2]{display:flex;justify-content:center;align-items:center;position:absolute;top:5px;right:5px;width:30px;height:30px;font-size:20px;cursor:pointer}.comment-wrapper .reply-target .icon-ant-close[data-v-99c56ad2]:hover{color:var(--theme-active)}.comment-wrapper .editor[data-v-99c56ad2]{box-sizing:border-box;width:100%;min-height:6em;max-height:30em;padding:10px;font-size:1rem;color:var(--font-color-article);border:1px solid var(--border-color);border-radius:4px;outline:none;overflow-y:auto;transition:all .1s linear;font-family:Microsoft Yahei}.comment-wrapper .editor[data-v-99c56ad2]:empty:before{content:attr(placeholder);white-space:pre-wrap}.comment-wrapper .editor dt[data-v-99c56ad2]:before{content:\"\\D\\A\";white-space:pre}.comment-wrapper .editor dt[data-v-99c56ad2]:first-child:before{content:normal}.comment-wrapper .editor[data-v-99c56ad2]:focus,.comment-wrapper .editor[data-v-99c56ad2]:hover{border-color:var(--font-color-light)}.comment-wrapper .editor[data-v-99c56ad2]:focus:before{content:none}.comment-wrapper .user-wrapper[data-v-99c56ad2]{display:flex;align-items:center;font-size:1rem}@media (max-width:768px){.comment-wrapper .user-wrapper[data-v-99c56ad2]{flex-direction:column}}.comment-wrapper .user-wrapper .user-input[data-v-99c56ad2]{width:calc(32% - 20px);height:1em;margin-right:1em;line-height:normal;padding:8px 10px;outline:none;color:var(--font-color-article);white-space:nowrap;border:1px solid var(--border-color);border-radius:4px;background-color:var(--app-background-color);transition:all .1s linear;-webkit-appearance:none;-webkit-tap-highlight-color:transparent}.comment-wrapper .user-wrapper .user-input[data-v-99c56ad2]:focus,.comment-wrapper .user-wrapper .user-input[data-v-99c56ad2]:hover{border-color:var(--font-color-light)}@media (max-width:768px){.comment-wrapper .user-wrapper .user-input[data-v-99c56ad2]{width:calc(100% - 20px);margin:3px 5px}}.tools-wrapper[data-v-99c56ad2]{display:flex;justify-content:space-between;align-items:center}.tools-wrapper .tool-item[data-v-99c56ad2]{display:flex;justify-content:center;align-items:center;width:30px;height:30px;cursor:pointer;transition:all .1s linear}.tools-wrapper .tool-item[data-v-99c56ad2]:hover{background-color:var(--tool-background-color)}.editor-tools[data-v-99c56ad2]{display:flex;justify-content:flex-start;transition:all .1s linear;margin:5px 0}.editor-tools>a[data-v-99c56ad2]{position:relative;margin-right:10px}.editor-tools>a[data-v-99c56ad2]:last-child{margin-right:0}.emoji-wrapper[data-v-99c56ad2]{box-sizing:border-box;display:flex;justify-content:flex-start;flex-wrap:wrap;position:absolute;top:30px;left:0;width:200px;padding:10px;background-color:var(--code-background);z-index:1;cursor:default}.emoji-wrapper .emoji-item[data-v-99c56ad2]{display:flex;justify-content:center;align-items:center;box-sizing:border-box;font-size:20px;width:36px;height:36px}.emoji-wrapper .emoji-item[data-v-99c56ad2]:hover{background-color:var(--tool-background-color);cursor:pointer}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/base/comment-editor/comment-editor.vue?vue&type=template&id=99c56ad2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-container",class:{'message-container': _vm.isMessageEditor}},[_vm._ssrNode(((!_vm.isMessageEditor)?("<img"+(_vm._ssrAttr("src",_vm.avatar))+(_vm._ssrAttr("alt",_vm.form.nickname || '????????????'))+" class=\"avatar\" data-v-99c56ad2>"):"<!---->")+" "),_vm._ssrNode("<section class=\"comment-wrapper\" data-v-99c56ad2>","</section>",[_c('transition-group',{staticClass:"slide-wrapper",attrs:{"tag":"div","name":"list-slide"}},[(_vm.isShowReplyContent)?_c('section',{key:1,staticClass:"list-slide-item reply-item"},[_c('div',{staticClass:"reply-target"},[_c('i',{staticClass:"icon icon-ant-close",on:{"click":_vm.closeReplyContent}}),_vm._v(" "),_c('strong',{staticClass:"reply-author"},[_vm._v("@"+_vm._s(_vm.reply.nickname))]),_vm._v(" "),_c('div',{staticClass:"reply-content markdown",domProps:{"innerHTML":_vm._s(_vm.reply.content)}})])]):_vm._e(),_vm._v(" "),_c('section',{key:2,staticClass:"list-slide-item editor-item"},[_c('div',{ref:"editContent",staticClass:"editor",attrs:{"contenteditable":"true","placeholder":_vm.placeholder || (_vm.isMessageEditor ? '?????????...' : '??????...')},on:{"keyup":_vm.contentChange,"click":_vm.getCursorPosition}})]),_vm._v(" "),_c('section',{key:3,staticClass:"list-slide-item tools-wrapper tools-item"},[_c('div',{staticClass:"editor-tools"},[_c('a',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(function () {_vm.isShowEmoji = false}),expression:"() => {isShowEmoji = false}"}],staticClass:"tool-item",on:{"click":function($event){_vm.isShowEmoji = true}}},[_c('i',{staticClass:"icon icon-smile"}),_vm._v(" "),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowEmoji),expression:"isShowEmoji"}],staticClass:"emoji-wrapper"},_vm._l((_vm.emojiList),function(emoji,index){return _c('li',{key:index,staticClass:"emoji-item",on:{"click":function($event){$event.stopPropagation();return _vm.insertEmoji(emoji)}}},[_vm._v("\n                                    "+_vm._s(emoji)+"\n                                ")])}),0)]),_vm._v(" "),_c('a',{staticClass:"tool-item",on:{"click":function($event){return _vm.insertContent('image')}}},[_c('i',{staticClass:"icon icon-image"})]),_vm._v(" "),_c('a',{staticClass:"tool-item",on:{"click":function($event){return _vm.insertContent('link')}}},[_c('i',{staticClass:"icon icon-link"})]),_vm._v(" "),_c('a',{staticClass:"tool-item",on:{"click":function($event){return _vm.insertContent('code')}}},[_c('i',{staticClass:"icon icon-code"})])]),_vm._v(" "),_c('a',{staticClass:"tool-item",on:{"click":_vm.debouncedSend}},[_c('i',{staticClass:"icon icon-send"})])]),_vm._v(" "),_c('div',{key:4,staticClass:"list-slide-item user-item"},[_c('section',{staticClass:"user-wrapper"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.nickname),expression:"form.nickname"}],staticClass:"user-input",attrs:{"maxlength":"32","name":"text","required":true,"type":"text","placeholder":"??????????????????"},domProps:{"value":(_vm.form.nickname)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "nickname", $event.target.value)}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.email),expression:"form.email"}],staticClass:"user-input",attrs:{"name":"email","type":"email","placeholder":"??????????????????"},domProps:{"value":(_vm.form.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "email", $event.target.value)}}})])])])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/base/comment-editor/comment-editor.vue?vue&type=template&id=99c56ad2&scoped=true&

// EXTERNAL MODULE: external "throttle-debounce"
var external_throttle_debounce_ = __webpack_require__(27);

// EXTERNAL MODULE: ./services/utils/util.js
var util = __webpack_require__(19);

// EXTERNAL MODULE: ./services/directives/click-outside.js
var click_outside = __webpack_require__(28);
var click_outside_default = /*#__PURE__*/__webpack_require__.n(click_outside);

// EXTERNAL MODULE: ./services/utils/dom.js
var dom = __webpack_require__(130);

// EXTERNAL MODULE: ./services/gravatar/gravatar.js
var gravatar = __webpack_require__(134);

// EXTERNAL MODULE: ./components/layout/article-content/article-content.vue + 4 modules
var article_content = __webpack_require__(123);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/comment-editor/comment-editor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






const emojiList = ['????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????', '????'];
/* harmony default export */ var comment_editorvue_type_script_lang_js_ = ({
  components: {
    ArticleContent: article_content["a" /* default */]
  },
  props: {
    placeholder: {
      type: String
    },
    isShowReplyContent: {
      type: Boolean,
      default: false
    },
    isMessageEditor: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isShowEmoji: false,
      contentText: '',
      contentHtml: '',
      form: {
        nickname: '',
        content: '',
        email: ''
      },
      reply: {
        replyNickname: '',
        replyContent: ''
      },
      emojiList,
      cursorPosition: 0
    };
  },

  directives: {
    ClickOutside: click_outside_default.a
  },
  computed: {
    avatar() {
      return Object(gravatar["a" /* default */])(this.form.email);
    }

  },
  methods: {
    // ????????????
    resetField() {
      this.form.content = '';
      this.contentText = '';
      this.contentHtml = '';
      this.$refs.editContent.innerHTML = '';
      this.$refs.editContent.innerText = '';
      this.cursorPosition = 0;
    },

    closeReplyContent() {
      this.$emit("closeReplyContent");
    },

    contentChange() {
      const html = this.$refs.editContent.innerHTML;
      const text = this.$refs.editContent.innerText;

      if (!Object.is(html, this.comemntContentHtml)) {
        this.contentHtml = html;
      }

      if (!Object.is(text, this.comemntContentText)) {
        this.contentText = text;
      }

      this.cursorPosition = Object(dom["a" /* getCursorPosition */])(this.$refs.editContent);
    },

    getCursorPosition() {
      this.cursorPosition = Object(dom["a" /* getCursorPosition */])(this.$refs.editContent);
    },

    send() {
      this.contentChange();
      const inValidMsg = this.getInValidMsg();

      if (inValidMsg) {
        alert(inValidMsg);
        return;
      }

      if (false) {}

      this.$emit('send', this.form);
    },

    getInValidMsg() {
      this.form.content = this.contentText;

      if (!this.form.email) {
        return '??????????????????';
      }

      if (util["a" /* default */].validateEmail(this.form.email) === false) {
        return '??????????????????email??????';
      }
      /*if (this.form.website && Uitls.validateUrl(this.form.website) === false) {
          return '??????????????????url??????'
      }*/


      if (!this.form.content || !this.form.content.replace(/\s/g, '')) {
        if (this.form.content.length > 1000 || this.form.content.split('\n').length > 30) {
          return `${this.isMessageEditor ? '??????' : '??????'}??????????????????1000??????????????????30?????????`;
        }

        return this.isMessageEditor ? '????????????????????????' : '????????????????????????';
      }

      if (!this.form.nickname || this.form.nickname.length > 32) {
        return '???????????????????????????????????????32?????????';
      }

      return false;
    },

    insertContent(type) {
      const contents = {
        image: {
          start: `![`,
          end: `]()`
        },
        link: {
          start: `[`,
          end: `]()`
        },
        code: {
          start: '\n```\n',
          end: '\n```'
        }
      };
      this.updateEditContent(contents[type]);
    },

    insertEmoji(emoji) {
      const editor = this.$refs.editContent;
      const text = editor.innerText; // ?????? emoji

      editor.innerText = text.slice(0, this.cursorPosition) + `${emoji}` + text.slice(this.cursorPosition, text.length); // ??????????????????????????????????????????????????? emoji ??????

      Object(dom["d" /* setCursorPosition */])(editor, this.cursorPosition + 2); // ???????????????????????????????????????????????? emoji ????????????????????????????????????1???

      this.cursorPosition = Object(dom["a" /* getCursorPosition */])(editor) + 2; // emoji ?????????

      this.contentChange();
    },

    updateEditContent({
      start = '',
      end = ''
    }) {
      if (!start && !end) {
        return;
      }

      const editor = this.$refs.editContent;
      const selectedText = (window.getSelection || document.getSelection)().toString();
      const currentText = editor.innerText;

      if (selectedText) {
        const newText = currentText.replace(selectedText, start + selectedText + end);
        editor.innerText = newText;
      } else {
        editor.innerText = editor.innerText += start + end;
      }
    }

  },

  created() {
    // ????????????
    this.debouncedSend = Object(external_throttle_debounce_["debounce"])(1000, true, () => {
      this.send();
    });

    if (false) {}
  }

});
// CONCATENATED MODULE: ./components/base/comment-editor/comment-editor.vue?vue&type=script&lang=js&
 /* harmony default export */ var comment_editor_comment_editorvue_type_script_lang_js_ = (comment_editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/base/comment-editor/comment-editor.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(136)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  comment_editor_comment_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "99c56ad2",
  "49f5568a"
  
)

/* harmony default export */ var comment_editor = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(178);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("c6d773cc", content, true, context)
};

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(180);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("a9de4e7a", content, true, context)
};

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(182);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5c0bc0e6", content, true, context)
};

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(184);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("39174097", content, true, context)
};

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(186);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("a41224de", content, true, context)
};

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_recommend_vue_vue_type_style_index_0_id_cd9dee48_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(153);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_recommend_vue_vue_type_style_index_0_id_cd9dee48_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_recommend_vue_vue_type_style_index_0_id_cd9dee48_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_recommend_vue_vue_type_style_index_0_id_cd9dee48_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_recommend_vue_vue_type_style_index_0_id_cd9dee48_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media (max-width:480px){.recommend-container[data-v-cd9dee48]{padding-left:2em}}.recommend-item[data-v-cd9dee48]{display:flex;justify-content:flex-start;align-items:center;margin:6px 0;font-size:1rem}.recommend-item .time[data-v-cd9dee48]{margin-right:20px;font-size:16px}.recommend-item .title[data-v-cd9dee48]{cursor:pointer;position:relative}.recommend-item .title:hover .hover-dot[data-v-cd9dee48]{background-color:var(--theme-active)}.recommend-item .title .hover-dot[data-v-cd9dee48]{position:absolute;right:-10px;top:0;width:7px;height:7px;border-radius:50%;transition:all .25s ease}@media (max-width:1024px){.recommend-item .time[data-v-cd9dee48]{margin-right:16px;font-size:14px}.recommend-item .title[data-v-cd9dee48]{font-size:16px}}@media (max-width:480px){.recommend-item[data-v-cd9dee48]{position:relative}.recommend-item[data-v-cd9dee48]:before{content:\"\";position:absolute;top:9px;left:-18px;width:6px;height:6px;border-radius:50%;background-color:var(--font-color-primary)}.recommend-item .time[data-v-cd9dee48]{display:none}.recommend-item .title[data-v-cd9dee48]{font-size:14px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_list_vue_vue_type_style_index_0_id_2a440eca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(154);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_list_vue_vue_type_style_index_0_id_2a440eca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_list_vue_vue_type_style_index_0_id_2a440eca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_list_vue_vue_type_style_index_0_id_2a440eca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_list_vue_vue_type_style_index_0_id_2a440eca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".load-more[data-v-2a440eca]{box-sizing:border-box;width:40px;height:40px;margin:0 auto;border:8px solid #dcdfe7;border-radius:50%;transition:all .25s ease-in-out;cursor:pointer}@media (max-width:480px){.load-more[data-v-2a440eca]{width:30px;height:30px;border-width:5px}}.load-more[data-v-2a440eca]:hover{border-color:var(--theme-active);background-color:var(--theme-active);transform:scale(.65)}.comment-item[data-v-2a440eca]{display:flex;justify-content:space-between;align-content:flex-start;margin-bottom:25px}.comment-item[data-v-2a440eca]:last-child{margin-bottom:0}.comment-item .avatar[data-v-2a440eca]{display:inline-block;width:36px;height:36px;border-radius:50%;background-color:#eee}@media (max-width:480px){.comment-item .avatar[data-v-2a440eca]{display:none}}.comment-item .comment-detail[data-v-2a440eca]{width:calc(100% - 50px)}@media (max-width:480px){.comment-item .comment-detail[data-v-2a440eca]{width:100%}}.comment-item .comment-detail .nickname[data-v-2a440eca]{display:flex;justify-content:flex-start;align-items:center;font-size:14px}.comment-item .comment-detail .nickname .mobile-avatar[data-v-2a440eca]{display:none}@media (max-width:480px){.comment-item .comment-detail .nickname .mobile-avatar[data-v-2a440eca]{display:inline-block;width:26px;height:26px;margin-right:10px;border-radius:50%;background-color:#eee}}.comment-item .comment-detail .nickname .website[data-v-2a440eca]{font-size:20px;margin-right:6px}.comment-item .comment-detail .content[data-v-2a440eca]{display:flex;align-items:center;margin:8px 0;font-size:1rem}.comment-item .comment-detail .reply-wrapper[data-v-2a440eca]{box-sizing:border-box;padding:6px 10px;font-size:14px;border:1px solid var(--border-color);border-radius:4px;background-color:var(--primary-light-0);margin-bottom:8px}.comment-item .comment-detail .reply-wrapper .reply-nickname .iconzuozhe[data-v-2a440eca]{font-weight:700}.comment-item .comment-detail .comment-footer[data-v-2a440eca]{display:flex;justify-content:space-between;align-items:center}.comment-item .comment-detail .comment-footer .time[data-v-2a440eca]{font-size:13px}.comment-item .comment-detail .comment-footer .tools[data-v-2a440eca]{display:flex;justify-content:flex-start}.comment-item .comment-detail .comment-footer .tools>i[data-v-2a440eca]{display:flex;justify-content:center;align-items:center;height:30px;margin-right:10px;cursor:pointer;overflow:hidden}.comment-item .comment-detail .comment-footer .tools>i[data-v-2a440eca]:last-child{margin-right:0}.comment-item .comment-detail .comment-footer .tools>i .like-count[data-v-2a440eca]{flex-shrink:0;margin-left:5px}.comment-item .comment-detail .comment-footer .tools .is-like[data-v-2a440eca]{color:var(--theme-active)}.comment-item .comment-detail .split[data-v-2a440eca]{box-sizing:border-box;width:100%;height:1px;margin-top:15px;background-color:var(--border-color)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_vue_vue_type_style_index_0_id_37b834e0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(155);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_vue_vue_type_style_index_0_id_37b834e0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_vue_vue_type_style_index_0_id_37b834e0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_vue_vue_type_style_index_0_id_37b834e0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_vue_vue_type_style_index_0_id_37b834e0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".comment-list-wrapper[data-v-37b834e0]{margin-top:25px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_style_index_0_id_78a20f42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(156);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_style_index_0_id_78a20f42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_style_index_0_id_78a20f42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_style_index_0_id_78a20f42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_style_index_0_id_78a20f42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fade-transform-enter-active[data-v-78a20f42],.fade-transform-leave-active[data-v-78a20f42]{transition:all .5s}.fade-transform-enter[data-v-78a20f42]{opacity:0;transform:translateX(-30px)}.fade-transform-leave-to[data-v-78a20f42]{opacity:0;transform:translateX(30px)}.mobile-slide-enter-active[data-v-78a20f42],.mobile-slide-leave-active[data-v-78a20f42]{transition:all .2s ease-in-out}.mobile-slide-enter[data-v-78a20f42],.mobile-slide-leave-to[data-v-78a20f42]{transform:translateX(100%)}.search-slide-enter-active[data-v-78a20f42],.search-slide-leave-active[data-v-78a20f42]{transition:all .35s ease-in-out}@media (max-width:1024px){.search-slide-enter-active[data-v-78a20f42],.search-slide-leave-active[data-v-78a20f42]{transition:all .25s ease-in-out}}.search-slide-enter[data-v-78a20f42],.search-slide-leave-to[data-v-78a20f42]{transform:translateX(100%)}.fade-enter-active[data-v-78a20f42],.fade-leave-active[data-v-78a20f42]{transition:opacity .3s}.fade-enter[data-v-78a20f42],.fade-leave-active[data-v-78a20f42]{opacity:0}.fade-move[data-v-78a20f42]{transition:transform .3s}.fade-leave-active[data-v-78a20f42]{position:absolute}.list-slide-enter[data-v-78a20f42],.list-slide-leave-to[data-v-78a20f42]{opacity:0;transform:translateY(30px)}.list-slide-leave-active[data-v-78a20f42]{width:100%;position:absolute}.slide-up-enter-active[data-v-78a20f42]{transition:all .3s ease .1s}.slide-up-leave-active[data-v-78a20f42]{transition:all .3s ease}.slide-up-enter[data-v-78a20f42],.slide-up-leave-active[data-v-78a20f42]{transform:translateY(-20px);opacity:0}.slide-up-move[data-v-78a20f42]{transition:all .5s}.dialog[data-v-78a20f42]{display:flex;justify-content:center;align-items:center;position:fixed;top:0;right:0;bottom:0;left:0;z-index:2000;background-color:var(--code-background);overflow:hidden}.close[data-v-78a20f42]{position:fixed;top:40px;right:40px}@media (max-width:1024px){.close[data-v-78a20f42]{top:22px;right:35px}}.close .icon-close[data-v-78a20f42]{font-size:36px;transition:all .1s linear;cursor:pointer}.close .icon-close[data-v-78a20f42]:hover{color:var(--theme-active)}@media (max-width:1024px){.close .icon-close[data-v-78a20f42]{font-size:30px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_20718e96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(157);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_20718e96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_20718e96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_20718e96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_20718e96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".article-header[data-v-20718e96]{position:relative;display:flex;justify-content:center;align-items:center;width:calc(100% - 160px);height:calc(100vh - 240px);margin:0 auto;max-width:1520px;color:#fff;border-radius:5px;background:no-repeat 50%;background-size:cover;box-sizing:border-box;overflow:hidden}.article-header[data-v-20718e96]:before{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;content:\"\";opacity:.35;background-color:#394245;background-image:linear-gradient(234deg,#394245,#000)}@media (max-width:1440px){.article-header[data-v-20718e96]{width:100%;border-radius:0}}@media (max-width:1024px){.article-header[data-v-20718e96]{height:calc(100vh - 160px)}}@media (max-width:480px){.article-header[data-v-20718e96]{height:auto;padding:15vh 0}}.article-header .header-wrapper[data-v-20718e96]{width:100%;max-width:1200px;z-index:1;box-sizing:border-box;position:relative;margin:0 auto}@media (max-width:1440px){.article-header .header-wrapper[data-v-20718e96]{padding:0 85px}}@media (max-width:1024px){.article-header .header-wrapper[data-v-20718e96]{padding:0 60px}}@media (max-width:768px){.article-header .header-wrapper[data-v-20718e96]{padding:0 35px}}@media (max-width:480px){.article-header .header-wrapper[data-v-20718e96]{padding:0 15px}}.article-header .content[data-v-20718e96]{padding:60px 200px;margin-top:-10vh}@media (max-width:1440px){.article-header .content[data-v-20718e96]{padding:40px 100px}}@media (max-width:1024px){.article-header .content[data-v-20718e96]{padding:30px 50px}}@media (max-width:480px){.article-header .content[data-v-20718e96]{padding:10px 0;margin-top:0}}.article-header .title[data-v-20718e96]{margin:.7em 0;line-height:1;font-size:46px;font-weight:700}@media (max-width:480px){.article-header .title[data-v-20718e96]{font-size:24px}}.article-header .author-wrapper[data-v-20718e96]{font-size:13px}@media (max-width:480px){.article-header .author-wrapper[data-v-20718e96]{font-size:11px}}.article-header .author-wrapper .author-name[data-v-20718e96]{font-size:18px;font-weight:700;cursor:pointer}@media (max-width:480px){.article-header .author-wrapper .author-name[data-v-20718e96]{font-size:13px}}.article-header .author-wrapper .author-name[data-v-20718e96]:not(:first-child):before{content:\"???\"}.article-container[data-v-20718e96]{width:100%;max-width:1200px;z-index:1;box-sizing:border-box;position:relative;margin:-10vh auto 0;border-radius:5px 5px 0 0}@media (max-width:1440px){.article-container[data-v-20718e96]{padding:0 85px}}@media (max-width:1024px){.article-container[data-v-20718e96]{padding:0 60px}}@media (max-width:768px){.article-container[data-v-20718e96]{padding:0 35px}}@media (max-width:480px){.article-container[data-v-20718e96]{padding:0 15px;margin-top:0}}.article-container .content[data-v-20718e96]{padding:60px 200px 5px;border-radius:5px 5px 0 0;background-color:var(--app-background-color-light);transition:all .1s linear}@media (max-width:1440px){.article-container .content[data-v-20718e96]{padding:40px 100px 5px}}@media (max-width:1024px){.article-container .content[data-v-20718e96]{padding:30px 50px 5px}}@media (max-width:480px){.article-container .content[data-v-20718e96]{padding:10px 0 5px;box-shadow:none;background-color:var(--app-background-color)}}.article-container .split-line[data-v-20718e96]{margin:20px 0}@media (max-width:480px){.article-container .split-line[data-v-20718e96]{margin:10px 0}}.comment-container[data-v-20718e96]{margin-top:0;border-radius:0 0 5px 5px}.comment-container .content[data-v-20718e96]{padding-top:5px}@media (max-width:480px){.comment-container[data-v-20718e96]{margin-top:0}.comment-container .content[data-v-20718e96]{padding-top:0}}.like-wrapper[data-v-20718e96]{position:fixed;right:0;bottom:21%;z-index:2000;box-shadow:0 2px 4px 0 rgba(0,0,0,.14)}@media (max-width:480px){.like-wrapper[data-v-20718e96]{display:none}}.like-wrapper .item[data-v-20718e96]{display:flex;justify-content:center;align-items:center;position:relative;width:42px;height:42px;border:1px solid var(--tag-color);background-color:var(--app-background-color);cursor:pointer}.like-wrapper .item[data-v-20718e96]:not(:last-child){border-bottom:none}.like-wrapper .item:hover>i[data-v-20718e96]{color:var(--theme-active)}.like-wrapper .item .count[data-v-20718e96]{position:absolute;top:0;left:0;padding:0 5px;font-size:13px;border-radius:8px;transform:translate(-50%,-50%);background-color:var(--tag-color)}.like-wrapper .item>i[data-v-20718e96]{font-size:20px;transition:all .15s linear}.like-wrapper .item .is-like[data-v-20718e96]{color:var(--theme-active)}.article-info-wrapper[data-v-20718e96]{display:flex;justify-content:space-between;align-items:center}.tags-wrapper[data-v-20718e96]{display:flex;justify-content:flex-start;font-size:1rem}.tags-wrapper>i[data-v-20718e96]{margin:8px 10px 0 0;font-size:1.4rem}.tags-wrapper .tags[data-v-20718e96]{display:flex;justify-content:flex-start;flex-wrap:wrap;margin-top:10px}.tags-wrapper .tags .tag-item[data-v-20718e96]{cursor:pointer}.tags-wrapper .tags .tag-item[data-v-20718e96]:not(:first-child):before{content:\"???\"}.like-btn[data-v-20718e96]{display:flex;justify-content:center;align-items:center;width:30px;height:30px;margin-top:5px;font-size:1rem;cursor:pointer}.like-btn>i[data-v-20718e96]{margin-right:6px;font-size:1.4rem}.like-btn>i[data-v-20718e96]:hover{color:var(--theme-active)}.like-btn>span[data-v-20718e96]{white-space:nowrap}.like-btn .is-like[data-v-20718e96]{color:var(--theme-active)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/_id.vue?vue&type=template&id=20718e96&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',{attrs:{"public":_vm.article.public}},[_c('header',{staticClass:"article-header",style:(_vm.articleCover)},[_c('div',{staticClass:"header-wrapper"},[_c('div',{staticClass:"content"},[_c('tag-list',{attrs:{"tagList":_vm.article.categories},on:{"selectTag":_vm.onSelectCategory}}),_vm._v(" "),_c('h1',{staticClass:"title"},[_vm._v(_vm._s(_vm.article.title))]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.article.create_time),expression:"article.create_time"}],staticClass:"author-wrapper"},[_vm._v("\n                    by??\n                    "),_vm._l((_vm.article.authors),function(author){return _c('nuxt-link',{key:author.id,staticClass:"author-name",attrs:{"tag":"span","to":("/about/" + (author.id))}},[_vm._v(_vm._s(author.nickname)+"\n                    ")])}),_vm._v("\n                    ??"),_c('time',{attrs:{"datetime":_vm._f("filterTime")(_vm.article.create_time)}},[_vm._v("??"+_vm._s(_vm._f("filterTime")(_vm.article.create_time))+"\n                ")])],2)],1)])]),_vm._v(" "),_c('div',{staticClass:"article-container"},[_c('div',{staticClass:"content"},[_c('div',{staticClass:"article-wrapper"},[_c('article',{ref:"markedContent",staticClass:"markdown",domProps:{"innerHTML":_vm._s(_vm.markedContent)}})]),_vm._v(" "),_c('div',{staticClass:"article-info-wrapper"},[_c('div',{staticClass:"tags-wrapper"},[_c('i',{staticClass:"icon icon-tags-fill"}),_vm._v(" "),_c('ul',{staticClass:"tags"},_vm._l((_vm.article.tags),function(tag){return _c('nuxt-link',{key:tag.id,staticClass:"tag-item",attrs:{"tag":"li","to":("/tag/" + (tag.id))}},[_vm._v(_vm._s(tag.name)+"\n                        ")])}),1)]),_vm._v(" "),_c('div',{staticClass:"like-btn",on:{"click":_vm.likeArticle}},[_c('i',{staticClass:"icon icon-heart-fill",class:{'is-like': _vm.isLike}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.articleLike))])])]),_vm._v(" "),(_vm.haveCategoryArtilces)?[_c('split-line',{staticClass:"split-line",attrs:{"icon":'recommend',"desc":'????????????'}}),_vm._v(" "),_c('div',{staticClass:"recommend-wrapper"},[_c('recommend',{attrs:{"articles":_vm.article.categoryArticles},on:{"showRecommendDetail":_vm.onShowRecommendDetail}})],1)]:_vm._e()],2)]),_vm._v(" "),_c('div',{ref:"commentArea",staticClass:"article-container comment-container"},[_c('div',{staticClass:"content"},[_c('split-line',{staticClass:"split-line",attrs:{"icon":'message',"desc":'??????'}}),_vm._v(" "),_c('div',{staticClass:"comment-wrapper"},[_c('comment',{attrs:{"loading":_vm.loading,"total":_vm.comments_total,"comments":_vm.comments,"articleId":parseInt(_vm.id)},on:{"createCommentSuccess":_vm.getSuccessComments}})],1)],1)]),_vm._v(" "),_c('aside',{staticClass:"like-wrapper"},[_c('div',{staticClass:"item",on:{"click":_vm.likeArticle}},[_c('span',{staticClass:"count"},[_vm._v(_vm._s(_vm.articleLike))]),_vm._v(" "),_c('i',{staticClass:"icon icon-heart-fill",class:{'is-like': _vm.isLike}})]),_vm._v(" "),_c('div',{staticClass:"item",on:{"click":_vm.scrollToComment}},[_c('span',{staticClass:"count"},[_vm._v(_vm._s(_vm.comments.length))]),_vm._v(" "),_c('i',{staticClass:"icon icon-message-fill",class:{'is-like': _vm.isComment}})])]),_vm._v(" "),_c('Dialog',{attrs:{"visible":_vm.dialogVisible,"loading":_vm.imgLoading,"imgSrc":_vm.imgSrc},on:{"update:visible":function($event){_vm.dialogVisible=$event}}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/_id.vue?vue&type=template&id=20718e96&scoped=true&

// EXTERNAL MODULE: ./plugins/marked.js
var marked = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/recommend/recommend.vue?vue&type=template&id=cd9dee48&scoped=true&
var recommendvue_type_template_id_cd9dee48_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"recommend-container"},[_vm._ssrNode((_vm._ssrList((_vm.articles),function(article){return ("<li class=\"recommend-item\" data-v-cd9dee48><time"+(_vm._ssrAttr("datetime",_vm._f("filterTime")(article.create_time,'Y-m-d')))+" class=\"time\" data-v-cd9dee48>"+_vm._ssrEscape(_vm._s(_vm._f("filterTime")(article.create_time,'Y-m-d')))+"</time> <span class=\"title\" data-v-cd9dee48>"+_vm._ssrEscape(_vm._s(article.title)+"\n      ")+"<span class=\"hover-dot\" data-v-cd9dee48></span></span></li>")})))])}
var recommendvue_type_template_id_cd9dee48_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/layout/recommend/recommend.vue?vue&type=template&id=cd9dee48&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/recommend/recommend.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var recommendvue_type_script_lang_js_ = ({
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  }
});
// CONCATENATED MODULE: ./components/layout/recommend/recommend.vue?vue&type=script&lang=js&
 /* harmony default export */ var recommend_recommendvue_type_script_lang_js_ = (recommendvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/layout/recommend/recommend.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(177)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  recommend_recommendvue_type_script_lang_js_,
  recommendvue_type_template_id_cd9dee48_scoped_true_render,
  recommendvue_type_template_id_cd9dee48_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "cd9dee48",
  "9276f418"
  
)

/* harmony default export */ var recommend = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/comment/comment.vue?vue&type=template&id=37b834e0&scoped=true&
var commentvue_type_template_id_37b834e0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comment-container"},[_c('comment-editor',{ref:"editor",attrs:{"isShowReplyContent":_vm.isShowReplyContent},on:{"closeReplyContent":_vm.closeReply,"send":_vm.onSend}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"comment-list-wrapper\" data-v-37b834e0>","</div>",[_c('comment-list',{attrs:{"total":_vm.total,"comments":_vm.comments,"loading":_vm.loading},on:{"loadMore":_vm.onLoadMore,"reply":_vm.onReply}})],1)],2)}
var commentvue_type_template_id_37b834e0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/layout/comment/comment.vue?vue&type=template&id=37b834e0&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/comment/comment-list.vue?vue&type=template&id=2a440eca&scoped=true&
var comment_listvue_type_template_id_2a440eca_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"comment-list"},[_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<li class=\"comment-item\" data-v-2a440eca>","</li>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.gravatar(comment.email)))+(_vm._ssrAttr("alt",comment.nickname || '????????????'))+" class=\"avatar\" data-v-2a440eca> "),_vm._ssrNode("<section class=\"comment-detail markdown\" data-v-2a440eca>","</section>",[_vm._ssrNode("<div class=\"nickname\" data-v-2a440eca><img"+(_vm._ssrAttr("src",_vm.gravatar(comment.email)))+(_vm._ssrAttr("alt",comment.nickname || '????????????'))+" class=\"mobile-avatar\" data-v-2a440eca> "+((comment.website)?("<a"+(_vm._ssrAttr("href",comment.website))+" target=\"_blank\" class=\"website icon icon-planet\" data-v-2a440eca></a>"):"<!---->")+" <span data-v-2a440eca>"+_vm._ssrEscape(_vm._s(comment.nickname))+"</span></div> "),_c('article-content',{staticClass:"content",attrs:{"content":comment.content}}),_vm._ssrNode(" "),(comment.reply)?_vm._ssrNode("<section class=\"reply-wrapper markdown\" data-v-2a440eca>","</section>",[_vm._ssrNode("<div class=\"reply-nickname\" data-v-2a440eca><i class=\"iconfont iconzuozhe\" data-v-2a440eca></i>???\n                        </div> "),_c('article-content',{attrs:{"content":comment.reply}})],2):_vm._e(),_vm._ssrNode(" "),(comment.children.length)?_vm._l((comment.children),function(children){return _vm._ssrNode("<section class=\"reply-wrapper markdown\" data-v-2a440eca>","</section>",[_vm._ssrNode("<div class=\"reply-nickname\" data-v-2a440eca>"+_vm._ssrEscape(_vm._s(children.nickname)+"???")+"</div> "),_c('article-content',{attrs:{"content":children.content}})],2)}):_vm._e(),_vm._ssrNode(" <footer class=\"comment-footer\" data-v-2a440eca><time"+(_vm._ssrAttr("datetime",_vm._f("filterTime")(comment.create_time)))+" class=\"time\" data-v-2a440eca>"+_vm._ssrEscape(_vm._s(_vm._f("filterTime")(comment.create_time))+"\n                    ")+"</time> <div class=\"tools\" data-v-2a440eca><i"+(_vm._ssrClass("icon icon-like",{'is-like': _vm.isLike(comment.id)}))+" data-v-2a440eca><span class=\"like-count\" data-v-2a440eca>"+_vm._ssrEscape(_vm._s(comment.like))+"</span></i> <i class=\"icon icon-reply\" data-v-2a440eca></i></div></footer> <div class=\"split\" data-v-2a440eca></div>")],2)],2)}),_vm._ssrNode(" "+((_vm.isLoadMore)?("<div class=\"load-more\" data-v-2a440eca></div>"):"<!---->")+" "),(_vm.loading)?_c('loading'):_vm._e(),_vm._ssrNode(" "),(!_vm.loading && !_vm.comments.length)?_c('empty',{attrs:{"message":'??????????????? /(???o???)/~~',"isBack":false}}):_vm._e()],2)}
var comment_listvue_type_template_id_2a440eca_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/layout/comment/comment-list.vue?vue&type=template&id=2a440eca&scoped=true&

// EXTERNAL MODULE: ./services/gravatar/gravatar.js
var gravatar = __webpack_require__(134);

// EXTERNAL MODULE: ./components/layout/article-content/article-content.vue + 4 modules
var article_content = __webpack_require__(123);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/comment/comment-list.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var comment_listvue_type_script_lang_js_ = ({
  components: {
    ArticleContent: article_content["a" /* default */]
  },
  props: {
    comments: {
      type: Array,
      required: true
    },
    total: {
      type: Number,
      default: 0
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      likeComments: []
    };
  },

  computed: {
    isLoadMore() {
      if (this.comments.length && !this.loading) {
        return this.total > this.comments.length;
      } else {
        return false;
      }
    }

  },
  methods: {
    isLike(commentId) {
      return this.likeComments.includes(commentId);
    },

    reply(commentId) {
      this.$emit('reply', commentId);
    },

    gravatar(email) {
      return Object(gravatar["a" /* default */])(email);
    },

    async likeComment(item) {
      if (this.likeComments.includes(item.id)) {
        return;
      }

      try {
        const res = this.$store.dispatch('article/likeComment', item.id);
        this.likeComments.push(item.id);

        if (false) {}
      } catch (e) {}
    },

    getLikeComments() {
      if (false) {}
    }

  },

  created() {
    this.getLikeComments();
  }

});
// CONCATENATED MODULE: ./components/layout/comment/comment-list.vue?vue&type=script&lang=js&
 /* harmony default export */ var comment_comment_listvue_type_script_lang_js_ = (comment_listvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/layout/comment/comment-list.vue



function comment_list_injectStyles (context) {
  
  var style0 = __webpack_require__(179)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var comment_list_component = Object(componentNormalizer["a" /* default */])(
  comment_comment_listvue_type_script_lang_js_,
  comment_listvue_type_template_id_2a440eca_scoped_true_render,
  comment_listvue_type_template_id_2a440eca_scoped_true_staticRenderFns,
  false,
  comment_list_injectStyles,
  "2a440eca",
  "a68587fe"
  
)

/* harmony default export */ var comment_list = (comment_list_component.exports);
// EXTERNAL MODULE: ./components/base/comment-editor/comment-editor.vue + 4 modules
var comment_editor = __webpack_require__(141);

// EXTERNAL MODULE: external "lodash/cloneDeep"
var cloneDeep_ = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/comment/comment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var commentvue_type_script_lang_js_ = ({
  components: {
    CommentEditor: comment_editor["a" /* default */],
    CommentList: comment_list
  },
  props: {
    total: {
      type: Number,
      default: 0
    },
    comments: {
      type: Array,
      default: () => []
    },
    articleId: {
      type: Number
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isShowReplyContent: false,
      parentId: 0,
      page: 0
    };
  },

  methods: {
    onLoadMore() {
      if (this.loading) {
        return;
      }

      this.page++;
      this.$store.dispatch('article/getMoreComments', {
        page: this.page,
        count: 10
      });
    },

    onReply(comment) {
      this.parentId = comment.id;
      this.$refs.editor.reply = {
        nickname: comment.nickname,
        content: comment.content
      };
      this.isShowReplyContent = true;
    },

    closeReply() {
      this.isShowReplyContent = false;
      this.parentId = 0;
      this.$refs.editor.reply = {
        nickname: '',
        content: ''
      };
      this.$refs.editor.resetField();
    },

    handleLocalInfo(k, v) {
      const localInfo = this.$cookies.get(k) || [];

      if (v === undefined) {
        return this.$cookies.get(k) || [];
      } else {
        if (!localInfo.includes(v)) {
          localInfo.push(v);
          this.$cookies.set(k, localInfo, {
            path: '/',
            maxAge: 60 * 60 * 24 * 365 * 3
          });
        }
      }
    },

    async onSend(data) {
      if (!this.articleId) {
        return;
      }

      if (this.isShowReplyContent) {
        // ????????????
        if (!this.parentId) {
          return;
        }

        try {
          data.classId = this.articleId;
          data.parentId = this.parentId;
          const res = await this.$store.dispatch('article/replyComment', data);

          if (res.code === 1) {
            this.closeReply();
            this.handleLocalInfo('commentIds', String(this.articleId));
            this.$emit('createCommentSuccess');
          }
        } catch (e) {}
      } else {
        // ????????????
        try {
          data.classId = this.articleId;
          data.parentId = this.parentId;
          const res = await this.$store.dispatch('article/createComment', data);

          if (res.code === 1) {
            this.$refs.editor.resetField();
            this.handleLocalInfo('commentIds', String(this.articleId));
            this.$emit('createCommentSuccess');
          }
        } catch (e) {}
      }
    }

  }
});
// CONCATENATED MODULE: ./components/layout/comment/comment.vue?vue&type=script&lang=js&
 /* harmony default export */ var comment_commentvue_type_script_lang_js_ = (commentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/layout/comment/comment.vue



function comment_injectStyles (context) {
  
  var style0 = __webpack_require__(181)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var comment_component = Object(componentNormalizer["a" /* default */])(
  comment_commentvue_type_script_lang_js_,
  commentvue_type_template_id_37b834e0_scoped_true_render,
  commentvue_type_template_id_37b834e0_scoped_true_staticRenderFns,
  false,
  comment_injectStyles,
  "37b834e0",
  "3304198c"
  
)

/* harmony default export */ var comment = (comment_component.exports);
// EXTERNAL MODULE: ./components/base/split-line/split-line.vue + 4 modules
var split_line = __webpack_require__(126);

// EXTERNAL MODULE: ./components/base/tag-list/tag-list.vue + 4 modules
var tag_list = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/base/dialog/dialog.vue?vue&type=template&id=78a20f42&scoped=true&
var dialogvue_type_template_id_78a20f42_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.dialogVisible),expression:"dialogVisible"}],staticClass:"dialog"},[_c('div',{staticClass:"close",on:{"click":_vm.close}},[_c('i',{staticClass:"icon icon-close"})]),_vm._v(" "),_c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.close),expression:"close"}],staticClass:"dialog-body"},[_vm._t("default"),_vm._v(" "),_c('loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}]}),_vm._v(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.imgSrc)?_c('img',{directives:[{name:"show",rawName:"v-show",value:(!_vm.loading),expression:"!loading"}],attrs:{"src":_vm.imgSrc}}):_vm._e()])],2)])])}
var dialogvue_type_template_id_78a20f42_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/base/dialog/dialog.vue?vue&type=template&id=78a20f42&scoped=true&

// EXTERNAL MODULE: ./services/directives/click-outside.js
var click_outside = __webpack_require__(28);
var click_outside_default = /*#__PURE__*/__webpack_require__.n(click_outside);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/dialog/dialog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var dialogvue_type_script_lang_js_ = ({
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    imgSrc: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      tmp: {
        overflow: ''
      }
    };
  },

  directives: {
    ClickOutside: click_outside_default.a
  },
  computed: {
    dialogVisible() {
      if (this.visible) {
        this.lock();
      } else {
        this.unlock();
      }

      return this.visible;
    }

  },
  methods: {
    lock() {
      if (false) {}
    },

    unlock() {
      if (false) {}
    },

    close() {
      this.unlock();
      this.$emit('update:visible', false);
    }

  }
});
// CONCATENATED MODULE: ./components/base/dialog/dialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialog_dialogvue_type_script_lang_js_ = (dialogvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/base/dialog/dialog.vue



function dialog_injectStyles (context) {
  
  var style0 = __webpack_require__(183)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var dialog_component = Object(componentNormalizer["a" /* default */])(
  dialog_dialogvue_type_script_lang_js_,
  dialogvue_type_template_id_78a20f42_scoped_true_render,
  dialogvue_type_template_id_78a20f42_scoped_true_staticRenderFns,
  false,
  dialog_injectStyles,
  "78a20f42",
  "d118d1ca"
  
)

/* harmony default export */ var dialog = (dialog_component.exports);
// EXTERNAL MODULE: ./components/base/client-only/client-only.vue + 4 modules
var client_only = __webpack_require__(14);

// EXTERNAL MODULE: ./config/const.js
var config_const = __webpack_require__(12);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  name: 'article-detail',
  components: {
    Recommend: recommend,
    Comment: comment,
    SplitLine: split_line["a" /* default */],
    TagList: tag_list["a" /* default */],
    Dialog: dialog,
    ClientOnly: client_only["a" /* default */]
  },

  head() {
    return {
      title: this.article.title
    };
  },

  async fetch({
    store,
    params,
    app,
    redirect
  }) {
    const token = store.state.app.token;
    const data = {
      id: params.id,
      isFront: token ? true : false
    };
    const viewIds = app.$cookies.get('viewIds') || [];

    if (!viewIds.includes(params.id)) {
      data.view = 1;
      viewIds.push(params.id);
      app.$cookies.set('viewIds', viewIds, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365 * 3
      });
    }

    let path = await store.dispatch('article/getArticleDetail', data);

    if (path) {
      redirect(path);
    }

    await store.dispatch('article/getComments', {
      classId: params.id,
      page: 0,
      count: 10
    });
  },

  data() {
    return {
      dialogVisible: false,
      imgLoading: false,
      imgSrc: '',
      id: 0,
      likeArticles: [],
      commentArticles: [],
      articleCover: {},
      articleLike: 0
    };
  },

  computed: {
    comments_total() {
      return this.$store.state.article.comments_total;
    },

    recommend_total() {
      return this.$store.state.article.recommend_total;
    },

    loading() {
      return this.$store.state.article.loading;
    },

    ...Object(external_vuex_["mapState"])({
      article(state) {
        const article = state.article.article;

        if (!article) {
          return {};
        }

        const cover = article.bgCover || article.cover;

        if (cover) {
          this.articleCover = {
            backgroundImage: `url(${cover})`
          };
        } else {
          this.articleCover = {
            backgroundImage: `url(${config_const["a" /* default */].defaultStar.cover})`
          };
        }

        this.articleLike = article.like;
        return article;
      },

      comments: state => state.article.comments
    }),

    isComment() {
      return this.commentArticles.includes(this.id);
    },

    isLike() {
      return this.likeArticles.includes(this.id);
    },

    haveCategoryArtilces() {
      return this.article.categoryArticles && this.article.categoryArticles.length;
    },

    markedContent() {
      if (this.article.content) {
        let content;

        if (this.article.articleType === 0 || this.article.articleType === 1) {
          content = this.article.content;
        } else {
          content = Object(marked["a" /* default */])(this.article.content);
        }

        if (/rel="(.*?)"/.test(content)) {
          content = content.replace(/rel="(.*?)"/g, 'rel="external nofollow noopener noreferrer"');
        } else if (/<a/.test(content)) {
          content = content.replace(/<a/g, '<a rel="external nofollow noopener noreferrer"');
        }

        return content;
      } else {
        return '';
      }
    }

  },
  methods: {
    onSelectCategory(category) {
      this.$router.push(`/category/${category.id}`);
    },

    // markdown ??????
    marked(content) {
      return Object(marked["a" /* default */])(content);
    },

    handleLocalInfo(k, v) {
      const localInfo = this.$cookies.get(k) || [];

      if (v === undefined) {
        return this.$cookies.get(k) || [];
      } else {
        if (!localInfo.includes(v)) {
          localInfo.push(v);
          this.$cookies.set(k, localInfo, {
            path: '/',
            maxAge: 60 * 60 * 24 * 365 * 3
          });
        }
      }
    },

    // ????????????
    async likeArticle() {
      if (this.isLike) {
        return;
      }

      try {
        const res = await this.$store.dispatch('article/likeArticle', this.id);

        if (res.code === 3) {
          this.articleLike++;
          this.likeArticles.push(this.id);
          this.handleLocalInfo('likeIds', this.id);
        }
      } catch (e) {}
    },

    // ??????????????????
    scrollToComment() {
      this.$refs.commentArea.scrollIntoView({
        behavior: 'smooth'
      });
    },

    onShowRecommendDetail(articleId) {
      this.id = articleId;
      this.$router.push({
        path: `/article/${articleId}`
      });
    },

    getSuccessComments() {
      this.commentArticles.push(this.id);
      this.$store.dispatch('article/getComments', {
        classId: this.id
      });
    },

    initImg() {
      __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 197)).then(res => {
        res.default('.image-popper');
      });
      this.$refs.markedContent.addEventListener('click', e => {
        const target = e.target;

        if (target.nodeName.toLocaleLowerCase() === 'img' && target.classList.contains('image-popper')) {
          e.stopPropagation();
          this.imgLoading = true;
          this.dialogVisible = true;
          const src = target.dataset.origin;
          const image = new Image();
          image.src = src;

          image.onload = () => {
            this.imgSrc = src;
            this.imgLoading = false;
          };

          image.onerror = () => {
            this.imgSrc = src;
            this.imgLoading = false;
          };
        }
      });
    }

  },

  created() {
    this.id = this.$nuxt.$route.params.id;
  },

  mounted() {
    this.likeArticles = this.handleLocalInfo('likeIds');
    this.commentArticles = this.handleLocalInfo('commentIds');
    this.$nextTick(() => {
      this.initImg();
    });
  }

});
// CONCATENATED MODULE: ./pages/article/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var article_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/_id.vue



function _id_injectStyles (context) {
  
  var style0 = __webpack_require__(185)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var _id_component = Object(componentNormalizer["a" /* default */])(
  article_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  _id_injectStyles,
  "20718e96",
  "6a4a0d40"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (_id_component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map