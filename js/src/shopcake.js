//  shopcake.js

(function($){

var winW = $(window).outerWidth();
var cake_pdBox = $('.cake_pd_box');
var tab = $('.tab');
var tab1 = cake_pdBox.children('div').eq(0);
var list = $('.list');
var cake = $('.cake');
var cakeLen = cake.length;
var cakeT = $('.cake_tap');
var cakeLi = cakeT.find('li');
var cakeMenu = cakeLi.children('a');
var more = $('.more');

// "use strict";
// var v = "Hi!  I'm a strict mode script!";

//  반응형 marginRight 값 
// var listMr30 = function(k){
//   for(var i = 0; i<list.length; i+=1){
//     var MR = i % k;
//     if(MR == 0){
//       list.eq(i-1).css({marginRight:'30px'});
//     }
//   }
// };

var listSize = function(){
  if (winW>768 && winW <=950) {
    tab.css({width:'96%'});
    list.css({width:'30.4%'}); 
  }else if (winW>950 && winW <= 1250) {
    tab.css({width:'910px'});
  };
};
var listMr0 = function(k,l){
  $.each(tab,function(i,v){
      list = $(this).children('div');
      var p = l+'%' || '30px';
      list.css({marginRight:p});    
    listSize();
    for(var i = 0; i<list.length; i+=1){
      var MR = i % k;
      if(MR == 0){
        list.eq(i-1).css({marginRight:0});
      }
    }
  });
};

//  more btn
var View = function(v){
  var k;
  (v >= cakeLen) ?   k = cakeLen-1 :  k = v;
    cake.eq(k).show();
    cake.eq(k).prevAll().show();
};
var Hide = function(v) {
  cake.eq(v).nextAll().not(more).hide();
};

// 반응형 list 처리
var j = 0;
if (winW<=768) {
  listMr0(2);

  j = 5;
  Hide(j);
  more.on('click',function(e){
    e.preventDefault();
    j += 4;
    View(j);
    if (j == 17) {
      more.hide();
    };
  });

}else if (winW >768 && winW <= 1250){
  listMr0(3, 3);

  j = 5;
  Hide(j);
  more.on('click',function(e){
    e.preventDefault();
    j += 3;
    View(j);
    if (j == 17) {
      more.hide();
    };
  }); 
}else{
  listMr0(4);
  
  j = 11;
  Hide(j);
  more.on('click',function(e){
    e.preventDefault();
    j += 8;
    View(j);
    if (j >= 17) {
      more.hide();
    };
  });
}


// cakeMenu tab btn
cakeMenu.on('click',function(e){
  e.preventDefault();

  var i = $(this).parent('li').index();
   cakeLi.eq(i).children('a').addClass('active');
   cakeLi.eq(i).siblings().children('a').removeClass('active');
   tab.eq(i).css({display:'block'});
   tab.eq(i).siblings().css({display:'none'});
});



})(jQuery);