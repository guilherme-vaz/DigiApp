export interface IUser {
    email: string,
    name: string;
    password: string;
    digimons: Array<Object> | undefined;
}