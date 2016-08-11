// JavaScript Document

/*
* Script common to all pages
*/
$(document).ready(function() {
	$('#searchbox').clearOnFocus();
		$('.subscribeEmail').clearOnFocus();
	$('form#signIn input[type=text], form#signIn input[type=password], form#register input[type=text], form#register input[type=password], form#editAddressBook input[type=text]').clearOnFocus();	
	
	jQuery.validator.setDefaults({ 
	    	onkeyup: false,
		onclick: false,
		onfocusout: false,
      		onsubmit: true,
		
		errorPlacement:function(error, element) { 
			error.prependTo( element.parent() );
		},
		errorClass: "errorText",
		errorElement: "span"
	});
});

/*
* Clear field on focus
* Usage: $('#search').clearOnFocus();
*/
$.fn.clearOnFocus = function(){
     return this.focus(function(){
        var v = $(this).val();
        $(this).val( v === this.defaultValue ? '' : v );
    }).blur(function(){
        var v = $(this).val();
        $(this).val( v.match(/^\s+$|^$/) ? this.defaultValue : v );
    });
};

	$.fn.serializeArray = function() {
		return this.map(function(){
		return jQuery.nodeName(this, "form") ?
		jQuery.makeArray(this.elements) : this;
		})
		.filter(function(){
		return this.name && !this.disabled &&
		(this.checked || /select|textarea/i.test(this.nodeName) ||
		/text|hidden|submit|password/i.test(this.type));
		})
		.map(function(i, elem){
		var val = jQuery(this).val();
		return val == null ? null :
		val.constructor == Array ?
		jQuery.map( val, function(val, i){
		return {name: elem.name, value: val};
		}) :
		{name: elem.name, value: val};
		}).get();
		}


/*UI Fixes- Adding here*/
 /*Navigation Menu*/
function mainmenu(){
$(" #nav ul ").css({display: "none"}); // Opera Fix
$(" #nav li").hover(function(){
		$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(100);
		},function(){
		$(this).find('ul:first').css({visibility: "hidden"});
		});
} 
 
$(document).ready(function(){					
	mainmenu();
});


 /*Navigation Menu*/

