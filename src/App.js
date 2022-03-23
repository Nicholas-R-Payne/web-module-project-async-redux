import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import './App.css';

import { fetchStart, fetchSuccess } from './actions';

import GifList from './components/GifList';
import GifForm from './components/GifForm';

import axios from 'axios';

function App(props) {
  const { loading, error } = props

  useEffect(() => {
    props.fetchStart()
    axios.get('https://api.giphy.com/v1/gifs/search?api_key=eF68i1SpJhoVnYQRTDKYcXdtpZlGeJDP&q=cats')
      .then(res => {
        props.fetchSuccess(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <h1>Search for Gifs</h1>
      <GifForm />

      {
        (error !== '') && <h3>{error}</h3>
      }

      {
        loading ? <h3>We are loading</h3> : <GifList />
      }

    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchStart, fetchSuccess })(App);