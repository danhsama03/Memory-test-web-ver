"use strict";
exports.__esModule = true;
function reset() {
    var inputNumber = document.getElementById("numbers");
    inputNumber.value = String("");
    var soHienThi = document.getElementById("requirement");
    soHienThi.innerHTML = String("");
    var span = document.getElementById("level");
    span.innerHTML = String("");
    var KetQua = document.getElementById("result");
    KetQua.innerHTML = String("");
}
;
function sleep(milliseconds) {
    var start = new Date().getTime();
    while (new Date().getTime() - start < milliseconds) { }
}
;
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
;
function start() {
    var n = 4;
    var arr = [];
    var soHienThi = document.getElementById("requirement");
    for (var i = 0; i < n; i++) {
        arr[i] = random(1, 9);
    }
    soHienThi.innerHTML = String(arr);
    return String(soHienThi);
}
;
function check() {
    var k = [];
    var inputNumber = document.getElementById("numbers");
    var KetQua = document.getElementById("result");
    k = Number[inputNumber.value];
    if (k = Number[start()]) {
        KetQua.innerHTML = String("Chinh xac.");
    }
    else {
        KetQua.innerHTML = String("Sai.");
    }
    ;
}
;
