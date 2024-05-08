import { CSSProperties, ReactNode } from "react"

export type BoxProps = {
  children?: ReactNode
  css?: CSSProperties
}

export const Box = ({ children, css }: BoxProps) => {
  return <div style={{ display: "flex", ...css }}>{children}</div>
}
