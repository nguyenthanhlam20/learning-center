import { API } from "../constants";
import axios from "axios";

const classServices = {
  getClasses: async () => {
    const response = await axios.get(API.MANAGE_CLASS);
    return response.data;
  },
  getUserClasses: async (email) => {
    const response = await axios.get(
      API.MANAGE_CLASS + "/get-by-user-email/" + email
    );
    return response.data;
  },
  getClass: async (classId) => {
    const response = await axios.get(API.MANAGE_CLASS + "/" + classId);
    return response.data;
  },
  insertClass: async (data) => {
    console.log("insert new class", data);
    const response = await axios.post(API.MANAGE_CLASS, data);
    return response.data;
  },
  editClass: async (data) => {
    console.log("insert new class", data);
    const response = await axios.put(
      API.MANAGE_CLASS + "/" + data.classId,
      data
    );
    return response.data;
  },
};

export default classServices;
