function moneyReturner(purchased, paid) {
    let arrOfChanges = [200, 100, 50, 20, 10, 5, 2, 1, .50, .20, .10, .05, .02, .01]
    let arrOfNames = ['200 euro', '100 euro', '50 euro', '20 euro', '10 euro', '5 euro', '2 euro', '1 euro', '50 cent', '20 cent', '10 cent', '5 cent', '2 cent', '1 cent', ]
    let rest = paid - purchased;
    if (rest < 0) {
        return `You still need to pay ${rest.toFixed(2)}`
    } else if (rest == 0) {
        return `You just paid the exact amount for your purchase. Thank you for choosing us.`
    }
    let obj = {}
    for (i = 0; i < arrOfChanges.length; i++) {
        obj[arrOfNames[i]] = Math.floor(rest.toFixed(2) / arrOfChanges[i]) // to check how many time  divisible.
        rest = rest.toFixed(2) % arrOfChanges[i] // to get remainder.
    }
    let final = '';

    for (key in obj) {

        if (obj[key] >= 1) {
            final += `${obj[key]}*${key}, `
        }
    }
    return final;
}
//console.log(moneyReturner(11.12, 100));

const btn = document.querySelector("button")

// const pA = document.querySelector(".pAmount")
// const pV = document.querySelector(".pValue")

// btn.addEventListener("click", (selector) => {

//     document.getElementById("result").innerHTML = moneyReturner(pA.innerHTML=prompt("Total purchased amount:"), pV.innerHTML=prompt("Paid amount:"));

// })

const tableData = document.querySelectorAll("td")

// console.log(tableData);


const pA = document.querySelector(".pAmount")
tableData.forEach(e => {
    e.addEventListener("click", () => {

        if (e.innerText != 'clear' && e.innerText !=="tab>") {
            document.querySelector(".pAmount").innerHTML += e.innerText;
            document.querySelector(".pValue").innerHTML += e.innerText;


        } else if(e.innerText =="tab>"){
            document.querySelector(".pAmount").replaceWith
        } else {
            document.querySelector(".pAmount").innerHTML = ""
            document.querySelector(".pValue").innerHTML = ""
        }

        console.log(moneyReturner(document.querySelector(".pAmount").innerHTML, document.querySelector(".pValue").innerHTML));
    })
})

/////////////////////////////////

// tableData.forEach(e => {
//     e.addEventListener("click", () => {

//         if (e.innerText != 'clear' && e.innerText != '9') {
//             document.querySelector(".pAmount").innerHTML += e.innerText;

//         } else if (e.innerText == "9") {
//             document.querySelector(".pValue").innerHTML += e.innerText;

//         } else {
//             document.querySelector(".pAmount").innerHTML = ""
//             document.querySelector(".pValue").innerHTML = ""


//         }

//         console.log(moneyReturner(document.querySelector(".pAmount").innerHTML, document.querySelector(".pValue").innerHTML));
//     })
// })



///////////////////////////////
// function myFunction() {
//     let purchased = prompt("Total amount of purchased item:");
//     let paid = prompt("Amount of cash Paid:");
//     if (purchased != null && paid != null) {
//         document.getElementById("result").innerHTML = moneyReturner(purchased, paid);
//     }
// }

// console.log(myFunction());


///////////////////////////////  Calculator

// class Calculator {
//     constructor(x, operator, y) {
//         this.x = x;
//         this.operator = operator;
//         this.y = y;
//         this.result = 0;
//     }

//     pi() {
//         return Math.PI
//     }
//     e() {
//         return Math.E
//     }
//     ratio() {
//         return this.result = ((this.x * this.operator) / this.y);
//     }
//     per() {
//         return this.result = (this.x / (this.y / 100)) + `%`
//     }
//     sum() {
//         return this.result = this.x + this.y
//     }
//     sub() {
//         return this.result = this.x - this.y
//     }
//     mul() {
//         return this.result = this.x * this.y
//     }
//     div(a, b) {
//         this.result = a / b
//         if (this.result !== 0) {
//             return this.result
//         }
//         return false
//     }
//     mod(a, b) {
//         this.result = a % b;
//         if (this.result !== 0) {
//             return this.result
//         }
//         return false
//     }
//     el (a,b){
//         return this.result= Math.pow(a,b)
//     }
//     sq (a){
//         return this.result= Math.sqrt(a)
//     }
// }
// let p = new Calculator(2, 10, 4);
// console.log(p.pi());
// console.log(p.e());
// console.log(p.ratio());
// console.log(p.per());
// console.log(p.sum());
// console.log(p.sub());
// console.log(p.mul());
// console.log(p.div(15, 10));
// console.log(p.mod(15, 10));
// console.log(p.el(5, 5));
// console.log(p.sq(15));