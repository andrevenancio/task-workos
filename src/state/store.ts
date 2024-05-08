"use client"

import { configureStore } from "@reduxjs/toolkit"

import members from "./reducers/members"

export const store: any = configureStore({
  reducer: {
    members,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
