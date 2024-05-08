"use client"

import { Tabs } from "@/components/tabs"
import GroupsContainer from "@/containers/groups"
import MembersContainer from "@/containers/members"

import styles from "./page.module.css"

export default function Home() {
  const tabs = [
    {
      label: "Members",
      value: "members",
      Component: MembersContainer,
    },
    {
      label: "Groups",
      value: "groups",
      Component: GroupsContainer,
    },
  ]

  return (
    <main className={styles.main}>
      <Tabs tabs={tabs} />
    </main>
  )
}
