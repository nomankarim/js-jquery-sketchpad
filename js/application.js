$(document).ready(function() {
	$('button').on('click',function(){
	var input=prompt("Type any value greater than 1 and less than 40");
	$('.unit').remove();
	if(input >= 1 && input <= 40){
    for(var x = 0; x < input; x++) {
        for(var y = 0; y < input; y++) {
            $("<div>").addClass("unit").appendTo("#container");
        }
        $('<div>').addClass("new_rows").appendTo("#container");
    }}else {
    	alert("Input should be greater than 1 and less than 40");
    	window.reload();
    }
    

    $('.unit').on('mouseover',function(){
    	$(this).css({'background-color':'#000'});

    });

});
});
