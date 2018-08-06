// brand_slide.js

(function($){

var winW = $(window).outerWidth();
var slideW = $('.b_slide_wrap');

var slideCon = $('.slide_con');
var brand = slideCon.children('dl');

var arrowb = $('.arrow_box');
var arrow = arrowb.children('button');
var prev = $('.prev');
var next = $('.next');

var b1 = $('.b1');
var b2 = $('.b2'); 
var bW = b1.outerWidth()/2;
var bwSecon = b2.outerWidth()/2;

console.log(bW);
console.log(bwSecon);
console.log(brand);

// brand slide center

if(winW > 480 && winW <= 768){  
  slideCon.css({marginLeft:-2*bW-1.5*bwSecon+'px'});
}else if(winW > 768 && winW <= 1099){
  
 if(slideW.outerWidth() >1000){
    slideCon.css({marginLeft:-2*bW-0.45*bwSecon+'px'});
  }else if(slideW.outerWidth() >940 && slideW.outerWidth() <=1000){
    slideCon.css({marginLeft:-2*bW-0.7*bwSecon+'px'});
  }else if(slideW.outerWidth() >840 && slideW.outerWidth() <=940){
    slideCon.css({marginLeft:-2*bW-0.9*bwSecon+'px'});
  }else if(slideW.outerWidth() <=840){
    slideCon.css({marginLeft:-2*bW-1.18*bwSecon+'px'});
  }
}else if(winW >1099 && winW <= 1680){
 slideW.css({width:'1100px'});
 slideCon.css({marginLeft:-2.4*bW+'px'});
 if (winW >1300) {
   arrowb.css({width:'118%',left:'-100px'});
 }
}else if(winW >1680){
if(winW >= 1760 && winW <1860){
   arrowb.css({width:'105.5%',left: -winW/40+'px'});
}else if (winW >1860) {
   arrowb.css({width:'111%',left:'-94px'});
 }
}

// brand arrow btn

arrow.on('click',function(e){
  e.preventDefault();
brand = slideCon.children('dl');

  if($(this)[0] === prev[0]) {
brand.eq(7).insertBefore(brand.eq(0));
  }else if($(this)[0] === next[0]){
 brand.eq(0).insertAfter(brand.eq(7));
  }
});

})(jQuery);