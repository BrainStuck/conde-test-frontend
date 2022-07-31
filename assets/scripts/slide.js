let currentSlide = 1;

const nextSlide = () => {
  const header = document.getElementById("header");
  header.style.display = "block";

  const currentSlideRef = document.getElementById(`slide_${currentSlide}`);
  currentSlideRef.classList.remove("activeSlide");

  const nextSlideRef = document.getElementById(`slide_${currentSlide + 1}`);
  nextSlideRef.classList.add("activeSlide");

  currentSlide = currentSlide + 1;

  const myBarText = document.getElementById("myBarText");
  myBarText.innerText = `${currentSlide - 1} 페이지 / 3 페이지`;

  const myBar = document.getElementById("myBar");
  myBar.style.width = `${((currentSlide - 1) / 3) * 100}%`;
};
