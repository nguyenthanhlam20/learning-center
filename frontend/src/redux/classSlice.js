import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import classServices from "../services/classServices";

export const getClasses = createAsyncThunk("get-classes", async () => {
  const response = await classServices.getClasses();
  return response;
});

export const getUserClasses = createAsyncThunk(
  "get-user-classes",
  async (email) => {
    const response = await classServices.getUserClasses(email);
    return response;
  }
);

export const getClass = createAsyncThunk("get-class", async (classId) => {
  const response = await classServices.getClass(classId);
  return response;
});

export const insertClass = createAsyncThunk("insert-class", async (data) => {
  const response = await classServices.insertClass(data);
  return response;
});

export const editClass = createAsyncThunk("edit-class", async (data) => {
  const response = await classServices.editClass(data);
  return response;
});

const classSlice = createSlice({
  name: "classes",
  initialState: {
    class: null,
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
    builder.addCase(getClasses.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isRefresh = false;
      console.log(action.payload);
    });
    builder.addCase(getUserClasses.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isRefresh = false;
      console.log(action.payload);
    });
    builder.addCase(insertClass.fulfilled, (state, action) => {
      const { success, message } = action.payload;
      console.log(action.payload);
      if (success) {
        toast.success(message);
      } else {
        toast.error(message);
      }
      state.isRefresh = success;
    });
    builder.addCase(editClass.fulfilled, (state, action) => {
      const { success, message } = action.payload;
      console.log(action.payload);
      if (success) {
        toast.success(message);
      } else {
        toast.error(message);
      }
      state.isRefresh = success;
    });
    builder.addCase(getClass.fulfilled, (state, action) => {
      console.log(action.payload);
      state.specific = action.payload;
    });
  },
});

export default classSlice;
