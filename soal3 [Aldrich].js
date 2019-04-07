/**
Interesting Square
------------------
Buatlah sebuah proses perulangan menggunakan looping/perulangan
(boleh menggunakan while / for)
Disediakan variable height, gunakan variable ini untuk
mengatur tinggi dari persegi yang akan kita buat.
Contoh:
  - height: 3
  - output:
    ***
    ###
    ***
  - height: 1
  - output:
    *
  - height: 5
  - output:
    *****
    #####
    *****
    #####
    *****
Tinggi dan lebar dari persegi sesuai dari variable height
*/

/*   
    ***
    ###
    ***
*/
var row = 3;
for (var i = 0; i < row; i++) {
	var tmp = '';
  for (var j = 0; j < row; j++) {
		if (i % 2 === 0) {
			tmp += '*';
		} else {
			tmp += '#';
		}
	}
	console.log(tmp);
}

/*   
    *
*/
var row = 1;
for (var i = 0; i < row; i++) {
	var tmp = '';
  for (var j = 0; j < row; j++) {
		if (i % 2 === 0) {
			tmp += '*';
		} else {
			tmp += '#';
		}
	}
	console.log(tmp);
}

/*   
    *****
    #####
    *****
    #####
    *****
*/
var row = 5;
for (var i = 0; i < row; i++) {
	var tmp = '';
  for (var j = 0; j < row; j++) {
		if (i % 2 === 0) {
			tmp += '*';
		} else {
			tmp += '#';
		}
	}
	console.log(tmp);
}