import { IUser, IUserState } from "../../interfaces/user";

interface IUserAction {
    type: string,
    payload?: IUser
}

const initialState: IUserState = {
    user: null
}

//Todo reducer precisa retornar o nosso estado atualizado com base na action
export function userReducer(state = initialState, action: IUserAction): IUserState {
    if (action.type === 'user/login') {
        return {
            ...state,
            user: action.payload as IUser,
        }
    } else if (action.type === 'user/logout'){
        return {
            ...state,
            user: null,
        }
    }

    return state;
}