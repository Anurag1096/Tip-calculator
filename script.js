"use strict";
// alert("this");
let billAmt = document.getElementById("bilAmt");
let billSplit = document.getElementById("billSplit");
let submit = document.querySelector(".form-btn");
let pref = document.getElementById("preference");
let tip = 0;

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (pref.value === "Ok") {
    tip = Number(billAmt.value) * 0.15;
  } else if (pref.value === "Good") {
    tip = Number(billAmt.value) * 0.18;
  } else {
    tip = Number(billAmt.value) * 0.2;
  }
  let total = Number(billAmt.value) + tip;
  let cal = total / Number(billSplit.value);
  document.querySelector(".ans").innerHTML = `$${cal} per person  `;
});

// //////////////////////////////////////////////////////////////////

let d = "23 5";
for (let i = 0; i < d.length; i++) {
  if (d[i] <= d[i + 1]) {
    console.log(d[i + 1]);
  }
}
