import React, { useState } from 'react';
import { fetchCryptoCurrencies, fetchCurrencies } from '../api/currencyAPI';

import CurrencyContext from './CurrencyContext';

function CurrencyProvider({ children }){

    const [ cryptocurrencies, setCryptocurrencies ] = useState([]); //[state, setter]
    const [currencies, setCurrencies] = useState({});
    const [loading, setLoading] = useState(false);
    const [ selectedCurrency, setSelectedCurrency ] = useState('USD')

    async function getCryptocurrencies() {
        setLoading(true);
        const cryptocurrenciesResponse = await fetchCryptoCurrencies(selectedCurrency);
        setCryptocurrencies(cryptocurrenciesResponse);
        setLoading(false);
    }

    async function getCurrencies() {
        setLoading(true);
        const currenciesResponse = await fetchCurrencies();
        setCurrencies(currenciesResponse);
        setLoading(false);
    }

    const contextValue = {
        cryptocurrencies,
        currencies,
        selectedCurrency,
        setSelectedCurrency,
        getCurrencies,
        getCryptocurrencies, 
        loading,
    };

    return (
        <CurrencyContext.Provider value={  contextValue  } >
            { children }
        </CurrencyContext.Provider>
    )
    

}

export default CurrencyProvider;