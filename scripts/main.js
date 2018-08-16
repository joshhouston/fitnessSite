

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


//*******************************

var hideThis = document.getElementById('hideMe');
var activator = document.getElementById('hide');
var x = window.matchMedia("(max-width: 1040px)");


function hideIt(){
  if (x.matches) {
    hideThis.style.display = "none";
  }else if (hideThis.style.display === "none" && !x.matches) {
    hideThis.style.display = "flex";
  }else {
    hideThis.style.display = "none";
  }

}















//*************
