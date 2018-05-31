$(document).ready(function () {	

	//scrollspy
	$('.scrollspy').scrollSpy();

	//mascara celular
	$('.cel').mask('(00) 00000-0000');

	 //inicializa modal
	 $('.modal').modal({
	 	startingTop: '20%',
	 	endingTop: '20%',
	 	opacity: .8,
	 	ready: function(){
	 		$('body').css("overflow:hidden")
	 	}
	 });

	 //Aviso Whatsapp
	 setInterval(function(){ 
	 	$('.whatsText').toggle(1000); 
	 }, 3000); 

	 //popup modalbox
	 setTimeout(function(){
	 	$('#modal1').modal('open');
	 }, 3000);	 
	 

	//whatsapp link
	$(window).scroll(function() {
	  var scrollTop = $(window).scrollTop();
	  var showWhatsIco = $('#header').offset().top + 50;
	  var showWhatsMsg = $('#header').offset().top + 200;
	  if (scrollTop > showWhatsIco) { 
	    $('.whatsapp').fadeIn(1000);

	    if($(window).width() > 500){
	    	$('.spyController').fadeIn(1000);		    
	  	}
	  }
	  else
	  {
	  	$('.whatsapp').fadeOut(300);
	  }
	});	
});