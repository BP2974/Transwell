$(document).ready(function(){
    $(window).scroll(function(){

        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".h1_img", {
        scrollTrigger: {
            trigger: ".trigger",
            start: "top center",
            scrub: true,
        },
        scale: 0.05, duration: 5,
        });
        
        if($(window).scrollTop() > 1800)
        {
            $(".overview").children(".subject").css('position', 'sticky');
            $(".first_span").css('position', 'sticky');
            $('.first_text').addClass('active');
        } else
        {
            $(".overview").children(".subject").css('position', 'absolute');
            $(".first_span").css('position', 'absolute');
            $('.first_text').removeClass('active');
        }

        if($(window).scrollTop() > 2200)
        {
            $('.first_text').removeClass('active');
            $('.second_text').addClass('active');
        } else 
        {
            $('.second_text').removeClass('active');
        }

        if($(window).scrollTop() > 2600)
        {
            $('.third_text').addClass('active');
            $('.second_text').removeClass('active');
        } else
        {
            $('.third_text').removeClass('active');
        }

        if($(window).scrollTop()> 3000){
            $('.third_text').removeClass('active');
            $(".overview").children(".subject").css('opacity', '0');
            $(".first_span").css('opacity', '0');
            
        }else
        {
            $(".overview").children(".subject").css('opacity', '1');
            $(".first_span").css('opacity', '1');
        }
    });
});