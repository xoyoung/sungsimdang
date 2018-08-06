//  product_arrow.js

(function($){
  
  var zero = 0;

// product 선택자

  var arrowb = $('.arrow');
  var arrow = arrowb.children('button');
  var prev = $('.prev');
  var next = $('.next');

  var pdB = $('.pd_box');
  var pdul = pdB.children('ul');
  var pd = pdul.children('li');
  var pd_clone = pdul.children('li').eq(0).clone();
  pdul.append(pd_clone);
  pdul = pdB.children('ul');
  pd = pdul.children('li');
 var pdLeng = pd.length;
  console.log(pdLeng);


//  product arrow

arrow.on('click',function(e){
  e.preventDefault();
  console.log(zero);
  if($(this)[0] === prev[0] && zero >= 0) {
    zero-=1;
    var move = zero * -100 + '%'; 

    if(zero < 0){
      pdul.css({marginLeft:(pdLeng-1) * -100 + '%'});
      pdul.stop().animate({marginLeft: (pdLeng-2) * -100 + '%'},500);
      zero = pdLeng-2;
    }else{
      pdul.stop().animate({marginLeft: move },500);
    }

  }else if($(this)[0] === next[0] && zero <= pdLeng-1){
    zero+=1;
    var move = zero * -100 + '%';

    if( zero >= pdLeng-1){
      pdul.stop().animate({marginLeft: move },500,function(){
        pdul.css({marginLeft:0});
        zero = 0;
      });
    }else{
      pdul.stop().animate({marginLeft: move },500);
    }
    
  }

});

})(jQuery);