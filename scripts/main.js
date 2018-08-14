

// ******** Navbar ***************
window.onload = function() {
  $('.button_container').click(function() {
    $('.button_container').toggleClass('active');
    $('.menu').toggleClass('open');
  });
}

$('.landing').mousemove(function(e){
    var amountMovedX = (e.pageX * 1 / 20);
    var amountMovedY = (e.pageY * 1 / 20);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});



// ********** Carousel ***********

$(function(){
  $('.carousel-item').eq(0).addClass('active');
  var total = $('.carousel-item').length;
  var current = 0;
  $('#moveRight').on('click', function(){
    var next=current;
    current= current+1;
    setSlide(next, current);
  });
  $('#moveLeft').on('click', function(){
    var prev=current;
    current = current- 1;
    setSlide(prev, current);
  });
  function setSlide(prev, next){
    var slide= current;
    if(next>total-1){
     slide=0;
      current=0;
    }
    if(next<0){
      slide=total - 1;
      current=total - 1;
    }
           $('.carousel-item').eq(prev).removeClass('active');
           $('.carousel-item').eq(slide).addClass('active');
      setTimeout(function(){

      },800);



    console.log('current '+current);
    console.log('prev '+prev);
  }
});

//*******************************

var hideThis = document.getElementById('hideMe');
var activator = document.getElementById('hide');

function hideIt(){
  if (hideThis.style.display === "none") {
    hideThis.style.display = "flex";
  }else {
    hideThis.style.display = "none";
  }
}















//*************
