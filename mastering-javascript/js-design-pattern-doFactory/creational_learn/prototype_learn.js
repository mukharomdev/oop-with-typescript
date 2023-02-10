class Manusia{
    constructor(gender){
        this.gender = gender;
        //metodh
        this.details = () => {
            let detail = new Pria();
            detail.nama = gender.nama;
            detail.umur = gender.umur;
            detail.asal = gender.asal;
            return detail
        }
    }
    
}

class Pria{
    constructor(nama,umur,asal){
        this.nama = nama;
        this.umur = umur;
        this.asal = asal;
        this.show = () => {
            console.log(`${this.nama} ${this.umur} tahun asal ${this.asal}`);
        }
    }
}
let yodha = new Pria("yodha",10,"brebes")

let manusia = new Manusia(yodha)
let data = manusia.details()
data.show()


