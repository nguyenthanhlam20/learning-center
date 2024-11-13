import { API } from "../constants";
import axios from "axios";

const classMemberServices = {
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
  addScore: async (score) => {
    console.log("score", score);
    const response = await axios.post(
      API.MANAGE_CLASS_MEMBER + "/add-grade",
      score
    );
    console.log("score: ", response);
    return response.data;
  },
};

export default classMemberServices;
