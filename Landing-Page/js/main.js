$(document).ready(function() {
	$('section#screenshots img').on('click',function(){
		var attribute_val = $(this).attr('src');
		$('div.modal-body img').attr(
			'src',attribute_val
		);
	});

	var nav = $('.navbar-default');
	var distance = $('.navbar-default').offset();
	if(distance.top >= 300){
		nav.addClass('effect');
	}

	console.log(distance);

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		//console.log(scroll);
		if(scroll >= 300){
			nav.addClass('effect');
		}
		else{
			nav.removeClass('effect');
		}
			
	});
	
	$('#features img').waypoint(function(){
		$('#features img').addClass('animated bounce');
	},{
		offset:'50%'
	});

	$('#about .blue-circle').waypoint(function(){
		$('#about .blue-circle').addClass('animated fadeInUp')
	},{
		offset:'50%'
	});

	$('#features .blue-circle').waypoint(function(){
		$(this.element).addClass('animated fadeInUp')
	},{
		offset:'50%'
	});

	$('#screenshots .col-sm-4').waypoint(function(){
		$(this.element).addClass('animated zoomIn');
		$(this.element).css({'opacity' : 1});
	},{
		offset:'50%'
	});

	$('#download div.phone img').waypoint(function(){
		$(this.element).addClass('animated fadeInRight');
		// $(this.element).css({'opacity' : 1});
	},{
		offset:'50%'
	});

	$('#download .platforms > div').waypoint(function(){
		$(this.element).addClass('animated fadeInUp');
		// $(this.element).css({'opacity' : 1});
	},{
		offset:'50%'
	})

});

smoothScroll.init({
	"speed": 800,
	"easing": "easeInOutCubic",
	"offset": 0,
	"updateURL": false
});
