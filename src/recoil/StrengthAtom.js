import { atom, selector } from "recoil";
import strengthData from "../api/meview_capability/strength";
import weaknessData from "../api/meview_capability/weakness";
import chipstrength from "../api/meview_capability/chipstrength";
import chipweakness from "../api/meview_capability/chipweakness";


// 강점 + 약점
export const selectedChipInfoState = atom({
  key: "selectedChipInfoState",
  default: null,
});

export const strengthState = atom({
  key: "strengthState",
  default: strengthData.data, // 초기 상태 -> strength.json
});

// 강점 in chipreview
export const strengthChipDetailState = atom({
  key: "strengthChipDetailState",
  default: chipstrength.data, // 초기 상태 -> chipstrength.json
});

export const totalStrengthReviewSelector = selector({
  // 총 강점 리뷰 개수 반환 선택자
  key: "totalStrengthReviewSelector",
  get: ({ get }) => {
    const strengthReviews = get(strengthChipDetailState);
    return strengthReviews.length; // 강점 리뷰의 총 개수 반환
  },
});

// 약점 in chipreview
export const weaknessChipDetailState = atom({
  key: "weaknessChipDetailState",
  default: chipweakness.data, // 초기 상태 -> chipweakness.json
});


export const totalWeaknessReviewSelector = selector({
  // 총 약점 리뷰 개수 반환 선택자
  key: "totalWeaknessReviewSelector",
  get: ({ get }) => {
    const weaknessReviews = get(weaknessChipDetailState);
    return weaknessReviews.length; // 약점 리뷰의 총 개수 반환
  },
});



// 강점 in 미뷰페이지
export const selectedStrengthChipState = atom({
  key: "selectedStrengthChipState", // 고유한 key
  default: "",
});


export const totalStrengthSelector = selector({
  // 총 강점 개수 return 선택자
  key: "totalStrengthSelector",
  get: ({ get }) => {
    const strength = get(strengthState);
    return Object.values(strength).reduce(
      (total, currentValue) => total + currentValue,
      0
    );
  },
});

// 약점 in 미뷰페이지
export const weaknessState = atom({
  key: "weaknessState",
  default: weaknessData.data, // 초기 상태 -> weakness.json
});


export const totalWeaknessSelector = selector({
  // 총 약점 개수 return 선택자
  key: "totalWeaknessSelector",
  get: ({ get }) => {
    const weakness = get(weaknessState);
    return Object.values(weakness).reduce(
      (total, currentValue) => total + currentValue,
      0
    );
  },
});
