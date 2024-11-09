import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import userServices from "../services/userServices";
import { ROLE } from "../constants/constants";

export const updateInfo = createAsyncThunk("update-info", async (user) => {
  const response = await userServices.updateInfo(user);
  return response;
});

export const getUsers = createAsyncThunk("get-users", async (role) => {
  const response = await userServices.getUsers(role);
  return response;
});

export const getStaffs = createAsyncThunk("get-staffs", async () => {
  const response = await userServices.getUsers(ROLE.STAFF);
  return response;
});

export const getTeachers = createAsyncThunk("get-teachers", async () => {
  const response = await userServices.getUsers(ROLE.TEACHER);
  return response;
});

export const getUser = createAsyncThunk("get-user", async (email) => {
  const response = await userServices.getUser(email);
  return response;
});

export const insertUser = createAsyncThunk("insert-user", async (user) => {
  const response = await userServices.insertUser(user);
  return response;
});

export const updateRole = createAsyncThunk("update-role", async (user) => {
  const response = await userServices.updateRole(user);
  return response;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    data: [],
    isRefresh: false,
    currentPage: "",
    specific: null,
    staffs: [],
    teachers: [],
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateInfo.fulfilled, (state, action) => {
      const { user } = action.payload;
      console.log(user);
      toast.success("Cập nhật thông tin thành công");
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isRefresh = false;
      console.log(action.payload);
    });
    builder.addCase(getStaffs.fulfilled, (state, action) => {
      state.staffs = action.payload;
      state.isRefresh = false;
      console.log(action.payload);
    });
    builder.addCase(getTeachers.fulfilled, (state, action) => {
      state.teachers = action.payload;
      state.isRefresh = false;
      console.log(action.payload);
    });
    builder.addCase(insertUser.fulfilled, (state, action) => {
      toast.success("Thêm mới người dùng thành công");
      state.isRefresh = true;
    });
    builder.addCase(updateRole.fulfilled, (state, action) => {
      toast.success("Phân quyền người dùng thành công");
      state.isRefresh = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.specific = action.payload;
    });
  },
});

export default userSlice;
