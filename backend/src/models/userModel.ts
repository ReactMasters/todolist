
import { prop as Property, getModelForClass, modelOptions } from '@typegoose/typegoose';
import { Field, ObjectType, ID } from 'type-graphql';

// Map javascript class <-> database document 
@ObjectType()
@modelOptions({
    schemaOptions: {
        collection: 'users', // collection name
        timestamps: true // create createdAt and updatedAt fields
    }
})
export class User {
    @Field(() => ID)
    id: string;

    @Field()
    email: string;

}

export const UserModel = getModelForClass(User);