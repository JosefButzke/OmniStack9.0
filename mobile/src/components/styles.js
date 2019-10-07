import styled from "styled-components/native";

import { FlatList } from "react-native";

export const Container = styled.View`
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #444;
  padding: 20px 0;
  margin-bottom: 15px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const List = styled(FlatList)`
  padding: 20px 0;
`;

export const ListItem = styled.View`
  margin-left: 20px;
`;

export const Image = styled.Image`
  width: 200px;
  height: 120px;
  resize-mode: cover;
  border-radius: 2px;
`;

export const CompanyName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
`;

export const PriceName = styled.Text`
  font-size: 15px;
  color: #999;
  margin-top: 5px;
`;

export const Button = styled.TouchableOpacity`
  height: 32px;
  background: #f05a5b;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  margin-top: 15px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;
