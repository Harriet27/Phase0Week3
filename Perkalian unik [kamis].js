//perkalian unik
function perkalianUnik(arr) {
    var hasil = [];
    for(var x = 0; x < arr.length; x++) {
      var angka = 1;
      for(var y = 0; y < arr.length; y++) {
      if(y !== x) {
        angka *= arr[y];
      }  
      }
      hasil.push(angka);
    }
    return hasil;
  }
  
console.log(perkalianUnik([2, 4, 6])); 
console.log(perkalianUnik([1, 2, 3, 4, 5])); 
console.log(perkalianUnik([1, 4, 3, 2, 5])); 
console.log(perkalianUnik([1, 3, 3, 1])); 
console.log(perkalianUnik([2, 1, 8, 10, 2])); 