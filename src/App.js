import * as React from 'react'
import {Counter} from './features/counter/Counter'
import SearchBar from './components/SearchBar'
import Button from '@mui/material/Button';

function App() {
  return (
    <div>
        <p>ReactJS Album Search App using Redux toolkit</p>
        <Button variant="contained">Hello World</Button>
        <SearchBar/>
        <Counter/>
    </div>
  )
}

export default App