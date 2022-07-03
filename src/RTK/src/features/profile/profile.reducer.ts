import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { IProfile, IUserLoginData } from "./_profile.types"

interface IInitialState {
  token: string | null
  refreshToken: string | null
  profile: IProfile | null
  status: "idle" | "loading" | "failed"
  error: string | null
}

const initialState: IInitialState = {
  profile: null,
  token: null,
  refreshToken: null,
  status: "idle",
  error: null,
}

export const loginAsync = createAsyncThunk(
  "profile/login",
  async (userLoginData: IUserLoginData) => {
    await fetch("https://dev.echo-power.ru/api/auth/login/", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLoginData),
    })
      .then((response) => response.json())
      .then((error) => error.json())
  }
)

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAsync.pending, (state) => {
      state.error = null
      state.status = "loading"
    })
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      console.log(action.payload)
    })
    builder.addCase(loginAsync.rejected, (state) => {
      state.status = "failed"
    })
  },
})

// export const { getProfile, login } = profileSlice.actions

export default profileSlice.reducer
