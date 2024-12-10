import { API } from "../constants";
import axios from "axios";

const dashboardServices = {
  getData: async ({ startDate, endDate }) => {
    let url = `${API.DASHBOARD}/get`;
    if (startDate !== undefined) {
      url += `?startDate=${startDate}`;
    }

    if (endDate !== undefined) {
      url += `&endDate=${endDate}`;
    }

    console.log("url", url);
    const response = await axios.get(url);
    return response.data;
  },
};

export default dashboardServices;
