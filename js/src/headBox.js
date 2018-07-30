//  headBox.js

(function($){

  var winW = $(window).outerWidth();
  var gnbBtn = $('.ham_wrap');
  var gnb = $('.gnb');
  var gnbUl = gnb.children('ul');
  var gnbMenu = gnbUl.children('li');

  var login = $('.login').children('.sub');
  var loginP = $('.login_pop');

  var cart = $('.cart');
  var cartP = $('.cart_pop');

 // mobile&tab 
 
  if(winW < 768){
  // menu show
    gnbBtn.on('click',function(e){
      gnb.stop().slideToggle();
      $(this).children('button').toggleClass('active');
    });

    login.on('click',function(e){
      loginP.stop().slideToggle();
       $(this).children('a').toggleClass('active');
    });
   cart.on('click',function(e){
     cartP.stop().slideToggle();
     $(this).children('a').toggleClass('active');
   });
 // under menu accordion
  
    gnbMenu.on('click',function(e){
     e.preventDefault();

   var thisNext = $(this).children('div').css('display');

    if(thisNext === 'block'){
      $(this).children('div').stop().slideUp(500);
    }else{
      $(this).children('div').stop().slideDown(500);
    }
    $(this).siblings('li').children('div').stop().slideUp(500);

    gnbMenu.removeClass('active');
    $(this).addClass('active');
    });   

  }

// 리사이즈 
$(window).on('resize',function(e){
  var nowW = $(window).outerWidth();

  if(winW !== nowW){
    location.reload();
  }
  
});



})(jQuery);