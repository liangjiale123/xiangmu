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
   });
});

$(function () {
    $("#div02").click(function () {
        $("#p2").css("color","#f36621");
        $("#div02").css("border-bottom","1px solid #f36621");
        $("#p1").css("color","black");
        $("#div01").css("border-bottom","1px solid #9b9b9b");
        $("#dianying").css("display","none");
    });
});
$(function () {
    $("#qq")[0].click(function () {
            $("#kuozhan").css("display","block");
        });
});
$(function () {
    $("#qq")[0].click(function () {
        $("#kuozhan").css("display","none");

    });
});
$(function () {
   window.onscroll=function () {
     var top =scroll().top;
       if(top>1000){
           $("#qwe").css("display","block");}
           else {
               $("#qwe").css("display","none");
           };
       };
});