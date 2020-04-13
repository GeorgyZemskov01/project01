"use strict"
let maxWidth = 1
let scale1Length = 0
let scale2Length = 0
let scale3Length = 0
let scale4Length = 0
let scale5Length = 0
let scale6Length = 0
let scale7Length = 0

let scales = document.querySelectorAll(".scale")
for (let scale of scales) {
    scale.style.width = "1%"
}

function prosentConstructor(number) {
    if (number <= 101 && number > 98) {
        return String(100*maxWidth).concat("%")
    } else if (number > 101) {
        let limit = (number - 100)
        let num = 50
        return String(num*maxWidth).concat("%")
    } else if (number < 1){
        return String(1).concat("%")
    } else {
        return String(number*maxWidth).concat("%")
    }
}

function reloadScales() {
    if (maxWidth > 1) {
        maxWidth = 1 }
    document.getElementById('scale1').style.width = prosentConstructor(scale1Length)
    document.getElementById('scale2').style.width = prosentConstructor(scale2Length)
    document.getElementById('scale3').style.width = prosentConstructor(scale3Length)
    document.getElementById('scale4').style.width = prosentConstructor(scale4Length)
    document.getElementById('scale5').style.width = prosentConstructor(scale5Length)
    document.getElementById('scale6').style.width = prosentConstructor(scale6Length)
    document.getElementById('scale7').style.width = prosentConstructor(scale7Length)
    let counter = 0
    if (scale1Length >= 98 && scale1Length <= 101) {
        counter += 1
    } if (scale2Length >= 98 && scale2Length <= 101) {
        counter += 1
    } if (scale3Length >= 98 && scale3Length <= 101) {
        counter += 1
    } if (scale4Length >= 98 && scale4Length <= 101) {
        counter += 1
    } if (scale5Length >= 98 && scale5Length <= 101) {
        counter += 1
    } if (scale6Length >= 98 && scale6Length <= 101) {
        counter += 1
    } if (scale7Length >= 98 && scale7Length <= 101) {
        counter += 1}
    if (counter == 7) {
        youWinFunc()
    }
}

function simple_minus(obj) {
    let  tablo = document.getElementById(obj)
    let num = tablo.innerHTML
    if (num == "0") {
        return 0
    } else {
        let new_num = Number(num) - 1
        tablo.innerHTML = new_num
    }
}

function simple_plus(obj) {
    let  tablo = document.getElementById(obj)
    let num = tablo.innerHTML
    if (num == "20") {
        return 0
    } else {
        let new_num = Number(num) + 1
        tablo.innerHTML = new_num
    }
}

let dictionaryNumbers = {
    3 : 7,
    4 : 4,
    5 : 2,
    6 : 6,
    7 : 3,
    8 : 5,
    9 : 1
}

let dictionaryValues = {
    1 : 100,
    2 : 20,
    3 : 100,
    4 : 100,
    5 : 100,
    6 : 5.88,
    7 : 100
}

let dictionaryScales = {
    1 : scale1Length,
    2 : scale2Length,
    3 : scale3Length,
    4 : scale4Length,
    5 : scale5Length,
    6 : scale6Length,
    7 : scale7Length
}

function plus(num) {
    let i = String(num);
    let actualTab = "tab".concat(i);
    simple_plus(actualTab)
    if (Number(num) <= 2) {
        maxWidth *= .6
    } else {
        let actualScaleNum = dictionaryNumbers[Number(num)] 
        let scalesum = dictionaryValues[actualScaleNum]
        if (actualScaleNum == 1) {
            scale1Length += scalesum
        } else if (actualScaleNum == 2) {
            scale2Length += scalesum
        } else if (actualScaleNum == 3) {
            scale3Length += scalesum
        } else if (actualScaleNum == 4) {
            scale4Length += scalesum
        } else if (actualScaleNum == 5) {
            scale5Length += scalesum
        } else if (actualScaleNum == 6) {
            scale6Length += scalesum
        } else if (actualScaleNum == 7) {
            scale7Length += scalesum
        }
    }
    reloadScales()
}

function minus(num) {
    let i = String(num);
    let actualTab = "tab".concat(i);
    simple_minus(actualTab)
    if (Number(num) <= 2) {
        maxWidth = maxWidth / .6
    } else {
        let actualScaleNum = dictionaryNumbers[Number(num)] 
        let scalesum = dictionaryValues[actualScaleNum]
        if (actualScaleNum == 1) {
            scale1Length -= scalesum
        } else if (actualScaleNum == 2) {
            scale2Length -= scalesum
        } else if (actualScaleNum == 3) {
            scale3Length -= scalesum
        } else if (actualScaleNum == 4) {
            scale4Length -= scalesum
        } else if (actualScaleNum == 5) {
            scale5Length -= scalesum
        } else if (actualScaleNum == 6) {
            scale6Length -= scalesum
        } else if (actualScaleNum == 7) {
            scale7Length -= scalesum
        }
    }
    reloadScales()
}

let element = 0

function showPay() {
    element = document.querySelector("footer").insertAdjacentHTML('afterbegin', '<div class="contacts"><button onclick="closePay()">x</button><p>ЯД: 4100111205331333</p></div>')
}
 function closePay() {
    document.querySelector('.contacts').remove()
 }

function youWinFunc() {
    document.location.href = "./Plov_gotov.html"
}