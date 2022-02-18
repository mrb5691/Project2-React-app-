import {useEffect, useState} from "react";
import SingleCard from "../SingleCard/SingleCard";


export default function BannedCards(props){
    const [bannedCards, setBannedCards] = useState([]);
    const [bannedClickedCard, setBannedClickedCard] = useState('')
  
    const makeAPICall = () => {
      fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg")
        .then((res) => res.json())
        .then((data) => {
          setBannedCards(data.data);
          setBannedClickedCard(data.data[0].name)
        });
    };

    useEffect(() => {
        makeAPICall();
      }, []);
    
      const handleCardClick = (name) => {
    
        setBannedClickedCard(name);
      }
    
      const banList = bannedCards.map((card) => {
          
        return <div>
        <img className="backImg" src="https://i.postimg.cc/dQ72NyrL/back-card-yugioh-hd-by-oricacardsbr-dbwk3sn-fullview.jpg" />
        <p onClick={() => {handleCardClick(card.name)}}>{card.name}</p>
        </div>
      });
    
    
    return(
        <div className="BannedCards">
            <div>
            <h1>Banned Cards</h1>
            {banList}
            </div>
          <div><SingleCard  name={bannedClickedCard} addCard={props.addCard}/></div>
         </div>
    );


}