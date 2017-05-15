(function () {
    Base = {
        head: document.getElementsByTagName("head")[0] || document.documentElement,
        Myload: function (B, A) {
            this.done = false;
            B.onload = B.onreadystatechange = function () {
                if (!this.done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                    this.done = true;
                    A();
                    B.onload = B.onreadystatechange = null;
                    if (this.head && B.parentNode) {
                        this.head.removeChild(B)
                    }
                }
            }
        },
        getScript: function (A, C) {
            var B = function () {
            };
            if (C != undefined) {
                B = C;
            }
            var D = document.createElement("script");
            D.setAttribute("language", "javascript");
            D.setAttribute("type", "text/javascript");
            D.setAttribute("src", A);
            this.head.appendChild(D);
            this.Myload(D, B);
        },
        getStyle: function (A, C) {
            var B = function () {
            };
            if (C != undefined) {
                B = C;
            }
            var D = document.createElement("link");
            D.setAttribute("type", "text/css");
            D.setAttribute("rel", "stylesheet");
            D.setAttribute("href", A);
            this.head.appendChild(D);
            this.Myload(D, B);
        },
        url: "..",
        csPath: "..",
        jsPath: "..",
        invoke: "..",
        getVerNum: function () {
            var D = new Date();
            return D.getFullYear().toString().substring(2, 4) + '.' + (D.getMonth() + 1) + '.' + D.getDate() + '.' + D.getHours() + '.' + (D.getMinutes() < 10 ? '0' : D.getMinutes().toString().substring(0, 1));
        }
    }
})();