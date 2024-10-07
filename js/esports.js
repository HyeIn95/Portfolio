$(document).ready(function () {

  const date_list = new Swiper('.date_list', {
    loop: true,
    speed: 500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    }, direction: 'vertical',
  });

  $('.date_lol').hide();
  $('.esports_lol').hide();
  $('#news_lol').hide();
  $('#main_visual select').change(function () {
    var selectedValue = $(this).val();
    if (selectedValue === 'valorant') {
      $('.date_valo').show();
      $('.date_lol').hide();
      $('.esports_valo').show();
      $('.esports_lol').hide();
      $('#news_valo').show();
      $('#news_lol').hide();
      $('#main_visual > .inner').css('background-image', "url('images/sub/esports/valo/bg.jpg')");
    } else if (selectedValue === 'legend') {
      $('.date_valo').hide();
      $('.date_lol').show();
      $('.esports_valo').hide();
      $('.esports_lol').show();
      $('#news_valo').hide();
      $('#news_lol').show();
      $('#main_visual > .inner').css('background-image', "url('images/sub/esports/lol/bg.jpg')");
    }
  });


});