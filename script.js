$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else
        $('.navbar').removeClass("sticky");
    });
    // toggle menu navbar
    $('.menu-btn').click(function(){
        $('.navbar ul').toggleClass('active')
        $('.menu-btn i').toggleClass('active')
    });

    $('li').click(function() {
        // alert('a')
        $('.navbar ul').removeClass('active');
        $('.menu-btn i').toggleClass('active')
        // $(this).addClass('active');
    // if($(this).find('a').attr('href') == '#tab-ccc') {
    //     alert('ccc clicked');
    // }
});
});
var typed = new Typed('.typing', {
    strings: ['Backend Web Developer', 'Programmer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});