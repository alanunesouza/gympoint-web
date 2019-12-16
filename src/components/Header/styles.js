import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border: 1px solid #ccc;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Options = styled.div`
  display: flex;
  flex: 5;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  border-left: 1px solid #eee;

  a {
    display: block;
    margin-top: 2px;
    margin: 10px;
    font-size: 15px;
    color: #444;
  }
`;

export const Profile = styled.div`
  display: flex;
  padding-left: 20px;
  border-left: 1px solid #eee;

  @media (max-width: 767px) {
    padding-left: 5px;
  }

  div {
    margin-right: 10px;
    strong {
      display: block;
      color: #333;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
    button {
      cursor: pointer;
      color: #ed4c64;
      border: none;
    }
  }
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
