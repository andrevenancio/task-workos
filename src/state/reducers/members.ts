import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

import { type Member } from "@/types/members"

interface IState {
  members: Member[]
}

const initialState: IState = {
  members: [],
}

const slice = createSlice({
  name: "members",
  initialState,
  reducers: {
    setMembers(state, action: PayloadAction<any>) {
      state.members = action.payload
    },
    toggleAdmin(state, action: PayloadAction<any>) {
      state.members = state.members.map((member) =>
        member.id === action.payload
          ? { ...member, admin: !member.admin }
          : member
      )
    },
  },
})

export const { setMembers, toggleAdmin } = slice.actions
export default slice.reducer
