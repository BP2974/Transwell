$(document).ready(function(){
    $(window).scroll(function(){
        
        console.log($(window).scrollTop());

        if($(window).scrollTop() > 800)
        {
            $('.title_text').css('opacity', '1');
        } else
        {
            $('.title_text').css('opacity', '0');
        }
        if($(window).scrollTop() > 1000)
        {
            $('.copy_text1').css('color', '#fff');
        } else
        {
            $('.copy_text1').css('color', 'rgba(255, 255, 255, 0.4)');
        }
        if($(window).scrollTop() > 1200)
        {
            $('.copy_text2').css('color', '#fff');
            $('.copy_text1').css('color', 'rgba(255, 255, 255, 0.4)');
        } else
        {
            $('.copy_text2').css('color', 'rgba(255, 255, 255, 0.4)');
        }
        if($(window).scrollTop() > 1400)
        {
            $('.copy_text3').css('color', '#fff');
            $('.copy_text2').css('color', 'rgba(255, 255, 255, 0.4)');
        } else
        {
            $('.copy_text3').css('color', 'rgba(255, 255, 255, 0.4)');
        }
        if($(window).scrollTop() > 1600)
        {
            $('.copy_text4>img').css('opacity', '1');
            $('.copy_text3').css('color', 'rgba(255, 255, 255, 0.4)');
        } else
        {
            $('.copy_text4>img').css('opacity', '0.4');
        }
        if($(window).scrollTop() > 1800)
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
        if(12000 > $(window).scrollTop() && $(window).scrollTop() >= 11600){
            $('.span1').addClass('middle');
        }else
        {
            $('.span1').removeClass('middle');
        }
        if($(window).scrollTop()> 12000){
            $('.span1').addClass('active');
        }else
        {
            $('.span1').removeClass('active');
        }
        
        $('.color_btn1').click(function(){
            $('.color_sub').html("밝은 햇살을 담은");
            $('.color_title').html('SUNLIGHT ORANGE');
            $('.color_detail').html('C0% M61% Y96% K0%<br/>R254 G90 B10<br/>#FE620A');
            $(this).addClass('active');
            $('.slide').addClass('slide1');
            $('.slide').removeClass('slide2 slide3 slide4');
            $('.color_btn2').removeClass('active')
            $('.color_btn3').removeClass('active')
            $('.color_btn4').removeClass('active')
            $('.color>.subtitle').removeClass('color2');
            $('.color>.subtitle').addClass('color1');
        });
        $('.color_btn2').click(function(){
            $('.color_sub').html("공항의 시원함을 담은");
            $('.color_title').html('AIRPORT BLUE');
            $('.color_detail').html('C100% M45% Y0% K9%<br/>R1 G129 B233<br/>#0181E9');
            $(this).addClass('active');
            $('.slide').addClass('slide2');
            $('.slide').removeClass('slide1 slide3 slide4');
            $('.color_btn1').removeClass('active')
            $('.color_btn3').removeClass('active')
            $('.color_btn4').removeClass('active')
            $('.color>.subtitle').removeClass('color1');
            $('.color>.subtitle').addClass('color2');
        });
        $('.color_btn3').click(function(){
            $('.color_sub').html("사이니지의 명시성");
            $('.color_title').html('EXPLICIT BLACK');
            $('.color_detail').html('C0% M0% Y0% K85%<br/>R39 G39 B39<br/>#272727');
            $(this).addClass('active');
            $('.slide').addClass('slide3');
            $('.slide').removeClass('slide1 slide2 slide4');
            $('.color_btn1').removeClass('active')
            $('.color_btn2').removeClass('active')
            $('.color_btn4').removeClass('active')
        });
        $('.color_btn4').click(function(){
            $('.color_sub').html("깔끔하고 담백한");
            $('.color_title').html('CLEAR WHITE');
            $('.color_detail').html('C0% M0% Y0% K0%<br/>R255 G255 B255<br/>#FFFFFF');
            $(this).addClass('active');
            $('.slide').addClass('slide4');
            $('.slide').removeClass('slide1 slide2 slide3');
            $('.color_btn1').removeClass('active')
            $('.color_btn2').removeClass('active')
            $('.color_btn3').removeClass('active')
        });
        
    });
});

document.addEventListener("DOMContentLoaded", function(){
    // console.log("ok");
    window.onscroll = function(){
        // console.log(document.querySelector("html").scrollTop);
        if(document.querySelector("html").scrollTop > 1200){
            document.querySelector("header").style.top = "-80px";
        } else {
            document.querySelector("header").style.top = "0";
        }
    }
    window.onmousemove = function(e){
        //console.log(e.clientY);
        if(document.querySelector("html").scrollTop > 700){
            if(e.clientY < 100){
                document.querySelector("header").style.top = "0";
            } else if(document.querySelector("html").scrollTop > 1200) {
                document.querySelector("header").style.top = "-80px";
            }
             else {
                document.querySelector("header").style.top = "-80px";
            }
        } 
    }
});