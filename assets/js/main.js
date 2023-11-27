(function ($) {
"use strict";

$('.menubtn').click(function(){
	$('.m_menu').toggleClass('menu-show');
});

// Sticky Menu Bar
$(document).ready(function(){
	$("#sticker").sticky({topSpacing:0});
});



// Mobile Menu
$('#my-navigation').iptOffCanvas({

	// base CSS class
	baseClass: 'offcanvas',
  
	// top, right, bottom, left
	type: 'right',
  
	// close other instances when one opens
	single: true,
  
	static: false
	
});


// Add to Card

// niceSelect
$(document).ready(function() {
	$('#filter').niceSelect();
});



})(jQuery);