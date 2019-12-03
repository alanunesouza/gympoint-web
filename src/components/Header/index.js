import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Options, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>{/* <img src={logo} alt="GoBarber" /> */}</nav>

        <Options>
          <Link to="/students">ALUNOS</Link>
          <Link to="/plans">PLANOS</Link>
          <Link to="/registers">MATRÍCULAS</Link>
          <Link to="/questions">PEDIDOS DE AUXÍLIO</Link>
        </Options>
        <aside>
          <Profile>
            <div>
              {/* <strong>{profile.name}</strong> */}
              <Link to="/profile">Meu perfil</Link>
            </div>
            {/* <img
              src={
                (profile.avatar && profile.avatar.url) ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="Diego Fernandes"
            /> */}
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
