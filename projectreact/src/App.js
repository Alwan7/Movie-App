import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react'
import SearchMovie from './components/SearchMovie';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
    return (
      <div>
      <Header header='Omdb Movies' />
       <SearchMovie />
       <div>
       <Footer />
      </div>
      </div>
    );
}

export default App;