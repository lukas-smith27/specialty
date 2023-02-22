$(document).ready(function(){
     $(window).load("../public/home.html")

    $(".small-menu").click(function(){
        if (!$(".links").hasClass("active")) {
            $(".links").addClass("active")
        } else {
            $(".links").removeClass("active")
            window.location.scrollTop()
        }
    }) 
})

