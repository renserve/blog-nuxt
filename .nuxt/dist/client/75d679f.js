(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{448:function(t,r,e){var content=e(451);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(18).default)("10f43ecd",content,!0,{sourceMap:!1})},450:function(t,r,e){"use strict";e(448)},451:function(t,r,e){(r=e(17)(!1)).push([t.i,".split-wrapper{display:flex;align-items:center}.split-wrapper .icon{font-size:1.4rem}.split-wrapper .desc{font-size:13px;font-weight:700;padding:0 10px 0 5px;letter-spacing:2px;text-transform:uppercase}.split-wrapper .split{flex:1;height:1px;background-color:var(--border-color)}",""]),t.exports=r},452:function(t,r,e){"use strict";var o={props:{icon:String,desc:String},methods:{getIcon:function(t){return/icon/.test(t)?t:"icon-"+t}}},n=(e(450),e(4)),component=Object(n.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"split-wrapper"},[t.icon?e("i",{staticClass:"icon",class:t.getIcon(t.icon)}):t._e(),t._v(" "),t.desc?e("span",{staticClass:"desc"},[t._v(t._s(t.desc))]):t._e(),t._v(" "),e("div",{staticClass:"split"})])}),[],!1,null,null,null);r.a=component.exports},476:function(t,r,e){var content=e(494);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(18).default)("08b9ff1f",content,!0,{sourceMap:!1})},493:function(t,r,e){"use strict";e(476)},494:function(t,r,e){(r=e(17)(!1)).push([t.i,".about-container[data-v-381bf4a8]{width:100%;max-width:1200px;margin:0 auto;z-index:1;box-sizing:border-box;min-height:450px}@media (max-width:1440px){.about-container[data-v-381bf4a8]{padding:0 85px}}@media (max-width:1024px){.about-container[data-v-381bf4a8]{padding:0 60px}}@media (max-width:768px){.about-container[data-v-381bf4a8]{padding:0 35px}}@media (max-width:480px){.about-container[data-v-381bf4a8]{padding:0 15px}}.author-list[data-v-381bf4a8]{display:flex;flex-wrap:wrap;margin:0 -15px}.author-list .author-item[data-v-381bf4a8]{box-sizing:border-box;flex:1 1 25%;max-width:420px;min-width:280px;padding:20px;transition:all .25s ease-in-out;cursor:pointer}.author-list .author-item .item[data-v-381bf4a8]{border-radius:20px;overflow:hidden;height:100%;width:100%;box-shadow:0 2px 24px 5px var(--app-box-shadow)}.author-list .author-item .item[data-v-381bf4a8]:hover{transform:translateY(-4px);background:var(--app-background-color-active)}.author-list .author-item .author-avatar[data-v-381bf4a8]{width:100%;height:250px;background-repeat:no-repeat;background-position:50%;background-size:cover}.author-list .author-item .author-info-wrapper[data-v-381bf4a8]{box-sizing:border-box;padding:0 30px;overflow:hidden}.author-list .author-item .author-info-wrapper .social-wrapper[data-v-381bf4a8]{display:flex;justify-content:flex-start;align-items:center;flex-wrap:wrap}.author-list .author-item .author-info-wrapper .social-wrapper .social-item[data-v-381bf4a8]{font-size:24px;margin-right:20px;transition:color .25s ease-in-out;cursor:pointer}.author-list .author-item .author-info-wrapper .social-wrapper .social-item[data-v-381bf4a8]:last-child{margin-right:0}.author-list .author-item .author-info-wrapper .social-wrapper .social-item[data-v-381bf4a8]:hover{color:var(--theme-active)}@media (max-width:480px){.author-list .author-item .author-info-wrapper .social-wrapper .social-item[data-v-381bf4a8]{font-size:20px}}.author-list .author-item .author-info-wrapper .author-name[data-v-381bf4a8]{font-size:30px;font-weight:700;margin:15px 0}@media (max-width:480px){.author-list .author-item .author-info-wrapper .author-name[data-v-381bf4a8]{font-size:24px}}.author-list .author-item .author-info-wrapper .author-desc[data-v-381bf4a8]{margin:15px 0;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}@media (max-width:480px){.author-list .author-item .author-info-wrapper .author-desc[data-v-381bf4a8]{font-size:14px}}.friend-wrapper[data-v-381bf4a8]{display:flex;justify-content:flex-start;flex-wrap:wrap;width:100%;margin:0 -5px}.friend-wrapper .friend-item[data-v-381bf4a8]{display:inline-block;padding:5px 12px;margin:5px;color:var(--font-color-primary);font-size:14px;font-weight:700;letter-spacing:1.5px;border-radius:20px;background:var(--tag-color);cursor:pointer}.friend-wrapper .friend-item[data-v-381bf4a8]:last-child{margin-right:0}.friend-wrapper .friend-item[data-v-381bf4a8]:hover{color:#fff;background:var(--theme-active);transition:all .25s ease-in-out}",""]),t.exports=r},530:function(t,r,e){"use strict";e.r(r);e(21),e(11),e(10),e(8),e(19);var o=e(5),n=(e(6),e(0)),c=e(452),l=e(7);function d(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}var f={name:"about-page",components:{SplitLine:c.a},head:function(){return{title:"关于"}},fetch:function(t){return Object(n.a)(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.store,t.params,r.next=3,e.dispatch("about/getAuthors");case 3:return r.next=5,e.dispatch("blog/getFriends");case 5:case"end":return r.stop()}}),r)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(r){Object(o.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}({},Object(l.c)({authors:function(t){return t.about.authors},friends:function(t){return t.blog.friends}})),methods:{showProfile:function(t){this.$router.push({path:"/about/".concat(t)})}}},h=(e(493),e(4)),component=Object(h.a)(f,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"about-container"},[e("split-line",{attrs:{icon:"about",desc:"我们"}}),t._v(" "),e("ul",{staticClass:"author-list"},t._l(t.authors,(function(r){return e("li",{key:r.id,staticClass:"author-item",on:{click:function(e){return t.showProfile(r.id)}}},[e("div",{staticClass:"item"},[e("div",{staticClass:"author-avatar",style:{backgroundImage:"url("+r.avatar+")"}}),t._v(" "),e("div",{staticClass:"author-info-wrapper"},[e("h2",{staticClass:"author-name"},[t._v(t._s(r.nickname))]),t._v(" "),e("div",{staticClass:"author-social"}),t._v(" "),e("p",{staticClass:"author-desc"},[t._v(t._s(r.signature))])])])])})),0),t._v(" "),e("div",[e("split-line",{attrs:{icon:"star-fill",desc:"友链 (在留言板申请“昵称+链接”)"}}),t._v(" "),t.friends.length?e("ul",{staticClass:"friend-wrapper"},[t._l(t.friends,(function(r){return[e("a",{key:r.id,staticClass:"friend-item",attrs:{href:r.link,target:"_blank"}},[t._v(t._s(r.name))])]}))],2):t._e()],1)],1)}),[],!1,null,"381bf4a8",null);r.default=component.exports}}]);