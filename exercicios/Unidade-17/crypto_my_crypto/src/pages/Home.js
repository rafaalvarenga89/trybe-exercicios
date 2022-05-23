/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import CurrencyContext from '../context/CurrencyContext';
import CardCurrency from '../components/CardCurrency'

function Home () {
    const LIMIT_API_SIZE = 10;
    const { getCryptocurrencies,
            cryptocurrencies, 
            getCurrencies,
            currencies,
            selectedCurrency,
            setSelectedCurrency, 
        } = useContext(CurrencyContext);

    // useEffect(() => {
    //     getCryptocurrencies();
    //     getCurrencies();
    // }, [] );

    useEffect(() => {
        getCurrencies();
    }, [] );

    useEffect(() => {
        console.log('atualizou a selectedCurrency')
        getCryptocurrencies();
        getCurrencies();
    }, [selectedCurrency] );

    useEffect(() => {
        console.log(cryptocurrencies);
        console.log(currencies);
    }, [cryptocurrencies, currencies]);
    

    return (
        <>
         <ul>
             { cryptocurrencies.slice(0, LIMIT_API_SIZE).map((cryptocurrency) => (
                 <CardCurrency key={ cryptocurrency.id }  cryptocurrency={cryptocurrency} />
             ))}
         </ul>
         <label htmlFor="selectCurrency">
             Converter cryptomoedas para:
             <select 
                name="selectCurrency" 
                value={ selectedCurrency }
                onChange={ (event) => setSelectedCurrency(event.target.value) }
             >
                 {Object.keys(currencies).map((currency) => (
                     <option key={ currency } value={ currency }>{ currency }</option>
                 ))}

             </select>
         </label>
       </>
    )
}

export default Home;