//unmask
	function unmask(){
		var tel = $('.tel').cleanVal();
		
		
		if(tel.length < 10){
			$('.tel').val('');

			alert('Campo Numero Telefone não está completo');
			return false;
		}
		else
		{
			$('.tel').val(tel);
			return true;
		}
	}

$( document ).ready(function() {
    $(".dropdown-button").dropdown({
    	coverTrigger: false
    });

   	var options =  {
	  onKeyPress: function(tel, e, field, options) {
	    var masks = ['(00)0000-00009', '(00)00000-0000'];
	    var mask = (tel.length==14) ? masks[1] : masks[0];
	    $('.tel').mask(mask, options);
	}};

	$('.tel').mask('(00)0000-0000', options);
});