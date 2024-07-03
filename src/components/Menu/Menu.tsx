import digivice from '../../assets/imgs/digivice.png';
import { SmileTwoTone, HomeOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import * as C from './style'
import { useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reducer';
import { Modal } from '../Modal/Modal';

interface HeaderProps {
    onLogin: () => void;
    handleClose: () => void;
    backToHome: () => void;
    goToUserPage: () => void;
    isOpen: boolean;
    //Acho que dá pra refatorar usando o user
    userPage?: boolean;
}

export function Menu({ onLogin, handleClose, isOpen, userPage, backToHome, goToUserPage }: HeaderProps) {

    const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer)


    return (
        <C.Header>
            <C.Title_Img>
                <C.Img src={digivice} alt="Image of a digivice" />
                <C.Title>Digimon App</C.Title>
            </C.Title_Img>
            {userPage ?
                <C.ButtonGroup>
                    <C.Button onClick={() => backToHome()}>
                        <HomeOutlined />
                        {'Home'}
                    </C.Button>
                    <C.Button onClick={onLogin}>
                        {user === null ? (
                            <>
                                <SmileTwoTone />
                                Login
                            </>
                        ) : (
                            <>
                                <LogoutOutlined />
                                Logout
                            </>
                        )}
                    </C.Button>
                </C.ButtonGroup>

                :

                <C.ButtonGroup>
                    {user !== null ?
                        <C.Button onClick={() => goToUserPage()}>
                            <UserOutlined />
                            {'Profile'}
                        </C.Button>
                        :
                        null
                    }

                    <C.Button onClick={onLogin}>
                        {user === null ? (
                            <>
                                <SmileTwoTone />
                                Login
                            </>
                        ) : (
                            <>
                                <LogoutOutlined />
                                Logout
                            </>
                        )}
                    </C.Button>

                </C.ButtonGroup>
            }


            {isOpen && <Modal handleClose={handleClose} IsOpen={isOpen} />}
        </C.Header>
    )
}