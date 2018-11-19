//  headBox.js

(function($){

  var winW = $(window).outerWidth();
  var gnbBtn = $('.ham_wrap');
  var gnb = $('.gnb');
  var gnbUl = gnb.children('ul');
  var gnbMenu = gnbUl.children('li');
  var under = gnbMenu.children('div');
  var underUl = under.children('ul');
  var underM = underUl.children('li');

  var login = $('.login').children('.sub');
  var loginP = $('.login_pop');

  var cart = $('.cart');
  var cartP = $('.cart_pop');

  var link = ['./p1_ssd_about.html','./p1_ssd_brand.html','./p1_ssd_shop.html','./p1_ssd_news.html','./p1_ssd_help.html'];


 // mobile&tab 
 
  if(winW < 768){
    // menu show
      gnbBtn.on('click',function(e){
        gnb.stop().slideToggle();
        $(this).children('button').toggleClass('active');
        cartP.hide();
        loginP.hide();
      });
      login.on('click',function(e){
        loginP.stop().slideToggle();
         $(this).children('a').toggleClass('active');
         gnb.hide();
         cartP.hide();
      });
     cart.on('click',function(e){
       cartP.stop().slideToggle();
       $(this).children('a').toggleClass('active');
        gnb.hide();
        loginP.hide();
     });
 
    // under menu accordion  
      gnbMenu.on('click', function(e){
        e.preventDefault();
        var i = $(this).index();
        // under.eq(i).find(underM).on('click', function(){
        $(this).find(underM).on('click', function(){
          $(location).attr('href',link[i]);
        });  
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
  }else{

      gnbMenu.on('mouseover', function(e){
        e.preventDefault();
        $(this).addClass('gnbhover');
        $(this).children('div').stop().slideDown(300);

        $(this).on('mouseleave',function(){
          $(this).children('div').stop().slideUp(300);
          $(this).removeClass('gnbhover');
        });
      });

      gnbMenu.on('focusin', function(e){
        e.preventDefault();
         $(this).addClass('gnbhover');
         $(this).children('a').addClass('ahover');
        $(this).children('div').stop().slideDown(300);
        
        $(this).on('focusout',function(){
           $(this).removeClass('gnbhover');
           $(this).children('a').removeClass('ahover');
          $(this).children('div').stop().slideUp(300);
        });
      });

 }

      // under.on('mouseleave', function(e){
      //   e.preventDefault();
      //   $(this).children(under).slideUp(500);
      // });

// 리사이즈 
$(window).on('resize',function(e){
  var nowW = $(window).outerWidth();
  if(winW !== nowW){
    location.reload();
  }
});







})(jQuery);