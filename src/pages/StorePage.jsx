import React, { useState, useEffect } from "react";

import { Content, ContentOuter } from "../components/Styled";
import {
  StoreBmakrwrapper,
  StoreChat,
  StoreChatbottom,
  StoreChatbottominput,
  StoreChatbottomsend,
  StoreChatbottomsendtext,
  StoreChatmiddle,
  StoreChattop,
  StoreChattoplive,
  StoreKeyWord,
  StoreKeyWordcontent,
  StoreKeyWordmoamoa,
  StorePageBox,
  Storefunc,
  Storeinfo,
  Storeinfo1,
  Storeinfo1wrapper,
  Storeinfo3call,
  Storeinfo3leftheader,
  Storeinfo3leftwrapper,
  Storeinfo3place,
  Storeinfo3rightcontent,
  Storeinfo3rightheader,
  Storeinfo3rightwrapper,
  Storeinfo3takeout,
  Storeinfo3time,
  Storeinfo4header,
  Storeinfo4slide,
  Storeinfobox1,
  Storeinfobox2,
  Storeinfobox3,
  Storeinfobox4,
  Storeinfobox5,
  Storeinfobox5left,
  Storeinfobox5leftheader,
  Storeinfobox5leftpicbox,
  Storeinfobox5picleft,
  Storeinfobox5picright,
  Storeinfobox5right,
  Storeinfobox5rightcontent,
  Storeinfobox5rightheader,
  Storeinfobox5rightprofile,
  Storeinfobox5rightprofileiconbox,
  Storeinfobox5rightvalue,
  Storeinfobox5wrapper,
} from "./Pagesstyled";
import styled from "styled-components";

