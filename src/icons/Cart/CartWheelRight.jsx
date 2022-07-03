import React,  { Component } from 'react'
import  styled  from 'styled-components'

const Container = styled.div`
    position: absolute;
        left:22px;
        top: 17px;
        z-index: 1;
`


export default class CartWheelRight extends Component {
  render() {
    return (
    <Container>
      <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.68754 0.981445C1.48747 0.981445 0.498047 1.92766 0.498047 3.07515C0.498047 4.22264 1.48755 5.16886 2.68754 5.16886C3.88753 5.16886 4.87703 4.22264 4.87703 3.07515C4.85647 1.92837 3.88753 0.981445 2.68754 0.981445ZM2.68754 3.90112C2.20306 3.90112 1.82387 3.53852 1.82387 3.07523C1.82387 2.61195 2.20306 2.24935 2.68754 2.24935C3.17201 2.24935 3.55121 2.61195 3.55121 3.07523C3.55121 3.51884 3.15064 3.90112 2.68754 3.90112Z" fill="#43464E"/>
      </svg>
    </Container>
    )
  }
}
