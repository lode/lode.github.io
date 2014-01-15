$(document).ready(function(){

$('header img').on('click', function(){
	var update  = ($(this).attr('class') == 'thumb') ? 'full' : 'thumb';
	
	$(this).attr('src', $(this).attr('data-' + update));
	$(this).removeClass().addClass(update);
});

$('#contactdetails a').on('click', function(){
	$('#contactdetails a').toggle();
	
	$(this).toggle();
	$('.open', this).toggle();
	$('.close', this).toggle();
});

});
