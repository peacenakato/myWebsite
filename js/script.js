//alert("Hullo World!");

function nameOfMyFunction(parameter1, parameter2){
return parameter1 + parameter2;
}

//alert(nameOfMyFunction(2,3));	

// ======================== jQuery ===================================

//$('.target').hide();

$('#hideBtn').on("click",function(){
	$('.target').hide();
});	



$('#showBtn').on("click",function(){
	$('.target').show();
});	
