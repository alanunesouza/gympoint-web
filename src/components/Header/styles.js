import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border: 1px solid #ccc;
`;

export const Content = styled.div`
  height: 64px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    flex: 1;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
  }
  aside {
    display: flex;
    flex: 1;
  }
`;

export const Options = styled.div`
  display: flex;
  flex: 5;
  align-items: center;
  justify-content: flex-start;
  margin-left: 20px;
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
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  div {
    text-align: right;
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
  }
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
