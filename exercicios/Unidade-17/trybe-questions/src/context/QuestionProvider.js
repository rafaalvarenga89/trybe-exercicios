import React, { useState } from 'react';
import QuestionContext from "./QuestionContext";


function QuestionProvider({ children }) {

  const [questions, setQuestions] = useState([{
    id: "7f6377ba",
    name: "Maria",
    question: "Quanto é 2 + 2",
    claps: 0
  }]); // [state, setter]

  function addNewQuestion(newQuestion){
    setQuestions((prevState) => [...prevState, newQuestion])
  }

  return (
    <QuestionContext.Provider value={ { questions, addNewQuestion } }>
      {children}
    </QuestionContext.Provider>
  );
}

export default QuestionProvider;

// render(){
//   return (<h1>Teste</h1>)
// }

// estado em classes

// this.state = {
//   question: []
// }
// this.setState({
//   questions: novoValor
// })

/////////////////////
// this.state = {
//   question: [],
//   name: '',
//   age: '',
// }

// this.setState({ age: 9 });


  // const [estado, setEstado] = useState({
  //   question: [],
  //   name: '',
  //   age: '',
  // });
  // setEstado((prevState) => ({ ...prevState, age: 9 }))
  // setEstado({ ...estado, age: 9 })

  // const [question, setQuestion] = useState([]);
  // const [name, setName] = useState("");
  // const [age, setAge] = useState(null);

  // setName('Luanderson');
  // console.log(estado)