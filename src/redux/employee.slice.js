import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import employeeRest from "../api/EmployeeRest";

export const getEmp = createAsyncThunk("getEmp/employeeSlice", async (params) => {
  try {
    const res = await employeeRest.getAll(params);
    return res;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  count: 0,
  loading: false,
  employee: [],
  message: "",
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEmp.pending, (state) => {
        state.loading = true;
        state.message = "PENDING";
      })
      .addCase(getEmp.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.count = payload.count;
        state.employee = payload.data;
        state.message = payload?.message;
      })
      .addCase(getEmp.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload?.message;
      });
  },
});

export default employeeSlice.reducer;
