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
    answer1: "team",
    answer2: "",
    answer3: "strength",
  },
});

// const data = {
//   question_target: "리뷰 대상 정보", // ["team" or "friend"]
//   question_title: "질문지 제목",
//   question_type: "리뷰 종류", // ["strength" or "weakness" or "both"]
// };
