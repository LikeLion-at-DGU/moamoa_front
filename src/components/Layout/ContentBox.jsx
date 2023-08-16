import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Content, ContentOuter, Content_Bottom, Content_Bottom_Header, Content_Slider, Content_Top, Content_Top_Map, Content_Top_Scrap, Content_Top_Scrap_Body, Content_Top_Scrap_Header } from './Styled';
import { PiForkKnife } from "react-icons/pi";
import axiosInstance from '../../api/api';

export default function ContentBox() {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        axiosInstance.get('/api/store')
            .then(response => {
                console.log('API Response:', response.data); // 이 부분을 이곳으로 이동
                setStores(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <ContentOuter>
                <Content>
                    <Content_Top>
                        <Content_Top_Map>Map</Content_Top_Map>
                        <Content_Top_Scrap>
                            <Content_Top_Scrap_Header>
                                스크랩
                            </Content_Top_Scrap_Header>
                            <Content_Top_Scrap_Body>
                                내가 스크랩한거
                            </Content_Top_Scrap_Body>
                        </Content_Top_Scrap>
                    </Content_Top>
                    <Content_Bottom>
                        <Content_Bottom_Header>
                            <PiForkKnife size={"30px"}/>내 주변 맛집
                        </Content_Bottom_Header>
                        <Content_Slider/>
                    </Content_Bottom>
                </Content>
            </ContentOuter>
        </>
    )
}
