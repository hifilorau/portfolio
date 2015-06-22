app.colorChange = function(){

	function spectrum(){
			var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
			$('.hire-me-link').animate( { backgroundColor: hue }, 200);
	 }

	$(".hire-me-link").hover( function () {
//		setInterval(function() {
		spectrum();
//		}, 200);
//	$( ".hire-me-link" ).off( "mouseenter mouseleave" );
	});
	
	 
	
};