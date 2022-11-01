$(document).ready(function(){
    $(window).scroll(function(){

        /* gsap.registerPlugin(ScrollTrigger);
        gsap.to(".h1_img", {
        scrollTrigger: {
            trigger: ".trigger",
            start: "top center",
            scrub: true,
        },
        scale: 0.05, duration: 5,
        }); */
        
        console.log($(window).scrollTop())

        if($(window).scrollTop() > 200)
        {
            $('.copy_text1').css('color', '#fff');
        } else
        {
            $('.copy_text1').css('color', 'rgba(255, 255, 255, 0.4)');
        }
        if($(window).scrollTop() > 400)
        {
            $('.copy_text2').css('color', '#fff');
            $('.copy_text1').css('color', 'rgba(255, 255, 255, 0.4)');
        } else
        {
            $('.copy_text2').css('color', 'rgba(255, 255, 255, 0.4)');
        }
        if($(window).scrollTop() > 600)
        {
            $('.copy_text3').css('color', '#fff');
            $('.copy_text2').css('color', 'rgba(255, 255, 255, 0.4)');
        } else
        {
            $('.copy_text3').css('color', 'rgba(255, 255, 255, 0.4)');
        }
        if($(window).scrollTop() > 800)
        {
            $('.copy_text4>img').css('opacity', '1');
            $('.copy_text3').css('color', 'rgba(255, 255, 255, 0.4)');
        } else
        {
            $('.copy_text4>img').css('opacity', '0.4');
        }
        if($(window).scrollTop() > 1200)
        {
            $('.title_text').css('margin-top', 'calc(100vw * -800 / 1920)');
        } else
        {
            $('.title_text').css('margin-top', 'calc(100vw * 144 / 1920)');
        }
        

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

document.addEventListener("DOMContentLoaded", function(){
    // console.log("ok");
    window.onscroll = function(){
        // console.log(document.querySelector("html").scrollTop);
        if(document.querySelector("html").scrollTop > 700){
            document.querySelector("header").style.top = "-80px";
        } else {
            document.querySelector("header").style.top = "0";
        }
    }
    window.onmousemove = function(e){
        //console.log(e.clientY);
        if(e.clientY < 100){
            document.querySelector("header").style.top = "0";
        } else if(document.querySelector("html").scrollTop > 700) {
            document.querySelector("header").style.top = "-80px";
        }
         else {
            document.querySelector("header").style.top = "-80px";
        }
    }
});