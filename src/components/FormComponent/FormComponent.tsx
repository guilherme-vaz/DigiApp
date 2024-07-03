import { useForm } from 'react-hook-form';
import { IUser } from '../../interfaces/user';
import * as C from './style';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reducer';
import { login, logout } from '../../redux/User/user-slice';
import { useNavigate } from 'react-router-dom';

//Tô tipando com a interface do usuário mas a ideia é que seja um componente
//reusável ou seja, um formulário para "qualquer tipo" de interface

export function FormComponent(){
    //Objeto usuário que está sendo guardado dentro do userReducer // userSlice
    const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IUser>()

    const onSubmit = (data: IUser) => {
        //usuário não está logado
        if (user === null) {
            //FORMA ANTIGA: de despachar action de login
            // dispatch({
            //     type: 'user/login',
            //     payload: {
            //         name: 'Guilherme Vaz',
            //         email: 'guilhermeolivaaz@gmail.com',
            //         password: 'senhas',
            //         digimons: [],
            //     }
            // })

            //FORMA NOVA:
            dispatch(login(data))
            navigate('/user')
            reset()

        } else {
            //FORMA ANTIGA:
            // dispatch({
            //     type: 'user/logout',
            //     user: null,
            // })

            //FORMA NOVA:
            dispatch(logout({}))
        }
        console.log(data)
    }


    return (
        <C.Form onSubmit={handleSubmit(onSubmit)}>
            <C.Title>Entre na sua conta</C.Title>
            {/* <C.Field>
                <C.Label>Name</C.Label>
                <C.Input type="text" {...register("name")} />
            </C.Field> */}

            <C.Field>
                <C.Label>E-mail</C.Label>
                <C.Input type="text" {...register("email")} />
            </C.Field>

            <C.Field>
                <C.Label>Senha</C.Label>
                <C.Input type="password" {...register("password")} />
            </C.Field>

            <C.ForgetPassword href="#">Esqueci minha senha</C.ForgetPassword>

            <C.Field>
                <C.Button>Login</C.Button>
                <C.Footer>Ainda não tem conta? <a href="#">Cadastre-se</a></C.Footer>
            </C.Field>

        </C.Form>
    )

}