$(document).ready(function () {

  // character
  $('#character .inner > div').eq(1).hide();
  $('#character select option:eq(0)').prop('selected', true);

  // ---> fade 하면 번쩍거려서 show로 바꿈
  $('#character select').change(function () {
    var selectedValue = $(this).val();
    if (selectedValue === 'valorant') {
      $('.character_valo').show();
      $('.character_valo .position li').removeClass('click_position');
      $('.character_valo .position li').eq(0).addClass('click_position');
      $('.character_valo .character_container').hide();
      $('.character_valo .character_container').eq(0).show();
      $('.character_lol').hide();
    } else if (selectedValue === 'legend') {
      $('.character_valo').hide();
      $('.character_lol .position li').removeClass('click_position');
      $('.character_lol .position li').eq(0).addClass('click_position');
      $('.character_lol .character_container').hide();
      $('.character_lol .character_container').eq(0).show();
      $('.character_lol').show();
    }
  });

  // valo --> fade효과 번쩍이는 느낌 때문에 애니메이트 추가함
  $('.character_valo .character_container:not(:first-of-type)').hide();
  $('#character ul.position li').eq(0).addClass('click_position');
  $('.character_valo ul.position li').click(function () {
    var positionNum = $(this).index();
    $('.character_valo .character_container').fadeOut(200);
    $('.character_valo .character_container').eq(positionNum).css('opacity', 10).show().animate({ opacity: 1 }, 100);
    $('.character_valo .position li').removeClass('click_position');
    $('.character_valo .position li').eq(positionNum).addClass('click_position');
  });
  // lol
  $('.character_lol .character_container:not(:first-of-type)').hide();
  $('#character ul.position li').eq(0).addClass('click_position');
  $('.character_lol ul.position li').click(function () {
    var positionNum = $(this).index();
    $('.character_lol .character_container').fadeOut(200);
    $('.character_lol .character_container').eq(positionNum).css('opacity', 10).show().animate({ opacity: 1 }, 100);
    $('.character_lol .position li').removeClass('click_position');
    $('.character_lol .position li').eq(positionNum).addClass('click_position');
  });


});