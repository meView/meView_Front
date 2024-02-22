import { atom } from 'recoil';

/* 생성한 질문지들의 상태 저장 - 더미 데이터 테스트용으로 추가 */
export const questionFormState = atom({
    key: 'questionFormState',
    default: [{
        question_id: 1,
        question_title: '스위프 프로젝트',
        question_type: 'strength',
        question_target: 'team',
    }, {
        question_id: 2,
        question_title: '개발자로서 내 장점은?',
        question_type: 'strength',
        question_target: 'friend',
    }, {
        question_id: 3,
        question_title: '개발자로서 내 단점은?',
        question_type: 'weakness',
        question_target: 'friend',
    }, {
        question_id: 4,
        question_title: '평상 시 내 장점',
        question_type: 'strength',
        question_target: 'friend',
    }, {
        question_id: 5,
        question_title: '인간관계에서의 내 장점은?',
        question_type: 'strength',
        question_target: 'friend',
    }, {
        question_id: 6,
        question_title: '면접 때 어필할만한 내 장점은?',
        question_type: 'strength',
        question_target: 'friend',
    }
    ,]
});

export const linkToastState = atom({
    key: 'linkToastState',
    default: false,
});

export const bottomSheetState = atom({
    key: 'bottomSheetState',
    default: false,
});

export const questionIdState = atom({
    key: 'questionIdState',
    default: -1,
});

export const modifiedToastState = atom({
    key: 'modifiedToastState',
    default: false,
});

export const backModalState = atom({
    key: 'backModalState',
    default: false,
});

export const deleteModalState = atom({
    key: 'deleteModalState',
    default: false,
});