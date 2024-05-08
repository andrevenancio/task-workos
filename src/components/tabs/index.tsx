"use client"

import { FC } from "react"

import * as RadixTabs from "@radix-ui/react-tabs"

import styles from "./styles.module.css"

export type Tab = {
  label: string
  value: string
  Component: FC<any>
}

export type TabsProps = {
  tabs: Tab[]
}

export const Tabs = ({ tabs }: TabsProps) => (
  <RadixTabs.Root className={styles.container} defaultValue={tabs[0].value}>
    <RadixTabs.List className={styles.list}>
      {tabs?.map((tab) => (
        <RadixTabs.Trigger
          key={`trigger-${tab.value}`}
          className={styles.trigger}
          value={tab.value}
        >
          {tab.label}
        </RadixTabs.Trigger>
      ))}
    </RadixTabs.List>

    {tabs?.map(({ value, Component }) => (
      <RadixTabs.Content
        key={`content-${value}`}
        className={styles.content}
        value={value}
      >
        <Component />
      </RadixTabs.Content>
    ))}
  </RadixTabs.Root>
)
