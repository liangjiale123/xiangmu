/**
 * Created by Administrator on 2017/5/18.
 */
function yzm(){
    var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
    var str = '';
    for(var i = 0 ; i < 4 ; i ++ )
        str += ''+arr[Math.floor(Math.random() * arr.length)];
    return str;
}
$(function () {
    $("#left").click(function () {
        $("#zhanghaodenglu").css("display","block");
        $("#shoujidenglu").css("display","none");
        $("#right").css("color","#6a6a6a");
        $("#right").css("border-bottom","1px solid #6a6a6a");
        $("#left").css("color","#f36523");
        $("#left").css("border-bottom","1px solid #f36523");

    });
});
$(function () {
    $("#right").click(function () {
        $("#zhanghaodenglu").css("display","none");
        $("#left").css("color","#6a6a6a");
        $("#left").css("border-bottom","1px solid #6a6a6a");
        $("#right").css("color","#f36523");
        $("#right").css("border-bottom","1px solid #f36523");
        $("#shoujidenglu").css("display","block");
    });
});

function yzm2(){
    var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
    var str = '';
    for(var i = 0 ; i < 4 ; i ++ )
        str += ''+arr[Math.floor(Math.random() * arr.length)];
    return str;
}