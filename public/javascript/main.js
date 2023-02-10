$(document).ready(function(){

    history.pushState({page: 1}, "http://127.0.0.1:5500/public/home.html")
    history.pushState({page: 2}, "http://127.0.0.1:5500/public/history.html")
    history.pushState({page: 3}, "http://127.0.0.1:5500/public/team.html")
    history.pushState({page: 4}, "http://127.0.0.1:5500/public/five-axis.html")
    history.pushState({page: 5}, "http://127.0.0.1:5500/public/metal-print.html")
    history.pushState({page: 6}, "http://127.0.0.1:5500/public/mold_design.html")
    history.pushState({page: 7}, "http://127.0.0.1:5500/public/reverse.html")
    history.pushState({page: 8}, "http://127.0.0.1:5500/public/careers.html")
    history.pushState({page: 9}, "http://127.0.0.1:5500/public/quote.html")
    history.pushState({page: 10}, "http://127.0.0.1:5500/public/contact.html")

    $(window).load("http://127.0.0.1:5500/public/home.html")

    $(".logo-home").click(function(){
        url = "http://127.0.0.1:5500/public/home.html"
        window.location.replace(url)
    })

    $(".homeTop").click(function(){
        url = "http://127.0.0.1:5500/public/home.html"
        window.location.replace(url)
    })

    $(".historyTop").click(function(){
        url = "http://127.0.0.1:5500/public/history.html"
        window.location.replace(url)
    })

    $(".teamTop").click(function(){
        url = "http://127.0.0.1:5500/public/team.html"
        window.location.replace(url)
    })

    $(".five-axisTop").click(function(){
        url = "http://127.0.0.1:5500/public/five-axis.html"
        window.location.replace(url)
    })

    $(".three-d-printingTop").click(function(){
        url = "http://127.0.0.1:5500/public/metal-print.html"
        window.location.replace(url)
    })

    $(".moldTop").click(function(){
        url = "http://127.0.0.1:5500/public/mold_design.html"
        window.location.replace(url)
    })

    $(".engineeringTop").click(function(){
        url = "http://127.0.0.1:5500/public/reverse.html"
        window.location.replace(url)
    })

    $(".careersTop").click(function(){
        url = "http://127.0.0.1:5500/public/careers.html"
        window.location.replace(url)
    })

    $(".quoteTop").click(function(){
        url = "http://127.0.0.1:5500/public/quote.html"
        window.location.replace(url)
    })

    $(".contactTop").click(function(){
        url = "http://127.0.0.1:5500/public/contact.html"
        window.location.replace(url)
    })

    $(".small-menu").click(function(){
        if (!$(".links").hasClass("active")) {
            $(".links").addClass("active")
        } else {
            $(".links").removeClass("active")
            window.location.scrollTop()
        }
    })

    let $anchors = $(".links li")
    let $anchors2 = $(".links li ul li a")
    $(".aboutTop").click(function(){ return false })
    $(".servicesTop").click(function(){ return false })

    $($anchors).click(function(){
        $(".links").removeClass("active")
    })
    $($anchors2).click(function(){
        $(".links").removeClass("active")
    })
    $(".logo-home").click(function(){
        $(".links").removeClass("active")
    })

    // Show and hide information tables
})

