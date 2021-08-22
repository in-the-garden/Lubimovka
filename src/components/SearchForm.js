import React from 'react';

export function SearchForm(props) {
  const searchRef = React.useRef('');

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onSearch(searchRef.current.value)
  }

    return(
        <div className="search">
          <h1 className="search__title">Поиск</h1>
          <form className="search__form" onSubmit={handleSubmit}>
            <input className="search__input" type="text" placeholder="Август" ref={searchRef}/>
            <button className="search__button" type="submit">
              <img className="search__icon" src={props.iconImg}/>
              <p className="search__button-name">искать</p>
            </button>
          </form>
        </div>
    )
}