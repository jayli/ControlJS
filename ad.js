debugger;
document.write("11111111111111111111111111111111");
/*(function () {
    if (typeof(HTMLElement) != "undefined" && !HTMLElement.prototype.insertAdjacentElement) {
        HTMLElement.prototype.insertAdjacentElement = function (a, b) {
            switch (a.toLowerCase()) {
            case "beforebegin":
                this.parentNode.insertBefore(b, this);
                break;
            case "afterbegin":
                this.insertBefore(b, this.firstChild);
                break;
            case "beforeend":
                this.appendChild(b);
                break;
            case "afterend":
                if (this.nextSibling) {
                    this.parentNode.insertBefore(b, this.nextSibling)
                } else {
                    this.parentNode.appendChild(b)
                }
                break
            }
        };
        HTMLElement.prototype.insertAdjacentHTML = function (b, d) {
            var c = this.ownerDocument.createRange();
            c.setStartBefore(this);
            var a = c.createContextualFragment(d);
            this.insertAdjacentElement(b, a)
        }
    }
})();
(function () {
    com_tanx = window.com_tanx || {};
    com_tanx.p = com_tanx.p || {};
    com_tanx.p.show = com_tanx.p.show || (function (c, b, a, d) {
        if (b) {
            window.setTimeout((function () {
                b.insertAdjacentHTML("beforebegin", c);
                if (typeof d == "function") {
                    d()
                }
            }), 0)
        } else { if (a) {
                window.setTimeout((function () {
                    a.insertAdjacentHTML("afterbegin", c);
                    if (typeof d == "function") {
                        d()
                    }
                }), 0)
            } else {
                document.write(c);
                if (typeof d == "function") {
                    d()
                }
            }
        }
    })
})();
(function (a) {
    com_tanx = window.com_tanx || {};
    com_tanx.p = com_tanx.p || {};
    com_tanx.p[a] = com_tanx.p[a] || (function (d, e) {
        var b = '';
        com_tanx.p.show(b, e)
    })
})("pic");
com_tanx.p["pic"]({
    "title": "",
    "clickurl": "http:\/\/click.mz.simba.taobao.com\/cc_mt?p=&s=25489268&e=F40hQYXpVnZSKr%2FPLLcqrtl44RKPJqAAmlFYc8RT%2FxqX8kNo05pAyd83cdLXhQs6eXySa6TyWLTGm0SE%2BC4y5sPZj0MGcz6QPB44gBeavbJBinxd0jqR0VWcmLfzXcZxxISlzu8SgV0OU1MKwULHX8tdUiq4EORMZZPRAuj7ZhwOohomf06xW%2FnunAgonGMCz%2BgsMoQ5dqIVSQHFo5Ft%2BR4xcgayY0K83%2F3tpnYbWeE94wvDO5sPRBL35%2Bcgj8Zxi8OZScxgKeVMxbt2o8PMEDl63txm3v82dWJ2YOMZZlV0zvbhfxQP5x76yvKPgowwfiCrami%2BiYNrI2WbLiQ%2BQj4%2FVF8xyVOrsDWrif8D0EEdxp574noSLA5mVs79SoFQJjuH%2FrO7c6W88nRYRW%2Fa8%2F2WMXC26ThBNMKJDY07Zdt2H1rnFROLifHZDF4wUmnZ&ec=CA36Tu9hhJctYsAyFuqz%2BA%3D%3D&c=04156",
    "data": "http:\/\/img.alimama.cn\/adbrand\/adboard\/picture\/2010-06-23\/114027450001100623145203.gif",
    "pid": "mm_12852562_1778064_7922557",
    "width": "950",
    "height": "90",
    "adboardtype": "pic"
},
document.getElementById("tanx-a-mm_12852562_1778064_7922557"));*/