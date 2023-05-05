import { ReactElement, ReactNode } from 'react'
import { Tag, TagLeftIcon, TagLabel, WrapItem } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

interface Props {
  children?: ReactElement | ReactNode
}

const SkillTag: React.FC<Props> = ({ children }) => {
  return (
    <WrapItem>
      <Tag size="lg">
        <TagLeftIcon as={CheckCircleIcon} color="cyan.500" />
        <TagLabel>{children}</TagLabel>
      </Tag>
    </WrapItem>
  )
}

export { SkillTag }
