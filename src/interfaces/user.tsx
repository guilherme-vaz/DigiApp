export interface IUser {
    email: string,
    name: string;
    password: string;
    digimons: Array<Object> | undefined;
}

export interface IUserState {
    user: IUser | null;
}