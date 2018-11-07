import React, { Component } from 'react';

import QuizQuestionButton from './QuizQuestionButton';

/**
 * @description Class that shows quiz question
 * @class QuizQuestion
 * @extends {Component}
 */
class QuizQuestion extends Component {

  constructor(props) {
    super(props);

    this.state = { incorrectAnswer: false };
  }

  /**
   * @description Method to submit answer by button click
   * @memberof QuizQuestion
   * @param {String} buttonText
   * 
   * @returns {void}
   */
  handleClick(buttonText) {
    if (buttonText === this.props.quiz_question.answer) {
      this.setState({ 
        incorrectAnswer: false
      });

      this.props.showNextQuestionHandler();
    } else {
      this.setState({
        incorrectAnswer: true
      });
    }
  }

  render() {
    return (
      <main>
        <section className="QuizQuestion" >
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons" >
          <ul>
            {this.props.quiz_question.answer_options.map((answer_option, index) => 
                <QuizQuestionButton 
                  key={index}
                  clickHandler={this.handleClick.bind(this)}
                  button_text={answer_option}/>
              )
            }
          </ul> 
        </section> 
        {this.state.incorrectAnswer && < p className = "error"> Sorry, that's not right</p>}  
      </main>
    );
  }
}

export default QuizQuestion;
