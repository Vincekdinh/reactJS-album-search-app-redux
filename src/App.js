import * as React from 'react';
import {Counter} from './features/counter/Counter';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Divider from './components/Divider';
import AlbumList from './components/AlbumList'
import {Container} from '@mui/material'
import './App.css';

class App extends React.Component {
    state = { 
        albums: [],
        loading: false
     };
  
    //Search albums from Apple API
    onSearchSubmit = async (searchTerm) => {
      this.setState({ loading: true})
      console.log(searchTerm);
      let searchURL = `https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=album&attribute=artistTerm&limit=50`;
       await fetch(searchURL)
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                    this.setState({ albums: json.results });
                    this.setState({ loading: false})
                });
    };

    render(){
        return (
            <>
                <header>
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                </header>
                <main>
                    <Header/>
                    <Counter/>
                    <Divider/>
                    <Container maxWidth="xl">
                        <AlbumList albums={this.state.albums} loading={this.state.loading}/>
                    </Container>
                </main>
            </>
          )
    }
}

export default App