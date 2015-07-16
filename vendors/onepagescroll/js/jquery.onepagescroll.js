(function ($) {
    $.fn.onepagescroll = function (opts, callback) {
        if (!opts) return false;
        var slef = this,
            box = $(opts.box, slef),
            num = box.length,
            index = 0,
            previndex = -1,
            touch = {},
            originalOpts = {
                disance: 100, //滑动距离
                cycle: 1, //是否循环滚 IE9以下不支持
                animationTime: 0.8 //滚动持续时间
            },
            step,
            milieu,
            transitable = 1,
            outsider = {
                index: index, //外部手动切换 当前页面角标
                viewbox: box.eq(index), //当前窗口
                change: change //手动操作方法 需要传入要切换窗口的角标
            };
        opts = $.extend(originalOpts, opts);

        function events() { //事件绑定
            if (!milieu[0]) {
                slef.on("touchstart", function (e) {
                    e.preventDefault();
                    touch.sy = e.originalEvent.touches[0].pageY;
                });
                slef.on("touchmove", function (e) {
                    var tempY = e.originalEvent.touches[0].pageY,
                        distance = tempY - touch.sy;
                    touch.my = tempY;
                    touch.distance = distance;
                });
                slef.on("touchend", function (e) {
                    if (Math.abs(touch.distance) > opts.disance) {
                        if (touch.distance > 0) scroll(0);
                        else scroll(1);
                    } else return false;
                });
            } else {
                //pc 鼠标滚轴
                slef.on("mousewheel DOMMouseScroll", function (e) {
                    if (transitable) {
                        transitable = !1;
                        var orientation = e.originalEvent.wheelDelta || e.originalEvent.detail,
                            browser = e.originalEvent.wheelDelta;
                        if (orientation > 0 && browser) scroll(0);
                        else if (orientation > 0 && !browser) scroll(1);
                        else if (orientation < 0 && browser) scroll(1);
                        else scroll(0);
                    }
                });
            }

            $(window).on("resize", function () {
                step = $("#slider").innerHeight(); // niam override
                slef.css({
                    "transform": "translateY(" + -index * step + ")",
                    "-moz-transform": "translateY(" + -index * step + ")",
                    "-webkit-transform": "translateY(" + -index * step + ")"
                });
            })
        }

        function scroll(p, j, o) { //滚动的运算
            var move = 0,
                noncycle = !1,
                animate = function (obj, move) {
					if(move!=0) move = "-100%";
                    obj.animate({
                        "top": move
                    }, opts.animationTime * 1000, function () {
                        transitable = !0;
                    });
                };
            previndex = index;
            if (!j) {
                if (p) {
                    if (index < (num - 1)) index++;
                    else if (opts.cycle) index = 0;
                    else noncycle = 1;
                } else {
                    if (index > 0) index--;
                    else if (opts.cycle) index = (num - 1);
                    else noncycle = 1;
                }
            }
            move = index * (-step);
            if (previndex == index) {
                if (index == (num - 1) && p) {
                    transitable = !0;
                    return;
                } else if (index == 0 && !p) {
                    transitable = !0;
                    return;
                }
            }
            if (milieu[1]) {
                if (!noncycle)
                    slef.css({
                        "transform": "translateY(" + move + "px)",
                        "-moz-transform": "translateY(" + move + "px)",
                        "-webkit-transform": "translateY(" + move + "px)"
                    });
                else transitable = !0;
                transitionEnd(slef[0], function () {
                    transitable = !0;
                });
            } else {
                var sub;
                if (!j) {
                    sub = box.eq(previndex);
                    move = -step;
                    if (!p) {
                        move = 0;
                        sub = box.eq(index)
                    }
                    animate(sub, move);
                } else {
                    var ca = index - o;
                    if (ca > 0) {
                        for (var i = o; i < index; i++) {
                            sub = box.eq(i);
                            move = -step;
                            animate(sub, move);
                        }
                    } else {
                        for (var i = index; i < o; i++) {
                            sub = box.eq(i);
                            move = 0;
                            animate(sub, move);
                        }
                    }
                }
            }
            if (callback)
                callback({
                    index: index,
                    viewbox: box.eq(index)
                });
        }

        function init() { //初始化
            milieu = miniMilieuTest();
            $(".home").css({
                "overflow": "hidden",
                "width": "100%",
                "height": "100%"
            });
            slef.css({
                "width": "100%",
                "height": "100%"
            });
            box.css({
                "width": "100%",
                "height": "100%"
            });
            if (milieu[1]) {
                slef.css({
                    "transform": "translateY(0)",
                    "-moz-transform": "translateY(0)",
                    "-webkit-transform": "translateY(0)",
                    "transition": "all " + opts.animationTime + "s",
                    "-moz-transition": "all " + opts.animationTime + "s",
                    "-webkit-transition": "all " + opts.animationTime + "s"
                });
            } else {
                opts.cycle = false;
                slef.css({
                    "position": "relative"
                });
                box.css({
                    "position": "absolute",
                    "top": "0"
                });
                box.each(function (i) {
                    $(this).css("z-index", (num - i));
                });
            }
            step = $("#slider").innerHeight(); // niam core override
            events();
        }

        function miniMilieuTest() {
            var ua = navigator.userAgent,
                name = "pc",
                re;
            if (ua.match(/Android/i)) name = "an";
            else if (ua.match(/BlackBerry/i)) name = "bb";
            else if (ua.match(/iPhone|iPad|iPod/i)) name = "ios";
            else if (ua.match(/IEMobile/i)) name = "wp";
            else if (ua.match(/Mobile/i)) name = "other";
            if (name == "pc") {
                if (supportCss3()) re = [1, 1];
                else re = [1, 0];
            } else re = [0, 1]
            return re;
        }

        function supportCss3() { //判断是否支持css3的transition
            var prefix = ['webkit', 'Moz', 'ms', 'o'],
                i,
                humpString = [],
                htmlStyle = document.documentElement.style,
                _toHumb = function (string) {
                    return string.replace(/-(\w)/g, function ($i, $j) {
                        return $j.toUpperCase();
                    });
                };
            for (i in prefix)
                humpString.push(_toHumb(prefix[i] + '-transition'));
            humpString.push(_toHumb('transition'));
            for (i in humpString)
                if (humpString[i] in htmlStyle) return true;
            return false;
        }

        function transitionEnd(o, fn) {
            var aoff = function () {
                fn(o);
                o.removeEventListener("webkitTransitionEnd", aoff, false);
                o.removeEventListener("transitionend", aoff, false);
                o.removeEventListener("MSTransitionEnd", aoff, false);
            }
            o.addEventListener("webkitTransitionEnd", aoff, false);
            o.addEventListener("transitionend", aoff, false);
            o.addEventListener("MSTransitionEnd", aoff, false);
        }

        function change(i) { //外部手动切换
            var temp = outsider.index;
            index = i;
            outsider.index = i;
            if (previndex - i > 0) {
                if (milieu[1]) scroll(1, 1);
                else scroll(1, 1, temp);
            } else {
                if (milieu[1]) scroll(0, 1);
                else scroll(0, 1, temp);
            }
        }

        init();

        return outsider;
    }
})(jQuery);
