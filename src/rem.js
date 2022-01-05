(function (document) {
    var dcl = document.documentElement, wh;

    function setRootRem() {
        wh = dcl.clientWidth;
        dcl.style.fontSize = 20 * (wh / 1800) + 'px';   // 750为设计稿宽度
        // 计算出的值为： 10px = 0.5rem
    }
    setRootRem();
    document.addEventListener('DOMContentLoaded', setRootRem, false);
    window.addEventListener('resize', setRootRem, false);
})(document);

