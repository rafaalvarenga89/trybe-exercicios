import React, { useContext } from 'react';
import QuestionCard from './QuestionCard';
import QuestionContext from '../context/QuestionContext';

function QuestionList() {
  const { questions } = useContext(QuestionContext);

  // const questions = [
  //   {
  //     id: 1, 
  //     name: 'Hermione',
  //     question: 'Como fazer a poção polissuco?',
  //     claps: 7
  //   }
  // ]

  return (
    <section>
      {
        questions
          .map((question, index) => <QuestionCard key={ index } question={ question } />)
      }
    </section>
  );
}

export default QuestionList;
