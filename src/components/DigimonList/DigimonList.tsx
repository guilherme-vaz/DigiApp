import { useEffect, useState } from 'react';
import { IDigimon } from '../../interfaces/digimon.tsx';
import { getDigimons } from '../../services/getDigimons.ts';
import * as C from './style.ts';
import digivice from '../../assets/imgs/digivice.png';
import { SmileTwoTone } from '@ant-design/icons';
import { Modal } from '../Modal/Modal.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reducer.ts';
import { logout } from '../../redux/User/user-slice.ts';
import { addProduct } from '../../redux/Cart/cart-slice.ts';

export function DigimonList() {
    const [digimons, setDigimons] = useState<IDigimon[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer)
    const dispatch = useDispatch()

    const onLogin = () => {
        if (user === null) {
            setIsOpen(true);
        } else {
            //FORMA ANTIGA: despachar action de logout
            // dispatch({
            //     type: 'user/logout',
            //     user: null,
            // })

            //FORMA NOVA:
            dispatch(logout({}))
        }
    }

    const handleClickAddToteam = (digimon: IDigimon) => {
        //FORMA ANTIGA DE USAR
        dispatch({
            type: 'cart/add-product',
            payload: digimon
        })

        //FORMA NOVA:
        // dispatch(addProduct(digimon))
    }


    useEffect(() => {
        getDigimons().then((response: IDigimon[]) => {
            setDigimons(response);
        })
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
            <C.Container>
                <C.Header>
                    <C.Title_Img>
                        <C.Img src={digivice} alt="Image of a digivice" />
                        <C.Title>Digimon App</C.Title>
                    </C.Title_Img>
                    <C.Button onClick={() => {
                        onLogin();
                    }}>
                        <SmileTwoTone />
                        {user === null ? 'Login' : 'Logout'}
                    </C.Button>
                    {isOpen && <Modal handleClose={() => setIsOpen(false)} IsOpen={isOpen} />}
                </C.Header>
                <C.List>
                    {digimons.map((digimon) => (

                        <li key={digimon.name}>
                            <div>
                                <img src={digimon.img} alt={digimon.name} />
                                <div>Name: {digimon.name}</div>
                                <div>Level: {digimon.level}</div>
                                <button type='submit' onClick={() => handleClickAddToteam(digimon)}>Adicionar ao time</button>
                            </div>
                        </li>

                    ))}
                </C.List>
            </C.Container>
        </>
    );
}
