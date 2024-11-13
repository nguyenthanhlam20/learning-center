import { API } from "../constants";
import axios from "axios";

const userServices = {
  updateInfo: async (user) => {
    console.log("update-info: ", user);
    const response = await axios.put(API.MANAGE_ACCOUNT + "/update-info", user);
    return response.data;
  },
  getUser: async (email) => {
    const response = await axios.get(
      API.MANAGE_ACCOUNT + "/get-user?email=" + email
    );
    console.log("res", response);
    return response.data;
  },
  getUsers: async (role) => {
    const response = await axios.get(
      API.MANAGE_ACCOUNT + "/get-users?role=" + role
    );
    console.log("res", response);
    return response.data;
  },
  insertUser: async (user) => {
    console.log("insert-user", user);
    const response = await axios.post(API.MANAGE_ACCOUNT + "/insert", user);
    console.log("insert-user-respone: ", response);
    return response.data;
  },
  updateRole: async (user) => {
    const response = await axios.put(API.MANAGE_ACCOUNT + "/update", user);
    console.log("update-user-role", response);
    return response.data;
  },
};

export default userServices;
