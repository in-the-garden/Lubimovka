import React, { useEffect } from 'react';
import '../App.css';
import iconImg from '../images/arrow-right.svg';
import { Play } from './Play';
import data from '../data/data.json'
import { SearchForm } from './SearchForm';
import { Letter } from './Letter';


function App() {
  const [plays, setPlays] = React.useState(data.result);
  const [value, setValue] = React.useState('');

  function handleSearchPlay(search) {
    setValue(search);
  }

  const filteredPlays = plays.filter(play => {
    if (value !== '') {
      return play.title.toLowerCase().includes(value.toLowerCase());}
  });

  const filteredPlaysByRequest = plays.filter(play => {
    if (value !== '') {
      return (play.author_lastName.toLowerCase().includes(value.toLowerCase()) || play.author_firstName.toLowerCase().includes(value.toLowerCase()));}
  });
 
  const letters = Array.from(new Set(filteredPlaysByRequest.map(playData => {
      return playData.author_lastName[0];
    }))).sort();
  
  const authors = Array.from(new Set(filteredPlaysByRequest.map(playData => {
    return `${playData.author_lastName} ${playData.author_firstName}`;
  }))).sort();


  return (
    <div className="container">
      <SearchForm iconImg={iconImg} onSearch={handleSearchPlay} filteredPlays={filteredPlays} value={value}/> 
      <div className="results">
        <section className="plays">
          {filteredPlays.map(playData => <Play play={playData} key={playData._id}/>)}
        </section>
        <section className="authors">
          {letters.map((letter, index) => <Letter letter={letter} key={index} authors={authors}/>)}
        </section>
      </div>
    </div>
  );
}

export default App;
