//target terdekat
function targetTerdekat(arr) {
  return arr.indexOf('x') - arr.indexOf('o') > 0 ? arr.indexOf('x') - arr.indexOf('o') : (arr.length-1) + (arr.indexOf('x') - arr.indexOf('o'));
}

console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); 
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); 
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', '']));
console.log(targetTerdekat(['', '', 'o', ''])); 
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); 