import { useForm } from 'react-hook-form';
import { IUser } from '../../interfaces/user';
import * as C from './style';

//Tô tipando com a interface do usuário mas a ideia é que seja um componente
//reusável ou seja, um formulário para "qualquer tipo" de interface

export function FormComponent() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUser>()

    const onSubmit = (data: IUser) => {
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