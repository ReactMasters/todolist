import { Resolver, Mutation, Query, Arg, ID } from 'type-graphql';
import { UserModel, User } from '../models/userModel';
import UserInput from '../types/UserInput';

@Resolver((_of) => User)
export class UserResolver {
    @Query((_returns) => User, { nullable: false, name: 'user' })
    async getNoteById(@Arg('id') id: string) {
        return await UserModel.findById({ _id: id });
    }

    @Mutation(() => User, { name: 'createUser' })
    async createUser(@Arg('createUserInput') { email }: UserInput) {
        const newUser = (await UserModel.create({ email })).save();
        return newUser;
    }
}

