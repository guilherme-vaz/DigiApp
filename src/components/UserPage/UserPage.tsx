import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import * as C from './style';
import { Menu } from "../Menu/Menu";
import { useState } from "react";
import { logout } from "../../redux/User/user-slice";
import { useNavigate } from "react-router-dom";


export function UserPage() {

    const [isOpen, setIsOpen] = useState(false);
    const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const onLogin = () => {
        if (user === null) {
            setIsOpen(true);
        } else {
            dispatch(logout({}))
        }
    }

    function backToHome() {
        console.log('funciona')
        navigate('/')
    }

    return (
        <>
            <Menu isOpen={isOpen} onLogin={onLogin} handleClose={() => setIsOpen(!isOpen)} backToHome={() => backToHome()} userPage goToUserPage={() => (null)} />
            <C.Container>
                <h1>User page</h1>
                <C.ProfileCard>
                    <C.Image src="https://pbs.twimg.com/media/GRWGFG9XoAADoOn?format=jpg&name=900x900" alt="" />
                    <C.ProfileInfo>
                        <p>{user?.name}</p>
                        <p>{user?.email}</p>
                        <p>@{(user?.email)?.slice(0, 4)}</p>
                        <p>{user?.password}</p>
                    </C.ProfileInfo>
                </C.ProfileCard>
                {/* <p>{user?.digimons}</p> */}
            </C.Container>
        </>
    )
}

