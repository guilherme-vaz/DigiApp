import { IDigimon } from '../interfaces/digimon';
import axios, { AxiosResponse } from 'axios';

export const getDigimons = async (): Promise<IDigimon[]> => {
        const response: AxiosResponse<IDigimon[]> = await axios.get('https://digimon-api.vercel.app/api/digimon');
        return response.data;
    }

