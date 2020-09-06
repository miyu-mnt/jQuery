(function($, window) {
    function emailCheck(email) {
      if (email == '') {
        alert('メールアドレスを入力してください');
      } else if (email.indexOf('@') < 0) {
        alert('メールアドレスには必ず「@」が必要です');
      }
    }
    
    function passwordCheck(password) {
      if (password == '') {
        alert('パスワードを入力してください');
      } else if (password.length < 6) {
        alert('パスワードは6文字以上です');
      }
    }
  
  $('#login').click(function() {
    emailCheck($('#email').val());
    passwordCheck($('#password').val());
  });
  
})(jQuery, window);