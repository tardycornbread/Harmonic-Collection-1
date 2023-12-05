$(document).ready(function() {
  // Text container click animation
  $('.text-container').on('click', function() {
      $(this).addClass('text-container-animate');
      // Optional: Remove the class after animation ends to reset the animation
      setTimeout(() => $(this).removeClass('text-container-animate'), 2000);
  });

  // 3D movement on image container hover
  $('.image-container').mousemove(function(e) {
      var amountMovedX = (e.pageX * -1 / 20);
      var amountMovedY = (e.pageY * -1 / 20);
      $(this).children('img').css('transform', `rotateY(${amountMovedX}deg) rotateX(${amountMovedY}deg)`);
  });

  // Inception Container click folding effect
  var inceptionContainer = $('#inceptionContainer');
  var images = inceptionContainer.find('.Dream');
  var foldAngle = 20;

  inceptionContainer.click(function() {
      images.each(function(i) {
          $(this).css('transform', `rotateX(${i * foldAngle}deg)`);
      });
  });

  // Racing text effect on clicking a Dream element
  $('.Dream').click(function() {
      var textContainer = $('.text-container');
      textContainer.addClass('racing-text');

      // Optional: Remove the class after animation ends to reset the animation
      setTimeout(function() {
          textContainer.removeClass('racing-text');
      }, 2000);
  });
});