import { HiOutlineSpeakerphone } from "react-icons/hi";
import { GrLocation, GrRefresh, GrGallery } from "react-icons/gr";
import {
  BsClock,
  BsHouse,
  BsBookmark,
  BsChatDots,
  BsPencil,
} from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function StorePage() {
  const location = useLocation();
  const lionData = location.state;

  const Box = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Slidenotify = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    font-weight: 600;
    gap: 10px;
    background-color: #eff6fc;
    border-radius: 8px;
    font-size: 13px;
  `;
  const HoverableImage = styled.img`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    transition: transform 0.3s;
    border-radius: 8px;
    &:hover {
      transform: scale(
        1.1
      ); /* 이미지 크기를 조정하여 hover 효과를 생성합니다 */
    }
  `;
  const Slidereview = styled.div`
    width: 930px;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    border-radius: 8px;
    font-size: 10px;
    border: 1px solid black;
  `;
  const Slidersmalleview = styled.div`
    width: 300px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    border-radius: 8px;
    font-size: 10px;
    border: 1px solid black;
  `;
  const Valuebutton = styled.button`
    width: "30px";
    height: "15px";
    border: 1px solid #273345;
    border-radius: 8px;
    background-color: white;
    display: flex;
    gap: 10px;
  `;
  return (
    <>
      <ContentOuter>
        <Content>
          <StorePageBox>
            <Storeinfo>
              <Storeinfobox1>
                <Storeinfo1>
                  {/* <StoreBmakrwrapper>
                    <BsBookmark />
                  </StoreBmakrwrapper> */}
                  <Storeinfo1wrapper>
                    <HoverableImage
                      src={`http://127.0.0.1:8000${lionData.images[0].image}`}
                      width="34%"
                      height="100%"
                    />
                    <HoverableImage
                      src={`http://127.0.0.1:8000${lionData.images[1].image}`}
                      width="33%"
                      height="100%"
                    />
                    <HoverableImage
                      src={`http://127.0.0.1:8000${lionData.images[2].image}`}
                      width="33%"
                      height="100%"
                    />
                  </Storeinfo1wrapper>
                </Storeinfo1>
              </Storeinfobox1>

              <Storeinfobox2>
                <Box>
                  {lionData.boards && lionData.boards.length > 0 ? (
                    <Swiper
                      modules={[Navigation, Pagination]}
                      spaceBetween={50}
                      slidesPerView={1}
                      navigation
                      onSwiper={(swiper) => swiper}
                      onSlideChange={() => console.log("slide change")}
                    >
                      {lionData.boards.map((goat, index) => (
                        <SwiperSlide key={index}>
                          <Slidenotify>
                            <HiOutlineSpeakerphone />
                            {goat.content}
                          </Slidenotify>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <Slidenotify>
                      <HiOutlineSpeakerphone />
                      "공지사항이 등록되어있지 않습니다."
                    </Slidenotify>
                  )}
                </Box>
              </Storeinfobox2>

              <Storeinfobox3>
                <Storeinfo3leftwrapper>
                  <Storeinfo3leftheader>
                    {/* {JSON.stringify(text,null,2)} */}
                    {lionData.name}
                    <Valuebutton>
                      <BsPencil />
                      평가하기
                    </Valuebutton>
                  </Storeinfo3leftheader>

                  <Storeinfo3place>
                    <CiLocationOn color="#5B5F66" />
                    {lionData.road_address}
                  </Storeinfo3place>
                  <Storeinfo3time>
                    <BsClock />
                    {lionData.operation_time}
                  </Storeinfo3time>
                  <Storeinfo3takeout>
                    <BsHouse />
                    {lionData.store_other_data}
                  </Storeinfo3takeout>
                  <Storeinfo3call>
                    <IoCallOutline />
                    {lionData.store_num}
                  </Storeinfo3call>
                </Storeinfo3leftwrapper>
                <Storeinfo3rightwrapper>
                  <Storeinfo3rightheader>메뉴정보</Storeinfo3rightheader>
                  <Storeinfo3rightcontent>
                    {lionData.menus.map((menu, index) => (
                      <div key={index}>
                        {menu.name}: {menu.price}
                      </div>
                    ))}
                  </Storeinfo3rightcontent>
                </Storeinfo3rightwrapper>
              </Storeinfobox3>
              <Storeinfobox4>
                <Storeinfo4header>
                  방문자 리뷰
                  <img src={`/img/star.png`} width="20px" height="20px" />
                  평점:{lionData.ratings}
                </Storeinfo4header>
                <Storeinfo4slide>
                  <Box>
                    <Swiper
                      // install Swiper modules
                      modules={[Navigation, Pagination]}
                      spaceBetween={5}
                      slidesPerView={3}
                      navigation
                      onSwiper={(swiper) => swiper}
                      onSlideChange={() => console.log("slide change")}
                    >
                      <SwiperSlide>
                        <Slidersmalleview></Slidersmalleview>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Slidersmalleview></Slidersmalleview>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Slidersmalleview>리뷰3</Slidersmalleview>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Slidersmalleview>리뷰4</Slidersmalleview>
                      </SwiperSlide>
                    </Swiper>
                  </Box>
                </Storeinfo4slide>
              </Storeinfobox4>
              <Storeinfobox5>
                <Box>
                  <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination]}
                    spaceBetween={5}
                    slidesPerView={1}
                    navigation
                    onSwiper={(swiper) => swiper}
                    onSlideChange={() => console.log("slide change")}
                  >
                    <SwiperSlide>
                      <Slidereview>
                        <Storeinfobox5wrapper>
                          <Storeinfobox5left>
                            <Storeinfobox5leftheader>
                              상세 리뷰
                            </Storeinfobox5leftheader>
                            <Storeinfobox5leftpicbox>
                              <Storeinfobox5picleft>
                                {lionData.reviews[0].images[0]?.image ? (
                                  <img
                                    src={`http://127.0.0.1:8000${lionData.reviews[0].images[0].image}`}
                                    width={"100%"}
                                    height={"100%"}
                                  />
                                ) : null}
                              </Storeinfobox5picleft>
                              <Storeinfobox5picright>
                                등록된 사진이 없습니다
                              </Storeinfobox5picright>
                            </Storeinfobox5leftpicbox>
                          </Storeinfobox5left>
                          <Storeinfobox5right>
                            <Storeinfobox5rightheader>
                              <Storeinfobox5rightprofile>
                                <Storeinfobox5rightprofileiconbox></Storeinfobox5rightprofileiconbox>
                                {lionData.reviews[0].username}
                              </Storeinfobox5rightprofile>
                              <Storeinfobox5rightvalue>
                                평점:{lionData.reviews[0].rating}
                              </Storeinfobox5rightvalue>
                            </Storeinfobox5rightheader>
                            <Storeinfobox5rightcontent>
                              {lionData.reviews[0].content}
                            </Storeinfobox5rightcontent>
                          </Storeinfobox5right>
                        </Storeinfobox5wrapper>
                      </Slidereview>
                    </SwiperSlide>
                  </Swiper>
                </Box>
              </Storeinfobox5>
            </Storeinfo>
            {/* <Storefunc>
              <StoreChat>
                <StoreChattop>
                  <StoreChattoplive>
                    <BsChatDots fontSize={"20px"} />
                    실시간 채팅
                  </StoreChattoplive>
                  <GrRefresh fontSize={"20px"} style={{ color: "white" }} />
                </StoreChattop>
                <StoreChatmiddle></StoreChatmiddle>
                <StoreChatbottom>
                  <StoreChatbottominput>
                    <input placeholder="메세지를 입력해주세요"></input>
                  </StoreChatbottominput>
                  <StoreChatbottomsend>
                    <GrGallery />
                    <StoreChatbottomsendtext>보내기</StoreChatbottomsendtext>
                  </StoreChatbottomsend>
                </StoreChatbottom>
              </StoreChat>
              <StoreKeyWord>
                <StoreKeyWordmoamoa>모아모아</StoreKeyWordmoamoa>
                <StoreKeyWordcontent></StoreKeyWordcontent>
              </StoreKeyWord>
            </Storefunc> */}
          </StorePageBox>
        </Content>
      </ContentOuter>
    </>
  );
}

export default StorePage;
