// bannerBox.js
(function($){

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
  var autoStart;

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

})(jQuery);