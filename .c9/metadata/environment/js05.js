{"filter":false,"title":"js05.js","tooltip":"/js05.js","undoManager":{"mark":82,"position":82,"stack":[[{"start":{"row":0,"column":0},"end":{"row":9,"column":19},"action":"insert","lines":["(function($, window) {","  $(function() {","    $('#login').on('click', function(e) {","      var email = $('#email').val(),","          password = $('#password').val();","      alert(email);","      alert(password);","    });","  });","})(jQuery, window);"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":9,"column":19},"action":"remove","lines":["(function($, window) {","  $(function() {","    $('#login').on('click', function(e) {","      var email = $('#email').val(),","          password = $('#password').val();","      alert(email);","      alert(password);","    });","  });","})(jQuery, window);"],"id":2}],[{"start":{"row":0,"column":0},"end":{"row":19,"column":19},"action":"insert","lines":["(function($, window) {","  $(function() {","    $('#login').on('click', function(e) {","      var email = $('#email').val(),","          password = $('#password').val();","      // alert(email);","      // alert(password);","      if (email == '') {","        alert('メールアドレスを入力してください');","      } else if (email.indexOf('@') < 0) {","        alert('メールアドレスには必ず「@」が必要です');","      }","      if (password == '') {","        alert('パスワードを入力してください');","      } else if (password.length < 6) {","        alert('パスワードは6文字以上です');","      }","    });","  });","})(jQuery, window);"],"id":3}],[{"start":{"row":1,"column":16},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"insert","lines":["    "]},{"start":{"row":2,"column":4},"end":{"row":3,"column":0},"action":"insert","lines":["",""]},{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"insert","lines":["    "]},{"start":{"row":3,"column":4},"end":{"row":4,"column":0},"action":"insert","lines":["",""]},{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"insert","lines":["    "]},{"start":{"row":4,"column":4},"end":{"row":5,"column":0},"action":"insert","lines":["",""]},{"start":{"row":5,"column":0},"end":{"row":5,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["f"],"id":5},{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["u"]},{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["n"]}],[{"start":{"row":2,"column":4},"end":{"row":2,"column":7},"action":"remove","lines":["fun"],"id":6},{"start":{"row":2,"column":4},"end":{"row":2,"column":12},"action":"insert","lines":["function"]}],[{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":[" "],"id":7},{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":["e"]},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["m"]},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["a"]},{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["i"]},{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["l"]}],[{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":["C"],"id":8},{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"insert","lines":["h"]},{"start":{"row":2,"column":20},"end":{"row":2,"column":21},"action":"insert","lines":["e"]},{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"insert","lines":["a"]}],[{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":["c"],"id":9},{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"insert","lines":["k"]}],[{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"remove","lines":["k"],"id":10},{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"remove","lines":["c"]},{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"remove","lines":["a"]}],[{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"insert","lines":["c"],"id":11},{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":["k"]}],[{"start":{"row":2,"column":23},"end":{"row":2,"column":25},"action":"insert","lines":["()"],"id":12}],[{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"insert","lines":["e"],"id":13},{"start":{"row":2,"column":25},"end":{"row":2,"column":26},"action":"insert","lines":["m"]},{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"insert","lines":["a"]},{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":["i"]},{"start":{"row":2,"column":28},"end":{"row":2,"column":29},"action":"insert","lines":["l"]}],[{"start":{"row":2,"column":30},"end":{"row":2,"column":31},"action":"insert","lines":[" "],"id":14},{"start":{"row":2,"column":31},"end":{"row":2,"column":32},"action":"insert","lines":["{"]}],[{"start":{"row":2,"column":32},"end":{"row":4,"column":5},"action":"insert","lines":["","      ","    }"],"id":15}],[{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"insert","lines":[";"],"id":16}],[{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"remove","lines":[";"],"id":17}],[{"start":{"row":3,"column":6},"end":{"row":3,"column":35},"action":"insert","lines":["var email = $('#email').val()"],"id":18}],[{"start":{"row":3,"column":35},"end":{"row":3,"column":36},"action":"insert","lines":[";"],"id":19}],[{"start":{"row":3,"column":36},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":20},{"start":{"row":4,"column":0},"end":{"row":4,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":14,"column":6},"end":{"row":18,"column":7},"action":"remove","lines":["if (email == '') {","        alert('メールアドレスを入力してください');","      } else if (email.indexOf('@') < 0) {","        alert('メールアドレスには必ず「@」が必要です');","      }"],"id":21}],[{"start":{"row":4,"column":6},"end":{"row":8,"column":7},"action":"insert","lines":["if (email == '') {","        alert('メールアドレスを入力してください');","      } else if (email.indexOf('@') < 0) {","        alert('メールアドレスには必ず「@」が必要です');","      }"],"id":22}],[{"start":{"row":13,"column":5},"end":{"row":23,"column":7},"action":"remove","lines":["('#login').on('click', function(e) {","      var email = $('#email').val(),","          password = $('#password').val();","      // alert(email);","      // alert(password);","      ","      if (password == '') {","        alert('パスワードを入力してください');","      } else if (password.length < 6) {","        alert('パスワードは6文字以上です');","      }"],"id":23}],[{"start":{"row":13,"column":4},"end":{"row":14,"column":7},"action":"remove","lines":["$","    });"],"id":24},{"start":{"row":13,"column":2},"end":{"row":13,"column":4},"action":"remove","lines":["  "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"remove","lines":["  "]},{"start":{"row":12,"column":4},"end":{"row":13,"column":0},"action":"remove","lines":["",""]},{"start":{"row":12,"column":2},"end":{"row":12,"column":4},"action":"remove","lines":["  "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":11,"column":4},"end":{"row":12,"column":0},"action":"remove","lines":["",""],"id":25},{"start":{"row":11,"column":2},"end":{"row":11,"column":4},"action":"remove","lines":["  "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":2},"action":"remove","lines":["  "]},{"start":{"row":10,"column":4},"end":{"row":11,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":11,"column":0},"end":{"row":11,"column":2},"action":"remove","lines":["  "],"id":26},{"start":{"row":10,"column":4},"end":{"row":11,"column":0},"action":"remove","lines":["",""]},{"start":{"row":10,"column":2},"end":{"row":10,"column":4},"action":"remove","lines":["  "]}],[{"start":{"row":10,"column":5},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":27},{"start":{"row":11,"column":0},"end":{"row":11,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":11,"column":2},"end":{"row":20,"column":5},"action":"insert","lines":["$(function() {","    function emailCheck(email) {","      var email = $('#email').val();","      if (email == '') {","        alert('メールアドレスを入力してください');","      } else if (email.indexOf('@') < 0) {","        alert('メールアドレスには必ず「@」が必要です');","      }","    }","  });"],"id":28}],[{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"remove","lines":["l"],"id":29},{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"remove","lines":["i"]},{"start":{"row":12,"column":15},"end":{"row":12,"column":16},"action":"remove","lines":["a"]},{"start":{"row":12,"column":14},"end":{"row":12,"column":15},"action":"remove","lines":["m"]},{"start":{"row":12,"column":13},"end":{"row":12,"column":14},"action":"remove","lines":["e"]}],[{"start":{"row":12,"column":13},"end":{"row":12,"column":14},"action":"insert","lines":["p"],"id":30},{"start":{"row":12,"column":14},"end":{"row":12,"column":15},"action":"insert","lines":["a"]},{"start":{"row":12,"column":15},"end":{"row":12,"column":16},"action":"insert","lines":["s"]},{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"insert","lines":["s"]},{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"insert","lines":["w"]},{"start":{"row":12,"column":18},"end":{"row":12,"column":19},"action":"insert","lines":["o"]},{"start":{"row":12,"column":19},"end":{"row":12,"column":20},"action":"insert","lines":["r"]},{"start":{"row":12,"column":20},"end":{"row":12,"column":21},"action":"insert","lines":["d"]}],[{"start":{"row":12,"column":31},"end":{"row":12,"column":32},"action":"remove","lines":["l"],"id":31},{"start":{"row":12,"column":30},"end":{"row":12,"column":31},"action":"remove","lines":["i"]},{"start":{"row":12,"column":29},"end":{"row":12,"column":30},"action":"remove","lines":["a"]},{"start":{"row":12,"column":28},"end":{"row":12,"column":29},"action":"remove","lines":["m"]},{"start":{"row":12,"column":27},"end":{"row":12,"column":28},"action":"remove","lines":["e"]}],[{"start":{"row":12,"column":27},"end":{"row":12,"column":28},"action":"insert","lines":["p"],"id":32},{"start":{"row":12,"column":28},"end":{"row":12,"column":29},"action":"insert","lines":["a"]},{"start":{"row":12,"column":29},"end":{"row":12,"column":30},"action":"insert","lines":["s"]},{"start":{"row":12,"column":30},"end":{"row":12,"column":31},"action":"insert","lines":["s"]},{"start":{"row":12,"column":31},"end":{"row":12,"column":32},"action":"insert","lines":["w"]},{"start":{"row":12,"column":32},"end":{"row":12,"column":33},"action":"insert","lines":["o"]}],[{"start":{"row":12,"column":32},"end":{"row":12,"column":33},"action":"remove","lines":["o"],"id":33},{"start":{"row":12,"column":31},"end":{"row":12,"column":32},"action":"remove","lines":["w"]},{"start":{"row":12,"column":30},"end":{"row":12,"column":31},"action":"remove","lines":["s"]}],[{"start":{"row":12,"column":30},"end":{"row":12,"column":31},"action":"insert","lines":["s"],"id":34},{"start":{"row":12,"column":31},"end":{"row":12,"column":32},"action":"insert","lines":["w"]},{"start":{"row":12,"column":32},"end":{"row":12,"column":33},"action":"insert","lines":["o"]}],[{"start":{"row":12,"column":33},"end":{"row":12,"column":34},"action":"insert","lines":["r"],"id":35},{"start":{"row":12,"column":34},"end":{"row":12,"column":35},"action":"insert","lines":["d"]}],[{"start":{"row":13,"column":26},"end":{"row":13,"column":27},"action":"remove","lines":["l"],"id":36},{"start":{"row":13,"column":25},"end":{"row":13,"column":26},"action":"remove","lines":["i"]},{"start":{"row":13,"column":24},"end":{"row":13,"column":25},"action":"remove","lines":["a"]},{"start":{"row":13,"column":23},"end":{"row":13,"column":24},"action":"remove","lines":["m"]},{"start":{"row":13,"column":22},"end":{"row":13,"column":23},"action":"remove","lines":["e"]}],[{"start":{"row":13,"column":22},"end":{"row":13,"column":23},"action":"insert","lines":["p"],"id":37},{"start":{"row":13,"column":23},"end":{"row":13,"column":24},"action":"insert","lines":["a"]},{"start":{"row":13,"column":24},"end":{"row":13,"column":25},"action":"insert","lines":["s"]},{"start":{"row":13,"column":25},"end":{"row":13,"column":26},"action":"insert","lines":["s"]},{"start":{"row":13,"column":26},"end":{"row":13,"column":27},"action":"insert","lines":["w"]},{"start":{"row":13,"column":27},"end":{"row":13,"column":28},"action":"insert","lines":["o"]},{"start":{"row":13,"column":28},"end":{"row":13,"column":29},"action":"insert","lines":["r"]},{"start":{"row":13,"column":29},"end":{"row":13,"column":30},"action":"insert","lines":["d"]}],[{"start":{"row":13,"column":14},"end":{"row":13,"column":15},"action":"remove","lines":["l"],"id":38},{"start":{"row":13,"column":13},"end":{"row":13,"column":14},"action":"remove","lines":["i"]},{"start":{"row":13,"column":12},"end":{"row":13,"column":13},"action":"remove","lines":["a"]},{"start":{"row":13,"column":11},"end":{"row":13,"column":12},"action":"remove","lines":["m"]},{"start":{"row":13,"column":10},"end":{"row":13,"column":11},"action":"remove","lines":["e"]}],[{"start":{"row":13,"column":10},"end":{"row":13,"column":11},"action":"insert","lines":["p"],"id":39},{"start":{"row":13,"column":11},"end":{"row":13,"column":12},"action":"insert","lines":["a"]},{"start":{"row":13,"column":12},"end":{"row":13,"column":13},"action":"insert","lines":["s"]},{"start":{"row":13,"column":13},"end":{"row":13,"column":14},"action":"insert","lines":["s"]},{"start":{"row":13,"column":14},"end":{"row":13,"column":15},"action":"insert","lines":["w"]},{"start":{"row":13,"column":15},"end":{"row":13,"column":16},"action":"insert","lines":["o"]},{"start":{"row":13,"column":16},"end":{"row":13,"column":17},"action":"insert","lines":["r"]},{"start":{"row":13,"column":17},"end":{"row":13,"column":18},"action":"insert","lines":["d"]}],[{"start":{"row":14,"column":14},"end":{"row":14,"column":15},"action":"remove","lines":["l"],"id":40},{"start":{"row":14,"column":13},"end":{"row":14,"column":14},"action":"remove","lines":["i"]},{"start":{"row":14,"column":12},"end":{"row":14,"column":13},"action":"remove","lines":["a"]},{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"remove","lines":["m"]},{"start":{"row":14,"column":10},"end":{"row":14,"column":11},"action":"remove","lines":["e"]}],[{"start":{"row":14,"column":10},"end":{"row":14,"column":11},"action":"insert","lines":["p"],"id":41},{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"insert","lines":["a"]},{"start":{"row":14,"column":12},"end":{"row":14,"column":13},"action":"insert","lines":["s"]},{"start":{"row":14,"column":13},"end":{"row":14,"column":14},"action":"insert","lines":["s"]},{"start":{"row":14,"column":14},"end":{"row":14,"column":15},"action":"insert","lines":["w"]},{"start":{"row":14,"column":15},"end":{"row":14,"column":16},"action":"insert","lines":["o"]},{"start":{"row":14,"column":16},"end":{"row":14,"column":17},"action":"insert","lines":["r"]},{"start":{"row":14,"column":17},"end":{"row":14,"column":18},"action":"insert","lines":["d"]}],[{"start":{"row":16,"column":21},"end":{"row":16,"column":22},"action":"remove","lines":["l"],"id":42},{"start":{"row":16,"column":20},"end":{"row":16,"column":21},"action":"remove","lines":["i"]},{"start":{"row":16,"column":19},"end":{"row":16,"column":20},"action":"remove","lines":["a"]},{"start":{"row":16,"column":18},"end":{"row":16,"column":19},"action":"remove","lines":["m"]},{"start":{"row":16,"column":17},"end":{"row":16,"column":18},"action":"remove","lines":["e"]}],[{"start":{"row":16,"column":17},"end":{"row":16,"column":18},"action":"insert","lines":["p"],"id":43},{"start":{"row":16,"column":18},"end":{"row":16,"column":19},"action":"insert","lines":["a"]},{"start":{"row":16,"column":19},"end":{"row":16,"column":20},"action":"insert","lines":["s"]},{"start":{"row":16,"column":20},"end":{"row":16,"column":21},"action":"insert","lines":["s"]},{"start":{"row":16,"column":21},"end":{"row":16,"column":22},"action":"insert","lines":["w"]},{"start":{"row":16,"column":22},"end":{"row":16,"column":23},"action":"insert","lines":["o"]},{"start":{"row":16,"column":23},"end":{"row":16,"column":24},"action":"insert","lines":["r"]},{"start":{"row":16,"column":24},"end":{"row":16,"column":25},"action":"insert","lines":["d"]}],[{"start":{"row":15,"column":21},"end":{"row":15,"column":22},"action":"remove","lines":["ス"],"id":44},{"start":{"row":15,"column":20},"end":{"row":15,"column":21},"action":"remove","lines":["レ"]},{"start":{"row":15,"column":19},"end":{"row":15,"column":20},"action":"remove","lines":["ド"]},{"start":{"row":15,"column":18},"end":{"row":15,"column":19},"action":"remove","lines":["ア"]},{"start":{"row":15,"column":17},"end":{"row":15,"column":18},"action":"remove","lines":["ル"]},{"start":{"row":15,"column":16},"end":{"row":15,"column":17},"action":"remove","lines":["ー"]},{"start":{"row":15,"column":15},"end":{"row":15,"column":16},"action":"remove","lines":["メ"]}],[{"start":{"row":15,"column":15},"end":{"row":15,"column":20},"action":"insert","lines":["パスワード"],"id":45}],[{"start":{"row":17,"column":15},"end":{"row":17,"column":32},"action":"remove","lines":["メールアドレスには必ず「@」が必要"],"id":46}],[{"start":{"row":17,"column":15},"end":{"row":17,"column":20},"action":"insert","lines":["パスワード"],"id":47},{"start":{"row":17,"column":20},"end":{"row":17,"column":21},"action":"insert","lines":["は"]},{"start":{"row":17,"column":21},"end":{"row":17,"column":22},"action":"insert","lines":["6"]},{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"insert","lines":["a"]}],[{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"insert","lines":["m"],"id":48},{"start":{"row":17,"column":24},"end":{"row":17,"column":25},"action":"insert","lines":["o"]},{"start":{"row":17,"column":25},"end":{"row":17,"column":26},"action":"insert","lines":["j"]},{"start":{"row":17,"column":26},"end":{"row":17,"column":27},"action":"insert","lines":["i"]},{"start":{"row":17,"column":27},"end":{"row":17,"column":28},"action":"insert","lines":["i"]},{"start":{"row":17,"column":28},"end":{"row":17,"column":29},"action":"insert","lines":["j"]},{"start":{"row":17,"column":29},"end":{"row":17,"column":30},"action":"insert","lines":["o"]},{"start":{"row":17,"column":30},"end":{"row":17,"column":31},"action":"insert","lines":["u"]},{"start":{"row":17,"column":31},"end":{"row":17,"column":32},"action":"insert","lines":["d"]}],[{"start":{"row":17,"column":31},"end":{"row":17,"column":32},"action":"remove","lines":["d"],"id":49},{"start":{"row":17,"column":30},"end":{"row":17,"column":31},"action":"remove","lines":["u"]},{"start":{"row":17,"column":29},"end":{"row":17,"column":30},"action":"remove","lines":["o"]},{"start":{"row":17,"column":28},"end":{"row":17,"column":29},"action":"remove","lines":["j"]},{"start":{"row":17,"column":27},"end":{"row":17,"column":28},"action":"remove","lines":["i"]},{"start":{"row":17,"column":26},"end":{"row":17,"column":27},"action":"remove","lines":["i"]},{"start":{"row":17,"column":25},"end":{"row":17,"column":26},"action":"remove","lines":["j"]},{"start":{"row":17,"column":24},"end":{"row":17,"column":25},"action":"remove","lines":["o"]},{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"remove","lines":["m"]}],[{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"remove","lines":["a"],"id":50}],[{"start":{"row":17,"column":22},"end":{"row":17,"column":26},"action":"insert","lines":["文字以上"],"id":51}],[{"start":{"row":20,"column":5},"end":{"row":21,"column":0},"action":"insert","lines":["",""],"id":52},{"start":{"row":21,"column":0},"end":{"row":21,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":21,"column":2},"end":{"row":22,"column":0},"action":"insert","lines":["",""],"id":53},{"start":{"row":22,"column":0},"end":{"row":22,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":22,"column":2},"end":{"row":22,"column":3},"action":"insert","lines":["$"],"id":54}],[{"start":{"row":22,"column":3},"end":{"row":22,"column":5},"action":"insert","lines":["()"],"id":55}],[{"start":{"row":22,"column":4},"end":{"row":22,"column":5},"action":"insert","lines":["#"],"id":56}],[{"start":{"row":22,"column":4},"end":{"row":22,"column":5},"action":"remove","lines":["#"],"id":57}],[{"start":{"row":22,"column":4},"end":{"row":22,"column":6},"action":"insert","lines":["''"],"id":58}],[{"start":{"row":22,"column":5},"end":{"row":22,"column":6},"action":"insert","lines":["#"],"id":59},{"start":{"row":22,"column":6},"end":{"row":22,"column":7},"action":"insert","lines":["l"]},{"start":{"row":22,"column":7},"end":{"row":22,"column":8},"action":"insert","lines":["o"]},{"start":{"row":22,"column":8},"end":{"row":22,"column":9},"action":"insert","lines":["g"]},{"start":{"row":22,"column":9},"end":{"row":22,"column":10},"action":"insert","lines":["i"]},{"start":{"row":22,"column":10},"end":{"row":22,"column":11},"action":"insert","lines":["n"]}],[{"start":{"row":22,"column":13},"end":{"row":22,"column":14},"action":"insert","lines":["."],"id":60},{"start":{"row":22,"column":14},"end":{"row":22,"column":15},"action":"insert","lines":["c"]},{"start":{"row":22,"column":15},"end":{"row":22,"column":16},"action":"insert","lines":["l"]},{"start":{"row":22,"column":16},"end":{"row":22,"column":17},"action":"insert","lines":["i"]},{"start":{"row":22,"column":17},"end":{"row":22,"column":18},"action":"insert","lines":["c"]},{"start":{"row":22,"column":18},"end":{"row":22,"column":19},"action":"insert","lines":["k"]}],[{"start":{"row":22,"column":14},"end":{"row":22,"column":19},"action":"remove","lines":["click"],"id":61},{"start":{"row":22,"column":14},"end":{"row":22,"column":21},"action":"insert","lines":["click()"]}],[{"start":{"row":22,"column":20},"end":{"row":22,"column":21},"action":"insert","lines":["f"],"id":62},{"start":{"row":22,"column":21},"end":{"row":22,"column":22},"action":"insert","lines":["u"]},{"start":{"row":22,"column":22},"end":{"row":22,"column":23},"action":"insert","lines":["n"]},{"start":{"row":22,"column":23},"end":{"row":22,"column":24},"action":"insert","lines":["c"]},{"start":{"row":22,"column":24},"end":{"row":22,"column":25},"action":"insert","lines":["t"]},{"start":{"row":22,"column":25},"end":{"row":22,"column":26},"action":"insert","lines":["i"]},{"start":{"row":22,"column":26},"end":{"row":22,"column":27},"action":"insert","lines":["o"]},{"start":{"row":22,"column":27},"end":{"row":22,"column":28},"action":"insert","lines":["n"]}],[{"start":{"row":22,"column":28},"end":{"row":22,"column":30},"action":"insert","lines":["()"],"id":63}],[{"start":{"row":22,"column":30},"end":{"row":22,"column":31},"action":"insert","lines":[" "],"id":64}],[{"start":{"row":22,"column":31},"end":{"row":22,"column":33},"action":"insert","lines":["{}"],"id":65}],[{"start":{"row":22,"column":32},"end":{"row":24,"column":2},"action":"insert","lines":["","    ","  "],"id":66}],[{"start":{"row":24,"column":4},"end":{"row":24,"column":5},"action":"insert","lines":[";"],"id":67}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":16},"action":"remove","lines":["  $(function() {"],"id":68},{"start":{"row":0,"column":22},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":9,"column":2},"end":{"row":9,"column":5},"action":"remove","lines":["});"],"id":69},{"start":{"row":9,"column":0},"end":{"row":9,"column":2},"action":"remove","lines":["  "]},{"start":{"row":8,"column":5},"end":{"row":9,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":9,"column":2},"end":{"row":9,"column":16},"action":"remove","lines":["$(function() {"],"id":70},{"start":{"row":9,"column":0},"end":{"row":9,"column":2},"action":"remove","lines":["  "]},{"start":{"row":8,"column":5},"end":{"row":9,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":8,"column":5},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":71},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":18,"column":0},"end":{"row":18,"column":5},"action":"remove","lines":["  });"],"id":72},{"start":{"row":17,"column":5},"end":{"row":18,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":20,"column":4},"end":{"row":20,"column":30},"action":"insert","lines":["function emailCheck(email)"],"id":73}],[{"start":{"row":20,"column":4},"end":{"row":20,"column":13},"action":"remove","lines":["function "],"id":74}],[{"start":{"row":20,"column":21},"end":{"row":21,"column":0},"action":"insert","lines":["",""],"id":75},{"start":{"row":21,"column":0},"end":{"row":21,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":21,"column":4},"end":{"row":21,"column":27},"action":"insert","lines":["passwordCheck(password)"],"id":76}],[{"start":{"row":20,"column":21},"end":{"row":20,"column":22},"action":"insert","lines":[";"],"id":77}],[{"start":{"row":21,"column":27},"end":{"row":21,"column":28},"action":"insert","lines":[";"],"id":78}],[{"start":{"row":22,"column":5},"end":{"row":23,"column":0},"action":"insert","lines":["",""],"id":79},{"start":{"row":23,"column":0},"end":{"row":23,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":14,"column":26},"end":{"row":14,"column":42},"action":"remove","lines":["indexOf('@') < 0"],"id":80}],[{"start":{"row":14,"column":26},"end":{"row":14,"column":27},"action":"insert","lines":["l"],"id":81},{"start":{"row":14,"column":27},"end":{"row":14,"column":28},"action":"insert","lines":["e"]},{"start":{"row":14,"column":28},"end":{"row":14,"column":29},"action":"insert","lines":["n"]},{"start":{"row":14,"column":29},"end":{"row":14,"column":30},"action":"insert","lines":["g"]},{"start":{"row":14,"column":30},"end":{"row":14,"column":31},"action":"insert","lines":["t"]},{"start":{"row":14,"column":31},"end":{"row":14,"column":32},"action":"insert","lines":["h"]}],[{"start":{"row":14,"column":32},"end":{"row":14,"column":33},"action":"insert","lines":[" "],"id":82},{"start":{"row":14,"column":33},"end":{"row":14,"column":34},"action":"insert","lines":["<"]}],[{"start":{"row":14,"column":34},"end":{"row":14,"column":35},"action":"insert","lines":[" "],"id":83},{"start":{"row":14,"column":35},"end":{"row":14,"column":36},"action":"insert","lines":["6"]}]]},"ace":{"folds":[],"scrolltop":1.5,"scrollleft":0,"selection":{"start":{"row":14,"column":36},"end":{"row":14,"column":36},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1599209654856,"hash":"04ff5aea9119564affd7902de608b8dbd4d2b7f0"}