import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import QuestionContext from '../context/QuestionContext';

function NewQuestionPage() {
  let history = useHistory()
  const { addNewQuestion } = useContext(QuestionContext);
  const [name, setName] = useState("Luanderson");
  const [question, setQuestion] = useState("");

  function handleSubmit(e){
    e.preventDefault();

    const newQuestion = {
      id: Math.random().toString(16).substr(2, 9),
      name,
      question,
      claps: 0
    }

    addNewQuestion(newQuestion);
    history.push("/");
  }

  return (
    <section className="question-section">
      <form onSubmit={ handleSubmit }>
        <label htmlFor="question">
          Digite a sua pergunta:
          <textarea
            name="question"
            placeholder="Escreva aqui sua pergunta"
            id="question"
            cols="30"
            rows="10"
            value={ question }
            onChange={ (e) =>  setQuestion(e.target.value)}
          />
        </label>
        <label htmlFor="user">
          Digite o seu nome:
          <input
            type="text"
            name="name"
            placeholder="Escreva seu nome..."
            id="user"
            value={ name }
            onChange={ (e) => setName(e.target.value) }
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default NewQuestionPage;
