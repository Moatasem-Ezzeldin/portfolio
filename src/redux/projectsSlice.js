// redux/projectsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_API;

// =======================
// ✅ Fetch Projects
// =======================
export const fetchProjects = createAsyncThunk("projects/fetch", async () => {
  const res = await axios.get(`${API_URL}/projects`);
  return res.data;
});

// =======================
// ✅ Add Project
// =======================
export const addProject = createAsyncThunk("projects/add", async (project) => {
  const res = await axios.post(`${API_URL}/projects`, project);
  return res.data;
});

// =======================
// ✅ Update Project
// =======================
export const updateProject = createAsyncThunk(
  "projects/update",
  async ({ id, project }) => {
    const res = await axios.put(`${API_URL}/projects/${id}`, project);
    return res.data;
  }
);

// =======================
// ✅ Delete Project
// =======================
export const deleteProject = createAsyncThunk("projects/delete", async (id) => {
  await axios.delete(`${API_URL}/projects/${id}`);
  return id;
});

// =======================
// Slice
// =======================
const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    data: [],
    loadingFetch: false,
    loadingAdd: false,
    loadingUpdate: false,
    loadingDelete: false,
    errorFetch: null,
    errorAdd: null,
    errorUpdate: null,
    errorDelete: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // =======================
      // Fetch
      // =======================
      .addCase(fetchProjects.pending, (state) => {
        state.loadingFetch = true;
        state.errorFetch = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loadingFetch = false;
        state.data = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loadingFetch = false;
        state.errorFetch = action.error.message;
      })

      // =======================
      // Add
      // =======================
      .addCase(addProject.pending, (state) => {
        state.loadingAdd = true;
        state.errorAdd = null;
      })
      .addCase(addProject.fulfilled, (state, action) => {
        state.loadingAdd = false;
        state.data.push(action.payload);
      })
      .addCase(addProject.rejected, (state, action) => {
        state.loadingAdd = false;
        state.errorAdd = action.error.message;
      })

      // =======================
      // Update
      // =======================
      .addCase(updateProject.pending, (state) => {
        state.loadingUpdate = true;
        state.errorUpdate = null;
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        state.loadingUpdate = false;
        const index = state.data.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) state.data[index] = action.payload;
      })
      .addCase(updateProject.rejected, (state, action) => {
        state.loadingUpdate = false;
        state.errorUpdate = action.error.message;
      })

      // =======================
      // Delete
      // =======================
      .addCase(deleteProject.pending, (state) => {
        state.loadingDelete = true;
        state.errorDelete = null;
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.loadingDelete = false;
        state.data = state.data.filter((p) => p.id !== action.payload);
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.loadingDelete = false;
        state.errorDelete = action.error.message;
      });
  },
});

export default projectsSlice.reducer;