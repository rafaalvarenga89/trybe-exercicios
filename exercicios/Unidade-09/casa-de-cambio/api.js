const ENDPOINT = "https://api.exchangerate.host/latest";


const fetchCurrency = async (parametroMoeda) => {
    try {

    const resposta = await fetch(`${ENDPOINT}?base=${parametroMoeda}`);
    const valores = await resposta.json();

    return valores;
    } catch (err) {
        throw new Error ('url não funciona')
    }

// return fetch(`${ENDPOINT}?base=${parametroMoeda}`)
//     .then(resposta => resposta.json())
//     .then(valores => valores)
//     .catch(err => err)

}