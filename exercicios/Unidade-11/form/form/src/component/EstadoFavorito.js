import React from 'react';


class EstadoFavorito extends React.Component {
    render() {
        const { valueHandleChangeState, handleChangeEFProp } = this.props;

        let error = undefined;
        if(valueHandleChangeState.length > 10) {
            error = 'Texto muito grande';
        }

        console.log(`Estou no filho com o valor ${valueHandleChangeState}`);
        return (
          <label>
            Diga qual é o seu Estado Favorito! Do Brasil ou do React, você quem sabe!
            <textarea 
              name="estadoFavorito"
              onChange={handleChangeEFProp}
              value={valueHandleChangeState}
            />

            <span>{error ? error : ''}</span>

          </label>

        )
    }
}

export default EstadoFavorito;