import axios from "axios";

const url = "http://localhost:3001/create";

// export const postQuestion = async (data, accessToken) => {
//   const response = await axios.post(url, data, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });
//   return response.data;
// };

// 토큰 제거
export const postQuestion = async (data) => {
  const response = await axios.post(url, data);
  return response.data;
}