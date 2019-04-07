//mengelompokkan hewan
function groupAnimals(animals) {
  var namaAkhir = [];

  for ( var i = 0; i < animals.length; i++) {
    var animalA = [];
    var animalC = [];
    var animalK = [];
    var animalU = [];
    
    for ( var j = 0; j < animals.length; j++) {
      if( animals[j][0] === 'u') {
        animalU.push(animals[j]);
      } 
        else if(animals[j][0] === 'a') {
        animalA.push(animals[j]);
      } 
        else if( animals[j][0] === 'c' ) {
        animalC.push(animals[j]);
      } 
        else if( animals[j][0] === 'k' && animals[j][1] ==='u') {
        animalK.push(animals[j]);
      } 
    }
  }
  namaAkhir.push(animalA);
  namaAkhir.push(animalC);
  namaAkhir.push(animalK);
  namaAkhir.push(animalU);
  
  return namaAkhir;
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));