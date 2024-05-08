import * as RadixAvatar from "@radix-ui/react-avatar"

import { type Member } from "@/types/members"

import styles from "./styles.module.css"

export const Avatar = ({ image, firstName, lastName }: Partial<Member>) => (
  <RadixAvatar.Root className={styles.root}>
    <RadixAvatar.Image
      className={styles.image}
      src={image}
      alt={`${firstName} ${lastName}`}
    />
    <RadixAvatar.Fallback className={styles.fallback} delayMs={600}>
      {firstName?.[0]}
      {lastName?.[0]}
    </RadixAvatar.Fallback>
  </RadixAvatar.Root>
)
