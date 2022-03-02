$(document).ready(function () {
    $("#topBtn").click(function(){
        $('html,body').stop().animate({ scrollTop: 0 });
    });
});