$(document).ready(function() {
									
if($.browser.msie && $.browser.version=="6.0"){ 


 /*Header*/
  $('#cartSummaryWrap').addClass('dispBlock'); 													//working

 /*Navigation Menu*/
 	
	$('#nav > li').addClass('navlitest'); 													//working
	$('#nav > li:first-child').addClass('navlifirstchild'); 							//working
	$('#nav > li a').addClass('IE6-navlia'); 												//working

	$('#nav ul li').mouseenter(function(){												//hover
												  $(this).find('a').addClass('navullihover');		//working
												  });		
	$('#nav ul li').mouseleave(function(){
												  $(this).find('a').removeClass('navullihover');	//working
												  });		
		$('#nav ul li').mouseenter(function(){												//hover
												  $(this).find('ul a').removeClass('navullihover');		//working
												  });		

	$('#nav > li').mouseenter(function(){												//hover
												  $(this).find('a').addClass('navli-hover-focus-a');		//working
												  });		
	$('#nav > li').mouseleave(function(){
												  $(this).find('a').removeClass('navli-hover-focus-a');	//working
												  });		
	
	$('#nav > li').mouseenter(function(){												//hover
												  $(this).find('ul a').removeClass('navli-hover-focus-a');		//working
												  });		
	
	
	$('#nav li ul li').mouseenter(function(){												//hover
												  $(this).find('span').addClass('navliullihoverspan');		//working
												  });		
	$('#nav li ul li').mouseleave(function(){
												  $(this).find('span').removeClass('navliullihoverspan');	//working
												  });		
	
	 /*Navigation Menu*/
	
//
$('#search input[type=button], #search input[type=submit]').addClass('searchbtn'); 												//working

   if ($('.downArrow').length){
			$('.downArrow').supersleight();		
			}
	/*if ($('.priceBanner').length){
			$('.priceBanner').supersleight();		
			}	*/
	if ($('.item img.offer').length){
			$('.item img.offer').supersleight();		
			}			

/*Footer*/
  $('input[type="text"].subscribeEmail').addClass('subscribeEmailBox'); 													//working
  
  
 
/*Carousel*/
	$('#catalogMainWrap .carouselWrap .scrollable .items .item').mouseenter(function(){												
	  $(this).addClass('catalogMainScrollableItemHover');
	});		
	$('#catalogMainWrap .carouselWrap .scrollable .items .item').mouseleave(function(){
	  $(this).removeClass('catalogMainScrollableItemHover');	
	 });
/*Carousel ends*/	
	
    
								

			$('input[type="text"],input[type="password"]').addClass('inputBox');
			$('input[type="text"],input[type="password"] ').mouseenter(function(){
												  $(this).addClass('fieldHover');								//working
												  });
			$('input[type="text"],input[type="password"]').mouseleave(function(){
												  $(this).removeClass('fieldHover');							//working
												  });			

			
		
					
			if ($('#cartSummaryDetail').length){
			$('#cartSummaryDetail').bgiframe();
			}
			
			
/*Form*/
	$('fieldset > div').addClass('fieldsetImmediateChildDiv'); 	
	
	$('fieldset input[type=text],fieldset input[type=password]').addClass('inputText');
	
	$('fieldset input[type=radio]').addClass('inputRadio');
	
	$('fieldset input[type=checkbox]').addClass('inputCheck');
	
	$('fieldset input[type=button], fieldset input[type=submit], .myAccountContent input[type=button], .myAccountContent input[type=submit], #myWishlistCarousel input[type=button], #myWishlistCarousel input[type=submit], #compBasket input[type=button], #compBasket input[type=submit], .productDetailContent .productInfo .purchase .basket input[type=button], .productDetailContent .productInfo .purchase .basket input[type=submit], .orderSearch input[type=button], .orderSearch input[type=submit], #creditCards input[type=button], #creditCards input[type=submit], #addressBook input[type=button], #addressBook input[type=submit], #alsoPurchasedCarousel  input[type=button]').addClass('button');	
/*Form ends*/		
/*My Account*/
	$('.myAccountView > div').addClass('myAccountViewImmediateChildDiv');	
/*My Account ends*/	

/*Jquery UI*/
$('.calendar input[type="text"]').addClass('inputText');

if ($('#ui-datepicker-div').length){
	$('#ui-datepicker-div').bgiframe();
}
/*Jquery UI ends*/	

	/*changes done for ORDER search----saurabh*/
	
	$('.orderSearch form div input[type="text"]').addClass('orderSearchInput');
	$('#giftCode form input[type="text"]').addClass('giftCodeInput');
	
	/*oRDER sEARCH ENDS*/

/*Browse Products starts*/
	$('#byManufacturer fieldset > div,#byRecommended fieldset > div,#byRatePlan fieldset > div,#byContractLength fieldset > div,#byNetworkProvider fieldset > div,#byFreeGifts fieldset > div,#byStyles fieldset > div,#byAccessories fieldset > div,#byWantedFeatures fieldset > div').addClass('bysearchFacetdiv');
	
	$('#byManufacturer fieldset > div label,#byRecommended fieldset > div label,#byRatePlan fieldset > div label,#byContractLength fieldset > div label,#byNetworkProvider fieldset > div label,#byFreeGifts fieldset > div label,#byStyles fieldset > div label,#byAccessories fieldset > div label,#byWantedFeatures fieldset > div label').addClass('bySearchFacetlabel');
	
	$('.product input[type="reset"], .product input[type="button"], .product input[type="submit"]').addClass('addToCartBtnFix');
	$('.product input[type="reset"].selectAndView, .product input[type="button"].selectAndView, .product input[type="submit"].selectAndView,#productlistingoverlay input[type="button"].selectAndView ').addClass('selectAndViewFix');
	
	$('.simOnly input[type="reset"].selectAndView, .simOnly input[type="button"].selectAndView, .simOnly input[type="submit"].selectAndView').addClass('selectAndViewFix');
	
		$('.basket input[type="text"].qtyInput').addClass('inputBox');
		$('.range input[type="text"]').addClass('rangeinput');
		
		if ($('#productlistingoverlay').length){
			$('#productlistingoverlay').bgiframe();
			}

/*Browse Products Ends*/

/*.plan input[type='button']*/
	$('.simOnly input[type="button"]').addClass('simOnlyBtn');
	$('input[type="button"].toCart').addClass('toCart');

$('.signIn #returningCustomerWrap .signInContent fieldset input[type="text"], .signIn #returningCustomerWrap .signInContent  input[type="password"]').addClass('signInInput');
}//End of IF block used for checking the browser version
			
			
		});