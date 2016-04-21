'use strict';
var main = function () {
    
    var overlay = $('#overlay');
	$('.typeimage>.view').click(function (event) {
      event.preventDefault();
      var imgPath = $(this).attr('href');
//      alert('hii' + $(this).attr('href'));
      var imgtag = '<img src="' + imgPath +'" >';
      overlay.html(imgtag);
      overlay.fadeIn(300);
    });
    
    overlay.click(function () {
        overlay.hide();
        overlay.html('');
      }
    );
};
// end of main function

$(document).ready(main);
