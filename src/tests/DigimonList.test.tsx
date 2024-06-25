import { screen, render, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { DigimonList } from '../components/DigimonList/DigimonList';

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


    //OUTRA FORMA DE PEGAR ELEMENTOS:
    it('Should render digimon list', async () => {

        //Renderiza o componente
        render(<DigimonList />);

        //Pega o botão
        const botao = screen.getByRole('button', { name: 'Adicionar ao time' })
        //Simulando eventos do usuário
        userEvent.click(botao)
    });

})
