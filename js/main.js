$(function(){
  const sideBarToggle = $('[data-toggle="collapse"]');

  sideBarToggle.on('click', function () {
    $(this).parent().toggleClass('collapsed')
  });
});