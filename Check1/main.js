

//問1
let numbers = [2, 5, 12, 13, 15, 18, 22];

function isEven(){
        for (let i = 0; i < numbers.length; i++ ){
            if (numbers[i] % 2 === 0) {
                console.log(`${numbers[i]}は偶数です`);
            } 
        }
    }

isEven();


//問2

class Car {
    constructor(gas, num){
        this.gas = gas;
        this.num = num;
    }

    getNumGas(){
        console.log(`ガソリンは${this.gas}です。ナンバーは${this.num}です`);
    }
}

let sportsCar = new Car(20, 1030);
sportsCar.getNumGas();

// 【要件】
// インスタンス化した時にガソリンとナンバーがセットされるようなCarクラスを作成する
// 「ガソリンは〇〇です。ナンバーは△△です」と出力される「getNumGas」という関数を作成する