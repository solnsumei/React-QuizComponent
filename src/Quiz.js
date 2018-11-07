import React, { Component } from 'react';

import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json');

/**
 * @description Parent class to hold the quiz components
 * @class Quiz
 * @extends {Component}
 */
class Quiz extends Component {

  constructor(props) {
    super(props);

    this.state = { quiz_position: 1 };
  }

  /**
   * @description Method to show next question
   * @memberof Quiz
   * 
   * @returns {void}
   */
  showNextQuestion() {
    this.setState({
      quiz_position: this.state.quiz_position + 1
    });
  }

  /**
   * @description Method to reset quiz
   * @memberof Quiz
   * 
   * @returns {void}
   */
  handleResetClick() {
    this.setState({
      quiz_position: 1
    });
  }

  /**
   * @description Method to render JSX
   * @memberof Quiz
   * @returns {Object} Jsx
   */
  render() {
    const isQuizEnd = this.state.quiz_position - 1 === quizData.quiz_questions.length;

    return (
      <div>
        {
          isQuizEnd ? <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} />
          : <QuizQuestion
            showNextQuestionHandler={this.showNextQuestion.bind(this)}
            quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
        }
      </div>
    );
  }
}

export default Quiz;
