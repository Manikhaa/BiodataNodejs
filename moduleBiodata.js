var Biodata = require('./modules/Biodata');

var namauser = "Manikha Meyyuliarti Nurozi";
var tempatlahir = "Tasikmalaya";
var tanggallahir = 1;
var alamatuser = "Tasikmalaya";
var noteuser = "Ka mohon maaf, saya ga submit tugas kedua yang js kemarin, karena pas saya mau submit website nya lagi maintenance pas pulang kuliah aku mau submit udah keburu deadline.";


console.log('Nama: '+ Biodata.nama(namauser));

console.log('Tempat Lahir: ' + Biodata.tempat(tempatlahir));

console.log('Tanggal Lahir: '+ Biodata.tanggal(tanggallahir));

console.log('Alamat: '+ Biodata.alamat(alamatuser));

console.log('Note: '+ Biodata.note(noteuser));