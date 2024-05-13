import { useEffect, useState } from 'react';
import { IDigimon } from '../../interfaces/digimon.tsx';
import { getDigimons } from '../../services/getDigimons.ts';
import * as C from './style.ts';
import digivice from '../../assets/imgs/digivice.png';
import { SmileTwoTone } from '@ant-design/icons';
import { Modal } from '../Modal/Modal.tsx';

export function DigimonList() {
    const [digimons, setDigimons] = useState<IDigimon[]>([]);
    const [isOpen, setIsOpen] = useState(false);


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
                    <C.Button onClick={() => setIsOpen(true)}>
                        <SmileTwoTone />
                        Login
                    </C.Button>
                    {isOpen && <Modal handleClose = {() => setIsOpen(false)} IsOpen={isOpen}/>}
                </C.Header>
                <C.List>
                    {digimons.map((digimon) => (

                        <li key={digimon.name}>
                            <div>
                                <img src={digimon.img} alt={digimon.name} />
                                <div>Name: {digimon.name}</div>
                                <div>Level: {digimon.level}</div>
                            </div>
                        </li>

                    ))}
                </C.List>
            </C.Container>
        </>
    );
}
