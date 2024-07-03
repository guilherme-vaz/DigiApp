import { useContext, useState, useEffect } from 'react';
import { IDigimon } from '../../interfaces/digimon';
import * as C from './style';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reducer';
import { logout } from '../../redux/User/user-slice';
import { DigimonContext } from '../../context/digimon';
import { Menu } from '../Menu/Menu';
import { useNavigate } from 'react-router-dom';

export function DigimonList() {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const context = useContext(DigimonContext);
    const { digimonsList, getDigimonList } = context;

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
        getDigimonList();
    }, [getDigimonList]);


    return (
        <>
            <C.Container>
                <Menu isOpen={isOpen} onLogin={onLogin} handleClose={() =>  setIsOpen(!isOpen)} backToHome={() => (null)} goToUserPage={() => navigate('/user')} />
                <C.List>
                    {digimonsList && digimonsList.map((digimon) => (
                        <li key={digimon.name}>
                            <div>
                                <img src={digimon.img} alt={digimon.name} />
                                <div>Name: {digimon.name}</div>
                                <div>Level: {digimon.level}</div>
                                <button type='button' onClick={() => handleClickAddToteam(digimon)}>
                                    Adicionar ao time
                                </button>
                            </div>
                        </li>
                    ))}
                </C.List>
            </C.Container>
        </>
    );
}
