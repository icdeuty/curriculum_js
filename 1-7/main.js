class Taiyaki {
    constructor(name){
    this.name = name;
    }

    contents(){
        console.log(`中身は${this.name}です`);
    }
}

let sweets = new Taiyaki('あんこ');
sweets.contents();
sweets = new Taiyaki('クリーム');
sweets.contents();
sweets = new Taiyaki('チーズ');
sweets.contents();
