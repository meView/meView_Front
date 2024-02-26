import { atom, selector } from "recoil";
import strengthData from "../api/meview_capability/strength";
import weaknessData from "../api/meview_capability/weakness";



export const selectedChipInfoState = atom({
  key: "selectedChipInfoState",
  default: null,
});

export const strengthState = atom({
  key: "strengthState",
  default: strengthData, // 초기 상태 -> strength.json
});



export const selectedStrengthChipState = atom({
  key: "selectedStrengthChipState", // 고유한 key
  default: "",
});

// 총 강점 개수 return 선택자
export const totalStrengthSelector = selector({
  key: "totalStrengthSelector",
  get: ({ get }) => {
    const strength = get(strengthState);
    return Object.values(strength).reduce(
      (total, currentValue) => total + currentValue,
      0
    );
  },
});

export const weaknessState = atom({
  key: "weaknessState",
  default: weaknessData, // 초기 상태 -> weakness.json
});

// 총 약점 개수 return 선택자
export const totalWeaknessSelector = selector({
  key: "totalWeaknessSelector",
  get: ({ get }) => {
    const weakness = get(weaknessState);
    return Object.values(weakness).reduce(
      (total, currentValue) => total + currentValue,
      0
    );
  },
});
