import { API } from "../constants";
import axios from "axios";

const courseServices = {
  getCourses: async () => {
    const response = await axios.get(API.MANAGE_COURSE + "/get");
    console.log("get-courses: ", response.data);
    return response.data;
  },
  getUserCourses: async (user) => {
    console.log("get-user-courses-input: ", user);
    const response = await axios.post(
      API.MANAGE_COURSE + "/get/user-courses",
      user
    );
    console.log("get-user-courses-response: ", response.data);
    return response.data;
  },
  getCourseById: async (course) => {
    console.log("get-course-by-id: ", course);
    const response = await axios.post(API.MANAGE_COURSE + "/get/by-id", course);
    console.log("get-course-by-id-response: ", response.data);
    return response.data;
  },

  insertCourse: async (course) => {
    console.log("insert course", course);
    const response = await axios.post(API.MANAGE_COURSE + "/insert", course);
    console.log("insert-course-respone: ", response);
    return response.data;
  },
  insertUserCourse: async (userCourse) => {
    console.log("insert-user-course", userCourse);
    const response = await axios.post(
      API.MANAGE_COURSE + "/insert/user-course",
      userCourse
    );
    console.log("insert-user-course-respone: ", response);
    return response.data;
  },
  updateCourse: async (course) => {
    course.price = parseFloat(course.price.replace(/\./g, "").replace("₫", ""));
    console.log("update-course", course);

    console.log(API.MANAGE_COURSE + "/update");
    const response = await axios.post(API.MANAGE_COURSE + "/update", course);
    console.log("update-course-response", response);
    return response.data;
  },

  deactivateClasses: async (course) => {
    const response = await axios.get(API.MANAGE_COURSE + "/deactivate-classes");
    return response.data;
  },
};

export default courseServices;
