import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { 
    Navbar,MainLogo,Nav_Pages,Nav_MyPage,Nav_Notifi, StoreMap, LookforFav, Nav_Notifi_Box, Nav_Notifi_Content, Nav_Notifi_Header, Nav_Notifi_memo
} from './Styled';
import { BsBell, BsMap } from "react-icons/bs";
import { GrAd } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Nav() {
    const navigate = useNavigate();

    const goToMyPage = () => {
        navigate("/mypage");
    }

    return (
        <>
            <Navbar>
                <MainLogo>                   
                    로고로고                  
                </MainLogo>

                <Nav_Pages>               
                    <StoreMap>
                        <BsMap/>
                        맛집 지도
                    </StoreMap>                    
                    <LookforFav>
                        <GrAd/>
                        취향 둘러보기
                    </LookforFav>
                </Nav_Pages>
                <Nav_MyPage onClick={goToMyPage}>
                    <BsPerson size={"30px"}/>마이페이지
                </Nav_MyPage>
                <Nav_Notifi>
                    <Nav_Notifi_Box>
                        <Nav_Notifi_Content>
                            <Nav_Notifi_Header>
                                <BsBell/>
                                알림
                            </Nav_Notifi_Header>
                            <Nav_Notifi_memo>

                            </Nav_Notifi_memo>
                        </Nav_Notifi_Content>                        
                    </Nav_Notifi_Box>
                </Nav_Notifi>

            </Navbar>
        </>

    )
}