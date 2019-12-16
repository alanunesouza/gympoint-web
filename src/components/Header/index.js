import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';
import { Container, Content, Options, Profile } from './styles';
import logo from '../../assets/logo.svg';

export default function Header() {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/students">
            <img src={logo} alt="GymPoint" />
          </Link>
        </nav>

        <Options>
          <Link to="/students">ALUNOS</Link>
          <Link to="/plans">PLANOS</Link>
          <Link to="/registers">MATRÍCULAS</Link>
          <Link to="/questions">PEDIDOS DE AUXÍLIO</Link>
        </Options>
        <aside>
          <Profile>
            <div>
              <Link to="/profile">{name}</Link>
              <button type="button" onClick={handleSignOut}>
                sair do sistema
              </button>
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
