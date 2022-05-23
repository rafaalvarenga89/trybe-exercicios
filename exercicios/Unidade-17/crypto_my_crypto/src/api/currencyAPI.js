const apiKey = "75460f12299671919da8e59dd9e2935d634dae77";
const CRYPTOCURRENCY = "https://api.nomics.com/v1/currencies/ticker?key=";
const CURRENCY = 'https://openexchangerates.org/api/currencies.json'

async function fetchCryptoCurrencies(currencyToConvert) {
    const response = await fetch(`${CRYPTOCURRENCY}${apiKey}&convert=${currencyToConvert}`);
    const cryptocurrencies = await response.json();

    return cryptocurrencies;

}

async function fetchCurrencies() {
    const response = await fetch(CURRENCY);
    const currenciesResponse = await response.json();

    return currenciesResponse
}

export { fetchCryptoCurrencies, fetchCurrencies };