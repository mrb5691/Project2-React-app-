
export default function MyDeck(props){

    
    let myDeck = props.deck.map((card, index) => {
        const url = "https://storage.googleapis.com/ygoprodeck.com/pics_small/"+card.id+".jpg";

        return (
          <div>
            <h3>{card.name}</h3>
            <div>
            <img src={url} />
            </div>
            <p>Type: {card.type} </p>
            <p>Price: ${card.card_prices[0].amazon_price}</p>
            <button onClick={() => props.removeCard(index)}>Remove from deck</button>
          </div>
        );
      });
     
    return (
       
      <div className="MyDeck">
        <h1>My Deck</h1>
        <div className="CardDeck">{myDeck}</div>
      </div>
    );
}