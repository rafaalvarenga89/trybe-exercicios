import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Testando a aplicação do Pokemon', () => {
  it('deveria exibir um logo e um título na página', () => {
    render(<App />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();

    const title = screen.getByRole('heading', { level: 3 });
    expect(title).toBeInTheDocument();
  });

  it('deveria exibir o botao de busca e o input, e conseguir digitar no input', () => {
    render(<App/>);

    const button = screen.getByRole('button', { name: /Pesquisar/i });
    expect(button).toBeInTheDocument();

    const inputText = screen.getByRole('textbox');
    expect(inputText).toBeInTheDocument();

    // fireEvent
    // fireEvent.change(inputText, {target: {value: 'pikachu'}});
    // userEvent
    userEvent.type(inputText, 'pikachu');
    expect(inputText).toHaveValue('pikachu')
  });

  it('deveria exibir o pokemon pesquisado', async () => {
    render(<App/>);

    const cardsPokemonsMock = {
      cards: [
        {
          "id": "xyp-XY174",
          "name": "Pikachu-EX",
          "nationalPokedexNumber": 25,
          "imageUrl": "https://images.pokemontcg.io/xyp/XY174.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xyp/XY174_hires.png",
          "types": [
            "Lightning"
          ],
          "supertype": "Pokémon",
          "subtype": "EX",
          "hp": "130",
          "retreatCost": [
            "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "XY174",
          "artist": "5ban Graphics",
          "rarity": "Common",
          "series": "XY",
          "set": "XY Black Star Promos",
          "setCode": "xyp",
          "text": [
            "When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards."
          ],
          "attacks": [
            {
              "cost": [
                "Lightning",
                "Colorless"
              ],
              "name": "Thunder Shock",
              "text": "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
              "damage": "30",
              "convertedEnergyCost": 2
            },
            {
              "cost": [
                "Lightning",
                "Lightning",
                "Colorless"
              ],
              "name": "Mega Thunderbolt",
              "text": "Discard all Energy attached to this Pokémon.",
              "damage": "160",
              "convertedEnergyCost": 3
            }
          ],
          "resistances": [
            {
              "type": "Metal",
              "value": "-20"
            }
          ],
          "weaknesses": [
            {
              "type": "Fighting",
              "value": "×2"
            }
          ]
        }
      ]
    }

    // global.fetch = jest.fn( () => {
    //   return Promise.resolve({
    //     json: () => Promise.resolve(cardsPokemonsMock)
    //   });
    // });
    
    jest.spyOn(global, 'fetch');

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(cardsPokemonsMock)
    });

    const inputText = screen.getByRole('textbox');
    expect(inputText).toBeInTheDocument();

    userEvent.type(inputText, 'pikachu');
    expect(inputText).toHaveValue('pikachu')

    const button = screen.getByRole('button', { name: /Pesquisar/i });
    expect(button).toBeInTheDocument();

    userEvent.click(button);

    expect(global.fetch).toBeCalledTimes(1);

    const titlePokemon = await screen.findByRole('heading', { name: /Pikachu-EX/i });
    expect(titlePokemon).toBeInTheDocument();
  });
});

