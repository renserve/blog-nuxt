exports.ids = [7];
exports.modules = {

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(124);
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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_split_line_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_split_line_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_split_line_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_split_line_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_split_line_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".split-wrapper{display:flex;align-items:center}.split-wrapper .icon{font-size:1.4rem}.split-wrapper .desc{font-size:13px;font-weight:700;padding:0 10px 0 5px;letter-spacing:2px;text-transform:uppercase}.split-wrapper .split{flex:1;height:1px;background-color:var(--border-color)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 125:
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
  
  var style0 = __webpack_require__(123)
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
  "36b8099b"
  
)

/* harmony default export */ var split_line = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(163);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("08b9ff1f", content, true, context)
};

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_381bf4a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_381bf4a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_381bf4a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_381bf4a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_381bf4a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".about-container[data-v-381bf4a8]{width:100%;max-width:1200px;margin:0 auto;z-index:1;box-sizing:border-box;min-height:450px}@media (max-width:1440px){.about-container[data-v-381bf4a8]{padding:0 85px}}@media (max-width:1024px){.about-container[data-v-381bf4a8]{padding:0 60px}}@media (max-width:768px){.about-container[data-v-381bf4a8]{padding:0 35px}}@media (max-width:480px){.about-container[data-v-381bf4a8]{padding:0 15px}}.author-list[data-v-381bf4a8]{display:flex;flex-wrap:wrap;margin:0 -15px}.author-list .author-item[data-v-381bf4a8]{box-sizing:border-box;flex:1 1 25%;max-width:420px;min-width:280px;padding:20px;transition:all .25s ease-in-out;cursor:pointer}.author-list .author-item .item[data-v-381bf4a8]{border-radius:20px;overflow:hidden;height:100%;width:100%;box-shadow:0 2px 24px 5px var(--app-box-shadow)}.author-list .author-item .item[data-v-381bf4a8]:hover{transform:translateY(-4px);background:var(--app-background-color-active)}.author-list .author-item .author-avatar[data-v-381bf4a8]{width:100%;height:250px;background-repeat:no-repeat;background-position:50%;background-size:cover}.author-list .author-item .author-info-wrapper[data-v-381bf4a8]{box-sizing:border-box;padding:0 30px;overflow:hidden}.author-list .author-item .author-info-wrapper .social-wrapper[data-v-381bf4a8]{display:flex;justify-content:flex-start;align-items:center;flex-wrap:wrap}.author-list .author-item .author-info-wrapper .social-wrapper .social-item[data-v-381bf4a8]{font-size:24px;margin-right:20px;transition:color .25s ease-in-out;cursor:pointer}.author-list .author-item .author-info-wrapper .social-wrapper .social-item[data-v-381bf4a8]:last-child{margin-right:0}.author-list .author-item .author-info-wrapper .social-wrapper .social-item[data-v-381bf4a8]:hover{color:var(--theme-active)}@media (max-width:480px){.author-list .author-item .author-info-wrapper .social-wrapper .social-item[data-v-381bf4a8]{font-size:20px}}.author-list .author-item .author-info-wrapper .author-name[data-v-381bf4a8]{font-size:30px;font-weight:700;margin:15px 0}@media (max-width:480px){.author-list .author-item .author-info-wrapper .author-name[data-v-381bf4a8]{font-size:24px}}.author-list .author-item .author-info-wrapper .author-desc[data-v-381bf4a8]{margin:15px 0;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}@media (max-width:480px){.author-list .author-item .author-info-wrapper .author-desc[data-v-381bf4a8]{font-size:14px}}.friend-wrapper[data-v-381bf4a8]{display:flex;justify-content:flex-start;flex-wrap:wrap;width:100%;margin:0 -5px}.friend-wrapper .friend-item[data-v-381bf4a8]{display:inline-block;padding:5px 12px;margin:5px;color:var(--font-color-primary);font-size:14px;font-weight:700;letter-spacing:1.5px;border-radius:20px;background:var(--tag-color);cursor:pointer}.friend-wrapper .friend-item[data-v-381bf4a8]:last-child{margin-right:0}.friend-wrapper .friend-item[data-v-381bf4a8]:hover{color:#fff;background:var(--theme-active);transition:all .25s ease-in-out}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/about/index.vue?vue&type=template&id=381bf4a8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"about-container"},[_c('split-line',{attrs:{"icon":'about',"desc":'我们'}}),_vm._ssrNode(" <ul class=\"author-list\" data-v-381bf4a8>"+(_vm._ssrList((_vm.authors),function(author){return ("<li class=\"author-item\" data-v-381bf4a8><div class=\"item\" data-v-381bf4a8><div class=\"author-avatar\""+(_vm._ssrStyle(null,{backgroundImage: ("url(" + (author.avatar) + ")")}, null))+" data-v-381bf4a8></div> <div class=\"author-info-wrapper\" data-v-381bf4a8><h2 class=\"author-name\" data-v-381bf4a8>"+_vm._ssrEscape(_vm._s(author.nickname))+"</h2> <div class=\"author-social\" data-v-381bf4a8></div> <p class=\"author-desc\" data-v-381bf4a8>"+_vm._ssrEscape(_vm._s(author.signature))+"</p></div></div></li>")}))+"</ul> "),_vm._ssrNode("<div data-v-381bf4a8>","</div>",[_c('split-line',{attrs:{"icon":'star-fill',"desc":'友链 (在留言板申请“昵称+链接”)'}}),_vm._ssrNode(" "+((_vm.friends.length)?("<ul class=\"friend-wrapper\" data-v-381bf4a8>"+(_vm._ssrList((_vm.friends),function(friend){return ("<a"+(_vm._ssrAttr("href",friend.link))+" target=\"_blank\" class=\"friend-item\" data-v-381bf4a8>"+_vm._ssrEscape(_vm._s(friend.name))+"</a>")}))+"</ul>"):"<!---->"))],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about/index.vue?vue&type=template&id=381bf4a8&scoped=true&

// EXTERNAL MODULE: ./components/base/split-line/split-line.vue + 4 modules
var split_line = __webpack_require__(125);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var aboutvue_type_script_lang_js_ = ({
  name: 'about-page',
  components: {
    SplitLine: split_line["a" /* default */]
  },

  head() {
    return {
      title: '关于'
    };
  },

  async fetch({
    store,
    params
  }) {
    await store.dispatch('about/getAuthors');
    await store.dispatch('blog/getFriends');
  },

  computed: { ...Object(external_vuex_["mapState"])({
      authors: state => state.about.authors,
      friends: state => state.blog.friends
    })
  },
  methods: {
    showProfile(id) {
      this.$router.push({
        path: `/about/${id}`
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/about/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/about/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(162)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "381bf4a8",
  "1e82a88f"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map