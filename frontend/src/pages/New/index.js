import React, {useState, useMemo} from 'react';
import api from '../../services/api';

import camera from '../../assets/camera.svg';

import { Container, ButtonBtn, Label } from './styles';

export default function New({ history }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null
  }, [thumbnail])

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();
    const user_id = await localStorage.getItem('user');

    data.append('thumbnail', thumbnail);
    data.append('company', company);
    data.append('techs', techs);
    data.append('price', price);

    await api.post('/spots', data, { headers: { user_id } });

    history.push('/dashboard');
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Label 
        style={{backgroundImage: `url(${preview})`}}    
        thumbnailExists={ preview ? true : false}    
        >
          <input type="file" onChange={event => setThumbnail(event.target.files[0])}/>
          <img src={camera} alt="Select img"/>
        </Label>

        <label htmlFor="company">EMPRESA *</label>
        <input 
          id="company"
          placeholder="Sua empresa incrivel"
          value={company}
          onChange={event => setCompany(event.target.value)}
        />

        <label htmlFor="techs">TECNOLOGIAS * <span>(separadas por vírgula)</span></label>
        <input 
          id="techs"
          placeholder="Quais tecnologias usam?"
          value={techs}
          onChange={event => setTechs(event.target.value)}
        />

        <label htmlFor="company">VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span></label>
        <input 
          id="price"
          placeholder="Valor cobrado?"
          value={price}
          onChange={event => setPrice(event.target.value)}
        />

        <ButtonBtn type="submit">Cadastrar</ButtonBtn>        
      </form>
    </Container>
  );
}
