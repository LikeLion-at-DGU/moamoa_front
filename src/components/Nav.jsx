import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import {
  Navbar,
  MainLogo,
  Nav_Pages,
  StoreMap,
  LookforFav,
  Navbar_Menu,
  Navbar_Logout,
  Nav_Logout_Box,
  MyreviewBox,
} from "./Styled";

import { BsPerson, BsMap, BsBullseye } from "react-icons/bs";
import { GrAd } from "react-icons/gr";
import { AiOutlineBell } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { GrEmptyCircle } from "react-icons/gr";
import { HiPencilAlt } from "react-icons/hi";

export default function Nav() {
  const navigate = useNavigate();
  const GotoSignUp = () => {
    navigate("/");
  };

  const activeStyle = {
    backgroundColor: "#60A1FF",
    color: "#ffffff ",
    textDecoration: "none",
    width: "100%",
    height: "100%",
    borderRadius: "10px",
  };
  const nonactiveStyle = {
    backgroundColor: "#F3F7FC",
    color: "#000000",
    textDecoration: "none",
    width: "100%",
    height: "100%",
    borderRadius: "10px",
  };

  return (
    <>
      <Navbar>
        <Navbar_Menu>
          <MainLogo>
            <img src={`/img/Moamoalogo.png`} width="100%" height="48%" />
          </MainLogo>

          <Nav_Pages>
            <NavLink
              to={"/App/Mainpage"}
              style={({ isActive }) =>
                isActive ? activeStyle : nonactiveStyle
              }
            >
              <StoreMap>
                <BsMap />
                맛집 지도
              </StoreMap>
            </NavLink>

            <NavLink
              to={"/App/LookforPage"}
              style={({ isActive }) =>
                isActive ? activeStyle : nonactiveStyle
              }
            >
              <LookforFav>
                <BsBullseye />
                취향 둘러보기
              </LookforFav>
            </NavLink>

            <NavLink
              to={"/App/Myreview"}
              style={({ isActive }) =>
                isActive ? activeStyle : nonactiveStyle
              }
            >
              <MyreviewBox>
                <HiPencilAlt />
                리뷰 관리
              </MyreviewBox>
            </NavLink>
          </Nav_Pages>
        </Navbar_Menu>

        <Navbar_Logout>
          <Nav_Logout_Box onClick={GotoSignUp}>
            <MdLogout />
            로그아웃
          </Nav_Logout_Box>
        </Navbar_Logout>
      </Navbar>
    </>
  );
}
