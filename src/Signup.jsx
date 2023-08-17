import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./Signup.css";

// const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
// const REDIRECT_URI = 'http://localhost:3000/oauth';

function Signup() {
  const navigate = useNavigate();
  const url = "http://127.0.0.1:8000/api/kakao/login";

  const goToApp = () => {
    navigate("http://127.0.0.1:8000/api/kakao/login");
  };

  const gotoMainPage = () => {
    navigate("/App/Mainpage");
  };
  const SignupBox = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const GotoAppbtn = styled.button`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 10%;
    align-items: center;
    justify-content: center;
    background-color: #fee500;
    border-radius: 8px;
    border: 1px transparent;
  `;
  const MoaMoaimg = styled.div`
    width: 60%;
    height: 60%;
  `;
  const GotoAppbox = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: 600;
    gap: 20px;
    justify-content: center;
    align-items: center;
  `;
  const Mainpagebutton = styled.div`
    width: 90px;
    height: 90px;
    background-color: transparent;
  `;
  return (
    <>
      <SignupBox>
        <Mainpagebutton onClick={gotoMainPage} width={"30px"} height={"30px"} />
        <MoaMoaimg>
          <img src={`/img/Logo4x.png`} width={"100%"} height={"100%"} />
        </MoaMoaimg>
        <GotoAppbtn onClick={() => window.open(url)}>
          <GotoAppbox>
            <img src={`/img/kakaologin.png`} width="30px" height={"30px"} />
            카카오로 원터치 로그인/회원가입
          </GotoAppbox>
        </GotoAppbtn>
      </SignupBox>
    </>
  );
}

export default Signup;
