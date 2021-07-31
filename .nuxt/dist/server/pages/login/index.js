exports.ids = [11];
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
 * 获取光标位置
 * @param {DOMElement} element 输入框的dom节点
 * @return {Number} 光标位置
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
 * 设置光标位置
 * @param {DOMElement} element 输入框的dom节点
 * @param {Number} cursorPosition 光标位置的值
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
 * gravatar 头像服务
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
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-container",class:{'message-container': _vm.isMessageEditor}},[_vm._ssrNode(((!_vm.isMessageEditor)?("<img"+(_vm._ssrAttr("src",_vm.avatar))+(_vm._ssrAttr("alt",_vm.form.nickname || '匿名用户'))+" class=\"avatar\" data-v-99c56ad2>"):"<!---->")+" "),_vm._ssrNode("<section class=\"comment-wrapper\" data-v-99c56ad2>","</section>",[_c('transition-group',{staticClass:"slide-wrapper",attrs:{"tag":"div","name":"list-slide"}},[(_vm.isShowReplyContent)?_c('section',{key:1,staticClass:"list-slide-item reply-item"},[_c('div',{staticClass:"reply-target"},[_c('i',{staticClass:"icon icon-ant-close",on:{"click":_vm.closeReplyContent}}),_vm._v(" "),_c('strong',{staticClass:"reply-author"},[_vm._v("@"+_vm._s(_vm.reply.nickname))]),_vm._v(" "),_c('div',{staticClass:"reply-content markdown",domProps:{"innerHTML":_vm._s(_vm.reply.content)}})])]):_vm._e(),_vm._v(" "),_c('section',{key:2,staticClass:"list-slide-item editor-item"},[_c('div',{ref:"editContent",staticClass:"editor",attrs:{"contenteditable":"true","placeholder":_vm.placeholder || (_vm.isMessageEditor ? '我想说...' : '评论...')},on:{"keyup":_vm.contentChange,"click":_vm.getCursorPosition}})]),_vm._v(" "),_c('section',{key:3,staticClass:"list-slide-item tools-wrapper tools-item"},[_c('div',{staticClass:"editor-tools"},[_c('a',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(function () {_vm.isShowEmoji = false}),expression:"() => {isShowEmoji = false}"}],staticClass:"tool-item",on:{"click":function($event){_vm.isShowEmoji = true}}},[_c('i',{staticClass:"icon icon-smile"}),_vm._v(" "),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowEmoji),expression:"isShowEmoji"}],staticClass:"emoji-wrapper"},_vm._l((_vm.emojiList),function(emoji,index){return _c('li',{key:index,staticClass:"emoji-item",on:{"click":function($event){$event.stopPropagation();return _vm.insertEmoji(emoji)}}},[_vm._v("\n                                    "+_vm._s(emoji)+"\n                                ")])}),0)]),_vm._v(" "),_c('a',{staticClass:"tool-item",on:{"click":function($event){return _vm.insertContent('image')}}},[_c('i',{staticClass:"icon icon-image"})]),_vm._v(" "),_c('a',{staticClass:"tool-item",on:{"click":function($event){return _vm.insertContent('link')}}},[_c('i',{staticClass:"icon icon-link"})]),_vm._v(" "),_c('a',{staticClass:"tool-item",on:{"click":function($event){return _vm.insertContent('code')}}},[_c('i',{staticClass:"icon icon-code"})])]),_vm._v(" "),_c('a',{staticClass:"tool-item",on:{"click":_vm.debouncedSend}},[_c('i',{staticClass:"icon icon-send"})])]),_vm._v(" "),_c('div',{key:4,staticClass:"list-slide-item user-item"},[_c('section',{staticClass:"user-wrapper"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.nickname),expression:"form.nickname"}],staticClass:"user-input",attrs:{"maxlength":"32","name":"text","required":true,"type":"text","placeholder":"昵称（必填）"},domProps:{"value":(_vm.form.nickname)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "nickname", $event.target.value)}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.email),expression:"form.email"}],staticClass:"user-input",attrs:{"name":"email","type":"email","placeholder":"邮箱（必填）"},domProps:{"value":(_vm.form.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "email", $event.target.value)}}})])])])],1)],2)}
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






