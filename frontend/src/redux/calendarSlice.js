import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import calendarServices from "../services/calendarServices";

export const getCalendars = createAsyncThunk(
  "get-calendars",
  async (classId) => {
    const response = await calendarServices.getCalendars(classId);
    return response;
  }
);

export const getCalendar = createAsyncThunk("get-calendar", async (id) => {
  const response = await calendarServices.getCalendar(id);
  return response;
});

export const insertCalendar = createAsyncThunk(
  "insert-calendar",
  async (calendar) => {
    const response = await calendarServices.insertCalendar(calendar);
    return response;
  }
);

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    calendar: null,
    data: [],
    isRefresh: false,
    currentPage: "",
    specific: null,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCalendars.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isRefresh = false;
      console.log(action.payload);
    });
    builder.addCase(insertCalendar.fulfilled, (state, action) => {
      toast.success("Thêm mới người dùng thành công");
      state.isRefresh = true;
    });

    builder.addCase(getCalendar.fulfilled, (state, action) => {
      console.log(action.payload);
      state.specific = action.payload;
    });
  },
});

export default calendarSlice;
