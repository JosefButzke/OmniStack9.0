import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  font-weight: bold;
  color: #444;
  margin-bottom: 8px;
`;

export const Form = styled.View`
  align-self: stretch;
  padding: 30px;
`;

export const Input = styled.TextInput`
  border: 1px solid #ddd;
  padding: 0 20px;
  font-size: 16;
  color: #444;
  height: 44px;
  margin-bottom: 20px;
  border-radius: 2px;
`;

export const Button = styled.TouchableOpacity`
  height: 42px;
  background: #f05a5b;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
