import React from "react";
import "../App.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <nav className='album__navbar'>
        <section className='album__search'>
          <form className='album__search-action' onSubmit={this.onFormSubmit}>
            <input
              className='album__search-query'
              type='text'
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
              placeholder='Artist name...'
            />
            <input
              type='submit'
              value='Search'
              className='album__search-button'
            />
          </form>
        </section>
      </nav>
    );
  }
}

export default SearchBar;
