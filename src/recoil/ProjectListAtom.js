import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

// 새로 고침 방지 -> localStorage에 저장
const { persistAtom } = recoilPersist({
  key: "localStorage", //원하는 key 값 입력
  storage: localStorage,
});

export const isStrengthActiveState = atom({
  key: "isStrengthActiveState", // 고유한 키
  default: "strength",
  effects_UNSTABLE: [persistAtom],
});


// 강점 + 약점 칩 선택 정보 저장
export const selectedChipInfoState = atom({
  key: "selectedChipInfoState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

// 이미지 로딩 처리
export const imageLoadingState = atom({
  key: "imageLoadingState",
  default: false,
});

//question_id 저장 -> localStorage에 저장
export const question_idState = atom({
  key: "question_idState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

//nickname 저장 -> localStorage에 저장
export const nicknameState = atom({
  key: "nicknameState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

// 강점인지 약점인지 구분
export const selectedStrengthState = atom({
  key: "selectedStrengthState",
  default: "Strength",
  effects_UNSTABLE: [persistAtom],
});
