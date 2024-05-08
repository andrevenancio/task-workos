import React from "react"

import styles from "./styles.module.css"

export type SkeletonProps = {
  type: "rectangle" | "circle"
  size: number
}

export const Skeleton = ({ type, size }: SkeletonProps) => {
  if (type === "circle") {
    return (
      <div
        className={styles.circle}
        style={{ width: `${size}px`, aspectRatio: 1 }}
      />
    )
  }

  return (
    <div
      className={styles.rectangle}
      style={{ width: size, height: 10, marginBottom: 4 }}
    />
  )
}
