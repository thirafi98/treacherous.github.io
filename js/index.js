/* ------------------------------------ Click on login and Sign Up to  changue and view the effect
---------------------------------------
*/

function cambiar_login() {
	document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
	document.querySelector('.cont_form_login').style.display = "block";
	document.querySelector('.cont_form_sign_up').style.opacity = "0";               
	
	setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  

	setTimeout(function(){    
		document.querySelector('.cont_form_sign_up').style.display = "none";
	},200);  
}

function cambiar_sign_up(at) {
	document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
	// document.querySelector('.cont_forms_a').className = "cont_forms cont_forms_active_info";
	document.querySelector('.cont_form_sign_up').style.display = "block";
	document.querySelector('.cont_form_login').style.opacity = "0";

	setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
},100);  

	setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
},400);  


}    



function ocultar_login_sign_up() {

	document.querySelector('.cont_forms').className = "cont_forms";    
	document.querySelector('.cont_form_sign_up').style.opacity = "0";               
	document.querySelector('.cont_form_login').style.opacity = "0"; 

	setTimeout(function(){
		document.querySelector('.cont_form_sign_up').style.display = "none";
		document.querySelector('.cont_form_login').style.display = "none";
	},500);  

}

function productItemHeight(element) {
	$(element).each(function() {
		var itemHeight = $(this).height();
		$(this).css({
			"height": itemHeight
		});
	});
}

$(window).load(function() {
	productItemHeight(".product-item");
});



var owl = $('.imgs-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})