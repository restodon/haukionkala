import React from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions/index';


export class CardInput extends React.Component {
  constructor() {

    super();
    this.state = {
      card: {
        question: '',
        answer: '',
        category: ''
      },
      cardAdded: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.hideNotification = this.hideNotification.bind(this);
  }

  

  hideNotification() {
    this.setState({
      ...this.state,
      cardAdded: false,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addCard(this.state.card);
    this.setState({
      card: {
        ...this.state.card,
        question: '',
        answer: '',
      },
      cardAdded: true,
    });
    setTimeout(this.hideNotification, 3000);
    
  }

  handleChange(event) {
    this.setState({
      card: Object.assign({}, this.state.card, {
        [event.target.id]: event.target.value
      })
    });
  }

  render() {
    const addNotification = this.state.cardAdded ?
      <p class='card-notification'>Card added!</p> :
      null;
    return (
      <div className='container'>
        <h2 className='container__title'>Submit a new question</h2>
        {addNotification}
        <form
          className='card-form'
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}>
          <label
            htmlFor='question'
            className='input__label'>
            Question
          </label><br/>
          <input
            className='card-form__input'
            type='text'
            id='question'
            value={this.state.card.question}/><br/>
          <label
            htmlFor='answer'
            className='input__label'>
            Answer
          </label><br/>
          <input
            className='card-form__input'
            type='text'
            id='answer'
            value={this.state.card.answer}/><br/>
          <label
            htmlFor='category'
            className='input__label'>
            Category
          </label><br/>
          <input
            className='card-form__input'
            type='text'
            id='category'
            value={this.state.card.category}/>
          <button
            className='card-form__button'
            type='submit'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nextIdToCard: state.nextIdToCard
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card) => dispatch(addCard(card))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardInput)