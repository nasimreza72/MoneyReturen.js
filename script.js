function moneyReturner(purchased, paid) {
  let arrOfChanges = [
    200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
  ];
  let arrOfNames = [
    "200 euro",
    "100 euro",
    "50 euro",
    "20 euro",
    "10 euro",
    "5 euro",
    "2 euro",
    "1 euro",
    "50 cent",
    "20 cent",
    "10 cent",
    "5 cent",
    "2 cent",
    "1 cent",
  ];
  let rest = paid - purchased;
  if (rest < 0) {
    return `You still need to pay ${rest.toFixed(2)}`;
  } else if (rest == 0) {
    return `You just paid the exact amount for your purchase. Thank you for choosing us.`;
  }
  let obj = {};
  for (i = 0; i < arrOfChanges.length; i++) {
    obj[arrOfNames[i]] = Math.floor(rest.toFixed(2) / arrOfChanges[i]); // to check how many time  divisible.
    rest = rest.toFixed(2) % arrOfChanges[i]; // to get remainder.
  }
  let final = "";

  for (key in obj) {
    if (obj[key] >= 1) {
      final += `${obj[key]} x ${key}. `;
    }
  }
  return final;
}

console.log(moneyReturner(11.12, 100));

const table = document.querySelector("table");

const purchasedAmount = document.querySelector(".purchasedAmount");

const purchasedValue = document.querySelector(".purchasedValue");

const showResultButton = document.querySelector(".showResultButton");

const result = document.querySelector("#result");
result.style.color = "";

showResultButton.addEventListener("click", () => {
  result.innerHTML = moneyReturner(
    purchasedAmount.value,
    purchasedValue.value
  );
});

let active = "";

table.addEventListener("click", (e) => {
  if (active == "input1") purchasedAmount.innerHTML += e.target.innerHTML;
  else if (active == "input2")
    purchasedValue.innerHTML += e.target.innerHTML;
});

purchasedAmount.addEventListener("click", (e) => {
  active = "input1";
  console.log(e.target.innerHTML);
});

purchasedValue.addEventListener("click", (ee) => {
  active = "input2";
  console.log(ee.target.innerHTML);
});
