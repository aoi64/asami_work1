
$(function() {
    $('#Toggle').click(function() {
        $(this).toggleClass('active');
		$("#NavMenu").slideToggle(300);
  $("#NavMenu").children("a").removeAttr("href");

});


 if ($(this).hasClass('active')) {
            $('#NavMenu').addClass('active');
        } else {
            $('#NavMenu').removeClass('active');
        }

});