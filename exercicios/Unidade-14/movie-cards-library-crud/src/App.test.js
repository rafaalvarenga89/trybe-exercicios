import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Testa a aplicação Movie Cards Library', () => {
    test('renderiza o texto "Carregando..."', () => {
        render( <App />);
        const loadingText = screen.getByText('Carregando...');
        expect(loadingText).toBeInTheDocument();        
    })
    test('renderiza o card do filme após o "Carregando..."', async () => {
      render( <App /> );
      const loadingText = screen.getByText('Carregando...');
      await waitForElementToBeRemoved(loadingText, { timeout: 3000 })

      const titleElement=screen.getByText(/Kingsglaive/i);
      expect(titleElement).toBeInTheDocument();
    })
    test('renderiza os detalhes do filme quando clica no card', async () => {
      render(<App />);
      const loadingText = screen.getByText('Carregando...');
      await waitForElementToBeRemoved(loadingText, { timeout: 3000 })
      const allLinks = screen.getAllByRole('link', { name: /ver detalhes/i }) ;
      userEvent.click(allLinks[1]);
      const loadingtext2 = screen.getByText('Carregando...');
      await waitForElementToBeRemoved(loadingtext2, { timeout: 3000 })
      const rating = screen.getByText(/Rating: 4.5/i);
      expect(rating).toBeInTheDocument()

    })
})