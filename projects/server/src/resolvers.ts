import * as uuid from 'uuid';
import * as schema from './schema';
import { UserModel } from "./database";

const PAGE_SIZE = 6;

export const resolvers = {
    Query: {
        getUserPage: async (parent, args: schema.GetUserPageInput, context, info) => {
            const { pageStart, filter } = args;
            const baseQuery = await UserModel.scan().startAt(pageStart).limit(PAGE_SIZE).exec();

            return {
                users: baseQuery,
                nextToken: baseQuery.lastKey
            };
        },
        getAllUsers: async (parent, args, context, info) => {
            const users = await UserModel.scan().exec();
            return users;
        }
    },
    Mutation: {
        createUser: async (parent, args: schema.CreateUserInput, context, info) => {
            const { input:{ name, dob, address, description } } = args;

            const user = await UserModel.create({
                id: uuid.v4(),
                name: name,
                dob: dob,
                address: address,
                description: description
            });

            return user;
        },
        updateUser: async (parent, args: schema.UpdateUserInput, context, info) => {
            const { input:{ id, name, dob, address, description } } = args;

            const user = await UserModel.update({
                id: id,
                name: name,
                dob: dob,
                address: address,
                description: description
            });

            return user;
        },
        deleteUser: async (parent, args: schema.DeleteUserInput, context, info) => {
            const { input:{ id } } = args;
            try {
                await UserModel.delete(id);
                return true;
            }
            catch(e) {
                console.error(JSON.stringify(e));
                return false;
            }
        },
    }
};