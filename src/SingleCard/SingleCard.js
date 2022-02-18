import {useState, useEffect} from "react";


export default function SingleCard(props){
    const [card, setCard] = useState({});

  const makeAPICall = () => {
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${props.name}`)
      .then((res) => res.json())
      .then((data) => {
        setCard(data.data[0]);
      });
  };

  useEffect(() => {
    makeAPICall();
  }, [props.name]);


  let cardInfo = "";
  const url = "https://storage.googleapis.com/ygoprodeck.com/pics/"+card.id+".jpg";
  if (card.name) {
    cardInfo = (
      <div className="CardInfo">
            <h1>{card.name}</h1>
        <div>
            <img src = {url} />
        </div>
        <p>Type: {card.type} </p>
        <p>Description: {card.desc}</p>
        <p>Race: {card.race} </p>
        <button onClick={() => props.addCard(card)}>Add to deck</button>
      </div>
    );
  }

  return (
    <div className="SingleCard">
        {cardInfo}
    </div>
  );
}