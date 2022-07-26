import React from 'react';
import './App.css';
import './index.css';
import Search from './components/search/search';
import Button from './components/button/Button';
import NavBar from './components/navBar/NavBar';

// const API_URL = 

function App() {

const handleOnSearchChange = (searchData) => {
    console.log(searchData);
}

    return (
        <div className='App'>
            <NavBar />
            <h1>Discover what to</h1> 
            <h1>pack for your holiday</h1>  
            <Search onSearchChange={handleOnSearchChange} />
            <Button />
        </div>
    );
}

export default App;
