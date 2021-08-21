import '../App.css';
import iconImg from '../images/arrow-right.svg'

function App() {
  return (
    <div className="container">
      <div className="search">
        <h1 className="search__title">Поиск</h1>
        <form className="search__form">
          <input className="search__input" type="text" placeholder="Август"/>
          <button className="search__button" type="button">
            <img className="search__icon" src={iconImg}/>
            <p className="search__button-name">искать</p>
          </button>
        </form>
      </div>
      <div>
        <div className="plays">

        </div>
        <div className="authors">

        </div>
      </div>
    </div>
  );
}

export default App;
