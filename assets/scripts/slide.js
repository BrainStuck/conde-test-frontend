let currentSlide = 1;
let total = 0;
let currentSlidePage = true;

const goNextSlide = () => {
  const currentSlideRef = document.getElementById(`slide_${currentSlide}`);
  currentSlideRef.classList.remove("activeSlide");

  const nextSlideRef = document.getElementById(`slide_${currentSlide + 1}`);
  nextSlideRef.classList.add("activeSlide");

  const myBarText = document.getElementById("myBarText");
  myBarText.innerText = `${currentSlide} 페이지 / 3 페이지`;

  const myBar = document.getElementById("myBar");
  myBar.style.width = `${(currentSlide / 3) * 100}%`;

  currentSlide += 1;
};

document.querySelectorAll(".start_btn").forEach((element) => {
  element.addEventListener("click", () => {
    if (currentSlide === 1) {
      const headerRef = document.getElementById("header");
      headerRef.style.display = "block";
      goNextSlide();
    } else if (currentSlide <= 4) {
      for (let i = 1; i <= 4; i++) {
        let isChecked = false;
        const questionRef = document.querySelectorAll(
          `input[name=btn${(currentSlide - 2) * 4 + i}]`
        );
        questionRef.forEach((elem) => {
          if (elem.checked === true) {
            total += elem.value * 1;
            isChecked = true;
          }
        });
        if (isChecked === false) {
          alert("모든 질문에 응답을 완료해주세요.");
          return;
        }
      }
      if (currentSlide !== 4) {
        if (currentSlide === 3) {
          document.getElementById("test_next_btn").style.display = "none";
          document.getElementById("test_final_btn").style.display = "block";
        }
        goNextSlide();
      } else {
        if (total < -12) {
          location.href = "/result.html?level=1";
        } else if (total < 0) {
          location.href = "/result.html?level=2";
        } else if (total < 12) {
          location.href = "/result.html?level=3";
        } else {
          location.href = "/result.html?level=4";
        }
      }
    }
  });
});
