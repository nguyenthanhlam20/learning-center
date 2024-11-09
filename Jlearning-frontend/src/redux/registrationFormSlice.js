import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import registrationFormServices from "../services/registrationFormServices";

export const updateInfo = createAsyncThunk(
  "update-info",
  async (registrationForm) => {
    const response = await registrationFormServices.updateInfo(
      registrationForm
    );
    return response;
  }
);

export const getRegistrationForms = createAsyncThunk(
  "get-registrationForms",
  async (role) => {
    const response = await registrationFormServices.getRegistrationForms(role);
    return response;
  }
);

export const getRegistrationForm = createAsyncThunk(
  "get-registrationForm",
  async (email) => {
    const response = await registrationFormServices.getRegistrationForm(email);
    return response;
  }
);

export const insertRegistrationForm = createAsyncThunk(
  "insert-registrationForm",
  async (registrationForm) => {
    const response = await registrationFormServices.insertRegistrationForm(
      registrationForm
    );
    return response;
  }
);

export const updateRole = createAsyncThunk(
  "update-role",
  async (registrationForm) => {
    const response = await registrationFormServices.updateRole(
      registrationForm
    );
    return response;
  }
);

const registrationFormSlice = createSlice({
  name: "registrationForm",
  initialState: {
    registrationForm: null,
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
    builder.addCase(getRegistrationForms.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isRefresh = false;
      console.log(action.payload);
    });
    builder.addCase(insertRegistrationForm.fulfilled, (state, action) => {
      toast.success("Thêm mới người dùng thành công");
      state.isRefresh = true;
    });
    builder.addCase(updateRole.fulfilled, (state, action) => {
      toast.success("Phân quyền người dùng thành công");
      state.isRefresh = true;
    });
    builder.addCase(getRegistrationForm.fulfilled, (state, action) => {
      console.log(action.payload);
      state.specific = action.payload;
    });
  },
});

export default registrationFormSlice;
