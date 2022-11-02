import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"

import profileSlice from "../features/profile/profile.reducer"
import counterSlice from "../features/counter/counterSlice"

export const store = configureStore({
  reducer: {
    profile: profileSlice,
    counter: counterSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
