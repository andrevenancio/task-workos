import * as RadixSwitch from "@radix-ui/react-switch"

import styles from "./styles.module.css"

export type CheckboxProps = {
  id: string
  value: boolean
  onChange: (value: boolean) => void
}

export const Checkbox = ({ id, value, onChange }: CheckboxProps) => (
  <RadixSwitch.Root
    id={id}
    checked={value}
    onCheckedChange={onChange}
    className={styles.root}
  >
    <RadixSwitch.Thumb className={styles.thumb} />
  </RadixSwitch.Root>
)
