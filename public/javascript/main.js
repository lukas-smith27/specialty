$(document).ready(function(){

    history.pushState({page: 1}, "../public/home.html")
    history.pushState({page: 2}, "../public/history.html")
    history.pushState({page: 3}, "../public/team.html")
    history.pushState({page: 4}, "../public/five-axis.html")
    history.pushState({page: 5}, "../public/metal-print.html")
    history.pushState({page: 6}, "../public/mold_design.html")
    history.pushState({page: 7}, "../public/reverse_engineering.html")
    history.pushState({page: 8}, "../public/welding.html")
    history.pushState({page: 9}, "../public/ram.html")
    history.pushState({page: 10}, "../public/scanning.html")
    history.pushState({page: 11}, "../public/equipment.html")
    history.pushState({page: 12}, "../public/careers.html")
    history.pushState({page: 13}, "../public/quote.html")
    history.pushState({page: 14}, "../public/contact.html")

    $(window).load("../public/home.html")

    $(".logo-home").click(function(){
        url = "../public/home.html"
        window.location.replace(url)
    })

    $(".homeTop").click(function(){
        url = "../public/home.html"
        window.location.replace(url)
    })

    $(".historyTop").click(function(){
        url = "../public/history.html"
        window.location.replace(url)
    })

    $(".teamTop").click(function(){
        url = "../public/team.html"
        window.location.replace(url)
    })

    $(".five-axisTop").click(function(){
        url = "../public/five-axis.html"
        window.location.replace(url)
    })

    $(".three-d-printingTop").click(function(){
        url = "../public/metal-print.html"
        window.location.replace(url)
    })

    $(".moldTop").click(function(){
        url = "../public/mold_design.html"
        window.location.replace(url)
    })

    $(".engineeringTop").click(function(){
        url = "../public/reverse_engineering.html"
        window.location.replace(url)
    })

    $(".weldingTop").click(function(){
        url = "../public/welding.html"
        window.location.replace(url)
    })

    $(".wire-ramTop").click(function(){
        url = "../public/ram.html"
        window.location.replace(url)
    })

    $(".laserTop").click(function(){
        url = "../public/scanning.html"
        window.location.replace(url)
    })

    $(".equipmentTop").click(function(){
        url = "../public/equipment.html"
        window.location.replace(url)
    })

    $(".careersTop").click(function(){
        url = "../public/careers.html"
        window.location.replace(url)
    })

    $(".quoteTop").click(function(){
        url = "../public/quote.html"
        window.location.replace(url)
    })

    $(".contactTop").click(function(){
        url = "../public/contact.html"
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

