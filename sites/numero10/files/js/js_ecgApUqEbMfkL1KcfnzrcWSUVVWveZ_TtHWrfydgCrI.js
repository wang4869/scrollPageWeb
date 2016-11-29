(function($) {
  	$(document).ready(function(){
  		
		$('.bxslider').bxSlider({
			pager: true,
			pagerType: 'short',
			pagerShortSeparator: '/',
			responsive: false,
			slideMargin:0,
			onSliderLoad: function() {
				height = $('.bx-wrapper').width()*128/268.5; // default to F12 format
			}
		});
		$('.bx-wrapper').parent().next('.link-teaser-text').css("bottom", "60px");
	});
}(jQuery));;
