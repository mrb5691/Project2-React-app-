import './App.css';
import AllCards from "./AllCards/AllCards";
import MyDeck from "./MyDeck/MyDeck";
import BannedCards from "./BannedCards/BannedCards";
import SearchCard from "./SearchCard/SearchCard";
import PriceCards from "./PriceCards/PriceCards";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const [deckList, setDeckList] = useState([]);

  function addCard (card){
    console.log(card);

    setDeckList([...deckList, card]);
  };

  function removeCard(remover){
    console.log(remover);

    let newDeck = deckList.filter((newC, index) => {
      return index !== remover
    })


    setDeckList(newDeck)
  }

  return (
    <div className="App">
      <nav>
        <Link to="/">All Cards</Link>
        <Link to="/search">Search</Link>
        <img src="https://i.postimg.cc/zf4xxZpc/d92o1t0-eeaf66e1-c320-4d08-a4c8-75f78cec0ad8.png" />
        <Link to="/banned">Banned Cards</Link>
        <Link to="/prices">Prices IRL</Link>
        <Link to="/mydeck">My Deck</Link>
      </nav>
      <Routes>
      <Route path='/' element={<AllCards addCard={addCard} />}/>
      <Route path='/search' element={<SearchCard addCard={addCard}/>}/>
      <Route path='/banned' element={<BannedCards />}/>
      <Route path='/prices' element={<PriceCards addCard={addCard}/>}/>
      <Route path="/mydeck" element={<MyDeck removeCard={removeCard} deck={deckList} />} />
      </Routes>
    </div>
  );
}

export default App;
