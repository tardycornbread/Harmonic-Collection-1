$(document).ready(function() {
  $('.filter').click(function() {
      var filter = $(this).data('filter');

      if (filter === 'All') {
          $('.Dream').show();
      } else {
          $('.Dream').each(function() {
              if ($(this).data('mood') === filter) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
          });
      }
  });
});

