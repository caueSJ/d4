$(document).ready(function(){
	var distanciaMenuTopo = $('#menuPrincipal').offset().top;
	var elementoMenu = $('#menuPrincipal');
	$(document).on('scroll', function () {
		if (distanciaMenuTopo <= $(window).scrollTop()) {
			elementoMenu.addClass('fixar');
		} else {
			elementoMenu.removeClass('fixar');
		}
	});
});