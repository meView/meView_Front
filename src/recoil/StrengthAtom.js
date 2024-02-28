import { atom, selector } from "recoil";
import chipstrength from "../api/meview_capability/chipstrength";
import chipweakness from "../api/meview_capability/chipweakness";

// 강점 + 약점
export const selectedChipInfoState = atom({
  key: "selectedChipInfoState",
  default: null,
});

// 이미지 로딩 처리
export const imageLoadingState = atom({
  key: "imageLoadingState",
  default: false, 
});

// 강점 in chipreview
export const strengthChipDetailState = atom({
  key: "strengthChipDetailState",
  default: chipstrength.data, // 초기 상태 -> chipstrength.json
});

//약점 in chipreview
export const weaknessChipDetailState = atom({
  key: "weaknessChipDetailState",
  default: chipweakness.data, // 초기 상태 -> chipweakness.json
});

export const totalStrengthReviewSelector = selector({
  // 총 강점 리뷰 개수 반환 선택자
  key: "totalStrengthReviewSelector",
  get: ({ get }) => {
    const strengthReviews = get(strengthChipDetailState);
    return strengthReviews.length; // 강점 리뷰의 총 개수 반환
  },
});

export const totalWeaknessReviewSelector = selector({
  // 총 약점 리뷰 개수 반환 선택자
  key: "totalWeaknessReviewSelector",
  get: ({ get }) => {
    const weaknessReviews = get(weaknessChipDetailState);
    return weaknessReviews.length; // 약점 리뷰의 총 개수 반환
  },
});
