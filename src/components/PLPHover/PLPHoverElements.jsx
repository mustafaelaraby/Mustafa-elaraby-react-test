import styled from "styled-components";

export const Container = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.31);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.4px);
    -webkit-backdrop-filter: blur(3.4px);
`
export const Attribute = styled.div`

`

export const AttributeTitle = styled.span`
font-size: 12px;
`

export const AttributeWrapper = styled.div`
padding: 5px 0px;
display: flex;
align-items: center;
justify-content: flex-start;
font-size: 14px;
`

export const AttributeElement = styled.div`
width: 30px;
height: 25px;
border: 1px solid black;
display: flex;
margin-right: 5px;
align-items: center;
justify-content: center;
font-size: 10px;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
cursor: pointer;
color: ${props => (props.value === props.selectedAttribute)?"white":"black"};
background-color: ${props => (props.value === props.selectedAttribute)?"black":"white"};
`

export const ColorElement = styled.div`
width: 15px;
height: 15px;
margin-right: 5px;
background-color: ${props => props = props.value};
border: 2px solid lightgray;
border-color: ${props => (props.value === props.selectedAttribute) ?"orange":props.color};
`
export const BuyContainer = styled.div`
    padding: 10px 0px;   
`
export const Quantity = styled.div`
    display: flex;

`
export const IconContaner = styled.div`
    position: relative;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const AmountContainer = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AmountText = styled.span`
`

export const AddtoCart = styled.button`
    width: 50px;
    height: 30px;
    padding: 10px 0;
    background-color: teal;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
    margin-top: 20px;
`