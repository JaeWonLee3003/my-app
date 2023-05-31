import styled from "styled-components";

export const Wrap = styled.div `
width: 100%;
height: 100%;
flex-direction: column;
font-family: 'TheJamsil5Bold';
display:flex;
align-items: center;
justify-content: center;
background: linear-gradient(rgb(60, 135, 237), rgb(90, 184, 246));
`

export const Container = styled.div `
width: 800px;
height: 1300px;
display:flex;
flex-direction: column;
align-items: center;
background: white;
`
export const RowBox = styled.div `
display:flex;
margin: 30px 0px;
width: 400px;

`
export const Input = styled.input `
width: 150px;
height: 50px;
`
export const Button = styled.button `
border-radius: 20px;
border: 2px black solid;
`
export const List = styled.ul `
display: flex;
flex-direction: column-reverse;
justify-content: between;

`
export const Todo = styled.li `
font-family: 'TheJamsil5Bold';
display: flex;
list-style: none;
align-items: center;
border-radius: 20px;
border: 2px black solid;
margin: 10px 0px;
padding: 0px 0px 0px 20px;
width: 550px;
height: 50px;
`