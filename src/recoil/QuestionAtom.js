import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "localStorage", 
  storage: localStorage,
});

export const postState = atom({
  key: 'questionPostState',
  default: false,
  effects_UNSTABLE: [persistAtom],
})

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


