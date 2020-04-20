import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Question from '../QuizQuestion/Question';
import { Button } from 'react-bootstrap';


function ButtonQuiz(props) {
  
  return (
    <CSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div key={props.questionCount}>
        <Question content={props.question} />
      </div>
      <center>
        <Button className="buttonInstructionStart" onClick={(event)=>props.onAnswerSelected('nan',props.questionId,event)}>CONTINUE</Button>
      </center>
    </CSSTransitionGroup>
  );
}

ButtonQuiz.propTypes = {
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionCount: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default ButtonQuiz;
