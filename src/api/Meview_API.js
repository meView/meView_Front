import axios from "axios";


// // 토큰 있을 때 ->
// const url_getStrength = "http://meview.store/meview/capability/strength";
// export const getStrength = async (access_token) => {
//   const response = await axios.get(url_getStrength, {
//     headers: {
//       Authorization: `Bearer ${access_token}`,
//     },
//   });
//   return response.data.data;
// };

// meview/capability 내 강점
const url_getStrength = "http://localhost:3001/strength";
export const getStrength = async () => {
  const response = await axios.get(url_getStrength);
  return response.data.data;
};

// meview/capability 내 약점
const url_getWeakness = "http://localhost:3001/weakness";
export const getWeakness = async () => {
  const response = await axios.get(url_getWeakness);
  return response.data.data;
};

// meview/capability 내 강점-칩선택
const url_getStrengthChipDetail = "http://localhost:3001";
export const getStrengthChipDetail = async (chipName) => {
  try {
    const response = await axios.get(
      `${url_getStrengthChipDetail}/${chipName}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch chip detail:", error);
    throw error;
  }
};

// meview/capability 내 약점-칩선택
const url_getWeaknessChipDetail = "http://localhost:3001";
export const getWeaknessChipDetail = async (chipName) => {
  try {
    const response = await axios.get(
      `${url_getWeaknessChipDetail}/${chipName}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch chip detail:", error);
    throw error;
  }
};

// meview/capability 닉네임별 자세한 리뷰
const url_getNicknameReview = "http://localhost:3001";
export const getNicknameReview = async (question_id, response_responder) => {
  try {
    const response = await axios.get(
      // `${url_getNicknameReview}/${question_id}/${response_responder}`
      `${url_getNicknameReview}/${response_responder}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch nickname review:", error);
    throw error;
  }
};

// 미뷰/project 프로젝트로 보기
const url_getProjects = "http://localhost:3001/projects";
export const getProjects = async () => {
  const response = await axios.get(url_getProjects);
  return response.data.data;
};

// 미뷰/project 내 강점
const url_getProjectStrength = "http://localhost:3001";
export const getProjectStrength = async (question_id) => {
  try {
    const response = await axios.get(
      `${url_getProjectStrength}/${question_id}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch project strength:", error);
    throw error;
  }
};

// 미뷰/project 내 약점
const url_getProjectWeakness = "http://localhost:3001";
export const getProjectWeakness = async (question_id) => {
  try {
    const response = await axios.get(
      `${url_getProjectWeakness}/${question_id}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch project weakness:", error);
    throw error;
  }
};
