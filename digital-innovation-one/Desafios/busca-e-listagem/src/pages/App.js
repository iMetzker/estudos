
import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import Button from '../components/Button';
import Title from '../components/Title';

import {api} from '../services/api'

import {Container} from './styles'

function App() {

  const [currentRepo, setcurrentRepo ] = useState ('');

  // Buscando as informações dos repositórios
  const [repos, setRepos] = useState([]);
  
  const handleSearchRepo = async () => {
    
    const {data} = await api.get(`repos/${currentRepo}`);

  if (data.id){

    const isExist = repos.find(repo => repo.id === data.id );
    if(!isExist)
    {
      setRepos(prev => [...prev, data]);
      setcurrentRepo('');
      return
    }
  }

    alert('Repositório não encontrado')

  }

  const handleRemoveRepo = (id) => {
    setRepos ((repos) => {
      return repos.filter((repos) => repos.id !== id);
    });

  }

  return (

    <Container>
      <img src= {gitLogo} width={72} height={72} alt="Logo github"/>
      <Title />
      <Input value={currentRepo} onChange={(e) => setcurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map( repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
      
    </Container>
  );
}

export default App;
