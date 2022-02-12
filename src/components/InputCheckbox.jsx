import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputImagePath extends Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <div className="form-check">
        <label
          data-testid="checkbox-input-label"
          htmlFor="checkbox-input"
          className="checkbox-input form-check-label"
        >
          <p>Mostrar somente favoritos</p>
          <input
            type="checkbox"
            name="bookmarkedOnly"
            checked={ checked }
            onChange={ onChange }
            className="form-check-input"
            data-testid="checkbox-input"
            id="checkbox-input"
          />
        </label>
      </div>
    );
  }
}

InputImagePath.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
