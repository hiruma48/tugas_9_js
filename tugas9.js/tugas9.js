function panggilobject(){
    var karyawan = {
        nama : "ari",
        umur : 23 ,
        pekerjaan : "web develover",
        jenis_kelamin :"laki-laki",
    }
    for(var x in karyawan){
        console.log(karyawan[x])
    }
}
panggilobject();