let queryString = window.location.search;

const params = new URLSearchParams(queryString);

const level = params.get("level");

const result = document.getElementById(`result_level_${level}`);

result.style.display = "block";

// 카카오 공유하기 버튼
Kakao.init("c0eacf2e129c149837b4eba95b27e79f");
Kakao.Share.createDefaultButton({
  container: "#create-kakaotalk-sharing-btn",
  objectType: "feed",
  content: {
    title: "딸기 치즈 케익",
    description: "#케익 #딸기 #삼평동 #카페 #분위기 #소개팅",
    imageUrl:
      "http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
    link: {
      mobileWebUrl: "https://developers.kakao.com",
      webUrl: "https://developers.kakao.com",
    },
  },
  social: {
    likeCount: 286,
    commentCount: 45,
    sharedCount: 845,
  },
  buttons: [
    {
      title: "웹으로 보기",
      link: {
        mobileWebUrl: "https://developers.kakao.com",
        webUrl: "https://developers.kakao.com",
      },
    },
    {
      title: "앱으로 보기",
      link: {
        mobileWebUrl: "https://developers.kakao.com",
        webUrl: "https://developers.kakao.com",
      },
    },
  ],
});
