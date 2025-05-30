



$(window).on('load' ,function(){
		$('#docs-menu').affix({
			offset:{
				top: 150
			}
		});
		
		
		
		$('body').scrollspy({ target: '#docs-menu' });
		$('#docs-menu').on('click', 'a[href^="#"]', function(e) {
			
			if ($(this).parent().hasClass('hassub')) {
				$(this).parent().toggleClass('in');
				return ;
			}

			var target = $( $(this).attr('href') );
			if( target.length ) {
				$('html,body').animate({
					scrollTop: target.offset().top-150
				}, 500);
			}
			e.preventDefault();
			//alert(target.offset().top );
		});
		prettyPrint();

		

		var scSpy = $('#docs-menu .hassub');
		$('#docs-menu li>a').on('activate.bs.scrollspy', function () {
			scSpy.removeClass('in')
			
		})



	
		
});


function document_tab(param,btn,obj,event){
	var param = $(param);
	var btn = param.find(btn);
	var obj = param.find(obj);
	var elem = 0;
	
	
	obj.hide().eq(elem).show();
	btn.removeClass("tab_ov");
	btn.eq(elem).addClass("tab_ov");
	
	
	btn.bind('click',function(){
		var t = $(this);
		btn.removeClass("tab_ov");
		t.addClass("tab_ov");
		elem = t.index();
		obj.stop(true,true).hide();
		obj.eq(elem).stop(true,true).show();

		return false;
	});
}
