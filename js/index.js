$(document).ready(function(){

    /* aos 캐쉬 */
    AOS.init({
        once: true,
    });
    $(window).on('load', function () {
        AOS.refresh();
    });


    $(document).mousemove(function(e){
        if($(window).scrollTop() > 800 * ratio1 && e.clientY < 100){
            $('header').css('top', '0')
        }
        else {
            $('header').css('top', 'calc(100vw * -80 / 1920)');
        }
    })


    $(window).scroll(function(){

        var ratio1 = 1/1920 * window.innerWidth;
        
        console.log($(window).scrollTop() * ratio1);

        if($(window).scrollTop() > 800 * ratio1)
        {
            $('header').css('top', 'calc(100vw * -80 / 1920)');
        } else
        {
            $('header').css('top', '0');
        }


        /* 타이틀 */
        if($(window).scrollTop() > 800 * ratio1)
        {
            $('.title_text').css('opacity', '1');
        } else
        {
            $('.title_text').css('opacity', '0');
        }
        if($(window).scrollTop() > 1000 * ratio1)
        {
            $('.copy_text1').css('color', '#fff');
        } else
        {
            $('.copy_text1').css('color', 'rgba(255, 255, 255, 0.4)');
        }
        if($(window).scrollTop() > 1200 * ratio1)
        {
            $('.copy_text2').css('color', '#fff');
            $('.copy_text1').css('color', 'rgba(255, 255, 255, 0.4)');
        } else
        {
            $('.copy_text2').css('color', 'rgba(255, 255, 255, 0.4)');
        }
        if($(window).scrollTop() > 1400 * ratio1)
        {
            $('.copy_text3').css('color', '#fff');
            $('.copy_text2').css('color', 'rgba(255, 255, 255, 0.4)');
        } else
        {
            $('.copy_text3').css('color', 'rgba(255, 255, 255, 0.4)');
        }
        if($(window).scrollTop() > 1600 * ratio1)
        {
            $('.copy_text4>img').css('opacity', '1');
            $('.copy_text3').css('color', 'rgba(255, 255, 255, 0.4)');
        } else
        {
            $('.copy_text4>img').css('opacity', '0.4');
        }
        if($(window).scrollTop() > 1800 * ratio1)
        {
            $('.title_text').css('margin-top', 'calc(100vw * -800 / 1920)');
        } else
        {
            $('.title_text').css('margin-top', 'calc(100vw * 144 / 1920)');
        }

        
        /* 스플래시 */
        if($(window).scrollTop() >= 17200 * ratio1){
            $('.splash_mockup_img1').addClass('active');
            $('.splash_mockup_img2').addClass('active');
            $('.splash_mockup_img4').addClass('active');
            $('.splash_mockup_img5').addClass('active');
        }else
        {
            $('.splash_mockup_img1').removeClass('active');
            $('.splash_mockup_img2').removeClass('active');
            $('.splash_mockup_img4').removeClass('active');
            $('.splash_mockup_img5').removeClass('active');
        }
        

        /* 최단 목업 */
        if(20000 * ratio1 > $(window).scrollTop() && $(window).scrollTop() >= 19300 * ratio1){
            $('.short_span.span1').addClass('middle');
        }else
        {
            $('.short_span.span1').removeClass('middle');
        }
        if($(window).scrollTop() >= 20000 * ratio1){
            $('.short_span.span1').addClass('active');
        }else
        {
            $('.short_span.span1').removeClass('active');
        }
        
        if($(window).scrollTop() >= 20300 * ratio1){
            $('.shortest_mockup.img1').css('opacity', '0');
            $('.shortest_mockup.img2').css('opacity', '1');
            $('.shortest_mockup_text.text1').css('opacity', '0');
            $('.shortest_mockup_text.text2').css('opacity', '1');
        }else
        {
            $('.shortest_mockup.img1').css('opacity', '1');
            $('.shortest_mockup.img2').css('opacity', '0');
            $('.shortest_mockup_text.text1').css('opacity', '1');
            $('.shortest_mockup_text.text2').css('opacity', '0');
        }

        if(21000 * ratio1 > $(window).scrollTop() && $(window).scrollTop() >= 20300 * ratio1){
            $('.short_span.span2').addClass('middle');
        }else
        {
            $('.short_span.span2').removeClass('middle');
        }
        if($(window).scrollTop() >= 21000 * ratio1){
            $('.short_span.span2').addClass('active');
        }else
        {
            $('.short_span.span2').removeClass('active');
        }

        if( $(window).scrollTop() >= 21300 * ratio1){
            $('.shortest_mockup.img2').css('opacity', '0');
            $('.shortest_mockup.img3').css('opacity', '1');
            $('.shortest_mockup_text.text2').css('opacity', '0');
            $('.shortest_mockup_text.text3').css('opacity', '1');
        }else
        {   
            $('.shortest_mockup.img3').css('opacity', '0');
            $('.shortest_mockup_text.text3').css('opacity', '0');
        }

        if(22000 * ratio1 > $(window).scrollTop() && $(window).scrollTop() >= 21300 * ratio1){
            $('.short_span.span3').addClass('middle');
        }else
        {
            $('.short_span.span3').removeClass('middle');
        }
        if($(window).scrollTop() >= 22000 * ratio1){
            $('.short_span.span3').addClass('active');
        }else
        {
            $('.short_span.span3').removeClass('active');
        }
        

        /* 맞춤 목업 */
        if(24000 * ratio1 > $(window).scrollTop() && $(window).scrollTop() >= 23300 * ratio1){
            $('.suggestion_span.span1').addClass('middle');
        }else
        {
            $('.suggestion_span.span1').removeClass('middle');
        }
        if($(window).scrollTop() >= 24000 * ratio1){
            $('.suggestion_span.span1').addClass('active');
            
        }else
        {
            $('.suggestion_span.span1').removeClass('active');
            
        }

        if($(window).scrollTop() >= 24300 * ratio1){
            $('.custom_mockup.img1').css('opacity', '0');
            $('.custom_mockup.img2').css('opacity', '1');
            $('.custom_mockup_text.text1').css('opacity', '0');
            $('.custom_mockup_text.text2').css('opacity', '1');
        }else
        {
            $('.custom_mockup.img1').css('opacity', '1');
            $('.custom_mockup.img2').css('opacity', '0');
            $('.custom_mockup_text.text1').css('opacity', '1');
            $('.custom_mockup_text.text2').css('opacity', '0');
        }

        if(25000 * ratio1 > $(window).scrollTop() && $(window).scrollTop() >= 24300 * ratio1){
            $('.suggestion_span.span2').addClass('middle');
        }else
        {
            $('.suggestion_span.span2').removeClass('middle');
        }
        if($(window).scrollTop() >= 25000 * ratio1){
            $('.suggestion_span.span2').addClass('active');
            
        }else
        {
            $('.suggestion_span.span2').removeClass('active');
        }

        if($(window).scrollTop() >= 25300 * ratio1){
            $('.custom_mockup.img2').css('opacity', '0');
            $('.custom_mockup.img3').css('opacity', '1');
            $('.custom_mockup_text.text2').css('opacity', '0');
            $('.custom_mockup_text.text3').css('opacity', '1');
        }else
        {   
            $('.custom_mockup.img3').css('opacity', '0');
            $('.custom_mockup_text.text3').css('opacity', '0');
        }

        if(26000 * ratio1 > $(window).scrollTop() && $(window).scrollTop() >= 25300 * ratio1){
            $('.suggestion_span.span3').addClass('middle');
        }else
        {
            $('.suggestion_span.span3').removeClass('middle');
        }

        if($(window).scrollTop() >= 26000 * ratio1){
            $('.suggestion_span.span3').addClass('active');
        }else
        {
            $('.suggestion_span.span3').removeClass('active');
        }


        /* offline */
        if($(window).scrollTop() >= 30800 * ratio1){
            $('.offline_wave').css('animation', 'wave 1s forwards');
        } else {
            $('.offline_wave').css('animation', 'none');
        }
    });

    /* color */
    const sub = ["", "밝은 햇살을 담은", "공항의 시원함을 담은", "사이니지의 명시성", "깔끔하고 담백한"];
    const title = ['', 'SUNLIGHT ORANGE', 'AIRPORT BLUE', 'EXPLICIT BLACK', 'CLEAR WHITE'];
    const detail = ['', 'C0% M61% Y96% K0%<br/>R254 G90 B10<br/>#FE620A', 'C100% M45% Y0% K9%<br/>R1 G129 B233<br/>#0181E9', 'C0% M0% Y0% K85%<br/>R39 G39 B39<br/>#272727', 'C0% M0% Y0% K0%<br/>R255 G255 B255<br/>#FFFFFF'];

    for(let i = 1; i < 5; i++){
        $('.color_btn'+i).click(function(){
            $('.color_sub').html(sub[i]);
            $('.color_title').html(title[i]);
            $('.color_detial').html(detail[i]);
            $('.select_btn').removeClass('active');
            $('.color_btn'+i).addClass('active');
            $('.slide').removeClass('slide1 slide2 slide3 slide4');
            $('.slide').addClass('slide'+i);
        })
    }

    /* keywords */
    $('.legend1').click(function(){
        $('.keywords .keywords_list.key_concept').addClass('active');
        $('.keywords .keywords_list.key_design').addClass('active');
        $('.legend1').addClass('active');
        $('.legend2').addClass('active');
    });
    $('.legend2').click(function(){
        $('.keywords .keywords_list.key_concept').removeClass('active');
        $('.keywords .keywords_list.key_design').removeClass('active');
        $('.legend1').removeClass('active');
        $('.legend2').removeClass('active');
    });
});
