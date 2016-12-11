//array dan object penyimpanan data
var totalNilai=[];
var dataNilai=[];
var komponenNilai= function(namaMakul, nilai,sks, bobot){
  this.namaMakul=namaMakul;
  this.nilai=nilai;
  this.sks=sks;
  this.bobot=bobot;
}
//merubah nilai huruf menjadi angka
function nilaiAngka(nilaiHuruf){
var nil;
if (nilaiHuruf=='A'||nilaiHuruf=='a') {
  nil=4;
} else if(nilaiHuruf=='B'||nilaiHuruf=='b'){
  nil=3;

} else if(nilaiHuruf=='c'||nilaiHuruf=='C'){
  nil=2;
} else if(nilaiHuruf=='d'||nilaiHuruf=='D'){
  nil=1;
} else{
  nil=0;
}
return nil;
}
// input data
function inputData(jumMataKuliah){
  for(i=0;i<jumMataKuliah;i++){
    var namaMakul=prompt('masukan judul makul ke ' +(i+1));
    var nilai=prompt('masukan nilai makul ke ' +(i+1));
    var sks=prompt('masukan jumlah sks makul ke ' +(i+1));
    var bobot=nilaiAngka(nilai)*sks;
    var data=new komponenNilai(namaMakul,nilai,sks,bobot);
    dataNilai.push(data);
  }
  return(dataNilai);
}
function hitung(dataNilai){
  var jumlahSks,jumlahNilai,ipk;
  jumlahSks=0;
  jumlahNilai=0;
  for(i=0;i<dataNilai.length;i++){
    jumlahSks=jumlahSks+parseInt(dataNilai[i].sks);
    jumlahNilai=jumlahNilai+dataNilai[i].bobot;
  }
  ipk=jumlahNilai/jumlahSks;
  var totalNilai=[jumlahSks,jumlahNilai,ipk];
  return totalNilai;
}
//menampilkan data
function tampil(){
document.write("berikut adalah penjabaran nilai anda semester ini")
for (i=0;i<dataNilai.length;i++){
  document.write("<br> judul matakuliah "+dataNilai[i].namaMakul +", nilai " +dataNilai[i].nilai + ", jumlah sks " +dataNilai[i].sks +", bobot matakuliah "+dataNilai[i].bobot);
}
document.write('<br>jumlah matakuliah semester ini ' +(dataNilai.length)+', total sks ' +totalNilai[0] + ', total nilai '+totalNilai[1] +', ipk anda semester ini ' +totalNilai[2]);

}
function utama(){
  var jumMataKuliah=prompt('selamat datang berpa matakuliah yang kamu ambil smester ini?');
  inputData(jumMataKuliah);
  totalNilai=hitung(dataNilai);
  tampil();
}
