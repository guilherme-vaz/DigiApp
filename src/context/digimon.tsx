import axios from 'axios';
import { IDigimon } from '../interfaces/digimon';
import { ReactNode, createContext, useEffect, useState } from 'react';

const API_URL = 'https://digimon-api.vercel.app/api/digimon';
export const DigimonContext = createContext<IDigimon[] | undefined>(undefined);

interface DigimonProviderProps {
    children: ReactNode;
} 

export const DigimonProvider = ({ children }: DigimonProviderProps) => {
    const [digimons, setDigimons] = useState<IDigimon[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);

    useEffect(() => {
        axios.get(API_URL, { params: { page: currentPage, pageSize: pageSize }})
            .then((response) => {
                const digimonData = response.data.map((digimon: IDigimon) => ({
                    name: digimon.name,
                    img: digimon.img,
                    level: digimon.level
                }));

                setDigimons(digimonData);
            })
            .catch((err) => {
                console.error("Ops! Ocorreu um erro: ", err);
            });
    }, [currentPage, pageSize]);

    return (
        <DigimonContext.Provider value={digimons}>
            {children}
        </DigimonContext.Provider>
    );
} 
