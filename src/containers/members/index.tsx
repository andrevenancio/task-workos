/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { Avatar } from "@/components/avatar"
import { Box } from "@/components/box"
import { Checkbox } from "@/components/checkbox"
import { Skeleton } from "@/components/skeleton"
import { Tag } from "@/components/tag"
import { Text } from "@/components/text"
import {
  setMembers,
  toggleAdmin as reducerToggleAdmin,
} from "@/state/reducers/members"
import { RootState } from "@/state/store"
import { type Member } from "@/types/members"
import { delay } from "@/utils"

import styles from "./styles.module.css"

const MembersContainer = () => {
  const dispatch = useDispatch()
  const { members } = useSelector((state: RootState) => state.members)

  useEffect(() => {
    const load = async () => {
      const data = await fetch("/api/members")
      const { members } = await data.json()

      await delay(1000)

      dispatch(setMembers(Object.values(members)))
    }
    if (members.length === 0) {
      load()
    }
  }, [members])

  const toggleAdmin = (id: string) => {
    dispatch(reducerToggleAdmin(id))
  }

  const fake = Array.from({ length: 4 }, (_, i) => i)

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>User</th>
          <th>Role</th>
          <th style={{ width: 100 }}>Admin</th>
        </tr>
      </thead>
      <tbody>
        {members.length === 0 &&
          fake.map((key) => (
            <tr key={key}>
              <td>
                <Box
                  css={{
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <Skeleton type="circle" size={32} />
                  <Skeleton type="rectangle" size={100} />
                </Box>
              </td>
              <td>
                <Skeleton type="rectangle" size={70} />
              </td>
              <td>
                <Skeleton type="rectangle" size={30} />
              </td>
            </tr>
          ))}
        {members.length > 0 &&
          members.map((member: Member) => (
            <tr key={member.id}>
              <td>
                <Box
                  css={{
                    gap: 10,
                    alignItems: "center",
                    paddingLeft: member.admin ? 50 : 0,
                    transition: "padding-left 0.2s ease-out",
                  }}
                >
                  <Avatar {...member} />
                  <Text>
                    {member.firstName} {member.lastName}
                  </Text>
                </Box>
              </td>
              <td>
                <Box css={{ gap: 4 }}>
                  {member.admin && <Tag label="Admin" />}
                  <Tag label={member.role} />
                </Box>
              </td>
              <td>
                <Checkbox
                  id={member.id}
                  value={member.admin}
                  onChange={() => toggleAdmin(member.id)}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default MembersContainer
