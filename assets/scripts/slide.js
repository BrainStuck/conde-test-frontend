let currentSlide = 0;
let currentTmpSlide = 0;
/* 이런 방법도 있다.
let btnBoolean = [false, false, false, false,
                  false, false, false, false,
                  false, false, false, false];
*/
let total = 0;
let currentSlidePage = false;

document.querySelectorAll(".start_btn").forEach((element) => {
  element.addEventListener("click", () => {
    if (currentSlide === 0) {
      header.style.display = "block";
    } else if (currentSlide <= 3) {
      currentTmpSlide = (currentSlide - 1) * 4;
      for (let i = 1; i <= 4; i++) {
        document
          .querySelectorAll(`input[name="btn${currentTmpSlide + i}"`)
          .forEach((ele, index) => {
            if (ele.checked === true) {
              /*
            switch (index) {
              case 0:
                total -= 2
                break;
            }
            */
              total += ele.value * 1;
              currentSlidePage = true;
            }
          });
      }

      if (currentSlidePage === false) {
        alert("모든 질문에 답을 선택해 주세요.");
        return false;
      } else {
        currentSlidePage = false;
      }
    }
    currentSlide = currentSlide + 1;

    if (currentSlide === 3) {
      document.querySelector("#test_final_btn").style.display = "block";
      document.querySelector("#test_next_btn").style.display = "none";
    }

    if (currentSlide === 4) {
      sessionStorage.setItem("total", total);
      location.href = "./result.html";
    } else {
      const currentSlideRef = document.getElementById(`slide_${currentSlide}`);
      currentSlideRef.classList.remove("activeSlide");

      const nextSlideRef = document.getElementById(`slide_${currentSlide + 1}`);
      nextSlideRef.classList.add("activeSlide");

      const myBarText = document.getElementById("myBarText");
      myBarText.innerText = `${currentSlide} 페이지 / 3 페이지`;

      const myBar = document.getElementById("myBar");
      myBar.style.width = `${(currentSlide / 3) * 100}%`;
    }
  });
});

// const buttons = document.querySelectorAll(".btn");
// for (const btn of buttons) {
//   btn.addEventListener("click", () => {
//     btn.style.backgroundColor = "red";
//   });
// }
