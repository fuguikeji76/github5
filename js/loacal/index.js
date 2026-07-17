function ajaxRequst(e, t) {
    "#pk10" == t ? indexObj.ajaxpk10(e, lotCode.pk10, t) :
        "#lhc" == t ? indexObj.ajaxLhc(e, lotCode.pk10, t) :
        "#self18" == t ? indexObj.ajaxXjpLhc(3, 18, t) :
        "#jssc" == t ? indexObj.ajaxJssc(e, lotCode.pk10, t) :
        "#jsft" == t ? indexObj.ajaxJsft(e, lotCode.pk10, t) :
        "#xyft" == t ? indexObj.ajaxXyft(e, lotCode.pk10, t) :
        "#jsssc" == t ? indexObj.ajaxJsssc(e, lotCode.pk10, t) :
        "#jstjssc" == t ? indexObj.ajaxJstjssc(e, lotCode.pk10, t) :
        "#jsxjssc" == t ? indexObj.ajaxJsxjssc(e, lotCode.pk10, t) :
        "#gflhc" == t ? indexObj.ajaxGflhc(e, lotCode.pk10, t) :
        "#jslhc" == t ? indexObj.ajaxJslhc(e, lotCode.pk10, t) :
        "#cqSsc" == t ? indexObj.ajaxSsc(e, lotCode.cqssc, t) :
        "#tjSsc" == t ? indexObj.ajaxSsc(e, lotCode.tjssc, t) :
        "#xjSsc" == t ? indexObj.ajaxSsc(e, lotCode.xjssc, t) :
        "#gdklsf" == t ? indexObj.ajaxKlsf(e, lotCode.gdklsf, t) :
        "#kuai3" == t ? indexObj.ajaxKuai3(e, lotCode.jsksan, t) :
        "#shiyix5_sd" == t ? indexObj.shiyix5(e, lotCode.sdsyydj, t) :
        "#shiyix5_gd" == t && indexObj.shiyix5(e, lotCode.gdsyxw, t)

}

function typeOf(e, t) {
    if ("rank" == e) switch (1 * t) {
        case 1:
            return "冠军";
        case 2:
            return "亚军";
        case 3:
            return "第三名";
        case 4:
            return "第四名";
        case 5:
            return "第五名";
        case 6:
            return "第六名";
        case 7:
            return "第七名";
        case 8:
            return "第八名";
        case 9:
            return "第九名";
        case 10:
            return "第十名";
        case 11:
            return "冠亚和"
    } else if ("state" == e) switch (1 * t) {
        case 1:
            return "单双";
        case 2:
            return "大小";
        case 3:
            return "龙虎"
    } else if ("san" == e) switch (1 * t) {
        case 0:
            return "杂六";
        case 1:
            return "半顺";
        case 2:
            return "顺子";
        case 3:
            return "对子";
        case 4:
            return "豹子"
    } else if ("seafood" == e) switch (1 * t) {
        case 1:
            return "鱼";
        case 2:
            return "虾";
        case 3:
            return "葫芦";
        case 4:
            return "金钱";
        case 5:
            return "蟹";
        case 6:
            return "鸡"
    } else if ("Indxh" == e) switch (1 * t) {
        case 0:
            return "大";
        case 1:
            return "小";
        case 2:
            return "和"
    }
}
//类型转换-幸运20游戏
function xy20_typeOf(type, num) {
    if (type == "state") {
        switch (num * 1) {
            case 0:
                return "总和大小";
                break;
            case 1:
                return "总和单双";
                break;
            case 2:
                return "总和大小单双";
                break;
            case 3:
                return "前后和";
                break;
            case 4:
                return "单双和";
                break;
            case 5:
                return "五行";
                break;
        }
    } else if (type == "dxh") {
        //-1小、0和、1大
        switch (num * 1) {
            case -1:
                return "小";
                break;
            case 0:
                return "和";
                break;
            case 1:
                return "大";
                break;
        }
    } else if (type == "dsh") {
        //-1小、0和、1大
        switch (num * 1) {
            case -1:
                return "双";
                break;
            case 0:
                return "和";
                break;
            case 1:
                return "单";
                break;
        }
    } else if (type == "qhh") {
        //-1后多、0前后和、1前多
        switch (num * 1) {
            case -1:
                return "后多";
                break;
            case 0:
                return "前后和";
                break;
            case 1:
                return "前多";
                break;
        }
    } else if (type == "dsd") {
        // -1双多、0单双和、1单多
        switch (num * 1) {
            case -1:
                return "双多";
                break;
            case 0:
                return "单双和";
                break;
            case 1:
                return "单多";
                break;
        }
    } else if (type == "zhzh") {
        // 1:总大单，2:总大双，3:总小单，4:总小双 5:总和
        switch (num * 1) {
            case 1:
                return "总大单";
                break;
            case 2:
                return "总大双";
                break;
            case 3:
                return "总小单";
                break;
            case 4:
                return "总小双";
                break;
            case 5:
                return "总和";
                break;
        }
    } else if (type == "wuxing") {
        // 1-5对应金木水火土
        switch (num * 1) {
            case 1:
                return "金";
                break;
            case 2:
                return "木";
                break;
            case 3:
                return "水";
                break;
            case 4:
                return "火";
                break;
            case 5:
                return "土";
                break;
        }
    }
}
$(function() {
    $("#user_adv").load("user_adv.html",
            function() {
                config.ifdebug && console.log("request is over!")
            }),
        "index" == $("#ifindex").val() && ($("#headdivbox").load("../../public/head.php",
            function() {
                config.ifdebug && console.log("request is over!"),
                    $(".lfetmenuhid").stop().animate({
                            top: "50px",
                            height: "470px"
                        },
                        "200"),
                    setTimeout(function() {
                            $("#lfetmenu1").addClass("lfetmenu1shadow")
                        },
                        500)
            }), $("#fooderbox").load("../../public/fooder.html",
            function() {
                config.ifdebug && console.log("request is over!")
            })),
        // ajaxRequst("", "#pk10"),
        // ajaxRequst("", "#cqSsc"),
        // ajaxRequst("", "#tjSsc"),
        // ajaxRequst("", "#xjSsc"),
        // ajaxRequst("", "#gdklsf"),
        // ajaxRequst("", "#shiyix5_sd"),
        // ajaxRequst("", "#shiyix5_gd"),
        // ajaxRequst("", "#kuai3"),
        // ajaxRequst("", "#jssc"),
        // ajaxRequst("", "#jsft"),
        // ajaxRequst("", "#xyft"),
        // ajaxRequst("", "#jsssc"),
        //ajaxRequst("", "#gflhc"),
        ajaxRequst("", "#jslhc"),
        // ajaxRequst("", "#jstjssc"),
        // ajaxRequst("", "#jsxjssc"),
        ajaxRequst("", "#lhc"),

        indexObj.loadBannerNews(),
        indexObj.loadFangAanNews(),
        $("#gotop").click(function() {
            return $("body,html").animate({
                        scrollTop: 0
                    },
                    500),
                $(this).hide(), !1
        }),
        $(document).scroll(function() {
            $(this).scrollTop() > 10 ? $("#gotop").show() : $("#gotop").hide()
        })
});
var publicUrl = config.publicUrl,
    JisuUrl = JisuUrl,
    imgUrl = config.imgUrl,
    indexObj = new Object,
    indextools = {};
