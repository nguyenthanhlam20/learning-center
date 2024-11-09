import { API } from "../constants";
import axios from "axios";

const classServices = {
  updateInfo: async (classes) => {
    console.log("update-info: ", classes);
    const response = await axios.put(
      API.MANAGE_CLASS + "/update-info",
      classes
    );
    return response.data;
  },
  getClasses: async () => {
    const response = await axios.get(API.MANAGE_CLASS);
    console.log("res", response);
    return response.data;
  },
  getClass: async (email) => {
    const response = await axios.get(
      API.MANAGE_CLASS + "/get-class?email=" + email
    );
    console.log("res", response);
    return response.data;
  },
  insertClass: async (data) => {
    console.log("insert-class", data);
    console.log("API.MANAGE_CLASS", API.MANAGE_CLASS);
    const response = await axios.post(API.MANAGE_CLASS, data);
    console.log("insert-class-respone: ", response);
    return response.data;
  },
  updateRole: async (classes) => {
    const response = await axios.put(API.MANAGE_CLASS + "/update", classes);
    console.log("update-class-role", response);
    return response.data;
  },
};

export default classServices;
