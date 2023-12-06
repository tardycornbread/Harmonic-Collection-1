$(document).ready(function() {
  
  $('.text-container').on('click', function() {
      $(this).addClass('text-container-animate');
      
      setTimeout(() => $(this).removeClass('text-container-animate'), 2000);
  });


  $('.image-container').mousemove(function(e) {
      var amountMovedX = (e.pageX * -1 / 20);
      var amountMovedY = (e.pageY * -1 / 20);
      $(this).children('img').css('transform', `rotateY(${amountMovedX}deg) rotateX(${amountMovedY}deg)`);
  });

  
  var inceptionContainer = $('#inceptionContainer');
  var images = inceptionContainer.find('.Dream');
  var foldAngle = 20;

  inceptionContainer.click(function() {
      images.each(function(i) {
          $(this).css('transform', `rotateX(${i * foldAngle}deg)`);
      });
  });

  $('.Dream').click(function() {
      var textContainer = $('.text-container');
      textContainer.addClass('racing-text');

     
      setTimeout(function() {
          textContainer.removeClass('racing-text');
      }, 2000);
  });
});