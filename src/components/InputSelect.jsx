import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputSelect extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="select-input" data-testid="genre-input-label">
        <p>Gênero</p>
        <select
          name="genre"
          id="select-input"
          value={ value }
          data-testid="genre-input"
          className="form-control"
          onChange={ onChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

InputSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
