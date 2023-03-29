import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import mainApi from "../../shared/mainApi";

const initialState = {
  user: { email: "", role: "" },
  isLoading: true,
  isError: false,
  error: "",
};

export const createUser = createAsyncThunk(
  "auth/createUser",
  async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    // console.log(email, password);
    return data.user.email;
  }
);
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    // console.log(email, password);
    return data;
  }
);
export const googleLogin = createAsyncThunk("auth/googelLogin", async () => {
  const googleProvider = new GoogleAuthProvider();
  const data = await signInWithPopup(auth, googleProvider);
  return data.user.email;
});
// http://localhost:30002/register/users/sarwarasik@gmail.com

export const getUser = createAsyncThunk("auth/getUser", async (email) => {
  const res = await fetch(`${mainApi}/register/users/${email}`);
  // console.log(email, password);
  const data = await res.json();
  // console.log(data, "from getUser");
  if (data.status) {
    return data;
  }
  return email;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user.email = "";
    },
    setUser: (state, { payload }) => {
      state.user.email = payload;
      state.isLoading = false;
    },
    toggleLoading: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.user.email = payload;
        state.error = "";
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user.email = "";
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.user.email = payload;
        state.error = "";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user.email = "";
        state.error = action.error.message;
      })
      .addCase(googleLogin.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(googleLogin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.user.email = payload;
        state.error = "";
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user.email = "";
        state.error = action.error.message;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        // console.log(payload,"from fullfilled");
        if (payload.status) {
          state.user = payload.data;
        } else {
          state.user.email = payload;
        }
        state.isLoading = false;
        state.isError = false;

        state.error = "";
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user.email = "";
        state.error = action.error.message;
      });
  },
});
export const { logout, setUser, toggleLoading } = authSlice.actions;
export default authSlice.reducer;
