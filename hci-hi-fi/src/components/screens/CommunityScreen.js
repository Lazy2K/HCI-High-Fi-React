// Components
import Chip from "./../common/Chip";
import Card from "./../common/Card";
import GroupCard from "./../common/GroupCard";

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

import group01 from "./../../assets/group-images/group-01.jpg";
import group02 from "./../../assets/group-images/group-02.jpg";
import group03 from "./../../assets/group-images/group-03.jpg";
import group04 from "./../../assets/group-images/group-04.jpg";

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
            Explore & engage with your community
          </div>
        </div>
        <div
          className="chipContainer"
          style={{
            fontSize: internalUser.largeFont ? "3rem" : "1rem",
          }}
        >
          <Chip
            attribute={"Large Groups"}
            color={"#ffebc8"}
            highContrast={internalUser.highContrast}
          />
          <Chip
            attribute={"Small Groups"}
            color={"#ffebc8"}
            highContrast={internalUser.highContrast}
          />
          <Chip
            attribute={"Long Walks"}
            color={"#ffebc8"}
            highContrast={internalUser.highContrast}
          />
          <Chip
            attribute={"Bird Watching"}
            color={"#ffebc8"}
            highContrast={internalUser.highContrast}
          />
          <Chip
            attribute={"Camping Trips"}
            color={"#ffebc8"}
            highContrast={internalUser.highContrast}
          />
          <Chip
            attribute={"Local Groups"}
            color={"#ffebc8"}
            highContrast={internalUser.highContrast}
          />
          <Chip
            attribute={"International Groups"}
            color={"#ffebc8"}
            highContrast={internalUser.highContrast}
          />
        </div>
        <div className="homeContainer">
          <div className="cardContainer">
            <GroupCard
              image={group01}
              name="Barry's birds"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#f1ae84"}
              large={internalUser.largeFont}
              highContrast={internalUser.highContrast}
            />
            <GroupCard
              image={group02}
              name="Birds and beers"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#ddf4fa"}
              large={internalUser.largeFont}
              highContrast={internalUser.highContrast}
            />
            <GroupCard
              image={group03}
              name="Camping and bird watching"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#86a5d2"}
              large={internalUser.largeFont}
              highContrast={internalUser.highContrast}
            />
            <GroupCard
              image={group04}
              name="Walks and bird watching"
              onPress={() =>
                onSetRenderScreen(<BirdScreen clicky={onSetRenderScreen} />)
              }
              color={"#f9d58c"}
              large={internalUser.largeFont}
              highContrast={internalUser.highContrast}
            />
          </div>
          <div className="endText">
            That's all of them! Why don't you create one?
          </div>
        </div>
      </div>
    </UserContextProvider>
  );
}
