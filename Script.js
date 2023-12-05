$(document).ready(function() {
    $('.text-container').on('click', function() {
      $(this).addClass('text-container-animate');
    });
  });


  $('.image-container').mousemove(function(e) {
    var amountMovedX = (e.pageX * -1 / 20);
    var amountMovedY = (e.pageY * -1 / 20);
    $(this).children('img').css('transform', 'rotateY(' + amountMovedX + 'deg) rotateX(' + amountMovedY + 'deg)');
  });

  document.addEventListener('DOMContentLoaded', function() {
    var inceptionContainer = document.getElementById('inceptionContainer');
    var images = inceptionContainer.getElementsByClassName('Dream');
    var foldAngle = 20; // Adjust this value as needed

    inceptionContainer.addEventListener('click', function() {
        for (let i = 0; i < images.length; i++) {
            images[i].style.transform = `rotateX(${i * foldAngle}deg)`;
        }
    });
});
