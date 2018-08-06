//  shop_slide.js
(function($){

var wrap = $('.pd_box');
var pdbox = wrap.find('ul');
console.log(pdbox);
if ($(window).outerWidth() > 480 && $(window).outerWidth() <= 650) {
 pdbox.css({width:'300%'});
 pdbox.children('li').css({minWidth:'140px'});
}

// var newN = $('.n_box');
var RotateSlide = function(box) {
  var pdcon = $(box);
  // var pdB = pdcon.children('ul');
  var pdi = pdcon.find('.center');
  var pdB = pdi.find('ul');
  // var pd = pdB.children('li');

  var arrowB = pdi.find(".arrow_box");
  var arrow = arrowB.children('button');
  var prev = pdcon.find('.prev');
  var next = pdcon.find('.next');


  arrow.on('click',function(e){
    e.preventDefault();
    var pd = pdB.children('li');
  console.log(pd);
    
    if ($(this)[0] === prev[0]) {
      pd.eq(-1).insertBefore(pd.eq(0));
    }else if ($(this)[0] === next[0]) {
      pd.eq(0).insertAfter(pd.eq(-1));
    }
  });
};

RotateSlide('.n_box');
RotateSlide('.h_box');



/*

var hot = $('.hot_wrap');
var pdcon_h = $('.h_con');
var pdB_h = pdcon_h.children('ul');
var pd_h = pdB_h.children('li');

var arrowB_h = hot.find($(".arrow_box"));
var arrow_h = arrowB_h.children('button');
var prev_h = $('.prev');
var next_h = $('.next');
console.log(arrowB_h);


arrow_h.on('click',function(e){
  e.preventDefault();
var pd_h = pdB_h.children('li');
console.log(pd_h);
if ($(this)[0] === prev_h[0]) {
pd_h.eq(4).insertBefore(pd_h.eq(0));
}else if ($(this)[0] === next_h[0]) {
pd_h.eq(0).insertAfter(pd_h.eq(4));
}
});*/

})(jQuery);