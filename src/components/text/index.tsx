import { CSSProperties, ReactNode } from "react"

import styles from "./styles.module.css"

export type TextProps = {
  children?: ReactNode
  css?: CSSProperties
}

export const Text = ({ children, css }: TextProps) => (
  <p className={styles.container} style={{ ...css }}>
    {children}
  </p>
)
