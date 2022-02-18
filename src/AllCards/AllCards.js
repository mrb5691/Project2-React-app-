import {useEffect, useState} from "react";
import SingleCard from "../SingleCard/SingleCard";


export default function AllCards(props){
 
    const [cards, setCards] = useState([]);
    const [clickedCard, setClickedCard] = useState('')
  
    const makeAPICall = () => {
      fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
        .then((res) => res.json())
        .then((data) => {
          setCards(data.data);
          setClickedCard(data.data[0].name)
        });
    };
  
    useEffect(() => {
      makeAPICall();
      console.log(clickedCard);
    }, []);
  
    const handleCardClick = (name) => {

      setClickedCard(name);
    }
  
    const cardList = cards.map((card) => {
      return <div>
      <img className="backImg" src="https://i.postimg.cc/dQ72NyrL/back-card-yugioh-hd-by-oricacardsbr-dbwk3sn-fullview.jpg" />
      <p onClick={() => {handleCardClick(card.name)}}>{card.name}</p>
        </div>
    });
  
  
  return(
      <div className="AllCards">
          <div>
          <h1>Cards</h1>
          {cardList}
          </div>
        <div><SingleCard  name={clickedCard} addCard={props.addCard}/></div>
       </div>
  );

}