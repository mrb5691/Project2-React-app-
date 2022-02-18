# Project Overview

## Project Links

- [Github link](https://github.com/mrb5691/Project2-React-app-.git)
- [add your deployment link]()

## Project Description

This project uses React and a yugioh api to display the cards, filter by type of card, search for a specific card, look up real world prices of said cards, and build your own deck if you so desire.

## API

The api link below will be used in order to gather the information for yugioh cards that will be displayed in the app.

https://db.ygoprodeck.com/api/v7/cardinfo.php


```
{{"data":[{"id":46986421,"name":"Dark Magician","type":"Normal Monster","desc":"''The ultimate wizard in terms of attack and defense.''","atk":2500,"def":2100,"level":7,"race":"Spellcaster","attribute":"DARK","archetype":"Dark Magician","card_sets":[{"set_name":"2016 Mega-Tins","set_code":"CT13-EN003","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"11.37"},{"set_name":"2017 Mega-Tins","set_code":"CT14-EN001","set_rarity":"Secret Rare","set_rarity_code":"(ScR)","set_price":"6.77"},{"set_name":"Booster Pack Collectors Tins 2002","set_code":"BPT-001","set_rarity":"Secret Rare","set_rarity_code":"(ScR)","set_price":"77.16"},{"set_name":"Collectible Tins 2003","set_code":"BPT-007","set_rarity":"Secret Rare","set_rarity_code":"(ScR)","set_price":"19.51"},{"set_name":"Dark Beginning 1","set_code":"DB1-EN102","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"25.12"},{"set_name":"Dark Legends","set_code":"DLG1-EN004","set_rarity":"Rare","set_rarity_code":"(R)","set_price":"16.39"},{"set_name":"Duel Power","set_code":"DUPO-EN101","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"4.32"},{"set_name":"Duel Terminal - Preview Wave 1","set_code":"DTP1-EN002","set_rarity":"Duel Terminal Normal Parallel Rare","set_rarity_code":"(DNPR)","set_price":"0.00"},{"set_name":"Duel Terminal - Preview Wave 2","set_code":"DTP1-EN002","set_rarity":"Duel Terminal Rare Parallel Rare","set_rarity_code":"(DRPR)","set_price":"0.00"},{"set_name":"Duel Terminal 1","set_code":"DT01-EN002","set_rarity":"Duel Terminal Rare Parallel Rare","set_rarity_code":"(DRPR)","set_price":"18.56"},{"set_name":"Duelist League 2 participation cards","set_code":"DL11-EN001","set_rarity":"Rare","set_rarity_code":"(R)","set_price":"679.42"},{"set_name":"Duelist Pack: Battle City","set_code":"DPBC-EN008","set_rarity":"Super Rare","set_rarity_code":"(SR)","set_price":"6.69"},{"set_name":"Duelist Pack: Yugi","set_code":"DPYG-EN001","set_rarity":"Rare","set_rarity_code":"(R)","set_price":"2.58"},{"set_name":"Duelist Saga","set_code":"DUSA-EN100","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"9.84"},{"set_name":"Forbidden Legacy","set_code":"FL1-EN002","set_rarity":"Secret Rare","set_rarity_code":"(ScR)","set_price":"17.9"},{"set_name":"Ghosts From the Past (set)","set_code":"GFTP-EN128","set_rarity":"Ghost Rare","set_rarity_code":"(GR)","set_price":"717.85"},{"set_name":"KC Grand Tournament 2021 prize card","set_code":"2021-EN001","set_rarity":"Extra Secret Rare","set_rarity_code":"","set_price":"0.00"},{"set_name":"Legend of Blue Eyes White Dragon","set_code":"LOB-005","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"39.98"},{"set_name":"Legend of Blue Eyes White Dragon","set_code":"LOB-E003","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"55.73"},{"set_name":"Legend of Blue Eyes White Dragon","set_code":"LOB-EN005","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"60.17"},{"set_name":"Legendary Collection","set_code":"LC01-EN005","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"5.63"},{"set_name":"Legendary Collection 3: Yugi's World Mega Pack","set_code":"LCYW-EN001","set_rarity":"Secret Rare","set_rarity_code":"(ScR)","set_price":"16.89"},{"set_name":"Legendary Decks II","set_code":"LDK2-ENY10","set_rarity":"Common","set_rarity_code":"(C)","set_price":"2.3"},{"set_name":"Legendary Dragon Decks","set_code":"LEDD-ENA01","set_rarity":"Common","set_rarity_code":"(C)","set_price":"1.71"},{"set_name":"Maximum Gold","set_code":"MAGO-EN002","set_rarity":"Premium Gold Rare","set_rarity_code":"(PG)","set_price":"13.59"},{"set_name":"Retro Pack","set_code":"RP01-EN003","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"536.88"},{"set_name":"Shonen Jump Vol. 9, Issue 4 promotional card","set_code":"JUMP-EN049","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"109.57"},{"set_name":"Speed Duel Starter Decks: Destiny Masters","set_code":"SS01-ENA01","set_rarity":"Common","set_rarity_code":"(C)","set_price":"1.49"},{"set_name":"Speed Duel Starter Decks: Match of the Millennium","set_code":"SS04-ENA01","set_rarity":"Common","set_rarity_code":"(C)","set_price":"1.63"},{"set_name":"Speed Duel Tournament Pack 1","set_code":"STP1-EN001","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"109.6"},{"set_name":"Speed Duel: Battle City Box","set_code":"SBCB-EN001","set_rarity":"Common","set_rarity_code":"(C)","set_price":"1.52"},{"set_name":"Speed Duel: Battle City Box","set_code":"SBCB-EN001","set_rarity":"Secret Rare","set_rarity_code":"(ScR)","set_price":"7.3"},{"set_name":"Starter Deck: Yugi","set_code":"SDY-006","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"14.79"},{"set_name":"Starter Deck: Yugi","set_code":"SDY-E005","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"24.43"},{"set_name":"Starter Deck: Yugi Evolution","set_code":"SYE-001","set_rarity":"Super Rare","set_rarity_code":"(SR)","set_price":"5.77"},{"set_name":"Starter Deck: Yugi Reloaded","set_code":"YSYR-EN001","set_rarity":"Common","set_rarity_code":"(C)","set_price":"2.47"},{"set_name":"Starter Deck: Yugi Reloaded","set_code":"YSYR-EN001","set_rarity":"Ultimate Rare","set_rarity_code":"(UtR)","set_price":"13.29"},{"set_name":"Structure Deck: Spellcaster's Judgment","set_code":"SD6-EN003","set_rarity":"Common","set_rarity_code":"(C)","set_price":"2.78"},{"set_name":"Structure Deck: Yugi Muto","set_code":"SDMY-EN010","set_rarity":"Common","set_rarity_code":"(C)","set_price":"5.73"},{"set_name":"WSJ Jump Pack Fall 2016 promotional card","set_code":"JMPS-EN003","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"113.64"},{"set_name":"Yu-Gi-Oh! Dark Duel Stories promotional cards","set_code":"DDS-002","set_rarity":"Prismatic Secret Rare","set_rarity_code":"(PScR)","set_price":"1672.85"},{"set_name":"Yu-Gi-Oh! Power of Chaos: Yugi the Destiny promotional cards","set_code":"PCY-004","set_rarity":"Prismatic Secret Rare","set_rarity_code":"(PScR)","set_price":"68.29"},{"set_name":"Yu-Gi-Oh! Power of Chaos: Yugi the Destiny promotional cards","set_code":"PCY-E004","set_rarity":"Prismatic Secret Rare","set_rarity_code":"(PScR)","set_price":"90.88"},{"set_name":"Yu-Gi-Oh! The Dark Side of Dimensions Movie Pack","set_code":"MVP1-EN054","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"4.81"},{"set_name":"Yu-Gi-Oh! The Dark Side of Dimensions Movie Pack Secret Edition","set_code":"MVP1-ENS54","set_rarity":"Secret Rare","set_rarity_code":"(ScR)","set_price":"7.47"},{"set_name":"Yu-Gi-Oh! The Dark Side of Dimensions Movie Pack Secret Edition","set_code":"MVP1-ENSV3","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"4.17"},{"set_name":"Yu-Gi-Oh! The Dark Side of Dimensions Movie Pack Special Edition","set_code":"MVP1-ENSE3","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"2.88"},{"set_name":"Yu-Gi-Oh! The Dark Side of Dimensions Movie Pack: Gold Edition","set_code":"MVP1-ENG54","set_rarity":"Gold Rare","set_rarity_code":"(GUR)","set_price":"5.06"},{"set_name":"Yu-Gi-Oh! The Dark Side of Dimensions Movie Pack: Gold Edition","set_code":"MVP1-ENGV3","set_rarity":"Gold Secret Rare","set_rarity_code":"(GScR)","set_price":"8.09"},{"set_name":"Yugi's Collector Box","set_code":"YUCB-EN001","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"4.98"},{"set_name":"Yugi's Legendary Decks","set_code":"YGLD-ENA03","set_rarity":"Common","set_rarity_code":"(C)","set_price":"0"},{"set_name":"Yugi's Legendary Decks","set_code":"YGLD-ENB02","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"0"},{"set_name":"Yugi's Legendary Decks","set_code":"YGLD-ENC09","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"0"}],"card_images":[{"id":46986421,"image_url":"https://storage.googleapis.com/ygoprodeck.com/pics/46986421.jpg","image_url_small":"https://storage.googleapis.com/ygoprodeck.com/pics_small/46986421.jpg"},{"id":46986420,"image_url":"https://storage.googleapis.com/ygoprodeck.com/pics/46986420.jpg","image_url_small":"https://storage.googleapis.com/ygoprodeck.com/pics_small/46986420.jpg"},{"id":46986414,"image_url":"https://storage.googleapis.com/ygoprodeck.com/pics/46986414.jpg","image_url_small":"https://storage.googleapis.com/ygoprodeck.com/pics_small/46986414.jpg"},{"id":46986415,"image_url":"https://storage.googleapis.com/ygoprodeck.com/pics/46986415.jpg","image_url_small":"https://storage.googleapis.com/ygoprodeck.com/pics_small/46986415.jpg"},{"id":46986416,"image_url":"https://storage.googleapis.com/ygoprodeck.com/pics/46986416.jpg","image_url_small":"https://storage.googleapis.com/ygoprodeck.com/pics_small/46986416.jpg"},{"id":46986417,"image_url":"https://storage.googleapis.com/ygoprodeck.com/pics/46986417.jpg","image_url_small":"https://storage.googleapis.com/ygoprodeck.com/pics_small/46986417.jpg"},{"id":46986418,"image_url":"https://storage.googleapis.com/ygoprodeck.com/pics/46986418.jpg","image_url_small":"https://storage.googleapis.com/ygoprodeck.com/pics_small/46986418.jpg"},{"id":46986419,"image_url":"https://storage.googleapis.com/ygoprodeck.com/pics/46986419.jpg","image_url_small":"https://storage.googleapis.com/ygoprodeck.com/pics_small/46986419.jpg"},{"id":36996508,"image_url":"https://storage.googleapis.com/ygoprodeck.com/pics/36996508.jpg","image_url_small":"https://storage.googleapis.com/ygoprodeck.com/pics_small/36996508.jpg"}],"card_prices":[{"cardmarket_price":"0.03","tcgplayer_price":"0.50","ebay_price":"9.95","amazon_price":"4.24","coolstuffinc_price":"4.99"}]}]}}
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Mobile](https://i.postimg.cc/HsftF977/Screen-Shot-2022-02-14-at-3-07-24-PM.png)
- [Desktop](https://i.postimg.cc/Y2DRzHrR/Screen-Shot-2022-02-14-at-2-45-08-PM.png)
- [architecture](https://i.postimg.cc/TPxJ320d/Screen-Shot-2022-02-14-at-3-27-46-PM.png)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP
- Find and use external api 
- Render data on page 
- Allow user to interact with the page
- Set routes
- Set search function
- Display route data

#### PostMVP

- Add styles
- Experiment with deck functionality
- switch to a nav hamburger menu
- Explore other creative means for the website

## Components

| Component | Description | 
| --- | :---: |  
| App | Display the data(cards) and use React Router to make the routes| 
| Header | Render header with yugioh pic and different routes | 
| Footer | repeat the routes at the bottom | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Displaying Cards | H | 1hrs| 1hrs | 1hrs |
| Work on Routes | H | 10hrs| 12hrs | 12hrs |
| Search function | H | 3hrs| 4hrs | 4hrs |
| Styling | H | 4hrs| 2hrs | 2hrs |
| deck functionality | H | 6hrs| 6hrs | 6hrs |
| hamburger menu | H | 1hrs| 0hrs | 0hrs |
| Total | H | 25hrs| hrs | hrs |

## Additional Libraries
 
 React Router (For functionality)
  www.fontawesome.com (for icons)
 www.pexels.com (for images)
 www.deviantart.com (yugioh logo and cardback images)
 https://db.ygoprodeck.com/api-guide/ (for yugioh api)
 

## Code Snippet

```
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
```
