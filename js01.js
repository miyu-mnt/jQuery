/* 1,2 */
var number=prompt('数値を入力してください');

if (isNaN(number)) {
  alert('数値を入力してください');
} else {
  if (0 < number) {
    alert('正の数です');
  } else if (number < 0) {
    alert('負の数です');
  } else {
    alert('ゼロです');
  }
}

/* 3,4,5 */
var names=['パンダ','ライオン','キリン'];
var a=0;
var name=prompt('パンダ、ライオン、キリンを選んでください');

switch (name) {
  case 'ライオン':
    alert(names.indexOf('ライオン'));
    break;
  default:
    while (a < names.length) {
      alert(names[a]);
      a++;
    }
}

/* 6,7 */
var animals=[
  {'name':'パンダ','weight':80},
  {'name':'ライオン','weight':200},
  {'name':'キリン','weight':300}
];
var animal_name=prompt('パンダ、ライオン、キリンを選んでください');
var i=0;

for(i=0; i<animals.length; i++) {
  if (animals[i].name == animal_name) {
    alert(animals[i].weight);
  }
}

/* 8 */
function calc(x) {
  return x*x*3.14;
}

var x=prompt('円の半径を入力してください');
alert(calc(x));