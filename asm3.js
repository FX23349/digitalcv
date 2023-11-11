"use strict";
const btnSubmitEl = document.querySelector(".btnsubmit");
const inputEl = document.querySelector("#emailinput");
const emailEl = document.querySelector(".email");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function viewMore(selector) {
  document.getElementById(selector).style.display = "block";
  document.getElementById(selector + "-less").style.display = "block";
  document.getElementById(selector + "-view").style.display = "none";
}

function lessMore(selector) {
  document.getElementById(selector).style.display = "none";
  document.getElementById(selector + "-less").style.display = "none";
  document.getElementById(selector + "-view").style.display = "block";
}
btnSubmitEl.addEventListener("click", function () {
  if (inputEl.value.match(regex)) {
    emailEl.style.display = "block";
    btnSubmitEl.style.display = "none";
    inputEl.style.display = "none";
  }
});
