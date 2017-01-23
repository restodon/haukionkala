import React, { PropTypes } from 'react';

const QA = ({question, answer}) => (
  <li>
    <span>{question}</span>
    <span>{answer}</span>
  </li>
)





// QA.propTypes = {
//   onClick: PropTypes.func,
//   id: PropTypes.number.isRequired,
//   question: PropTypes.string.isRequired,
//   answer: PropTypes.string.isRequired
// }

export default QA;
