import React from "react";
import QuestionList from "../components/QuestionList";

class QuestionListPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickNextPage = this.handleClickNextPage.bind(this);
  }

  handleClickNextPage() {
    const { history } = this.props;
    history.push("/new-question");
  }

  render() {
    return (
      <section>
        <QuestionList />
        <button type="button" onClick={this.handleClickNextPage}>
          Nova Pergunta
        </button>
      </section>
    );
  }
}

export default QuestionListPage;