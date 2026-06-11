$(document).ready(function(){
    //alert("Hey");
    $(".comicdiv").hover(
        function() {
            $(this).addClass("pop-up");
        },
        function() {
            $(this).removeClass("pop-up");
        }
    );

    $(".comic-cover-wrap").click(function(){
        //alert("You clicked me");
        $(this).addClass("expanded");
    });

    $(".comic-cover-wrap").mouseleave(function(){
        $(this).removeClass("expanded");
    });
});