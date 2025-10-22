$(document).ready(function () {

   // Load the top page navbar
   $("#page-navbar").load("navbar.html", function () {
      console.log("Navbar loaded.");
   });

   // Write the page footer
   $("#footer").load("footer.html", function () {
      console.log("Footer loaded.");

      // Add the current year to copyright
      const thisYear = new Date().getFullYear();
      $("#footer-year").text(thisYear);
   });

   // Load the acknowledge footer
   $("#acknowledge").load("acknowledge.html", function () {
      console.log("Acknowledge banner loaded.");
   });

   // Scroll to top button ---------------------------------------------

   // write the button to the page
   window.onscroll = function () {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
         document.getElementById("back-to-top").style.display = "block";
      } else {
         document.getElementById("back-to-top").style.display = "none";
      }
   };

   // Scroll to top
   $("#back-to-top").on("click", function (event) {
      if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
         // Figure out element to scroll to
         var target = $(this.hash);
         target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
         // Does a scroll target exist?
         if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $("html, body").animate(
               {
                  scrollTop: target.offset().top,
               },
               300,
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

   // Open all courses at once
   // open all accordion panels for possible printing or close -----------
   $(".expander").on("click", function () {
      if ($(".expander").text() === "Open all") {
         // Change the button text
         $(".expander").text("Close all");
         // show all accordions
         $("#wrapper .collapse").collapse("show");
         $("#teaching-section .btn").prev().find("i").addClass("fa-rotate-45");
         // write text to button
         $(this).empty().append("<i class='fa-duotone fa-minus mr-2'></i>Close all");
      } else {
         // Change the button text
         $(".expander").text("Open all");
         // hide all accordions
         $("#wrapper .collapse").collapse("hide");
         $("#teaching-section .btn").prev().find("i").removeClass("fa-rotate-45");
         // write text to button
         $(this).empty().append("<i class='fa-duotone fa-plus mr-2'></i>Open all");
      }
   });

});
// document.ready closes