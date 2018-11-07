import React, { Component } from 'react';

/**
 * @description Class that displays a quiz answer button
 * @class QuizQuestionButton
 * @extends {Component}
 */
class QuizQuestionButton extends Component {

  /**
   * @description Click handler for button clicks
   * @memberof QuizQuestionButton
   *
   * @returns {void}
   */
  handleClick() {
    this.props.clickHandler(this.props.button_text);
  }

  render() {
    return (
      <li>
        <button onClick={this.handleClick.bind(this)}>
          {this.props.button_text}
        </button>
      </li>
    );
  }
}

export default QuizQuestionButton;