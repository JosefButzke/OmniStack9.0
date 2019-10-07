import React, { useState } from "react";
import { Platform, AsyncStorage, Alert } from "react-native";

import api from "../../services/api";

import {
  Container,
  Label,
  Input,
  Button,
  CancelButton,
  ButtonText
} from "./styles";

export default function Book({ navigation }) {
  const [date, setDate] = useState("");

  const id = navigation.getParam("id");

  async function handleSubmit() {
    const user_id = await AsyncStorage.getItem("user");

    await api.post(
      `/spots/${user_id}/bookings`,
      {
        date
      },
      { Headers: { user_id } }
    );

    Alert.alert("Solicitação de reserva enviada.");
    navigation.navigate("List");
  }

  function handleCancel() {
    navigation.navigate("List");
  }

  return (
    <Container
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? 25 : 0
      }}
    >
      <Label>DATA DE INTERESSE *</Label>
      <Input
        placeholder="Qual data você quer reservar"
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
        value={date}
        onChangeText={text => setDate(text)} // setEmail
      />

      <Button onPress={handleSubmit}>
        <ButtonText>Solicitar reserva</ButtonText>
      </Button>

      <CancelButton onPress={handleCancel}>
        <ButtonText>Cancelar</ButtonText>
      </CancelButton>
    </Container>
  );
}
