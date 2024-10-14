import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import {api} from '../../services/api'

import {
  Container,
  Title,
  Wrapper,
  Column,
  Row,
  TitleLogin,
  SubTitleLogin,
} from "./styles";
import { IFormData } from './types';

const schema = yup.object({
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: yup.string().min(6, 'Senha de no mínimo 6 caracteres').required('Campo obrigatório'),
}).required();


const Account = () => {

    const navigate = useNavigate();
    const handleclickSingInFeed = () => {
      navigate ('/feed')
    }


    const { control, handleSubmit, formState: { errors} } = useForm<IFormData>(
      {
        resolver: yupResolver(schema),
        mode: 'onChange',
      }
    );

    // Validação do usuário para logar no sistema
    const onSubmit = async (formData:IFormData) => {
      try {

        const {data} = await api.get(`users?email=${formData.email}&senha={formData.password}`);
        if (data.length === 1){
          navigate ('/feed')
        } else {
          alert ('Email ou senha inválido')
        }

      }
      catch{
        alert('Houve um erro, tente novamente.')
      }
    };


  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            teccnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>

        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>

            <form onSubmit={ handleSubmit (onSubmit) }>
            <Input name="nome"  control={control} placeholder="Nome completo" leftIcon={<MdPerson />} />
              <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
              <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
              <Button title="Criar minha conta" variant="secondary" onClick={handleclickSingInFeed} type="submit" />
            </form>

            <Row>
            <SubTitleLogin>
              Ao clicar em "criar minha conta", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
              <p>Já tenho conta. <a href="/login">Fazer login</a></p>
              
            </SubTitleLogin>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Account };
