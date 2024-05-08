import { ReactNode } from "react"
import { useSelector } from "react-redux"

import { Avatar } from "@/components/avatar"
import { Box } from "@/components/box"
import { Text } from "@/components/text"
import { RootState } from "@/state/store"
import { type Member } from "@/types/members"

export const Group = ({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) => (
  <Box
    css={{ flexDirection: "column", gap: 4, marginBottom: "var(--space-xl)" }}
  >
    <Text css={{ fontSize: 20 }}>{label}</Text>
    <Box css={{ gap: 10, padding: "var(--space-s)" }}>{children}</Box>
  </Box>
)

export const GroupsContainer = () => {
  const { members } = useSelector((state: RootState) => state.members)
  const admin = members.filter((member: Member) => member.admin)
  const standard = members.filter((member: Member) => !member.admin)

  return (
    <Box css={{ flexDirection: "column" }}>
      {admin.length > 0 && (
        <Group label="Admin">
          {admin.map((member: Member) => (
            <Box key={member.id} css={{ gap: 10 }}>
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
            <Avatar key={member.id} {...member} />
          ))}
        </Group>
      )}
    </Box>
  )
}

export default GroupsContainer