indexObj.ajaxpk10 = function(e, t, n) {
        var e = void 0 == e ? "" : e,
            a = !1;
        $.ajax({
            url: JisuUrl + "?reqtype=jspk10",
            type: "GET",
            data: {
                lotCode: t
            },
            timeout: 6e4,
            beforeSend: function() {
                void 0 == animateID[n] && animateMethod.pk10OpenAnimate(n)
            },
            success: function(a) {
                try {
                    indexObj.pk10Data(a, t, n),
                        clearInterval(animateID[n]),
                        delete animateID[n]
                } catch (t) {
                    indextools.repeatAjax(e, n)
                }
            },
            error: function(t) {
                indextools.repeatAjax(e, n),
                    a = !0
            },
            complete: function(t, r) {
                (a = !1) || "timeout" == r && setTimeout(function() {
                        ajaxRequst(e, n)
                    },
                    "5000")
            }
        })
    },
    indexObj.ajaxSsc = function(e, t, n) {
        var e = void 0 == e ? "" : e,
            a = !1;
        $.ajax({
            url: JisuUrl + "?reqtype=jscq",
            type: "GET",
            data: {
                lotCode: t
            },
            timeout: 6e4,
            beforeSend: function() {
                void 0 == animateID[n] && animateMethod.sscAnimate(n)
            },
            success: function(a) {
                try {
                    indexObj.sscData(a, t, n),
                        clearInterval(animateID[n]),
                        delete animateID[n]
                } catch (t) {
                    indextools.repeatAjax(e, n)
                }
            },
            error: function(t) {
                indextools.repeatAjax(e, n),
                    a = !0
            },
            complete: function(t, r) {
                (a = !1) || "timeout" == r && setTimeout(function() {
                        ajaxRequst(e, n)
                    },
                    "5000")
            }
        })
    },
    indexObj.ajaxKlsf = function(e, t, n) {
        var e = void 0 == e ? "" : e,
            a = !1;
        $.ajax({
            url: publicUrl + "klsf/getLotteryInfo.do?issue=" + e,
            type: "GET",
            data: {
                lotCode: t
            },
            timeout: 6e4,
            beforeSend: function() {
                void 0 == animateID[n] && animateMethod.sscAnimate(n)
            },
            success: function(a) {
                try {
                    indexObj.klsfData(a, t, n),
                        clearInterval(animateID[n]),
                        delete animateID[n]
                } catch (t) {
                    indextools.repeatAjax(e, n)
                }
            },
            error: function(t) {
                indextools.repeatAjax(e, n),
                    a = !0
            },
            complete: function(t, r) {
                (a = !1) || "timeout" == r && indextools.repeatAjax(e, n)
            }
        })
    },
    indexObj.ajaxCqnc = function(e, t, n) {
        var e = void 0 == e ? "" : e,
            a = !1;
        $.ajax({
            url: publicUrl + "klsf/getLotteryInfo.do?issue=" + e,
            type: "GET",
            data: {
                lotCode: t
            },
            timeout: 6e4,
            beforeSend: function() {
                void 0 == animateID[n] && animateMethod.cqncAnimate(n)
            },
            success: function(t) {
                try {
                    indexObj.cqncData(t, n),
                        clearInterval(animateID[n]),
                        delete animateID[n]
                } catch (t) {
                    indextools.repeatAjax(e, n)
                }
            },
            error: function(t) {
                indextools.repeatAjax(e, n),
                    a = !0
            },
            complete: function(t, r) {
                (a = !1) || "timeout" == r && indextools.repeatAjax(e, n)
            }
        })
    },
    indexObj.ajaxKuai3 = function(e, t, n) {
        e = void 0 == e ? "" : e,
            $.ajax({
                url: publicUrl + "lotteryJSFastThree/getBaseJSFastThree.do?issue=" + e,
                type: "GET",
                data: {
                    lotCode: t
                },
                timeout: 6e4,
                beforeSend: function() {
                    void 0 == animateID[n] && animateMethod.kuai3Animate(n)
                },
                success: function(a) {
                    try {
                        indexObj.kuai3Data(a, t, n),
                            clearInterval(animateID[n]),
                            delete animateID[n]
                    } catch (t) {
                        indextools.repeatAjax(e, n)
                    }
                },
                error: function(t) {
                    indextools.repeatAjax(e, n),
                        iferror = !0
                },
                complete: function(t, a) {
                    iferror = !1,
                        iferror || "timeout" == a && indextools.repeatAjax(e, n)
                }
            })
    },
    indexObj.shiyix5 = function(e, t, n) {
        var e = void 0 == e ? "" : e,
            a = !1;
        $.ajax({
            url: publicUrl + "ElevenFive/getElevenFiveInfo.do?issue=" + e,
            type: "GET",
            data: {
                lotCode: t
            },
            timeout: 6e4,
            beforeSend: function() {
                void 0 == animateID[n] && animateMethod.sscAnimate(n)
            },
            success: function(a) {
                try {
                    indexObj.shiyix5Data(a, t, n),
                        clearInterval(animateID[n]),
                        delete animateID[n]
                } catch (t) {
                    indextools.repeatAjax(e, n)
                }
            },
            error: function(t) {
                indextools.repeatAjax(e, n),
                    a = !0
            },
            complete: function(t, r) {
                (a = !1) || "timeout" == r && indextools.repeatAjax(e, n)
            }
        })
    },
    indexObj.ajaxJssc = function(e, t, n) {
        var e = void 0 == e ? "" : e,
            a = !1;
        $.ajax({
            url: JisuUrl + "?reqtype=jssc",
            type: "GET",
            timeout: 6e4,
            beforeSend: function() {
                void 0 == animateID[n] && animateMethod.pk10OpenAnimate(n)
            },
            success: function(a) {
                try {
                    indexObj.JsScftData(a, t, n),
                        clearInterval(animateID[n]),
                        delete animateID[n]
                } catch (t) {
                    indextools.repeatAjax(e, n)
                }
            },
            error: function(t) {
                indextools.repeatAjax(e, n),
                    a = !0
            },
            complete: function(t, r) {
                (a = !1) || "timeout" == r && setTimeout(function() {
                        ajaxRequst(e, n)
                    },
                    "5000")
            }
        })
    },
    indexObj.ajaxJsft = function(e, t, n) {
        var e = void 0 == e ? "" : e,
            a = !1;
        $.ajax({
            url: JisuUrl + "?reqtype=jsft",
            type: "GET",
            timeout: 6e4,
            beforeSend: function() {
                void 0 == animateID[n] && animateMethod.pk10OpenAnimate(n)
            },
            success: function(a) {
                try {
                    indexObj.JsScftData(a, t, n),
                        clearInterval(animateID[n]),
                        delete animateID[n]
                } catch (t) {
                    indextools.repeatAjax(e, n)
                }
            },
            error: function(t) {
                indextools.repeatAjax(e, n),
                    a = !0
            },
            complete: function(t, r) {
                (a = !1) || "timeout" == r && setTimeout(function() {
                        ajaxRequst(e, n)
                    },
                    "5000")
            }
        })
    },
    indexObj.ajaxXyft = function(e, t, n) {
        var e = void 0 == e ? "" : e,
            a = !1;
        $.ajax({
            url: JisuUrl + "?reqtype=xyft",
            type: "GET",
            timeout: 6e4,
            beforeSend: function() {
                void 0 == animateID[n] && animateMethod.pk10OpenAnimate(n)
            },
            success: function(a) {
                try {
                    indexObj.JsScftData(a, t, n),
                        clearInterval(animateID[n]),
                        delete animateID[n]
                } catch (t) {
                    indextools.repeatAjax(e, n)
                }
            },
            error: function(t) {
                indextools.repeatAjax(e, n),
                    a = !0
            },
            complete: function(t, r) {
                (a = !1) || "timeout" == r && setTimeout(function() {
                        ajaxRequst(e, n)
                    },
                    "5000")
            }
        })
    },
    indexObj.ajaxJsssc = function(e, t, n) {
        var e = void 0 == e ? "" : e,
            a = !1;
        $.ajax({
            url: JisuUrl + "?reqtype=jsssc",
            type: "GET",
            timeout: 6e4,
            beforeSend: function() {
                void 0 == animateID[n] && animateMethod.sscAnimate(n)
            },
            success: function(a) {
                try {
                    indexObj.sscData(a, t, n),
                        clearInterval(animateID[n]),
                        delete animateID[n]
                } catch (t) {
                    indextools.repeatAjax(e, n)
                }
            },
            error: function(t) {
                indextools.repeatAjax(e, n),
                    a = !0
            },
            complete: function(t, r) {
                (a = !1) || "timeout" == r && setTimeout(function() {
                        ajaxRequst(e, n)
                    },
                    "5000")
            }
        })
    },

    indexObj.ajaxJsxjssc = function(e, t, n) {
        var e = void 0 == e ? "" : e,
            a = !1;
        $.ajax({
            url: JisuUrl + "?reqtype=jsxjssc",
            type: "GET",
            timeout: 6e4,
            beforeSend: function() {
                void 0 == animateID[n] && animateMethod.sscAnimate(n)
            },
            success: function(a) {
                try {
                    indexObj.sscData(a, t, n),
                        clearInterval(animateID[n]),
                        delete animateID[n]
                } catch (t) {
                    indextools.repeatAjax(e, n)
                }
            },
            error: function(t) {
                indextools.repeatAjax(e, n),
                    a = !0
            },
            complete: function(t, r) {
                (a = !1) || "timeout" == r && setTimeout(function() {
                        ajaxRequst(e, n)
                    },
                    "5000")
            }
        })
    },

    indexObj.ajaxJstjssc = function(e, t, n) {
        var e = void 0 == e ? "" : e,
            a = !1;
        $.ajax({
            url: JisuUrl + "?reqtype=jstjssc",
            type: "GET",
            timeout: 6e4,
            beforeSend: function() {
                void 0 == animateID[n] && animateMethod.sscAnimate(n)
            },
            success: function(a) {
                try {
                    indexObj.sscData(a, t, n),
                        clearInterval(animateID[n]),
                        delete animateID[n]
                } catch (t) {
                    indextools.repeatAjax(e, n)
                }
            },
            error: function(t) {
                indextools.repeatAjax(e, n),
                    a = !0
            },
            complete: function(t, r) {
                (a = !1) || "timeout" == r && setTimeout(function() {
                        ajaxRequst(e, n)
                    },
                    "5000")
            }
        })
    },
    indexObj.ajaxJslhc = function(e, t, n) {
        var e = void 0 == e ? "" : e,
            a = !1;
        $.ajax({
            url: JisuUrl + "?reqtype=jslhc",
            type: "GET",
            timeout: 6e4,
            beforeSend: function() {
                void 0 == animateID[n] && animateMethod.JsLhcAnimate(n)
            },
            success: function(a) {
                try {
                    indexObj.JsLhcData(a, t, n),
                        clearInterval(animateID[n]),
                        delete animateID[n]
                } catch (t) {
                    setTimeout(function() {
                        indextools.repeatAjax30(e, n)
                    }, 5000);
                }
            },
            error: function(t) {
                indextools.repeatAjax30(e, n),
                    a = !0
            },
            complete: function(t, r) {
                (a = !1) || "timeout" == r && setTimeout(function() {
                        ajaxRequst(e, n)
                    },
                    "5000")
            }
        })
    },
    indexObj.ajaxGflhc = function(e, t, n) {
        var e = void 0 == e ? "" : e,
            a = !1;
        $.ajax({
            url: JisuUrl + "?reqtype=gflhc",
            type: "GET",
            timeout: 6e4,
            beforeSend: function() {
                void 0 == animateID[n] && animateMethod.LhcAnimate(n)
            },
            success: function(a) {
                try {
                    indexObj.LhcData(a, t, n),
                        clearInterval(animateID[n]),
                        delete animateID[n]
                } catch (t) {
                    setTimeout(function() {
                        indextools.repeatAjax(e, n)
                    }, 5000);
                }
            },
            error: function(t) {
                indextools.repeatAjax(e, n),
                    a = !0
            },
            complete: function(t, r) {
                (a = !1) || "timeout" == r && setTimeout(function() {
                        ajaxRequst(e, n)
                    },
                    "5000")
            }
        })
    },

    indexObj.ajaxLhc = function(e, t, n) {
        var e = void 0 == e ? "" : e,
            a = !1;
        $.ajax({
            url: JisuUrl + "?reqtype=gflhc",
            type: "GET",
            timeout: 6e4,
            beforeSend: function() {
                void 0 == animateID[n] && animateMethod.LhcAnimate(n)
            },
            success: function(a) {
                try {
                    indexObj.LhcData(a, t, n),
                        clearInterval(animateID[n]),
                        delete animateID[n]
                } catch (t) {
                    indextools.repeatAjax30(e, n)
                }
            },
            error: function(t) {
                indextools.repeatAjax30(e, n),
                    a = !0
            },
            complete: function(t, r) {
                (a = !1) || "timeout" == r && setTimeout(function() {
                        ajaxRequst(e, n)
                    },
                    "5000")
            }
        })
    },


    indexObj.ajaxXjpLhc = function(type, gid, id) {
        var type = void 0 == type ? "" : type,
            a = !1;
        $.ajax({
            url: JisuUrl + "?reqtype=selflhc|" + gid,
            type: "GET",
            timeout: 6e4,
            beforeSend: function() {
                void 0 == animateID[id] && animateMethod.LhcAnimate(id)
            },
            success: function(a) {
                try {
                    indexObj.LhcData(a, gid, id),
                        clearInterval(animateID[id]),
                        delete animateID[id]
                } catch (t) {
                    indextools.repeatAjaxSelf(type, gid, id)
                }
            },
            error: function(t) {
                indextools.repeatAjaxSelf(type, gid, id),
                    a = !0
            },
            complete: function(t, r) {
                (a = !1) || "timeout" == r && setTimeout(function() {
                        indexObj.repeatAjaxSelf(type, gid, id);
                    },
                    "5000")
            }
        })
    },

    indexObj.pk10Data = function(e, t, n) {
        var a = tools.parseObj(e);
        if ("100002" == a.result.businessCode) throw new Error("error");
        if (a = a.result.data, tools.operatorTime("" == a.drawTime ? "0" : a.drawTime, a.serverTime) <= 0) throw new Error("error");
        $(n).find(".opentyle").hide(),
            $(n).find(".cuttime").css({
                display: "inline-block"
            });
        var r = a.totalCount;
        $(n).find(".drawCount").text(a.drawCount),
            $(n).find(".sdrawCountnext").text(r - 1 * a.drawCount);
        $(n).find(".nextIssue").text();
        $(n).find(".nextIssue").text(a.drawIssue),
            $(n).find(".preDrawIssue").text(a.preDrawIssue),
            $("#drawCount1").text(a.drawCount),
            $("#sdrawCount1").text(r - 1 * a.drawCount);
        for (var o = "",
                i = 0,
                s = $(".longhu").find("td").length; i < s; i++) switch (i) {
            case 0:
                o += "<td>" + ("0" == a.firstDT ? "龙" : "虎") + "</td>";
                break;
            case 1:
                o += "<td>" + ("0" == a.secondDT ? "龙" : "虎") + "</td>";
                break;
            case 2:
                o += "<td>" + ("0" == a.thirdDT ? "龙" : "虎") + "</td>";
                break;
            case 3:
                o += "<td>" + ("0" == a.fourthDT ? "龙" : "虎") + "</td>";
                break;
            case 4:
                o += "<td>" + ("0" == a.fifthDT ? "龙" : "虎") + "</td>";
                break;
            case 5:
                o += "<td>" + a.sumFS + "</td>";
                break;
            case 6:
                o += "<td>" + ("0" == a.sumBigSamll ? "大" : "小") + "</td>";
                break;
            case 7:
                o += "<td>" + ("0" == a.sumSingleDouble ? "单" : "双") + "</td>"
        }
        $(".longhu").html(""),
            $(".longhu").append(o);
        var d = a.preDrawCode.split(",");
        tools.countDown(a.drawTime, a.serverTime, n),
            animateMethod.pk10end(d, n)
    },
    indexObj.sscData = function(e, t, n) {
        var a = tools.parseObj(e);
        if ("100002" == a.result.businessCode) throw new Error("error");
        if (a = a.result.data, tools.operatorTime("" == a.drawTime ? "0" : a.drawTime, a.serverTime) <= 0) throw new Error("error");
        var r = a.totalCount;
        $(n).find(".preDrawIssue").text(a.preDrawIssue),
            $(n).find(".nextIssue").text(a.drawIssue),
            $(n).find(".drawCount").text(a.drawCount),
            $(n).find(".sdrawCountnext").text(1 * r - 1 * a.drawCount),
            $(n).find(".sumNum").text(a.sumNum),
            $(n).find(".sumSingleDouble").text(0 == a.sumSingleDouble ? "单" : "双"),
            $(n).find(".sumBigSmall").text(0 == a.sumBigSmall ? "大" : "小");
        var o = "";
        "0" == a.dragonTiger ? o = "龙" : "1" == a.dragonTiger ? o = "虎" : "2" == a.dragonTiger && (o = "和"),
            $(n).find(".dragonTiger").text(o),
            $(n).find(".behindThree").text(typeOf("san", a.behindThree)),
            $(n).find(".betweenThree").text(typeOf("san", a.betweenThree)),
            $(n).find(".lastThree").text(typeOf("san", a.lastThree)),
            animateMethod.sscAnimateEnd(a.preDrawCode, n),
            tools.countDown(a.drawTime, a.serverTime, n)
    },
    indexObj.shiyix5Data = function(e, t, n) {
        var a = tools.parseObj(e);
        if ("100002" == a.result.businessCode) throw new Error("error");
        if (a = a.result.data, tools.operatorTime("" == a.drawTime ? "0" : a.drawTime, a.serverTime) <= 0) throw new Error("error");
        var r = a.totalCount;
        $(n).find(".preDrawIssue").text(a.preDrawIssue),
            $(n).find(".nextIssue").text(a.drawIssue),
            $(n).find(".drawCount").text(a.drawCount),
            $(n).find(".sdrawCountnext").text(1 * r - 1 * a.drawCount),
            $(n).find(".sumNum").text(a.sumNum),
            $(n).find(".sumSingleDouble").text(0 == a.sumSingleDouble ? "单" : "双"),
            $(n).find(".sumBigSmall").text(typeOf("Indxh", a.sumBigSmall));
        "0" == a.dragonTiger || ("1" == a.dragonTiger || a.dragonTiger),
            $(n).find(".behindThree").text(typeOf("san", a.behindThree)),
            $(n).find(".betweenThree").text(typeOf("san", a.betweenThree)),
            $(n).find(".lastThree").text(typeOf("san", a.lastThree));
        $(n).find(".nextIssue").text();
        animateMethod.sscAnimateEnd(a.preDrawCode, n),
            tools.countDown(a.drawTime, a.serverTime, n)
    },
    indexObj.kuai3Data = function(e, t, n) {
        var a = tools.parseObj(e);
        if ("100002" == a.result.businessCode) throw new Error("error");
        if (a = a.result.data, tools.operatorTime("" == a.drawTime ? "0" : a.drawTime, a.serverTime) <= 0) throw new Error("error");
        var r = a.totalCount;
        $(n).find(".preDrawIssue").text(a.preDrawIssue),
            $(n).find(".nextIssue").text(a.drawIssue),
            $(n).find(".sumNum").text(a.sumNum),
            $(n).find(".sumSingleDouble").text(0 == a.sumSingleDouble ? "单" : "双"),
            $(n).find(".sumBigSmall").text(0 == a.sumBigSmall ? "大" : "小"),
            $(n).find(".firstSeafood").text(typeOf("seafood", a.firstSeafood)),
            $(n).find(".secondSeafood").text(typeOf("seafood", a.secondSeafood)),
            $(n).find(".thirdSeafood").text(typeOf("seafood", a.thirdSeafood)),
            $(n).find(".drawCount").text(a.drawCount),
            $(n).find(".sdrawCount").text(r - 1 * a.drawCount);
        $(n).find(".dragonTiger").text(""),
            animateMethod.kuai3AnimateEnd(a.preDrawCode, n),
            tools.countDown(a.drawTime, a.serverTime, n)
    },
    indexObj.klsfData = function(e, t, n) {
        var a = tools.parseObj(e);
        if ("100002" == a.result.businessCode) throw new Error("error");
        if (a = a.result.data, tools.operatorTime("" == a.drawTime ? "0" : a.drawTime, a.serverTime) <= 0) throw new Error("error");
        var r = a.totalCount;
        $(n).find(".preDrawIssue").text(a.preDrawIssue),
            $(n).find(".nextIssue").text(a.drawIssue),
            $(n).find(".drawCount").text(a.drawCount),
            $(n).find(".sdrawCountnext").text(1 * r - 1 * a.drawCount),
            $(n).find(".sumNum").text(a.sumNum),
            $(n).find(".sumSingleDouble").text(0 == a.sumSingleDouble ? "单" : "双"),
            $(n).find(".sumBigSmall").text(typeOf("Indxh", a.sumBigSmall)),
            $(n).find(".lastBigSmall").text(0 == a.lastBigSmall ? "尾大" : "尾小");
        "0" == a.dragonTiger || ("1" == a.dragonTiger || a.dragonTiger),
            $(n).find(".firstDragonTiger").text(0 == a.firstDragonTiger ? "龙" : "虎"),
            $(n).find(".secondDragonTiger").text(0 == a.secondDragonTiger ? "龙" : "虎"),
            $(n).find(".thirdDragonTiger").text(0 == a.thirdDragonTiger ? "龙" : "虎"),
            $(n).find(".fourthDragonTiger").text(0 == a.fourthDragonTiger ? "龙" : "虎"),
            $(n).find(".numblue").each(function() {
                $(this).text() >= 19 && $(this).addClass("numred")
            }),
            animateMethod.sscAnimateEnd(a.preDrawCode, n),
            tools.countDown(a.drawTime, a.serverTime, n)
    },
    indexObj.cqncData = function(e, t) {
        var n = tools.parseObj(e);
        if ("100002" == n.result.businessCode) throw new Error("error");
        if (n = n.result.data, tools.operatorTime("" == n.drawTime ? "0" : n.drawTime, n.serverTime) <= 0) throw new Error("error");
        $(t).find(".preDrawIssue").text(n.preDrawIssue),
            $(t).find(".nextIssue").text(n.drawIssue),
            $(t).find(".drawCount").text(n.drawCount),
            $(t).find(".sdrawCountnext").text(84 - 1 * n.drawCount),
            $(t).find(".sumNum").text(n.sumNum),
            $(t).find(".sumSingleDouble").text(0 == n.sumSingleDouble ? "单" : "双"),
            $(t).find(".sumBigSmall").text(0 == n.sumBigSmall ? "大" : "小"),
            $(t).find(".lastBigSmall").text(0 == n.lastBigSmall ? "尾大" : "尾小");
        "0" == n.dragonTiger || ("1" == n.dragonTiger || n.dragonTiger),
            $(t).find(".firstDragonTiger").text(0 == n.firstDragonTiger ? "龙" : "虎"),
            $(t).find(".secondDragonTiger").text(0 == n.secondDragonTiger ? "龙" : "虎"),
            $(t).find(".thirdDragonTiger").text(0 == n.thirdDragonTiger ? "龙" : "虎"),
            $(t).find(".fourthDragonTiger").text(0 == n.fourthDragonTiger ? "龙" : "虎"),
            clearInterval(animateID[t]),
            animateMethod.cqncAnimateEnd(n.preDrawCode, t),
            tools.countDown(n.drawTime, n.serverTime, $(t)),
            $(t).find(".opentyle").hide(),
            $(t).find(".cuttime").css({
                display: "inline-block"
            })
    },

    indexObj.JsScftData = function(e, t, n) {
        var a = tools.parseObj(e);
        if ("100002" == a.result.businessCode) throw new Error("error");
        if (a = a.result.data, tools.operatorTime("" == a.drawTime ? "0" : a.drawTime, a.serverTime) <= 0) throw new Error("error");
        $(n).find(".opentyle").hide(),
            $(n).find(".cuttime").css({
                display: "inline-block"
            });
        var r = a.totalCount;
        $(n).find(".drawCount").text(a.drawCount),
            $(n).find(".sdrawCountnext").text(r - 1 * a.drawCount);
        $(n).find(".nextIssue").text();
        $(n).find(".nextIssue").text(a.drawIssue),
            $(n).find(".preDrawIssue").text(a.preDrawIssue),
            $("#drawCount1").text(a.drawCount),
            $("#sdrawCount1").text(r - 1 * a.drawCount);
        for (var o = "",
                i = 0,
                s = $(n).find(".longhu_js").find("td").length; i < s; i++) switch (i) {
            case 0:
                o += "<td>" + ("0" == a.firstDT ? "龙" : "虎") + "</td>";
                break;
            case 1:
                o += "<td>" + ("0" == a.secondDT ? "龙" : "虎") + "</td>";
                break;
            case 2:
                o += "<td>" + ("0" == a.thirdDT ? "龙" : "虎") + "</td>";
                break;
            case 3:
                o += "<td>" + ("0" == a.fourthDT ? "龙" : "虎") + "</td>";
                break;
            case 4:
                o += "<td>" + ("0" == a.fifthDT ? "龙" : "虎") + "</td>";
                break;
            case 5:
                o += "<td>" + a.sumFS + "</td>";
                break;
            case 6:
                o += "<td>" + ("0" == a.sumBigSamll ? "大" : "小") + "</td>";
                break;
            case 7:
                o += "<td>" + ("0" == a.sumSingleDouble ? "单" : "双") + "</td>"
        }
        $(n).find(".longhu_js").html(""),
            $(n).find(".longhu_js").append(o);
        var d = a.preDrawCode.split(",");
        tools.countDown(a.drawTime, a.serverTime, n),
            animateMethod.pk10end(d, n)
    },

    indexObj.JsLhcData = function(e, t, n) {
        lhcNums = 0;
        var a = tools.parseObj(e);
        if ("100002" == a.result.businessCode) throw new Error("error");
        if (a = a.result.data, tools.operatorTime("" == a.drawTime ? "0" : a.drawTime, a.serverTime) <= 0) throw new Error("error");
        var r = a.totalCount;
        $(n).find(".preDrawIssue").text(a.preDrawIssue),
            $(n).find(".nextIssue").text(a.drawIssue),
            $(n).find(".drawCount").text(a.drawCount),
            $(n).find(".sdrawCountnext").text(1 * r - 1 * a.drawCount),

            codes = a.preDrawCode.split(",");
        colors = a.color.split(",");
        Zodiac = a.chineseZodiac.split(",");
        var e = $(n).find(".kajianhao");
        var sx = $(n).find(".kajiansx");
        $(e).find("li").removeClass("lhcred lhcgreen lhcblue");
        var regPos = /^\d+(\.\d+)?$/;

        for (var i = 0, t = codes.length; i < t; i++) {
            if (codes[i] != '' && regPos.test(codes[i]) && parseInt(codes[i]) >= 1 && parseInt(codes[i]) <= 49) {
                lhcNums++;
            }
            $(e).find("li").eq(i).css({
                paddingTop: "0px"
            });
            var qsindex = i;
            if (i == 6) {
                $(e).find("li").eq(7).text(codes[6]);
                $(e).find("li").eq(6).text('+');
                $(e).find("li").eq(6).stop().animate({
                    lineHeight: "36px"
                }, r)
                qsindex++;
            }
            $(e).find("li").eq(qsindex).text(codes[i]);
            $(sx).find("li").eq(qsindex).text(indexObj.sxdzb(Zodiac[i]));
            if (colors[i] == 1)
                $(e).find("li").eq(qsindex).addClass("lhcred");
            if (colors[i] == 2)
                $(e).find("li").eq(qsindex).addClass("lhcgreen");
            if (colors[i] == 3)
                $(e).find("li").eq(qsindex).addClass("lhcblue");

            var r = 50 * excutenum();
            $(e).find("li").eq(qsindex).stop().animate({
                lineHeight: "36px",
                paddingTop: "0px"
            }, r)
        }
        if (lhcNums < 7) {
            $("#JslhcNums").val(lhcNums);
            throw new Error("error");
        } else {
            tools.countDown(a.drawTime, a.serverTime, n);
        }
    },
    indexObj.LhcData = function(e, t, n) {
        lhcNums = 0;
        var a = tools.parseObj(e);
        if ("100002" == a.result.businessCode) throw new Error("error");
        if (a = a.result.data, tools.operatorTime("" == a.drawTime ? "0" : a.drawTime, a.serverTime) <= 0) throw new Error("error");
        var r = a.totalCount;
        $(n).find(".preDrawIssue").text(a.preDrawIssue),
            $(n).find(".nextIssue").text(a.drawIssue),
            $(n).find(".drawCount").text(a.drawCount),
            $(n).find(".sdrawCountnext").text(1 * r - 1 * a.drawCount),


            codes = a.preDrawCode.split(",");
        colors = a.color.split(",");
        Zodiac = a.chineseZodiac.split(",");
        var e = $(n).find(".kajianhao");
        var sx = $(n).find(".kajiansx");
        $(e).find("li").removeClass("lhcred lhcgreen lhcblue");
        for (var i = 0, t = codes.length; i < t; i++) {
            if (codes[i] != '') lhcNums++;
            $(e).find("li").eq(i).css({
                paddingTop: "0px"
            });
            var qsindex = i;
            if (i == 6) {
                $(e).find("li").eq(7).text(codes[6]);
                $(e).find("li").eq(6).text('+');
                $(e).find("li").eq(6).stop().animate({
                    lineHeight: "36px"
                }, r)
                qsindex++;
            }
            $(e).find("li").eq(qsindex).text(codes[i]);
            $(sx).find("li").eq(qsindex).text(indexObj.sxdzb(Zodiac[i]));
            if (colors[i] == 1)
                $(e).find("li").eq(qsindex).addClass("lhcred");
            if (colors[i] == 2)
                $(e).find("li").eq(qsindex).addClass("lhcgreen");
            if (colors[i] == 3)
                $(e).find("li").eq(qsindex).addClass("lhcblue");

            var r = 50 * excutenum();
            $(e).find("li").eq(qsindex).stop().animate({
                lineHeight: "36px",
                paddingTop: "0px"
            }, r)
        }

        if (lhcNums < 7) {
            $("#lhcNums").val(lhcNums);
            throw new Error("error");
        } else {

            if (a.noopen == 'Y') {
                $(".lhcnoopen").show();
            } else {
                $(".lhcnoopen").hide();
            }
            tools.countDown(a.drawTime, a.serverTime, n);
        }
    },
    indexObj.sxdzb = function(no) {
        if (no == 1) {
            return "鼠"
        } else if (no == 2) {
            return "牛"
        } else if (no == 3) {
            return "虎"
        } else if (no == 4) {
            return "兔"
        } else if (no == 5) {
            return "龙"
        } else if (no == 6) {
            return "蛇"
        } else if (no == 7) {
            return "马"
        } else if (no == 8) {
            return "羊"
        } else if (no == 9) {
            return "猴"
        } else if (no == 10) {
            return "鸡"
        } else if (no == 11) {
            return "狗"
        } else if (no == 12) {
            return "猪"
        } else {
            return ""
        }

    }

