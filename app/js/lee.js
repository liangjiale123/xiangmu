/**
 * Created by Administrator on 2017/5/15.
 */
$(function () {
   $("#div01").click(function () {
      $("#p1").css("color","#f36621");
       $("#div01").css("border-bottom","1px solid #f36621");
       $("#p2").css("color","black");
       $("#div02").css("border-bottom","1px solid #9b9b9b");
       $("#dianying").css("display","block");
       $("#yingyuan").css("display","none");
   });
});

$(function () {
    $("#div02").click(function () {
        $("#p2").css("color","#f36621");
        $("#div02").css("border-bottom","1px solid #f36621");
        $("#p1").css("color","black");
        $("#div01").css("border-bottom","1px solid #9b9b9b");
        $("#dianying").css("display","none");
        $("#yingyuan").css("display","block");
    });
});

$(function () {
    $("#left2").click(function () {
        $("#p3").css("color","#f36621");
        $("#p4").css("color","black");
    });
});
$(function () {
    $("#right2").click(function () {
        $("#p3").css("color","black");
        $("#p4").css("color","#f36621");
    });
});


$(function () {
   $("#qq").click(function () {
           $("#kuozhan").show();
       });
    $("#dianying").click(function () {
        $("#kuozhan").hide();
    });
    $("#yingyuan ").click(function () {
        $("#kuozhan").hide();
    });

});

//导航左侧样式
$(function () {
    $("#quyu").click(function () {
        $("#quyu").css("background","white");
        $("#ditie").css("background"," #f1f1f1");
        $("#shangquan").css("background"," #f1f1f1");
        $("#ditie").css("border-left","0");
        $("#quyu").css("border-left","5px solid #f36621");
        $("#shangquan").css("border-left","0");
        $("#c1").css("display","block");
        $("#c2").css("display","none");
        $("#c3").css("display","none");
        $("#d2").css("display","none");
        $("#d1").css("display","none");
    });
});
$(function () {
    $("#ditie").click(function () {
        $("#quyu").css("background","#f1f1f1");
        $("#ditie").css("background","white");
        $("#ditie").css("border-left","5px solid #f36621");
        $("#quyu").css("border-left","0");
        $("#shangquan").css("background"," #f1f1f1");
        $("#shangquan").css("border-left","0");
        $("#c1").css("display","none");
        $("#c3").css("display","none");
        $("#c2").css("display","block");
        $("#d2").css("display","none");
        $("#d1").css("display","none");
        });
});
$(function () {
    $("#shangquan").click(function () {
        $("#ditie").css("border-left","0");
        $("#quyu").css("border-left","0");
        $("#shangquan").css("border-left","5px solid #f36621");
        $("#quyu").css("background","#f1f1f1");
        $("#ditie").css("background"," #f1f1f1  ");
        $("#shangquan").css("background","white");
        $("#c1").css("display","none");
        $("#c2").css("display","none");
        $("#c3").css("display","block");
        $("#d2").css("display","none");
        $("#d1").css("display","none");
    });
});

$(function () {
    $("#left2").click(function () {
        $("#daohang2").show();
        $("#daohang3").hide();
        $("#d2").hide();
        $("#d1").hide();
    })
});

$(function () {
    $("#aaa").click(function () {
        $("#daohang2").hide();
        $("#daohang3").hide();
        $("#ttt").hide();
        $("#c1").hide();
        $("#c2").hide();
        $("#c3").hide();
        $("#d1").hide();
        $("#d2").hide();
    });
});

$(function () {
    $("#right2").click(function () {
        $("#daohang2").hide();
        $("#daohang3").show();
        $("#c1").hide();
        $("#c2").hide();
        $("#c3").hide();
        $("#d1").hide();
        $("#d2").hide();
    })
});
$(function () {
    $("#texiaoqu").click(function () {
        $("#texiaoqu").css("background","white");
        $("#fuwu").css("background"," #f1f1f1");
        $("#fuwu").css("border-left","0");
        $("#texiaoqu").css("border-left","5px solid #f36621");
        $("#d1").css("display","block");
        $("#d2").css("display","none");
    })
});
$(function () {
    $("#fuwu").click(function () {
        $("#fuwu").css("background","white");
        $("#texiaoqu").css("background"," #f1f1f1");
        $("#texiaoqu").css("border-left","0");
        $("#fuwu").css("border-left","5px solid #f36621");
        $("#d2").css("display","block");
        $("#d1").css("display","none");
    })
});

$(function () {
   $("#bbb").click(function () {
       $("#daohang2").hide();
       $("#daohang3").hide();
       $("#ttt").hide();
       $("#c1").hide();
       $("#c2").hide();
       $("#c3").hide();
       $("#d1").hide();
       $("#d2").hide();
   }) ;
});
