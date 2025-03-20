import { ReactElement, ReactNode } from 'react'
import { Tag, WrapItem } from '@chakra-ui/react'
import { LuCircleCheck } from 'react-icons/lu'

interface Props {
  children?: ReactElement | ReactNode
}

const SkillTag: React.FC<Props> = ({ children }) => {
  return (
    <WrapItem>
      <Tag.Root size="lg">
        <Tag.StartElement as={LuCircleCheck} color="cyan.500" />
        <Tag.Label>{children}</Tag.Label>
      </Tag.Root>
    </WrapItem>
  )
}

export { SkillTag }
