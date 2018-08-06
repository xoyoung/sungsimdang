//  p1_ssd_main.js

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

// banner indicator 선택자
  var indi         = $('.indicator');
  var indiLi       = indi.children('li');
  
  var bannerWW     = $('#bannerBox');
  var bannerW      = $('.banner_con');
  var bannerb      = bannerW.children('ul');
  var banner       = bannerb.children('li');
  var banner_clone = bannerb.children('li').eq(0).clone();
  
  bannerb.append(banner_clone);
 console.log(banner_clone);
  bannerb          = bannerW.children('ul');
  banner           = bannerb.children('li');
  var zero         = 0;



// product 선택자

  var arrowb = $('.arrow');
  var arrow = arrowb.children('button');
  var prev = $('.prev');
  var next = $('.next');

  var pdB = $('.pd_box');
  var pdul = pdB.children('ul');
  var pd = pdul.children('li');
  var pdLeng = pd.length;
  console.log(pdLeng);



var slideFn = function(zero){

var per = zero * -100 + '%';
if(zero < banner.length-1){
bannerb.stop().animate({marginLeft:per}, 500);  
}else{
  zero = 0;
 bannerb.stop().animate({marginLeft:per}, 500, function(){
  $(this).css({marginLeft:0});
 });   
}
indiLi.eq(zero).addClass('active');
indiLi.eq(zero).siblings('li').removeClass('active');
};
slideFn(zero);


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

// bannerslide

indiLi.on('click',function(e){
  e.preventDefault();

  zero = $(this).index();
  slideFn(zero);
});

// bannerslide _auto


var StartSlide = function(){
  autoStart = setInterval(function(){
              (zero < banner.length-1) ? zero+=1 : zero=1;
              slideFn(zero);}, 2500);
};
var StopSlide = function(){clearInterval(autoStart);};

StartSlide();
console.log(StartSlide);
console.log(banner.length-1);

bannerWW.off('mouseout').on('mouseout',function(){
  StartSlide();
});
bannerWW.off('mouseover').on('mouseover',function(){
  StopSlide();
});

//  product arrow

arrow.on('click',function(e){
  e.preventDefault();

  if($(this)[0] === prev[0] && zero > 0) {
    zero-=1; 
  }else if($(this)[0] === next[0] && zero < pdLeng-1){
    zero+=1;
  }
var move = zero * -100 + '%';
pdul.stop().animate({marginLeft: move },500);

});


  
 

})(jQuery);