import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="search-text">
          <p>Inclui o texto:</p>
          <input
            data-testid="text-input"
            id="search-text"
            type="text"
            onChange={ onSearchTextChange }
            value={ searchText }
          />
        </label>
      </form>
    );
  }
}
