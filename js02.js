(function($, window) {
  $(function() {
      //課題1
      $('h2').remove();
      
      //課題2
      $('#text').click(function() {
        $('#index').text();
      });
      
      $('#html').click(function() {
        $('#index').html();
      });
      
      //課題3
      $('#index').append('<li>メソッド</li>');
      
      //課題4
      $('#index').find('li').each(function() {
        alert($(this).text().length);
      });
      
      //課題5
      $('#index').find('li').each(function() {
        var count='['+($(this).text().length)+'文字'+']';
        $(this).append(count);
      });
  });
})(jQuery, window);