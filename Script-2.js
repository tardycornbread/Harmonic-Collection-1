$(document).ready(function() {
    $('.Dream').each(function() {
      var matrixInterval;
      var $overlayText = $(this).find('.overlay-text');
      
      function startMatrixEffect() {
        matrixInterval = setInterval(function() {
          var randomText = '';
          var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          for (var i = 0; i < 10; i++) {
            randomText += possible.charAt(Math.floor(Math.random() * possible.length));
          }
          $overlayText.text(randomText);
        }, 50); // Change text every 50ms
      }
  
      function stopMatrixEffect() {
        clearInterval(matrixInterval);
        $overlayText.text('Your Overlay Text Here'); // Set your specific overlay text
      }
  
      startMatrixEffect();
  
      $(this).hover(stopMatrixEffect, startMatrixEffect);
    });
  });