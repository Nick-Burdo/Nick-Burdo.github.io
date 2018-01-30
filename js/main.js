$(function(){
  $('[data-toggle="collapse"]').click(function () {
    $(this).parent().toggleClass('collapsed')
  });

  $('input[name="viewOptions"]').change(function () {
    $('.container-thumb, .container-inline').toggle();
  });

  $('input[name="userFilter"]').change(function () {
    $('.table-filter').toggle();
  });
});