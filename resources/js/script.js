/* For the sticky navigation */

$(document).ready(function () {
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    }, {
      offset: "80px",
    }
  );
});

/* Scroll on buttons */
$(".js--scroll-to-photos").click(function () {
  $("html, body").animate({
      scrollTop: $(".js--section-photos").offset().top
    },
    1000
  );
});

$(".js--scroll-to-start").click(function () {
  $("html, body").animate({
      scrollTop: $(".js--section-features").offset().top
    },
    1000
  );
});

/* Up buttom */
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    if ($("#upbutton").is(":hidden")) {
      $("#upbutton").css({
        opacity: 1
      }).fadeIn("slow");
    }
  } else {
    $("#upbutton").stop(true, false).fadeOut("fast");
  }
});
$("#upbutton").click(function () {
  $("html, body").stop().animate({
    scrollTop: 0
  }, 300);
});

jQuery(document).ready(function () {
  jQuery(".reason").addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeIn",
    offset: 100,
  });
});

$(".reason").waypoint(function (direction) {
  $(".reason").addClass("animated fadeIn");
});

/* Smooth Scrolling */

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
      this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate({
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

$(".mail-btn").on("click touchstart", function () {
  $(this).addClass("fly");
  that = this
  setTimeout(function () {
    $(that).removeClass("fly");
  }, 5400)
});