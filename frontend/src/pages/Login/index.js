import React, { useState } from 'react';
import api from '../../services/api'

import { Container, ButtonBtn } from './styles';

export default function Login({ history }) {

  const [ email, setEmail ] = useState('');

  async function handleSubmit(event){
    event.preventDefault();
    const response = await api.post('/sessions', { email });
    console.log(response);
    
    const {_id} = response.data;
    
    localStorage.setItem('user', _id);

    if(response.status === 200)
      history.push('/dashboard');
  }

  return (
    <Container> 
       <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa </p>
       <form onSubmit={handleSubmit}>
         <label htmlFor="email">E-MAIL *</label>
         <input
          id="email"
          type="email" 
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
         />
         <ButtonBtn type="submit">Entrar</ButtonBtn>
       </form>
    </Container>
  );
}
