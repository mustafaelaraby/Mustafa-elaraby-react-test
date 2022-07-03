import styled from "styled-components";


export const Container = styled.div`
margin: 0;
padding: 0;
width: 100vw;
`
export const Wrapper = styled.div`
margin: 30px;
width: 95.5%;
display: flex;
flex-direction: column;
`

export const Title = styled.h1`
padding: 0;
padding-bottom: 30px;
margin: 0;
font-family: 'Raleway', sans-serif;
`

export const ProductsContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
flex-wrap: wrap;
`
export const HoverInfo =styled.div`
    opacity: 0;
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 300px;
    left: 0;
    align-items: center;
    justify-content: flex-end;
    z-index: 2;
`
export const HoverStyle =styled.div`
    opacity: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: flex-end;
    background-color:#eee9e94a;
    z-index  : 1;
`
export const ItemContainer = styled.div`
position: relative;
padding: 10px;
width: 370px;
height: 444px;
margin: 20px;
&:hover ${HoverStyle} {
    opacity: 1;
    cursor: pointer;
}
&:hover ${HoverInfo} {
    opacity: 1;
    cursor: pointer;
}

`
export const Image = styled.img`
width: 99%;
height: 85%;
object-fit: cover;
`

export const Info = styled.div`
padding: 20px 0px;
display: flex;
flex-direction: column;
`

export const Name = styled.span`
font-size: 18px;
font-weight: 400;
`

export const Price = styled.span`
font-size: 18px;
font-weight: 600;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`
export const NotInStock =styled.div`
height: 100%;
width: 100%;
display: flex;
position: absolute;
top: 0;
left: 0;
align-items: center;
justify-content: center;
background-color:#ffffff92;   
`
export const NotInStockText = styled.h1`
    color: #1615151a;
` 


