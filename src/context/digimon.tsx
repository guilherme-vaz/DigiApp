import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { IDigimon } from '../interfaces/digimon';
import { getDigimons } from '../services/getDigimons';

interface DigimonContextProps {
    digimonsList: IDigimon[];
    getDigimonList: () => void;
}

export const DigimonContext = createContext<DigimonContextProps>({
    digimonsList: [],
    getDigimonList: () => {},
});

export const DigimonProvider = ({ children }: { children: ReactNode }) => {
    const [digimonsList, setDigimons] = useState<IDigimon[]>([]);

    const getDigimonList = () => {
        getDigimons()
            .then((response: IDigimon[]) => {
                setDigimons(response);
            })
            .catch((error) => console.error(error));
    };

    // useEffect(() => {
    //     getDigimonList();
    // }, [getDigimonList]);

    return (
        <DigimonContext.Provider value={{ digimonsList, getDigimonList }}>
            {children}
        </DigimonContext.Provider>
    );
};
