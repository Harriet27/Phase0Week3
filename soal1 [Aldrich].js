/**
Buatlah sebuah PSEUDOCODE untuk kasus berikut:

Sebuah mobil sedang berjalan dengan kecepatan 80 km/jam.
Ketika mobil akan menanjak sebuah jalanan/jalur, kecepatan mobil akan berkurang
sesuai dengan kemiringan sudut dari jalan tersebut:
 - sudut kemiringan jalan 0-14 derajat maka kecepatan mobil tidak akan berkurang
 - sudut kemiringan jalan 15-29 derajat maka kecepatan mobil akan berkurang 10 km/jam
 - sudut kemiringan jalan 30-44 derajat maka kecepatan mobil akan berkurang 15 km/jam
 - sudut kemiringan jalan 45-50 derajat maka kecepatan mobil akan berkurang 25 km/jam

Tampilkan kecepatan mobil jika menghadapi tanjakan dengan sudut kemiringan tersebut
**/


//your alogritma/pseudocode here
SET KECEPATAN TO 80
SET KEMIRINGAN JALAN >

IF KEMIRINGAN JALAN>=0 && KEMIRINGAN JALAN<=14 THEN
    SET KECEPATAN TO 80KM/JAM
ELSE IF KEMIRINGAN JALAN>=15 && KEMIRINGAN JALAN<=29 THEN
    SET KECEPATAN TO 70KM/JAM
ELSE IF KEMIRINGAN JALAN>=30 && KEMIRINGAN JALAN<=44 THEN
    SET KECEPATAN TO 65KM/JAM
END IF
ELSE  
  SET KECEPATAN TO 55KM/JAM
END IF
DISPLAY KECEPATAN