const emojiList = ['😃', '😂', '😅', '😉', '😌', '😔', '😓', '😘', '😡', '😭', '😱', '😳', '😵', '🌚', '👍', '👎', '💪', '🌹', '💊'];
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
    // 重置为空
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
        return '邮箱不能为空';
      }

      if (util["a" /* default */].validateEmail(this.form.email) === false) {
        return '请填写正确的email格式';
      }
      /*if (this.form.website && Uitls.validateUrl(this.form.website) === false) {
          return '请填写正确的url格式'
      }*/


      if (!this.form.content || !this.form.content.replace(/\s/g, '')) {
        if (this.form.content.length > 1000 || this.form.content.split('\n').length > 30) {
          return `${this.isMessageEditor ? '留言' : '评论'}内容不能超过1000个字且控制在30行以内`;
        }

        return this.isMessageEditor ? '留言内容不能为空' : '评论内容不能为空';
      }

      if (!this.form.nickname || this.form.nickname.length > 32) {
        return '昵称不能为空且长度不能超过32个字符';
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
      const text = editor.innerText; // 插入 emoji

      editor.innerText = text.slice(0, this.cursorPosition) + `${emoji}` + text.slice(this.cursorPosition, text.length); // 光标位置后挪一位，以保证在刚插入的 emoji 后面

      Object(dom["d" /* setCursorPosition */])(editor, this.cursorPosition + 2); // 更新本地保存的光标位置变量（注意 emoji 占两个字节大小，所以要加1）

      this.cursorPosition = Object(dom["a" /* getCursorPosition */])(editor) + 2; // emoji 占两位

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
    // 发送防抖
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

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(168);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5256f598", content, true, context)
};

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4b20164a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(148);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4b20164a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4b20164a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4b20164a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4b20164a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".user-wrapper[data-v-4b20164a]{display:flex;justify-content:space-between;align-items:center;font-size:1rem;margin:12px .5em 30px;box-sizing:border-box}@media (max-width:768px){.user-wrapper[data-v-4b20164a]{flex-direction:column}}.user-wrapper .user-input[data-v-4b20164a]{width:calc(32% - 20px);height:1em;margin-right:1em;line-height:normal;padding:8px 10px;outline:none;color:var(--font-color-article);white-space:nowrap;border:1px solid var(--border-color);border-radius:4px;background-color:var(--app-background-color);transition:all .1s linear;-webkit-appearance:none;-webkit-tap-highlight-color:transparent}.user-wrapper .user-input[data-v-4b20164a]:focus,.user-wrapper .user-input[data-v-4b20164a]:hover{border-color:var(--font-color-light)}.user-wrapper .user-input[data-v-4b20164a]:last-child{box-sizing:content-box;margin-right:0;cursor:pointer;line-height:1em}@media (max-width:768px){.user-wrapper .user-input[data-v-4b20164a]{width:calc(100% - 20px);margin:3px 5px}.user-wrapper .user-input[data-v-4b20164a]:last-child{margin-right:.5em}}.reply-wrapper[data-v-4b20164a]{box-sizing:border-box;padding:6px 10px;font-size:14px;border:1px solid var(--border-color);border-radius:4px;background-color:var(--primary-light-0)}.reply-wrapper .reply-nickname[data-v-4b20164a]{font-weight:700}.messages-container[data-v-4b20164a]{width:100%;max-width:1200px;margin:0 auto;z-index:1;box-sizing:border-box}@media (max-width:1440px){.messages-container[data-v-4b20164a]{padding:0 85px}}@media (max-width:1024px){.messages-container[data-v-4b20164a]{padding:0 60px}}@media (max-width:768px){.messages-container[data-v-4b20164a]{padding:0 35px}}@media (max-width:480px){.messages-container[data-v-4b20164a]{padding:0 15px}}.messages-container .editor-wrapper[data-v-4b20164a]{margin:.5em}.messages-wrapper[data-v-4b20164a]{display:flex;flex-wrap:wrap}.messages-wrapper .message-item[data-v-4b20164a]{display:flex;flex-direction:column;width:100%;margin:.4em .5em;padding:1em;border-radius:4px;transition:all .25s ease-in-out;border:1px solid var(--border-color)}@media (max-width:480px){.messages-wrapper .message-item[data-v-4b20164a]{margin:.2em .5em;padding:.5em}}.messages-wrapper .message-item[data-v-4b20164a]:hover{transform:translateY(-2px)}.messages-wrapper .message-item .nickname[data-v-4b20164a]{height:24px;font-size:14px;font-weight:700}.messages-wrapper .message-item .content[data-v-4b20164a]{flex:1;font-size:14px}.messages-wrapper .message-item .content img[data-v-4b20164a]{width:50%}.messages-wrapper .message-item .time[data-v-4b20164a]{font-size:14px;text-align:right}.load-more[data-v-4b20164a]{box-sizing:border-box;width:40px;height:40px;margin:10px auto 0;border:8px solid #dcdfe7;border-radius:50%;transition:all .25s ease-in-out;cursor:pointer}@media (max-width:480px){.load-more[data-v-4b20164a]{width:30px;height:30px;border-width:5px}}.load-more[data-v-4b20164a]:hover{border-color:var(--theme-active);background-color:var(--theme-active);transform:scale(.65)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=4b20164a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"messages-container"},[_c('split-line',{attrs:{"icon":"icondenglu","desc":"登录"}}),_vm._ssrNode(" <section class=\"user-wrapper\" data-v-4b20164a><input maxlength=\"32\" name=\"text\""+(_vm._ssrAttr("required",true))+" type=\"text\" placeholder=\"账号（必填）\""+(_vm._ssrAttr("value",(_vm.form.username)))+" class=\"user-input\" data-v-4b20164a> <input name=\"email\" type=\"email\" placeholder=\"密码（必填）\""+(_vm._ssrAttr("value",(_vm.form.password)))+" class=\"user-input\" data-v-4b20164a> <input name=\"url\" type=\"submit\""+(_vm._ssrAttr("value",_vm.loginTips))+" class=\"user-input\" data-v-4b20164a></section> "),_c('split-line',{attrs:{"icon":"iconpeizhitubiaosvg-","desc":"入驻申请"}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"editor-wrapper\" data-v-4b20164a>","</section>",[_c('comment-editor',{ref:"editor",attrs:{"isMessageEditor":true,"placeholder":_vm.placeholder},on:{"send":_vm.onSend}})],1),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"messages-wrapper markdown\" data-v-4b20164a>","</ul>",_vm._l((_vm.apply),function(item){return _vm._ssrNode("<li class=\"message-item\" data-v-4b20164a>","</li>",[_vm._ssrNode(((item.nickname)?("<span class=\"nickname\" data-v-4b20164a>"+_vm._ssrEscape(_vm._s(item.nickname))+"</span>"):"<!---->")+" "),_vm._ssrNode("<div class=\"content\" data-v-4b20164a>","</div>",[_c('no-ssr',[_c('p',{domProps:{"innerHTML":_vm._s(_vm.marked(item.reply))}})])],1),_vm._ssrNode(" <time"+(_vm._ssrAttr("datetime",_vm._f("filterTime")(item.create_time)))+" class=\"time\" data-v-4b20164a>"+_vm._ssrEscape(_vm._s(_vm._f("filterTime")(item.create_time))+"\n            ")+"</time>")],2)}),0),_vm._ssrNode(" <div class=\"load-more\""+(_vm._ssrStyle(null,null, { display: (_vm.isLoadMore) ? '' : 'none' }))+" data-v-4b20164a></div> "),_c('loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}]}),_vm._ssrNode(" "),(!_vm.loading && !_vm.apply.length)?_c('empty',{attrs:{"message":'还没有入驻申请 /(ㄒoㄒ)/~~',"isBack":false}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=4b20164a&scoped=true&

// EXTERNAL MODULE: ./components/base/split-line/split-line.vue + 4 modules
var split_line = __webpack_require__(126);

// EXTERNAL MODULE: ./components/base/comment-editor/comment-editor.vue + 4 modules
var comment_editor = __webpack_require__(141);

// EXTERNAL MODULE: ./plugins/marked.js
var marked = __webpack_require__(7);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./services/utils/util.js
var util = __webpack_require__(19);

// EXTERNAL MODULE: external "lodash/dropRight"
var dropRight_ = __webpack_require__(20);

// EXTERNAL MODULE: external "throttle-debounce"
var external_throttle_debounce_ = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
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







/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  name: 'apply-page',
  components: {
    SplitLine: split_line["a" /* default */],
    CommentEditor: comment_editor["a" /* default */]
  },

  head() {
    return {
      title: '入驻申请'
    };
  },

  async fetch({
    store,
    params
  }) {
    await store.dispatch('apply/getApply', {
      page: 0,
      count: 10
    });
  },

  data() {
    return {
      loginTips: '登录',
      form: {
        username: "",
        password: ""
      },
      page: 0
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      token: state => state.app.token,
      clientNavList: state => state.app.clientNavList,
      apply: state => state.apply.apply,
      total: state => state.apply.total,
      loading: state => state.apply.loading
    }),

    isLoadMore() {
      if (this.apply.length && !this.loading) {
        return this.total > this.apply.length;
      } else {
        return false;
      }
    }

  },
  watch: {
    apply() {
      this.$nextTick(() => {
        this.initImage();
      });
    }

  },
  methods: {
    async login() {
      if (!this.form.username || !this.form.password) {
        alert('账号和密码不能为空');
        return;
      }

      if (this.waitSkip) {
        return;
      }

      this.loginTips = '登录中...';
      await this.$store.dispatch('app/getToken', this.form).then(token => {
        if (token) {
          let time = 3;
          !this.clientNavList.length && this.$store.commit('app/setClientNavList', [{
            link: `/about/${token.id}`,
            ssr: 0,
            name: this.form.username
          }, {
            link: "/loginout",
            ssr: 0,
            name: "退出"
          }]);
          window.localStorage.setItem('journeyToken', JSON.stringify(token));
          this.waitSkip = setInterval(() => {
            this.loginTips = `登录成功，跳转中（${time}）`;
            time--;

            if (!time) {
              clearInterval(this.waitSkip);
              this.waitSkip = null;
              this.$router.replace(`/about/${token.id}`);
            }
          }, 1000);
        } else {
          this.loginTips = '登录';
        }
      }).catch(() => {
        this.loginTips = '登录';
      });
    },

    // markdown 解析
    marked(content) {
      return Object(marked["a" /* default */])(content);
    },

    loadMore() {
      if (this.loading) {
        return;
      }

      this.page++;
      this.$store.dispatch('apply/getMoreApply', {
        page: this.page
      });
    },

    initImage() {
      __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 197)).then(res => {
        res.default('.image-popper');
      });
    },

    async onSend({
      nickname,
      content,
      email
    }) {
      try {
        const res = await this.$store.dispatch('apply/createApply', {
          nickname,
          email,
          content
        });

        if (res && res.code === 1) {
          this.$refs.editor.resetField();
          this.$store.dispatch('apply/getApply', {
            page: 0,
            count: 10
          });
        }
      } catch (e) {}
    }

  },

  created() {
    this.placeholder = '入驻须知（因网站运营成本，入驻费暂定为￥199/人/年）：\n' + '为保证入驻审核成功请填写以下信息：\n' + '1：个人联系方式（QQ或微信）\n' + '2：申请入驻理由\n' + '3：申请账号ID（默认昵称）\n' + '以上信息不会被公开。填写完成后，可在下方关注审核状态\n\n';
    this.debouncedSend = Object(external_throttle_debounce_["debounce"])(1000, true, () => {
      this.login();
    });
  },

  mounted() {
    this.initImage();
  }

});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(167)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4b20164a",
  "4760088b"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map