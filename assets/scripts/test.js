const score = sessionStorage.getItem("total") | 0;

if (score > -24 && score <= -12) {
  document.querySelector(".container > div:nth-child(1)").style.display =
    "block";
}

if (score > -12 && score <= 0) {
  document.querySelector(".container > div:nth-child(2)").style.display =
    "block";
}

if (score > 0 && score <= 12) {
  document.querySelector(".container > div:nth-child(3)").style.display =
    "block";
}

if (score > 12 && score <= 24) {
  document.querySelector(".container > div:nth-child(4)").style.display =
    "block";
}
