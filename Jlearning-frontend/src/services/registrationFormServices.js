import { API } from "../constants";
import axios from "axios";

const registrationFormServices = {
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
};

export default registrationFormServices;
