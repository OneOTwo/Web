var Global = new Object();
function GetJPData(url, param, fun) {
    $.getJSON(url, param, fun);
}

function PostJPData(url, param, fun) {
    $.post(url, param, fun, 'json');
}

var _IsMasked  = false;
var _IsLoading = true;
var _IsIOS     = false;

(function () {
    Global.url       = Base.url;
    Global.csPath    = Base.csPath;
    Global.jsPath    = Base.jsPath;
    Global.invoke    = Base.invoke;
    Global.LoadImg   = null;
    Global.LoadHtml  = '<div class="loadImg">正在加载</div>';
    Global.LoadPic   = Base.csPath + "/Images/loading.gif?v=130820";
    Global.NoneHtml  = '<div class="noRecords colorbbb clearfix"><s></s>暂无记录</div>';
    Global.ErrorHtml = function (b) {
        return '<div class="g-suggest clearfix">抱歉，加载失败，请重试[' + b + "]</div>"
    };
    Global.unlink = "javascript:void(0);";

    var a = function () {
        _IsIOS = browser.versions.ios || browser.versions.iPhone || browser.versions.iPad;
        var j = function (o) {
            var n = new Date();
            o.attr("src", o.attr("data") + "?v=" + Base.getVerNum())
                .removeAttr("id").removeAttr("data");
            o.attr("language", "javascript");
            o.attr("type", "text/javascript");
        };
        var g = $("#pageJS", "head");
        if (g.length > 0) {
            j(g)
        } else {
            g = $("#pageJS", "body");
            if (g.length > 0) {
                j(g)
            }
        }
        document.body.addEventListener("touchmove", function (n) {
            if (_IsMasked) {
                n.preventDefault()
            }
        }, false);
    };
    Base.getScript(Global.jsPath + "/Comm.js?v=" + Base.getVerNum(), a);
})();