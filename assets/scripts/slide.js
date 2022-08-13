let currentSlide = 1;
let total = 0;
let currentSlidePage = true;

const slideSetting = (n) => {
  console.log(n);
  document.querySelectorAll(".slide").forEach((ele) => {
    ele.classList.remove("activeSlide");
  });

  console.log(`#slide_${n}`);
  const nextSlideRef = document.querySelector(`#slide_${n}`);
  nextSlideRef.classList.add("activeSlide");

  const myBarText = document.querySelector("#myBarText");
  myBarText.innerText = `${n - 1} 페이지 / 3 페이지`;

  const myBar = document.querySelector("#myBar");
  myBar.style.width = `${((n - 1) / 3) * 100}%`;
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".start_btn").forEach((element) => {
    element.addEventListener("click", () => {
      if (currentSlide === 1) {
        const headerRef = document.querySelector("#header");
        headerRef.style.display = "block";
        slideSetting(++currentSlide);
      } else if (currentSlide <= 5) {
        if (currentSlide === 2) {
          const prevSlideBtn = document.getElementById("prevSlide");
          prevSlideBtn.style.display = "inline-block";
        }
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
          slideSetting(++currentSlide);
        } else {
          const spinner = document.querySelector("#spinner-container");
          spinner.style.display = "flex";

          setTimeout(() => {
            if (total < -12) {
              location.href = "./result.html?level=1";
            } else if (total < 0) {
              location.href = "./result.html?level=2";
            } else if (total < 12) {
              location.href = "./result.html?level=3";
            } else {
              location.href = "./result.html?level=4";
            }
          }, 2000);
        }
      }
    });
  });

  // 뒤로가기;
  document.querySelector("#prevSlide").addEventListener("click", () => {
    if (currentSlide === 3) {
      const prevSlideBtn = document.getElementById("prevSlide");
      prevSlideBtn.style.display = "none";
    }
    document.getElementById("test_next_btn").style.display = "block";
    document.getElementById("test_final_btn").style.display = "none";
    slideSetting(--currentSlide);
  });
});
