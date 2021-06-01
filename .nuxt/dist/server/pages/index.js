exports.ids = [10];
exports.modules = {

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(131);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1391b60b", content, true, context)
};

/***/ }),

/***/ 129:
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

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_article_list_vue_vue_type_style_index_0_id_32a0e351_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(126);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_article_list_vue_vue_type_style_index_0_id_32a0e351_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_article_list_vue_vue_type_style_index_0_id_32a0e351_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_article_list_vue_vue_type_style_index_0_id_32a0e351_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_article_list_vue_vue_type_style_index_0_id_32a0e351_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fade-enter-active[data-v-32a0e351],.fade-leave-active[data-v-32a0e351]{transition:opacity 2s}.fade-enter[data-v-32a0e351],.fade-leave-active[data-v-32a0e351]{opacity:0}.article-list-container[data-v-32a0e351]{width:100%;max-width:1200px;z-index:1;box-sizing:border-box;margin:0 auto}@media (max-width:1440px){.article-list-container[data-v-32a0e351]{padding:0 85px}}@media (max-width:1024px){.article-list-container[data-v-32a0e351]{padding:0 60px}}@media (max-width:768px){.article-list-container[data-v-32a0e351]{padding:0 35px}}@media (max-width:480px){.article-list-container[data-v-32a0e351]{padding:0 15px}}.article-list-wrapper[data-v-32a0e351]{box-sizing:border-box;padding:50px;border-radius:5px;background-color:var(--app-background-color-light);box-shadow:0 2px 24px 5px var(--app-box-shadow);transition:all .1s linear}@media (max-width:1440px){.article-list-wrapper[data-v-32a0e351]{padding:40px}}@media (max-width:1024px){.article-list-wrapper[data-v-32a0e351]{padding:30px}}@media (max-width:768px){.article-list-wrapper[data-v-32a0e351]{padding:20px}}@media (max-width:480px){.article-list-wrapper[data-v-32a0e351]{padding:0;box-shadow:none}}.article-list-wrapper .mood[data-v-32a0e351]{overflow:hidden;margin-top:20px;padding:30px;color:var(--font-color-article);background:var(--mood-background);border:1px solid var(--border-color);border-radius:5px}.article-list-wrapper .mood i[data-v-32a0e351],.article-list-wrapper .mood time[data-v-32a0e351]{font-size:13px}.article-list-wrapper .mood .content[data-v-32a0e351]{margin-top:8px;margin-bottom:5px}@media (max-width:480px){.article-list-wrapper .mood[data-v-32a0e351]{margin-top:10px;padding:15px;font-size:14px}}.article-list-wrapper .article-item[data-v-32a0e351]{position:relative;display:flex;justify-content:flex-end;align-items:flex-start;text-align:left;box-sizing:border-box;border-top:1px solid var(--main-border-color);padding:40px 30px}@media (max-width:1024px){.article-list-wrapper .article-item[data-v-32a0e351]{flex-direction:column-reverse;right:auto;width:100%;padding:40px 30px;text-align:left}.article-list-wrapper .article-item[data-v-32a0e351]:nth-child(2n){flex-direction:column-reverse;left:auto;text-align:left}}@media (max-width:768px){.article-list-wrapper .article-item[data-v-32a0e351]{padding:30px 20px}}@media (max-width:480px){.article-list-wrapper .article-item[data-v-32a0e351]{padding:20px 10px}}.article-list-wrapper .article-item[data-v-32a0e351]:hover{background:var(--app-background-color-active)}.article-wrapper[data-v-32a0e351]{width:100%;color:var(--font-color-article)}.article-wrapper .category[data-v-32a0e351]{cursor:pointer;color:var(--font-color-light)}.article-wrapper .title[data-v-32a0e351]{margin:10px 0 0;font-weight:700;color:var(--font-color-dark)}@media (max-width:768px){.article-wrapper .title[data-v-32a0e351]{font-size:20px}}.article-wrapper .title .article-link[data-v-32a0e351]{position:relative;cursor:pointer}.article-wrapper .title .article-link:hover .hover-dot[data-v-32a0e351]{background-color:var(--theme-active)}.article-wrapper .title .article-link .hover-dot[data-v-32a0e351]{position:absolute;right:-10px;width:7px;height:7px;border-radius:50%;transition:all .25s ease}.article-wrapper .content[data-v-32a0e351]{margin:1.5em 0;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:7;-webkit-box-orient:vertical}@media (max-width:480px){.article-wrapper .content[data-v-32a0e351]{font-size:14px}}.article-wrapper .footer[data-v-32a0e351]{display:flex;justify-content:space-between;align-items:center;font-size:13px}.article-wrapper .footer .author-wrapper[data-v-32a0e351]{display:flex;justify-content:flex-start;align-items:center}.article-wrapper .footer .author-wrapper .avatar[data-v-32a0e351]{display:inline-block;width:34px;height:34px;margin-right:5px;border-radius:50%;background-position:50%;background-repeat:no-repeat;background-size:cover}@media (max-width:480px){.article-wrapper .footer .author-wrapper .avatar[data-v-32a0e351]{width:26px;height:26px}}.article-wrapper .footer .author-wrapper .avatar[data-v-32a0e351]:not(:first-child){margin-left:-17px}.article-wrapper .footer .author-wrapper .author[data-v-32a0e351]{display:flex;align-items:center;white-space:nowrap}.article-wrapper .footer .author-wrapper .author[data-v-32a0e351]:not(:first-child):before{content:\", \";margin:0 8px}.article-wrapper .footer .info-wrapper[data-v-32a0e351]{display:flex;align-items:center;font-size:13px}.article-wrapper .footer .info-wrapper>i[data-v-32a0e351]{display:inline-block;margin-right:2px}.article-wrapper .footer .info-wrapper>span[data-v-32a0e351]{margin-right:10px;line-height:1}.article-wrapper .footer .info-wrapper>time[data-v-32a0e351]{line-height:1}.article-wrapper .footer .info-wrapper .count[data-v-32a0e351],.article-wrapper .footer .info-wrapper .time[data-v-32a0e351]{white-space:nowrap}.split[data-v-32a0e351]{width:4vw;min-width:4vw}.article-image[data-v-32a0e351]{width:340px;min-width:340px;border-radius:4px;background-size:cover;cursor:pointer}@media (max-width:1024px){.article-image[data-v-32a0e351]{width:100%;min-width:auto;margin-bottom:30px;box-shadow:none}}@media (max-width:768px){.article-image[data-v-32a0e351]{margin-bottom:20px}}.load-more[data-v-32a0e351]{box-sizing:border-box;width:40px;height:40px;margin:0 auto;border:8px solid #dcdfe7;border-radius:50%;transition:all .25s ease-in-out;cursor:pointer}@media (max-width:480px){.load-more[data-v-32a0e351]{width:30px;height:30px;border-width:5px}}.load-more[data-v-32a0e351]:hover{border-color:var(--theme-active);background-color:var(--theme-active);transform:scale(.65)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/article-list/article-list.vue?vue&type=template&id=32a0e351&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-list-container"},[_vm._ssrNode("<div class=\"article-list-wrapper\" data-v-32a0e351>","</div>",[(_vm.lists.length)?_vm._l((_vm.lists),function(article,index){return _c('client-only',{key:article.id,attrs:{"public":article.public}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowMoodList),expression:"isShowMoodList"}],staticClass:"mood",style:([!index?{marginTop:0}:{}])},[_c('div',[_c('i',{staticClass:"iconfont iconrili"}),_vm._v(" "),_c('time',{attrs:{"datetime":_vm._f("filterTime")(article.create_time,'Y-m-d')}},[_vm._v(_vm._s(_vm._f("filterTime")(article.create_time,'Y-m-d')))]),_vm._v(" "),_c('div',{staticClass:"content",domProps:{"innerHTML":_vm._s(article.content)}})]),_vm._v(" "),(article.cover)?_c('img',{attrs:{"src":article.cover,"alt":""}}):_vm._e()]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isShowMoodList),expression:"!isShowMoodList"}],staticClass:"article-item",style:([!index?{border:'none'}:{}])},[_c('article',{staticClass:"article-wrapper"},[_vm._l((article.categories),function(category){return _c('a',{key:category.id,staticClass:"category"},[_vm._v("\n                            "+_vm._s(category.name)+"\n                        ")])}),_vm._v(" "),_c('h3',{staticClass:"title"},[_c('router-link',{staticClass:"article-link",attrs:{"to":'/article/' + article.id}},[_vm._v("\n                                "+_vm._s(article.title)),_c('span',{staticClass:"hover-dot"})])],1),_vm._v(" "),_c('p',{staticClass:"content"},[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('footer',{staticClass:"footer"},[_c('ul',{staticClass:"author-wrapper"},_vm._l((article.authors),function(author){return _c('li',{key:author.id,staticClass:"author"},[_c('span',{staticClass:"avatar",style:({backgroundImage:("url(" + (author.avatar) + ")")})}),_vm._v(" "),_c('span',[_vm._v(_vm._s(author.nickname))])])}),0),_vm._v(" "),_c('div',{staticClass:"info-wrapper"},[_c('i',{staticClass:"icon icon-eye"}),_vm._v(" "),_c('span',{staticClass:"count"},[_vm._v(_vm._s(article.views))]),_vm._v(" "),_c('i',{staticClass:"icon icon-reply"}),_vm._v(" "),_c('span',{staticClass:"count"},[_vm._v(_vm._s(article.comments && article.comments.length))]),_vm._v(" "),_c('i',{staticClass:"icon icon-heart"}),_vm._v(" "),_c('span',{staticClass:"count"},[_vm._v(_vm._s(article.like))]),_vm._v(" "),_c('time',{staticClass:"time",attrs:{"datetime":_vm._f("filterTime")(article.create_time,'Y-m-d')}},[_vm._v("\n                                    "+_vm._s(_vm._f("filterTime")(article.create_time,'Y-m-d'))+"\n                                ")])])])],2),_vm._v(" "),(article.cover)?_c('div',{staticClass:"split"}):_vm._e(),_vm._v(" "),(article.cover)?_c('img',{staticClass:"article-image",attrs:{"src":article.cover}}):_vm._e()])])}):_vm._e(),_vm._ssrNode(" "+((_vm.isLoadMore)?("<div class=\"load-more\" data-v-32a0e351></div>"):"<!---->")+" "),(_vm.loading)?_c('loading'):_vm._e(),_vm._ssrNode(" "),(!_vm.loading && !_vm.lists.length)?_c('empty'):_vm._e()],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/layout/article-list/article-list.vue?vue&type=template&id=32a0e351&scoped=true&

