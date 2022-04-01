import { Field, InputType, PickType } from '@nestjs/graphql'
import { TodoList } from '../entities/todo-list.entity'

@InputType()
export class FindTodoListInput extends PickType(TodoList, ['id']) {
  @Field(() => String)
  id: string
}
