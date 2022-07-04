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
        $('.navbar ul').removeClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    $('.navbar ul li a').on('click', function(){
        $('.navbar ul li a').removeClass('active');
        $('.navbar ul li a').removeAttr('style');
        $(this).addClass('active');
    });
    $(window).scroll(function(){
    if ($('.navbar').hasClass("sticky")) {
        $('.navbar ul li a').removeAttr('style');
        $('.active').css('color','#f9004d')
    }else{
        $('.active').css('color','#f9004d')
    }
    })
});
$(document).ready(function() {
		$('a[href*=#]').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});
				return false;
		});
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();
	
		// Assign active class to nav links while scolling
		$('.page-section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.navbar a.active').removeClass('active');
						$('.navbar a').eq(i).addClass('active');
				}
		});
}).scroll()

var typed = new Typed('.typing', {
    strings: ['Backend Web Developer', 'Programmer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});