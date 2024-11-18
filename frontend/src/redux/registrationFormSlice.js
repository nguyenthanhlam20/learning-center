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

export const getRegistrationFormsByUser = createAsyncThunk(
  "get-registrationForms-byuser",
  async (studentEmail) => {
    const response = await registrationFormServices.getRegistrationFormsByUser(
      studentEmail
    );
    return response;
  }
);

export const getRegistrationForm = createAsyncThunk(
  "get-registrationForm",
  async (id) => {
    const response = await registrationFormServices.getRegistrationForm(id);
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

export const pendingForm = createAsyncThunk("pending-form", async (id) => {
  const response = await registrationFormServices.pending(id);
  return response;
});

export const successForm = createAsyncThunk("success-form", async (id) => {
  const response = await registrationFormServices.success(id);
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
    setIsRefresh: (state, action) => {
      state.isRefresh = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRegistrationForms.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isRefresh = false;
      console.log("registration", action.payload);
    });
    builder.addCase(getRegistrationFormsByUser.fulfilled, (state, action) => {
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
      state.isRefresh = success;
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
      state.isRefresh = success;
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
      state.isRefresh = success;
    });
    builder.addCase(successForm.fulfilled, (state, action) => {
      console.log(action.payload);
      const { success, message } = action.payload;
      console.log(action.payload);
      if (success) {
        toast.success(message);
      } else {
        toast.error(message);
      }
      state.isRefresh = success;
    });
    builder.addCase(pendingForm.fulfilled, (state, action) => {
      console.log(action.payload);
      const { success, message } = action.payload;
      console.log(action.payload);
      if (success) {
        toast.success(message);
      } else {
        toast.error(message);
      }
      state.isRefresh = success;
    });
  },
});

export default registrationFormSlice;
