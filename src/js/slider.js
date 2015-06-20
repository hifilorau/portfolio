  app.slider = function () {
        var heroTxt = $('#rau-holder');
				var aboutContent=$('.about-content');
				var aboutButton = $('.about-button');
		    var workButton =$('.work-button');
		
			
		  $('.flexslider').flexslider({
					controlNav: false,
				  slideshowSpeed: 40000, 
				  prevText: "i",
				  nextText: "h"
				  
				});
		 
		var sliderCtrl =$('.flex-direction-nav');
		  sliderCtrl.hide();
		  aboutContent.hide();
		  $('.work').hide();
		  
			
		
//			aboutButton.click(function(){
//			heroTxt.hide();
//			$('.work').hide();
//			aboutContent.show();
//			});
		
			$('.home').click(function(){
				sliderCtrl.hide();
				aboutContent.hide();
				$('.work').hide();
				heroTxt.show();
//				app.transformTxt();
				console.log('fire');
				
				
			});
		
		
		   workButton.click(function(){
				heroTxt.hide();
				aboutContent.hide();
				$('.work').show();				
				sliderCtrl.show();	
			});
		
		 aboutButton.click(function () {
			 	heroTxt.hide();
			$('.work').hide();
			aboutContent.show();
//          $('.about-content').show(".about-content", { direction: "left" }, 1000);
    });
		   
			 
  
		
		    
    };