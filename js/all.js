$(document).ready(function() {
    //打開

    $(".dropdown").click(function() {
        event.preventDefault();
        // $(this).siblings('.dropdown-open').slideDown().parent().siblings().find('.dropdown-open').slideUp();
        $(this).toggleClass("active").parent().siblings().find("a").removeClass("active");
        $(this).siblings().slideToggle(600);
        $(this).parent().siblings().find(".dropdown-open").slideUp(400);
    });

    $(".go-top a").click(function() {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: 0
        }, 700);
    });

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 50) {
            $(".go-to-top").addClass("active");
        } else {
            $(".go-to-top").removeClass("active");
        }
    });

    // lightbox效果
    lightbox.option({
        'resizeDuration': 700,
        'wrapAround': true,
    })

});