import { atom } from 'recoil';
import questionForm from '../api/answer/answerdetail'

export const modalState = atom({
    key: 'answerModalState',
    default: false,
});

export const pageState = atom({
    key: 'answerPageState',
    default: 0,
});

/* 질문지 불러오기 */
export const questionState = atom({
  key: 'questionIdForm',
  default: questionForm.data,
})

/* 답변 저장 */
export const answerState = atom({
  key: 'otherAnswerState',
  default: {
    name: '', // 닉네임
    strength: [],
    strengthReview: {
      /* 
        chip_id: review_description
      */
    },
    weakness: [],
    weaknessReview: {

    },
  },
});