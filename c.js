$(document).ready(function(){

$('#contactdetails a').on('click', function(){
	$('#contactdetails a').toggle();
	
	$(this).toggle();
	$('.open', this).toggle();
	$('.close', this).toggle();
});

});
