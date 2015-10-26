$ (document).ready(function() {
	$("#startover").click(function() {
		$("#groceries").empty();
	});

	$('input').bind("enterKey",function(e){
   //do stuff here
   		var item= $('input').val();
   		$("#groceries").append('<li class="item">' + item +'</li>');
   		$('input').val('');
	});
	// <li class="item">Bread</li>
	$('input').keyup(function(e){
    	if(e.keyCode == 13){
        	$(this).trigger("enterKey");
    	}
	});
});
