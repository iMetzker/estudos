import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo-dio.png'
import {ButtonHeader} from "../ButtonHeader"

import {IHeader} from './types'


import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
  LogoDio,
  UserPicture
} from "./styles";

const Header = ({autenticado}:IHeader) => {

  const navigate = useNavigate ();
  const handleClickSignIn = () =>{
    navigate('/login')
  }

  return (

    <Wrapper>

    <Container>

    <Row>
        <LogoDio src={logo} alt="Logo da DIO"/>
        {autenticado ? 
        (
          <>
          <BuscarInputContainer>
          <Input placeholder='Pesquisar'/>
          </BuscarInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
          </>
        )  : null}
        
    </Row>
    <Row>
      {
      autenticado ? (
      <UserPicture src="https://avatars.githubusercontent.com/u/113571205?v=4" />
      ) :(
      <>
      <MenuRight href="/">Home</MenuRight>

      <ButtonHeader title="Entrar" onClick={handleClickSignIn} />
      <ButtonHeader title="Cadastrar"/>

      </>
      )
      }
        
    </Row>

    </Container>

    </Wrapper>

  )
};

export { Header };