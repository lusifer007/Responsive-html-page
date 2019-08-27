// JavaScript Document
/*
$(document).ready(
function(){
	"use strict";
	$(".loader").fadeOut(1000,function(){
		$(".slide-left,.slide-right").animate({
			"width":"0%"
			
		},500,function(){
			$(".loader-con").fadeOut();
		});
	});
	
}
);
*/
window.onload = function(){"use strict";
	$(document).ready(
function(){
	
	$(".loader").fadeOut(1000,function(){
		$(".slide-left,.slide-right").animate({
			"width":"0%"
			
		},500,function(){
			$(".loader-con").fadeOut();
		});
	});
	
}
);
};

$(function(){
	"use strict";
	$("#menu").slicknav({
		lable : '',
		brand : 'MilanExpo',
		
	});
});
/*START BIG SLIDER*/
$(document).ready(function() {
	
	"use strict";
  $(".skitter-large").skitter({
	  
	  label : false ,
	  dots : false,
  }) ;
});


$(document).ready(function(){
	"use strict";
	$(".picone-header").slideDown(1000,function(){
		$(".picone-btn").fadeIn(1500,function(){
			$(".picone-header,.picone-btn").delay(100).fadeOut(function(){
				$(".slider-label").css("background","rgba(0,0,0,0.8 )");
				$(".pictwo-header").fadeIn(1000,function(){
					$(".pictwo-para").show(1500,function(){
						$(".pictwo-btn").fadeIn(1000,function(){
							$(".pictwo-header,.pictwo-para,.pictwo-btn").delay(2800).fadeOut(function(){
								$(".slider-label").css("background","inherit");
							});
						});
					});
				});
			});
		});
	});
	
});

$(document).ready(function(){"use strict";
	setInterval(function(){
	
	$(".picone-header").slideDown(1000,function(){
		$(".picone-btn").fadeIn(1500,function(){
			$(".picone-header,.picone-btn").delay(100).fadeOut(function(){
				$(".slider-label").css("background","rgba(0,0,0,0.8 )");
				$(".pictwo-header").fadeIn(1000,function(){
					$(".pictwo-para").show(1500,function(){
						$(".pictwo-btn").fadeIn(1000,function(){
							$(".pictwo-header,.pictwo-para,.pictwo-btn").delay(2800).fadeOut(function(){
								if($(window).width()>992){
								$(".slider-label").css("background","inherit");}
							});
						});
					});
				});
			});
		});
	});
	
},10500);
});

/*END BIG SLIDER */

/*START PROJECT SLIDER*/

$(document).ready(function(){
	"use strict";
	$(".center").slick({
		dots : false,
		infinite : true,
		centerMode:true,
		slidesToShow : 5,
		slidesToScroll : 3,
		responsive:[
			{
				breakpoint:768,
				settings:{
					dots : false,
					infinite : true,
					slidesToShow : 3,
					slidesToScroll : 3,
				}
			},
			
			{
				
				breakpoint:480,
				settings:{
					dots : false,
					infinite : true,
					slidesToShow : 1,
					slidesToScroll : 1,
				}
			},
		]
	});
});


/*END PROJECT SLIDER*/


/* start progressbar*/

$(document).ready(function(){
	"use strict";
	var pone = $('.progress-one').html();
	var ptwo = $('.progress-two').html();
	var pthree = $('.progress-three').html();
	var pfour = $('.progress-four').html();
	var pfive = $('.progress-five').html();
	$(".progress-one").animate({'width':pone},1000,function(){
		$('.progress-two').animate({'width':ptwo},500,function(){
			$('.progress-three').animate({'width':pthree},500,function(){
				$('.progress-four').animate({'width':pfour},500,function(){
					$('.progress-five').animate({'width':pfive},500);
				});
			});
		});
	});
});

/* end progressbar*/

/*START about-box CODING*/
$(document).ready(function(){
	"use strict";
	$(document).scroll(function(){
		$("#but1").html(window.pageYOffset);
		var sh = window.pageYOffset;
		if(sh>=1302)
			{
				$("img.about-box-img").addClass("animated slideInLeft");
			}
		else
			{
				$(".about-box").addClass("");
			}
		
	});
	
	
	
});

/*START ABOUT-BOX-TEXT CODING+ PAGE SCROLL EFFECTS*/
$(document).ready(function(){"use strict";
	if($(window).width()>1024){
	
	$(document).scroll(function(){
		var sh = window.pageYOffset;
		if(sh>=1100)
			{
				$(".about-text,.about-box-img").slideDown(2000);
			}
		else
			{
				$(".about-text,.about-box-img").fadeOut(2000);
			}
		
	});
	
	}
	
});

/*END about-box CODING*/








