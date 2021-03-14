"use strict";
// alert("this");
let billAmt = document.getElementById("bilAmt");
let billSplit = document.getElementById("billSplit");
let submit = document.querySelector(".form-btn");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  let cal = billAmt.value / billSplit.value + 10;
  document.querySelector(".ans").innerHTML = `$${cal} per person  `;
});
