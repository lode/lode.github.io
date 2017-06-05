$(document).ready(function(){

$('header img').on('click', function(){
	var update  = ($(this).attr('class') == 'thumb') ? 'full' : 'thumb';
	
	$(this).attr('src', $(this).attr('data-' + update));
	$(this).removeClass().addClass(update);
});

$('.collapse').each(function(){
	var container = $(this);
	var toggler = $('[href="#' + container.attr('id') + '"]');
	
	$(toggler).on('click', function(event){
		event.preventDefault();
		container.toggleClass('in');
	});
});

$('#contactdetails a').on('click', function(){
	$('#contactdetails a').toggle();
	
	$(this).toggle();
	$('.open', this).toggle();
	$('.close', this).toggle();
});

});
