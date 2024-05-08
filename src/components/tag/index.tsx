import styles from "./styles.module.css"

export type TagProps = {
  label: string
}

export const Tag = ({ label }: TagProps) => (
  <div className={styles.container}>{label}</div>
)
