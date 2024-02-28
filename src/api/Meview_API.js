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

