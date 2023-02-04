import styled from "styled-components";



export const Container = styled.main`

width: 100%;
max-width: 80%;
margin: 0 auto;
margin-top: 120px;

display: flex;
justify-content: space-between;
align-items: center;

`

export const Title = styled.h2`

font-family: 'Open Sans';
color: #FFFFFF;
font-style: normal;
font-weight: bold;
font-size: 32px;
width: 320px;
margin-bottom: 20px;
line-height: 44px;

`
export const Wrapper = styled.div`

max-width: 400px;

`

export const Column = styled.div`

flex: 1;

`

export const Row = styled.div`

display:  flex;
justify-content: space-between;
align-items: center;
margin-top:20px;

`

export const TitleLogin = styled.p`

font-family: 'Open Sans';
font-style: normal;
font-weight: bold;
font-size: 32px;
margin-bottom: 20px;
line-height: 44px;

`

export const SubTitleLogin = styled.p`

font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
margin-bottom: 35px;
line-height: 25px;


a {
    
    text-decoration: none;
    color: #60d394;
    margin-left: 5px;
}

&a:hover {
text-decoration: underline;

}

p{

font-family: 'Open Sans';
font-style: normal;
font-weight: bold;
font-size: 18px;
margin-top: 10px;
line-height: 25px;

}

`
export const ForgotPassword = styled.p`

font-family: 'Open Sans';
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 19px;

color: #E5E044;

`

export const CreateAccount = styled.a`

font-family: 'Open Sans';
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 19px;

color: #E23DD7;
text-decoration: none;

&:hover {
text-decoration: underline;
cursor: pointer;
}

`

export const Login = styled.p`

font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
margin-bottom: 35px;
line-height: 25px;
color: #FFFFFF;


`