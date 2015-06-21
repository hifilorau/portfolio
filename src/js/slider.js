  app.slider = function () {
        var heroTxt = $('#rau-holder');
				var aboutContent=$('.about-content');
				var aboutButton = $('.about-button');
		    var workButton =$('.work-button');
		    var orange = '#E74E30';
		    var black = '#444444'
				
				$('.home').css({ 'color': black });
			
//		  $('.flexslider').flexslider({
//					controlNav: false,
//				  slideshowSpeed: 40000, 
//				  prevText: "i",
//				  nextText: "h"
//				  
//				});
//		 
//		var sliderCtrl =$('.flex-direction-nav');
//		  sliderCtrl.hide();
		  aboutContent.hide();
		  $('.work').hide();
//		  
//			
		
//			aboutButton.click(function(){
//			heroTxt.hide();
//			$('.work').hide();
//			aboutContent.show();
//			});
		
			$('.home').click(function(){
				$(this).css({ 'color': black });
				workButton.css({ 'color': orange});
				aboutButton.css({ 'color': orange});
				sliderCtrl.hide();
				aboutContent.hide();
				$('.work').hide();
				heroTxt.show();
				
//				app.transformTxt();
				console.log('fire');
				
				
			});
		
		
		   workButton.click(function(){
				$(this).css({ 'color': 'black'});
				$('.home').css({ 'color': orange});
				 	$(this).css({ 'color': black });
				aboutButton.css({ 'color': orange});
				heroTxt.hide();
				aboutContent.hide();
				$('.work').show();				
				sliderCtrl.show();	
			});
		
		 aboutButton.click(function () {
			 	$(this).css({ 'color': black });
				workButton.css({ 'color': orange});
			 $('.home').css({ 'color': orange});
			 	heroTxt.hide();
			$('.work').hide();
			aboutContent.fadeIn(3000);
//          $('.about-content').show(".about-content", { direction: "left" }, 1000);
    });
		   
			 
  
		
		    
    };