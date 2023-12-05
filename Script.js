$(document).ready(function() {
    var images = ["img/1-A.png", "img/1-B.png", "img/1-C.png"]; 
    var currentImageIdx = 0;

    function updateGalleryImage(index) {
        $('.gallery-image').attr('src', images[index]);
        // Update the description based on the image
        $('.image-description').text("Description for image " + (index + 1));
    }

    $('.next-button').click(function() {
        currentImageIdx = (currentImageIdx + 1) % images.length;
        updateGalleryImage(currentImageIdx);
    });

    $('.prev-button').click(function() {
        currentImageIdx = (currentImageIdx - 1 + images.length) % images.length;
        updateGalleryImage(currentImageIdx);
    });

    updateGalleryImage(0);
});


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
