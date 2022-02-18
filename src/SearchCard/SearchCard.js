import {useState} from "react";
import SingleCard from "../SingleCard/SingleCard";

export default function SearchCard(props){
  const [cardName, setCardName] = useState("");
 


  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=`+cardName)
      .then((res) => res.json())
      .catch(() => console.log("oops error"));
  };

  const handleChange = (event) => {
    setCardName(event.target.value);
  };

  return (
    <div className="App">
      <h1>Search Card</h1>
      <form onSubmit={handleSubmit}>
        <label>Card Name:</label>
        <input type="text" value={cardName} onChange={handleChange} />
        <input type="submit" value="Search"/>
      </form>
      {
        <div><SingleCard  name={cardName} addCard={props.addCard}/></div>
      }
    </div>
  );
}