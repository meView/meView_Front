import { atom } from 'recoil';

/* 생성한 질문지들의 상태 저장 - 더미 데이터 테스트용으로 추가 */
export const questionFormState = atom({
    key: 'questionFormState',
    default: [{
        question_id: 1,
        question_title: '스위프 프로젝트',
        question_type: 'strength',
        question_target: 'project',
    }, {
        question_id: 2,
        question_title: '개발자로서 내 장점은?',
        question_type: 'strength',
        question_target: 'friend',
    }, {
        question_id: 2,
        question_title: '개발자로서 내 장점은?',
        question_type: 'strength',
        question_target: 'friend',
    }, {
        question_id: 2,
        question_title: '개발자로서 내 장점은?',
        question_type: 'strength',
        question_target: 'friend',
    }, {
        question_id: 2,
        question_title: '개발자로서 내 장점은?',
        question_type: 'strength',
        question_target: 'friend',
    }, {
        question_id: 2,
        question_title: '개발자로서 내 장점은?',
        question_type: 'strength',
        question_target: 'friend',
    }
    ,]
});

export const linkToastState = atom({
    key: 'linkToastState',
    default: false,
});