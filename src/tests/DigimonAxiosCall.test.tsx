import axios, { AxiosResponse } from 'axios';
import { getDigimons } from '../services/getDigimons';
import { IDigimon } from '../interfaces/digimon';

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Get digimons", () => {
    it('Shoudl call the api and return digimons list', async () => {
        //Desired output
        const digimons: IDigimon[] = [
            {
                name: "Koromon",
                img: "https://digimon.shadowsmith.com/img/koromon.jpg",
                level: "In Training"
            },
            {
                name: "Tsunomon",
                img: "https://digimon.shadowsmith.com/img/tsunomon.jpg",
                level: "In Training"
            },
            {
                name: "Yokomon",
                img: "https://digimon.shadowsmith.com/img/yokomon.jpg",
                level: "In Training"
            },
        ];

        //Assim funciona também:
        // const digimons: IDigimon[]

        //Response we want from axios
        const mockedResponse: AxiosResponse = {
            data: digimons,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {},
        };

        mockedAxios.get.mockResolvedValueOnce(mockedResponse);

        expect(axios.get).not.toHaveBeenCalled();
        const data = await getDigimons();
        expect(axios.get).toHaveBeenCalled();
        expect(data).toEqual(digimons)

    })
})