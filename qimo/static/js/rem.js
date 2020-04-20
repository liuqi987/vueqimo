function lqRem() {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px';
}
lqRem();
window.onresize = lqRem;