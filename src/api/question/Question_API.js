import axios from "axios";

// export const postQuestion = async (data, accessToken) => {
//   const response = await axios.post(url, data, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });
//   return response.data;
// };



// 질문지 생성 Post API 토큰 x
const url_postQuestion = "http://localhost:3001/create";
export const postQuestion = async (data) => {
  const response = await axios.post(url_postQuestion, data);
  return response.data;
};
