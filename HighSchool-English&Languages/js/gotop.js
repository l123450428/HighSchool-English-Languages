$(window).scroll(function(){
  if ($(this).scrollTop() > 150) { // If the scroll equal 150px
    $(".gotop").css({width:"40px",borderRadius:"0"}); // Show the button by give it (width 40px and border-radius 0px)
  } else { // else (if the scroll <= 150px )
    $(".gotop").css({width:"0",borderRadius:"50% 0 0 50%"}); // Return button style to default
  }
});
$('.gotop').click(function () { // When user click on the button
  $("body,html").animate({ scrollTop: "0" },  500); // Return scroll to 0
  $("body,html").css({paddingTop:"20px"});
  // After .5s (when window scroll equal 0)
  setTimeout(function(){
    $("body,html").animate({ 
      'padding-top' : 0,
    }, "fast");
  }, 500);
});

$(window).scroll(function(){
  if ($(this).scrollTop() > 150) { // If the scroll equal 150px
    $(".gotop_m").css({width:"40px",borderRadius:"0"}); // Show the button by give it (width 40px and border-radius 0px)
  } else { // else (if the scroll <= 150px )
    $(".gotop_m").css({width:"0",borderRadius:"50% 0 0 50%"}); // Return button style to default
  }
});
$('.gotop_m').click(function () { // When user click on the button
  $("body,html").animate({ scrollTop: "0" },  500); // Return scroll to 0
  $("body,html").css({paddingTop:"20px"});
  // After .5s (when window scroll equal 0)
  setTimeout(function(){
    $("body,html").animate({ 
      'padding-top' : 0,
    }, "fast");
  }, 500);
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


  $(function(){
  
    $('#goiframe').click(function(){
      $('html,body').animate({scrollTop:$('#iframetop').offset().top}, 800);
    });
  });
});