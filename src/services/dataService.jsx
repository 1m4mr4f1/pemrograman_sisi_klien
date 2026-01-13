import axios from "axios";


export const expensesService = async () => {
  try {
    const token = localStorage.getItem("token"); 
    const response = await axios.get(`${API_URL}/expenses`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: "Gagal mengambil data expenses" };
  }
};