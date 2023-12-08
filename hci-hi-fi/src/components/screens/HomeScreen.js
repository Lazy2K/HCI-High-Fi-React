// Components
import Chip from "./../common/Chip";
import Card from "./../common/Card";

// Images
import image01 from "./../../assets/md/midres-1.jpg";
import image02 from "./../../assets/md/midres-2.jpg";
import image03 from "./../../assets/md/midres-3.jpg";
import image04 from "./../../assets/md/midres-4.jpg";
import image05 from "./../../assets/md/midres-5.jpg";
import image06 from "./../../assets/md/midres-6.jpg";

// Bird Images
import bird01 from "./../../assets/bird-images/blackbird.jpg";
import bird02 from "./../../assets/bird-images/blue-tit.jpg";
import bird03 from "./../../assets/bird-images/carrion-crow.jpg";
import bird04 from "./../../assets/bird-images/chaffinch.jpg";
import bird05 from "./../../assets/bird-images/coal-tit.jpg";
import bird06 from "./../../assets/bird-images/collared-dove.jpg";
import bird07 from "./../../assets/bird-images/dunnock.jpg";
import bird08 from "./../../assets/bird-images/feral-pigeon.jpg";
import bird09 from "./../../assets/bird-images/goldfinch.jpg";
import bird10 from "./../../assets/bird-images/great-tit.jpg";
import bird11 from "./../../assets/bird-images/greenfinch.jpg";
import bird12 from "./../../assets/bird-images/house-sparrow.jpg";
import bird13 from "./../../assets/bird-images/jackdaw.jpg";
import bird14 from "./../../assets/bird-images/long-tailed-tit.jpg";
import bird15 from "./../../assets/bird-images/magpie.jpg";
import bird16 from "./../../assets/bird-images/robin.jpg";
import bird17 from "./../../assets/bird-images/rook.jpg";
import bird18 from "./../../assets/bird-images/starling.jpg";
import bird19 from "./../../assets/bird-images/wood-pigeon.jpg";
import bird20 from "./../../assets/bird-images/wren.jpg";

import logo from "./../../assets/logos/logo-1.png";

import BirdScreen from "./BirdScreen";

import "./css/homeScreen.css";

import { useContext } from "react";
import { UserContextProvider, UserContext } from "../function/userContext";

export default function HomeScreen({ onSetRenderScreen }) {
  const [internalUser, setInternalUser] = useContext(UserContext);

  return (
    <UserContextProvider>
      <div
        className="homeScreen"
        style={{
          fontSize: internalUser.largeFont ? "3rem" : "1rem",
        }}
      >
        <div className="homeContainer">
          <div className="Header"></div>
          <img src={logo} className="logo" />
          <div
            className="title"
            style={{ fontSize: internalUser.largeFont ? "4rem" : "3rem" }}
          >
            Welcome Nick, what birds can you see?
          </div>
        </div>
        <div
          className="chipContainer"
          style={{
            fontSize: internalUser.largeFont ? "3rem" : "1rem",
          }}
        >
          <Chip attribute={"Owls"} color={"#ffebc8"} />
          <Chip attribute={"Parrots"} color={"#ffebc8"} />
          <Chip attribute={"Hummingbirds"} color={"#ffebc8"} />
          <Chip attribute={"Woodpeckers"} color={"#ffebc8"} />
          <Chip attribute={"Shorebirds"} color={"#ffebc8"} />
          <Chip attribute={"Flacons"} color={"#ffebc8"} />
          <Chip attribute={"Pelicans"} color={"#ffebc8"} />
          <Chip attribute={"Thrushes"} color={"#ffebc8"} />
          <Chip attribute={"Wrens"} color={"#ffebc8"} />
        </div>
        <div className="homeContainer">
          <div className="cardContainer">
            <Card
              image={bird04}
              name="Chaffinch"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#f1ae84"}
              large={internalUser.largeFont}
            />
            <Card
              image={bird02}
              name="Blue Tit"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#ddf4fa"}
              large={internalUser.largeFont}
            />
            <Card
              image={bird05}
              name="Coal Tit"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#86a5d2"}
              large={internalUser.largeFont}
            />
            <Card
              image={bird06}
              name="Dove"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#f9d58c"}
              large={internalUser.largeFont}
            />
            <Card
              image={bird08}
              name="Pigeon"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#f9d58c"}
              large={internalUser.largeFont}
            />
            <Card
              image={bird01}
              name="Blackbird"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#9e9e9e"}
              large={internalUser.largeFont}
            />

            <Card
              image={bird03}
              name="Crow"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#9e9e9e"}
              large={internalUser.largeFont}
            />

            <Card
              image={bird07}
              name="Dunnock"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#ecb88f"}
              large={internalUser.largeFont}
            />

            <Card
              image={bird09}
              name="Goldfinch"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#ecb88f"}
              large={internalUser.largeFont}
            />

            <Card
              image={bird10}
              name="Great Tit"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#f1ae84"}
              large={internalUser.largeFont}
            />
            <Card
              image={bird11}
              name="Green"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#a7e391"}
              large={internalUser.largeFont}
            />
            <Card
              image={bird12}
              name="Sparrow"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#91b4d2"}
              large={internalUser.largeFont}
            />
            <Card
              image={bird13}
              name="Jackdaw"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#f9d58c"}
              large={internalUser.largeFont}
            />
            <Card
              image={bird14}
              name="Tail Tit"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#ecb88f"}
              large={internalUser.largeFont}
            />
            <Card
              image={bird15}
              name="Magpie"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#f1ae84"}
              large={internalUser.largeFont}
            />
            <Card
              image={bird16}
              name="Robin"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#ddf4fa"}
              large={internalUser.largeFont}
            />

            <Card
              image={bird17}
              name="Rook"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#86a5d2"}
              large={internalUser.largeFont}
            />
            <Card
              image={bird18}
              name="Starling"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#f9d58c"}
              large={internalUser.largeFont}
            />
            <Card
              image={bird19}
              name="Pigeon"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#91b4d2"}
              large={internalUser.largeFont}
            />
            <Card
              image={bird20}
              name="Wren"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#ddf4fa"}
              large={internalUser.largeFont}
            />
          </div>
          <div className="endText">That's all the them!</div>
        </div>
      </div>
    </UserContextProvider>
  );
}
