$(function(){

    // 변수 지정
    let aboutNum = $('#about').offset().top;
    let portfolioNum = $('#portfolio').offset().top;
    let contactNum = $('#contact').offset().top;


    // Menu Click Event
    $('.gnb li a').click(function(){
        let target = $($(this).attr('href')).offset().top;

        $('html, body').animate({scrollTop: target}, 1000);
    });
    
    $('.gnb li:eq(0) a').css({color: '#fff'}).addClass('on');


    // Scroll Event
    $(window).scroll(function(){
        let num = $(this).scrollTop();
        console.log(num);

        if(num < aboutNum){

            $('.gnb li a').css({color: '#666'}).removeClass('on');

            $('.gnb li:eq(0) a').css({color: '#fff'}).addClass('on');
        }

        if(num >= aboutNum && num <= portfolioNum){
            $('.gnb li a').css({color: '#666'}).removeClass('on');

            $('.gnb li:eq(1) a').css({color: '#fff'}).addClass('on');
        }

        if(num >= 2301 && num <= contactNum){
            $('.gnb li a').css({color: '#666'}).removeClass('on');

            $('.gnb li:eq(2) a').css({color: '#fff'}).addClass('on');
        }

        if(num >= 4000){
            $('.gnb li a').css({color: '#666'}).removeClass('on');

            $('.gnb li:eq(3) a').css({color: '#fff'}).addClass('on');
        }


        // Skill Graph bar Event 1
        if(num < 700){
            $('.s_bar2 .bar1').css({width: 0})
            $('.s_bar2 .bar2').css({width: 0})
            $('.s_bar2 .bar3').css({width: 0})
            $('.s_bar2 .bar4').css({width: 0})
            $('.s_bar2 .bar5').css({width: 0})
            $('.s_bar2 .bar6').css({width: 0})
            $('.s_bar2 .bar7').css({width: 0})
        }

        if(num > 600){
            $('.s_bar2 .bar1').css({width: 990})
            $('.s_bar2 .bar2').css({width: 990})
            $('.s_bar2 .bar3').css({width: 1100})
            $('.s_bar2 .bar4').css({width: 990})
            $('.s_bar2 .bar5').css({width: 770})
            $('.s_bar2 .bar6').css({width: 880})
            $('.s_bar2 .bar7').css({width: 660})
        }
    });


    // Skill Graph bar Event 2
    $('.gnb li:eq(1) a').click(function(){
        $('.s_bar2 .bar1').css({width: 990})
        $('.s_bar2 .bar2').css({width: 990})
        $('.s_bar2 .bar3').css({width: 1100})
        $('.s_bar2 .bar4').css({width: 990})
        $('.s_bar2 .bar5').css({width: 770})
        $('.s_bar2 .bar6').css({width: 880})
        $('.s_bar2 .bar7').css({width: 660})
    })


    // Portfolio Menu Event
    $('.tab div a').click(function () {
        $('.tab div a').removeClass('on');
        $(this).addClass('on')
    })


    // Portfolio isotop plug-in
    $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
    });

    $('#all').click(function () {
        $('.grid').isotope({ filter: '.grid-item' })
    })
    $('#dg').click(function () {
        $('.grid').isotope({ filter: '.dg' })
    })
    $('#ps').click(function () {
        $('.grid').isotope({ filter: '.ps' })
    })
    $('#rs').click(function () {
        $('.grid').isotope({ filter: '.rs' })
    })


    $('.grid-item').mouseenter(function () {
        $(this).find('.cover').stop().fadeIn(250);
    });

    $('.grid-item').mouseleave(function () {
        $(this).find('.cover').stop().fadeOut(250);
    });


    $(window).scroll(function(){
        let num = $(this).scrollTop();
    });
})