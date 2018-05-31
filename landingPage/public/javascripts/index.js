//unmask
	function unmask(){
		var maskedWhats = $('#whatsapp').val();
		var whats = $('#whatsapp').cleanVal();
		
		
		if(whats.length < 11){
			$('#whatsapp').val('');

			alert('Campo Numero Celular não está completo');
			return false;
		}
		else
		{
			$('#whatsapp').val(whats);
			return true;
		}
	}

$(document).ready(function () {	

	//Clean Inputs
	$("#nome").val('');
	$("#email").val('');
	$("#whatsapp").val('');

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
		 setInterval(function(){ 
		 	$('#modal1').modal('open'); 
		 }, 15000); 
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