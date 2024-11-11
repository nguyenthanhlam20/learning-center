import { API } from "../constants";
import axios from "axios";

const classMemberServices = {
  updateInfo: async (classMember) => {
    console.log("update-info: ", classMember);
    const response = await axios.put(
      API.MANAGE_CLASS_MEMBER + "/update-info",
      classMember
    );
    return response.data;
  },
  getClassMembers: async (classId) => {
    const response = await axios.get(API.MANAGE_CLASS_MEMBER + "/" + classId);
    console.log("res", response);
    return response.data;
  },

  getClassMember: async ({ email, classId }) => {
    const response = await axios.get(
      `${API.MANAGE_CLASS_MEMBER}/find?email=${email}&classId=${classId}`
    );
    return response.data;
  },
  insertClassMember: async (classMember) => {
    console.log("insert-classMember", classMember);
    const response = await axios.post(API.MANAGE_CLASS_MEMBER, classMember);
    console.log("insert-classMember-respone: ", response);
    return response.data;
  },
  updateRole: async (classMember) => {
    const response = await axios.put(
      API.MANAGE_CLASS_MEMBER + "/update",
      classMember
    );
    console.log("update-classMember-role", response);
    return response.data;
  },
};

export default classMemberServices;
