import { Field, InputType, ID } from 'type-graphql';
import { User } from '../models/userModel'

// Define Graphql input type
@InputType()
export default class UserInput implements Partial<User> {
    @Field(() => ID, { nullable: true })
    id: string;

    @Field()
    email: string;
}