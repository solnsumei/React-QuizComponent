import React, { Component } from 'react';

/**
 * @description Class that shows the reset button when quiz ends
 * @class QuizEnd
 * @extends {Component}
 */
class QuizEnd extends Component {

  /**
   * @description Method that triggers quiz reset
   * @memberof QuizEnd
   * 
   * @returns {void}
   */
  handleResetClick() {
    this.props.resetClickHandler();
  }

  render() {
    return (
      <div className="QuizEnd">
        <p>Thanks for playing!</p>
        <a href="#!" onClick={this.handleResetClick.bind(this)}>Reset Quiz</a>
      </div>
    );
  }
}

export default QuizEnd;