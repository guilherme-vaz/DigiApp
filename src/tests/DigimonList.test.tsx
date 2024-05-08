import { screen, render, waitFor } from '@testing-library/react'
import { DigimonList } from '../Components/DigimonList';

describe("Digimon list", () => {
    it('Should render digimon list', async () => {
        //Mock the fetch 
        global.fetch = jest.fn(() => Promise.resolve()) as jest.Mock

        render(<DigimonList />);

        //Wait for the component to fetch data
        await waitFor(() => {
            const digimonList = screen.getByText("Digimon App");
            expect(digimonList).toBeInTheDocument();

            const digimon1 = screen.getByText(/Koromon/i);
            expect(digimon1).toBeInTheDocument();

            const digimon2 = screen.getByText(/Yokomon/i);
            expect(digimon2).toBeInTheDocument();
        })
    });

})
