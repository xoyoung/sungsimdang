// brand_slide.js

(function($){

var slideCon = $('.slide_con');
var brand = slideCon.children('dl');
var brand_l = brand.length;

var arrowb = $('.arrow_box');
var arrow = arrowb.children('button');
var prev = $('.prev');
var next = $('.next');

var bW = brand.outerWidth()/2;
console.log(bW);



slideCon.css({marginLeft:-3*bW+'px'});

var zero = 0;

arrow.on('click',function(e){
  e.preventDefault();

  if($(this)[0] === prev[0] && zero > 0) {
    zero-=1; 
  }else if($(this)[0] === next[0] && zero < brand_l-1){
    zero+=1;
  }
var move = zero * -100 + '%';
slideCon.stop().animate({marginLeft: move },500);

});

if(winW < 768){}


})(jQuery);