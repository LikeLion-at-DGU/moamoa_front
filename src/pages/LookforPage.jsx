import React, { useState } from "react";
import { Content, ContentOuter } from "../components/Styled";
import NotifiModal from "../Modals/NotifiModal";
import styled from "styled-components";
import Scrap from "../components/scrap/Scrap";
function LookforPage() {
  const [notifimodalOpen, setNotifimodalOpen] = useState(false);

  const handleClick = () => {
    setNotifimodalOpen(true);

    const joinData = {
      userId,
      password,
    };
    axios
      .post("http://127.0.0.1:8000/api/login", {
        userId,
        password,
      })
      .then((lion) => {
        console.log(lion);
      })
      .catch((err) => {
        console.log(err);
      });

    instance.post("/login", {
      userId: userId,
    });
  };

  const Btn = styled.button`
    width: 90px;
    height: 30px;
    border-radius: 5px;
    font-weight: 600;
    color: white;
    background-color: #60a1ff;
    border: 1px solid transparent;
  `;
  return (
    <>
      <ContentOuter>
        <Content>
          <Scrap />
        </Content>
      </ContentOuter>
    </>
  );
}

export default LookforPage;
