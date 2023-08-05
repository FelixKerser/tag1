$(window).on("scroll", function() {
    $('.header-pc__wrapper').toggleClass("header-bg", $(this).scrollTop() > 10);
  });