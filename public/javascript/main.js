$(document).ready(function(){

    history.pushState({page: 1}, "http://127.0.0.1:5500/public/home.html")
    history.pushState({page: 2}, "http://127.0.0.1:5500/public/history.html")
    history.pushState({page: 3}, "http://127.0.0.1:5500/public/team.html")
    history.pushState({page: 4}, "http://127.0.0.1:5500/public/molds.html")
    history.pushState({page: 5}, "http://127.0.0.1:5500/public/applications.html")
    history.pushState({page: 6}, "http://127.0.0.1:5500/public/portfolio.html")
    history.pushState({page: 7}, "http://127.0.0.1:5500/public/careers.html")
    history.pushState({page: 8}, "http://127.0.0.1:5500/public/quote.html")
    history.pushState({page: 9}, "http://127.0.0.1:5500/public/contact.html")

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

    $(".moldsTop").click(function(){
        url = "http://127.0.0.1:5500/public/molds.html"
        window.location.replace(url)
    })

    $(".applicationsTop").click(function(){
        url = "http://127.0.0.1:5500/public/applications.html"
        window.location.replace(url)
    })

    $(".portfolioTop").click(function(){
        url = "http://127.0.0.1:5500/public/portfolio.html"
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

    //Open and close specific part modals
    $(".electrical-modal").hide()
    $(".actuator-modal").hide()
    $(".cap-modal").hide()
    $(".bracket-modal").hide()
    $(".household-modal").hide()
    $(".cap-machine-modal").hide()
    $(".metal-stamp-modal").hide()

    $(".part-cards-electrical").click(function(){
        $(".electrical-modal").show()
        $(".close-button").addClass("active")
    })
    $(".close-button").click(function(){
        $(".electrical-modal").hide()
        $(".close-button").removeClass("active")
    })

    $(".part-cards-actuator").click(function(){
        $(".actuator-modal").show()
        $(".close-button").addClass("active")
    })
    $(".close-button").click(function(){
        $(".actuator-modal").hide()
        $(".close-button").removeClass("active")
    })

    $(".part-cards-cap").click(function(){
        $(".cap-modal").show()
        $(".close-button").addClass("active")
    })
    $(".close-button").click(function(){
        $(".cap-modal").hide()
        $(".close-button").removeClass("active")
    })

    $(".part-cards-bracket").click(function(){
        $(".bracket-modal").show()
        $(".close-button").addClass("active")
    })
    $(".close-button").click(function(){
        $(".bracket-modal").hide()
        $(".close-button").removeClass("active")
    })

    $(".part-cards-household").click(function(){
        $(".household-modal").show()
        $(".close-button").addClass("active")
    })
    $(".close-button").click(function(){
        $(".household-modal").hide()
        $(".close-button").removeClass("active")
    })

    $(".cap-machine").click(function(){
        $(".cap-machine-modal").show()
        $(".close-button").addClass("active")
    })
    $(".close-button").click(function(){
        $(".cap-machine-modal").hide()
        $(".close-button").removeClass("active")
    })

    $(".metal-stamp-app").click(function(){
        $(".metal-stamp-modal").show()
        $(".close-button").addClass("active")
    })
    $(".close-button").click(function(){
        $(".metal-stamp-modal").hide()
        $(".close-button").removeClass("active")
    })
})

