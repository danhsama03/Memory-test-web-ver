function reset(): void {
    let inputNumber: HTMLInputElement = <HTMLInputElement>document.getElementById("numbers");
    inputNumber.value = String("");

    let soHienThi: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("requirement");
    soHienThi.innerHTML = String("");

    let span: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("level");
    span.innerHTML = String("");

    let KetQua: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result");
    KetQua.innerHTML = String("");
};

function sleep(milliseconds: number): void {
    var start = new Date().getTime();
    while (new Date().getTime() - start < milliseconds) {}
};

function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};


function start(): string {
    let n: number = 4;
    let arr: number[] = [];
    let soHienThi: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("requirement");
    for (let i: number = 0; i < n; i++) {
        arr[i] = random(1, 9);
    } 
    soHienThi.innerHTML = String(arr);
    return String(soHienThi);
};


function check(): void {
    let k: number[] = [];
    let inputNumber: HTMLInputElement = <HTMLInputElement>document.getElementById("numbers");
    let KetQua: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result");
    
    k = Number[inputNumber.value];
    if (k = Number[start()]) {
        KetQua.innerHTML = String("Chinh xac.");
    } else {
        KetQua.innerHTML = String("Sai.");
    };
};

export {}