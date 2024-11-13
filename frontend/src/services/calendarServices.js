import { API } from "../constants";
import axios from "axios";

const calendarServices = {
  getCalendars: async (classId) => {
    const response = await axios.get(API.MANAGE_CALENDAR + "/class/" + classId);
    console.log("res", response);
    return response.data;
  },
  getCalendar: async (id) => {
    const response = await axios.get(API.MANAGE_CALENDAR + "/" + id);
    console.log("res", response);
    return response.data;
  },
  insertCalendar: async (calendar) => {
    console.log("insert-calendar", calendar);
    const response = await axios.post(API.MANAGE_CALENDAR, calendar);
    console.log("insert-calendar-respone: ", response);
    return response.data;
  },
};

export default calendarServices;
