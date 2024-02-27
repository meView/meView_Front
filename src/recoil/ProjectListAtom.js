// import { atom, selector } from "recoil";
// import ProjectItem from "../api/meview_project/projectlist";
// import ProjectStrength from "../api/meview_project/projectstrength";
// import ProjectWeakness from "../api/meview_project/projectweakness";
// import NicknameReview from "../api/meview_project/nicknamereview";

// export const projectListState = atom({
//   key: "projectListState",
//   default: ProjectItem.data,
// });

// export const projectStrengthState = atom({
//   key: "projectStrengthState",
//   default: ProjectStrength.data,
// });

// export const projectWeaknessState = atom({
//   key: "projectWeaknessState",
//   default: ProjectWeakness.data,
// });

// // 강점인지 약점인지 구분
// export const selectedStrengthState = atom({
//   key: "selectedStrengthState",
//   default: "Strength",
// });

// // 닉네임별 자세한 리뷰
// export const nicknameReviewState = atom({
//   key: "nicknameReviewState",
//   default: NicknameReview.data,
// });

import { atom, selector } from "recoil";

// JSON 파일을 비동기적으로 불러와서 .data 속성만 반환하는 함수들
const fetchProjectItemData = async () => {
  const response = await fetch("../api/meview_project/projectlist.json");
  if (!response.ok) {
    throw new Error("Failed to fetch project items");
  }
  const data = await response.json();
  return data.data; // .data 속성만 반환
};

const fetchProjectStrengthData = async () => {
  const response = await fetch("../api/meview_project/projectstrength.json");
  if (!response.ok) {
    throw new Error("Failed to fetch project strengths");
  }
  const data = await response.json();
  return data.data; // .data 속성만 반환
};

const fetchProjectWeaknessData = async () => {
  const response = await fetch("../api/meview_project/projectweakness.json");
  if (!response.ok) {
    throw new Error("Failed to fetch project weaknesses");
  }
  const data = await response.json();
  return data.data; // .data 속성만 반환
};

const fetchNicknameReviewData = async () => {
  const response = await fetch("../api/meview_project/nicknamereview.json");
  if (!response.ok) {
    throw new Error("Failed to fetch nickname reviews");
  }
  const data = await response.json();
  return data.data; // .data 속성만 반환
};

// Recoil 상태를 비동기적으로 초기화하는 selector들
export const projectListState = selector({
  key: "projectListState",
  get: async () => {
    return await fetchProjectItemData();
  },
});

export const projectStrengthState = selector({
  key: "projectStrengthState",
  get: async () => {
    return await fetchProjectStrengthData();
  },
});

export const projectWeaknessState = selector({
  key: "projectWeaknessState",
  get: async () => {
    return await fetchProjectWeaknessData();
  },
});

export const nicknameReviewState = selector({
  key: "nicknameReviewState",
  get: async () => {
    return await fetchNicknameReviewData();
  },
});


export const selectedStrengthState = atom({
  key: "selectedStrengthState",
  default: "Strength",
});

