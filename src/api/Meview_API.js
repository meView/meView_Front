import axios from "axios";

// 토큰 있을 때 ->
// export const getStrength = async () => {
//   const response = await axios.get(url, {
//     headers: {
//       Authorization: `Bearer ${access_token}`,
//     },
//   });
//   return response.data;
// }
const url_getStrength = "http://localhost:3001/strength";
export const getStrength = async () => {
  const response = await axios.get(url_getStrength);
  return response.data.data;
};

const url_getWeakness = "http://localhost:3001/weakness";
export const getWeakness = async () => {
  const response = await axios.get(url_getWeakness);
  return response.data.data;
};
