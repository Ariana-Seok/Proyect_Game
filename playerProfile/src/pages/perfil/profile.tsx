import React from "react";
import Card from "../../components/card/card";
import './profile.css'
import user from '../../assets/user.jpeg'
// import GameCard from "../../components/game-card/GameCard";

const Perfil: React.FC = () => {

  return (
    <div className="container_profile">

    <main>
      <div className="container_img">
        <img src={ user } alt="David" />
      </div>
      <div className="container_cards">
        <Card
          title="PROFILE" 
          first_sub_title="USERNAME" 
          second_sub_title="AGE" 
          third_sub_title = "UNLOCKED CHARACTERS" 
          fourth_sub_title="DAYS PLAYING" 
          first_data="Apolo123"
          second_data="25"
          third_data="1"
          fourth_data="2"
          playtime="Member since 03/11/2023"
        />

        <Card 
          title="CHARACTER DATA" 
          first_sub_title="NAME" 
          second_sub_title="SANITY" 
          third_sub_title = "STATE" 
          fourth_sub_title="ENDING" 
          first_data="Alex"
          second_data="Good"
          third_data="Alive"
          fourth_data="Handed over the murderer"
          playtime=""
        />

      </div>
      
    </main>

      {/* if user has more than 0 games, show the cards of those games: */}

      {/* <GameCard/> */}

      {/* Tener en cuenta: el componente GameCard marca error porque es preciso pasarle los objetos con una iteración, luego de realizar la petición de los mismos a la base de datos. */}
      
    </div>
  );
};

export default Perfil;