exports.ids = [0];
exports.modules = {

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 图片懒加载
 */
function getImgs(el) {
  const imgs = Array.from(document.querySelectorAll(el));
  imgs.forEach(v => io.observe(v));
}

function loadImg(el) {
  if (!el.src) {
    el.src = el.dataset.src;
  }
}

const io = new IntersectionObserver(entries => {
  entries.forEach(item => {
    const el = item.target;
    const intersectionRatio = item.intersectionRatio;

    if (intersectionRatio > 0 && intersectionRatio <= 1) {
      loadImg(el);
    }

    el.onload = () => {
      el.classList.add('loaded');
      el.previousElementSibling.classList.add('hidden'); // 图片加载后隐藏缩略图

      io.unobserve(el);
    };

    el.onerror = () => io.unobserve(el);
  });
});
/* harmony default export */ __webpack_exports__["default"] = (getImgs);

/***/ })

};;
//# sourceMappingURL=0.js.map