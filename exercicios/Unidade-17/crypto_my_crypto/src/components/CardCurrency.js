import React, { useContext, useEffect } from 'react';
import CurrencyContext from '../context/CurrencyContext';

function CardCurrency({ cryptocurrency }) {
    const { loading } = useContext(CurrencyContext);

    useEffect(() => {
        console.log(loading)
    }, [loading])

    return (
        <li className='card-currency'>
            { cryptocurrency.name }
            <img src={ cryptocurrency.logo_url } alt={ cryptocurrency.name } width='5%' />
            { loading ? 'Carregando' : (
                <span>
                { cryptocurrency.price }
                {' '}
            </span>
            )}
            
        </li>
    )
}

export default CardCurrency;
