//pasangan angka terbesar
function pasanganTerbesar(num) {
  var stringNum = String(num)
  var minNum = 0
  var resultNum = 0
  
  for(var i = 0; i < stringNum.length; i++) {
    minNum = stringNum[i] + stringNum[i + 1]
    if(minNum > resultNum) {
      resultNum = minNum
    }
  }
  return Number(resultNum)
}

console.log(pasanganTerbesar(641573));   
console.log(pasanganTerbesar(12783456)); 
console.log(pasanganTerbesar(910233));   
console.log(pasanganTerbesar(71856421)); 
console.log(pasanganTerbesar(79918293)); 