
/* 
==========
Encrypt Me
==========

[INSTRUCTIONS]
Kamu adalah seorang agen rahasia yang ingin mengirimkan pesan ke partnermu,untuk menmbuat kode yang kamu kirim tetap konfidental,
kamu harus mengikuti sebuah kamus yang dimiliki oleh H8BI (Hacktiv8 Bureau of Investigation)

Berikut adalah kamus huruf dari HBI
huruf biasa : abcdefghijklmnopqrstuvwxyz
huruf H8BI  : !@#$%^&*()-+1234567890[]{}

Buatlah sebuah function yang mentranslate kata kata biasa, menjadi kata kata ter enkripsi menggunakan kamus H8BI!

Note:
- Selain karakter huruf biasa maka tidak akan di-translate

[EXAMPLE]
input: dimitri
output: $(1(86(

input: @wtian
output: @[8(!2

[RULES]
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE, jika tidak ada maka dianggap tidak mengerjakan
- DILARANG MENGGUNAKAN BUILT IN FUNCTION .indexOf / .includes!
*/

//pseudocode
GET var alfabet to 'abcdefghijklmnopqrstuvwxyz'
GET var codeAlfabet to '!@#$%^&*()-+1234567890[]{}'
GET output to ''

looping input.length
  looping alfabet.length
    if input equals to alfabet
      ADD output to codeAlfabet
    ENDIF
  END looping alfabet.length
END looping input.length

//function
function encryptMe(input) {
        var biasa = 'abcdefghijklmnopqrstuvwxyz';
        var H8BI = '!@#$%^&*()-+1234567890[]{}';
        var e = '€';
        var hasil = '';
    
        for (var i = 0; i < input.length; i++) {
            for (var j = 0; j < biasa.length; j++) {
                if (input[i] === ' ') {
                    hasil += ' ';
                    break;
                } else if (input[i] === biasa[j]) {
                    hasil += H8BI[j];
                } else if (input[i] === e[j]) {
                    hasil += e[j];
                }
            }
        }
        return hasil;
    }

console.log(encryptMe('dimitri')) // $(1(86(
console.log(encryptMe('irsyah mardiah')) //(67{!* 1!6$(!*
console.log(encryptMe('dimitr€€')) // $(1(86€€
console.log(encryptMe('d!mas')) // $!1!7
console.log(encryptMe('@wtian')) // @[8(!2```