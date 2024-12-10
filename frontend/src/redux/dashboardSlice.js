import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dashboardServices } from "../services";

export const getData = createAsyncThunk(
  "get-data",
  async ({ startDate, endDate }) => {
    const response = await dashboardServices.getData({ startDate, endDate });
    return response;
  }
);

const DashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    data: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default DashboardSlice;
