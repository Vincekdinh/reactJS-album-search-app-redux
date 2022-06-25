import * as React from "react";

class SearchBar extends React.Component {
  state = { term: ""};

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term);
    if(this.state.term === ""){
        alert("Don't stop believing...")
    } else { 
        this.props.onSubmit(this.state.term);
        this.setState({ term: ''})
    }
  };

  render() {
    return (
    <nav className='album__navbar'>
        <div className="ui inverted blue segment">
            <form className='ui form' onSubmit={this.onFormSubmit}>
                <div className="ui search large">
                    <div className="ui icon input">
                        <input 
                            className="prompt" 
                            type="text" 
                            placeholder="Artist name..."
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}/>
                    </div>
                    <button 
                        className="ui button large"
                        type="submit"
                        value="search">
                        <i className="search icon"></i>
                        Search
                    </button>
                </div>
            </form>   
        </div>
    </nav>
    );
  }
}

export default SearchBar;
