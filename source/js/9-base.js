'use strict';
var main = function () {
  
  // Gallery
  var $allThumbs = $('.gallery').children();
  var currentItem = '';
  var currentItemOrder = 0;
  var $overlay = $('#overlay');
  
  // gets the order number of a particular thumbnail
  var getThumbOrder = function (item) {
    for(var i = 0; i<$allThumbs.length; i++){
      if($allThumbs[i] === item) {
        return i;
      }
    }
    return -1;
  };
  
  var drawItem = function() {
    if($($allThumbs[currentItemOrder].children[1]).hasClass('typeimage')) {
      // its an image
      currentItem = $allThumbs[currentItemOrder].children[1].children[1].href;
      var imgtag = '<img src="' + currentItem +'" >';
      $overlay.html(imgtag);    
      $overlay.children('img').hide().fadeIn(400);
    } else if($($allThumbs[currentItemOrder].children[1]).hasClass('typevideo')) {
      // its a video (iframe)
      var $wrapper = $('<div class="videoWrapper"></div>');
      var $currentItem = $($allThumbs[currentItemOrder].children[1].children[2]).clone();
      $overlay.html('');
      $currentItem.removeClass('hidden');
      $wrapper.append($currentItem);
      $overlay.append($wrapper);     
    }
  }
  
  var nextItem = function(){
    if(currentItemOrder+1 < $allThumbs.length){
      currentItemOrder++;
    } else {
      currentItemOrder = 0;
    }
    drawItem();
  }
  
  var prevItem = function(){
    if(currentItemOrder > 0){
      currentItemOrder--;
    } else {
      currentItemOrder = $allThumbs.length-1;
    }
    drawItem();
  }
  
  // events
  $('.thumb-over>.view').click(function (event) {
    event.preventDefault();
    currentItemOrder = getThumbOrder($($(this).parent()).parent()[0]);
    drawItem();
    $overlay.fadeIn(300);
  });

  $overlay.click(function () {
    $overlay.hide();
    $overlay.html('');
  }
  );
  $('html').keydown(function( event ) {
    if($allThumbs.length>0){
      if(event.which === 39){
        nextItem();
        drawItem();      
      }
      if(event.which === 37){
        prevItem();
        drawItem();
      }
      if(event.which === 32){
        nextItem();
        drawItem();
      }
    }
  });
};
// end of main function

$(document).ready(main);
