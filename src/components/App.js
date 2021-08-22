import React, { useEffect } from 'react';
import '../App.css';
import iconImg from '../images/arrow-right.svg';
import { Play } from './Play';
import data from '../constants/data.json'
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

  const filteredAuthors = plays.filter(play => {
    if (value !== '') {
      return play.author_lastName.toLowerCase().includes(value.toLowerCase());}
  });

  //const letters = Array.from(new Set(filteredAuthors.map(author => {
  //  return author.author_lastName[0];
  //}))).sort();
  //const selectedAuthors= filteredAuthors.map(author => {
  //    author.firstLetter = author.author_lastName[0];
  //    return author;
  //  });
  
  const letters = Array.from(new Set(filteredAuthors.map(author => {
      return author.author_lastName[0];
    }))).sort();
  
  const selectedAuthors = letters.forEach(letter => {
    filteredAuthors.filter(author => {
      author.author_lastName.indexOf(`${letter}`);
      return author;
    })
  })
  console.log(selectedAuthors);

  return (
    <div className="container">
      <SearchForm iconImg={iconImg} onSearch={handleSearchPlay} filteredPlays={filteredPlays} value={value}/> 
      <div className="results">
        <section className="plays">
          {filteredPlays.map(playData => <Play play={playData} key={playData._id}/>)}
        </section>
        <section className="authors">
          {letters.map((letter, index) => <Letter letter={letter} key={index} authorsInfo={filteredAuthors}/>)}
        </section>
      </div>
    </div>
  );
}

export default App;
