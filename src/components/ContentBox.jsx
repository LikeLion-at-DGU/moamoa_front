import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Content,
  ContentOuter,
  Content_Bottom,
  Content_Bottom_Header,
  Content_Slider,
  Content_Top,
  Content_Top_Map,
  Content_Top_Scrap,
  Content_Top_Scrap_Body,
  Content_Top_Scrap_Header,
} from "./Styled";
import { PiForkKnife } from "react-icons/pi";
import axios from "axios";
// import Location from './Layout/Location';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Scrap_black from "../../src/components/image/scrap_black.svg";
import Scrap_white from "../../src/components/image/scrap_white.svg";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useNavigate } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";
import Location from "./Layout/Location";

export default function ContentBox() {
  const [text, setText] = useState([]);
  const [scrapStates, setScrapStates] = useState({});

  const navigate = useNavigate();

  const mainpagescrap = async (store_id) => {
    const rsp = await axios.post(
      `http://127.0.0.1:8000/api/store/${store_id}/scrap`,
      {},
      { withCredentials: true }
    );
    fetchData();
    console.log(rsp.data);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/store/get_near_store",
        {
          withCredentials: true,
        }
      );
      setText(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("err");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const toggleScrap = (store_id) => {
    setScrapStates((prevState) => ({
      ...prevState,
      [store_id]: !prevState[store_id],
    }));
  };
  const Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
  `;
  const Slide = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    background-color: whitesmoke;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }
  `;
  const Slideimage = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 70%;
      height: 70%;
      border-radius: 8px; /* Add this line to apply rounded corners */
    }
  `;
  const Slideinfo = styled.div`
    width: 50%;
    height: 100%;
  `;
  const Sliderow = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: start;
    height: 80%;
  `;
  const Slidewrapper = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: row;
  `;
  const Sliderinfoheader = styled.div`
    width: 100%;
    height: 50%;
    font-weight: 600;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Sliderinfocontent = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: start;
    justify-content: center;
    color: #5b5f66;
    font-size: 13px;
  `;
  const handleSlideClick = (lion) => {
    navigate(`/App/${lion.name}`, { state: lion }); // Pass the lion data as state
  };
  return (
    <>
      <ContentOuter>
        <Content>
          <Content_Top>
            <Content_Top_Map>
              <Location></Location>
            </Content_Top_Map>
          </Content_Top>
          <Content_Bottom>
            <Content_Bottom_Header>
              <PiForkKnife size={"30px"} />내 주변 맛집
            </Content_Bottom_Header>
            <Content_Slider>
              <Box>
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination]}
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation
                  autoplay={{ delay: 3000 }} // 자동 재생 설정 (3초마다)
                  speed={500} // 슬라이드 전환 속도 (밀리초 단위)
                  onSwiper={(swiper) => swiper}
                  onSlideChange={() => console.log("slide change")}
                >
                  {text.map((lion, idx) => (
                    <SwiperSlide key={idx}>
                      <Slide>
                        <Slidewrapper
                          key={idx}
                          onClick={() => handleSlideClick(lion)}
                        >
                          <Slideimage>
                            <img
                              src={`http://127.0.0.1:8000${lion.images[0].image}`}
                              alt={lion.name} // Don't forget to add alt attribute for accessibility
                            />
                          </Slideimage>
                          <Slideinfo>
                            <Sliderinfoheader>{lion.name}</Sliderinfoheader>
                            <Sliderinfocontent>
                              {lion.road_address}
                              <br />
                              {lion.operation_time}
                              <br />
                              평점: {lion.ratings}/5
                            </Sliderinfocontent>
                          </Slideinfo>
                        </Slidewrapper>
                        <Sliderow>
                          <img
                            className="scrap-black-image"
                            src={
                              scrapStates[lion.store_id]
                                ? Scrap_black
                                : Scrap_white
                            }
                            onClick={() => {
                              mainpagescrap(lion.store_id);
                              toggleScrap(lion.store_id);
                            }}
                          />
                        </Sliderow>
                      </Slide>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Content_Slider>
          </Content_Bottom>
        </Content>
      </ContentOuter>
    </>
  );
}
