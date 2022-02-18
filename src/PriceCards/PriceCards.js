import {useEffect, useState} from "react";
import SingleCard from "../SingleCard/SingleCard";


export default function PriceCards(props){
    const [priceCards, setPriceCards] = useState([]);
    const [priceClickedCard, setPriceClickedCard] = useState('')
  
    const makeAPICall = () => {
      fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
        .then((res) => res.json())
        .then((data) => {
          setPriceCards(data.data);
          setPriceClickedCard(data.data[0].name)
        });
    };

    useEffect(() => {
        makeAPICall();
      }, []);
    
      const handleCardClick = (name) => {
    
        setPriceClickedCard(name);
      }
    
      const priceList = priceCards.map((card) => {
        return <div>
            <img className="backImg" src="https://i.postimg.cc/dQ72NyrL/back-card-yugioh-hd-by-oricacardsbr-dbwk3sn-fullview.jpg" />
            <p onClick={() => {handleCardClick(card.name)}}>{card.name}: ${card.card_prices[0].amazon_price}</p>
            </div>
      });
    
    
    return(
        <div className="PricedCards">
            <div>
            <h1>Price of Cards</h1>
            {priceList}
            </div>
            <div><SingleCard  name={priceClickedCard} addCard={props.addCard}/></div>
         </div>
    );

}

