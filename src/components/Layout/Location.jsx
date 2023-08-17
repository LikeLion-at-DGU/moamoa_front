import React, { useEffect, useState } from "react";

const Location = () => {
  const [kakaoMapLoaded, setKakaoMapLoaded] = useState(false);

  useEffect(() => {
    const loadKakaoMapScript = async () => {
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
        import.meta.env.VITE_APP_KAKAO_MAP
      }&libraries=services&autoload=false`;
      script.async = true;

      script.onload = () => {
        window.kakao.maps.load(() => {
          setKakaoMapLoaded(true);
          console.log("Kakao Map script loaded!");
        });
      };

      document.head.appendChild(script);
    };

    loadKakaoMapScript();
  }, []);

  useEffect(() => {
    if (kakaoMapLoaded) {
      const loadMap = async () => {
        // Wait for kakao.maps to be available
        await new Promise((resolve) => {
          if (window.kakao && window.kakao.maps) {
            resolve();
          } else {
            setTimeout(resolve, 100); // Wait and try again
          }
        });

        if (window.kakao && window.kakao.maps) {
          const container = document.getElementById("map");

          const options = {
            center: new window.kakao.maps.LatLng(
              37.365264512305174,
              127.10676860117488
            ),
            level: 3,
          };
          const map = new window.kakao.maps.Map(container, options);

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              function (position) {
                const userPosition = new window.kakao.maps.LatLng(
                  position.coords.latitude,
                  position.coords.longitude
                );

                const marker = new window.kakao.maps.Marker({
                  position: userPosition,
                });
                marker.setMap(map);

                map.setCenter(userPosition);
              },
              function (error) {
                console.error("사용자 위치를 받아올 수 없습니다.", error);
              }
            );
          } else {
            console.error("Geolocation is not supported by this browser.");
          }
        } else {
          console.error("Kakao Map API is not available.");
        }
      };

      loadMap();
    }
  }, [kakaoMapLoaded]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        id="map"
        style={{ width: "100%", height: "100%", borderRadius: "10px" }}
      ></div>
    </div>
  );
};

export default Location;
