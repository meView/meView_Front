import axios from "axios";

// meview/capability 내 강점
const url_getStrength = `${process.env.REACT_APP_SERVER_ADDRESS}/meview/capability/strength`;
export const getStrength = async (access_token) => {
  const response = await axios.get(url_getStrength, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response.data.data;
};
// meview/capability 내 약점
const url_getWeakness = `${process.env.REACT_APP_SERVER_ADDRESS}/meview/capability/weakness`;
export const getWeakness = async (access_token) => {
  const response = await axios.get(url_getWeakness, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response.data.data;
};


// meview/capability 내 강점-칩선택
const url_getStrengthChipDetail = `${process.env.REACT_APP_SERVER_ADDRESS}/meview/capability/strength`;
export const getStrengthChipDetail = async (access_token, chip_name) => {
  const response = await axios.get(`${url_getStrengthChipDetail}/${chip_name}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return response.data.data;
}



// meview/capability 내 약점-칩선택
const url_getWeaknessChipDetail = `${process.env.REACT_APP_SERVER_ADDRESS}/meview/capability/weakness`;
export const getWeaknessChipDetail = async (access_token, chip_name) => {
  const response = await axios.get(`${url_getWeaknessChipDetail}/${chip_name}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return response.data.data;
}


// 닉네임별 자세한 리뷰
const url_getNicknameReview = `${process.env.REACT_APP_SERVER_ADDRESS}/meview/capability/both`;
export const getNicknameReview = async (access_token, question_id, response_responder) => {
  const response = await axios.get(`${url_getNicknameReview}/${question_id}/${response_responder}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return response.data.data;
}



// meview/project 내 프로젝트 목록
const url_getProjects = `${process.env.REACT_APP_SERVER_ADDRESS}/meview/projects`;
export const getProjects = async (access_token) => {
  const response = await axios.get(url_getProjects, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response.data.data;
}

// meview/project 내 강점
const url_getProjectStrength = `${process.env.REACT_APP_SERVER_ADDRESS}/meview/projects/strength`;
export const getProjectStrength = async (access_token, question_id) => {
  const response = await axios.get(`${url_getProjectStrength}/${question_id}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return response.data.data;
};
// meview/project 내 약점
const url_getProjectWeakness = `${process.env.REACT_APP_SERVER_ADDRESS}/meview/projects/weakness`;
export const getProjectWeakness = async (access_token, question_id) => {
  const response = await axios.get(`${url_getProjectWeakness}/${question_id}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return response.data.data;
}
