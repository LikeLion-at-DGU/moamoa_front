import React from "react";
import styled from 'styled-components';
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";


export const NotifiContainer = styled.div`
    position: fixed;
    /* z-index: 1200; */
    width: 40%;
    height: 50%;
    background-color:transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    background-color: #273345;
;
`

export const NotifiModalCloseBtn = styled.button`
    z-index: 1000;
    color: white;
    position: relative;
    right:-45%;
    top:5%;
    font-size:20px;
    background-color: transparent;
    border:1px transparent;
;
`




export default function NotifiModal({
    setNotifimodalOpen
}){
    return (
        <>
            <NotifiContainer>
                
                    <NotifiModalCloseBtn onClick={()=> setNotifimodalOpen(false)}>
                    
                        X
                    </NotifiModalCloseBtn>
                
            </NotifiContainer>
            
        </>
    )
    
    
}