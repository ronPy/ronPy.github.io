$(document).ready(function () {
	$("#home-menu").hide();
	adjust_design();
	var offset = 80;
	$('.navbar-fixed-top li a').click(function(event) {
	    event.preventDefault();
		target = "#" + $($(this).attr('href'))[0].id;
		$(target + ">div").fadeIn(2000);
        $('html,body').animate({
            scrollTop: $(target).offset().top - 40
        }, 1000);
	});
	$('body').on('activate.bs.scrollspy', function (e) {
	  if (e.target.id == "home-menu"){
		$("#home-menu").hide("fast");
		$(".navbar-fixed-top").addClass("big");
		$("#my-tools").attr("style", "");
      }else{ 		  
		$("#home-menu").show('fast');
		if ($(window).width() >= 768){
			$(".navbar-fixed-top").removeClass("big");
		}
		$("#my-tools").attr("style", "position:fixed; top: 60px; right: 0px;");
      }
    });
	$( window ).resize(function() {
		adjust_design();
	});
	function adjust_design(){
		var docHeight = $(window).height();
		var docWidth = $(window).width();
		if (docWidth >= 1200){
			if (docHeight > 805){
				marginTop = (20 + docHeight - 805) / 2;
				marginBottom = marginTop + 10;
				$(".jumbotron").attr("style", "margin-bottom:"+marginBottom+"px; margin-top:"+marginTop+"px;");
			}else{
				$(".jumbotron").attr("style", "margin-bottom:30px;");
			}
			$("#about").attr("style", "margin-bottom: 360px;");
			//$("#works").attr("style", "margin-bottom: 460px;");
		}else if(docWidth >= 768){
			if (docHeight > 700){
				marginBottom = (20 + docHeight - 700);
				$(".jumbotron").attr("style", "margin-bottom:"+marginBottom+"px;");
			}else{
				$(".jumbotron").attr("style", "margin-bottom:30px;");
			}
			$("#about").attr("style", "margin-bottom:150px; margin-top:30px;");
		}else{
			$(".jumbotron").attr("style", "margin-bottom:30px; margin-top:0px;");
			$("#about").attr("style", "margin-bottom:10px; margin-top:10px;");
		}
	}
});