indexObj.loadBannerNews = function() {

    },
    indexObj.loadFangAanNews = function() {
        /*
    $.ajax({
        url: publicUrl + "news/findProjectPrediction.do",
        type: "GET",
        dataType: "json",
        data: {
            programaId: "",
            pageNo: 1,
            pageSize: 10
        },
        timeout: 6e4,
        beforeSend: function() {
            $("#fanganyc").empty().text("正在加载...")
        },
        success: function(e) {
            if ("object" == typeof(e = e) || (e = JSON.parse(e)), "0" == e.errorCode) if ("0" == e.result.businessCode) {
                $("#fanganyc").empty();
                var t = "";
                $(e.result.data.list).each(function() {
                    t += "<li><a target='_blank' href='../../html/zixunhtml/zx_detail.html?" + this.newsId + "'>" + this.title + "</a></li>"
                }),
                $("#fanganyc").append(t)
            } else $("#fanganyc").empty().text("数据加载异常！")
        },
        error: function(e) {
            $("#bannernews").empty().text("正在加载..."),
            indexObj.loadFangAanNews()
        },
        complete: function(e, t) {
            null
        }
    })
	*/
    },
    indexObj.loadBanner = function() {
        /*
    $.ajax({
        url: publicUrl + "focusPicture/findPicture.do",
        type: "GET",
        dataType: "json",
        data: {
            type: "0",
            position: "0",
            sourceUrl: tools.YM()
        },
        timeout: 6e4,
        beforeSend: function() {
            $("#bannerContent").text("努力加载中...")
        },
        success: function(e) {
            "object" == typeof(e = e) || (e = JSON.parse(e)),
            "0" == e.errorCode && ("0" == e.result.businessCode ? tools.bannerImg(e.result.data) : $("#bannerContent").empty().text("数据加载异常！"))
        },
        error: function(e) {
            $("#bannerContent").empty().text("正在加载..."),
            setTimeout(indexObj.loadBanner(), 1e3)
        },
        complete: function(e, t) {
            null
        }
    })
	*/
    },
    indexObj.defaultViewigm = function(e) {
        $(e).attr("src", "../../img/banner/banner01.jpg"),
            $(e).parent().css({
                "background-color": "#d70042"
            })
    },
    indextools.repeatAjax = function(e, t) {
        setTimeout(function() {
                ajaxRequst(e, t)
            },
            "5000")
    },
    indextools.repeatAjax30 = function(e, t) {
        setTimeout(function() {
                ajaxRequst(e, t)
            },
            "30000")
    },
    indextools.repeatAjaxSelf = function(e, t, n) {
        setTimeout(function() {
                ajaxRequstSelf(e, t, n)
            },
            "30000")
    },
    indextools.LiText = function() {
        "block" == $(".11check5_ran").css("display") && $(".check_zhuOrXa").text($(".11check5_ran>.check_ran").text())
    };