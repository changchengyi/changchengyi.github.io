jQuery(document).ready(function() {
  //menu scroll
  function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            header = $(".header2");
        if (distanceY > shrinkOn) {
            header.addClass("scrolled");
        } else {
            if (header.hasClass("scrolled")) {
                header.removeClass("scrolled");
            }
        }
    });
}
window.onload = init();

  //menu
  $('.bar-icon').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('body').toggleClass('open');
	});
	$('.aside-close').click(function(event) {
		/* Act on the event */
		$('body').toggleClass('open');
	});


  //swiper
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // auto play
    autoplay: {
      delay: 3500,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    
  })
  //tab
  var $li = $('ul.tab-title li');
  $($li. eq(0) .addClass('active').find('a').attr('href')).siblings('.tab-inner').hide();

  $li.click(function(){
      $($(this).find('a'). attr ('href')).show().siblings ('.tab-inner').hide();
      $(this).addClass('active'). siblings ('.active').removeClass('active');
  });
  //index scroll fadein
  /* Every time the window is scrolled ... */
  
    
});