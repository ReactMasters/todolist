import { registerEnumType } from '@nestjs/graphql'

export enum TodoStatus {
  IN_PROGRESS = 'inProgress',
  COMPLETED = 'completed',
}

registerEnumType(TodoStatus, {
  name: 'TodoStatus',
})
