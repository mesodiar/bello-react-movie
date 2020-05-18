import React, {useState} from 'react';
import './App.css';
import Axios from 'axios'
import MovieItems from './MovieItems';

function App() {

  const [result, setResult] = useState({rows: [{title: 'mils'}, {title: 'eiei'}]});

  let search = (keyword) => {
    console.log(keyword)
    let dataArray = []
    let url = 'https://api.themoviedb.org/3/search/movie?api_key=57e4e92e33bba504433d66ef2993cf30&language=en-US&page=1&include_adult=false&query=' + keyword
    Axios.get(url).then(result => {
      result.data.results.forEach(item => {
        item.poster_src = "https://image.tmdb.org/t/p/w185" + item.poster_path
        dataArray.push(item)
      })

      setResult({rows :dataArray})
    })
  }

  return (
    <div className="App">
      <table className="NavBar">
        <tbody>
          <tr>
            <td>
              <img src={require('./assets/logo.svg')} width="50" />
            </td>
            <td>
              Mesodiar
            </td>
          </tr>
        </tbody>
      </table>
      <input style={{ fontSize: 24, display: 'block', width: '100%', paddingLeft: 8 }} placeholder="Enter your movie keyword" onChange={(event) => {search(event.target.value)}} />

      { result.rows.map(item => (
        <MovieItems movie={item} />
      )) }
    </div>
  );
}

export default App;
