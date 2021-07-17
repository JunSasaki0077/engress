$(function () {
  $(".qanda__title").on("click", function () {
    $(this).next().slideToggle();
    $(this).find(".qanda__btn").toggleClass("js-open");
  });
});
