const baseUrl = "https://brainstuck.github.io/conde-test-frontend/result.html";
const imageBaseUrl =
  "https://brainstuck.github.io/conde-test-frontend/assets/img";

let queryString = window.location.search;

const params = new URLSearchParams(queryString);

const level = params.get("level");

const result = document.getElementById(`result_level_${level}`);

result.style.display = "block";

const shared = params.get("shared");

if (shared) {
  const shareBtn = document.getElementById("create-kakaotalk-sharing-btn");
  shareBtn.style.display = "none";
}

const shareText = {
  1: {
    title: "나의 꼰대 레벨은 1, NO꼰대입니다.",
    description: "꼰대테스트 결과를 확인해보세요.",
    imageUrl: `${imageBaseUrl}/level1_test.png`,
  },
  2: {
    title: "나의 꼰대 레벨은 2, 젊은 꼰대입니다.",
    description: "꼰대테스트 결과를 확인해보세요.",
    imageUrl: `${imageBaseUrl}/level2_test.png`,
  },
  3: {
    title: "나의 꼰대 레벨은 3, 확실한 꼰대입니다.",
    description: "꼰대테스트 결과를 확인해보세요.",
    imageUrl: `${imageBaseUrl}/level3_test.png`,
  },
  4: {
    title: "나의 꼰대 레벨은 4, 극악무도한 꼰대입니다.",
    description: "꼰대테스트 결과를 확인해보세요.",
    imageUrl: `${imageBaseUrl}/level4_test.png`,
  },
};

// 카카오 공유하기 버튼
Kakao.init("c0eacf2e129c149837b4eba95b27e79f");
Kakao.Share.createDefaultButton({
  container: "#create-kakaotalk-sharing-btn",
  objectType: "feed",
  content: {
    title: shareText[level].title,
    description: shareText[level].description,
    imageUrl: shareText[level].imageUrl,
    link: {
      mobileWebUrl: `${baseUrl}?level=${level}&shared=1`,
      webUrl: `${baseUrl}?level=${level}&shared=1`,
    },
  },
});
