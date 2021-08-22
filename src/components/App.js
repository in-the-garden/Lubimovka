import React, { useEffect } from 'react';
import '../App.css';
import iconImg from '../images/arrow-right.svg';
import { Play } from './Play';
import data from '../constants/data.json'
import { SearchForm } from './SearchForm';
import { Author } from './Author';


function App() {
  const [plays, setPlays] = React.useState(data.result);
  const [value, setValue] = React.useState('');

  function handleSearchPlay(search) {
    setValue(search);
  }

  const filteredPlays = plays.filter(play => {
    return play.title.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className="container">
      <SearchForm iconImg={iconImg} onSearch={handleSearchPlay}/> 
      <div className="results">
        <section className="plays">
          {filteredPlays.map(playData => <Play play={playData} key={playData._id}/>)}
        </section>
        <section className="authors">
          <Author />
        </section>
      </div>
    </div>
  );
}

export default App;
