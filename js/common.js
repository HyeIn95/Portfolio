$(document).ready(function () {
  $(".scrollToSection").click(function (e) {
    e.preventDefault(); // 기본 이벤트 방지
    var targetSection = $(this).data("section"); // 클릭한 링크의 data-section 속성 값을 가져옴
    var targetOffset = $(targetSection).offset().top; // 해당 섹션의 상단 위치를 가져옴
    // 스크롤 애니메이션
    $("html, body").animate({
      scrollTop: targetOffset
    }, 1000);
  });

  // .gnb
  $(".depth2").hide();
  $(".depth2_bg").hide();
  $("#header").mouseenter(function () {
    $("#header h1 img").attr("src", "images/common/logo_red.png")
  });
  $("#header").mouseleave(function () {
    $("#header h1 img").attr("src", "images/common/logo_black.png")
  });
  $(".gnb > li").eq(0).mouseenter(function () {
    $(this).find(".depth2").stop().fadeIn();
    $(".depth2_bg").stop().fadeIn();
  });
  $(".gnb > li").eq(0).mouseleave(function () {
    $(this).find(".depth2").stop().fadeOut();
    $(".depth2_bg").stop().fadeOut();
  });
  // .util .lang
  $(".util .lang").hide();
  $(".util .util_bg").hide();
  $(".util .lang_span").mouseenter(function () {
    $(".util .lang").stop().slideDown();
    $(".util_bg").stop().fadeIn();
  });
  $("#header").mouseleave(function () {
    $(".util .lang").stop().fadeOut();
    $(".util_bg").stop().fadeOut();
  });
  // .util .ham
  $(".ham").hide();
  $(".ham_menu").click(function () {
    $(".ham").stop().show();
    $('body').css('overflow-y', 'hidden');
  });
  $(".ham_close").click(function () {
    $(".ham").stop().hide();
    $('body').css('overflow-y', 'scroll');
  });

  // .store
  $(".store_depth2").hide();
  $(".footer_sns > ul > li:last-child").click(function () {
    $(".store_depth2").stop().toggle();
  });


});