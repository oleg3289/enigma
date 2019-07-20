$(document).ready(function(){


	//Switcher for language//

	$(".forChoiceR").click(function(){
		if ($(this).hasClass("choiced")) {
			return;
		} else {
			$(this).addClass("choiced");
			$(".forChoiceU").removeClass("choiced")
		}
	})
	$(".forChoiceU").click(function(){
		if ($(this).hasClass("choiced")) {
			return;
		} else {
			$(this).addClass("choiced");
			$(".forChoiceR").removeClass("choiced")
		}
	})

	//call button//

	$(".callme").click(function(){
		$("#thanks").css({"display":"block", "z-index":"100"});
	})

})