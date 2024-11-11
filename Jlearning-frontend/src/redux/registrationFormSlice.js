import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import registrationFormServices from "../services/registrationFormServices";

export const getRegistrationForms = createAsyncThunk(
  "get-registrationForms",
  async () => {
    const response = await registrationFormServices.getRegistrationForms();
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

export const cancelForm = createAsyncThunk("cancel-form", async (data) => {
  const response = await registrationFormServices.cancel(data);
  return response;
});

export const confirmForm = createAsyncThunk("confirm-form", async (id) => {
  const response = await registrationFormServices.confirm(id);
  return response;
});

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
      console.log("registration", action.payload);
    });
    builder.addCase(insertRegistrationForm.fulfilled, (state, action) => {
      const { success, message } = action.payload;
      console.log(action.payload);
      if (success) {
        toast.success(message);
      } else {
        toast.error(message);
      }
      state.isRefresh = true;
    });

    builder.addCase(getRegistrationForm.fulfilled, (state, action) => {
      console.log(action.payload);

      state.specific = action.payload;
    });

    builder.addCase(cancelForm.fulfilled, (state, action) => {
      console.log(action.payload);
      const { success, message } = action.payload;
      console.log(action.payload);
      if (success) {
        toast.success(message);
      } else {
        toast.error(message);
      }
      state.isRefresh = true;
    });

    builder.addCase(confirmForm.fulfilled, (state, action) => {
      console.log(action.payload);
      const { success, message } = action.payload;
      console.log(action.payload);
      if (success) {
        toast.success(message);
      } else {
        toast.error(message);
      }
      state.isRefresh = true;
    });
  },
});

export default registrationFormSlice;
