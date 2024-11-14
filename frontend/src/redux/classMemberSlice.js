import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import classMemberServices from "../services/classMemberServices";

export const getClassMembers = createAsyncThunk(
  "get-classMembers",
  async (classId) => {
    const response = await classMemberServices.getClassMembers(classId);
    return response;
  }
);

export const getClassMember = createAsyncThunk(
  "get-classMember",
  async ({ email, classId }) => {
    const response = await classMemberServices.getClassMember({
      email,
      classId,
    });
    return response;
  }
);

export const insertClassMember = createAsyncThunk(
  "insert-classMember",
  async (classMember) => {
    const response = await classMemberServices.insertClassMember(classMember);
    return response;
  }
);
export const addScore = createAsyncThunk("addScore", async (score) => {
  const response = await classMemberServices.addScore(score);
  return response;
});

const classMemberSlice = createSlice({
  name: "classMember",
  initialState: {
    classMember: null,
    data: [],
    isRefresh: false,
    currentPage: "",
    specific: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getClassMembers.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isRefresh = false;
      console.log(action.payload);
    });
    builder.addCase(insertClassMember.fulfilled, (state, action) => {
      state.isRefresh = true;
      const { success, message } = action.payload;
      console.log(action.payload);
      if (success) {
        toast.success(message);
      } else {
        toast.error(message);
      }
      state.isRefresh = success;
    });
    builder.addCase(addScore.fulfilled, (state, action) => {
      const { success, message } = action.payload;
      console.log(action.payload);
      if (success) {
        toast.success(message);
      } else {
        toast.error(message);
      }
      state.isRefresh = success;
    });

    builder.addCase(getClassMember.fulfilled, (state, action) => {
      console.log("class member", action.payload);
      state.specific = action.payload;
    });
  },
});

export default classMemberSlice;