// EXTERNAL MODULE: ./components/base/client-only/client-only.vue + 4 modules
var client_only = __webpack_require__(14);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: external "lodash/isObject"
var isObject_ = __webpack_require__(53);
var isObject_default = /*#__PURE__*/__webpack_require__.n(isObject_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/article-list/article-list.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var article_listvue_type_script_lang_js_ = ({
  name: 'article-list',
  components: {
    ClientOnly: client_only["a" /* default */]
  },
  props: {
    articles: {
      type: Array,
      default: () => []
    },
    moods: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    },
    total: {
      type: Number,
      default: 0
    }
  },
  computed: { ...Object(external_vuex_["mapState"])({
      isMoodList: state => state.app.isMoodList,
      toggleLoading: state => state.app.toggleLoading
    }),

    moodListKey() {
      let path = this.$route.path;

      if (/category/.test(path) || /tag\/\d+/.test(path)) {
        return 'tag';
      } else if (/about\/\d+/.test(path)) {
        return 'about';
      } else {
        return '';
      }
    },

    isShowMoodList() {
      return this.moodListKey && this.isMoodList[this.moodListKey];
    },

    lists() {
      return this.isShowMoodList ? this.moods : this.articles;
    },

    isLoadMore() {
      const total = isObject_default()(this.total) ? this.isShowMoodList ? this.total.mood : this.total.article : this.total;

      if (this.lists.length && !this.loading) {
        return total > this.lists.length;
      } else {
        return false;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/layout/article-list/article-list.vue?vue&type=script&lang=js&
 /* harmony default export */ var article_list_article_listvue_type_script_lang_js_ = (article_listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/layout/article-list/article-list.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(130)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  article_list_article_listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "32a0e351",
  "a4532c98"
  
)

/* harmony default export */ var article_list = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(187);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("597552fa", content, true, context)
};

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(189);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("67dbccfe", content, true, context)
};

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(191);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("39f74b16", content, true, context)
};

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(193);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("de05fa2e", content, true, context)
};

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_6fb18d4d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(157);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_6fb18d4d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_6fb18d4d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_6fb18d4d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_6fb18d4d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".caoursel-container[data-v-6fb18d4d]{width:100%;position:relative}.carousel-wrapper[data-v-6fb18d4d]{position:relative;display:block;height:100%;min-height:1px;overflow:hidden}.carousel-nav[data-v-6fb18d4d]{position:absolute;top:50%;margin-top:-15px;padding:12px;border:solid var(--main-border-color);background:transparent;cursor:pointer;transition:all .2s ease;transform:rotate(-45deg);outline:none;z-index:1}.carousel-nav[data-v-6fb18d4d]:hover{padding:8px;border-color:var(--theme-active)}@media (max-width:1024px){.carousel-nav[data-v-6fb18d4d]{top:calc(50% - 5vh)}}@media (max-width:480px){.carousel-nav[data-v-6fb18d4d]{display:none}}.prev-nav[data-v-6fb18d4d]{left:40px;border-width:4px 0 0 4px}.next-nav[data-v-6fb18d4d]{right:40px;border-width:0 4px 4px 0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_item_vue_vue_type_style_index_0_id_fe007aaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_item_vue_vue_type_style_index_0_id_fe007aaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_item_vue_vue_type_style_index_0_id_fe007aaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_item_vue_vue_type_style_index_0_id_fe007aaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_item_vue_vue_type_style_index_0_id_fe007aaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".carousel-item[data-v-fe007aaa]{position:absolute;top:0;left:0;display:inline-block;width:100%;height:100%;overflow:hidden;z-index:0}.is-animating[data-v-fe007aaa]{transition:transform .5s ease-in-out}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_card_vue_vue_type_style_index_0_id_7d08d0a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(159);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_card_vue_vue_type_style_index_0_id_7d08d0a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_card_vue_vue_type_style_index_0_id_7d08d0a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_card_vue_vue_type_style_index_0_id_7d08d0a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_card_vue_vue_type_style_index_0_id_7d08d0a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".card-container[data-v-7d08d0a8]{display:flex;justify-content:space-between;width:calc(100% - 160px);height:100%;margin:0 auto;max-width:1520px;box-sizing:border-box}.card-container .card-image[data-v-7d08d0a8]{width:calc(50% - 45px);height:100%;border-radius:5px;background-position:50%;background-repeat:no-repeat;background-size:cover}@media (max-width:1024px){.card-container .card-image[data-v-7d08d0a8]{position:relative}.card-container .card-image[data-v-7d08d0a8]:before{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;content:\"\";opacity:.35;background-color:#394245;background-image:linear-gradient(234deg,#394245,#000)}}.card-container .feature-wrapper[data-v-7d08d0a8]{display:flex;flex-direction:column;justify-content:center;width:50%;box-sizing:border-box}.feature-text[data-v-7d08d0a8]{margin:20px 0 25px;font-size:46px;font-weight:700;line-height:1.2}.feature-text a[data-v-7d08d0a8]{position:relative;cursor:pointer}.feature-text a:hover .feature-dot[data-v-7d08d0a8]{background-color:var(--theme-active)!important}.feature-text .feature-dot[data-v-7d08d0a8]{display:inline-block;position:absolute;right:-14px;width:12px;height:12px;margin-top:8px;border-radius:50%;transition:all .25s ease}.feature-category .category-name[data-v-7d08d0a8]{cursor:pointer}.feature-author[data-v-7d08d0a8]{font-size:14px;font-weight:400}.feature-author .author-name[data-v-7d08d0a8]{font-size:18px;font-weight:700;cursor:pointer}.feature-author .author-name[data-v-7d08d0a8]:not(:first-child):before{content:\"、\"}@media (min-width:1024px) and (max-width:1440px){.card-container[data-v-7d08d0a8]{width:100%}.card-container .card-image[data-v-7d08d0a8]{border-radius:0 5px 5px 0}.feature-text[data-v-7d08d0a8]{font-size:36px}.feature-dot[data-v-7d08d0a8]{right:-14px;width:10px;height:10px;margin-top:10px}}@media (max-width:1024px){.card-container[data-v-7d08d0a8]{position:relative;display:block;width:100%}.card-container .card-image[data-v-7d08d0a8]{width:100%;border-radius:0}.card-container .feature-wrapper[data-v-7d08d0a8]{display:flex;justify-content:center;align-items:center;position:absolute;top:0;width:100%;height:100%;z-index:1}.card-container .feature-content[data-v-7d08d0a8]{padding:60px 18% 60px 123px;color:#fff}.card-container .feature-content a[data-v-7d08d0a8]{color:#fff}.card-container .feature-content a:hover .feature-dot[data-v-7d08d0a8]{background-color:transparent!important}.feature-text[data-v-7d08d0a8]{font-size:46px}.feature-author[data-v-7d08d0a8],.feature-author a[data-v-7d08d0a8]{font-size:14px}}@media (max-width:768px){.card-container .feature-content[data-v-7d08d0a8]{padding:60px 18% 60px 85px}.feature-text[data-v-7d08d0a8]{margin:15px 0 20px;font-size:36px}}@media (max-width:480px){.card-container .feature-content[data-v-7d08d0a8]{padding:30px 15px}.feature-text[data-v-7d08d0a8]{font-size:30px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7fa2e00f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(160);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7fa2e00f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7fa2e00f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7fa2e00f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7fa2e00f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".carousel-container[data-v-7fa2e00f]{height:calc(100vh - 450px);min-height:450px}@media (max-width:1024px){.carousel-container[data-v-7fa2e00f]{margin-top:-160px}}@media (max-width:480px){.carousel-container[data-v-7fa2e00f]{margin-top:-100px}}.article-wrapper[data-v-7fa2e00f]{position:relative;width:100%;margin-top:-10vh}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=7fa2e00f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('carousel',{staticClass:"carousel-container",attrs:{"showRightArrow":_vm.starArticles.length > 1,"showLeftArrow":_vm.starArticles.length > 1,"autoplay":_vm.starArticles.length > 1}},_vm._l((_vm.starArticles),function(article,index){return _c('carousel-item',{key:article.id},[_c('carousel-card',{attrs:{"article":article}})],1)}),1),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"article-wrapper\" data-v-7fa2e00f>","</section>",[_c('article-list',{attrs:{"articles":_vm.articles,"loading":_vm.loading,"total":_vm.total},on:{"loadMore":_vm.onLoadMore}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=7fa2e00f&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/base/carousel/carousel.vue?vue&type=template&id=6fb18d4d&scoped=true&
var carouselvue_type_template_id_6fb18d4d_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"carousel-container",on:{"mouseenter":function($event){$event.stopPropagation();return _vm.handleMouseEnter($event)},"mouseleave":function($event){$event.stopPropagation();return _vm.handleMouseLeave($event)}}},[_vm._ssrNode("<div class=\"carousel-wrapper\""+(_vm._ssrStyle(null,{ height: _vm.height }, null))+" data-v-6fb18d4d>","</div>",[_vm._ssrNode("<button class=\"carousel-nav prev-nav\""+(_vm._ssrStyle(null,null, { display: (_vm.showLeftArrow) ? '' : 'none' }))+" data-v-6fb18d4d></button> <button class=\"carousel-nav next-nav\""+(_vm._ssrStyle(null,null, { display: (_vm.showRightArrow) ? '' : 'none' }))+" data-v-6fb18d4d></button> "),_vm._t("default")],2)])}
var carouselvue_type_template_id_6fb18d4d_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/base/carousel/carousel.vue?vue&type=template&id=6fb18d4d&scoped=true&

// EXTERNAL MODULE: external "throttle-debounce"
var external_throttle_debounce_ = __webpack_require__(26);

// EXTERNAL MODULE: ./services/utils/dom.js
var dom = __webpack_require__(129);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/carousel/carousel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var carouselvue_type_script_lang_js_ = ({
  name: "Carousel",
  props: {
    showLeftArrow: {
      type: Boolean,
      default: true
    },
    showRightArrow: {
      type: Boolean,
      default: true
    },
    initialIndex: {
      type: Number,
      default: 0
    },
    height: String,
    autoplay: {
      type: Boolean,
      defualt: false
    },
    autoplaySpeed: {
      type: Number,
      default: 3000
    },
    loop: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      timer: null,
      items: [],
      activeIndex: -1
    };
  },

  computed: {},
  watch: {
    items(val) {
      if (val.length > 0) this.setActiveItem(this.initialIndex);
    },

    activeIndex(val, oldVal) {
      this.resetItemPosition(oldVal);
      this.$emit("change", val, oldVal);
    },

    autoplay(val) {
      val ? this.startTimer() : this.pauseTimer();
    },

    loop() {
      this.setActiveItem(this.activeIndex);
    }

  },
  methods: {
    handleMouseEnter() {
      this.pauseTimer();
    },

    handleMouseLeave() {
      this.startTimer();
    },

    updateItems() {
      this.items = this.$children.filter(child => child.$options.name === "CarouselItem");
    },

    playSlides() {
      let length = this.items.length;

      if (this.activeIndex < length - 1) {
        this.activeIndex++;
      } else if (this.loop) {
        this.activeIndex = 0;
      }
    },

    startTimer() {
      // this.interval <= 0 ||
      if (!this.autoplay || this.timer) return;
      this.timer = setInterval(this.playSlides, this.autoplaySpeed);
    },

    pauseTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },

    setActiveItem(index) {
      let length = this.items.length;
      const oldIndex = this.activeIndex;

      if (index < 0) {
        this.activeIndex = this.loop ? length - 1 : 0;
      } else if (index >= length) {
        this.activeIndex = this.loop ? 0 : length - 1;
      } else {
        this.activeIndex = index;
      }

      if (oldIndex === this.activeIndex) {
        this.resetItemPosition(oldIndex);
      }
    },

    resetItemPosition(oldIndex) {
      this.items.forEach((item, index) => {
        item.translateItem(index, this.activeIndex, oldIndex);
      });
    }

  },

  created() {
    this.throttledArrowClick = Object(external_throttle_debounce_["throttle"])(300, true, index => {
      this.setActiveItem(index);
    });
  },

  mounted() {
    this.updateItems();
    this.$nextTick(() => {
      Object(dom["c" /* on */])(window, "resize", this.resetItemPosition);

      if (this.initialIndex < this.items.length && this.initialIndex >= 0) {
        this.activeIndex = this.initialIndex;
      }

      this.startTimer();
    });
  },

  beforeDestroy() {
    Object(dom["b" /* off */])(window, "resize", this.resetItemPosition);
    this.pauseTimer();
  }

});
// CONCATENATED MODULE: ./components/base/carousel/carousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var carousel_carouselvue_type_script_lang_js_ = (carouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/base/carousel/carousel.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(186)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  carousel_carouselvue_type_script_lang_js_,
  carouselvue_type_template_id_6fb18d4d_scoped_true_render,
  carouselvue_type_template_id_6fb18d4d_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "6fb18d4d",
  "3713da7b"
  
)

