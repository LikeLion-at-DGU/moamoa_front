import React from 'react'
import styled from 'styled-components';

import ContentBox from "../components/ContentBox";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;


`


export default function MainPage() {
  return (
    <>      
      <ContentBox/>
    </>
  )
}

