import { Children, ReactNode } from "react"
import { useSelector } from "react-redux"

import { Avatar } from "@/components/avatar"
import { Box } from "@/components/box"
import { Tag } from "@/components/tag"
import { Text } from "@/components/text"
import { RootState } from "@/state/store"
import { type Member } from "@/types/members"

import styles from "./styles.module.css"

export const Group = ({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) => (
  <div className={styles.container}>
    <Box
      css={{
        backgroundColor: "var(--background-secondary)",
        padding: "var(--space-l)",
        justifyContent: "space-between",
      }}
    >
      <Text>{label}</Text>
      <Tag label={`${Children.count(children)}`} />
    </Box>
    <div className={styles.groupItems}>{children}</div>
  </div>
)

export const GroupsContainer = () => {
  const { members } = useSelector((state: RootState) => state.members)
  const admin = members.filter((member: Member) => member.admin)
  const standard = members.filter((member: Member) => !member.admin)

  return (
    <Box css={{ flexDirection: "column", gap: 20 }}>
      {admin.length > 0 && (
        <Group label="Admin">
          {admin.map((member: Member) => (
            <Box key={member.id} css={{ gap: 10, alignItems: "center" }}>
              <Avatar {...member} />
              <Box css={{ flexDirection: "column" }}>
                <Text css={{ color: "var(--foreground-secondary)" }}>
                  {member.firstName} {member.lastName}
                </Text>
                <Text
                  css={{
                    color: "var(--foreground-secondary)",
                    fontSize: 12,
                    opacity: 0.5,
                  }}
                >
                  {member.role}
                </Text>
              </Box>
            </Box>
          ))}
        </Group>
      )}

      {standard.length > 0 && (
        <Group label="Standard">
          {standard.map((member: Member) => (
            <Box
              key={member.id}
              css={{ alignItems: "center", justifyContent: "center" }}
            >
              <Avatar {...member} />
            </Box>
          ))}
        </Group>
      )}
    </Box>
  )
}

export default GroupsContainer
