// src/redux/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// قراءة المتغيرات من .env
const VALID_EMAIL = import.meta.env.VITE_MY_EMAIL;
const VALID_PASSWORD = import.meta.env.VITE_MY_PASSWORD;

// Thunk لتسجيل الدخول
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }) => {
    // تحقق من البيانات
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      return { user: { email }, token: "local-token" }; // يمكن تعديل التوكن حسب رغبتك
    } else {
      throw new Error("Invalid username or password");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,            // بيانات المستخدم
    token: null,           // التوكن
    loading: false,        // حالة الانتظار
    error: null,           // أي خطأ
    isAuthenticated: false // هل المستخدم مسجّل دخول
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;