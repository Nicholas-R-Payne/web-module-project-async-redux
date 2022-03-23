import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import GifList from './components/GifList';
import GifForm from './components/GifForm';

function App(props) {
  const { loading, gifs } = props
  return (
    <div className="App">
      <h1>Search for Gifs</h1>
      <GifForm />

      {
        loading ? <h3>We are loading</h3> : <GifList gifs={gifs} />
      }

    </div>
  );
}

const mapStateToProps = state => {
  return {
    gifs: state.gifs,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(App);