import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { CreateTodoGroupInput, CreateTodoGroupOutput } from "./dto/create-todo-group.input";
import { TodoGroup } from "./entities/todo_group.entity";
import { TodoGroupService } from "./todo-group.service";

@Resolver(() => TodoGroup)
export class TodoGroupResolver {
    constructor(private readonly todoGroupService: TodoGroupService) { }

    @Mutation(() => CreateTodoGroupOutput)
    async createTodoGroup(@Args('createTodoGroupInput') createTodoGroupInput: CreateTodoGroupInput) {
        const res: CreateTodoGroupOutput = {
            success: true
        }
        try {
            res.todoGroup = await this.todoGroupService.createTodoGroup(createTodoGroupInput);
        } catch (error) {
            res.message = error?.message ?? '';
        }
        return res;
    }

}