/* harmony default export */ var carousel = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/base/carousel/carousel-item.vue?vue&type=template&id=fe007aaa&scoped=true&
var carousel_itemvue_type_template_id_fe007aaa_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.ready),expression:"ready"}],staticClass:"carousel-item",class:{
  'is-animating': _vm.animating
},style:(_vm.itemStyle)},[_vm._t("default")],2)}
var carousel_itemvue_type_template_id_fe007aaa_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/base/carousel/carousel-item.vue?vue&type=template&id=fe007aaa&scoped=true&

// EXTERNAL MODULE: external "lodash/isUndefined"
var isUndefined_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/carousel/carousel-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var carousel_itemvue_type_script_lang_js_ = ({
  name: "CarouselItem",

  data() {
    return {
      translate: 0,
      scale: 1,
      ready: false,
      animating: false
    };
  },

  computed: {
    itemStyle() {
      const value = `translateX(${this.translate}px) scale(${this.scale})`;
      const style = {
        transform: value
      };
      return style;
    }

  },
  methods: {
    processIndex(index, activeIndex, length) {
      //最后一张左移1
      if (activeIndex === 0 && index === length - 1) {
        return -1;
      } else if (activeIndex === length - 1 && index === 0) {
        //第一张右移1
        return length;
      } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
        //左边移动到右边备用
        return length + 1;
      } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
        //右边移动到左边备用
        return -2;
      }

      return index;
    },

    calcTranslate(index, activeIndex) {
      const distance = this.$parent.$el["offsetWidth"];
      return distance * (index - activeIndex);
    },

    translateItem(index, activeIndex, oldIndex) {
      const length = this.$parent.items.length;
      this.animating = index === activeIndex || index === oldIndex;

      if (length > 2) {
        if (index !== activeIndex && this.$parent.loop) {
          //改变排序index
          index = this.processIndex(index, activeIndex, length);
        } // this.translate = this.calcTranslate(index, activeIndex);

      } else if (length === 2) {}

      this.translate = this.calcTranslate(index, activeIndex);
      this.ready = true;
    }

  },

  created() {
    this.$parent && this.$parent.updateItems();
  },

  destroyed() {
    this.$parent && this.$parent.updateItems();
  }

});
// CONCATENATED MODULE: ./components/base/carousel/carousel-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var carousel_carousel_itemvue_type_script_lang_js_ = (carousel_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/base/carousel/carousel-item.vue



