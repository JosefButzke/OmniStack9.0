import React, { useState, useEffect } from "react";
import { AsyncStorage, Platform } from "react-native";

import SpotList from "../../components/SpotList";

import logo from "../../assets/logo.png";

import { Container, Scroll, Logo } from "./styles";

export default function List() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("techs").then(storeagedtechs => {
      const techsArray = storeagedtechs.split(",").map(tech => tech.trim());

      setTechs(techsArray);
    });
  }, []);

  return (
    <Container
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? 25 : 0
      }}
    >
      <Logo source={logo} />
      <Scroll>
        {techs.map(tech => (
          <SpotList key={tech} tech={tech} />
        ))}
      </Scroll>
    </Container>
  );
}
