// Components
import Chip from "./../common/Chip";
import Card from "./../common/Card";
import SubCard from "./../common/SubCard";

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
            Your submissions
          </div>
        </div>
        <div
          className="chipContainer"
          style={{
            fontSize: internalUser.largeFont ? "3rem" : "1rem",
          }}
        >
          <Chip
            attribute={"Today"}
            color={"#ffebc8"}
            highContrast={internalUser.highContrast}
          />
          <Chip
            attribute={"Yesterday"}
            color={"#ffebc8"}
            highContrast={internalUser.highContrast}
          />
          <Chip
            attribute={"Week"}
            color={"#ffebc8"}
            highContrast={internalUser.highContrast}
          />
          <Chip
            attribute={"Month"}
            color={"#ffebc8"}
            highContrast={internalUser.highContrast}
          />
          <Chip
            attribute={"Later"}
            color={"#ffebc8"}
            highContrast={internalUser.highContrast}
          />
        </div>
        <div className="homeContainer">
          <div className="subCardContainer">
            <SubCard
              image={bird02}
              name="Blue Tit"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#ddf4fa"}
              large={internalUser.largeFont}
              highContrast={internalUser.highContrast}
            />
            <SubCard
              image={bird05}
              name="Coal Tit"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#86a5d2"}
              large={internalUser.largeFont}
              highContrast={internalUser.highContrast}
            />
            <SubCard
              image={bird06}
              name="Dove"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#f9d58c"}
              large={internalUser.largeFont}
              highContrast={internalUser.highContrast}
            />

            <SubCard
              image={bird11}
              name="Green"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#a7e391"}
              large={internalUser.largeFont}
              highContrast={internalUser.highContrast}
            />
            <SubCard
              image={bird12}
              name="Sparrow"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#91b4d2"}
              large={internalUser.largeFont}
              highContrast={internalUser.highContrast}
            />
            <SubCard
              image={bird15}
              name="Magpie"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#f1ae84"}
              large={internalUser.largeFont}
              highContrast={internalUser.highContrast}
            />
            <SubCard
              image={bird18}
              name="Starling"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#f9d58c"}
              large={internalUser.largeFont}
              highContrast={internalUser.highContrast}
            />
            <SubCard
              image={bird20}
              name="Wren"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#ddf4fa"}
              large={internalUser.largeFont}
              highContrast={internalUser.highContrast}
            />
          </div>
          <div className="endText">That's all the them!</div>
        </div>
      </div>
    </UserContextProvider>
  );
}
