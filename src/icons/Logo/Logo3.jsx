import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: absolute;
        left: 12.5px;
        top: 12px;
        z-index: 3;
`


export default class Logo3 extends Component {
  render() {
    return (
    <Container>
      <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.92324 9.69529C4.04024 9.69529 0.881348 5.86314 0.881348 1.15278C0.881348 0.90747 1.07815 0.708496 1.32109 0.708496C1.56403 0.708496 1.76084 0.907334 1.76084 1.15278C1.76084 5.3732 4.52531 8.80672 7.92337 8.80672C11.3214 8.80672 14.0859 5.3732 14.0859 1.15278C14.0859 0.90747 14.2827 0.708496 14.5257 0.708496C14.7686 0.708496 14.9654 0.907334 14.9654 1.15278C14.9653 5.86314 11.8062 9.69529 7.92324 9.69529Z" fill="white"/>
      </svg>
    </Container>
    )
  }
}
