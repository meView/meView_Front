import { atom } from "recoil";

export const modalState = atom({
  key: "questionModalState",
  default: false,
});

export const pageState = atom({
  key: "questionPageState",
  default: 1,
});

/* 질문지 생성 시 선택하는 상태 저장 */
export const answerState = atom({
  key: "answerState",
  default: {
    answer1: "",
    answer2: "",
    answer3: "",
  },
});


