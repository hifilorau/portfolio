  app.slider = function () {
        var heroTxt = $('#rau-holder');
				var aboutContent=$('.about-content');
				var aboutButton = $('.about-button');
		    var workButton =$('.work-button');
		    var contactButton =$('.contact-button');
				var contactContent=$('.contact-content');
		    var orange = '#E74E30';
		    var black = '#444444';
				
				$('.home').css({ 'color': black });
			

				aboutContent.hide();
				$('.work').hide();
				contactContent.hide();
		    console.log('hi');

		
			$('.home').click(function(){
				$(this).css({ 'color': black });
				workButton.css({ 'color': orange});
				aboutButton.css({ 'color': orange});
				contactButton.css({ 'color': orange});
				aboutContent.hide();
				contactContent.hide();
				$('.work').hide();
				heroTxt.show();	
			});
		
		
		   workButton.click(function(){
				$(this).css({ 'color': 'black'});
				$('.home').css({ 'color': orange});
				aboutButton.css({ 'color': orange});
				contactButton.css({ 'color': orange});
				contactContent.hide();
				heroTxt.hide();
				aboutContent.hide();
				$('.work').show();					
			});
		
		 aboutButton.click(function () {
			 $(this).css({ 'color': black });
			 workButton.css({ 'color': orange});
			 $('.home').css({ 'color': orange});
			 contactButton.css({ 'color': orange});
			 heroTxt.hide();
			 contactContent.hide();
			 $('.work').hide();
			 aboutContent.fadeIn(3000);
    });
		
		 contactButton.click(function () {
			 $(this).css({ 'color': black });
			 workButton.css({ 'color': orange});
			 $('.home').css({ 'color': orange});
			 aboutButton.css({ 'color': orange});
			 heroTxt.hide();
			 contactContent.hide();
			 aboutContent.hide();
			 $('.work').hide();
			 contactContent.fadeIn(3000);
    });
		   
	};