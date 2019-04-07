//array 3 [selasa]
var array = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"] ;

array.splice(1,4,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")

console.log (array)

///////////////////////////////////////////////////////////////

var array1 = array[3].split('/');

switch (array1[1]){
  
  case '01': console.log('Jan');
  break;
  case '02': console.log('Feb');
  break;
  case '03': console.log('Mar');
  break;
  case '04': console.log('Apr');
  break;
  case '05': console.log('Mei');
  break;
  default: console.log('coba lagi');

}

///////////////////////////////////////////////////////////////

var array2 = array[3].split('/').sort();

array2.sort(function(a,b){
  return b - a
});

console.log (array2);

//////////////////////////////////////////////////////////////

var array3 = array[3].split('/').join('-');

console.log (array3);

//////////////////////////////////////////////////////////////

console.log (array[1].slice(0, 15))