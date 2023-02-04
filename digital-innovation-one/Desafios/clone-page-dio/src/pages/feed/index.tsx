
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
  <>    
  <Header autenticado="true"/>
    <Container>
      <Column flex={3}>
      <Title>Feed</Title>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />

      </Column>
      <Column flex={1}>
        
      <TitleHighlight>#RANKING TOP 5 DA SEMANA</TitleHighlight>
      <UserInfo percentual={85} nome="Ivny Metzker" image="https://avatars.githubusercontent.com/u/113571205?v=4" />
      <UserInfo percentual={60} nome="Ivny Metzker" image="https://avatars.githubusercontent.com/u/113571205?v=4" />
      <UserInfo percentual={50} nome="Ivny Metzker" image="https://avatars.githubusercontent.com/u/113571205?v=4" />
      <UserInfo percentual={40} nome="Ivny Metzker" image="https://avatars.githubusercontent.com/u/113571205?v=4" />
      <UserInfo percentual={15} nome="Ivny Metzker" image="https://avatars.githubusercontent.com/u/113571205?v=4" />

      </Column>
      
    </Container>

    </>
  );
};

export { Feed };
