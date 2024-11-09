import { API } from "../constants";
import axios from "axios";

const registrationFormServices = {
  updateInfo: async (registrationForm) => {
    console.log("update-info: ", registrationForm);
    const response = await axios.put(
      API.MANAGE_REGISTRATION_FORM + "/update-info",
      registrationForm
    );
    return response.data;
  },
  getRegistrationForm: async (email) => {
    const response = await axios.get(
      API.MANAGE_REGISTRATION_FORM + "/get-registrationForm?email=" + email
    );
    console.log("res", response);
    return response.data;
  },
  insertRegistrationForm: async (registrationForm) => {
    console.log("insert-registrationForm", registrationForm);
    const response = await axios.post(
      API.MANAGE_REGISTRATION_FORM,
      registrationForm
    );
    console.log("insert-registrationForm-respone: ", response);
    return response.data;
  },
  updateRole: async (registrationForm) => {
    const response = await axios.put(
      API.MANAGE_REGISTRATION_FORM + "/update",
      registrationForm
    );
    console.log("update-registrationForm-role", response);
    return response.data;
  },
};

export default registrationFormServices;
