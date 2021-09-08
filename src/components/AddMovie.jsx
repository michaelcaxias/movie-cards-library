import React, { Component } from 'react';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.changeInput = this.changeInput.bind(this);
  }

  changeInput({ target }) {
    const { value } = target;
    this.setState({
      title: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-text" data-testid="title-input-label">
          <p>Título</p>
          <input
            type="text"
            data-testid="title-input"
            id="input-text"
            value={ title }
            onChange={ this.changeInput }
          />
        </label>
      </form>
    );
  }
}