function carousel_item_injectStyles (context) {
  
  var style0 = __webpack_require__(188)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var carousel_item_component = Object(componentNormalizer["a" /* default */])(
  carousel_carousel_itemvue_type_script_lang_js_,
  carousel_itemvue_type_template_id_fe007aaa_scoped_true_render,
  carousel_itemvue_type_template_id_fe007aaa_scoped_true_staticRenderFns,
  false,
  carousel_item_injectStyles,
  "fe007aaa",
  "05a53d55"
  
)

/* harmony default export */ var carousel_item = (carousel_item_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/carousel-card/carousel-card.vue?vue&type=template&id=7d08d0a8&scoped=true&
var carousel_cardvue_type_template_id_7d08d0a8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-container"},[_vm._ssrNode("<div class=\"card-image\""+(_vm._ssrStyle(null,{backgroundImage: ("url(" + (_vm.article.cover) + ")")}, null))+" data-v-7d08d0a8></div> <div class=\"feature-wrapper\" data-v-7d08d0a8><article class=\"feature-content\" data-v-7d08d0a8><div class=\"feature-category\" data-v-7d08d0a8>"+(_vm._ssrList((_vm.article.categories),function(category){return ("<span class=\"category-name\" data-v-7d08d0a8>"+_vm._ssrEscape("\n                    "+_vm._s(category.name)+"\n                ")+"</span>")}))+"</div> <h2 class=\"feature-text\" data-v-7d08d0a8><a data-v-7d08d0a8>"+_vm._ssrEscape("\n                    "+_vm._s(_vm.article.title)+"\n                    ")+"<span class=\"feature-dot\" data-v-7d08d0a8></span></a></h2> <span class=\"feature-author\" data-v-7d08d0a8>by \n                "+(_vm._ssrList((_vm.article.authors),function(author){return ("<span class=\"author-name\" data-v-7d08d0a8>"+_vm._ssrEscape(_vm._s(author.nickname))+"</span>")}))+" <time"+(_vm._ssrAttr("datetime",_vm._f("filterTime")(_vm.article.create_time)))+" data-v-7d08d0a8>"+_vm._ssrEscape("\n                 "+_vm._s(_vm._f("filterTime")(_vm.article.create_time,'Y-m-d'))+"\n                ")+"</time></span></article></div>")])}
var carousel_cardvue_type_template_id_7d08d0a8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/layout/carousel-card/carousel-card.vue?vue&type=template&id=7d08d0a8&scoped=true&

// EXTERNAL MODULE: ./assets/image/home_our.jpg
var home_our = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/carousel-card/carousel-card.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import defaultCover from '@/assets/image/lighthouse.jpg'

/* harmony default export */ var carousel_cardvue_type_script_lang_js_ = ({
  props: {
    article: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    nav() {
      if (this.article.id) {
        this.$router.push({
          path: `/article/${this.article.id}`
        });
      }
    },

    navCategory(id) {
      if (id) {
        /*this.$router.push({
            path: `/about/${id}`
        })*/
      }
    },

    navAuthor(id) {
      if (id) {
        this.$router.push({
          path: `/about/${id}`
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./components/layout/carousel-card/carousel-card.vue?vue&type=script&lang=js&
 /* harmony default export */ var carousel_card_carousel_cardvue_type_script_lang_js_ = (carousel_cardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/layout/carousel-card/carousel-card.vue



function carousel_card_injectStyles (context) {
  
  var style0 = __webpack_require__(190)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var carousel_card_component = Object(componentNormalizer["a" /* default */])(
  carousel_card_carousel_cardvue_type_script_lang_js_,
  carousel_cardvue_type_template_id_7d08d0a8_scoped_true_render,
  carousel_cardvue_type_template_id_7d08d0a8_scoped_true_staticRenderFns,
  false,
  carousel_card_injectStyles,
  "7d08d0a8",
  "f3e34554"
  
)

/* harmony default export */ var carousel_card = (carousel_card_component.exports);
// EXTERNAL MODULE: ./components/layout/article-list/article-list.vue + 4 modules
var article_list = __webpack_require__(132);

// EXTERNAL MODULE: ./config/const.js
var config_const = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'home-page',
  components: {
    Carousel: carousel,
    CarouselItem: carousel_item,
    CarouselCard: carousel_card,
    ArticleList: article_list["a" /* default */]
  },

  async fetch({
    store,
    params
  }) {
    const token = store.state.app.token;
    await store.dispatch('article/getHomeArticles', {
      page: 0,
      count: 10,
      isFront: token ? true : false
    });
  },

  data() {
    return {
      page: 0
    };
  },

  computed: {
    articles() {
      return this.$store.state.article.articles;
    },

    total() {
      return this.$store.state.article.total;
    },

    starArticles() {
      const starArticles = this.$store.state.article.starArticles;

      if (!starArticles.length) {
        return [config_const["a" /* default */].defaultStar];
      }

      return starArticles;
    },

    loading() {
      return this.$store.state.article.loading;
    }

  },
  methods: {
    onLoadMore() {
      if (this.loading) {
        return;
      }

      this.page++;
      this.$store.dispatch('article/getMoreArticles', {
        page: this.page,
        count: 10
      });
    }

  },

  mounted() {}

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue



function pages_injectStyles (context) {
  
  var style0 = __webpack_require__(192)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  pages_injectStyles,
  "7fa2e00f",
  "6def011e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map