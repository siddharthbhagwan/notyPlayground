$(document).ready(function(){

	$("#id").click(function(){
		var n = noty({
		    text: 'NOTY - a jquery notification library!',
		    animation: {
	        open: {height: 'toggle'}, // jQuery animate function property object
	        close: {height: 'toggle'}, // jQuery animate function property object
	        easing: 'swing', // easing
	        speed: 500 // opening & closing animation speed
		    }
		});
	});

});